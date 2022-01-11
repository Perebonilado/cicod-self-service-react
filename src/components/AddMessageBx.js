const AddMessageBx = ({handleClose, handleChange, newMsg, handleSave}) => {
    return ( 
    <div className="chat-bx ti-cb reply-bx">
                    
    <div className="sender-heading-bx">
        <div><i className="fas fa-reply"></i> Reply</div>
        <div onClick={handleClose}>Close</div>
    </div>

    <textarea name="newMessage" id="newMessage" cols="20" rows="10" className="message-bx sh-mb" value={newMsg} onChange={handleChange}></textarea>

    <div className="attach-bx">
        <a href="" type="submit" className="link btn" onClick={handleSave}>Save</a>
        <a href="" className="link btn"><img src="./images/Group 7894.svg" alt="attach-document" /> Attach file</a>
        <div>Document1.pdf <img src="./images/Path 4059.svg" alt="" /></div>
    </div>

    </div>
     );
}

export default AddMessageBx