var Client;(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){return console.log("::: Running checkForText :::",e),""!=e}e.r(t),e.d(t,{checkForText:()=>n,handleSubmit:()=>o});function o(e){e.preventDefault();let t=document.getElementById("user-input").value;Client.checkForText(t)?fetch("http://localhost:8081/getText",{method:"POST",credentials:"same-origin",cache:"no-cache",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({text:t})}).then((e=>e.json())).then((function(e){console.log(e),document.getElementById("results-label").innerHTML="You have written:",document.getElementById("user-input-text").innerHTML=e.sentence_list[0].text,document.getElementById("results-text").innerHTML="Please find sentiment results below",document.getElementById("results-agreement").innerHTML=e.agreement})):alert("Please enter a sentence to analyse")}Client=t})();
//# sourceMappingURL=main.js.map