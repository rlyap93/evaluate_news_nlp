var Client;(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){console.log("::: Running checkForName :::",e);if(["Picard","Janeway","Kirk","Archer","Georgiou"].includes(e))return alert("Welcome, Captain!"),!0}e.r(t),e.d(t,{checkForName:()=>n,handleSubmit:()=>o});function o(e){e.preventDefault();let t=document.getElementById("user-input").value;fetch("http://localhost:8081/getText",{method:"POST",credentials:"same-origin",cache:"no-cache",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({text:t})}).then((e=>e.json())).then((function(e){console.log(e),document.getElementById("user-input-text").innerHTML=e.sentence_list[0].text,document.getElementById("results").innerHTML=e.agreement}))}console.log(n),alert("I EXIST"),Client=t})();
//# sourceMappingURL=main.js.map