const express = require('express');

const {serverConfig,loggerConfig} = require("./config");

const apiRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api',apiRoutes);
const {emailConfig}  = require('./config');


app.listen(serverConfig.PORT,async  ()=>{
    console.log(`Server is running on the PORT ${serverConfig.PORT}`);
    try {
        const res = await emailConfig.mailSender.sendMail({
            from : serverConfig.GMAIL_EMAIL,
            to : 'bbiswajit1999sh@gmail.com',
            subject : 'Hello this is just testing',
            text : 'yes it is working'
        });
        console.log(res);
    }catch (error){
        console.log(error);
        throw  new error;
    }
})

