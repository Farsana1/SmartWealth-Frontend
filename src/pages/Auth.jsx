import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginApi, registerApi, sendOtp, verifyOtp } from "../services/allApi";
import Cookies from 'js-cookie';

function Auth({ register, login }) {

  const [verificationOtp, setVerificationOtp] = useState(false)
  const [verified, setVeriifed] = useState("")

  const [authData, setAuthData] = useState({
    name: '',
    email: '',
    password: ""
  })
  console.log(authData);

  const navigate = useNavigate()

  const handleRegister = async () => {
    const { name, email, password } = authData;
    try {
      if (!name || !email || !password) {
        toast.info("Please fill in all the details 😊");
        return;
      }
      const result = await registerApi(authData);
      if (result.error) {
        toast.error(result.message);
      } else {
        toast.success("Successfully registered");
        setAuthData({ name: "", email: "", password: "" });
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleLogin = async () => {
    const { email, password } = authData;
    try {
      if (!email || !password) {
        toast.warning("Please fill in all the details 😊");
        return;
      }
      const result = await loginApi(authData);
      if (result.error) {
        toast.error(result.message);
      } else {
        console.log("Login successful");
        //  console.log(result);

        sessionStorage.setItem("user", JSON.stringify(result.data));
        setAuthData({ name: "", email: "", password: "" });
        setVerificationOtp(true)
        getUser()

        const sendingOtp = await sendOtp(result.data._id)
        console.log(sendingOtp);

        // handleVerifyOtp()

        //  const verifyOtp 


        // navigate("/");


      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const inputRefs = React.useRef([])

  const handleInput = (e,index)=>{
      if(e.target.value.length > 0 && index<inputRefs.current.length-1){
        inputRefs.current[index+1].focus()
      }
  }
const handlekeyDown = (e,index) => {
  if(e.key === 'Backspace' && e.target.value === '' &&index > 0 ){
    inputRefs.current[index-1].focus()
  }
}

const handlePaste = (e)=>{
  const paste = e.clipboardData.getData('text')
  const pasteArray = paste.split('')
  pasteArray.forEach((char,index) => {
    if(inputRefs.current[index])
      {
       inputRefs.current[index].value = char
      }
  })
}

const getUser = async()=>{
try {
  const result = await getUserData()
  if(result.status == 200){
    toast.success("User Details")
  }
} catch (error) {
  
}
}

const onSubmitHandle = async(e)=>{
  try {
    e.preventDefault()
    const otpArray = inputRefs.current.map(e=>e.value)
    const otp = otpArray.join('')
    const data = await verifyOtp(otp)
    if(data.status == 200){
      toast.success('Otp verified successfully')
      getUser()
      navigate('/')
    }
    else{
      toast.warn(data.data)
    }

  } 
  catch (error) {
    toast.error("Something went wrong")
  }

}

  return (
    <div className="container-fluid p-4" style={{ backgroundColor: '#001f3f' }}>
      {/* Register Section */}
      {register && (
        <div className="d-flex justify-content-center align-items-center w-100 vh-100">
          <div className="border shadow bg-light p-3">
            <div className="p-4" style={{ backgroundColor: "#50E3C2" }}>
              <h2 className="text-center mt-3">Register</h2>
              <input
                type="text" onChange={(e) => setAuthData({ ...authData, name: e.target.value })}
                placeholder="Username"
                className="transparent form-control mb-3" value={authData.name}
              />
              <input
                type="text" onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
                placeholder="Email" value={authData.email}
                className="transparent form-control mb-3"
              />
              <input
                type="password" onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
                placeholder="Password" value={authData.password}
                className="form-control mb-3"
              />
              <div className="d-flex justify-content-between align-items-center">
                <p role="button" className="cursor-pointer" onClick={() => navigate('/login')}>Already a user? <span> Login</span> </p>
                {/* <p className="text-end text-muted">Forgot Password?</p> */}
              </div>
              <button className="btn btn-primary w-100" onClick={handleRegister}>Register</button>
            </div>
          </div>
        </div>
      )}

      {/* Login Section */}
      {login &&
        <div>
          {!verificationOtp && <div className="d-flex justify-content-center align-items-center w-100 vh-100">
            <div className="border shadow bg-light p-3">
              {/* <div>
              <img
                src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-58-930_512.gif"
                alt="Login Illustration"
                className="img-fluid"
              />
            </div> */}
              <div className="p-4" style={{ backgroundColor: "#50E3C2" }}>
                <h2 className="text-center mt-3">Login</h2>
                <input
                  type="text" onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
                  placeholder="Email" value={authData.email}
                  className="transparent form-control mb-3"
                />
                <input
                  type="password"
                  placeholder="Password" value={authData.password}
                  className="form-control mb-3" onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
                />
                <div className="d-flex justify-content-between align-items-center">
                  <p role="button" className="cursor-pointer" onClick={() => navigate('/register')}>Not a registered User? <span> Register</span> </p>
                  {/* <p className="text-end text-muted">Forgot Password?</p> */}
                </div>
                <button className="btn btn-primary w-100 cursor-pointer" onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>}

          {/* OTP Section */}
          {verificationOtp && <div className="row justify-content-center mt-5">
            <div className="col-md-4 p-4 text-center">
              <Card className="shadow">
                <h3 className="mt-5">Enter OTP</h3>
                <div className="d-flex justify-content-center mb-3" onPaste={handlePaste}>
                    {
                      Array(4).fill(0).map((_,index)=>(
                        <input 
                      className="mx-1 text-center"
                      type="text"
                      maxLength="1" 
                      key={index}
                      style={{
                        width: "40px",
                        height: "40px",
                        fontSize: "1.5rem",
                        textAlign: "center",
                      }} required
                      ref={e=>inputRefs.current[index]=e}
                      onInput={(e)=>handleInput(e,index)}
                      onKeyDown={(e)=>handlekeyDown(e,index)}
                    />
                      ))
                    }
                
                </div>
                <div className="p-3">
                  <p className="text-secondary">10 s</p>
                 <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-primary" onClick={onSubmitHandle}
                    >
                      Verify OTP
                    </button>
                    <button disabled className="btn btn-secondary ms-2">
                      Resend
                    </button>
                 </div>
                </div>
              </Card>
            </div>
          </div>}

          {/* Success Section */}
          {verified && <div className="text-center mt-5">
            <img
              src="https://media.tenor.com/Hw7f-4l0zgEAAAAM/check-green.gif"
              alt="Success"
              className="img-fluid"
              style={{ maxWidth: "150px" }}
            />
          </div>}
        </div>}

      <ToastContainer position='top-center' autoClose={2000} theme="colored" />
    </div>
  );
}

export default Auth;
