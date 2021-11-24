const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/olympics",{
    useNewUrlParser: true
}).then(()=> {
    console.log("connection succcessfull");
}).catch((err)=>{
    console.log('connection fail');
})


// const mongoose = require('mongoose')


// mongoose.connect("mongodb://localhost:27017/my-pp",{
//     useNewUrlParser: "true"
// }).then(()=>{
//     console.log("connection successful.......");
// }).catch((error)=>{
//     console.log(error);
// })