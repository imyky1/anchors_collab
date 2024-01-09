import React,{useState} from "react";
import './success.css'
const Success = () => {
    const [code,setCode] = useState("anchors.in/partnership?r..")
    const [currentUser, setCurrentUser] = useState("Ravi Ahirwar")
    const [leaderboard, setLeaderboard] = useState([
        { name: 'Aesha Agarwal', count: 32 },
        { name: 'Ravi Ahirwar', count: 0 },
        { name: 'Dhruv singh', count: 30 },
        { name: 'Ravi prakash', count: 28 },
        { name: 'Yash Yadav', count: 17 },
        { name: 'Yuvraj Singh', count: 20 }
    ]);

    const copyContent = () => {
        const contentToCopy = 'Content you want to copy'; // Replace with your content
        
        navigator.clipboard.writeText(contentToCopy)
          .then(() => {
            alert('Content copied to clipboard!');
          })
          .catch((error) => {
            console.error('Error copying content: ', error);
          });
      };
      const sortedLeaderboard = [...leaderboard].sort((a, b) => b.count - a.count);
      // Finding index of currentUser in the sorted leaderboard
      const currentUserIndex = sortedLeaderboard.findIndex(item => item.name === currentUser);
      console.log(currentUser , currentUserIndex)
    return(
        <div className="success_container">
        <header className="header">
          <div className="logo"><img src="/image 5.png" alt="" /></div>
          <div>Ravindra Kumar <img src="" alt="" /></div>
        </header>
        <div className="content">
          
          <div className="text">
            <img src="/success.svg" alt="" />
            <h1>Congratulations! <br /> You are on the anchors waitlist!</h1>
            <div className="input_field"><img src="/internet.svg" alt="" /><input type="text" name="" value={code} id="" /><img onClick={copyContent} src="/copy.svg" alt="" className="copy" /></div>
            <p>Share your referral link to your friends to climb the leaderboard and secure early access.</p>
          </div>
          <div className="leaderboard">
            <h1>Referral Leaderboard</h1>
            <p>Top 200 Referral will get early access to collaborated with brand</p>
            <table>
                    <thead>
                        <tr style={{background: "#F5F5F5"}}>
                            <th className="index">Rank</th>
                            <th className="name">Name</th>
                            <th className="count">Referral Count</th>
                        </tr>
                    </thead>
                    <tbody>
                    {currentUserIndex !== -1 && (
                                    <tr className="current">
                                        <td className="index">{currentUserIndex + 1}</td>
                                        <td className="name">You</td>
                                        <td className="count">{sortedLeaderboard[currentUserIndex].count}</td>
                                    </tr>
                    )}
                        {sortedLeaderboard.map((item, index) => (
                            item.name !== currentUser &&<tr key={index}>
                                <td className="index">{index + 1}</td> {/* Index starts from 0, so add 1 */}
                                <td className="name">{item.name.split(' ')[0]}</td>
                                <td className="count">{item.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
        </div>
       
      </div>
    )
}
export default Success