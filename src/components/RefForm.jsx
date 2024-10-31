import { useEffect, useRef } from "react";

export default function RefForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(phoneRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input ref={emailRef} defaultValue={'blah@bhal.com'} type="email" name="email" />
        <br />
        <input ref={phoneRef} type="text" name="phone" />
        <br />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
}
