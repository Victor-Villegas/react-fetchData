(this["webpackJsonpworking-data"]=this["webpackJsonpworking-data"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(19),a=n.n(s),i=(n(25),n(26),n(27),n.p+"static/media/logo.97c687f0.png"),o=n(4),j=n(0),l=r.a.createContext(),u=l.Provider,d=l.Consumer;function h(e){var t=Object(c.useState)("light"),n=Object(o.a)(t,2),r=n[0],s=n[1];return Object(j.jsx)(u,{value:{theme:r,toggleTheme:function(){s("light"===r?"dark":"light")}},children:e.children})}var b=function(e){return Object(j.jsx)("button",{type:"button",className:"".concat(e.theme,"-button ").concat(e.className),onClick:e.onClick,children:e.children})},m=n(6),O=r.a.createContext(),x=O.Provider,g=O.Consumer;function f(e){var t={name:"test",password:12345},n=Object(c.useState)(t.name),r=Object(o.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(!0),l=Object(o.a)(i,2),u=l[0],d=l[1];return Object(j.jsx)(x,{value:{userName:s,isLoggedIn:u,USER_INFO:t,logIn:function(){u?(a("Guest"),d(!1)):(a(t.name),d(!0))}},children:e.children})}var v=n(5);function p(e){return Object(j.jsxs)("div",{className:"logo-wrapper",children:[Object(j.jsx)("img",{src:e.src,alt:e.alt,id:"logo"}),Object(j.jsx)("h3",{id:"title",children:e.text})]})}function C(e){return Object(j.jsx)("div",{className:"theme-wrapper",children:Object(j.jsx)(b,{theme:e.theme,onClick:e.function,className:"themeBtn",children:Object(j.jsx)(m.a,{icon:v.a,className:"".concat(e.theme,"-themeIcon themeIcon")})})})}function I(e){return Object(j.jsx)(g,{children:function(t){var n=t.isLoggedIn,c=t.logIn;return Object(j.jsxs)(b,{theme:e.theme,onClick:c,className:"logInBtn",children:[Object(j.jsx)(m.a,{icon:v.c,className:"".concat(e.theme,"-themeIcon themeIcon")}),Object(j.jsx)("p",{children:n?"Log out":"Log in"})]})}})}var N=function(){return Object(j.jsx)(d,{children:function(e){var t=e.theme,n=e.toggleTheme;return Object(j.jsx)("header",{children:Object(j.jsxs)("div",{className:"".concat(t,"-header header-wrapper"),children:[Object(j.jsx)(p,{src:i,alt:"Logo",text:"Contactia"}),Object(j.jsx)(I,{theme:t}),Object(j.jsx)(C,{theme:t,function:n})]})})}})};var L=function(e){return Object(j.jsxs)("div",{className:"".concat(e.theme,"-welcomeMsg welcomeMsg"),children:[Object(j.jsx)("h3",{children:e.text}),Object(j.jsx)("br",{}),e.isLoggedIn?Object(j.jsx)("p",{children:"This is your contact list, press the 'Erase' button to erase a contact from the list."}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"This is a default contact list, to edit it please log in using this credentials:"}),Object(j.jsx)("p",{children:"User name: 'test' - Password: '12345'"})]})]})},w=n(20),k=n.n(w),F=r.a.createContext(),S=F.Provider,B=F.Consumer;function P(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){k.a.get("https://reqres.in/api/users?page=2").then((function(e){var t=e.data.data;s(t)}))}),[]),Object(j.jsx)(S,{value:{users:r,deleteUser:function(e){s(r.filter((function(t){return t.id!==e}))),console.log(r)}},children:e.children})}var T=function(e){var t=e.user,n=t.id,c=t.first_name,r=t.last_name,s=t.avatar,a=t.email;return Object(j.jsxs)("div",{className:"".concat(e.theme,"-userCard userCard"),children:[Object(j.jsx)("img",{src:s,alt:"avatar",className:"userCardImg"}),Object(j.jsxs)("div",{className:"".concat(e.theme,"-userCardContent userCardContent"),children:[Object(j.jsx)("h5",{children:"".concat(c," ").concat(r)}),Object(j.jsx)(m.a,{icon:v.b,className:"".concat(e.theme,"-faIcon faIcon")}),Object(j.jsx)("p",{children:a}),e.isLoggedIn?Object(j.jsx)(b,{theme:e.theme,className:"".concat(e.theme,"-userBtn userBtn"),onClick:function(){return e.btnFunction(n)},children:"Erase"}):null]})]})};var E=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(d,{children:function(e){var t=e.theme;return Object(j.jsx)(B,{children:function(e){var n=e.users,c=e.deleteUser;return Object(j.jsx)(g,{children:function(e){var r=e.isLoggedIn;return Object(j.jsx)("div",{className:"userList",children:n.map((function(e){return Object(j.jsx)(T,{user:e,theme:t,isLoggedIn:r,btnFunction:c},e.id)}))})}})}})}})})};var U=function(){return Object(j.jsx)(d,{children:function(e){var t=e.theme;return Object(j.jsx)(g,{children:function(e){var n=e.userName,c=e.isLoggedIn;return Object(j.jsxs)("div",{className:"".concat(t,"-App App"),children:[Object(j.jsx)(N,{}),Object(j.jsx)(L,{text:"\xa1Welcome ".concat(n,"!"),theme:t,isLoggedIn:c}),Object(j.jsx)(E,{})]})}})}})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{children:Object(j.jsx)(P,{children:Object(j.jsx)(f,{children:Object(j.jsx)(U,{})})})})}),document.getElementById("root")),y()}},[[50,1,2]]]);
//# sourceMappingURL=main.265f649f.chunk.js.map