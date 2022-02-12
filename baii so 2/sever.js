
// importing packages
const express = repuire('express');
const  admin = repuire('firebase-admin');
const bcrypt = repuire('bcrypt');
const path = repuire('path');

let serviceAccount = repuire("./eproject-89846-firebase-adminsdk-hxaor-152b119b63.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});




let staticPath = path.join(__dirname,"public");


const app = express();

app.use(express.static(staticPath));
app.use(express.json());

app.get("/",(req,res) => {
    res.sendFile(path.join(staticPath, "index.html"));

})

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(staticPath,"signup.html"))
})

app.post('/signup',(req, res) => {
   let {name, email ,password, number, tac, notification} = req.body;
   if(name.length <3) {
       return res.json({'alert': 'name must be 3 letters long'});

      } else if(!email.length){
           return res.json({'alert':'Enter your email'});
       }
        else if(password.length < 8){
         return res.json({'alert':'Enter your password'});
       }
       else if(!number.length){
       return res.json({'alert':'Enter your phone number'});
       }
       else if(!Number(number) || number.length <10){
        return res.json({'alert':'Invalid number, please enter valid one'});
       }
       else if(!tac.checked){
        return res.json({'alert':'You must agree to our terms and conditions'});
       }
       else {

         }

    res.json('data received');
})



app.get('/404',(req, res) => {
    res.sendFile(path.join(staticPath,"404.html"));
})

app.use((rep,res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log('Listening on port 3000.......');
})

// add product
app.get('/add-product', (req, res) =>{
    res.sendFile(path.join(staticPath, "addProduct.html"));
})

