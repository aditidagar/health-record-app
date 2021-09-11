require("dotenv").config();
const mongoose = require("mongoose");
const uri = `mongodb+srv://API_Server:${process.env.DB_PASSWD}@cluster0.tou7d.mongodb.net/${process.env.TEST_DB}?retryWrites=true&w=majority`;
before((done)=> {
    // Set up schema. Need to do it here because it
    // helps to set up all mongoose schemas we defined.
    require("../DatabaseHandler");
    // switch DB 
    mongoose.disconnect().then(()=>{
        mongoose.connect(uri,
        {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});
        done();
    }).catch(err => {
        done(err);
    });
})

after(async () => {  
    await mongoose.disconnect();
})