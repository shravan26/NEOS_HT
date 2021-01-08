const {admin,db} = require('../utils/admin')

exports.FBAuth = (req,res,next) => {
    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer ')
    ) {
        var idToken = req.headers.authorization.split('Bearer ')[1];
    }
    else return res.status(403).json({ error : "Not authorized" });
    admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
        req.user = decodedToken;
        return db
        .collection("users")
        .where("userId","==",req.user.uid)
        .limit(1)
        .get()
    })
    .then((data) => {
        req.user.centerName = data.docs[0].data().centerName;
        req.user.branch = data.docs[0].data().branch;
        return next();
    })
    .catch((err) =>{
        console.error(err);
        return res.status(403).json(err);
    })

}