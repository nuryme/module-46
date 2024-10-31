import "./App.css";
// import HookForm from "./components/HookForm";
// import RefForm from "./components/RefForm";
// import ReusableForm from "./components/ReusableForm";
// import SimpleForm from "./components/SimpleForm";
// import StatefulForm from "./components/StatefulForm";

import Context from "./components/Context";

function App() {
  // const handleSignUp = (data) => {
  //   console.log(data)
  // };

  // const handleUpdate = (data) => {
  //   console.log(data)
  // };

  return (
    <>
      {/* <h1>Vite + React</h1> */}

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        handleSubmit={handleSignUp}
        formTitle={"Sign Up"}
      >
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        handleSubmit={handleUpdate}
        formTitle={"Profile Update"}
        btnText={"Update"}
      >
        <div>
          <h2>Update Form</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
      <Context></Context>
    </>
  );
}

export default App;
