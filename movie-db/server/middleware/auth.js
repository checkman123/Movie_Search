import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; // 500+ would be googleAuth

    let decodedData;

    //get custom userid 
    if (token && isCustomAuth) { 
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {//get userid from GoogleAuth
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;