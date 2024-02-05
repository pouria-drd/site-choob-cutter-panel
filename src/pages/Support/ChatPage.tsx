import { useParams } from "react-router-dom";

interface UrlParams {
    chatID: string;
}


const ChatPage = () => {
    const params = useParams<{ chatID?: string; }>();
    const { chatID } = Object.assign({}, params) as UrlParams;

    return (
        <div>ChatPage {chatID}</div>
    )
}

export default ChatPage