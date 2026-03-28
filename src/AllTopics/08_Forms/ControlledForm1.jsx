import {useState} from "react";

const ControlledForm1 = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();     // stops page reload on form submission
        console.log("Full Name : ", firstName + " " + lastName);
        let data = {fullName : {firstName, lastName}};
        console.log(data);
        console.log("Form Submitted");
        setMessage(`Welcome ${firstName} ${lastName}, you have successfully submitted the form!`);

        // clear the form after submission
        setFirstName("");
        setLastName("");
    }
    

  return (
    <div>
        <h1>Learn Controlled Form 1</h1>

        <form action="post" onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name : </label>
            <input type="text" id="firstname" value={firstName} onChange={handleFirstName}/>
            <br />
            <br />
            <label htmlFor="lastname">Last Name : </label>
            <input type="text" id="lastname" value={lastName} onChange={handleLastName}/>
            <br />
            <br />

            <button type="submit">Submit</button>
            
        </form>
        {message && <h2>{message}</h2>}
    </div>
    );
};

export default ControlledForm1; 