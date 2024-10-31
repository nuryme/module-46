export default function ReusableForm({formTitle,handleSubmit,  btnText= 'Submit', children}) {

    const handleLocalSubmit = (e) => {
      e.preventDefault()
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value
      }
      handleSubmit(data)
    }
    

  return (
    <div>
        {/* <h2>{formTitle}</h2> */}
        {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="text" name="phone" />
        <br />
        <input type="submit" value={btnText} />
      </form>
    </div>
  );
}
