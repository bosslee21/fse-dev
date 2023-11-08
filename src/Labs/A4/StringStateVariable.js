import React,{useState} from "react";

function StringStateVariables() {
    const [name, setName] = useState('Mary');
    const [age, setAge] = useState(25);
    const [address, setAddress] = useState('123 Main St');
    const [city, setCity] = useState('Anytown');
    const [state, setState] = useState('CA');
    const [zip, setZip] = useState('12345');
    const [phone, setPhone] = useState('555-555-5555');

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setName(event.target.value );
    }

   return(
    <div>
        <h2>String State Varibles</h2>
            <h3>Name: {name}</h3>
            <input value={name} onChange={handleNameChange }></input>

            <h3>Address: {address}</h3>
            <input value={address} onChange={(event) => setAddress(event.target.value)}></input>

            <h3>City</h3>
            <input value={city} onChange={(event) => setCity(event.target.value)}></input>
    </div>
   );
}
export default StringStateVariables;