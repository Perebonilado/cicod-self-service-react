import Idheading from "../components/Idheading";
import React from 'react'
import { useFetch } from "../useFetch";
import TicketDetailsContent from "../components/TicketDetailsContent";
import { StatusHistoryContext } from "../StatusHistoryContext";
import TicketDetailsHeading from "../components/TicketDetailsHeading";
import ConversationContainer from "../components/ConversationContainer";
import StatusHistoryBx from "../components/StatusHistoryBx";


const TicketInfo = () => {

    const {setMessageStatus, setNewMsg, setTicketContentStatus,setMessages, setCustomerInfo, setTicketsArray, status, setStatus, ticketId, setTicketId, date, setTicketDate, messages, addMessageStatus, newMsg, ticketContentStatus, customerInfo, ticketsArray, responseData} = useFetch()

    const handleContentBx = () => {
        if (!ticketContentStatus) {
            setTicketContentStatus(true)
        }
        else{setTicketContentStatus(false)}
    }


    return ( 
    <StatusHistoryContext.Provider value={{ticketContentStatus, ticketsArray}}>
<Idheading ticketId={ticketId} />
<ConversationContainer />


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
        
     <div className="sh-heading-bx" style={{marginBottom:'4rem'}}>
            <h3>Status History</h3>
            <p>If you have questions or issues with this ticket, <b>reply on the comment section on the Current Status</b></p>
    </div>
        <StatusHistoryBx status={status} date={date} 
        comment={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste soluta eius fugiat!'} time={ticketsArray.time}/>
    </section>

        </StatusHistoryContext.Provider> );
    }

    
  

 
export default TicketInfo;