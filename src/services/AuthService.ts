import AxiosBase from "./Axios/AxiosBase";

class AuthService extends AxiosBase {
    public async RequestSession(data: RequestSessionDTO): Promise<ResultDTO> {
        const url = 'auth/session';
        return this.request<ResultDTO>({ method: 'post', url, data: data });
    }

    public async GetCaptcha(): Promise<CaptchaDTO> {
        const url = 'auth/captcha';
        return this.request<CaptchaDTO>({ method: 'get', url });
    }

    public async RequestBearer(data: LoginDTO): Promise<ResultDTO> {
        const url = 'auth/login';
        return this.request<ResultDTO>({ method: 'post', url, data: data });
    }
}

export default AuthService;
