import express from 'express';
//require('es6-promise').polyfill();
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

      });
      return promise;
}


function parseXMl(){
    //  let promise=new Promise((resolve,reject)=>{
        /*fs.readFile("test.html",(err,data)=>{

          let xmlString=data.toString();
          console.log(xmlString);

          if(err==true){
            reject();
          }else {
            resolve();
          }
        });*/
        var xmlResponse="";

        const response=fetch('http://localhost:4000')
          .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            //console.log(response);
            return response.text();
            })
          .then(function(stories) {
              xmlResponse=stories;
              return xmlResponse;
            });

        //const data=response.text();
        //console.log(data);
        //res.json(data);
        //res.end(`hello world!!!! ${response}`);
      //  resolve();
          /*if(true){
              setTimeout(()=>{resolve();console.log("visa accepted")},3000)
          }else{
              reject();
          }*/
    //  });
    //  return promise;
      console.log(response);
      //return response;
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

app.get('/asyncXML', async (req,res)=>{

    //let data=await listenHedelberg();
    //const response=await fetch('http://localhost:4000');
    const response=await fetch('http://localhost:4000');
    const data=await response.text();
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
app.get('/test',(req,res)=>{
  //  parseFile(); //parse

    //let data=await listenHedelberg();
    //const response=await fetch('http://localhost:4000');
    var xmlResponse="1";
    const response=fetch('http://localhost:4000')
      .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        //console.log(response);
        return response.text();
        })
      .then(function(stories) {
          xmlResponse=stories;
          console.log(xmlResponse);
          //res.end(xmlResponse);
        });
    res.end(xmlResponse);

});
app.listen(/*config.get('port')*/3000,()=>{
    console.log("server is run__!!");
});
