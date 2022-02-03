import React, { SyntheticEvent, useState } from 'react';
import { Navigate  } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [referrealCode, setReferrealCode] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('https://localhost:7232/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                userName,
                password,
                name,
                lastName,
                phone,
                referrealCode:"amtongOd1DQfmYq"
            })
        });

        setRedirect(true);
    }
    if(redirect){
        return <Navigate to="/login/" />;
    }
  

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                <div className='form-group'>
                    <input type="email" className="form-control" placeholder="name@example.com" /*required*/
                        onChange={e => setEmail(e.target.value)} />

                    <input type="text" className="form-control" placeholder="Usuario" /*required*/
                        onChange={e => setUserName(e.target.value)} />

                    <input type="password" className="form-control" placeholder="Password" /*required*/
                        onChange={e => setPassword(e.target.value)} />

                    <input type="password" className="form-control" placeholder="Confirm Password" /*required*/
                        onChange={e => setPasswordConfirm(e.target.value)} />

                    <input type="text" className="form-control" placeholder="Name" /*required*/
                        onChange={e => setName(e.target.value)} />

                    <input type="text" className="form-control" placeholder="Last Name" /*required*/
                        onChange={e => setLastName(e.target.value)} />

                    <input type="text" className="form-control" placeholder="Phone" /*required*/
                        onChange={e => setPhone(e.target.value)} />
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;