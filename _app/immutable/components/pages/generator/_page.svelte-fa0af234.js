import{S as je,i as ze,s as Ie,w as ae,a as W,k as q,q as Y,K as _e,e as de,x as oe,c as M,l as V,m as X,h as v,r as Z,L as ge,n as u,p as ne,y as ue,b as P,E as D,N as K,u as fe,f as $,t as ee,d as Ce,z as pe,O as Ee,P as te,o as Ae,Q as J,g as Ue,R as le}from"../../../chunks/index-43a2e87a.js";import{D as ce}from"../../../chunks/Divider-7be6f369.js";import{d as x}from"../../../chunks/draw-2af373cb.js";import{t as Ne}from"../../../chunks/stores-0abacad7.js";var re,ve;function Te(){if(ve)return re;ve=1;var n=9007199254740991,o="[object Arguments]",i="[object Function]",f="[object GeneratorFunction]",e=/^(?:0|[1-9]\d*)$/;function L(s,m){for(var U=-1,R=Array(s);++U<s;)R[U]=m(U);return R}function d(s,m){return function(U){return s(m(U))}}var b=Object.prototype,j=b.hasOwnProperty,_=b.toString,w=b.propertyIsEnumerable,g=d(Object.keys,Object);function B(s,m){var U=T(s)||E(s)?L(s.length,String):[],R=U.length,H=!!R;for(var Q in s)(m||j.call(s,Q))&&!(H&&(Q=="length"||h(Q,R)))&&U.push(Q);return U}var O=I();function S(s,m){return s&&O(s,m,a)}function z(s,m,U,R){return S(s,function(H,Q,se){m(R,U(H),Q,se)}),R}function r(s){if(!y(s))return g(s);var m=[];for(var U in Object(s))j.call(s,U)&&U!="constructor"&&m.push(U);return m}function I(s){return function(m,U,R){for(var H=-1,Q=Object(m),se=R(m),he=se.length;he--;){var me=se[s?he:++H];if(U(Q[me],me,Q)===!1)break}return m}}function t(s,m){return function(U,R){return z(U,s,m(R),{})}}function h(s,m){return m=m??n,!!m&&(typeof s=="number"||e.test(s))&&s>-1&&s%1==0&&s<m}function y(s){var m=s&&s.constructor,U=typeof m=="function"&&m.prototype||b;return s===U}function E(s){return p(s)&&j.call(s,"callee")&&(!w.call(s,"callee")||_.call(s)==o)}var T=Array.isArray;function A(s){return s!=null&&F(s.length)&&!G(s)}function p(s){return k(s)&&A(s)}function G(s){var m=C(s)?_.call(s):"";return m==i||m==f}function F(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=n}function C(s){var m=typeof s;return!!s&&(m=="object"||m=="function")}function k(s){return!!s&&typeof s=="object"}var N=t(function(s,m,U){s[m]=U},l(c));function a(s){return A(s)?B(s):r(s)}function l(s){return function(){return s}}function c(s){return s}return re=N,re}var De=function(o){const i=Te(),f=o?o.preset:"ru",e={а:"a",б:"b",в:"v",д:"d",з:"z",й:"y",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",ь:""};f==="ru"?Object.assign(e,{г:"g",и:"i",ъ:"",ы:"i",э:"e"}):f==="uk"?Object.assign(e,{г:"h",ґ:"g",е:"e",и:"y",і:"i","'":"","’":"",ʼ:""}):f==="mn"&&Object.assign(e,{г:"g",ө:"o",ү:"u",и:"i",ы:"y",э:"e",ъ:""});let L;f==="ru"?L=Object.assign(i(e),{i:"и","":""}):f==="uk"?L=Object.assign(i(e),{"":""}):f==="mn"&&(L=Object.assign(i(e),{"":""}));const d=f==="ru"?{е:"ye"}:{є:"ye",ї:"yi"},b={ё:"yo",ж:"zh",х:"kh",ц:"ts",ч:"ch",ш:"sh",щ:"shch",ю:"yu",я:"ya"},j=Object.assign({},b,d),_=Object.assign(i(j)),w=Object.assign(e,j),g=Object.assign({},e,{й:"i"});f==="ru"?Object.assign(g,{е:"e"}):f==="uk"?Object.assign(g,{ї:"i"}):f==="mn"&&Object.assign(g,{е:"e"});let B;f==="ru"?B=Object.assign(i(e),{i:"и",y:"ы",e:"е","":""}):f==="uk"&&(B=Object.assign(i(e),{"":""}));let O={};f==="uk"&&(O={є:"ie",ю:"iu",я:"ia"});const S=Object.assign(b,O),z=Object.assign(i(S)),r=Object.assign(g,S);function I(h,y){if(!h)return"";const E=h.normalize();let T="",A=!1;for(let p=0;p<E.length;p++){const G=E[p]===E[p].toUpperCase();let F=E[p].toLowerCase();if(F===" "){T+=y||" ",A=!0;continue}let C;f==="uk"&&E.slice(p-1,p+1).toLowerCase()==="зг"?C="gh":p===0||A?(C=w[F],A=!1):C=r[F],typeof C>"u"?T+=G?F.toUpperCase():F:G?C.length>1?T+=C[0].toUpperCase()+C.slice(1):T+=C.toUpperCase():T+=C}return T}function t(h,y){if(!h)return"";const E=h.normalize();let T="",A=!1,p=0;for(;p<E.length;){const G=E[p]===E[p].toUpperCase();let F=E[p].toLowerCase(),C=p;if(F===" "||F===y){T+=" ",A=!0,p++;continue}let k,N=E.slice(p,p+2).toLowerCase();p===0||A?(k=_[N],k?p+=2:(k=L[F],p++),A=!1):(k=z[N],k?p+=2:(k=B[F],p++)),E.slice(C,C+4).toLowerCase()==="shch"?(k="щ",p=C+4):E.slice(C-1,C+2).toLowerCase()==="zgh"&&(k="г",p=C+2),typeof k>"u"?T+=G?F.toUpperCase():F:G?k.length>1?T+=k[0].toUpperCase()+k.slice(1):T+=k.toUpperCase():T+=k}return T}return{transform:I,reverse:t}};const Pe=""+new URL("../../../assets/background-0c68b1ea.png",import.meta.url).href;function ke(n,o,i){const f=n.slice();return f[15]=o[i],f[16]=o,f[17]=i,f}function be(n,o,i){const f=n.slice();return f[18]=o[i],f}function we(n){let o,i=n[18].name+"",f,e,L,d;function b(){return n[9](n[18])}function j(){return n[10](n[18])}return{c(){o=q("div"),f=Y(i),e=W(),this.h()},l(_){o=V(_,"DIV",{class:!0});var w=X(o);f=Z(w,i),e=M(w),w.forEach(v),this.h()},h(){u(o,"class","select-dropdown-option svelte-18ack9k")},m(_,w){P(_,o,w),D(o,f),D(o,e),L||(d=[K(o,"keypress",b),K(o,"click",j)],L=!0)},p(_,w){n=_},d(_){_&&v(o),L=!1,te(d)}}}function ye(n){let o,i,f,e,L,d,b,j,_,w,g,B,O=n[0].noimage==!1&&Oe(n),S=n[0].lines,z=[];for(let r=0;r<S.length;r+=1)z[r]=Le(ke(n,S,r));return f=new ce({props:{title:"Сохранение"}}),{c(){O&&O.c(),o=W();for(let r=0;r<z.length;r+=1)z[r].c();i=W(),ae(f.$$.fragment),e=W(),L=q("button"),d=Y("Скачать"),b=W(),j=q("button"),_=Y("Сбросить"),this.h()},l(r){O&&O.l(r),o=M(r);for(let h=0;h<z.length;h+=1)z[h].l(r);i=M(r),oe(f.$$.fragment,r),e=M(r),L=V(r,"BUTTON",{class:!0});var I=X(L);d=Z(I,"Скачать"),I.forEach(v),b=M(r),j=V(r,"BUTTON",{class:!0});var t=X(j);_=Z(t,"Сбросить"),t.forEach(v),this.h()},h(){u(L,"class","ok"),u(j,"class","reset")},m(r,I){O&&O.m(r,I),P(r,o,I);for(let t=0;t<z.length;t+=1)z[t].m(r,I);P(r,i,I),ue(f,r,I),P(r,e,I),P(r,L,I),D(L,d),P(r,b,I),P(r,j,I),D(j,_),w=!0,g||(B=[K(L,"click",n[4]),K(j,"click",n[3])],g=!0)},p(r,I){if(r[0].noimage==!1?O?O.p(r,I):(O=Oe(r),O.c(),O.m(o.parentNode,o)):O&&(O.d(1),O=null),I&33){S=r[0].lines;let t;for(t=0;t<S.length;t+=1){const h=ke(r,S,t);z[t]?z[t].p(h,I):(z[t]=Le(h),z[t].c(),z[t].m(i.parentNode,i))}for(;t<z.length;t+=1)z[t].d(1);z.length=S.length}},i(r){w||($(f.$$.fragment,r),w=!0)},o(r){ee(f.$$.fragment,r),w=!1},d(r){O&&O.d(r),r&&v(o),Ee(z,r),r&&v(i),pe(f,r),r&&v(e),r&&v(L),r&&v(b),r&&v(j),g=!1,te(B)}}}function Oe(n){let o,i,f,e,L,d,b,j,_,w,g,B,O,S,z,r,I,t,h,y,E,T,A,p,G,F,C=n[0].filename+"",k,N,a;return{c(){o=q("span"),i=Y("Позиционирование"),f=W(),e=q("span"),L=Y("Zoom "),d=q("input"),j=W(),_=q("span"),w=Y("X "),g=q("input"),z=W(),r=q("span"),I=Y("Y "),t=q("input"),T=W(),A=q("label"),p=q("input"),G=W(),F=q("span"),k=Y(C),this.h()},l(l){o=V(l,"SPAN",{class:!0});var c=X(o);i=Z(c,"Позиционирование"),c.forEach(v),f=M(l),e=V(l,"SPAN",{class:!0});var s=X(e);L=Z(s,"Zoom "),d=V(s,"INPUT",{type:!0,min:!0,max:!0,title:!0,class:!0}),s.forEach(v),j=M(l),_=V(l,"SPAN",{class:!0});var m=X(_);w=Z(m,"X "),g=V(m,"INPUT",{type:!0,min:!0,max:!0,title:!0,class:!0}),m.forEach(v),z=M(l),r=V(l,"SPAN",{class:!0});var U=X(r);I=Z(U,"Y "),t=V(U,"INPUT",{type:!0,min:!0,max:!0,title:!0,class:!0}),U.forEach(v),T=M(l),A=V(l,"LABEL",{class:!0});var R=X(A);p=V(R,"INPUT",{type:!0,accept:!0,class:!0}),G=M(R),F=V(R,"SPAN",{});var H=X(F);k=Z(H,C),H.forEach(v),R.forEach(v),this.h()},h(){u(o,"class","subtitle"),u(d,"type","range"),u(d,"min","50"),u(d,"max","500"),u(d,"title",b=n[0].pos.zoom/100),u(d,"class","svelte-18ack9k"),u(e,"class","range svelte-18ack9k"),u(g,"type","range"),u(g,"min",B="-"+n[0].width*(n[0].pos.zoom/100)),u(g,"max",O=n[0].width*(n[0].pos.zoom/100)),u(g,"title",S=n[0].pos.x),u(g,"class","svelte-18ack9k"),u(_,"class","range svelte-18ack9k"),u(t,"type","range"),u(t,"min",h="-"+n[0].height*(n[0].pos.zoom/100)),u(t,"max",y=n[0].height*(n[0].pos.zoom/100)),u(t,"title",E=n[0].pos.y),u(t,"class","svelte-18ack9k"),u(r,"class","range svelte-18ack9k"),u(p,"type","file"),p.multiple=!0,u(p,"accept","image/*"),u(p,"class","svelte-18ack9k"),u(A,"class","input-file svelte-18ack9k")},m(l,c){P(l,o,c),D(o,i),P(l,f,c),P(l,e,c),D(e,L),D(e,d),J(d,n[0].pos.zoom),P(l,j,c),P(l,_,c),D(_,w),D(_,g),J(g,n[0].pos.x),P(l,z,c),P(l,r,c),D(r,I),D(r,t),J(t,n[0].pos.y),P(l,T,c),P(l,A,c),D(A,p),D(A,G),D(A,F),D(F,k),N||(a=[K(d,"change",n[11]),K(d,"input",n[11]),K(d,"input",n[5]),K(g,"change",n[12]),K(g,"input",n[12]),K(g,"input",n[5]),K(t,"change",n[13]),K(t,"input",n[13]),K(t,"input",n[5]),K(A,"change",n[7])],N=!0)},p(l,c){c&1&&b!==(b=l[0].pos.zoom/100)&&u(d,"title",b),c&1&&J(d,l[0].pos.zoom),c&1&&B!==(B="-"+l[0].width*(l[0].pos.zoom/100))&&u(g,"min",B),c&1&&O!==(O=l[0].width*(l[0].pos.zoom/100))&&u(g,"max",O),c&1&&S!==(S=l[0].pos.x)&&u(g,"title",S),c&1&&J(g,l[0].pos.x),c&1&&h!==(h="-"+l[0].height*(l[0].pos.zoom/100))&&u(t,"min",h),c&1&&y!==(y=l[0].height*(l[0].pos.zoom/100))&&u(t,"max",y),c&1&&E!==(E=l[0].pos.y)&&u(t,"title",E),c&1&&J(t,l[0].pos.y),c&1&&C!==(C=l[0].filename+"")&&fe(k,C)},d(l){l&&v(o),l&&v(f),l&&v(e),l&&v(j),l&&v(_),l&&v(z),l&&v(r),l&&v(T),l&&v(A),N=!1,te(a)}}}function Le(n){let o,i,f,e;function L(){n[14].call(o,n[16],n[17])}return{c(){o=q("input"),this.h()},l(d){o=V(d,"INPUT",{type:!0,placeholder:!0}),this.h()},h(){u(o,"type","text"),u(o,"placeholder",i=n[15].placeholder)},m(d,b){P(d,o,b),J(o,n[15].value),f||(e=[K(o,"input",L),K(o,"input",n[5])],f=!0)},p(d,b){n=d,b&1&&i!==(i=n[15].placeholder)&&u(o,"placeholder",i),b&1&&o.value!==n[15].value&&J(o,n[15].value)},d(d){d&&v(o),f=!1,te(e)}}}function Fe(n){let o,i,f,e,L,d,b,j,_,w,g,B=n[0].name+"",O,S,z,r=n[0].name+"",I,t,h,y,E,T,A,p,G,F;o=new ce({props:{title:"Результат"}}),b=new ce({props:{title:"Настройка"}});let C=n[2],k=[];for(let a=0;a<C.length;a+=1)k[a]=we(be(n,C,a));let N=n[0].template&&ye(n);return{c(){ae(o.$$.fragment),i=W(),f=q("canvas"),d=W(),ae(b.$$.fragment),j=W(),_=q("div"),w=q("div"),g=q("div"),O=Y(B),S=W();for(let a=0;a<k.length;a+=1)k[a].c();z=W(),I=Y(r),t=W(),h=q("div"),y=_e("svg"),E=_e("path"),T=W(),N&&N.c(),A=de(),this.h()},l(a){oe(o.$$.fragment,a),i=M(a),f=V(a,"CANVAS",{width:!0,height:!0,id:!0,class:!0}),X(f).forEach(v),d=M(a),oe(b.$$.fragment,a),j=M(a),_=V(a,"DIV",{class:!0,style:!0});var l=X(_);w=V(l,"DIV",{class:!0,opened:!0});var c=X(w);g=V(c,"DIV",{class:!0,style:!0});var s=X(g);O=Z(s,B),s.forEach(v),S=M(c);for(let R=0;R<k.length;R+=1)k[R].l(c);c.forEach(v),z=M(l),I=Z(l,r),t=M(l),h=V(l,"DIV",{class:!0});var m=X(h);y=ge(m,"svg",{class:!0,opened:!0,xmlns:!0,viewBox:!0,height:!0,width:!0});var U=X(y);E=ge(U,"path",{d:!0,fill:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),X(E).forEach(v),U.forEach(v),m.forEach(v),l.forEach(v),T=M(a),N&&N.l(a),A=de(),this.h()},h(){u(f,"width",e=n[0].width),u(f,"height",L=n[0].height),u(f,"id","canvas"),u(f,"class","svelte-18ack9k"),u(g,"class","select-dropdown-placeholder svelte-18ack9k"),ne(g,"width","295px"),ne(g,"height","40px"),u(w,"class","select-dropdown svelte-18ack9k"),u(w,"opened",n[1]),u(E,"d","M.5,3.85,6.65,10a.48.48,0,0,0,.7,0L13.5,3.85"),u(E,"fill","none"),u(E,"stroke","#ffffff"),u(E,"stroke-linecap","round"),u(E,"stroke-linejoin","round"),u(y,"class","select-button-icon svelte-18ack9k"),u(y,"opened",n[1]),u(y,"xmlns","http://www.w3.org/2000/svg"),u(y,"viewBox","0 0 14 14"),u(y,"height","16"),u(y,"width","16"),u(h,"class","select-button svelte-18ack9k"),u(_,"class","select svelte-18ack9k"),ne(_,"width","295px"),ne(_,"height","40px")},m(a,l){ue(o,a,l),P(a,i,l),P(a,f,l),P(a,d,l),ue(b,a,l),P(a,j,l),P(a,_,l),D(_,w),D(w,g),D(g,O),D(w,S);for(let c=0;c<k.length;c+=1)k[c].m(w,null);D(_,z),D(_,I),D(_,t),D(_,h),D(h,y),D(y,E),P(a,T,l),N&&N.m(a,l),P(a,A,l),p=!0,G||(F=[K(h,"click",n[8]),K(h,"keypress",n[8])],G=!0)},p(a,[l]){if((!p||l&1&&e!==(e=a[0].width))&&u(f,"width",e),(!p||l&1&&L!==(L=a[0].height))&&u(f,"height",L),(!p||l&1)&&B!==(B=a[0].name+"")&&fe(O,B),l&324){C=a[2];let c;for(c=0;c<C.length;c+=1){const s=be(a,C,c);k[c]?k[c].p(s,l):(k[c]=we(s),k[c].c(),k[c].m(w,null))}for(;c<k.length;c+=1)k[c].d(1);k.length=C.length}(!p||l&2)&&u(w,"opened",a[1]),(!p||l&1)&&r!==(r=a[0].name+"")&&fe(I,r),(!p||l&2)&&u(y,"opened",a[1]),a[0].template?N?(N.p(a,l),l&1&&$(N,1)):(N=ye(a),N.c(),$(N,1),N.m(A.parentNode,A)):N&&(Ue(),ee(N,1,1,()=>{N=null}),Ce())},i(a){p||($(o.$$.fragment,a),$(b.$$.fragment,a),$(N),p=!0)},o(a){ee(o.$$.fragment,a),ee(b.$$.fragment,a),ee(N),p=!1},d(a){pe(o,a),a&&v(i),a&&v(f),a&&v(d),pe(b,a),a&&v(j),a&&v(_),Ee(k,a),a&&v(T),N&&N.d(a),a&&v(A),G=!1,te(F)}}}function ie(){let n=document.getElementById("canvas");n.getContext("2d").clearRect(0,0,n.width,n.height)}function Se(n,o,i){Ne.set("Генератор картинок");let f=[{name:"Стандарт (горизонтальный)",value:"standarthoriz",width:2e3,height:1500,id:0,noimage:!1,lines:[{placeholder:"Заголовок",value:""},{placeholder:"Подзаголовок",value:""}]},{name:"Стандарт (вертикальный)",value:"standartvert",width:1500,height:2e3,id:1,noimage:!1,lines:[{placeholder:"Заголовок",value:""},{placeholder:"Подзаголовок",value:""}]},{name:"Стандарт (квадратный)",value:"standartsq",width:1500,height:1500,id:2,noimage:!1,lines:[{placeholder:"Заголовок",value:""},{placeholder:"Подзаголовок",value:""}]},{name:"День рождения",value:"birthday",width:1500,height:1500,id:3,noimage:!1,lines:[{placeholder:"Имя Фамилия",value:""},{placeholder:"Должность",value:""}]},{name:"Стипком",value:"stipcom",width:1920,height:325,id:4,noimage:!0,lines:[{placeholder:"До какого числа",value:""}]}],e={id:void 0,template:void 0,name:"Выберите шаблон",width:1e3,height:1e3,pos:{x:0,y:0,zoom:100},filename:"Загрузить изображение",lines:[{placeholder:"Заголовок",value:""},{placeholder:"Подзаголовок",value:""}],image:"",noimage:!1};function L(){i(0,e),i(0,e),i(0,e),i(0,e),i(0,e),i(0,e.filename="Загрузить изображение",e),i(0,e),i(0,e.image="",e),i(0,e.pos={x:0,y:0,zoom:100},e),e.lines.forEach(t=>{t.value=""}),ie()}function d(){let t=document.createElement("a");t.download=`${e.template}_${De({preset:"ru"}).transform(e.lines[0].value,"_").toLowerCase()}.png`,t.href=document.getElementById("canvas").toDataURL(),t.click()}function b(){let t=document.getElementById("canvas"),h=t.getContext("2d");ie();let y=new Image;y.src=Pe,y.onload=()=>{switch(h.drawImage(y,0,0,t.width,t.height),e.template){case"stipcom":x.stipcom(h,e,t);break;case"birthday":x.birthday(h,e,t);break;case"standarthoriz":x.standartwide(h,e,t);break;case"standartvert":x.standart(h,e,t);break;case"standartsq":x.standart(h,e,t);break}}}function j(t,h,y,E,T,A,p){console.log("change"),i(0,e.noimage=T,e),i(0,e.id=t,e),i(0,e.name=p,e),i(0,e.template=h,e),i(0,e.width=y,e),i(0,e.height=E,e),i(0,e.image="",e),i(0,e.filename="Загрузить изображение",e),i(0,e.pos={x:0,y:0,zoom:100},e),i(0,e.lines=A,e),ie(),b(),console.log(p)}function _(t){i(0,e.pos={x:0,y:0,zoom:100},e);const h=t.target.files[0];i(0,e.filename=h.name,e);const y=new FileReader;y.onloadend=()=>{i(0,e.image=y.result,e),b()},y.readAsDataURL(h)}let w=!1;function g(){if(w==!0){i(1,w=!1);return}if(w==!1){i(1,w=!0);return}}Ae(()=>b());const B=t=>{g(),j(t.id,t.value,t.width,t.height,t.noimage,t.lines,t.name)},O=t=>{g(),j(t.id,t.value,t.width,t.height,t.noimage,t.lines,t.name)};function S(){e.pos.zoom=le(this.value),i(0,e)}function z(){e.pos.x=le(this.value),i(0,e)}function r(){e.pos.y=le(this.value),i(0,e)}function I(t,h){t[h].value=this.value,i(0,e)}return[e,w,f,L,d,b,j,_,g,B,O,S,z,r,I]}class Ke extends je{constructor(o){super(),ze(this,o,Se,Fe,Ie,{})}}export{Ke as default};