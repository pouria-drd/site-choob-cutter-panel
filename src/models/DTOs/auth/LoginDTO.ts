interface RequestSessionDTO {
    email: string;
    password: string;
    captchaGuid: string;
    captchaAnswer: string;
}

interface LoginDTO {
    email: string;
    sessionToken: string;
}

interface CaptchaDTO {
    guid: string;
    captcha: string;
}

interface SessionDTO {
    email: string;
    token: string;
}
