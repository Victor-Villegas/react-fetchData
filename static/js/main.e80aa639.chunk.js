(this["webpackJsonpworking-data"]=this["webpackJsonpworking-data"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(25),s=n.n(a),i=(n(32),n(33),n(34),n.p+"static/media/logo.97c687f0.png"),o=n(4),j=n(0),u=r.a.createContext(),l=u.Provider,b=u.Consumer;function h(e){var t=Object(c.useState)("light"),n=Object(o.a)(t,2),r=n[0],a=n[1];return Object(j.jsx)(l,{value:{theme:r,toggleTheme:function(){a("light"===r?"dark":"light")}},children:e.children})}var d=function(e){return Object(j.jsx)("button",{type:"button",className:"".concat(e.theme,"-button ").concat(e.className),onClick:e.onClick,children:e.children})},m=n(7),O=r.a.createContext(),x=O.Provider,f=O.Consumer;function g(e){var t={name:"test",password:12345},n=Object(c.useState)(t.name),r=Object(o.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!0),u=Object(o.a)(i,2),l=u[0],b=u[1];return Object(j.jsx)(x,{value:{userName:a,isLoggedIn:l,USER_INFO:t,logIn:function(){l?(s("Guest"),b(!1)):(s(t.name),b(!0))}},children:e.children})}var v=n(5);function p(e){return Object(j.jsxs)("div",{className:"logo-wrapper",children:[Object(j.jsx)("img",{src:e.src,alt:e.alt,id:"logo"}),Object(j.jsx)("h3",{id:"title",children:e.text})]})}function C(e){return Object(j.jsx)("div",{className:"theme-wrapper",children:Object(j.jsx)(d,{theme:e.theme,onClick:e.function,className:"themeBtn",children:Object(j.jsx)(m.a,{icon:v.a,className:"".concat(e.theme,"-themeIcon themeIcon")})})})}function N(e){return Object(j.jsx)(f,{children:function(t){var n=t.isLoggedIn,c=t.logIn;return Object(j.jsxs)(d,{theme:e.theme,onClick:c,className:"logInBtn",children:[Object(j.jsx)(m.a,{icon:v.c,className:"".concat(e.theme,"-themeIcon themeIcon")}),Object(j.jsx)("p",{children:n?"Log out":"Log in"})]})}})}var I=function(){return Object(j.jsx)(b,{children:function(e){var t=e.theme,n=e.toggleTheme;return Object(j.jsx)("header",{children:Object(j.jsxs)("div",{className:"".concat(t,"-header header-wrapper"),children:[Object(j.jsx)(p,{src:i,alt:"Logo",text:"Contactia"}),Object(j.jsx)(N,{theme:t}),Object(j.jsx)(C,{theme:t,function:n})]})})}})};var L=function(e){return Object(j.jsxs)("div",{className:"".concat(e.theme,"-welcomeMsg welcomeMsg"),children:[Object(j.jsx)("h3",{children:e.text}),Object(j.jsx)("br",{}),e.isLoggedIn?Object(j.jsx)("p",{children:"This is your contact list, press the 'Erase' button to erase a contact from the list."}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"This is a default contact list, to edit it please log in using this credentials:"}),Object(j.jsx)("p",{children:"User name: 'test' - Password: '12345'"})]})]})},w=n(27),k=n(10),F=n.n(k),S=r.a.createContext(),y=S.Provider,T=S.Consumer;function E(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){F.a.get("https://reqres.in/api/users?page=2").then((function(e){var t=e.data.data;a(t)}))}),[]),Object(j.jsx)(y,{value:{users:r,deleteUser:function(e){a(r.filter((function(t){return t.id!==e})))},createUser:function(e){a([].concat(Object(w.a)(r),[e]))}},children:e.children})}var B=function(e){var t=e.user,n=t.id,c=t.first_name,r=t.last_name,a=t.avatar,s=t.email;return Object(j.jsxs)("div",{className:"".concat(e.theme,"-userCard userCard"),children:[Object(j.jsx)("img",{src:a,alt:"avatar",className:"userCardImg"}),Object(j.jsxs)("div",{className:"".concat(e.theme,"-userCardContent userCardContent"),children:[Object(j.jsx)("h5",{children:"".concat(c," ").concat(r)}),Object(j.jsx)(m.a,{icon:v.b,className:"".concat(e.theme,"-faIcon faIcon")}),Object(j.jsx)("p",{children:s}),e.isLoggedIn?Object(j.jsx)(d,{theme:e.theme,className:"".concat(e.theme,"-userBtn userBtn"),onClick:function(){return e.btnFunction(n)},children:"Erase"}):null]})]})},P=n(14),U=n.n(P),_=n(26),q=n(11),J=n(15),M=n.p+"static/media/avatar1.1ef5ff7b.jpg";function A(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){e.visible&&(a(!0),setTimeout((function(){a(!1)}),2e3))}),[e.visible]),Object(j.jsx)("div",{className:"".concat(e.theme,"-notification notification"),children:r?Object(j.jsx)("p",{children:"Element created successfully"}):null})}var D=function(e){var t=Object(c.useState)({name:"",job:""}),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!1),i=Object(o.a)(s,2),u=i[0],l=i[1],b=function(e,t){a(Object(J.a)(Object(J.a)({},r),{},Object(q.a)({},t,e.target.value)))},h=function(){var t=Object(_.a)(U.a.mark((function t(n){var c,s;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),"https://reqres.in/api/users",t.next=4,F.a.post("https://reqres.in/api/users",r);case 4:(c=t.sent)&&(s={id:c.data.id,first_name:r.name,last_name:"",email:r.job,avatar:M},e.function(s),l(!0),a({name:"",job:""}),setTimeout((function(){l(!1)}),2e3));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)("form",{onSubmit:h,children:[Object(j.jsx)(A,{visible:u,theme:e.theme}),Object(j.jsxs)("label",{htmlFor:"{'name-input'}",children:["Name:",Object(j.jsx)("input",{type:"text",name:"name",value:r.name,onChange:function(e){return b(e,"name")},id:"name-input"})]}),Object(j.jsxs)("label",{htmlFor:"{'job-input'}",children:["Job:",Object(j.jsx)("input",{type:"text",name:"job",value:r.job,onChange:function(e){return b(e,"job")},id:"job-input"})]}),Object(j.jsx)("input",{type:"submit",value:"Create"})]})};var G=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(b,{children:function(e){var t=e.theme;return Object(j.jsx)(T,{children:function(e){var n=e.users,c=e.deleteUser,r=e.createUser;return Object(j.jsx)(f,{children:function(e){var a=e.isLoggedIn;return Object(j.jsxs)(j.Fragment,{children:[a?Object(j.jsx)(D,{theme:t,users:n,function:r}):null,Object(j.jsx)("div",{className:"userList",children:n.map((function(e){return Object(j.jsx)(B,{user:e,theme:t,isLoggedIn:a,btnFunction:c},e.id)}))})]})}})}})}})})};var R=function(){return Object(j.jsx)(b,{children:function(e){var t=e.theme;return Object(j.jsx)(f,{children:function(e){var n=e.userName,c=e.isLoggedIn;return Object(j.jsxs)("div",{className:"".concat(t,"-App App"),children:[Object(j.jsx)(I,{}),Object(j.jsx)(L,{text:"\xa1Welcome ".concat(n,"!"),theme:t,isLoggedIn:c}),Object(j.jsx)(G,{})]})}})}})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{children:Object(j.jsx)(E,{children:Object(j.jsx)(g,{children:Object(j.jsx)(R,{})})})})}),document.getElementById("root")),W()}},[[58,1,2]]]);
//# sourceMappingURL=main.e80aa639.chunk.js.map