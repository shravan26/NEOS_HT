const {db, admin} = require('../utils/admin');
const config = require('../utils/config');
const {
    validateSignUpData,
    validateLoginData
} = require('../utils/validators')
const firebase = require('firebase');
firebase.initializeApp(config);

exports.signup = (req,res) => {
    const newUser = {
        centerName : req.body.centerName,
        branch : req.body.branch,
        companyIncorporationNumber : req.body.companyIncorporationNumber,
        contactNumber : req.body.contactNumber,
        email : req.body.email,
        password : req.body.password,
        confirmPassword : req.body.confirmPassword,
    };
    const {valid,errors} = validateSignUpData(newUser);
    if(!valid) return res.status(400).json(errors);
    let token;
    db.doc(`/scanCenters/${newUser.centerName}`).get()
    .then((doc) => {
        if(doc.branch === newUser.branch){
            return res.status(400).json({ 
                branch : "This branch of the center already exists",
            })
        }
        else{
            return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
        }
    })
    .then((data) => {
        userId = data.user.uid;
        return data.user.getIdToken();
    })
    .then((idToken) => {
        token = idToken;
        const userCredentials = {
            email : newUser.email, 
            centerName : newUser.centerName,
            branch : newUser.branch,
            contactNumber : newUser.contactNumber,
            companyIncorporationNumber : newUser.companyIncorporationNumber,
            userId
        };
        return db.doc(`/scanCenters/${newUser.centerName}`).set(userCredentials);
    })
    .then(()=>{
        return res.status(201).json({
            token,
        });
    })
    .catch((err)=>{
        console.error(err);
        if(err.code === "auth/email-already-in-use"){
            return res.status(400).json({
                email : "Email already in use",
            })
        }
        else {
            return res.status(400).json({
                error : err.message,
            })
        }
    })
}

exports.login = (req,res) => {
    const user = {
        email : req.body.email, 
        password : req.body.password
    }
    const {valid,errors} = validateLoginData(user);
    if(!valid) return res.status(400).json(errors);

    //Logging in the scanCenter
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)
    .then((data) => {
        return data.user.getIdToken();
    })
    .then((token) => {
        return res.status(200).json({
            token
        })
    })
    .catch((err) => {
        console.error(err);
        if(err.code === "auth/wrong-password"){
            return res.status(403).json({
                general : "Wrong credentials, Please try again",
            });
        } else return res.status(500).json({
            message : "Please make sure you have logged in with the correct credentials"
        })
    });
};