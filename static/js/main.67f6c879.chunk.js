(this["webpackJsonpweather-redux-saga"]=this["webpackJsonpweather-redux-saga"]||[]).push([[0],{48:function(n,e,t){"use strict";t.r(e);var r,a,i,o,c,s,d,l,u,b,p,f,j,x,h,m,O,g,v,w,y,k,C,E,S,T,A,R,D,_,z,H,F,I,W,P,L,N,Y,M,U,X,q,V,B,G,J,Z,Q,K=t(3),$=t(0),nn=t.n($),en=t(23),tn=t.n(en),rn=t(33),an=t(12),on=t.p+"static/media/sprite.bffd5d7d.svg",cn=t(4),sn=t(1),dn=function(){return Object(sn.jsxs)(ln,{children:[Object(sn.jsx)(un,{children:"Page not found"}),Object(sn.jsx)("div",{children:Object(sn.jsx)(bn,{children:Object(sn.jsx)("use",{href:on+"#404"})})}),Object(sn.jsx)(pn,{children:"This city does not exist, check the name of the city and make a second request"})]})},ln=cn.b.div(r||(r=Object(K.a)(["\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nwidth: 100%;\n    text-align: center;\n"]))),un=cn.b.h4(a||(a=Object(K.a)(["\nposition: relative;\nfont-size: 1.5em;\nline-height: 1em;\nmargin-bottom: 20px;\ncolor: #15222c;\nbackground: #fff;\nfont-weight: 300;\npadding: 10px 20px;\ndisplay: inline-block;\n"]))),bn=cn.b.svg(i||(i=Object(K.a)(["\nwidth: 250px;\nheight: 150px;\n"]))),pn=cn.b.p(o||(o=Object(K.a)(["\ncolor: #fff;\nfont-size: 1.2em;\n"]))),fn=t(22),jn=function(n){var e=Object($.useState)(),t=Object(fn.a)(e,2),r=t[0],a=t[1],i=Object($.useState)(),o=Object(fn.a)(i,2),c=o[0],s=o[1],d=function(n){var e=n.coords,t=e.latitude,r=e.longitude;a({lat:t,lon:r})},l=function(n){s(n.message)};return Object($.useEffect)((function(){var e=navigator.geolocation;e?e.getCurrentPosition(d,l,n):s("Geolocation is not supported.")}),[n]),{location:r,error:c}},xn=function(n){var e,t,r,a=n.value;switch(a[0]){case"feels_like":e="Feels like",t="".concat(a[1].toFixed(1)," ")+String.fromCharCode(8451);break;case"temp_min":e="Minimum",t="".concat(a[1].toFixed(1)," ")+String.fromCharCode(8451);break;case"temp_max":e="Maximum",t="".concat(a[1].toFixed(1)," ")+String.fromCharCode(8451);break;case"pressure":e="Pressure",t="".concat(a[1]," ")+String.fromCharCode(13169);break;case"humidity":e="Humidity",t="".concat(a[1]," ")+String.fromCharCode(37);break;case"speed":e="Speed",t="".concat(a[1]," (m/s)");break;case"sunrise":e="Sunrise",t=new Date(1e3*a[1]).toLocaleTimeString();break;case"sunset":e="Sunset",t=new Date(1e3*a[1]).toLocaleTimeString();break;case"deg":e="Direction",r="rotateZ(".concat(a[1],"deg)");break;case"all":e="Clouds",t="".concat(a[1]," ")+String.fromCharCode(37);break;case"visibility":e="Visibility",t="".concat(a[1]," (m)");break;default:e="Unknown status"}return Object(sn.jsxs)(hn,{children:[Object(sn.jsx)("span",{children:e}),Object(sn.jsx)("span",{children:"Direction"===e?Object(sn.jsx)(mn,{style:{transform:r},children:Object(sn.jsx)("use",{href:on+"#arrow"})}):t})]})},hn=cn.b.li(c||(c=Object(K.a)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nfont-size: 1.1rem;\n"]))),mn=cn.b.svg(s||(s=Object(K.a)(["\nwidth: 10px;\nheight: 10px;\n"]))),On=t(11),gn=function(n){var e,t,r,a,i,o=n.title,c=Object(On.c)((function(n){return n.weather.dataPosition})),s=[],d=[],l=[],u=[],b=[];if(c)switch(o){case"Temperature parameters":s=Object.entries(c.main).filter((function(n){return"temp"!==n[0]&&"sea_level"!==n[0]&&"grnd_level"!==n[0]&&"pressure"!==n[0]}));break;case"Sunrise & Sunset data":d=Object.entries(c.sys).filter((function(n){return"country"!==n[0]&&"id"!==n[0]&&"type"!==n[0]}));break;case"Visibility":u=Object.entries(c).filter((function(n){return"visibility"===n[0]}));break;case"Wind":l=Object.entries(c.wind).filter((function(n){return"gust"!==n[0]}));break;case"Cloudiness":b=Object.entries(c.clouds)}return Object(sn.jsxs)(vn,{children:[Object(sn.jsx)(wn,{children:o}),null===(e=s)||void 0===e?void 0:e.map((function(n,e){return Object(sn.jsx)(xn,{value:n},e)})),null===(t=d)||void 0===t?void 0:t.map((function(n,e){return Object(sn.jsx)(xn,{value:n},e)})),null===(r=u)||void 0===r?void 0:r.map((function(n,e){return Object(sn.jsx)(xn,{value:n},e)})),null===(a=l)||void 0===a?void 0:a.map((function(n,e){return Object(sn.jsx)(xn,{value:n},e)})),null===(i=b)||void 0===i?void 0:i.map((function(n,e){return Object(sn.jsx)(xn,{value:n},e)}))]})},vn=cn.b.ul(d||(d=Object(K.a)(["\ndisplay: grid;\ngrid-column: 100%;\ngrid-template-rows: min-content;\ngrid-gap: 5px;\n"]))),wn=cn.b.li(l||(l=Object(K.a)(["\ntext-align: center;\nfont-weight: 500;\nfont-size: 1.2rem;\ncolor: #171730;\n"]))),yn=function(){var n=Object(On.c)((function(n){return n.weather.dataPosition})),e=null===n||void 0===n?void 0:n.weather[0].icon,t=null===n||void 0===n?void 0:n.weather[0].main;return Object(sn.jsxs)(kn,{children:[Object(sn.jsx)(Cn,{children:t}),Object(sn.jsx)("img",{style:{maxWidth:"100%"},src:e?"http://openweathermap.org/img/wn/".concat(e,"@2x.png"):"",alt:"icon"})]})},kn=cn.b.div(u||(u=Object(K.a)(["\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: space-evenly;\n"]))),Cn=cn.b.p(b||(b=Object(K.a)(["\nfont-size: 1.2rem;\ncolor: #000;\n"]))),En=function(){var n=Object(On.c)((function(n){return n.weather.dataPosition})),e=null===n||void 0===n?void 0:n.main.temp;return Object(sn.jsxs)(Sn,{children:[null===e||void 0===e?void 0:e.toFixed(1),"\u2103"]})},Sn=cn.b.p(p||(p=Object(K.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ncolor: #171730;\nfont-size: 3rem;\nfont-weight: 700;\n"]))),Tn=function(){return Object(sn.jsxs)(An,{children:[Object(sn.jsx)(yn,{}),Object(sn.jsx)(En,{}),["Temperature parameters","Sunrise & Sunset data","Visibility","Wind","Cloudiness"].map((function(n,e){return Object(sn.jsx)(gn,{title:n},e)}))]})},An=cn.b.div(f||(f=Object(K.a)(["\ndisplay: grid;\ngrid-template-columns: 100%;\ngrid-template-rows: min-content;\ngrid-gap: 5px;\n"]))),Rn=function(){var n=Object(On.c)((function(n){return n.weather.dataPosition})),e=null===n||void 0===n?void 0:n.dt;return Object(sn.jsxs)(Dn,{children:[Object(sn.jsx)("p",{children:null===n||void 0===n?void 0:n.name}),Object(sn.jsx)("p",{children:e?new Date(1e3*e).toLocaleDateString():Date.now()})]})},Dn=cn.b.div(j||(j=Object(K.a)(["\ndisplay: flex;\nflex-direction: row;\nalign-content: center;\njustify-content: space-between;\nfont-size: 1.5rem;\ncolor: #171730;\nfont-weight: 500;\n"]))),_n=function(){return Object(sn.jsxs)(zn,{children:[Object(sn.jsx)(Rn,{}),Object(sn.jsx)(Tn,{})]})},zn=cn.b.div(x||(x=Object(K.a)(["\ndisplay: grid;\ngrid-template-columns: 100%;\ngrid-template-rows: min-content;\n"]))),Hn=function(){return Object(sn.jsx)(Fn,{"data-text":"Current Weather",children:"Current Weather"})},Fn=cn.b.h1(h||(h=Object(K.a)(['\nfont-weight: 700;\nfont-size: 2rem;\ncolor: #e96e50;\nalign-self: center;\njustify-self: center;\ntext-shadow: 0 0 20px #171730;\nposition: relative;\nz-index: 5;\n\n&:after {\ncontent: attr(data-text);\nposition: absolute;\ntop: 50%;\nleft: 50%;\nwidth: 100%;\nheight: 100%;\ntransform: translate(-50%, -50%);\ncolor: #171730;\nz-index: -1;\nfilter: blur(15px);\n}\n\n&:before {\ncontent: "";\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nwidth: 100%;\nheight: 100%;\nbackground: #171730;\nz-index: -2;\nopacity: 0.5;\nfilter: blur(40px);\n}\n']))),In=Object($.memo)((function(n){var e=n.valueOfField,t=n.changeValue;return Object(sn.jsxs)(Wn,{children:[Object(sn.jsx)(Pn,{placeholder:"Enter the city name...",onChange:function(n){return t(n.target.value)},value:e}),Object(sn.jsx)(Ln,{type:"submit",children:Object(sn.jsx)(Nn,{children:Object(sn.jsx)("use",{href:on+"#search"})})})]})})),Wn=cn.b.p(m||(m=Object(K.a)(["\nposition: relative;\nwidth: 300px;\nheight: 60px;\n"]))),Pn=cn.b.input(O||(O=Object(K.a)(["\nposition: absolute;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\npadding: 10px 65px 10px 20px;\nborder-radius: 3px;\nfont-size: 18px;\nborder-radius: 50px;\n"]))),Ln=cn.b.button(g||(g=Object(K.a)(["\nposition: absolute;\ntop: 0;\nright: 0;\nwidth: 60px;\nheight: 100%;\nbackground: #7690da;\nz-index: 1;\ncursor: pointer;\nright: 0px;\nborder-radius: 50%;\n\n&hover{\n    background: #708bd2;\n}\n"]))),Nn=cn.b.svg(v||(v=Object(K.a)(["\nwidth: 30px;\nheight: 30px;\n"]))),Yn=t(10),Mn=function(n){var e=n.forLabel,t=n.forId,r=n.text,a=n.id,i=n.check,o=n.onChange,c=Object(On.c)((function(n){return n.weather})).trueInfo;return Object(sn.jsxs)(Un,{htmlFor:e,children:[Object(sn.jsx)(qn,{type:"radio",name:"choiseCard",id:t,value:r,checked:i,onChange:o.bind(null,a,r),disabled:!c}),Object(sn.jsx)(Xn,{children:r})]})},Un=cn.b.label(w||(w=Object(K.a)(["\nposition: relative;\ncursor: pointer;\nfont-size: 1.8em;\ntext-align: center;\n"]))),Xn=cn.b.span(y||(y=Object(K.a)(["\nposition: relative;\ndisplay: inline-block;\npadding: 10px;\nborder: 1px solid #171730;\ncolor: #171730;\nborder-radius: 10px;\n"]))),qn=cn.b.input(k||(k=Object(K.a)(["\nappearance: none;\n\n&:.input:checked ~ "," {\ncolor: #e96e50;\nborder: 1px solid #e96e50;\n}\n\n&:checked ~ "," {\n    color: #e96e50;\n    border-color: #e96e50;\n    box-shadow: inset 0 0 10px #e96e50;\n    transition: all 0.3s;\n}\n\n&:checked ~ ",':before {\ncontent: "";\nwidth: 100%;\nheight: 100%;\nposition: absolute;\ntop: 0;\nleft: 0;\nbackground: #171730;\nz-index: -1;\nfilter: blur(10px);   \n}\n\n&::checked ~ ',':after {\ncontent: "";\nwidth: 100%;\nheight: 100%;\nposition: absolute;\ntop: 0;\nleft: 0;\nbackground: #171730;\nz-index: -1;\nfilter: blur(15px);   \n}\n'])),Xn,Xn,Xn,Xn),Vn=Object($.memo)((function(n){var e=n.info,t=n.change;return Object(sn.jsx)(Bn,{children:e.map((function(n){return Object(sn.jsx)(Mn,Object(Yn.a)({onChange:t},n),n.id)}))})})),Bn=cn.b.p(C||(C=Object(K.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: space-evenly;\n"]))),Gn="WEATHER/RECORD_DATA_POSITION",Jn="WEATHER/RECORD_CITY",Zn="WEATHER/RECORD_LAST_CITY",Qn="WEATHER/RECORD_LAST_COORDS",Kn="WEATHER/UPDATED_DATA",$n="WEATHER/TRUE_DATA",ne="WEATHER/FALSE_DATA",ee="WEATHER/LOAD_WEATHER",te="WEATHER/UPDATE_WEATHER_CITY_CARDS",re="WEATHER/UPDATE_WEATHER_NEARBY_CARDS",ae="WEATHER/RECORD_TYPE_REQUEST",ie="CARDS/SHOW_LOADING_CARDS",oe="CARDS/HIDE_LOADING_CARDS",ce="FORM/SHOW_LOADER",se="FORM/HIDE_LOADER",de=function(n){return{type:Gn,payload:n}},le=function(n){return{type:Jn,payload:n}},ue=function(n){return{type:Zn,payload:n}},be=function(n){return{type:Qn,payload:n}},pe=function(n){return{type:Kn,payload:n}},fe=function(n){return{type:re,payload:n}},je=function(){return{type:$n}},xe=function(){return{type:ne}},he=function(){return{type:ie}},me=function(){return{type:oe}},Oe=function(){return{type:ce}},ge=function(){return{type:se}},ve=Object($.memo)((function(){var n=Object(On.c)((function(n){return n.weather})),e=n.typeRequset,t=n.lastCoords,r=n.lastCity,a=Object(On.b)(),i=Object($.useState)(""),o=Object(fn.a)(i,2),c=o[0],s=o[1],d=Object($.useState)([{id:1,forLabel:"Hourly",forId:"Hourly",text:"Hourly",check:!0},{id:2,forLabel:"Nearby",forId:"Nearby",text:"Nearby",check:!1}]),l=Object(fn.a)(d,2),u=l[0],b=l[1],p=Object($.useCallback)((function(n){switch(e){case"Hourly":a(pe(n));break;case"Nearby":a(pe(n)),t&&a(fe(t))}}),[a,t,e]),f=Object($.useCallback)((function(n){n.preventDefault(),c.trim()&&(p(c),s(" "))}),[p,c]),j=Object($.useCallback)((function(n,e){switch(b(u.map((function(n){return n.id,n.check=!n.check,n}))),e){case"Hourly":a({type:te,payload:r});break;case"Nearby":t&&a(fe(t))}}),[a,r,t,u]);return Object(sn.jsxs)(we,{onSubmit:f,children:[Object(sn.jsx)(In,{valueOfField:c,changeValue:s}),Object(sn.jsx)(Vn,{info:u,change:j})]})})),we=cn.b.form(E||(E=Object(K.a)(["\ndisplay: grid;\ngrid-template-columns: 1fr;\ngrid-template-rows: 60px 50px;\ngrid-gap: 5px;\n"]))),ye=function(){return Object(sn.jsx)(Ce,{})},ke=Object(cn.c)(S||(S=Object(K.a)(["\n0% {\n    transform: scale(0);\n    opacity: 0;\n}\n50% {\n    opacity: 1;\n}\n100% {\n    transform: scale(1);\n    opacity: 0;\n}\n"]))),Ce=cn.b.div(T||(T=Object(K.a)([void 0," 2.3s infinite;\n}\n\n&:after {\nz-index: 1;\nanimation: "," 2.3s infinite 1.15s;\n}\n"],['\nwidth: 319px;\nheight: 319px;\nline-height: 319px;\nmargin: 106px auto;\nposition: relative;\nbox-sizing: border-box;\ntext-align: center;\nz-index: 0;\ntext-transform: uppercase;\n\n&:before, &:after{\nopacity: 0;\nbox-sizing: border-box;\ncontent: "\\0020";\nposition: absolute;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\nborder-radius: 213px;\nborder: 11px solid #171730;\nbox-shadow: 0 0 106px #21172f, inset 0 0 106px #21172f;\n}\n\n&:before {\nz-index: 2;\nanimation: '," 2.3s infinite;\n}\n\n&:after {\nz-index: 1;\nanimation: "," 2.3s infinite 1.15s;\n}\n"])),ke,ke),Ee=Object($.memo)((function(){var n=Object(On.c)((function(n){return n.weather.loadingForm})),e=Object(On.c)((function(n){return n.weather.trueInfo}));return Object(sn.jsxs)(Se,{children:[Object(sn.jsx)(Hn,{}),Object(sn.jsx)(ve,{}),n?Object(sn.jsx)(ye,{}):e?Object(sn.jsx)(_n,{}):""]})})),Se=cn.b.div(A||(A=Object(K.a)(["\nalign-self: center;\njustify-self: center;\npadding: 15px;\nbackground: rgba(255, 255, 255, 0.3);\nbox-shadow: 0 15px 35px rgba(255, 255, 255, 0.3);\nborder-radius: 15px;\nbackdrop-filter: blur(10px);\ndisplay: grid;\ngrid-template-columns: 100%;\ngrid-gap: 15px;\n\n@media screen and(max-width: 440px) {\n        padding: 3px;\n}\n"]))),Te=function(){return Object(sn.jsx)(Re,{})},Ae=Object(cn.c)(R||(R=Object(K.a)(["\n100% {\n    transform: translate3d(0, 0, 1px) rotate(360deg);\n}\n"]))),Re=cn.b.span(D||(D=Object(K.a)(["\nwidth: 20vmin;\nheight: 20vmin;\nborder-radius: 20vmin;\nbackface-visibility: hidden;\nposition: absolute;\nanimation-name: ",";\nanimation-duration: 6s;\nanimation-timing-function: linear;\nanimation-iteration-count: infinite;\n\n&:nth-child(1) {\ncolor: #171730;\ntop: 8%;\nleft: 82%;\nanimation-duration: 12.7s;\nanimation-delay: -7.1s;\ntransform-origin: 14vw 16vh;\nbox-shadow: -40vmin 0 11.355vmin #171730;\n}\n\n&:nth-child(2) {\ncolor: #21172f;\ntop: 11%;\nleft: 84%;\nanimation-duration: 16s;\nanimation-delay: -7.5s;\ntransform-origin: 0vw -6vh;\nbox-shadow: 40vmin 0 8.23129vmin #21172f;\n}\n\n&:nth-child(3) {\ncolor: #21172f;\ntop: 6%;\nleft: 79%;\nanimation-duration: 14.4s;\nanimation-delay: -1.4s;\ntransform-origin: -5vw 16vh;\nbox-shadow: -40vmin 0 10.53284vmin #21172f;\n}\n\n&:nth-child(4) {\ncolor: #15222c;\ntop: 76%;\nleft: 13%;\nanimation-duration: 13.5s;\nanimation-delay: -8.8s;\ntransform-origin: -12vw 9vh;\nbox-shadow: 40vmin 0 13.90046vmin #15222c;\n}\n\n&:nth-child(5) {\ncolor: #171730;\ntop: 87%;\nleft: 9%;\nanimation-duration: 12.4s;\nanimation-delay: -9.7s;\ntransform-origin: -17vw -2vh;\nbox-shadow: -40vmin 0 9.68086vmin #171730;\n}\n\n&:nth-child(6) {\ncolor: #21172f;\ntop: 23%;\nleft: 39%;\nanimation-duration: 10.8s;\nanimation-delay: -0.6s;\ntransform-origin: 5vw 0vh;\nbox-shadow: 40vmin 0 7.08275vmin #21172f;\n}\n\n&:nth-child(7) {\ncolor: #15222c;\ntop: 4%;\nleft: 67%;\nanimation-duration: 10.4s;\nanimation-delay: -7.2s;\ntransform-origin: -18vw -9vh;\nbox-shadow: -40vmin 0 7.07752vmin #15222c;\n}\n\n&:nth-child(8) {\ncolor: #21172f;\ntop: 4%;\nleft: 58%;\nanimation-duration: 10.3s;\nanimation-delay: -10.5s;\ntransform-origin: -5vw -4vh;\nbox-shadow: -40vmin 0 11.50681vmin #21172f;\n}\n\n&:nth-child(9) {\ncolor: #171730;\ntop: 91%;\nleft: 49%;\nanimation-duration: 12.8s;\nanimation-delay: -5s;\ntransform-origin: 6vw -14vh;\nbox-shadow: 40vmin 0 5.71496vmin #171730;\n}\n\n&:nth-child(10) {\ncolor: #21172f;\ntop: 13%;\nleft: 61%;\nanimation-duration: 13.1s;\nanimation-delay: -11.9s;\ntransform-origin: 13vw -6vh;\nbox-shadow: -40vmin 0 6.28516vmin #21172f;\n}\n\n&:nth-child(11) {\ncolor: #171730;\ntop: 51%;\nleft: 37%;\nanimation-duration: 11.7s;\nanimation-delay: -12.6s;\ntransform-origin: 12vw -8vh;\nbox-shadow: -40vmin 0 7.5548vmin #171730;\n}\n\n&:nth-child(12) {\ncolor: #171730;\ntop: 30%;\nleft: 98%;\nanimation-duration: 15.8s;\nanimation-delay: -15.5s;\ntransform-origin: 25vw 18vh;\nbox-shadow: -40vmin 0 7.8254vmin #171730;\n}\n\n&:nth-child(13) {\ncolor: #15222c;\ntop: 22%;\nleft: 43%;\nanimation-duration: 12s;\nanimation-delay: -8.2s;\ntransform-origin: -7vw 23vh;\nbox-shadow: 40vmin 0 11.78703vmin #15222c;\n}\n\n&:nth-child(14) {\ncolor: #171730;\ntop: 100%;\nleft: 94%;\nanimation-duration: 13.2s;\nanimation-delay: -3.1s;\ntransform-origin: -17vw 13vh;\nbox-shadow: -40vmin 0 5.34329vmin #171730;\n}\n\n&:nth-child(15) {\ncolor: #15222c;\ntop: 64%;\nleft: 78%;\nanimation-duration: 13.2s;\nanimation-delay: -5.3s;\ntransform-origin: 0vw -15vh;\nbox-shadow: 40vmin 0 11.32768vmin #15222c;\n}\n\n&:nth-child(16) {\ncolor: #21172f;\ntop: 44%;\nleft: 35%;\nanimation-duration: 13s;\nanimation-delay: -3.6s;\ntransform-origin: 5vw -17vh;\nbox-shadow: -40vmin 0 14.03915vmin #21172f;\n}\n\n&:nth-child(17) {\ncolor: #15222c;\ntop: 100%;\nleft: 5%;\nanimation-duration: 14.4s;\nanimation-delay: -15.6s;\ntransform-origin: 17vw -4vh;\nbox-shadow: 40vmin 0 8.58716vmin #15222c;\n}\n\n&:nth-child(18) {\ncolor: #15222c;\ntop: 91%;\nleft: 69%;\nanimation-duration: 14.5s;\nanimation-delay: -8.7s;\ntransform-origin: -16vw -19vh;\nbox-shadow: 40vmin 0 7.2715vmin #15222c;\n}\n\n&:nth-child(19) {\ncolor: #21172f;\ntop: 87%;\nleft: 96%;\nanimation-duration: 11.5s;\nanimation-delay: -15.5s;\ntransform-origin: -20vw -11vh;\nbox-shadow: -40vmin 0 7.73618vmin #21172f;\n}\n\n&:nth-child(20) {\ncolor: #15222c;\ntop: 7%;\nleft: 85%;\nanimation-duration: 14.7s;\nanimation-delay: -7.6s;\ntransform-origin: 21vw -7vh;\nbox-shadow: -40vmin 0 10.62407vmin #15222c;\n}\n"])),Ae),De=function(){var n=Object(On.c)((function(n){return n.weather.typeRequset}));return Object(sn.jsxs)(_e,{children:[Object(sn.jsxs)(ze,{children:[n," forecast"]}),Object(sn.jsx)("div",{children:Object(sn.jsx)(He,{children:Object(sn.jsx)("use",{href:on+"#lady"})})})]})},_e=cn.b.header(_||(_=Object(K.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: space-evenly;\n"]))),ze=cn.b.h2(z||(z=Object(K.a)(["\nfont-weight: 700;\nfont-size: 2rem;\ncolor: #e96e50;\n"]))),He=cn.b.svg(H||(H=Object(K.a)(["\nwidth: 108px;\nheight: 50px;\nbackground: rgba(255, 255, 255, 0.3);\nbox-shadow: 0 15px 35px rgba(255, 255, 255, 0.3);\nborder-radius: 2px;\nbackdrop-filter: blur(10px);\n"]))),Fe=function(n){var e=n.data[1];return Object(sn.jsx)(Ie,{children:e})},Ie=cn.b.h3(F||(F=Object(K.a)(["\ntext-align: center;\nfont-weight: 600;\n"]))),We=function(n){var e=n.data,t=e.icon;return Object(sn.jsxs)(Pe,{children:[Object(sn.jsx)("img",{style:{maxWidth:"50px"},src:t?"http://openweathermap.org/img/wn/".concat(t,"@2x.png"):"",alt:"icon"}),Object(sn.jsx)(Le,{children:e.description})]})},Pe=cn.b.figure(I||(I=Object(K.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: space-evenly;\n"]))),Le=cn.b.figcaption(W||(W=Object(K.a)(["\nfont-size: 1.2rem;\nfont-weight: 500;\n"]))),Ne=function(n){var e=n.data,t=new Date(1e3*e[1]).toLocaleString();return Object(sn.jsx)(Ye,{children:Object(sn.jsx)("time",{dateTime:t,children:t})})},Ye=cn.b.h3(P||(P=Object(K.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nfont-size: 1rem;\nfont-weight: 600;\n"]))),Me=function(n){var e=n.data,t="",r="",a="";switch(e[0]){case"temp":t="Temperature",r=e[1].toFixed(1)+String.fromCharCode(8451);break;case"feels_like":t="Feels like",r=e[1].toFixed(1)+String.fromCharCode(8451);break;case"speed":t="Speed",r=e[1].toFixed(1)+"(m/s)";break;case"deg":t="Direction",r=e[1].toFixed(1)+String.fromCharCode(37),a="rotateZ(".concat(e[1],"deg)")}return Object(sn.jsxs)(Ue,{children:[Object(sn.jsx)("span",{children:t}),Object(sn.jsx)("span",{children:"Direction"===t?Object(sn.jsx)(Xe,{style:{transform:a},children:Object(sn.jsx)("use",{href:on+"#arrow"})}):r})]})},Ue=cn.b.li(L||(L=Object(K.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\n"]))),Xe=cn.b.svg(N||(N=Object(K.a)(["\nwidth: 10px;\nheight: 10px;\n"]))),qe=function(n){var e,t=n.data,r=[];switch(t[0]){case"main":e="Temperature",r=Object.entries(t[1]).filter((function(n){return"temp"===n[0]||"feels_like"===n[0]}));break;case"wind":e="Wind",r=Object.entries(t[1]);break;default:e="unknown"}return Object(sn.jsxs)(Ve,{children:[Object(sn.jsx)(Be,{children:Object(sn.jsx)("h3",{children:e})}),r.map((function(n,e){return Object(sn.jsx)(Me,{data:n},e)}))]})},Ve=cn.b.ul(Y||(Y=Object(K.a)(["\ndisplay: grid;\ngrid-template-columns: 1fr;\ngrid-template-rows: repeat(3, 14px);\ngrid-gap: 5px;\n"]))),Be=cn.b.li(M||(M=Object(K.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ncolor: #171730;\nfont-weight: 500;\n"]))),Ge=function(n){var e=n.data,t=[],r=[],a=[],i=[],o=[];return e&&(t=Object.entries(e).filter((function(n){return"name"===n[0]})),r=Object.entries(e).filter((function(n){return"dt"===n[0]})),a=Object.values(e.weather),i=Object.entries(e).filter((function(n){return"main"===n[0]})),o=Object.entries(e).filter((function(n){return"wind"===n[0]}))),Object(sn.jsxs)(Je,{children:[t.length>0?t.map((function(n,e){return Object(sn.jsx)(Fe,{data:n},e)})):r.map((function(n,e){return Object(sn.jsx)(Ne,{data:n},e)})),a.map((function(n,e){return Object(sn.jsx)(We,{data:n},e)})),i.map((function(n,e){return Object(sn.jsx)(qe,{data:n},e)})),o.map((function(n,e){return Object(sn.jsx)(qe,{data:n},e)}))]})},Je=cn.b.div(U||(U=Object(K.a)(["\nwidth: 100%;\ndisplay: grid;\ngrid-template-columns: 1fr;\ngrid-template-rows: 18px 50px repeat(2, 52px);\nbackground: rgba(255, 255, 255, 0.3);\nbox-shadow: 0 15px 35px rgba(255, 255, 255, 0.3);\nborder-radius: 15px;\nbackdrop-filter: blur(10px);\npadding: 5px;\ncursor: pointer;\n"]))),Ze=function(){return Object(sn.jsxs)(Ke,{children:[Object(sn.jsx)($e,{}),Object(sn.jsx)($e,{}),Object(sn.jsx)($e,{}),Object(sn.jsx)($e,{}),Object(sn.jsx)($e,{})]})},Qe=Object(cn.c)(X||(X=Object(K.a)(["\n0% {\n    transform: rotateY(0deg) rotateX(0deg);\n    opacity: 1;\n}\n25% {\n    transform: rotateY(180deg) rotateX(360deg);\n}\n50% {\n    transform: rotateY(540deg) rotateX(540deg);\n}\n75% {\n    transform: rotateY(720deg) rotateX(900deg);\n}\n100% {\n    transform: rotateY(900deg) rotateX(1080deg);\n    opacity: 1;\n}\n"]))),Ke=cn.b.div(q||(q=Object(K.a)(["\n-ms-flex-item-align: center;\n-ms-grid-row-align: center;\nalign-self: center;\n-ms-grid-column-align: center;\njustify-self: center;\nwidth: 550px;\nheight: 550px;\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nperspective: 11000px;\ntransform-style: preserve-3d;\n"]))),$e=cn.b.div(V||(V=Object(K.a)(["\ntransform-style: preserve-3d;\nbox-sizing: border-box;\nopacity: 0;\nwidth: 550px;\nheight: 550px;\nborder: 6px solid #e96f50;\nborder-radius: 413px;\nposition: absolute;\ntop: 0;\nleft: 0;\nanimation: "," 13.5s ease-in-out alternate infinite;\n\n&:nth-of-type(1) {\n    animation-delay: 225ms;\n}\n\n&:nth-of-type(2) {\n    animation-delay: 450ms;\n}\n\n&:nth-of-type(3) {\n    animation-delay: 675ms;\n}\n\n&:nth-of-type(4) {\n    animation-delay: 900ms;\n}\n\n&:nth-of-type(5) {\n    animation-delay: 1125ms;\n}\n"])),Qe),nt=function(){var n=Object(On.c)((function(n){return n.weather})),e=n.dataCity,t=n.loadingCards,r=n.trueInfo,a=[];return(null===e||void 0===e?void 0:e.list)&&(a=e.list.slice(0,9)),Object(sn.jsx)(et,{children:t?Object(sn.jsx)(Ze,{}):r?a.map((function(n,e){return Object(sn.jsx)(Ge,{data:n},e)})):Object(sn.jsx)(dn,{})})},et=cn.b.div(B||(B=Object(K.a)(["\nalign-self: center;\njustify-self: center;\ndisplay: grid;\ngrid-template-columns: 200px 200px 200px;\ngrid-template-rows: 190px 190px 190px;\ngrid-gap: 10px;\nalign-content: center;\njustify-items: center;\npadding-bottom: 10px;\nposition: relative;\n\n@media screen and (max-width: 440px) {\n    grid-template-columns: 200px;\n    grid-template-rows: repeat(5, 190px);\n}\n\n@media screen and (min-width: 440px) and (max-width: 650px) {\n        grid-template-columns: 200px 200px;\n        grid-template-rows: repeat(4, 190px);\n}\n"]))),tt=function(){return Object(sn.jsxs)(rt,{children:[Object(sn.jsx)(De,{}),Object(sn.jsx)(nt,{})]})},rt=cn.b.div(G||(G=Object(K.a)(["\ndisplay: grid;\ngrid-template-columns: 1fr;\ngrid-template-rows: 10vh 90vh;\n\n@media screen and (max-width: 650px) {\n        grid-template-rows: 70px 1fr;\n}\n"]))),at={enableHighAccuracy:!0,timeout:6e4,maximumAge:864e5},it={lat:50.45466,lon:30.5238},ot=function(){for(var n=[],e=0;e<=19;e++)n.push(e);return n},ct=function(){var n=jn(at),e=n.location,t=(n.error,Object(On.b)()),r=Object($.useMemo)((function(){return null!==e&&void 0!==e?e:it}),[e]);return Object($.useEffect)((function(){t({type:ee,payload:r}),t(be(r))}),[t,r]),Object(sn.jsxs)(st,{children:[Object(sn.jsx)(dt,{children:ot().map((function(n){return Object(sn.jsx)(Te,{},n)}))}),Object(sn.jsxs)(lt,{children:[Object(sn.jsx)(tt,{}),Object(sn.jsx)(Ee,{})]})]})},st=cn.b.div(J||(J=Object(K.a)(["\nposition: relative;\n"]))),dt=cn.b.div(Z||(Z=Object(K.a)(["\nwidth: 100vw;\nheight: 100vh;\nbackground: #48484a;\nz-index: 1;\n"]))),lt=cn.b.div(Q||(Q=Object(K.a)(["\nposition: absolute;\ntop: 0;\nleft: 0;\nwidth: 100vw;\nheight: 100vh;\ndisplay: grid;\ngrid-template-columns: 72% 28%;\ngrid-template-rows: 1fr;\noverflow-y: scroll;\n\n@media screen and (max-width: 1200px) {\n  grid-template-columns: 1fr;\n  grid-template-rows: 680px 680px;\n}\n\n@media screen and (min-width: 440px) and (max-width: 650px) {\n  grid-template-rows: 1200px 680px;\n}\n\n@media screen and(max-width: 440px) {\n  grid-template-rows: 1838px 680px;\n}\n"]))),ut=function(){return Object(sn.jsx)(rn.a,{children:Object(sn.jsxs)(an.c,{children:[Object(sn.jsx)(an.a,{exact:!0,path:"/",component:ct}),Object(sn.jsx)(an.a,{path:"*",component:dn})]})})},bt=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,49)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),i(n),o(n)}))},pt=t(34),ft=t.n(pt),jt=t(18),xt=t(35),ht={dataPosition:null,dataCity:null,lastCity:"",loadingCards:!0,loadingForm:!0,lastCoords:null,typeRequset:"Hourly",trueInfo:!0},mt=Object(jt.b)({weather:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Gn:return Object(Yn.a)(Object(Yn.a)({},n),{},{dataPosition:Object(Yn.a)({},e.payload)});case Zn:return Object(Yn.a)(Object(Yn.a)({},n),{},{lastCity:e.payload});case Jn:return Object(Yn.a)(Object(Yn.a)({},n),{},{dataCity:Object(Yn.a)({},e.payload)});case Qn:return Object(Yn.a)(Object(Yn.a)({},n),{},{lastCoords:Object(Yn.a)({},e.payload)});case ae:return Object(Yn.a)(Object(Yn.a)({},n),{},{typeRequset:e.payload});case ie:return Object(Yn.a)(Object(Yn.a)({},n),{},{loadingCards:!0});case oe:return Object(Yn.a)(Object(Yn.a)({},n),{},{loadingCards:!1});case $n:return Object(Yn.a)(Object(Yn.a)({},n),{},{trueInfo:!0});case ne:return Object(Yn.a)(Object(Yn.a)({},n),{},{trueInfo:!1});case ce:return Object(Yn.a)(Object(Yn.a)({},n),{},{loadingForm:!0});case se:return Object(Yn.a)(Object(Yn.a)({},n),{},{loadingForm:!1});default:return n}}}),Ot=t(9),gt=t.n(Ot),vt=t(6),wt=t(21),yt="44b788430b6eae4f49d10064566fc911",kt="https://api.openweathermap.org/data/2.5/weather?",Ct=function(n){return new Promise((function(e){return setTimeout((function(){return e()}),n)}))};function Et(n){return St.apply(this,arguments)}function St(){return(St=Object(wt.a)(gt.a.mark((function n(e){var t,r,a;return gt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Ct(3e3);case 3:return n.next=5,fetch("".concat(kt,"lat=").concat(e.lat,"&lon=").concat(e.lon,"&units=metric&APPID=").concat(yt));case 5:return r=n.sent,n.next=8,r.json();case 8:return a=n.sent,t=a,n.abrupt("return",t);case 13:n.prev=13,n.t0=n.catch(0),console.error(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}var Tt="44b788430b6eae4f49d10064566fc911",At="https://api.openweathermap.org/data/2.5/forecast?",Rt=function(n){return new Promise((function(e){return setTimeout((function(){return e()}),n)}))};function Dt(n){return _t.apply(this,arguments)}function _t(){return(_t=Object(wt.a)(gt.a.mark((function n(e){var t,r,a;return gt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Rt(3e3);case 3:return n.next=5,fetch("".concat(At,"q=").concat(e,"&units=metric&appid=").concat(Tt));case 5:return r=n.sent,n.next=8,r.json();case 8:return a=n.sent,t=a,n.abrupt("return",t);case 13:n.prev=13,n.t0=n.catch(0),console.error(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}var zt=gt.a.mark(Ft),Ht=gt.a.mark(It);function Ft(){return gt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(vt.c)(ee,It);case 2:case"end":return n.stop()}}),zt)}function It(n){var e,t;return gt.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(vt.b)(Oe());case 3:return r.next=5,Object(vt.a)(Et,n.payload);case 5:if(200!==(e=r.sent).cod){r.next=22;break}return r.next=9,Object(vt.b)(de(e));case 9:return r.next=11,Object(vt.b)(ge());case 11:return r.next=13,Object(vt.b)(ue(e.name));case 13:return r.next=15,Object(vt.a)(Dt,e.name);case 15:return t=r.sent,r.next=18,Object(vt.b)(le(t));case 18:return r.next=20,Object(vt.b)(me());case 20:r.next=23;break;case 22:console.log("Error");case 23:r.next=29;break;case 25:return r.prev=25,r.t0=r.catch(0),r.next=29,console.log("Error behind promise!",r.t0.message);case 29:case"end":return r.stop()}}),Ht,null,[[0,25]])}var Wt=gt.a.mark(Lt),Pt=gt.a.mark(Nt);function Lt(){return gt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(vt.c)(Kn,Nt);case 2:case"end":return n.stop()}}),Wt)}function Nt(n){var e,t,r;return gt.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(vt.b)(he());case 3:return a.next=5,Object(vt.b)(Oe());case 5:return a.next=7,Object(vt.a)(Dt,n.payload);case 7:if((e=a.sent).cod!==String(200)){a.next=29;break}return t=e.city.coord,a.next=12,Object(vt.b)(be(t));case 12:return a.next=14,Object(vt.b)(ue(e.city.name));case 14:return a.next=16,Object(vt.a)(Et,t);case 16:return r=a.sent,a.next=19,Object(vt.b)(je());case 19:return a.next=21,Object(vt.b)(de(r));case 21:return a.next=23,Object(vt.b)(me());case 23:return a.next=25,Object(vt.b)(ge());case 25:return a.next=27,Object(vt.b)(le(e));case 27:a.next=36;break;case 29:return a.next=31,Object(vt.b)(me());case 31:return a.next=33,Object(vt.b)(ge());case 33:return a.next=35,Object(vt.b)(xe());case 35:console.log("Error");case 36:a.next=42;break;case 38:return a.prev=38,a.t0=a.catch(0),a.next=42,console.log("Error behind promise!",a.t0.message);case 42:case"end":return a.stop()}}),Pt,null,[[0,38]])}var Yt=gt.a.mark(Ut),Mt=gt.a.mark(Xt);function Ut(){return gt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(vt.c)(te,Xt);case 2:case"end":return n.stop()}}),Yt)}function Xt(n){var e;return gt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(vt.b)(he());case 3:return t.next=5,Object(vt.b)(je());case 5:return t.next=7,Object(vt.a)(Dt,n.payload);case 7:if((e=t.sent).cod!==String(200)){t.next=15;break}return t.next=11,Object(vt.b)(le(e));case 11:return t.next=13,Object(vt.b)(me());case 13:t.next=22;break;case 15:return t.next=17,Object(vt.b)(me());case 17:return t.next=19,Object(vt.b)(ge());case 19:return t.next=21,Object(vt.b)(xe());case 21:console.log("Error");case 22:t.next=28;break;case 24:return t.prev=24,t.t0=t.catch(0),t.next=28,console.log("Error behind promise!",t.t0.message);case 28:case"end":return t.stop()}}),Mt,null,[[0,24]])}var qt="44b788430b6eae4f49d10064566fc911",Vt="https://api.openweathermap.org/data/2.5/find?",Bt=function(n){return new Promise((function(e){return setTimeout((function(){return e()}),n)}))};function Gt(n){return Jt.apply(this,arguments)}function Jt(){return(Jt=Object(wt.a)(gt.a.mark((function n(e){var t,r,a;return gt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Bt(3e3);case 3:return n.next=5,fetch("".concat(Vt,"lat=").concat(e.lat,"&lon=").concat(e.lon,"&cnt=",9,"&units=metric&appid=").concat(qt));case 5:return r=n.sent,n.next=8,r.json();case 8:return a=n.sent,t=a,n.abrupt("return",t);case 13:n.prev=13,n.t0=n.catch(0),console.error(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}var Zt,Qt=gt.a.mark($t),Kt=gt.a.mark(nr);function $t(){return gt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(vt.c)(re,nr);case 2:case"end":return n.stop()}}),Qt)}function nr(n){var e;return gt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(vt.b)(he());case 3:return t.next=5,Object(vt.b)(je());case 5:return t.next=7,Object(vt.a)(Gt,n.payload);case 7:if((e=t.sent).cod!==String(200)){t.next=15;break}return t.next=11,Object(vt.b)(le(e));case 11:return t.next=13,Object(vt.b)(me());case 13:t.next=22;break;case 15:return t.next=17,Object(vt.b)(me());case 17:return t.next=19,Object(vt.b)(ge());case 19:return t.next=21,Object(vt.b)(xe());case 21:console.log("Error");case 22:t.next=28;break;case 24:return t.prev=24,t.t0=t.catch(0),t.next=28,console.log("Error behind promise!",t.t0.message);case 28:case"end":return t.stop()}}),Kt,null,[[0,24]])}var er=Object(cn.a)(Zt||(Zt=Object(K.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\n:focus,\n:active {\n  outline: none;\n}\n\na:focus,\na:active {\n  outline: none;\n}\n\nnav,\nheader,\nfooter,\naside {\n  display: block;\n}\n\nhtml,\nbody {\n  width: 100%;\n  font-size: 100%;\n  line-height: 1;\n  font-size: 14px;\n  text-size-adjust: 100%;\n  font-family: 'Inter', sans-serif;\n  margin: 0;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background:#edf5e1;\n  min-height: 100vh;\n}\n\ninput,\nbutton,\ntextarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na,\na:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: 400;\n}\n\n.done {\n    text-decoration: line-through;\n    color: #ccc;\n}\n"])));ft.a.load({google:{families:["Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"]}});var tr=Object(xt.a)(),rr=Object(jt.d)(mt,Object(jt.c)(Object(jt.a)(tr),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()));tr.run(Ft),tr.run(Lt),tr.run(Ut),tr.run($t),tn.a.render(Object(sn.jsx)(nn.a.StrictMode,{children:Object(sn.jsxs)(On.a,{store:rr,children:[Object(sn.jsx)(er,{}),Object(sn.jsx)(ut,{})]})}),document.getElementById("root")),bt()}},[[48,1,2]]]);
//# sourceMappingURL=main.67f6c879.chunk.js.map