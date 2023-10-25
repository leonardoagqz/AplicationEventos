import React from "react";
import  "./login.css";

function Login() {
    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-sigin mx-auto">
                <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                    <label className="form-check-label label-remenber" for="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                {/* <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button> */}
                <button className="btn  w-100 py-2 btn-login" type="submit">Sign in</button>
                <div className="mt-5  w-100 text-body-secondary "> &copy; 2023–2023</div>
            </form>
        </div>


    )
}

export default Login;