import config from './config';
import express from 'express';
import ApiRouter from './api';


const server=express();

server.listen(config.port,()=>{
    console.info('Express listening on port : ',config.port);
});

server.use(express.static('public'));


server.get('/',(req,res)=>{
    res.render('index');
});

server.use('/api', ApiRouter);


