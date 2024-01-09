import React,{useState} from "react";
import './UserInfo.css'

const OtpVerify = () => {
    const [otp,setotp] = useState("");
  return (
    <div className="info_container">
      <header className="header">
        <div className="logo">
          <img src="/image 5.png" alt="" />
        </div>
      </header>
      <div className="content">
        <img src="/celebrate.svg" alt="" />
        <div className="text">
          <h1>
            Welcome, Ravi
          </h1>
          <p>
            Please fill this to secure your spot
          </p>
        </div>
        <p style={{ fontFamily:"Public sans",textAlign:'center',fontWeight:'400',color:'#757575'}}>
            OTP sent to this number  <b>+919876543210</b> <img src="edit.svg" alt="" /> <br /> Please enter OTP to continue
        </p>
        <form className="userform" action="">
           <div className="input_field"><img src="/otp.svg" alt="" /><input type="text" value={otp} onChange={(e)=>setotp(e.target.value)} placeholder="OTP" /></div> 
            
        </form>
      </div>
      <footer className="footer">
        <button>
           Continue →
        </button>
      </footer>
    </div>
  );
};
export default OtpVerify;
