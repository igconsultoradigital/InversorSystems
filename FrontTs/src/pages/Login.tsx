import React, { SyntheticEvent, useState } from 'react';
import { Navigate  } from 'react-router-dom';

const Login = () => {
    
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('https://localhost:7232/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                user,
                password,
            })
        });
        setRedirect(true);
    }
  if(redirect){
            return <Navigate to="/" />;
        }
    return (
       /* <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <input type="text" className="form-control" placeholder="Usuario" /*required
                        onChange={e => setUser(e.target.value)} />

                    <input type="password" className="form-control" placeholder="Password" /*required
                        onChange={e => setPassword(e.target.value)} />

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
        </div>*/
        <div className="container mt-5">
            <div className="justify-content-center form-bg-image row img-background-login" >
                <div className="d-flex align-items-center justify-content-center col-12">
                    <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                        <div className="text-center text-md-center mb-4 mt-md-0">
                            <h3 className="mb-0">Sign in to our platform</h3>
                        </div>
                        <form className="mt-4" onSubmit={submit}>
                        <div id="email" className="mb-4">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                                    </svg>
                                </span>
                                <input required placeholder="Ingrese su email o usuario" type="text" className="form-control" 
                                 onChange={e => setUser(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div id="password" className="mb-4">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="unlock-alt" className="svg-inline--fa fa-unlock-alt fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor" d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zM264 408c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48z"></path>
                                        </svg>
                                    </span>
                                    <input required placeholder="Password" type="password" className="form-control"
                                    onChange={e => setPassword(e.target.value)} />
                                </div>
                            </div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="">
                            <input type="checkbox" id="defaultCheck5" className="me-2 form-check-input" />
                        </div>
                        <a className="small text-end card-link">Lost password?</a>
                    </div>
                </div>
                <button type="submit" className="w-100 btn btn-primary">Sign in</button>
                </form>
                    <div className="mt-3 mb-4 text-center">
                       <span className="fw-normal">or login with</span>
                    </div>
                    
                <div className="d-flex justify-content-center align-items-center mt-4">
                    <span className="fw-normal">Not registered?
                        <a className="fw-bold card-link" href="#/examples/sign-up"> Create account </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Login;