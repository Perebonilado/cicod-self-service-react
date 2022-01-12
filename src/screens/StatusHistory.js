import Idheading from "../components/Idheading";
import React, { useState, useEffect, useReducer, useContext } from 'react'
import AddMessageBx from '../components/AddMessageBx'
import StatusDateBx from "../components/StatusDateBx";
import ResponseBx from '../components/ResponseBx';
import SenderMessageBx from '../components/SenderMessageBx';
import TicketDetailsContent from "../components/TicketDetailsContent";
import { StatusHistoryContext } from "../StatusHistoryContext";
import TicketDetailsHeading from "../components/TicketDetailsHeading";
import StatusHistoryThread from "../components/StatusHistoryThread";


const StatusHistory = () => {

    const customerTicketDetails = {
        dateCreated: '20-12-18:3:00',
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        customerName: 'Johnson Drake',
        phone: '0932342345',
        customerEmail: 'johnson_drake@gmail.com',
        category: 'Repair',
        subCategory: 'Maintenance'
    }

    const messageData = [
        {
        id: 511,
        senderName: 'James OluwaSeun',
        senderTime: '14:04:15',
        senderDate: 'Thursday Jul 16, 2021',
        senderMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum error fuga quibusdam ducimus dicta at accusantium dolorum.'
        }]

    const responseData = [
        {
        id: 221,
        date: 'Thursday Jul 16, 2021',
        time: '14;04:15',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum error fuga quibusdam ducimus dicta at accusantium dolorum.',
        attach: 'Document1.pdf'
    }]

    const reducer = (state, action) => {

        if (action.type === 'SAVE_MESSAGE') {
            return [...state, action.payload]
        }

    }

    const [state, dispatch] = useReducer(reducer, responseData)

    const [status, setStatus] = useState('')
    const [ticketId, setTicketId] = useState('')
    const [date, setTicketDate] = useState('')
    const [messages, setMessages] = useState([])
    const [addMessageStatus, setMessageStatus] = useState(false)
    const [newMsg, setNewMsg] = useState('')
    const [ticketContentStatus, setTicketContentStatus] = useState(true)
    const [customerInfo, setCustomerInfo] = useState('')
    const [ticketsArray, setTicketsArray] = useState([])

    const ticketInfo = {
        ticketId: '923412',
        ticketStatus: 'Under Investigation',
        date: '20-12-18:3:00'
    }

    const ticketsArrayData = [
        {
            id: '1234',
            status: 'Open',
            date: '20-12-18',
            time: '18:3:00',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste soluta eius fugiat!'
        },
        
        {
            id: '4321',
            status: 'Open',
            date: '20-12-18',
            time: '18:3:00',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste soluta eius fugiat!'
        },

        {
            id: '5678',
            status: 'Open',
            date: '20-12-18',
            time: '18:3:00',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste soluta eius fugiat!'
        },

    ]

    
    useEffect(() => {
        
        const { ticketId, ticketStatus, date } = ticketInfo

       setTicketId((prevState)=>{
           prevState = ticketId
           return prevState
       })

       setStatus((prevState)=>{
           prevState = ticketStatus
           return prevState
       })

       setTicketDate((prevState)=>{
           prevState = date
           return prevState
       })

       setMessages((prevState)=>{
           prevState = messageData
           return prevState
       })

       setCustomerInfo((prevState)=>{
           prevState = customerTicketDetails
           return prevState
       })

       setTicketsArray((prevState)=>{
           prevState = ticketsArrayData
           return prevState
       })


    }, [])

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
            const newMessage = { id: new Date().getTime().toString(), date: `${day} ${month} ${date}, ${year}`, time: `${hours}:${minutes}:${seconds}`, message: newMsg, attach: 'Document3.pdf'}
            dispatch({type: 'SAVE_MESSAGE', payload: newMessage})
            setNewMsg('')
       }

    }

    const handleContentBx = () => {
        if (!ticketContentStatus) {
            setTicketContentStatus(true)
        }
        else{setTicketContentStatus(false)}
    }


    return ( 
    <StatusHistoryContext.Provider value={{ticketContentStatus, ticketsArray}}>
<Idheading ticketId={ticketId} />

<section className="con-container">


        <div className="con-heading-bx">
            <p>Here are the information about your ticket</p>
            <p className="bold-text">Engage with us on the Conversation section</p>
        </div>

        <div className="current-status-bx">

            <div className="cs-title bold-text">Current Status</div>

            <StatusDateBx status={status} date={date}/>

            <div className="conversation-container">
                <div className="bold-text">Conversation</div>
                
                {messages.map((message)=>{
                    return (
                        <SenderMessageBx key={message.id} name={message.senderName} date={message.senderDate} time={message.senderTime} message={message.senderMessage}/>
                    )
                })}
                {state.map((response)=>{
                    return (
                        <ResponseBx key={response.id} message={response.message} date={response.date} time={response.time} attachment={response.attach} />
                    )
                })}
                

                </div>

                {addMessageStatus && <AddMessageBx handleClose={handleClose} newMsg={newMsg} handleChange={(e)=>handleChange(e)} handleSave={(e)=>handleSave(e)}/>}

    
                <div className="reply-icon-bx" onClick={()=>{
                    setMessageStatus((prevState)=>{
                        prevState = true
                        return prevState
                    })
                }}><img src="./images/Group 7841.svg" alt="" /> Reply</div>
            </div>

        </section>

        <section className="ticket-details-container">
            <TicketDetailsHeading handleContentBx={handleContentBx}/>
            {ticketContentStatus && <TicketDetailsContent 
            dateCreated={customerInfo.dateCreated}
            summary={customerInfo.summary}
            description={customerInfo.description}
            customerName={customerInfo.customerName}
            phone={customerInfo.phone}
            customerEmail={customerInfo.customerEmail}
            category={customerInfo.category}
            subCategory={customerInfo.subCategory}
             />}
        </section>

        <section id="sh-thread"  className="status-history-container">
        
     <div className="sh-heading-bx">
            <h3>Status History</h3>
            <p>If you have questions or issues with this ticket, <b>reply on the comment section on the Current Status</b></p>
    </div>
        <StatusHistoryThread />
    </section>

        </StatusHistoryContext.Provider> );
    }

    
  

 
export default StatusHistory;