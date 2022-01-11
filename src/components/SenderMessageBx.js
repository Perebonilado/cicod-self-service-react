const SenderMessageBx = ({name, date, time, message}) => {
    return ( <div className="chat-bx sh-cb">
                    
    <div className="sender-details-bx">
        <p>By {name}</p>
        <div className="circle-bx"><div className="circle"></div></div>
        <div className="chat-date">@ {time}, {date}</div>
    </div>

    <div className="message-bx sh-mb">{message}</div>

</div> );
}

 
export default SenderMessageBx;