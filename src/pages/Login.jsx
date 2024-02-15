import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from '../assets/image/Login-amico.png'
import { Field, Form, Formik } from "formik";


const Login = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const initialvalues1 = {
    username: "",
    password:""
   
  };
  const validateForm = () => {
    const errors = {};
    if (!username.trim()) {
      errors.username = "Username is required";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    }
  
    return errors;
  };
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
  
        navigate("/dashboard");
  
  };

  return (
    <div className="bg-white">
      <div className="md:flex w-full">
        <div className="md:w-1/2 sm:w-full ">
          <img src={img} alt="" className="w-3/4 mt-5 justify-center ml-auto mr-auto  mb-auto" />
        </div>

        <div className="min-h-screen flex items-center justify-center w-full md:w-1/2 bg-gradient-to-r from-green-500 via-green-300 to-green-500">
          <div className="max-w-md p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold  mb-6">
              Login
            </h2>
            <Formik initialValues={{initialvalues1}} validate={validateForm}>
            {(formik)=>(
            <Form>
              <div className="mb-4 ">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Username:
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className="w-full border p-2 rounded-md"
                  placeholder="Enter your username"
                  onChange={(e)=>setUsername(e.target.value)}
                  value={username}
                />
                  {!username ? (
                  <div className="validate">{formik.errors.username}</div>
                ) : null}
              </div>
              <div className="mb-6 ">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password:
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border p-2 rounded-md"
                  placeholder="Enter your password"
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                />
                  {!password ? (
                  <div className="validate">{formik.errors.password}</div>
                ) : null}
              </div>
              <button
                type="submit"
                className="w-full bg-green-500   hover:bg-white hover:outline hover:text-green-500    p-2 rounded-md "
                onClick={() => formik.handleSubmit(username && password ?handleLogin():null)}
              >
                Login
              </button>
            </Form>
            )}
            </Formik>
            <div className="mt-4 text-center  ">
              <p className="text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-green-500  hover:underline"
                >
                  Create New Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
