import useInputState from "../hooks/useinputState";

export default function HookForm() {
    const emailState = useInputState('nury@nur.com')
    // const [name, handleNameChange] = useInputState('nury')

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('form data', emailState.value)
    //   console.log('form data', name)
    }
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
        <br />
        <input {...emailState} type="email" name="email" />
        <br />
        <input type="text" name="phone" />
        <br />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
}
