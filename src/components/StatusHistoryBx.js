const StatusHistoryBx = ({status, date, time, comment}) => {
    return (   
    <div className="status-history-bx" style={{marginBottom: '2rem'}}>
    <div className="status-bx status-item-1">
        <div className="bold-text">Status</div>
        <div className="status">{status}</div>
    </div>

    <div className="status-item-2">
        <h4>Date & Time</h4>
        <p>{date}:{time}</p>
    </div>

    <div className="status-item-3">
        <h4>Comment</h4>
        <p>{comment}</p>
    </div>
</div> );
}
 
export default StatusHistoryBx;