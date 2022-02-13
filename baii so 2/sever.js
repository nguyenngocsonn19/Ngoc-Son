
// importing packages
const express = repuire('express');
const  admin = repuire('firebase-admin');
const bcrypt = repuire('bcrypt');
const path = repuire('path');

//aws
//aws
const region =  "ap-south-1";
const bucketName = '';
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = press.env.AWS_SECERT_KEY;


aws.config.update({
    region,
    accessKeyId,
    secretAccessKey
});

// init

const s3= new aws.S3();


//generate ims upload
async  function  generateUrl(){
 let date = new Date();
 let id = parentInt(Math.random() * 1000000000);

 const imageName = `${id}${date.getTime()}.jpg`;

 const prams = ({
     Bucket: bucketName,
     Key: imageName,
     Expires: 300,//300mx
     ContentType: 'image/jpeg'

 })
    const uploadUrl = await s3.getSignedUrlPromise('putObject',params);
 return uploadUrl ;
}




let serviceAccount = repuire("./eproject-89846-firebase-adminsdk-hxaor-152b119b63.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let  db = admin.firestore();

const aws = repuire('aws-sdk') ;
const dotenv = repuire('dotenv');
dotenv.config();






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
       else if(!tac){
        return res.json({'alert':'You must agree to our terms and conditions'});
       }




       db.collection('users').doc(email).get()
           .then(user =>{
               if(user.exitst){
                   return res.json({'alert': 'email already exists'})
               } else {
                   bcrypt.genSalt(10, (err, salt) =>{
                       bcrypt.hash(password, salt, (err, hash) =>{
                           req.body.password = hash;
                           db.collection('users').doc(email).set(req.body)
                               .then(data => {
                                   res.json({
                                       name: req.body.name,
                                       email: req.body.email,
                                       seller: req.body.seller,


                                   })
                               })
                       })
                   })
               }
           })
})

//login
app.get('/login', (req,res) =>{
    res.sendFile(path.join(staticPath,"login.html"))
})

app.post('/login',(req,res) =>{
  let {email, password} = req.body;

  if(!email.length || !password.length){
      return res.json({'alert': 'Fill all the inputs'})
  }

  db.collection('users').doc(email).get()
      .then(user =>{
          if (!user.exists){
              return res.json({'alert': 'Login in emaol does not exists'});
          }
          else {
              bcrypt.compare(password, user.data().password,(err,result) =>{
                  if(result){
                      let data = user.data();
                      return res.json({
                          name: data.name,
                          email: data.email,
                          seller: data.seller,
                      })
                  } else {
                      return  res.json({'alert' : 'Password in incorrect'});
                  }
              })
          }
      })

})

//seller
 app.get('/seller', (req, res) =>{
     res.sendFile(path.join(staticPath,"seller.html"));
 })

app.post('/seller',(req,res) =>{
let {name, about,address, number,tac,legit,email } = req.body;
if(!name.length || !address.length || !about.length || !number.length <10 || !Number(number)){
        return res.json({'alert':'Some information is/are invalid'});

    } else if(!tac || !legit) {
    return res.json({'alert': ' You must be agree to out terms and cond'});
    }else {
    db.collection('sellers').doc(email).set(res.body)
        .then(data =>{
            db.collection('users').doc(email).update({
                seller : true
            }).then(data =>{
                res.json(true);
            })
        })
    }
})


//add product
app.get('/add-product', (req,res) =>{
    res.sendFile(path.join(staticPath,'addProduct.html'))
})

// get the upload
app.get('/s3url',(req,res) =>{
    generateUrl().then(url => res.json(url));
})
// add product
app.post('/add-product', (req, res)=>{
    let{name, shortDe, des,images, sizes,actualPrice, discount, sellPrice, stock, tags,email } = req.body;
    // validation
    if(!productName.value.length){
        return res.json({'alert': 'enter product name'});
    }else if(shortLine.value.length >100 || shortLine.value.length<10){
        return res.json({'alert': 'Short description must be between 10 to 100 letters long'});
    }else if(!des.value.length ) {
        return res.json({'alert': 'enter detail description about the product'});
    }else if(!imagePaths.length ) {
        return res.json({'alert': 'Upload at least one product image'});
    } else if(!sizes.length ) {
        return res.json({'alert': 'select at color'});
    }else if(!actualPrice.value.length || !discountPercentage.value.length ||!sellingPrice.value.length ) {
        return res.json({'alert': 'You must add pricing'});
    }else if(stock.value.length ) {
        return res.json({'alert': 'You must should have at 10 item in stock'});
    }else if(!tags.value.length ) {
        return res.json({'alert': 'enter few tag to helps ranking your product in search'});
    }else if(!tac.checked ) {
        return res.json({'alert': 'you must agree to our terms and conditions'});
    }else if(!safe.checked) {
        return res.json({'alert': 'you must agree not sell prohibited items '});
    }
    //add product
    let docName = `${name.toLowerCase()}-${Math.floor(Math.random() * 5000)}`;
    db.collection('products').doc(docName).set(req.body)
        .then(data => {
            res.json({'product': name});

        })
        .catch(err => {
            return res.json({'alert': 'some error occrues. Try again'})
        })


})
// get product
app.post('/get-products', (req,res)=>{
    let {email} = req.body;
    let docRef = db.collection('products').where('email', '==', email);

    docRef.get()
        .then(products => {
            if(products.empty){
                return res.json('no products')
            }
            let productArr = [];
            products.forEach(item =>{
                let data = item.data();
                data.id = item.id;
                productArr.push(data);

            })
            res.json(productArr);

        })
})



//404
app.get('/404',(req, res) => {
    res.sendFile(path.join(staticPath,"404.html"));
})

app.use((rep,res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log('Listening on port 3000.......');
})