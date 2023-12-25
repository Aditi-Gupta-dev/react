import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

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

/*function netflixcard(val){
  console.log(val);
  return(
    <Card 
    key={val.id}

    imgsrc={val.imgsrc}
     title={val.title}
      sname={val.sname}/>
  );

};*/
//chalo isko or simplify krenge....haae re ...fat arrow function se

ReactDOM.render(
  <>
  <App/>
  </>,
  document.getElementById("root")
);


