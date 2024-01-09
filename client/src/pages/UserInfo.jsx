import React,{useState} from "react";
import './UserInfo.css'

const UserInfo = () => {
    const [linkedInProfile,setLinkedinProfile] = useState("");
    const [MobileNumber,setMobileNumber] = useState("");
    const [referalCode,setreferalCode] = useState("");
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
        <form className="userform" action="">
           <div className="input_field"><img src="/linkedinSmall.svg" alt="" /><input type="text" value={linkedInProfile} onChange={(e)=>setLinkedinProfile(e.target.value)} placeholder="Enter your linkedIn profile" /></div> 
            <div className="input_field"><img src="/call.svg" alt="" /><input type="text" value={MobileNumber} onChange={(e)=>setMobileNumber(e.target.value)} placeholder="+919876543210" /></div>
            <div className="input_field"><img src="/referal.svg" alt="" /><input type="text" value={referalCode} onChange={(e)=>setreferalCode(e.target.value)} placeholder="Enter your referral code" /></div>
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
export default UserInfo;
