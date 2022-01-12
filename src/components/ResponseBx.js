const ResponseBx = ({ date, time, message, attachment }) => {
    return ( <div className="chat-bx sh-cb reply-bx">
                    
    <div className="sender-details-bx">
        <p>By Me</p>
        <div className="circle-bx"><div className="circle"></div></div>
        <div className="chat-date">@ {time}, {date}</div>
    </div>

    <div className="message-bx sh-mb">{message}</div>

    <div className="attach-bx">
        <div className="bold-text"><img src="https://res.cloudinary.com/dt0wfaxft/image/upload/v1641987482/Group_7894_rquput.svg" alt="attatch document" /> Attachments</div>
        <div className="blue-text">{attachment}</div>
    </div>

</div> );
}

export default ResponseBx