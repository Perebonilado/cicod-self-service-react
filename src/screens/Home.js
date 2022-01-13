import '../App.css'
import '../Mobile.css'
import { useState } from 'react'
import InputField from '../components/InputField'
import Button from '../components/Button'


const Home = () => {
    
    const [inputVal, setInputVal] = useState('')
    const handleInput = (e) => {
        setInputVal((prevState)=>{
            prevState = e.target.value
            return prevState
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputVal)
    }

    return ( <>
        <section className="main-content">

<div>
    <img src="https://res.cloudinary.com/dt0wfaxft/image/upload/v1641987362/Group_7886_sjnm4n.svg" alt="computer" />
    <p className="track-tix-bx">Track your tickets and orders,<br /> Make payment for your order</p>
    <p>Check the status of your ticket or your order and engage</p>

    <form action="/" method="GET" className="input-bx home" onSubmit={handleSubmit}>
        
        <InputField 
            inputVal={inputVal}
            handleInput={(e)=>handleInput(e)}
        />
        <Button text={'Track'} />
    </form>
</div>

    </section>
    </> 
    );
}
 
export default Home;