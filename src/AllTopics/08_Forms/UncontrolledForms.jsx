import {useRef} from "react";

const UncontrolledForms = () => {

    const emailRef = useRef(""); // {current : undefined}
    const passwordRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        // console.log("Email : ", emailRef.current.value);
        // console.log("Password : ", passwordRef.current.value);
        let user = {
            email : emailRef.current.value,
            password: passwordRef.current.value,
        };
        console.log(user);
    };

    return (
        <div>
            <h1 className="text-center text-4xl">Uncontrolled Forms</h1>

            <form className="flex flex-col items-center p-5 gap-5" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter email" className="border p-1" ref={emailRef} />
                <input type="password" placeholder="Enter password" className="border p-1" ref={passwordRef} />
                <button type="submit" className="bg-blue-200 py-1 px-5">Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledForms;