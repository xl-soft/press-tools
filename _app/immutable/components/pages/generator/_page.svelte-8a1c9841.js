import{S as ze,i as Ie,s as Le,k as D,q as Y,a as W,w as ae,e as me,l as F,m as M,r as Z,h as _,c as K,x as re,n as c,L as Te,b as U,H as R,y as oe,M as ce,N as B,f as J,t as x,d as Ae,z as fe,O as Oe,P as ee,o as Ue,Q as V,u as Ce,g as Ee,R as je,T as le}from"../../../chunks/index-af9e005e.js";import{c as Ne}from"../../../chunks/shared-23917130.js";import{D as ue}from"../../../chunks/Divider-01626caf.js";var ie,_e;function Se(){if(_e)return ie;_e=1;var e=9007199254740991,s="[object Arguments]",n="[object Function]",a="[object GeneratorFunction]",t=/^(?:0|[1-9]\d*)$/;function b(r,w){for(var E=-1,q=Array(r);++E<r;)q[E]=w(E);return q}function d(r,w){return function(E){return r(w(E))}}var g=Object.prototype,y=g.hasOwnProperty,P=g.toString,S=g.propertyIsEnumerable,j=d(Object.keys,Object);function T(r,w){var E=k(r)||L(r)?b(r.length,String):[],q=E.length,H=!!q;for(var Q in r)(w||y.call(r,Q))&&!(H&&(Q=="length"||N(Q,q)))&&E.push(Q);return E}var v=p();function z(r,w){return r&&v(r,w,te)}function I(r,w,E,q){return z(r,function(H,Q,se){w(q,E(H),Q,se)}),q}function l(r){if(!G(r))return j(r);var w=[];for(var E in Object(r))y.call(r,E)&&E!="constructor"&&w.push(E);return w}function p(r){return function(w,E,q){for(var H=-1,Q=Object(w),se=q(w),pe=se.length;pe--;){var he=se[r?pe:++H];if(E(Q[he],he,Q)===!1)break}return w}}function o(r,w){return function(E,q){return I(E,r,w(q),{})}}function N(r,w){return w=w??e,!!w&&(typeof r=="number"||t.test(r))&&r>-1&&r%1==0&&r<w}function G(r){var w=r&&r.constructor,E=typeof w=="function"&&w.prototype||g;return r===E}function L(r){return f(r)&&y.call(r,"callee")&&(!S.call(r,"callee")||P.call(r)==s)}var k=Array.isArray;function O(r){return r!=null&&h(r.length)&&!i(r)}function f(r){return C(r)&&O(r)}function i(r){var w=m(r)?P.call(r):"";return w==n||w==a}function h(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=e}function m(r){var w=typeof r;return!!r&&(w=="object"||w=="function")}function C(r){return!!r&&typeof r=="object"}var X=o(function(r,w,E){r[w]=E},u(A));function te(r){return O(r)?T(r):l(r)}function u(r){return function(){return r}}function A(r){return r}return ie=X,ie}var Pe=function(s){const n=Se(),a=s?s.preset:"ru",t={а:"a",б:"b",в:"v",д:"d",з:"z",й:"y",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",ь:""};a==="ru"?Object.assign(t,{г:"g",и:"i",ъ:"",ы:"i",э:"e"}):a==="uk"?Object.assign(t,{г:"h",ґ:"g",е:"e",и:"y",і:"i","'":"","’":"",ʼ:""}):a==="mn"&&Object.assign(t,{г:"g",ө:"o",ү:"u",и:"i",ы:"y",э:"e",ъ:""});let b;a==="ru"?b=Object.assign(n(t),{i:"и","":""}):a==="uk"?b=Object.assign(n(t),{"":""}):a==="mn"&&(b=Object.assign(n(t),{"":""}));const d=a==="ru"?{е:"ye"}:{є:"ye",ї:"yi"},g={ё:"yo",ж:"zh",х:"kh",ц:"ts",ч:"ch",ш:"sh",щ:"shch",ю:"yu",я:"ya"},y=Object.assign({},g,d),P=Object.assign(n(y)),S=Object.assign(t,y),j=Object.assign({},t,{й:"i"});a==="ru"?Object.assign(j,{е:"e"}):a==="uk"?Object.assign(j,{ї:"i"}):a==="mn"&&Object.assign(j,{е:"e"});let T;a==="ru"?T=Object.assign(n(t),{i:"и",y:"ы",e:"е","":""}):a==="uk"&&(T=Object.assign(n(t),{"":""}));let v={};a==="uk"&&(v={є:"ie",ю:"iu",я:"ia"});const z=Object.assign(g,v),I=Object.assign(n(z)),l=Object.assign(j,z);function p(N,G){if(!N)return"";const L=N.normalize();let k="",O=!1;for(let f=0;f<L.length;f++){const i=L[f]===L[f].toUpperCase();let h=L[f].toLowerCase();if(h===" "){k+=G||" ",O=!0;continue}let m;a==="uk"&&L.slice(f-1,f+1).toLowerCase()==="зг"?m="gh":f===0||O?(m=S[h],O=!1):m=l[h],typeof m>"u"?k+=i?h.toUpperCase():h:i?m.length>1?k+=m[0].toUpperCase()+m.slice(1):k+=m.toUpperCase():k+=m}return k}function o(N,G){if(!N)return"";const L=N.normalize();let k="",O=!1,f=0;for(;f<L.length;){const i=L[f]===L[f].toUpperCase();let h=L[f].toLowerCase(),m=f;if(h===" "||h===G){k+=" ",O=!0,f++;continue}let C,X=L.slice(f,f+2).toLowerCase();f===0||O?(C=P[X],C?f+=2:(C=b[h],f++),O=!1):(C=I[X],C?f+=2:(C=T[h],f++)),L.slice(m,m+4).toLowerCase()==="shch"?(C="щ",f=m+4):L.slice(m-1,m+2).toLowerCase()==="zgh"&&(C="г",f=m+2),typeof C>"u"?k+=i?h.toUpperCase():h:i?C.length>1?k+=C[0].toUpperCase()+C.slice(1):k+=C.toUpperCase():k+=C}return k}return{transform:p,reverse:o}};const De=""+new URL("../../../assets/watermark-cb222196.png",import.meta.url).href,Fe=""+new URL("../../../assets/birthday_text_shade-4a045e54.png",import.meta.url).href,Re=""+new URL("../../../assets/birthday_title-ac16bff3.png",import.meta.url).href,Be=""+new URL("../../../assets/stipcom_frame-8ba7d865.png",import.meta.url).href,Ge=""+new URL("../../../assets/short_standart_shade-9a7ca7c3.png",import.meta.url).href,qe=""+new URL("../../../assets/wide_standart_shade-4078a460.png",import.meta.url).href;let $={birthday:(e,s,n)=>{let a=new Image;a.src=s.image,a.onload=()=>{e.drawImage(a,s.pos.x,s.pos.y,a.width*(s.pos.zoom/100),a.height*(s.pos.zoom/100));let t=new Image;t.src=De,t.onload=()=>e.drawImage(t,0,0),e.fillStyle="#ffffff";let b=new Image;b.src=Fe,b.onload=()=>{e.drawImage(b,0,s.height-837),e.font="64px Dela Gothic One",e.fillText(s.lines[1].value,64,1211+93),e.font="96px Dela Gothic One",e.fillText(s.lines[0].value,64,1285+139)};let d=new Image;d.src=Re,d.onload=()=>e.drawImage(d,374,87)}},stipcom:(e,s,n)=>{let a=new Image;a.src=Be,e.fillStyle="#ffffff",a.onload=()=>{e.drawImage(a,0,0),e.font="40px Dela Gothic One",e.textAlign="right",e.fillText(s.lines[0].value,1850,212+45)}},standartwide:(e,s,n)=>{let a=new Image;a.src=s.image,a.onload=()=>{e.drawImage(a,s.pos.x,s.pos.y,a.width*(s.pos.zoom/100),a.height*(s.pos.zoom/100));let t=new Image;t.src=qe,t.onload=()=>{e.drawImage(t,0,0),e.textAlign="right",e.fillStyle="#ffffff",e.font="96px Dela Gothic One",e.fillText(s.lines[0].value,n.width-60,20+139),e.font="64px Dela Gothic One",e.fillText(s.lines[1].value,n.width-60,120+93)}}},standart:(e,s,n)=>{let a=new Image;a.src=s.image,a.onload=()=>{e.drawImage(a,s.pos.x,s.pos.y,a.width*(s.pos.zoom/100),a.height*(s.pos.zoom/100));let t=new Image;t.src=Ge,t.onload=()=>{e.drawImage(t,0,0),e.textAlign="right",e.fillStyle="#ffffff",e.font="96px Dela Gothic One",e.fillText(s.lines[0].value,n.width-60,20+139),e.font="64px Dela Gothic One",e.fillText(s.lines[1].value,n.width-60,120+93)}}}};const We=""+new URL("../../../assets/background-0c68b1ea.png",import.meta.url).href;function de(e,s,n){const a=e.slice();return a[13]=s[n],a[14]=s,a[15]=n,a}function ge(e,s,n){const a=e.slice();return a[16]=s[n],a}function ve(e){let s,n=e[16].name+"",a,t,b;function d(){return e[7](e[16])}return{c(){s=D("option"),a=Y(n),this.h()},l(g){s=F(g,"OPTION",{});var y=M(s);a=Z(y,n),y.forEach(_),this.h()},h(){s.__value=e[16].value,s.value=s.__value},m(g,y){U(g,s,y),R(s,a),t||(b=[B(s,"click",e[4]),B(s,"click",d)],t=!0)},p(g,y){e=g},d(g){g&&_(s),t=!1,ee(b)}}}function we(e){let s,n;return{c(){s=D("span"),n=Y("Пожалуйста, выберите шаблон"),this.h()},l(a){s=F(a,"SPAN",{class:!0});var t=M(s);n=Z(t,"Пожалуйста, выберите шаблон"),t.forEach(_),this.h()},h(){c(s,"class","subtitle")},m(a,t){U(a,s,t),R(s,n)},d(a){a&&_(s)}}}function be(e){let s,n,a,t,b,d,g,y,P,S,j,T,v=e[0].lines,z=[];for(let l=0;l<v.length;l+=1)z[l]=ye(de(e,v,l));let I=e[0].noimage==!1&&ke(e);return a=new ue({props:{title:"Сохранение"}}),{c(){for(let l=0;l<z.length;l+=1)z[l].c();s=W(),I&&I.c(),n=W(),ae(a.$$.fragment),t=W(),b=D("button"),d=Y("Скачать"),g=W(),y=D("button"),P=Y("Сбросить"),this.h()},l(l){for(let N=0;N<z.length;N+=1)z[N].l(l);s=K(l),I&&I.l(l),n=K(l),re(a.$$.fragment,l),t=K(l),b=F(l,"BUTTON",{class:!0});var p=M(b);d=Z(p,"Скачать"),p.forEach(_),g=K(l),y=F(l,"BUTTON",{class:!0});var o=M(y);P=Z(o,"Сбросить"),o.forEach(_),this.h()},h(){c(b,"class","ok"),c(y,"class","reset")},m(l,p){for(let o=0;o<z.length;o+=1)z[o].m(l,p);U(l,s,p),I&&I.m(l,p),U(l,n,p),oe(a,l,p),U(l,t,p),U(l,b,p),R(b,d),U(l,g,p),U(l,y,p),R(y,P),S=!0,j||(T=[B(b,"click",e[3]),B(y,"click",e[2])],j=!0)},p(l,p){if(p&17){v=l[0].lines;let o;for(o=0;o<v.length;o+=1){const N=de(l,v,o);z[o]?z[o].p(N,p):(z[o]=ye(N),z[o].c(),z[o].m(s.parentNode,s))}for(;o<z.length;o+=1)z[o].d(1);z.length=v.length}l[0].noimage==!1?I?I.p(l,p):(I=ke(l),I.c(),I.m(n.parentNode,n)):I&&(I.d(1),I=null)},i(l){S||(J(a.$$.fragment,l),S=!0)},o(l){x(a.$$.fragment,l),S=!1},d(l){Oe(z,l),l&&_(s),I&&I.d(l),l&&_(n),fe(a,l),l&&_(t),l&&_(b),l&&_(g),l&&_(y),j=!1,ee(T)}}}function ye(e){let s,n,a,t;function b(){e[9].call(s,e[14],e[15])}return{c(){s=D("input"),this.h()},l(d){s=F(d,"INPUT",{type:!0,placeholder:!0}),this.h()},h(){c(s,"type","text"),c(s,"placeholder",n=e[13].placeholder)},m(d,g){U(d,s,g),V(s,e[13].value),a||(t=[B(s,"input",b),B(s,"input",e[4])],a=!0)},p(d,g){e=d,g&3&&n!==(n=e[13].placeholder)&&c(s,"placeholder",n),g&3&&s.value!==e[13].value&&V(s,e[13].value)},d(d){d&&_(s),a=!1,ee(t)}}}function ke(e){let s,n,a,t,b=e[0].filename+"",d,g,y,P,S,j,T,v,z,I,l,p,o,N,G,L,k,O,f,i,h,m,C,X,te;return{c(){s=D("label"),n=D("input"),a=W(),t=D("span"),d=Y(b),g=W(),y=D("span"),P=Y("Позиционирование"),S=W(),j=D("span"),T=Y("Zoom "),v=D("input"),I=W(),l=D("span"),p=Y("X "),o=D("input"),k=W(),O=D("span"),f=Y("Y "),i=D("input"),this.h()},l(u){s=F(u,"LABEL",{class:!0});var A=M(s);n=F(A,"INPUT",{type:!0,accept:!0,class:!0}),a=K(A),t=F(A,"SPAN",{});var r=M(t);d=Z(r,b),r.forEach(_),A.forEach(_),g=K(u),y=F(u,"SPAN",{class:!0});var w=M(y);P=Z(w,"Позиционирование"),w.forEach(_),S=K(u),j=F(u,"SPAN",{class:!0});var E=M(j);T=Z(E,"Zoom "),v=F(E,"INPUT",{type:!0,min:!0,max:!0,title:!0,class:!0}),E.forEach(_),I=K(u),l=F(u,"SPAN",{class:!0});var q=M(l);p=Z(q,"X "),o=F(q,"INPUT",{type:!0,min:!0,max:!0,title:!0,class:!0}),q.forEach(_),k=K(u),O=F(u,"SPAN",{class:!0});var H=M(O);f=Z(H,"Y "),i=F(H,"INPUT",{type:!0,min:!0,max:!0,title:!0,class:!0}),H.forEach(_),this.h()},h(){c(n,"type","file"),n.multiple=!0,c(n,"accept","image/*"),c(n,"class","svelte-5uzkvt"),c(s,"class","input-file svelte-5uzkvt"),c(y,"class","subtitle"),c(v,"type","range"),c(v,"min","50"),c(v,"max","500"),c(v,"title",z=e[0].pos.zoom/100),c(v,"class","svelte-5uzkvt"),c(j,"class","range svelte-5uzkvt"),c(o,"type","range"),c(o,"min",N="-"+e[0].width*(e[0].pos.zoom/100)),c(o,"max",G=e[0].width*(e[0].pos.zoom/100)),c(o,"title",L=e[0].pos.x),c(o,"class","svelte-5uzkvt"),c(l,"class","range svelte-5uzkvt"),c(i,"type","range"),c(i,"min",h="-"+e[0].height*(e[0].pos.zoom/100)),c(i,"max",m=e[0].height*(e[0].pos.zoom/100)),c(i,"title",C=e[0].pos.y),c(i,"class","svelte-5uzkvt"),c(O,"class","range svelte-5uzkvt")},m(u,A){U(u,s,A),R(s,n),R(s,a),R(s,t),R(t,d),U(u,g,A),U(u,y,A),R(y,P),U(u,S,A),U(u,j,A),R(j,T),R(j,v),V(v,e[0].pos.zoom),U(u,I,A),U(u,l,A),R(l,p),R(l,o),V(o,e[0].pos.x),U(u,k,A),U(u,O,A),R(O,f),R(O,i),V(i,e[0].pos.y),X||(te=[B(s,"change",e[6]),B(v,"change",e[10]),B(v,"input",e[10]),B(v,"click",e[4]),B(o,"change",e[11]),B(o,"input",e[11]),B(o,"click",e[4]),B(i,"change",e[12]),B(i,"input",e[12]),B(i,"click",e[4])],X=!0)},p(u,A){A&1&&b!==(b=u[0].filename+"")&&Ce(d,b),A&3&&z!==(z=u[0].pos.zoom/100)&&c(v,"title",z),A&3&&V(v,u[0].pos.zoom),A&3&&N!==(N="-"+u[0].width*(u[0].pos.zoom/100))&&c(o,"min",N),A&3&&G!==(G=u[0].width*(u[0].pos.zoom/100))&&c(o,"max",G),A&3&&L!==(L=u[0].pos.x)&&c(o,"title",L),A&3&&V(o,u[0].pos.x),A&3&&h!==(h="-"+u[0].height*(u[0].pos.zoom/100))&&c(i,"min",h),A&3&&m!==(m=u[0].height*(u[0].pos.zoom/100))&&c(i,"max",m),A&3&&C!==(C=u[0].pos.y)&&c(i,"title",C),A&3&&V(i,u[0].pos.y)},d(u){u&&_(s),u&&_(g),u&&_(y),u&&_(S),u&&_(j),u&&_(I),u&&_(l),u&&_(k),u&&_(O),X=!1,ee(te)}}}function Ke(e){let s,n,a,t,b,d,g,y,P,S,j,T,v,z,I,l,p,o,N,G;t=new ue({props:{title:"Результат"}}),S=new ue({props:{title:"Настройка"}});let L=e[1],k=[];for(let i=0;i<L.length;i+=1)k[i]=ve(ge(e,L,i));let O=!e[0].template&&we(),f=e[0].template&&be(e);return{c(){s=D("a"),n=Y("Назад"),a=W(),ae(t.$$.fragment),b=W(),d=D("canvas"),P=W(),ae(S.$$.fragment),j=W(),T=D("select"),v=D("option"),z=Y("Выберите шаблон");for(let i=0;i<k.length;i+=1)k[i].c();I=W(),O&&O.c(),l=W(),f&&f.c(),p=me(),this.h()},l(i){s=F(i,"A",{href:!0,class:!0});var h=M(s);n=Z(h,"Назад"),h.forEach(_),a=K(i),re(t.$$.fragment,i),b=K(i),d=F(i,"CANVAS",{width:!0,height:!0,id:!0,class:!0}),M(d).forEach(_),P=K(i),re(S.$$.fragment,i),j=K(i),T=F(i,"SELECT",{});var m=M(T);v=F(m,"OPTION",{});var C=M(v);z=Z(C,"Выберите шаблон"),C.forEach(_);for(let X=0;X<k.length;X+=1)k[X].l(m);m.forEach(_),I=K(i),O&&O.l(i),l=K(i),f&&f.l(i),p=me(),this.h()},h(){c(s,"href",Ne+"/"),c(s,"class","svelte-5uzkvt"),c(d,"width",g=e[0].width),c(d,"height",y=e[0].height),c(d,"id","canvas"),c(d,"class","svelte-5uzkvt"),v.__value="",v.value=v.__value,v.disabled=!0,v.selected=!0,e[0].template===void 0&&Te(()=>e[8].call(T))},m(i,h){U(i,s,h),R(s,n),U(i,a,h),oe(t,i,h),U(i,b,h),U(i,d,h),U(i,P,h),oe(S,i,h),U(i,j,h),U(i,T,h),R(T,v),R(v,z);for(let m=0;m<k.length;m+=1)k[m].m(T,null);ce(T,e[0].template),U(i,I,h),O&&O.m(i,h),U(i,l,h),f&&f.m(i,h),U(i,p,h),o=!0,N||(G=[B(T,"change",e[8]),B(T,"click",e[4])],N=!0)},p(i,[h]){if((!o||h&3&&g!==(g=i[0].width))&&c(d,"width",g),(!o||h&3&&y!==(y=i[0].height))&&c(d,"height",y),h&50){L=i[1];let m;for(m=0;m<L.length;m+=1){const C=ge(i,L,m);k[m]?k[m].p(C,h):(k[m]=ve(C),k[m].c(),k[m].m(T,null))}for(;m<k.length;m+=1)k[m].d(1);k.length=L.length}h&3&&ce(T,i[0].template),i[0].template?O&&(O.d(1),O=null):O||(O=we(),O.c(),O.m(l.parentNode,l)),i[0].template?f?(f.p(i,h),h&1&&J(f,1)):(f=be(i),f.c(),J(f,1),f.m(p.parentNode,p)):f&&(Ee(),x(f,1,1,()=>{f=null}),Ae())},i(i){o||(J(t.$$.fragment,i),J(S.$$.fragment,i),J(f),o=!0)},o(i){x(t.$$.fragment,i),x(S.$$.fragment,i),x(f),o=!1},d(i){i&&_(s),i&&_(a),fe(t,i),i&&_(b),i&&_(d),i&&_(P),fe(S,i),i&&_(j),i&&_(T),Oe(k,i),i&&_(I),O&&O.d(i),i&&_(l),f&&f.d(i),i&&_(p),N=!1,ee(G)}}}function ne(){let e=document.getElementById("canvas");e.getContext("2d").clearRect(0,0,e.width,e.height)}function Me(e,s,n){let a=[{name:"Стандарт (горизонтальный)",value:"standarthoriz",width:2e3,height:1500,id:0,noimage:!1,lines:[{placeholder:"Заголовок",value:""},{placeholder:"Подзаголовок",value:""}]},{name:"Стандарт (вертикальный)",value:"standartvert",width:1500,height:2e3,id:1,noimage:!1,lines:[{placeholder:"Заголовок",value:""},{placeholder:"Подзаголовок",value:""}]},{name:"Стандарт (квадратный)",value:"standartsq",width:1500,height:1500,id:2,noimage:!1,lines:[{placeholder:"Заголовок",value:""},{placeholder:"Подзаголовок",value:""}]},{name:"День рождения",value:"birthday",width:1500,height:1500,id:3,noimage:!1,lines:[{placeholder:"Имя Фамилия",value:""},{placeholder:"Должность",value:""}]},{name:"Стипком",value:"stipcom",width:1920,height:325,id:4,noimage:!0,lines:[{placeholder:"До какого числа",value:""}]}],t={id:void 0,template:void 0,width:1e3,height:1e3,pos:{x:0,y:0,zoom:100},filename:"Загрузить изображение",lines:[{placeholder:"Заголовок",value:""},{placeholder:"Подзаголовок",value:""}],image:"",noimage:!1};function b(){n(0,t),n(0,t),n(0,t),n(0,t),n(0,t),n(0,t.filename="Загрузить изображение",t),n(0,t),n(0,t.image="",t),n(0,t.pos={x:0,y:0,zoom:100},t),ne()}function d(){let l=document.createElement("a");l.download=`${t.template}_${Pe({preset:"ru"}).transform(t.lines[0].value,"_").toLowerCase()}.png`,l.href=document.getElementById("canvas").toDataURL(),l.click()}function g(){console.log(t);let l=document.getElementById("canvas"),p=l.getContext("2d");ne();let o=new Image;o.src=We,o.onload=()=>{switch(p.drawImage(o,0,0,l.width,l.height),t.template){case"stipcom":$.stipcom(p,t,l);break;case"birthday":$.birthday(p,t,l);break;case"standarthoriz":$.standartwide(p,t,l);break;case"standartvert":$.standart(p,t,l);break;case"standartsq":$.standart(p,t,l);break}}}function y(l,p,o,N,G,L){n(0,t.noimage=G,t),n(0,t.id=l,t),n(0,t.template=p,t),n(0,t.width=o,t),n(0,t.height=N,t),n(0,t.image="",t),n(0,t.filename="Загрузить изображение",t),n(0,t.pos={x:0,y:0,zoom:100},t),n(0,t.lines=L,t),ne(),g()}function P(l){n(0,t.pos={x:0,y:0,zoom:100},t);const p=l.target.files[0];n(0,t.filename=p.name,t);const o=new FileReader;o.onloadend=()=>{n(0,t.image=o.result,t),g()},o.readAsDataURL(p)}Ue(()=>g());const S=l=>y(l.id,l.value,l.width,l.height,l.noimage,l.lines);function j(){t.template=je(this),n(0,t),n(1,a)}function T(l,p){l[p].value=this.value,n(0,t),n(1,a)}function v(){t.pos.zoom=le(this.value),n(0,t),n(1,a)}function z(){t.pos.x=le(this.value),n(0,t),n(1,a)}function I(){t.pos.y=le(this.value),n(0,t),n(1,a)}return[t,a,b,d,g,y,P,S,j,T,v,z,I]}class He extends ze{constructor(s){super(),Ie(this,s,Me,Ke,Le,{})}}export{He as default};
