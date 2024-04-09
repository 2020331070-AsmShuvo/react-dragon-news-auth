import React, { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";
const Login = () => {
  const {signIn}= useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('password'));
        const email = form.get('email');
        const password = form.get('password');
        
        signIn(email, password)
        .then(res=>{
          console.log(res.user);
          // navigate after login
          navigate(location?.state ? location.state : "/");
        })
        .catch(err=>{
          console.log(err)
        })
    }

  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="hero-content w-full flex-col lg:flex-row-reverse">
          
          <div className="card w-full max-w-sm ">
            <form onSubmit={handleLogin} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="ml-9">Don't have an account <Link className="underline text-blue-700 font-semibold" to="/register">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
