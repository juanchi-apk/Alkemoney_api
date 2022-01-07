const jwt = require('jsonwebtoken')

const authUser = async function(req,res, next) {
  const token  = req.headers.authorization?.split(" ")[1];
  const isNormalAuth = token.length < 500;
  let userID;
  try {
    let decodedData;
    if (token && isNormalAuth){
      console.log(token)
      decodedData = jwt.verify(token, process.env.SESSION_SECRET);
     userID = decodedData?.id;
      }else{
      decodedData = jwt.decode(token);
     userID = decodedData?.sub;
    console.log(userID)
    }
    
    return next()

  }catch (error) {
    console.log(error);
  }   
}

module.exports = authUser