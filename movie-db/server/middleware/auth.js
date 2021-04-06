import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;   // 500+ would be googleAuth

        let decodedData;

        //get userid
        if(token && isCustomAuth){
            decodedData = jwt.verify(token, 'test');

            req.userId = decoded?.id;
        } else {//get userid from GoogleAuth
            decodedData = jwt.verify(token);

            req.userId = decoded?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;