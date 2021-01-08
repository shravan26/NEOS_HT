const functions = require('firebase-functions');
const express = require('express');
const app = express();
const {db} = require('./utils/admin')
const {signup,login} = require('./handlers/user');
const cors = require('cors');
const {FBAuth} = require('./middleware/auth');
//middleware 
app.use(cors());

app.post('/signup',signup);
app.post('/login',login);

exports.api = functions.region("asia-south1").https.onRequest(app);