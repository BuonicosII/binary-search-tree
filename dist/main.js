(()=>{"use strict";class t{constructor(t){this.value=t,this.left=null,this.right=null}}function l(e){if(2===e.length){let l=new t(e[1]);return l.left=new t(e[0]),l}if(1===e.length)return new t(e[0]);{let n=new t(e[Math.floor(e.length/2)]);return n.left=l(e.slice(0,Math.floor(e.length/2))),n.right=l(e.slice(Math.floor(e.length/2)+1,e.length)),n}}function e(t){if(t.length<2)return t;{let l=e(t.slice(0,Math.floor(t.length/2))),n=e(t.slice(Math.floor(t.length/2),t.length)),h=[];for(;l.length>0&&n.length>0;)l[0]>n[0]?(h.push(n[0]),n.shift()):l[0]===n[0]?(h.push(n[0]),l.shift(),n.shift()):(h.push(l[0]),l.shift());for(;l.length>0;)h.push(l[0]),l.shift();for(;n.length>0;)h.push(n[0]),n.shift();return h}}let n=new class{constructor(t){const n=e(t);this.root=l(n)}insert(l){!function e(n){return n.value===l?void 0:l<n.value&&null===n.left?void(n.left=new t(l)):l<n.value?void e(n.left):void e(n.right)}(this.root)}}([7,8,3,5,2,1,9,4,6,90,56,34,22,23,11]);const h=(t,l="",e=!0)=>{null!==t&&(null!==t.right&&h(t.right,`${l}${e?"│   ":"    "}`,!1),console.log(`${l}${e?"└── ":"┌── "}${t.value}`),null!==t.left&&h(t.left,`${l}${e?"    ":"│   "}`,!0))};h(n.root),n.insert(19),h(n.root)})();