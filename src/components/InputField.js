const InputField = ({inputVal, handleInput}) => {
    return ( 
    <input 
        type="text" 
        id="ticket-id" 
        placeholder="Enter ticker ID or Order ID" 
        value={inputVal} 
        onChange={handleInput}
        name='ticket-id'
        /> 
        );
}
 
export default InputField;