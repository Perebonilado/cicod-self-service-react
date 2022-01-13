import { useFetch } from "../useFetch";

import { useContext } from "react";
import {MessagesContext} from '../MessagesContext'

const MessageBox = () => {

    
    const messages = useContext(MessagesContext)
    
    return ( <>
        {messages.map((message)=>{
            return(
            <ResponseBx 
            key={message.id}
                name={message.senderName}
                date={message.senderDate}
                time={message.senderTime}
                isReply={message.isReply}
                attachment={message.attachment}
                message={message.senderMessage}
            />)
        })}
    </> );
}


const ResponseBx = ({ name, date, time, message, attachment, isReply }) => {
    return ( <div className={isReply ? 'chat-bx sh-cb reply-bx' : 'chat-bx sh-cb'}>
                    
    <div className="sender-details-bx">
        <p>{name}</p>
        <div className="circle-bx"><div className="circle"></div></div>
        <div className="chat-date">@ {time}, {date}</div>
    </div>

    <div className="message-bx sh-mb">{message}</div>

    {attachment && <div className="attach-bx">
        <div className="bold-text"><img src="https://res.cloudinary.com/dt0wfaxft/image/upload/v1641987482/Group_7894_rquput.svg" alt="attatch document" /> Attachments</div>
        <div className="blue-text">{attachment}</div>
    </div>}

</div> );
}
 
export default MessageBox;