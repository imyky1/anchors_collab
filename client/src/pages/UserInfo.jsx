import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
import './UserInfo.css'
import axios from "axios";

const UserInfo = () => {
    const navigate = useNavigate();
    const [linkedInProfile,setLinkedinProfile] = useState("");
    const [MobileNumber,setMobileNumber] = useState("");
    const [referalCode,setreferalCode] = useState("");
    const [error, setError] = useState("");

    const saveDeatails = async() => {
      try{
        if (!linkedInProfile || !MobileNumber) {
          setError("Please fill in both LinkedIn profile and Mobile number.");
          return;
        }
        const response = await axios.post("http://localhost:3000/user/saveinfo",{
          name:'yash',
          email:'@gmail',
          picture : '',
          mobile : MobileNumber,
          refered_code:referalCode,
          linkedinProfile:linkedInProfile
        })
        if(response.data){
          // console.log(response)
          navigate('/otp-verify')
        }else{
          console.log(response)
        }
      }catch(e){
        console.log("error saving data",e.response.data.error)
        setError(e.response.data.error)
      }
        
    }
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
        {error && (
          <div className="toast">
            <p onClick={() => setError("")}>{error}</p>
          </div>
        )}
      </div>
      <footer className="footer">
        <button onClick={saveDeatails}>
           Continue →
        </button>
        
      </footer>
    </div>
  );
};
export default UserInfo;
