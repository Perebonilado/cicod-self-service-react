import StatusHistoryBx from "./StatusHistoryBx";
import { useContext } from "react";
import { StatusHistoryContext } from "../StatusHistoryContext";

const StatusHistoryThread = () => {
    
    const {ticketsArray} = useContext(StatusHistoryContext)

    return ( 

    <ul>
        {ticketsArray.map((ticket)=>{
            return (
                
                <li  key={ticket.id}>
            <img src="https://res.cloudinary.com/dt0wfaxft/image/upload/v1641983339/Icon_ionic-md-checkmark-circle_sdwlpv.svg" alt="" />
            <StatusHistoryBx status={ticket.status} date={ticket.date} time={ticket.time} comment={ticket.comment}/>
                </li>
                
            )
        })} 
</ul>
 );
}
 
export default StatusHistoryThread;