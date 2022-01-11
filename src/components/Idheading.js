import { useState } from 'react'

const Idheading = ({ticketId}) => {
    
    const [inputVal, setInputVal] = useState('')
    const handleInput = (e) => {
        setInputVal((prevState)=>{
            prevState = e.target.value
            return prevState
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return ( 
        <>
        <section className="ti-content-container">

        <div className="ticket-id-sect">
            
            <div className="tv-bx-1"><p>TICKET ID - {ticketId}</p></div>
            
            <form action="/" method="GET" className="tv-bx-2" onSubmit={handleSubmit}>
                    <p>Ticket/Order ID</p>
                    <input type="text" placeholder="Enter ticket ID/order ID" value={inputVal} onChange={(e)=>{handleInput(e)}} />
                    <a href="#" type='submit' className="btn link">Track</a>
            </form>

    
        </div>
        
    </section>

    <div className="hr"></div>

        </>
     );
}
 
export default Idheading;