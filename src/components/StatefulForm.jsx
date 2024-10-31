import { useState } from "react";

export default function StatefulForm() {
    const [email, setEmail] = useState(null)
    const [name, setName] = useState('Rojoni')
    const [phone, setPhone] = useState(+880)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

    if(phone.length < 11) {
        setError('Phone number must contain 11 numbers')
    }
    else {
        setError('')
        console.log(name, email, phone)
    }

        // console.log(name)
        // console.log(phone)
    }
    
    const handleName = (e) => {
      setName(e.target.value)
    }
    
    const handleEmail = (e) => {
    //   console.log(e.target.value)
    setEmail(e.target.value)
    }
    
    const handlePhone = (e) => {
      setPhone(e.target.value)
    }
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleName} value={'rojoni'} type="text" name="name" />
        <br />
        <input
            onChange={handleEmail}
        type="email" name="email" />
        <br />
        <input onChange={handlePhone} type="number" name="phone" />
        <br />
        <input type="submit" value={"Submit"} />
      </form>
      {
        error && <p style={{
            color: 'red'
        }}>{error}</p>
      }
    </div>
  );
}
