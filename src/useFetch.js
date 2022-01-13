import { useState, useEffect } from 'react'

export const useFetch=()=>{
    const [status, setStatus] = useState('')
    const [ticketId, setTicketId] = useState('')
    const [date, setTicketDate] = useState('')
    const [messages, setMessages] = useState([])
    const [addMessageStatus, setMessageStatus] = useState(false)
    const [newMsg, setNewMsg] = useState('')
    const [ticketContentStatus, setTicketContentStatus] = useState(true)
    const [customerInfo, setCustomerInfo] = useState('')
    const [ticketsArray, setTicketsArray] = useState([])

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
        senderMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum error fuga quibusdam ducimus dicta at accusantium dolorum.',
        isReply: true,
        attachment: 'Document 1'
        },
    
        {
        id: 311,
        senderName: 'James OluwaSeun',
        senderTime: '14:04:15',
        senderDate: 'Thursday Jul 16, 2021',
        senderMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum error fuga quibusdam ducimus dicta at accusantium dolorum.',
        isReply: false,
        attachment: ''
        },
    
        {
        id: 341,
        senderName: 'James OluwaSeun',
        senderTime: '14:04:15',
        senderDate: 'Thursday Jul 16, 2021',
        senderMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum error fuga quibusdam ducimus dicta at accusantium dolorum.',
        isReply: true,
        attachment: ''
        },
    
        {
        id: 141,
        senderName: 'James OluwaSeun',
        senderTime: '14:04:15',
        senderDate: 'Thursday Jul 16, 2021',
        senderMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum error fuga quibusdam ducimus dicta at accusantium dolorum.',
        isReply: false,
        attachment: 'Document 23'
        },
    
    ]

    const responseData = [
        {
        id: 221,
        date: 'Thursday Jul 16, 2021',
        time: '14;04:15',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum error fuga quibusdam ducimus dicta at accusantium dolorum.',
        attach: 'Document1.pdf'
    }]

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

    return {setMessageStatus, setNewMsg, setTicketContentStatus,setMessages, setCustomerInfo, setTicketsArray, status, setStatus, ticketId, setTicketId, date, setTicketDate, messages, addMessageStatus, newMsg, ticketContentStatus, customerInfo, ticketsArray, responseData}


}