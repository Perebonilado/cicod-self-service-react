import Status from "./Status";
import DateTime from './DateTime'
import MessageTextField from "./MessageTextField";
import {useFetch} from '../useFetch'
import MessageBox from "./MessageBox";
import { MessagesContext } from '../MessagesContext'

const ConversationContainer = () => {
    
    const {setMessageStatus, setNewMsg, setMessages,  messages, addMessageStatus, newMsg} = useFetch()
    

    const handleClose = () =>{
        setMessageStatus((prevState)=>{
            prevState = false
            return prevState
        })
    }

    const handleChange = (e) => {
        setNewMsg((prevState)=>{
            prevState = e.target.value
            return prevState
        })
    }

    const handleSave = (e) => {
        e.preventDefault()
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const days = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

        const year = new Date().getFullYear()
        const date = new Date().getUTCDate()
        const month = months[new Date().getMonth()]
        const day = days[new Date().getDay()]
        let hours = new Date().getHours()
        hours < 10 ? hours =`0${hours}` : hours = `${hours}`
        let minutes = new Date().getMinutes()
        minutes < 10 ? minutes =`0${minutes}` : minutes = `${minutes}`
        let seconds = new Date().getSeconds()
        seconds < 10 ? seconds =`0${seconds}` : seconds = `${seconds}`

        if (newMsg) {
            const newMessage = { id: new Date().getTime().toString(), senderDate: `${day} ${month} ${date}, ${year}`, senderName: 'By Me', senderTime: `${hours}:${minutes}:${seconds}`, senderMessage: newMsg, attachment: 'Document3.pdf'}
            setMessages([...messages, newMessage])
            setNewMsg('')
       }

    }


    return ( 
        <MessagesContext.Provider value={messages}>
        <section className="con-container">


        <div className="con-heading-bx">
            <p>Here are the information about your ticket</p>
            <p className="bold-text">Engage with us on the Conversation section</p>
        </div>

        <div className="current-status-bx">

            <div className="cs-title bold-text">Current Status</div>

            <div className="status-date-bx">
                <div className="status-bx">
                    <div className="bold-text">Status</div>
                    <Status status={'Under Investigation'}/>
                </div>

                <div className="date-bx">
                    <div className="bold-text">Date & Time</div>
                    <DateTime date={'20-12-18'} time={'18:3:00'}/>
                </div>

            </div>
            
            <div className="conversation-container">
                <div className="bold-text">Conversation</div>
                
                <MessageBox />

                </div>

                {addMessageStatus && <MessageTextField handleClose={handleClose} newMsg={newMsg} handleChange={(e)=>handleChange(e)} handleSave={(e)=>handleSave(e)}/>}

    
                <div className="reply-icon-bx" onClick={()=>{
                    setMessageStatus((prevState)=>{
                        prevState = true
                        return prevState
                    })
                }}><img src="https://res.cloudinary.com/dt0wfaxft/image/upload/v1642073612/Group_7841_acikuh.svg" alt="" /> Reply</div>
            </div>

        </section>
        </MessagesContext.Provider>
  
     );
}
 
export default ConversationContainer;