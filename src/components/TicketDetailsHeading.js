import { useContext } from "react";
import StatusHistoryContext from "../screens/StatusHistory"

const TicketDetailsHeading = ({handleContentBx}) => {
    const { ticketContentStatus, setTicketContentStatus } = useContext(StatusHistoryContext)
    
    
    return ( 
        <div className="td-heading-bx" onClick={handleContentBx}>
            <h3>Ticket Details </h3>
            <i className="far fa-chevron-down"></i>
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