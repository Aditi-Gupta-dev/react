import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Card from './Cards';
import Sdata from './Sdata';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <h1>hbjcbbnb</h1>
//   </>
// );


//upar wale pure code ko ander likh skte the lekin wo hard code hota.....

//chalo ab ham custom attribute banaemge or function me pass krenge q ki har photo ka link or title alag hai

//1. function me props pass kr do or render me individual value do customized attributes ka
//2. function ko alag jsx file me rakho or sara data ko alag jsx file me [{},{},{}] aise array of obj jaisa fir data ko export kro or index.js me import kro ,access like array elements

//3 map method use kro best hai isme kya hota hai ki...ek map of data lete hai render function...or map me ek function pass krte hai ..ye funtion utne no. of component bana ke dega jitne no. of data obj hai ...
//render func ke upar  declared function 3 parameters leta hai value ,index and array ..but hmne ek se kaam chalaya hai...or bas yahi hai

function netflixcard(val){
  console.log(val);
  return(
    <Card 
    imgsrc={val.imgsrc}
     title={val.title}
      sname={val.sname}/>
  );

};
//chalo isko or simplify krenge....haae re ...fat arrow function se

ReactDOM.render(
  <>
   <h1 className="heading">list of top 5 netflix series of 2023</h1>
   {/* {Sdata.map(netflixcard)} */}
   {/* //ye bhi thik hai */}
   {/* {Sdata.map(function ncard(val){
    return(
      <Card 
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}/>

    );
   })} */}
   {Sdata.map((val,index,arr)=>{
    console.log(val);
    console.log(index);
    console.log(arr);


    return(
      <Card 
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}/>

    );
   })}

        
    
    {/* <Card 
    imgsrc={Sdata[0].imgsrc}
     title={Sdata[0].title}
      sname={Sdata[0].sname}/>
    <Card 
    imgsrc={Sdata[1].imgsrc}
     title={Sdata[1].title}
      sname={Sdata[1].sname}/>
      <Card 
    imgsrc={Sdata[2].imgsrc}
     title={Sdata[2].title}
      sname={Sdata[2].sname}/>
      <Card 
    imgsrc={Sdata[3].imgsrc}
     title={Sdata[3].title}
      sname={Sdata[3].sname}/>
      <Card 
    imgsrc={Sdata[4].imgsrc}
     title={Sdata[4].title}
      sname={Sdata[4].sname}/> */}
  </>,
  document.getElementById("root")
);


