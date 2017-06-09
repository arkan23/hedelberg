import express from 'express';
import fetch from 'isomorphic-fetch';
import fs from 'fs';
//import config from './config/index.js';


const app=express();


function parseFile(){
      let promise=new Promise((resolve,reject)=>{
        fs.readFile("test.html",(err,data)=>{

          let xmlString=data.toString();
          console.log(xmlString);

          if(err==true){
            reject();
          }else {
            resolve();
          }
        });

          /*if(true){
              setTimeout(()=>{resolve();console.log("visa accepted")},3000)
          }else{
              reject();
          }*/
      });
      return promise;
}

async function listenHedelberg() {

    /*return new Promise((resolve,reject)=>{

    });*/
    const response=await fetch('http://localhost:4000');
    const data=await response.json();
    return data;
}

app.get('/', async (req,res)=>{

    //let data=await listenHedelberg();
    //const response=await fetch('http://localhost:4000');
    const response=await fetch('http://localhost:4000');
    const data=await response.json();
    console.log(data);
    res.json(data);
    res.end(`hello world!!!! ${response}`);

});
app.get('/parseXML', async (req,res)=>{

    //let data=await listenHedelberg();
    //const response=await fetch('http://localhost:4000');
    const response=await fetch('http://localhost:4000');
    const data=await response.json();
    console.log(data);
    res.json(data);
    res.end(`hello world!!!! ${response}`);

});
app.get('/test', async (req,res)=>{
    parseFile(); //parse
    //let data=await listenHedelberg();
    //const response=await fetch('http://localhost:4000');
    res.end(`hello world!!!!`);

});
app.listen(/*config.get('port')*/3000,()=>{
    console.log("server is run__!!");
});
