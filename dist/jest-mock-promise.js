/*! For license information please see jest-mock-promise.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["jest-mock-promise"]=t():e["jest-mock-promise"]=t()}(self,(function(){return(()=>{"use strict";var e={803:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.PromiseState=void 0,function(e){e[e.pending=0]="pending",e[e.resolved=1]="resolved",e[e.rejected=2]="rejected"}(r||(r={})),t.PromiseState=r}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}var n={};return(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0});var t=r(803),s=function(){function e(e){this.handlers=[],this.handlerIx=0,this.state=t.PromiseState.pending,e&&e(this.resolveFn.bind(this),this.rejectFn.bind(this))}return e.prototype.resolveFn=function(e){this.data=e,this.state=t.PromiseState.resolved,this.err=void 0;for(var r=this.handlers.length;this.handlerIx<r;this.handlerIx++){var n=this.handlers[this.handlerIx];if(n.catch||n.finally)return void this.callFinally();try{e=n.then(e)}catch(e){this.handlerIx++,this.rejectFn(e)}}},e.prototype.rejectFn=function(e){this.state=t.PromiseState.rejected,this.err=e;for(var r=this.handlers.length;this.handlerIx<r;this.handlerIx++){var n,s=this.handlers[this.handlerIx];if(s.catch)try{n=s.catch(e),this.handlerIx++,this.resolveFn(n);break}catch(e){this.handlerIx++,this.rejectFn(e);break}else s.finally&&this.callFinally()}},e.prototype.callFinally=function(){for(var e=!1,t=this.handlers.length;this.handlerIx<t;this.handlerIx++){var r=this.handlers[this.handlerIx];try{if(r.finally)r.finally(),e=!0;else{if(r.then&&e){this.resolveFn();break}if(r.catch){e=!1;continue}}}catch(e){this.handlerIx++,this.rejectFn(e);break}}},e.prototype.then=function(e,r){switch("function"!=typeof e&&(e=function(e){return e}),this.state){case t.PromiseState.rejected:r&&r(this.err);break;case t.PromiseState.resolved:e(this.data);break;default:this.handlers.push({then:e}),r&&this.handlers.push({catch:r})}return this},e.prototype.catch=function(e){return this.state===t.PromiseState.rejected?e(this.err):this.handlers.push({catch:e}),this},e.prototype.finally=function(e){return this.state!==t.PromiseState.pending?e():this.handlers.push({finally:e}),this},e.prototype.resolve=function(e){this.resolveFn(e)},e.prototype.reject=function(e){this.rejectFn(e)},e.resolve=function(t){return console.warn("a promise created via `JestMockPromise.resolve` will be executed async ... for sync execution call `resolve` method on an instance of `Promise`"),new e((function(e,r){setTimeout(e(t),0)}))},e.reject=function(t){return console.warn("a promise created via `JestMockPromise.reject` will be executed async ... for sync execution call `reject` method on an instance of `Promise`"),new e((function(e,r){setTimeout(r(t),0)}))},e}();e.default=s})(),n})()}));
//# sourceMappingURL=jest-mock-promise.js.map