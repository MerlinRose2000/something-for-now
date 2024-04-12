//import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./Components/registration/RegistrationPage";
import Contact from "../Components/contact/Contact";

function App() {
  return (
    <>
      <div>
        <h1>Hello, welcome to something-for-now!</h1>
        <Registration />
        <Contact />
      </div>
    </>
  );
}

export default App;
