import Idheading from "../components/Idheading";
import React from 'react'
import { useFetch } from "../useFetch";
import TicketDetailsContent from "../components/TicketDetailsContent";
import { StatusHistoryContext } from "../StatusHistoryContext";
import TicketDetailsHeading from "../components/TicketDetailsHeading";
import StatusHistoryThread from "../components/StatusHistoryThread";
import ConversationContainer from "../components/ConversationContainer";


const StatusHistory = () => {

    const {setTicketContentStatus, ticketId, date, setTicketDate,  ticketContentStatus, customerInfo, ticketsArray} = useFetch()

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
        
     <div className="sh-heading-bx">
            <h3>Status History</h3>
            <p>If you have questions or issues with this ticket, <b>reply on the comment section on the Current Status</b></p>
    </div>
        <StatusHistoryThread />
    </section>

        </StatusHistoryContext.Provider> );
    }

    
  

 
export default StatusHistory;