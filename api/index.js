import express from 'express';
import world from './jsonMapFiles/world';
import usa from './jsonMapFiles/usa';
import eur from './jsonMapFiles/europe';

const ApiRouter=express.Router();

ApiRouter.get('/world',(req,res)=>{
    res.send(world);
});

ApiRouter.get('/usa',(req,res)=>{
    res.send(usa);
});

ApiRouter.get('/eur',(req,res)=>{
   res.send(eur);
});

export default ApiRouter;