import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/PathNames";
import { useAuth } from "../../contexts/AuthContext";
import { UserRolesEnum } from "../../enums/UserRolesEnum";
import { ToastStatusEnum, useToast } from "../../components/Toast/ToastProvider";

import validateInputs from "./LoginMethods";
import AuthService from "../../services/AuthService";

import RefreshIcon from "../../components/icons/RefreshIcon";
import Button from "../../components/custom-ui/Button/Button";
import SiteChoobIcon from "../../components/icons/SiteChoobIcon";

function LoginPage() {
    const auth = useAuth();
    const navigate = useNavigate();
    const { showToast } = useToast();
    const authService = new AuthService();

    const [captcha, setCaptcha] = useState<CaptchaDTO>();
    const [isLoginproccess, setIsLoginproccess] = useState(false);

    const [requestSessionDTO, setRequestSessionDTO] = useState<RequestSessionDTO>(
        { email: "", password: "", captchaAnswer: "", captchaGuid: "" }
    );

    const handleInputChange = (
        fieldName: keyof RequestSessionDTO,
        value: string | number | undefined
    ) => {
        setRequestSessionDTO((prevDTO) => {
            return { ...prevDTO, [fieldName]: value ?? "" };
        });
    };

    const fetchCaptcha = async () => {
        setIsLoginproccess(true);

        try {
            const result = await authService.GetCaptcha();

            setRequestSessionDTO((prevDTO) => {
                return { ...prevDTO, captchaGuid: result.guid };
            });

            setCaptcha(result);

        } catch (error) {
            showToast("مشکل در دریافت کپچا، دوباره تلاش کنید", ToastStatusEnum.Error, "خطا");
        }

        setIsLoginproccess(false);
    };

    const loginUser = async () => {
        setIsLoginproccess(true);

        try {
            const sessionJson = localStorage.getItem("session");
            if (!sessionJson) {
                fetchCaptcha();
                return;
            }

            const session: SessionDTO = JSON.parse(sessionJson);
            const dto: LoginDTO = {
                email: session.email,
                sessionToken: session.token,
            };

            const result = await authService.RequestBearer(dto);

            if (result.status) {
                sessionStorage.setItem("bearer", JSON.stringify(result.data.token));
                sessionStorage.setItem("user", JSON.stringify(result.data.user));
                let userRole: UserRolesEnum = UserRolesEnum.GUEST
                if (result.data.user.userType.role === 'Customer') userRole = UserRolesEnum.Customer
                auth.login(userRole)
                showToast(`خوش آمدی ${result.data.user.firstname}`, ToastStatusEnum.Success);
                navigate(ROUTES.HOME);
            }

        } catch (error: any) {
            fetchCaptcha();
            showToast(error.message, ToastStatusEnum.Error, "خطا");
        }

        setIsLoginproccess(false);
    };

    useEffect(() => {
        loginUser();
    }, []);

    const requestSession = async () => {
        setIsLoginproccess(true);

        try {
            const res = validateInputs(requestSessionDTO)

            if (res) {
                showToast(res, ToastStatusEnum.Warning, "خطا")
                setIsLoginproccess(false);
                return
            }

            const result = await authService.RequestSession(requestSessionDTO);

            if (result.status) {
                const session = result.data as SessionDTO;

                localStorage.setItem("session", JSON.stringify(session));
                loginUser();
            }

        } catch (error: any) {
            fetchCaptcha();
            showToast(error.message, ToastStatusEnum.Error, "خطا");
        }

        setIsLoginproccess(false);
    };

    return (
        <div className="bg-white flex flex-col items-center justify-center font-yekanX h-screen r2l ss02">
            <div className="bg-white flex flex-col items-center justify-start rounded-lg px-5 py-8 gap-8 min-w-80 max-w-[90vw]">
                <div className="flex flex-col gap-2">
                    <a href="https://sitechoob.ir" target="_blank">
                        <SiteChoobIcon className="w-40 mx-auto" />
                    </a>
                </div>

                <div className="flex flex-col w-72 gap-4">
                    <input
                        className="base-input"
                        type="email"
                        placeholder="ایمیل"
                        value={requestSessionDTO.email}
                        onChange={(e) => {
                            handleInputChange("email", e.target.value);
                        }}
                        required
                    />

                    <input
                        className="base-input"
                        type="password"
                        placeholder="رمز عبور"
                        value={requestSessionDTO.password}
                        onChange={(e) => {
                            handleInputChange("password", e.target.value);
                        }}
                        required
                    />

                    {captcha && (
                        <div className="flex items-center gap-4">
                            <div className="bg-sc-purple-normal flex items-center justify-between h-full rounded-md p-2">
                                <input
                                    className="bg-transparent outline-none text-sc-blue-normal w-1/2 text-center"
                                    type="tel"
                                    maxLength={4}
                                    placeholder="کپچا"
                                    value={requestSessionDTO.captchaAnswer}
                                    onChange={(e) => {
                                        handleInputChange("captchaAnswer", e.target.value);
                                    }}
                                    required
                                />

                                <div className="flex items-center border-r border-sc-blue-normal/30 h-full pr-2">
                                    <button
                                        onClick={fetchCaptcha}
                                        className="text-sc-gray-500 hover:rotate-[359deg]
                                         hover:text-sc-blue-normal transition-all duration-200"
                                    >
                                        <RefreshIcon />
                                    </button>
                                </div>
                            </div>

                            <div className="w-full h-full">
                                <img
                                    src={`data:image/*;base64,${captcha?.captcha}`}
                                    alt="CaptchaImage"
                                    loading="lazy"
                                    className="bg-sc-blue-normal rounded-md w-full h-full"
                                />
                            </div>
                        </div>
                    )}

                    <Button
                        onClick={requestSession}
                        disabled={isLoginproccess}
                        fullWidth={true}
                    >
                        {!isLoginproccess ? "ورود" : "لطفا صبر کید ..."}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
