import express from 'express';
import world from './jsonMapFiles/world';
import usa from './jsonMapFiles/usa';


const ApiRouter=express.Router();

ApiRouter.get('/world',(req,res)=>{
    res.send(world);
});

ApiRouter.get('/usa',(req,res)=>{
    res.send(usa);
});
export default ApiRouter;