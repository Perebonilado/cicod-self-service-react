import StatusHistoryBx from "./StatusHistoryBx";

const StatusHistoryContainer = () => {
    return ( <>
        <section id="sh-thread"  className="status-history-container">
        
        <div className="sh-heading-bx">
            <h3>Status History</h3>
            <p>If you have questions or issues with this ticket, <b>reply on the comment section on the Current Status</b></p>
        </div>

        <StatusHistoryBx />
        </section>
    </> );
}
 
export default StatusHistoryContainer;