(()=>{"use strict";class t{constructor(t){this.value=t,this.left=null,this.right=null}}function l(e){if(2===e.length){let l=new t(e[1]);return l.left=new t(e[0]),l}if(1===e.length)return new t(e[0]);{let n=new t(e[Math.floor(e.length/2)]);return n.left=l(e.slice(0,Math.floor(e.length/2))),n.right=l(e.slice(Math.floor(e.length/2)+1,e.length)),n}}function e(t){if(t.length<2)return t;{let l=e(t.slice(0,Math.floor(t.length/2))),n=e(t.slice(Math.floor(t.length/2),t.length)),r=[];for(;l.length>0&&n.length>0;)l[0]>n[0]?(r.push(n[0]),n.shift()):l[0]===n[0]?(r.push(n[0]),l.shift(),n.shift()):(r.push(l[0]),l.shift());for(;l.length>0;)r.push(l[0]),l.shift();for(;n.length>0;)r.push(n[0]),n.shift();return r}}let n=new class{constructor(t){const n=e(t);this.root=l(n)}insert(l){!function e(n){return n.value===l?void 0:l<n.value&&null===n.left?void(n.left=new t(l)):l<n.value?void e(n.left):void e(n.right)}(this.root)}remove(t){!function t(l,e){if(null===l)return l;if(e>l.value)l.right=t(l.right,e);else{if(!(e<l.value)){if(null===l.left)return l.right;if(null===l.right)return l.left;{let e=l.right;for(;null!==e.left;)e=e.left;return t(l.right,e.value),l.value=e.value,l}}l.left=t(l.left,e)}return l}(this.root,t)}find(t){return function t(l,e){return null===l?"Not found":e>l.value?t(l.right,e):e<l.value?t(l.left,e):l}(this.root,t)}levelOrder(t){return function t(l,e,n=[],r=[]){if(void 0===e){if(null===l)return;for(r.push(l),n.push(l.left),n.push(l.right);n.length>0;){let l=n[0];n.shift(),t(l,void 0,n,r)}return r}if(null!==l){for(e(l),n.push(l.left),n.push(l.right);n.length>0;){let l=n[0];n.shift(),t(l,e,n,r)}return r}}(this.root,t)}inOrder(t){function l(t,e){if(void 0===e){const e=[];return null===t?e:(e.push(t.value),l(t.left).concat(e.concat(l(t.right))))}null!==t&&(l(t.left,e),e(t.value),l(t.right,e))}if(void 0===t)return l(this.root);l(this.root,t)}preOrder(t){function l(t,e){if(void 0===e){const e=[];return null===t?e:(e.push(t.value),e.concat(l(t.left).concat(l(t.right))))}null!==t&&(e(t.value),l(t.left,e),l(t.right,e))}if(void 0===t)return l(this.root);l(this.root,t)}postOrder(t){function l(t,e){if(void 0===e){const e=[];return null===t?e:(e.push(t.value),l(t.left).concat(l(t.right).concat(e)))}null!==t&&(l(t.left,e),l(t.right,e),e(t.value))}if(void 0===t)return l(this.root);l(this.root,t)}height(t){return"Not found"===this.find(t)?"Can't find the height of a node not in the tree":function t(l){let e=0;if(null===l)return e;if(null===l.left&&null===l.right)return e;{e+=1;let n=t(l.left),r=t(l.right);return n>=r?e+n:e+r}}(this.find(t))}}([7,8,3,5,2,1,9,4,6,90,56,34,22,23,11]);const r=(t,l="",e=!0)=>{null!==t&&(null!==t.right&&r(t.right,`${l}${e?"│   ":"    "}`,!1),console.log(`${l}${e?"└── ":"┌── "}${t.value}`),null!==t.left&&r(t.left,`${l}${e?"    ":"│   "}`,!0))};r(n.root),console.log(n.height(23))})();