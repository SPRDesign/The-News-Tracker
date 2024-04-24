import{r as i}from"./index.NEDEFKed.js";var c={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=i,d=Symbol.for("react.element"),f=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,h=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,n){var r,o={},p=null,l=null;n!==void 0&&(p=""+n),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)_.call(e,r)&&!m.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:d,type:t,key:p,ref:l,props:o,_owner:h.current}}a.Fragment=f;a.jsx=u;a.jsxs=u;c.exports=a;var s=c.exports;function v(){const[t,e]=i.useState(""),n=o=>e(o.target.value);return s.jsx("div",{children:s.jsx("center",{children:s.jsx("form",{action:"/results/"+t,method:"GET",children:s.jsx("input",{type:"search",className:"form-control p-3 text-white",value:t,onChange:n,placeholder:"Search...",style:{backgroundColor:"#594a42",border:"1px solid #594a42",padding:"10px",width:"100%",color:"white",boxShadow:"0px 4px 8px rgba(73, 31, 3, 0.4), inset 0px 4px 8px rgba(73, 31, 3, 0.4)"}})})})})}export{v as default};
