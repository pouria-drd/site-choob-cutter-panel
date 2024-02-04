export default function validateInputs(requestSessionDTO: RequestSessionDTO) {
    if (!requestSessionDTO.email) {
        return "ایمیل را وارد کنید";
    }
    else if (!requestSessionDTO.password) {
        return "رمز را وارد کنید";
    }
    else if (!requestSessionDTO.captchaAnswer) {
        return "عبارت امنیتی را وارد کنید";

    } else {
        return false
    }
}
