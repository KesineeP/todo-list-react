(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),c=(n(13),n(14),n(1)),l=n(4),s=n(7),u={container:{width:"100%"},form:{width:"100%",display:"flex",justifyContent:"space-between",marginBottom:"10px"},textInput:{fontSize:"16px",width:"240px",paddingLeft:"10px",border:"solid 2px powderblue",outline:"none"},addButton:{color:"white",backgroundColor:"#4e93bd",border:"none",fontSize:"13px",padding:"12px",marginLeft:"5px",cursor:"pointer"}},d=function(e){var t=e.database,n=e.setDatabase,o=Object(a.useState)(""),i=Object(c.a)(o,2),d=i[0],p=i[1];return console.log("newTodo",d),console.log("database",t),r.a.createElement("div",{style:u.container},r.a.createElement("form",{style:u.form},r.a.createElement("input",{value:d,style:u.textInput,type:"textbox",placeholder:"What needs to be done?",onChange:function(e){return function(e){e.persist(),p(e.target.value)}(e)}}),r.a.createElement("button",{style:u.addButton,value:"+",onClick:function(e){return function(e,a){e.preventDefault(),n([].concat(Object(l.a)(t),[{id:Object(s.a)(),data:a,isChecked:!1}])),p("")}(e,d)}},r.a.createElement("i",{className:"fas fa-plus"}))))},p={container:{display:"flex",alignItems:"center",width:"100%",justifyContent:"space-between",borderBottom:"solid lightgrey 1px"},list:{display:"flex",alignItems:"center"},button:{border:"none",color:"lightgrey",borderRadius:"5px",fontSize:"20px",margin:"2px",padding:"5px",cursor:"pointer"},p:{paddingLeft:"10px",fontSize:"16px"},textbox:{marginLeft:"10px"}},f=function(e){var t=e.todo,n=e.database,o=e.setDatabase,i=Object(a.useState)(!1),s=Object(c.a)(i,2),u=s[0],d=s[1];return r.a.createElement("div",{style:p.container},r.a.createElement("div",{style:p.list},r.a.createElement("input",{style:{margin:"0",cursor:"pointer"},type:"checkbox",checked:t.isChecked,onChange:function(){return function(){var e=n.map(function(e){return e.id===t.id&&(e.isChecked=!e.isChecked),e});o(e)}()}}),u?r.a.createElement("input",{style:p.textbox,type:"textbox",value:t.data,onChange:function(e){return function(e,t){for(var a=e.target.value,r=Object(l.a)(n),i=[],c=0;c<r.length;c++)r[c].id===t&&(r[c].data=a),i.push(r[c]);console.log("newData1",i),o(i)}(e,t.id)},onKeyDown:function(e){return function(e){"Enter"===e.key&&d(!1)}(e)}}):r.a.createElement("div",{style:p.p},r.a.createElement("p",{style:{textDecoration:!0===t.isChecked?"line-through":"none"}},t.data))),r.a.createElement("div",null,r.a.createElement("button",{style:p.button,onClick:function(){d(!0)}},r.a.createElement("i",{className:"fas fa-pencil-alt"})),r.a.createElement("button",{style:p.button,onClick:function(){return function(e){var t=n.filter(function(t){return t.id!==e});o(t)}(t.id)}},r.a.createElement("i",{className:"far fa-trash-alt"}))))},b={container:{display:"flex",flexDirection:"column"}},m=function(e){var t=e.database,n=e.setDatabase;return r.a.createElement("div",{style:b.container},t.map(function(e,a){return r.a.createElement(f,{todo:e,key:a,database:t,setDatabase:n})}))},x={container:{display:"flex",justifyContent:"flex-end"},button:{display:"flex",justifyContent:"flex-end",alignItems:"center",marginTop:"20px",padding:"5px 10px",color:"white",backgroundColor:"#4e93bd",border:"none",cursor:"pointer"},p:{margin:"0",paddingRight:"10px"}},g=function(e){var t=e.database,n=e.setDatabase;return r.a.createElement("div",{style:x.container},r.a.createElement("button",{style:x.button,onClick:function(){return function(){var e=t.filter(function(e){return!e.isChecked});n(e)}()}},r.a.createElement("p",{style:x.p},"Remove Checked Tasks"),r.a.createElement("i",{className:"fas fa-times"})))},y={container:{display:"flex",flexDirection:"column",padding:" 5px 20px 20px 20px",boxShadow:"2px 2px 5px grey",background:"white",fontSize:"",maxWidth:"450px"}},h=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)(function(){var e=JSON.parse(localStorage.getItem("database")||"[]");e&&o(e)},[]),Object(a.useEffect)(function(){localStorage.setItem("database",JSON.stringify(n))},[n]);var i=new Date,l=i.getDate(),s=["January","February","March","April","May","June","July","August","September","October","November","December"][i.getMonth()];return r.a.createElement("div",{style:y.container},r.a.createElement("h5",null,l,r.a.createElement("sup",null,function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(l))," ",s,", ",i.getFullYear()),r.a.createElement(d,{database:n,setDatabase:o}),r.a.createElement(m,{database:n,setDatabase:o}),r.a.createElement(g,{database:n,setDatabase:o}))},E={h1:{fontSize:"25px",color:"white",textShadow:"2px 2px 5px grey"}},v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{style:E.h1},"TODO LIST"),r.a.createElement(h,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a3143b9d.chunk.js.map