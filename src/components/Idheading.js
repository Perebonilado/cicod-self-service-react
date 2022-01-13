import { useState } from 'react'
import InputField from './InputField'
import Button from './Button'

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
                    <InputField 
            inputVal={inputVal}
            handleInput={(e)=>handleInput(e)}
        />
        <Button text={'Track'} />
            </form>

    
        </div>
        
    </section>

    <div className="hr"></div>

        </>
     );
}
 
export default Idheading;