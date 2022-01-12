import { useContext } from "react";
import {StatusHistoryContext} from "../StatusHistoryContext"

const TicketDetailsHeading = ({handleContentBx}) => {
    const { ticketContentStatus } = useContext(StatusHistoryContext)
    
    
    return ( 
        <div className="td-heading-bx" onClick={handleContentBx}>
            <h3>Ticket Details </h3>
            {ticketContentStatus && <ChevronUp />}
            {ticketContentStatus || <ChevronDown />}
        </div>
     );
}

const ChevronUp = () => {
    return ( <i className="far fa-chevron-up"></i> );
}

const ChevronDown = () => {
    return (<i className="far fa-chevron-down"></i>)
}  
 
export default TicketDetailsHeading;