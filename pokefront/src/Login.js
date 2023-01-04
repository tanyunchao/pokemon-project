import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Login = ({auth, tokensetter}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const formData = { username, password};

    const onSubmit = e => {
        e.preventDefault();
        //check whether user is auth and return token if authenticated
        fetch('http://localhost:8000/auth/jwt/create', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(res => {
            if(!res.ok) {
                throw Error('incorrect login credentials')
            }
            return res.json()
        }).then(data => {
            tokensetter(data['access']);
            auth(true);
            console.log(data['access'])
        })
        //login(email, password)
    }

    //check whether user authenticated
    //redirect to the homepage

    return ( 
        <div className="login">
            <div>
                <form onSubmit={onSubmit}>
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

                    <button>Sign in</button>
                </form>
            </div>

            <br />
            <Link className='signuplink' to="/signup">No Account? Sign up here!</Link>
        </div>
    );
}
 
export default Login;