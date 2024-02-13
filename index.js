(()=>{"use strict";var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])},t(r,e)};function r(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function e(t,r){var e,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(e=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,n=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=r.call(t,u)}catch(t){c=[6,t],n=0}finally{e=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}}function n(t){var r="function"==typeof Symbol&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),u=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u}function i(t,r,e){if(e||2===arguments.length)for(var n,o=0,i=r.length;o<i;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return t.concat(n||Array.prototype.slice.call(r))}function u(t){return this instanceof u?(this.v=t,this):new u(t)}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var c=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function s(t){return"function"==typeof t}function a(t){return s(null==t?void 0:t.then)}function l(t){var r=t((function(t){Error.call(t),t.stack=(new Error).stack}));return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var f=l((function(t){return function(r){t(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(t,r){return r+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r}}));function p(t,r){if(t){var e=t.indexOf(r);0<=e&&t.splice(e,1)}}var h=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var t,r,e,u,c;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var l=n(a),p=l.next();!p.done;p=l.next())p.value.remove(this)}catch(r){t={error:r}}finally{try{p&&!p.done&&(r=l.return)&&r.call(l)}finally{if(t)throw t.error}}else a.remove(this);var h=this.initialTeardown;if(s(h))try{h()}catch(t){c=t instanceof f?t.errors:[t]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var v=n(d),y=v.next();!y.done;y=v.next()){var S=y.value;try{b(S)}catch(t){c=null!=c?c:[],t instanceof f?c=i(i([],o(c)),o(t.errors)):c.push(t)}}}catch(t){e={error:t}}finally{try{y&&!y.done&&(u=v.return)&&u.call(v)}finally{if(e)throw e.error}}}if(c)throw new f(c)}},t.prototype.add=function(r){var e;if(r&&r!==this)if(this.closed)b(r);else{if(r instanceof t){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=null!==(e=this._finalizers)&&void 0!==e?e:[]).push(r)}},t.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},t.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},t.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&p(r,t)},t.prototype.remove=function(r){var e=this._finalizers;e&&p(e,r),r instanceof t&&r._removeParent(this)},t.EMPTY=((r=new t).closed=!0,r),t;var r}(),d=h.EMPTY;function v(t){return t instanceof h||t&&"closed"in t&&s(t.remove)&&s(t.add)&&s(t.unsubscribe)}function b(t){s(t)?t():t.unsubscribe()}var y={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},S={setTimeout:function(t,r){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];var u=S.delegate;return(null==u?void 0:u.setTimeout)?u.setTimeout.apply(u,i([t,r],o(e))):setTimeout.apply(void 0,i([t,r],o(e)))},clearTimeout:function(t){var r=S.delegate;return((null==r?void 0:r.clearTimeout)||clearTimeout)(t)},delegate:void 0};function m(t){S.setTimeout((function(){var r=y.onUnhandledError;if(!r)throw t;r(t)}))}function w(){}var E=O("C",void 0,void 0);function O(t,r,e){return{kind:t,value:r,error:e}}var A=null;function x(t){if(y.useDeprecatedSynchronousErrorHandling){var r=!A;if(r&&(A={errorThrown:!1,error:null}),t(),r){var e=A,n=e.errorThrown,o=e.error;if(A=null,n)throw o}}else t()}var g=function(t){function e(r){var e=t.call(this)||this;return e.isStopped=!1,r?(e.destination=r,v(r)&&r.add(e)):e.destination=P,e}return r(e,t),e.create=function(t,r,e){return new I(t,r,e)},e.prototype.next=function(t){this.isStopped?R(function(t){return O("N",t,void 0)}(t),this):this._next(t)},e.prototype.error=function(t){this.isStopped?R(O("E",void 0,t),this):(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped?R(E,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(h),_=Function.prototype.bind;function L(t,r){return _.call(t,r)}var T=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var r=this.partialObserver;if(r.next)try{r.next(t)}catch(t){C(t)}},t.prototype.error=function(t){var r=this.partialObserver;if(r.error)try{r.error(t)}catch(t){C(t)}else C(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){C(t)}},t}(),I=function(t){function e(r,e,n){var o,i,u=t.call(this)||this;return s(r)||!r?o={next:null!=r?r:void 0,error:null!=e?e:void 0,complete:null!=n?n:void 0}:u&&y.useDeprecatedNextContext?((i=Object.create(r)).unsubscribe=function(){return u.unsubscribe()},o={next:r.next&&L(r.next,i),error:r.error&&L(r.error,i),complete:r.complete&&L(r.complete,i)}):o=r,u.destination=new T(o),u}return r(e,t),e}(g);function C(t){var r;y.useDeprecatedSynchronousErrorHandling?(r=t,y.useDeprecatedSynchronousErrorHandling&&A&&(A.errorThrown=!0,A.error=r)):m(t)}function R(t,r){var e=y.onStoppedNotification;e&&S.setTimeout((function(){return e(t,r)}))}var P={closed:!0,next:w,error:function(t){throw t},complete:w},U="function"==typeof Symbol&&Symbol.observable||"@@observable";function N(t){return t}var M=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(r){var e=new t;return e.source=this,e.operator=r,e},t.prototype.subscribe=function(t,r,e){var n,o=this,i=(n=t)&&n instanceof g||function(t){return t&&s(t.next)&&s(t.error)&&s(t.complete)}(n)&&v(n)?t:new I(t,r,e);return x((function(){var t=o,r=t.operator,e=t.source;i.add(r?r.call(i,e):e?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},t.prototype.forEach=function(t,r){var e=this;return new(r=k(r))((function(r,n){var o=new I({next:function(r){try{t(r)}catch(t){n(t),o.unsubscribe()}},error:n,complete:r});e.subscribe(o)}))},t.prototype._subscribe=function(t){var r;return null===(r=this.source)||void 0===r?void 0:r.subscribe(t)},t.prototype[U]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return(0===(e=t).length?N:1===e.length?e[0]:function(t){return e.reduce((function(t,r){return r(t)}),t)})(this);var e},t.prototype.toPromise=function(t){var r=this;return new(t=k(t))((function(t,e){var n;r.subscribe((function(t){return n=t}),(function(t){return e(t)}),(function(){return t(n)}))}))},t.create=function(r){return new t(r)},t}();function k(t){var r;return null!==(r=null!=t?t:y.Promise)&&void 0!==r?r:Promise}function D(t){return s(t[U])}function j(t){return Symbol.asyncIterator&&s(null==t?void 0:t[Symbol.asyncIterator])}function B(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var H="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function z(t){return s(null==t?void 0:t[H])}function F(t){return function(t,r,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=e.apply(t,r||[]),i=[];return n={},c("next"),c("throw"),c("return"),n[Symbol.asyncIterator]=function(){return this},n;function c(t){o[t]&&(n[t]=function(r){return new Promise((function(e,n){i.push([t,r,e,n])>1||s(t,r)}))})}function s(t,r){try{(e=o[t](r)).value instanceof u?Promise.resolve(e.value.v).then(a,l):f(i[0][2],e)}catch(t){f(i[0][3],t)}var e}function a(t){s("next",t)}function l(t){s("throw",t)}function f(t,r){t(r),i.shift(),i.length&&s(i[0][0],i[0][1])}}(this,arguments,(function(){var r,n,o;return e(this,(function(e){switch(e.label){case 0:r=t.getReader(),e.label=1;case 1:e.trys.push([1,,9,10]),e.label=2;case 2:return[4,u(r.read())];case 3:return n=e.sent(),o=n.value,n.done?[4,u(void 0)]:[3,5];case 4:return[2,e.sent()];case 5:return[4,u(o)];case 6:return[4,e.sent()];case 7:return e.sent(),[3,2];case 8:return[3,10];case 9:return r.releaseLock(),[7];case 10:return[2]}}))}))}function G(t){return s(null==t?void 0:t.getReader)}function J(t){if(t instanceof M)return t;if(null!=t){if(D(t))return i=t,new M((function(t){var r=i[U]();if(s(r.subscribe))return r.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(c(t))return o=t,new M((function(t){for(var r=0;r<o.length&&!t.closed;r++)t.next(o[r]);t.complete()}));if(a(t))return e=t,new M((function(t){e.then((function(r){t.closed||(t.next(r),t.complete())}),(function(r){return t.error(r)})).then(null,m)}));if(j(t))return Y(t);if(z(t))return r=t,new M((function(t){var e,o;try{for(var i=n(r),u=i.next();!u.done;u=i.next()){var c=u.value;if(t.next(c),t.closed)return}}catch(t){e={error:t}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(e)throw e.error}}t.complete()}));if(G(t))return Y(F(t))}var r,e,o,i;throw B(t)}function Y(t){return new M((function(r){(function(t,r){var o,i,u,c,s,a,l,f;return s=this,a=void 0,f=function(){var s,a;return e(this,(function(e){switch(e.label){case 0:e.trys.push([0,5,6,11]),o=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,e=t[Symbol.asyncIterator];return e?e.call(t):(t=n(t),r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r);function o(e){r[e]=t[e]&&function(r){return new Promise((function(n,o){!function(t,r,e,n){Promise.resolve(n).then((function(r){t({value:r,done:e})}),r)}(n,o,(r=t[e](r)).done,r.value)}))}}}(t),e.label=1;case 1:return[4,o.next()];case 2:if((i=e.sent()).done)return[3,4];if(s=i.value,r.next(s),r.closed)return[2];e.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=e.sent(),u={error:a},[3,11];case 6:return e.trys.push([6,,9,10]),i&&!i.done&&(c=o.return)?[4,c.call(o)]:[3,8];case 7:e.sent(),e.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return r.complete(),[2]}}))},new((l=void 0)||(l=Promise))((function(t,r){function e(t){try{o(f.next(t))}catch(t){r(t)}}function n(t){try{o(f.throw(t))}catch(t){r(t)}}function o(r){var o;r.done?t(r.value):(o=r.value,o instanceof l?o:new l((function(t){t(o)}))).then(e,n)}o((f=f.apply(s,a||[])).next())}))})(t,r).catch((function(t){return r.error(t)}))}))}function V(t){return function(r){if(function(t){return s(null==t?void 0:t.lift)}(r))return r.lift((function(r){try{return t(r,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}function $(t,r,e,n,o){return new Z(t,r,e,n,o)}var Z=function(t){function e(r,e,n,o,i,u){var c=t.call(this,r)||this;return c.onFinalize=i,c.shouldUnsubscribe=u,c._next=e?function(t){try{e(t)}catch(t){r.error(t)}}:t.prototype._next,c._error=o?function(t){try{o(t)}catch(t){r.error(t)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=n?function(){try{n()}catch(t){r.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,c}return r(e,t),e.prototype.unsubscribe=function(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var e=this.closed;t.prototype.unsubscribe.call(this),!e&&(null===(r=this.onFinalize)||void 0===r||r.call(this))}},e}(g);function K(t,r){return V((function(e,n){var o=0;e.subscribe($(n,(function(e){n.next(t.call(r,e,o++))})))}))}function Q(t,r,e,n,o){void 0===n&&(n=0),void 0===o&&(o=!1);var i=r.schedule((function(){e(),o?t.add(this.schedule(null,n)):this.unsubscribe()}),n);if(t.add(i),!o)return i}function W(t,r,e){return void 0===e&&(e=1/0),s(r)?W((function(e,n){return K((function(t,o){return r(e,t,n,o)}))(J(t(e,n)))}),e):("number"==typeof r&&(e=r),V((function(r,n){return function(t,r,e,n,o,i,u,c){var s=[],a=0,l=0,f=!1,p=function(){!f||s.length||a||r.complete()},h=function(t){return a<n?d(t):s.push(t)},d=function(t){a++;var o=!1;J(e(t,l++)).subscribe($(r,(function(t){r.next(t)}),(function(){o=!0}),void 0,(function(){if(o)try{a--;for(;s.length&&a<n;)t=void 0,t=s.shift(),d(t);p()}catch(t){r.error(t)}var t})))};return t.subscribe($(r,h,(function(){f=!0,p()}))),function(){}}(r,n,t,e)})))}var q=Array.isArray;var X=["addListener","removeListener"],tt=["addEventListener","removeEventListener"],rt=["on","off"];function et(t,r,e,n){if(s(e)&&(n=e,e=void 0),n)return et(t,r,e).pipe((u=n,K((function(t){return function(t,r){return q(r)?t.apply(void 0,i([],o(r))):t(r)}(u,t)}))));var u,a=o(function(t){return s(t.addEventListener)&&s(t.removeEventListener)}(t)?tt.map((function(n){return function(o){return t[n](r,o,e)}})):function(t){return s(t.addListener)&&s(t.removeListener)}(t)?X.map(nt(t,r)):function(t){return s(t.on)&&s(t.off)}(t)?rt.map(nt(t,r)):[],2),l=a[0],f=a[1];if(!l&&c(t))return W((function(t){return et(t,r,e)}))(J(t));if(!l)throw new TypeError("Invalid event target");return new M((function(t){var r=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return t.next(1<r.length?r:r[0])};return l(r),function(){return f(r)}}))}function nt(t,r){return function(e){return function(n){return t[e](r,n)}}}var ot=l((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),it=function(t){function e(){var r=t.call(this)||this;return r.closed=!1,r.currentObservers=null,r.observers=[],r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return r(e,t),e.prototype.lift=function(t){var r=new ut(this,this);return r.operator=t,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new ot},e.prototype.next=function(t){var r=this;x((function(){var e,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var i=n(r.currentObservers),u=i.next();!u.done;u=i.next())u.value.next(t)}catch(t){e={error:t}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(e)throw e.error}}}}))},e.prototype.error=function(t){var r=this;x((function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=t;for(var e=r.observers;e.length;)e.shift().error(t)}}))},e.prototype.complete=function(){var t=this;x((function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var r=t.observers;r.length;)r.shift().complete()}}))},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(r){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,r)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var r=this,e=this,n=e.hasError,o=e.isStopped,i=e.observers;return n||o?d:(this.currentObservers=null,i.push(t),new h((function(){r.currentObservers=null,p(i,t)})))},e.prototype._checkFinalizedStatuses=function(t){var r=this,e=r.hasError,n=r.thrownError,o=r.isStopped;e?t.error(n):o&&t.complete()},e.prototype.asObservable=function(){var t=new M;return t.source=this,t},e.create=function(t,r){return new ut(t,r)},e}(M),ut=function(t){function e(r,e){var n=t.call(this)||this;return n.destination=r,n.source=e,n}return r(e,t),e.prototype.next=function(t){var r,e;null===(e=null===(r=this.destination)||void 0===r?void 0:r.next)||void 0===e||e.call(r,t)},e.prototype.error=function(t){var r,e;null===(e=null===(r=this.destination)||void 0===r?void 0:r.error)||void 0===e||e.call(r,t)},e.prototype.complete=function(){var t,r;null===(r=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===r||r.call(t)},e.prototype._subscribe=function(t){var r,e;return null!==(e=null===(r=this.source)||void 0===r?void 0:r.subscribe(t))&&void 0!==e?e:d},e}(it),ct=new M((function(t){return t.complete()}));function st(t){return t[t.length-1]}function at(t,r){return void 0===r&&(r=0),V((function(e,n){e.subscribe($(n,(function(e){return Q(n,t,(function(){return n.next(e)}),r)}),(function(){return Q(n,t,(function(){return n.complete()}),r)}),(function(e){return Q(n,t,(function(){return n.error(e)}),r)})))}))}function lt(t,r){return void 0===r&&(r=0),V((function(e,n){n.add(t.schedule((function(){return e.subscribe(n)}),r))}))}function ft(t,r){if(!t)throw new Error("Iterable cannot be null");return new M((function(e){Q(e,r,(function(){var n=t[Symbol.asyncIterator]();Q(e,r,(function(){n.next().then((function(t){t.done?e.complete():e.next(t.value)}))}),0,!0)}))}))}function pt(t,r){return V((function(e,n){var o=0;e.subscribe($(n,(function(e){return t.call(r,e,o++)&&n.next(e)})))}))}function ht(t){return V((function(r,e){J(t).subscribe($(e,(function(){return e.complete()}),w)),!e.closed&&r.subscribe(e)}))}const dt=JSON.parse('["ANDES","AHORA","BORRE","CAFES","CEJAS","CLAVO","CINCO","CONOS","CURSO","DEBES","DUNAS","EDITA","EMOJI","ENOJO","ERIZO","ERRAR","EUROS","EVITA","FOCOS","FOTOS","FRUTA","FELIZ","GAFAS","GALAS","GIROS","GOLES","HABLA","HAGAN","HEMOS","HECHO","HILOS","HOJAS","IDEAS","ISLAS","JERGA","JOYAS","JUGOS","KOALA","LATAS","LAGOS","LIMON","LEGOS","LEYES","LIBRO","LOROS","LUCES","LUNAS","MARES","MARCE","METAS","MILES","MISMA","MODOS","MORRO","MONOS","MUEVE","MULTA","NABOS","NUDOS","NULOS","OBRAS","OLLAS","ORDEN","ONDAS","PARES","PALMA","PESOS","PACES","PECES","PALTA","POCOS","POCAS","PRADO","QUISE","RATOS","REDES","REJAS","RESTO","REYES","SABIA","SALTA","SERES","SUELO","TACOS","TUBOS","UNTES","VALSA","VASOS","VELAS","VOTOS","WIKIS","YOGUR","YENES","ZORRO"]'),vt=document.getElementById("restart-button"),bt=document.getElementsByClassName("letter-row"),yt=document.getElementById("message-text"),St=et(document,"keydown"),mt=et(document,"touchstart");let wt,Et,Ot,At;const xt=new it,gt=St.pipe(K((t=>t.key.toUpperCase())),pt((t=>1===t.length&&t.match(/[a-z]/i)&&wt<5))),_t={next:t=>{let r=Array.from(bt)[Et].children[wt];r.textContent=t,r.classList.add("filled-letter"),wt++,Ot.push(t)}},Lt={next:()=>{hiddenInput.focus()}};mt.pipe(K((t=>t.target)),pt((t=>t.classList.contains("letter")))).subscribe(Lt);const Tt=St.pipe(K((t=>t.key)),pt((t=>"Enter"===t&&Et<6))),It={next:()=>{5==Ot.length?(Ot.map(((t,r)=>{let e="",n=bt[Et].children[r],o=At.indexOf(Ot[r]);e=At[r]===Ot[r]?"letter-green":-1===o?"letter-grey":"letter-yellow",n.classList.add(e)})),Ot.join("")===At?(yt.textContent=`😊 ¡Sí! La palabra ${At.toUpperCase()} es la correcta`,xt.next(),vt.disabled=!1):(wt=0,Et++,Ot=[],6===Et&&(yt.textContent=`😔 Perdiste. La palabra correcta era: "${At.toUpperCase()}"`,xt.next(),vt.disabled=!1))):yt.textContent=4===Ot.length?"Te falta 1 letra":`Te faltan ${5-Ot.length} letras`}},Ct=St.pipe(K((t=>t.key)),pt((t=>"Backspace"===t&&0!==wt))),Rt={next:()=>{let t=bt[Et].children[Ot.length-1];t.textContent="",t.classList="letter",wt--,Ot.pop()}},Pt=et(vt,"click");(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=function(t){return(r=st(t))&&s(r.schedule)?t.pop():void 0;var r}(t),n=function(t,r){return"number"==typeof st(t)?t.pop():1/0}(t),o=t;return o.length?1===o.length?J(o[0]):function(t){return void 0===t&&(t=1/0),W(N,t)}(n)(function(t,r){return r?function(t,r){if(null!=t){if(D(t))return function(t,r){return J(t).pipe(lt(r),at(r))}(t,r);if(c(t))return function(t,r){return new M((function(e){var n=0;return r.schedule((function(){n===t.length?e.complete():(e.next(t[n++]),e.closed||this.schedule())}))}))}(t,r);if(a(t))return function(t,r){return J(t).pipe(lt(r),at(r))}(t,r);if(j(t))return ft(t,r);if(z(t))return function(t,r){return new M((function(e){var n;return Q(e,r,(function(){n=t[H](),Q(e,r,(function(){var t,r,o;try{r=(t=n.next()).value,o=t.done}catch(t){return void e.error(t)}o?e.complete():e.next(r)}),0,!0)})),function(){return s(null==n?void 0:n.return)&&n.return()}}))}(t,r);if(G(t))return function(t,r){return ft(F(t),r)}(t,r)}throw B(t)}(t,r):J(t)}(o,e)):ct})(et(window,"load"),Pt).subscribe((()=>{Array.from(bt).map((t=>Array.from(t.children).map((t=>{t.textContent="",t.classList="letter"})))),Et=0,wt=0,Ot=[],yt.textContent="",At=dt[Math.floor(Math.random()*dt.length)],vt.disabled=!0,console.log(`Right word: ${At}`),gt.pipe(ht(xt)).subscribe(_t),Tt.pipe(ht(xt)).subscribe(It),Ct.pipe(ht(xt)).subscribe(Rt)}))})();