(()=>{var t={555:t=>{const e={Reflect:{get:Reflect.get.bind(Reflect),apply:Reflect.apply.bind(Reflect)},nativeToStringStr:`${Function.toString}`};function n(t,e,n){const o=t[e],i=new Proxy(t[e],a(n));c(t,e,{value:i}),r(i,o)}function r(t,e){const n={apply(n,r){if(r===Function.prototype.toString)return o("toString");if(r===t){const n=()=>e&&e.name?o(e.name):o(t.name);return`${e}`||n()}return Object.getPrototypeOf(Function.prototype.toString).isPrototypeOf(r.toString)?n.call(r):r.toString()}},r=new Proxy(Function.prototype.toString,a(n));c(Function.prototype,"toString",{value:r})}function o(t=""){return e.nativeToStringStr.replace("toString",t||"")}function c(t,e,n={}){return Object.defineProperty(t,e,{...Object.getOwnPropertyDescriptor(t,e)||{},...n})}function a(t){const e={};return Object.getOwnPropertyNames(t).forEach((n=>{e[n]=function(){try{return t[n].apply(this,arguments||[])}catch(t){if(!t||!t.stack||!t.stack.includes("at "))throw t;const e=(e,r=!0)=>{const o=[`at Reflect.${n} `,`at Object.${n} `,`at Object.newHandler.<computed> [as ${n}] `];return t.stack.split("\n").filter(((t,e)=>!(1===e&&r))).filter((t=>!o.some((e=>t.trim().startsWith(e))))).join("\n")},r=(t,e)=>{const r=t.split("\n");e=e||`at Object.newHandler.<computed> [as ${n}] `;const o=r.findIndex((t=>t.trim().startsWith(e)));return-1!==o&&(r.splice(1,o),r.join("\n"))};if(t.stack=t.stack.replace("at Object.toString (","at Function.toString ("),(t.stack||"").includes("at Function.toString ("))throw t.stack=e(t.stack,!1),t;throw t.stack=r(t.stack)||e(t.stack),t}}})),e}function i(){return{getterValue:t=>({apply(n,r,o){const c=e.Reflect.apply(...arguments);return o&&0===o.length?t:c}})}}t.exports={overrideInstancePrototype:function(t,e){Object.keys(e).forEach((n=>{try{!function(t,e,n){const o=Object.getOwnPropertyDescriptor(t,e).get,i=o.toString(),s=new Proxy(o,a(n));c(t,e,{get:s}),r(s,i)}(Object.getPrototypeOf(t),n,i().getterValue(e[n]))}catch(e){console.error(`Could not override property: ${n} on ${t}. Reason: ${e.message} `)}}))},overrideWebGl:function(t){try{const r=t=>t.split("\n").filter((t=>!t.includes("at Object.apply"))).filter((t=>!t.includes("at Object.get"))).join("\n"),o={get(t,e){try{return"function"==typeof t[e]?t[e].bind(t):Reflect.get(t,e)}catch(t){throw t.stack=r(t.stack),t}},apply(n,o,c){const a=(c||[])[0];if(37445===a)return t.vendor;if(37446===a)return t.renderer;try{return e.Reflect.apply(n,o,c)}catch(t){throw t.stack=r(t.stack),t}}},c=(t,e)=>{n(t,e,o)};c(WebGLRenderingContext.prototype,"getParameter"),c(WebGL2RenderingContext.prototype,"getParameter")}catch(t){console.warn(t)}},overrideCodecs:(t,e)=>{const r={...t,...e};console.log("OVERRIDING CODECS");const o={apply:function(t,e,n){if(console.log("function called"),!n||!n.length)return t.apply(e,n);const[o]=n,c=(t=>{for(const[e,n]of Object.entries(r)){const r={name:e,state:n};if(t.includes(r.name))return r}})(o);return console.log("codec found",c),c?c.state:t.apply(e,n)}};n(HTMLMediaElement.prototype,"canPlayType",o)},makeHandler:i,overrideBattery:function(t){const e={apply:async function(){return t}};n(Object.getPrototypeOf(navigator),"getBattery",e)}}}},e={},n=function n(r){var o=e[r];if(void 0!==o)return o.exports;var c=e[r]={exports:{}};return t[r](c,c.exports,n),c.exports}(555);window.qm6IbOA4bexItbo0GcvY5=n})();