(()=>{"use strict";class t{constructor(t){this.value=t,this.left=null,this.right=null}}function l(e){if(2===e.length){let l=new t(e[1]);return l.left=new t(e[0]),l}if(1===e.length)return new t(e[0]);{let r=new t(e[Math.floor(e.length/2)]);return r.left=l(e.slice(0,Math.floor(e.length/2))),r.right=l(e.slice(Math.floor(e.length/2)+1,e.length)),r}}function e(t){if(t.length<2)return t;{let l=e(t.slice(0,Math.floor(t.length/2))),r=e(t.slice(Math.floor(t.length/2),t.length)),n=[];for(;l.length>0&&r.length>0;)l[0]>r[0]?(n.push(r[0]),r.shift()):l[0]===r[0]?(n.push(r[0]),l.shift(),r.shift()):(n.push(l[0]),l.shift());for(;l.length>0;)n.push(l[0]),l.shift();for(;r.length>0;)n.push(r[0]),r.shift();return n}}let r=new class{constructor(t){const r=e(t);this.root=l(r)}insert(l){!function e(r){return r.value===l?void 0:l<r.value&&null===r.left?void(r.left=new t(l)):l<r.value?void e(r.left):void e(r.right)}(this.root)}remove(t){!function t(l,e){if(null===l)return l;if(e>l.value)l.right=t(l.right,e);else{if(!(e<l.value)){if(null===l.left)return l.right;if(null===l.right)return l.left;{let e=l.right;for(;null!==e.left;)e=e.left;return t(l.right,e.value),l.value=e.value,l}}l.left=t(l.left,e)}return l}(this.root,t)}find(t){return function t(l,e){if(null!==l)return e>l.value?t(l.right,e):e<l.value?t(l.left,e):void console.log(l);console.log("Not found")}(this.root,t)}levelOrder(t){return function t(l,e,r=[],n=[]){if(void 0===e){if(null===l)return;for(n.push(l),r.push(l.left),r.push(l.right);r.length>0;){let l=r[0];r.shift(),t(l,void 0,r,n)}return n}if(null!==l){for(e(l),r.push(l.left),r.push(l.right);r.length>0;){let l=r[0];r.shift(),t(l,e,r,n)}return n}}(this.root,t)}inOrder(t){function l(t,e){if(void 0===e){const e=[];return null===t?e:(e.push(t.value),l(t.left).concat(e.concat(l(t.right))))}null!==t&&(l(t.left,e),e(t.value),l(t.right,e))}if(void 0===t)return l(this.root);l(this.root,t)}preOrder(t){function l(t,e){if(void 0===e){const e=[];return null===t?e:(e.push(t.value),e.concat(l(t.left).concat(l(t.right))))}null!==t&&(e(t.value),l(t.left,e),l(t.right,e))}if(void 0===t)return l(this.root);l(this.root,t)}postOrder(t){function l(t,e){if(void 0===e){const e=[];return null===t?e:(e.push(t.value),l(t.left).concat(l(t.right).concat(e)))}null!==t&&(l(t.left,e),l(t.right,e),e(t.value))}if(void 0===t)return l(this.root);l(this.root,t)}}([7,8,3,5,2,1,9,4,6,90,56,34,22,23,11]);const n=(t,l="",e=!0)=>{null!==t&&(null!==t.right&&n(t.right,`${l}${e?"│   ":"    "}`,!1),console.log(`${l}${e?"└── ":"┌── "}${t.value}`),null!==t.left&&n(t.left,`${l}${e?"    ":"│   "}`,!0))};n(r.root),console.log(r.postOrder())})();