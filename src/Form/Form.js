import React, { useState } from 'react';
import {FaPen} from "react-icons/fa";
import { useRegisterMutation, useLoginMutation } from '../AppApi/Api';
import { useNavigate } from 'react-router-dom';
import img from "../Form/image/NoProfile.png";
const GameForm = () => {
  const navigate = useNavigate();
  const [activeForm, setactiveForm] = useState(false);
  const [upload,setUpload] = useState(null);
  const [FormLogin, setFormLogin] = useState({
    username: '',
    password: '',
  })
  const [LoginError, setLoginError] = useState({
    username: '',
    password: ''
  })
  const [Form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  })
  const [formErrors, setFormErrors] = useState({
    username: '',
    password: '',
    confirmPassword: "",
    upload: '',
  });

  const HandleChangeLog = (e) =>{
    setFormLogin({ ...FormLogin, [e.target.name]: e.target.value });
    setLoginError({ ...LoginError, [e.target.name]: '' }); // clear the error message
  }

  const handleToRegister = () =>{
    setactiveForm(true);
  }

  const handleToLogin = () =>{
    setactiveForm(false);
  }
  const handleChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' }); // clear the error message
  }

  const [register, { isLoading: isRegisterLoading, error: registerError }] = useRegisterMutation();
  const [login, {isLoading: isLoginLoading, error: loginError}] = useLoginMutation();
  const handleSubmitReg = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const newFormErrors = { ...formErrors };
    let newErrorCount = 0;
  
    try {
      if (Form.username === "") {
        newFormErrors.username = "Please enter your username";
        newErrorCount++;
      }
  
      if (!upload) {
        newFormErrors.upload = "Please upload your profile";
        newErrorCount++;
      }
  
      if (Form.password === "") {
        newFormErrors.password = "Please enter your password";
        newErrorCount++;
      } else if (Form.password.trim().length < 5) {
        newFormErrors.password = "Password must be at least 5 characters long";
        newErrorCount++;
      }
  
      if (Form.confirmPassword === "") {
        newFormErrors.confirmPassword = "Please confirm your password";
        newErrorCount++;
      } else if (Form.password !== Form.confirmPassword) {
        newFormErrors.confirmPassword = "Passwords do not match";
        newErrorCount++;
      }
  
      if (newErrorCount > 0) {
        return setFormErrors(newFormErrors);
      }
   
      if(newErrorCount === 0){
        await register({
          Username: Form.username,
          password: Form.password,
          image: upload,
        }).unwrap();
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const base64image = (file) =>{
    return new Promise((resolve, reject)=>{
      const fileReader = new FileReader();
  
      fileReader.readAsDataURL(file);
  
      fileReader.onload = () =>{
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) =>{
        reject(error)
      }
    })
  }
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = 200;
      canvas.height = 200;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(async (blob) => {
        const base64 = await base64image(blob);
        setUpload(base64);
        setFormErrors({ ...formErrors, upload: '' }); // clear the error message
      }, "image/jpeg", 1);
    };
  };

  const handleSubmitLog = async (e) =>{
    e.preventDefault();
    const newFormErrors = { ...LoginError };
    let newErrorCount = 0;
  
    try {
      if (FormLogin.username === "") {
        newFormErrors.username = "Please enter your username";
        newErrorCount++;
      }
  
      if (FormLogin.password === "") {
        newFormErrors.password = "Please enter your password";
        newErrorCount++;
      }
  
      if (newErrorCount > 0) {
        return setLoginError(newFormErrors);
      }
   
      if(newErrorCount === 0){
        await login({
          Username: FormLogin.username,
          password: FormLogin.password
        }).unwrap();

        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <React.Fragment>
      {activeForm ? (
        <React.Fragment>
          <div className={`bg-gray-900 min-h-screen flex items-center justify-center pt-5 pb-5 ${activeForm ? 'rotate-0' : 'rotate-180'} `}>
          <div className="w-[350px] px-6 py-8 bg-gray-100 rounded-lg shadow-lg mt-[80px]">
            <div className={`text-center bg-[red] text-white p-2 mb-1 rounded-[10px] font-gillsanbold ${registerError  ? 'block' : 'hidden'}`}>{registerError  && registerError.data.msg}</div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center font-lemon">Register Account</h2>
            <form onSubmit={handleSubmitReg}>
              <div className="mb-4">
              <div className="mb-2">
              <div className="flex justify-center items-center">
              <div style={{boxShadow: "7px 7px 10px 5px rgba(0,0,0,0.25)"}} className="w-[6.5rem] h-[6.5rem] rounded-full bg-white flex justify-center items-center shadow-lg relative p-2">
                <input
                  accept="image/jpeg, image/png"
                  id="upload-photo"
                  name="uploadPhoto"
                  onChange={(e) => uploadImage(e)}
                  type="file"
                  className="hidden"
                />
                <label htmlFor="upload-photo" className="cursor-pointer">
                  <img
                    className="rounded-full"
                    src={upload === "" || upload === null ? img : upload}
                    alt="profile"
                    style={{ width: "100%", height: "100%" }}
                  />
                </label>
                <div className="flex justify-center items-center absolute top-1 right-1 w-8 h-8 rounded-full bg-white">
                  <FaPen />
                </div>
              </div>
            </div>
            {formErrors.upload && (
              <p className='text-[red] font-bold ml-[2px] mt-[3px] text-center mt-[15px]'>{formErrors.upload}</p>
            )}
              </div>
                <label htmlFor="username" className="block text-gray-800 font-semibold mb-2">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder='Username'
                  value={Form.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {formErrors.username && (
                  <p className='text-[red] font-bold ml-[2px] mt-[3px]'>{formErrors.username}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-800 font-semibold mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder='Password'
                  value={Form.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {formErrors.password && (
                  <p className='text-[red] font-bold ml-[2px] mt-[3px]'>{formErrors.password}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-800 font-semibold mb-2">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder='Confirm password'
                  value={Form.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {formErrors.confirmPassword && (
                  <p className='text-[red] font-bold ml-[2px] mt-[3px]'>{formErrors.confirmPassword}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600 transition duration-300"
              >
                {isRegisterLoading ? <div>Loading...</div> : 'Register'}
              </button>
              <div className='flex justify-center items-center mt-5'>
                <button onClick={handleToLogin} type='button' className='cursor-pointer font-lemon underline'>Login</button>
              </div>
            </form>
          </div>
        </div>
        </React.Fragment>
      ) : (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center pt-5 pb-5">
        <div className="w-[350px] px-6 py-8 bg-gray-100 rounded-lg shadow-lg mt-[80px]">
          <div className={`text-center bg-[red] text-white p-2 mb-1 rounded-[10px] font-gillsanbold ${loginError ? 'block' : 'hidden'}`}>{loginError && loginError.data.msg}</div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center font-lemon">Login Account</h2>
          <form onSubmit={handleSubmitLog}>
            <div className="mb-4">
            <div className="mb-2">
            </div>
              <label htmlFor="username" className="block text-gray-800 font-semibold mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder='Username'
                value={FormLogin.username}
                onChange={HandleChangeLog}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {LoginError.username && (
                <p className='text-[red] font-bold ml-[2px] mt-[3px]'>{LoginError.username}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-800 font-semibold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder='Password'
                value={FormLogin.password}
                onChange={HandleChangeLog}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {LoginError.password && (
                <p className='text-[red] font-bold ml-[2px] mt-[3px]'>{LoginError.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              {isLoginLoading ? <div>Loading...</div> : 'Login'}
            </button>
            <div className='flex justify-center items-center mt-5'>
              <button onClick={handleToRegister} type='button' className='cursor-pointer font-lemon underline'>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      )}
    </React.Fragment>
  );
};

export default GameForm;
