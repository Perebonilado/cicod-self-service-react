const MessageTextField = ({handleClose, handleChange, newMsg, handleSave}) => {
    return ( 
    <div className="chat-bx ti-cb reply-bx">
                    
    <div className="sender-heading-bx">
        <div><i className="fas fa-reply"></i> Reply</div>
        <div onClick={handleClose}>Close</div>
    </div>

    <textarea name="newMessage" id="newMessage" cols="20" rows="10" className="message-bx sh-mb" value={newMsg} onChange={handleChange}></textarea>

    <div className="attach-bx">
        <a href="" type="submit" className="link btn" onClick={handleSave}>Save</a>
        <a href="" className="link btn"><img src="https://res.cloudinary.com/dt0wfaxft/image/upload/v1641987482/Group_7894_rquput.svg" alt="attach-document" /> Attach file</a>
        <div>Document1.pdf <img src="https://res.cloudinary.com/dt0wfaxft/image/upload/v1641997779/Path_4059_axlmhy.svg" alt="" /></div>
    </div>

    </div>
     );
}
 
export default MessageTextField;