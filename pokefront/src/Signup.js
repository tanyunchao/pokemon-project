import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const formData = {email, username, password};

    const onSubmit = e => {
        e.preventDefault();
        //check whether user is auth and return token if authenticated
        fetch('http://localhost:8000/auth/users/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(res => {
    
            console.log(res.json())

        })

        console.log("onsubmit ran");

        //login(email, password)
    }
    return ( 
        <div className='mt-5 signupform'>
            <h1>Sign up here:</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <label>Email: </label>
                    <input 
                    required
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ></input>

                    <label>Username: </label>
                    <input 
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    ></input>

                    <label>Password: </label>
                    <input 
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <p>please enter a valid alphanumeric password longer than 8 characters</p>

                    <button>Sign in</button>
                </form>
            </div>
        </div>
     );
}
 
export default Signup;
<div>
    <h1>hello sign up man</h1>
</div>