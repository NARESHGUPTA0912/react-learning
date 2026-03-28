import {useRef} from "react";

const UnControlledForms = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef);      // {current: input tag object}
        console.log(passwordRef);   // {current: input tag object}
        // console.log("Email : ", emailRef.current.value);      // gives value of input tag
        // console.log("Password : ", passwordRef.current.value);
        let user = {
            email : emailRef.current.value,
            password: passwordRef.current.value,
        };
        console.log(user);
    };

    return (
        <div>
            <h1>Learn UnControlled Forms</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter email" ref={emailRef} />
                <br/>
                <input type="password" placeholder="Enter password" ref={passwordRef} />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default UnControlledForms;