import React from 'react'

export default function SimpleForm() {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.name.value)
        console.log(event.target.email.value)
        console.log(event.target.phone.value)
    //   console.log('form submitted')
    }
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' />
        <br />
        <input type="email" name='email' />
        <br />
        <input type="text" name='phone' />
        <br />
        <input type="submit" value={'Submit'} />
      </form>
    </div>
  )
}
