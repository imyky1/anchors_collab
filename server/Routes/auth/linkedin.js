const express = require("express");
const qs = require('querystring');
const axios = require('axios');
const { error } = require("console");
const router = express.Router();
const Influencer = require('../../models/Inluencer')

router.get('/linkedin', (req, res) => {
  const redirectURI = encodeURIComponent('http://localhost:3000/auth/linkedin/callback');
  const state = 'random_state_value';
  const scope = 'email profile openid';

  const linkedInAuthURL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=${redirectURI}&scope=${scope}`;

  res.json({ redirectURL: linkedInAuthURL }); // Send the LinkedIn authorization URL back to the frontend
});
// Callback URL from LinkedIn
router.get('/linkedin/callback', async (req, res) => {
  const { code, state } = req.query;

  // Verify state here if needed

  // Exchange authorization code for access token
  try {
    const tokenResponse = await axios.post(
      'https://www.linkedin.com/oauth/v2/accessToken',
      qs.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'http://localhost:3000/auth/linkedin/callback', // Same as in the initial request
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;
    // console.log(accessToken)

  //   Use the access token to fetch user data from LinkedIn API
    const userData = await axios.get('https://api.linkedin.com/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'cache-control': 'no-cache',
        'X-Restli-Protocol-Version': '2.0.0', // LinkedIn API version
      },
    });
    
    // Process and send user data back to the client
    return res.send(userData.data);
  } catch (error) {
    console.error('Error during authentication:', error);
    return res.status(500).send('Internal Server Error');
  }
});
router.post('/saveinfo',async(req,res)=>{
  try{
    const {email_verified,name,email,picture,mobile} = req.body
    if(!email_verified){
      return res.status(402).json("Not Verified")
    }
    if(!email || !name){
      return res.status(402).json("Empty data")
    }
    const founduser1 = await User.findOne({ email: email })
    if (founduser1) {
        return res.status(422).json({ error: "This email Already Exist" })
    }
    const referal_code = mobile.subString(-4)
    if (founduser1) {
      return res.status(422).json({ error: "This email Already Exist" })
    }
    const info = new Influencer({name,email,picture,mobile,referal_code})
    await info.save()
    return res.json({ message: "saved successfully" })
  }catch(e){
    console.log("error saving data",e)
    return res.status(422).json({error:"error saving user info"})
  }
})
module.exports = router;
