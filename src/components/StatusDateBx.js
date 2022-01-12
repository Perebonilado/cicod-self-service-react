const StatusDateBx = ({status, date}) => {
    return ( <>
        <div className="status-date-bx">
                <div className="status-bx">
                    <div className="bold-text">Status</div>
                    <div>{status}</div>
                </div>

                <div className="date-bx">
                    <div className="bold-text">Date & Time</div>
                    <div className="date">{date}</div>
                </div>

            </div>
    </> );
}
 
export default StatusDateBx;