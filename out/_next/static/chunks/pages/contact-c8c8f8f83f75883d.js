(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return a(8419)}])},3538:function(e,s,a){"use strict";var i=a(5893);a(7294);s.Z=function(e){var s=e.pageTitle;return(0,i.jsxs)("div",{className:"page-title-area",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"page-title-content",children:(0,i.jsx)("h1",{children:s})})}),(0,i.jsx)("div",{className:"shape2",children:(0,i.jsx)("img",{src:"/images/shape/shape2.png",alt:"image"})}),(0,i.jsx)("div",{className:"shape3",children:(0,i.jsx)("img",{src:"/images/shape/shape3.png",alt:"image"})}),(0,i.jsx)("div",{className:"shape5",children:(0,i.jsx)("img",{src:"/images/shape/shape5.png",alt:"image"})}),(0,i.jsx)("div",{className:"shape6",children:(0,i.jsx)("img",{src:"/images/shape/shape6.png",alt:"image"})}),(0,i.jsx)("div",{className:"shape7",children:(0,i.jsx)("img",{src:"/images/shape/shape7.png",alt:"image"})}),(0,i.jsx)("div",{className:"shape8",children:(0,i.jsx)("img",{src:"/images/shape/shape8.png",alt:"image"})}),(0,i.jsxs)("div",{className:"lines",children:[(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"})]})]})}},8419:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return Z}});var i=a(5893),c=a(7294),n=a(84),l=a(3538),r=a(5245),t=a(7568),o=a(1799),d=a(7582),m=a(7536),h=a(6455),u=a.n(h),x=a(7630),j=a.n(x),p=a(4005),v=a(7258),g=a(7533),N=(a(8269),a(4853)),f=a(5085),b=j()(u()),y={name:"",emailFrom:"",phone:"",subject:"",bodyText:""},E=f.Tr.RECAPTCH_SITE_KEY,k=function(){var e,s,a,n,l,r=(0,c.useState)(""),h=r[0],u=r[1],x=(0,c.useRef)(),j=(0,c.useState)(y),f=(j[0],j[1]),k=(0,c.useState)(!1),w=k[0],_=k[1],Z=v.object().shape({name:v.string().min(7,"Enter at least 5 characters").required("Name is required"),emailFrom:v.string().email("Invalid email").required("Email is required"),phone:v.string().required("Phone number is required"),subject:v.string().required("Subject is required"),message:v.string().required("Message cannot be empty").min(10,"Enter at least 10 characters").max(240,"Maximum characters allowed: 500")}),S=(0,m.cI)({resolver:(0,g.X)(Z)}),C=S.register,q=S.handleSubmit,F=S.formState.errors,T=S.reset,P=function(){var e=(0,t.Z)((function(e){var s;return(0,d.__generator)(this,(function(a){switch(a.label){case 0:x.current.reset(),s={from:e.emailFrom,subject:e.subject,message:e.message,phone:e.phone,name:e.name,recaptchaValue:h},_(!0),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,p.Z.sendEmail(s)];case 2:return a.sent().status&&(b.fire({title:"Congratulations!",text:"Your message  successfully sent and will back to you soon",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}),T(),_(!1)),T(),[3,4];case 3:return a.sent(),b.fire({title:"Error!",text:"Error while submiting the form",icon:"error",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}),_(!1),[3,4];case 4:return f(y),[2]}}))}));return function(s){return e.apply(this,arguments)}}();return(0,i.jsx)("div",{className:"contact-area pb-100",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"section-title",children:[(0,i.jsx)("span",{className:"sub-title",children:"Get in Touch"}),(0,i.jsxs)("h2",{children:["Ready to Get Started?",(0,i.jsx)("span",{className:"overlay"})]}),(0,i.jsx)("p",{children:"Drive more revenue with data-fueled, expert-led marketing. Fill in the form to get started!"})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,i.jsx)("div",{className:"contact-image","data-tilt":!0,children:(0,i.jsx)("img",{src:"/images/contactUs.jpg",alt:"image"})})}),(0,i.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,i.jsx)("div",{className:"contact-form",children:(0,i.jsx)("form",{id:"contactForm",onSubmit:q(P),children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("input",(0,o.Z)({type:"text",placeholder:"Your Name",className:"form-control"},C("name"))),(0,i.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:null===(e=F.name)||void 0===e?void 0:e.message})]})}),(0,i.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("input",(0,o.Z)({type:"email",placeholder:"Your Email",className:"form-control"},C("emailFrom"))),(0,i.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:null===(s=F.emailFrom)||void 0===s?void 0:s.message})]})}),(0,i.jsx)("div",{className:"col-lg-12 col-md-6",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("input",(0,o.Z)({type:"text",placeholder:"Your Phone Number",className:"form-control"},C("phone"))),(0,i.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:null===(a=F.phone)||void 0===a?void 0:a.message})]})}),(0,i.jsx)("div",{className:"col-lg-12 col-md-6",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("input",(0,o.Z)({type:"text",placeholder:"Subject",className:"form-control"},C("subject"))),(0,i.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:null===(n=F.subject)||void 0===n?void 0:n.message})]})}),(0,i.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("textarea",(0,o.Z)({placeholder:"Your Message",cols:"30",rows:"5",className:"form-control"},C("message"))),(0,i.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:null===(l=F.message)||void 0===l?void 0:l.message})]})}),(0,i.jsx)("div",{className:"form-group mt-2",children:(0,i.jsx)(N.Z,{sitekey:E,onChange:function(e){u(e)},ref:x})}),(0,i.jsx)("div",{className:"col-lg-12 col-sm-12",children:w?(0,i.jsx)("span",{children:(0,i.jsx)("i",{class:"bx bx-loader bx-spin bx-md"})}):(0,i.jsx)("button",{type:"submit",className:"default-btn",children:"Send Message"})})]})})})})]})]})})},w=a(9008),_=a.n(w),Z=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(_(),{children:[(0,i.jsx)("title",{children:"Contact Us | Bernum"}),(0,i.jsx)("meta",{name:"description",content:"contact us"}),(0,i.jsx)("meta",{name:"keywords",content:"contact us"})]}),(0,i.jsx)(n.Z,{}),(0,i.jsx)(l.Z,{pageTitle:"Contact Us"}),(0,i.jsx)("div",{className:"contact-info-area pt-100 pb-70",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row justify-content-center",children:[(0,i.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,i.jsxs)("div",{className:"contact-info-box",children:[(0,i.jsx)("div",{className:"back-icon",children:(0,i.jsx)("i",{className:"bx bx-phone-call"})}),(0,i.jsx)("div",{className:"icon",children:(0,i.jsx)("i",{className:"bx bx-phone-call"})}),(0,i.jsx)("h3",{children:"Contact"}),(0,i.jsxs)("p",{children:["E-mail:"," ",(0,i.jsx)("a",{href:"mailto:support@bernum.ca",children:" support@bernum.ca"})]})]})}),(0,i.jsx)("div",{className:"col-lg-4 col-md-6 offset-lg-0 offset-md-3",children:(0,i.jsxs)("div",{className:"contact-info-box",children:[(0,i.jsx)("div",{className:"back-icon",children:(0,i.jsx)("i",{className:"bx bx-time-five"})}),(0,i.jsx)("div",{className:"icon",children:(0,i.jsx)("i",{className:"bx bx-time-five"})}),(0,i.jsx)("h3",{children:"Hours of Operation"}),(0,i.jsx)("p",{children:"Monday - Friday: 09:00 - 20:00"}),(0,i.jsx)("p",{children:"Sunday & Saturday: 10:30 - 22:00"})]})})]})})}),(0,i.jsx)(k,{}),(0,i.jsx)(r.Z,{})]})}},4005:function(e,s,a){"use strict";a.d(s,{Z:function(){return o}});var i=a(7568),c=a(7582),n=a(9669),l=a.n(n),r=a(5085),t={sendEmailEndpoint:"".concat(r._n,"mail/sendMail")},o={sendEmail:function(){var e=(0,i.Z)((function(e){return(0,c.__generator)(this,(function(s){switch(s.label){case 0:return[4,l().post(t.sendEmailEndpoint,e)];case 1:return[2,s.sent()]}}))}));return function(s){return e.apply(this,arguments)}}()}}},function(e){e.O(0,[234,816,443,756,774,888,179],(function(){return s=8105,e(e.s=s);var s}));var s=e.O();_N_E=s}]);