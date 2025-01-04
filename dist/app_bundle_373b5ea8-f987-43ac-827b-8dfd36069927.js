//scripts/localforage.min.js
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.localforage=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(a){"use strict";function c(){k=!0;for(var a,b,c=l.length;c;){for(b=l,l=[],a=-1;++a<c;)b[a]();c=l.length}k=!1}function d(a){1!==l.push(a)||k||e()}var e,f=a.MutationObserver||a.WebKitMutationObserver;if(f){var g=0,h=new f(c),i=a.document.createTextNode("");h.observe(i,{characterData:!0}),e=function(){i.data=g=++g%2}}else if(a.setImmediate||void 0===a.MessageChannel)e="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var b=a.document.createElement("script");b.onreadystatechange=function(){c(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},a.document.documentElement.appendChild(b)}:function(){setTimeout(c,0)};else{var j=new a.MessageChannel;j.port1.onmessage=c,e=function(){j.port2.postMessage(0)}}var k,l=[];b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(a,b,c){"use strict";function d(){}function e(a){if("function"!=typeof a)throw new TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,a!==d&&i(this,a)}function f(a,b,c){this.promise=a,"function"==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),"function"==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}function g(a,b,c){o(function(){var d;try{d=b(c)}catch(b){return p.reject(a,b)}d===a?p.reject(a,new TypeError("Cannot resolve promise with itself")):p.resolve(a,d)})}function h(a){var b=a&&a.then;if(a&&("object"==typeof a||"function"==typeof a)&&"function"==typeof b)return function(){b.apply(a,arguments)}}function i(a,b){function c(b){f||(f=!0,p.reject(a,b))}function d(b){f||(f=!0,p.resolve(a,b))}function e(){b(d,c)}var f=!1,g=j(e);"error"===g.status&&c(g.value)}function j(a,b){var c={};try{c.value=a(b),c.status="success"}catch(a){c.status="error",c.value=a}return c}function k(a){return a instanceof this?a:p.resolve(new this(d),a)}function l(a){var b=new this(d);return p.reject(b,a)}function m(a){function b(a,b){function d(a){g[b]=a,++h!==e||f||(f=!0,p.resolve(j,g))}c.resolve(a).then(d,function(a){f||(f=!0,p.reject(j,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=new Array(e),h=0,i=-1,j=new this(d);++i<e;)b(a[i],i);return j}function n(a){function b(a){c.resolve(a).then(function(a){f||(f=!0,p.resolve(h,a))},function(a){f||(f=!0,p.reject(h,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=-1,h=new this(d);++g<e;)b(a[g]);return h}var o=a(1),p={},q=["REJECTED"],r=["FULFILLED"],s=["PENDING"];b.exports=e,e.prototype.catch=function(a){return this.then(null,a)},e.prototype.then=function(a,b){if("function"!=typeof a&&this.state===r||"function"!=typeof b&&this.state===q)return this;var c=new this.constructor(d);if(this.state!==s){g(c,this.state===r?a:b,this.outcome)}else this.queue.push(new f(c,a,b));return c},f.prototype.callFulfilled=function(a){p.resolve(this.promise,a)},f.prototype.otherCallFulfilled=function(a){g(this.promise,this.onFulfilled,a)},f.prototype.callRejected=function(a){p.reject(this.promise,a)},f.prototype.otherCallRejected=function(a){g(this.promise,this.onRejected,a)},p.resolve=function(a,b){var c=j(h,b);if("error"===c.status)return p.reject(a,c.value);var d=c.value;if(d)i(a,d);else{a.state=r,a.outcome=b;for(var e=-1,f=a.queue.length;++e<f;)a.queue[e].callFulfilled(b)}return a},p.reject=function(a,b){a.state=q,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a},e.resolve=k,e.reject=l,e.all=m,e.race=n},{1:1}],3:[function(a,b,c){(function(b){"use strict";"function"!=typeof b.Promise&&(b.Promise=a(2))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(a){return}}function f(){try{if(!ua||!ua.open)return!1;var a="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),b="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!a||b)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(a){return!1}}function g(a,b){a=a||[],b=b||{};try{return new Blob(a,b)}catch(f){if("TypeError"!==f.name)throw f;for(var c="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,d=new c,e=0;e<a.length;e+=1)d.append(a[e]);return d.getBlob(b.type)}}function h(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}function i(a,b,c){"function"==typeof b&&a.then(b),"function"==typeof c&&a.catch(c)}function j(a){return"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a)),a}function k(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}function l(a){for(var b=a.length,c=new ArrayBuffer(b),d=new Uint8Array(c),e=0;e<b;e++)d[e]=a.charCodeAt(e);return c}function m(a){return new va(function(b){var c=a.transaction(wa,Ba),d=g([""]);c.objectStore(wa).put(d,"key"),c.onabort=function(a){a.preventDefault(),a.stopPropagation(),b(!1)},c.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),c=navigator.userAgent.match(/Edge\//);b(c||!a||parseInt(a[1],10)>=43)}}).catch(function(){return!1})}function n(a){return"boolean"==typeof xa?va.resolve(xa):m(a).then(function(a){return xa=a})}function o(a){var b=ya[a.name],c={};c.promise=new va(function(a,b){c.resolve=a,c.reject=b}),b.deferredOperations.push(c),b.dbReady?b.dbReady=b.dbReady.then(function(){return c.promise}):b.dbReady=c.promise}function p(a){var b=ya[a.name],c=b.deferredOperations.pop();if(c)return c.resolve(),c.promise}function q(a,b){var c=ya[a.name],d=c.deferredOperations.pop();if(d)return d.reject(b),d.promise}function r(a,b){return new va(function(c,d){if(ya[a.name]=ya[a.name]||B(),a.db){if(!b)return c(a.db);o(a),a.db.close()}var e=[a.name];b&&e.push(a.version);var f=ua.open.apply(ua,e);b&&(f.onupgradeneeded=function(b){var c=f.result;try{c.createObjectStore(a.storeName),b.oldVersion<=1&&c.createObjectStore(wa)}catch(c){if("ConstraintError"!==c.name)throw c;console.warn('The database "'+a.name+'" has been upgraded from version '+b.oldVersion+" to version "+b.newVersion+', but the storage "'+a.storeName+'" already exists.')}}),f.onerror=function(a){a.preventDefault(),d(f.error)},f.onsuccess=function(){var b=f.result;b.onversionchange=function(a){a.target.close()},c(b),p(a)}})}function s(a){return r(a,!1)}function t(a){return r(a,!0)}function u(a,b){if(!a.db)return!0;var c=!a.db.objectStoreNames.contains(a.storeName),d=a.version<a.db.version,e=a.version>a.db.version;if(d&&(a.version!==b&&console.warn('The database "'+a.name+"\" can't be downgraded from version "+a.db.version+" to version "+a.version+"."),a.version=a.db.version),e||c){if(c){var f=a.db.version+1;f>a.version&&(a.version=f)}return!0}return!1}function v(a){return new va(function(b,c){var d=new FileReader;d.onerror=c,d.onloadend=function(c){var d=btoa(c.target.result||"");b({__local_forage_encoded_blob:!0,data:d,type:a.type})},d.readAsBinaryString(a)})}function w(a){return g([l(atob(a.data))],{type:a.type})}function x(a){return a&&a.__local_forage_encoded_blob}function y(a){var b=this,c=b._initReady().then(function(){var a=ya[b._dbInfo.name];if(a&&a.dbReady)return a.dbReady});return i(c,a,a),c}function z(a){o(a);for(var b=ya[a.name],c=b.forages,d=0;d<c.length;d++){var e=c[d];e._dbInfo.db&&(e._dbInfo.db.close(),e._dbInfo.db=null)}return a.db=null,s(a).then(function(b){return a.db=b,u(a)?t(a):b}).then(function(d){a.db=b.db=d;for(var e=0;e<c.length;e++)c[e]._dbInfo.db=d}).catch(function(b){throw q(a,b),b})}function A(a,b,c,d){void 0===d&&(d=1);try{var e=a.db.transaction(a.storeName,b);c(null,e)}catch(e){if(d>0&&(!a.db||"InvalidStateError"===e.name||"NotFoundError"===e.name))return va.resolve().then(function(){if(!a.db||"NotFoundError"===e.name&&!a.db.objectStoreNames.contains(a.storeName)&&a.version<=a.db.version)return a.db&&(a.version=a.db.version+1),t(a)}).then(function(){return z(a).then(function(){A(a,b,c,d-1)})}).catch(c);c(e)}}function B(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function C(a){function b(){return va.resolve()}var c=this,d={db:null};if(a)for(var e in a)d[e]=a[e];var f=ya[d.name];f||(f=B(),ya[d.name]=f),f.forages.push(c),c._initReady||(c._initReady=c.ready,c.ready=y);for(var g=[],h=0;h<f.forages.length;h++){var i=f.forages[h];i!==c&&g.push(i._initReady().catch(b))}var j=f.forages.slice(0);return va.all(g).then(function(){return d.db=f.db,s(d)}).then(function(a){return d.db=a,u(d,c._defaultConfig.version)?t(d):a}).then(function(a){d.db=f.db=a,c._dbInfo=d;for(var b=0;b<j.length;b++){var e=j[b];e!==c&&(e._dbInfo.db=d.db,e._dbInfo.version=d.version)}})}function D(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.get(a);h.onsuccess=function(){var a=h.result;void 0===a&&(a=null),x(a)&&(a=w(a)),b(a)},h.onerror=function(){d(h.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function E(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.openCursor(),i=1;h.onsuccess=function(){var c=h.result;if(c){var d=c.value;x(d)&&(d=w(d));var e=a(d,c.key,i++);void 0!==e?b(e):c.continue()}else b()},h.onerror=function(){d(h.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function F(a,b,c){var d=this;a=j(a);var e=new va(function(c,e){var f;d.ready().then(function(){return f=d._dbInfo,"[object Blob]"===za.call(b)?n(f.db).then(function(a){return a?b:v(b)}):b}).then(function(b){A(d._dbInfo,Ba,function(f,g){if(f)return e(f);try{var h=g.objectStore(d._dbInfo.storeName);null===b&&(b=void 0);var i=h.put(b,a);g.oncomplete=function(){void 0===b&&(b=null),c(b)},g.onabort=g.onerror=function(){var a=i.error?i.error:i.transaction.error;e(a)}}catch(a){e(a)}})}).catch(e)});return h(e,c),e}function G(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Ba,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.delete(a);f.oncomplete=function(){b()},f.onerror=function(){d(h.error)},f.onabort=function(){var a=h.error?h.error:h.transaction.error;d(a)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function H(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Ba,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.clear();e.oncomplete=function(){a()},e.onabort=e.onerror=function(){var a=g.error?g.error:g.transaction.error;c(a)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function I(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.count();g.onsuccess=function(){a(g.result)},g.onerror=function(){c(g.error)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function J(a,b){var c=this,d=new va(function(b,d){if(a<0)return void b(null);c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=!1,i=g.openKeyCursor();i.onsuccess=function(){var c=i.result;if(!c)return void b(null);0===a?b(c.key):h?b(c.key):(h=!0,c.advance(a))},i.onerror=function(){d(i.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function K(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.openKeyCursor(),h=[];g.onsuccess=function(){var b=g.result;if(!b)return void a(h);h.push(b.key),b.continue()},g.onerror=function(){c(g.error)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function L(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;if(a.name){var f=a.name===c.name&&e._dbInfo.db,g=f?va.resolve(e._dbInfo.db):s(a).then(function(b){var c=ya[a.name],d=c.forages;c.db=b;for(var e=0;e<d.length;e++)d[e]._dbInfo.db=b;return b});d=a.storeName?g.then(function(b){if(b.objectStoreNames.contains(a.storeName)){var c=b.version+1;o(a);var d=ya[a.name],e=d.forages;b.close();for(var f=0;f<e.length;f++){var g=e[f];g._dbInfo.db=null,g._dbInfo.version=c}return new va(function(b,d){var e=ua.open(a.name,c);e.onerror=function(a){e.result.close(),d(a)},e.onupgradeneeded=function(){e.result.deleteObjectStore(a.storeName)},e.onsuccess=function(){var a=e.result;a.close(),b(a)}}).then(function(a){d.db=a;for(var b=0;b<e.length;b++){var c=e[b];c._dbInfo.db=a,p(c._dbInfo)}}).catch(function(b){throw(q(a,b)||va.resolve()).catch(function(){}),b})}}):g.then(function(b){o(a);var c=ya[a.name],d=c.forages;b.close();for(var e=0;e<d.length;e++){d[e]._dbInfo.db=null}return new va(function(b,c){var d=ua.deleteDatabase(a.name);d.onerror=function(){var a=d.result;a&&a.close(),c(d.error)},d.onblocked=function(){console.warn('dropInstance blocked for database "'+a.name+'" until all open connections are closed')},d.onsuccess=function(){var a=d.result;a&&a.close(),b(a)}}).then(function(a){c.db=a;for(var b=0;b<d.length;b++)p(d[b]._dbInfo)}).catch(function(b){throw(q(a,b)||va.resolve()).catch(function(){}),b})})}else d=va.reject("Invalid arguments");return h(d,b),d}function M(){return"function"==typeof openDatabase}function N(a){var b,c,d,e,f,g=.75*a.length,h=a.length,i=0;"="===a[a.length-1]&&(g--,"="===a[a.length-2]&&g--);var j=new ArrayBuffer(g),k=new Uint8Array(j);for(b=0;b<h;b+=4)c=Da.indexOf(a[b]),d=Da.indexOf(a[b+1]),e=Da.indexOf(a[b+2]),f=Da.indexOf(a[b+3]),k[i++]=c<<2|d>>4,k[i++]=(15&d)<<4|e>>2,k[i++]=(3&e)<<6|63&f;return j}function O(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=Da[c[b]>>2],d+=Da[(3&c[b])<<4|c[b+1]>>4],d+=Da[(15&c[b+1])<<2|c[b+2]>>6],d+=Da[63&c[b+2]];return c.length%3==2?d=d.substring(0,d.length-1)+"=":c.length%3==1&&(d=d.substring(0,d.length-2)+"=="),d}function P(a,b){var c="";if(a&&(c=Ua.call(a)),a&&("[object ArrayBuffer]"===c||a.buffer&&"[object ArrayBuffer]"===Ua.call(a.buffer))){var d,e=Ga;a instanceof ArrayBuffer?(d=a,e+=Ia):(d=a.buffer,"[object Int8Array]"===c?e+=Ka:"[object Uint8Array]"===c?e+=La:"[object Uint8ClampedArray]"===c?e+=Ma:"[object Int16Array]"===c?e+=Na:"[object Uint16Array]"===c?e+=Pa:"[object Int32Array]"===c?e+=Oa:"[object Uint32Array]"===c?e+=Qa:"[object Float32Array]"===c?e+=Ra:"[object Float64Array]"===c?e+=Sa:b(new Error("Failed to get type for BinaryArray"))),b(e+O(d))}else if("[object Blob]"===c){var f=new FileReader;f.onload=function(){var c=Ea+a.type+"~"+O(this.result);b(Ga+Ja+c)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(c){console.error("Couldn't convert value into a JSON string: ",a),b(null,c)}}function Q(a){if(a.substring(0,Ha)!==Ga)return JSON.parse(a);var b,c=a.substring(Ta),d=a.substring(Ha,Ta);if(d===Ja&&Fa.test(c)){var e=c.match(Fa);b=e[1],c=c.substring(e[0].length)}var f=N(c);switch(d){case Ia:return f;case Ja:return g([f],{type:b});case Ka:return new Int8Array(f);case La:return new Uint8Array(f);case Ma:return new Uint8ClampedArray(f);case Na:return new Int16Array(f);case Pa:return new Uint16Array(f);case Oa:return new Int32Array(f);case Qa:return new Uint32Array(f);case Ra:return new Float32Array(f);case Sa:return new Float64Array(f);default:throw new Error("Unkown type: "+d)}}function R(a,b,c,d){a.executeSql("CREATE TABLE IF NOT EXISTS "+b.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],c,d)}function S(a){var b=this,c={db:null};if(a)for(var d in a)c[d]="string"!=typeof a[d]?a[d].toString():a[d];var e=new va(function(a,d){try{c.db=openDatabase(c.name,String(c.version),c.description,c.size)}catch(a){return d(a)}c.db.transaction(function(e){R(e,c,function(){b._dbInfo=c,a()},function(a,b){d(b)})},d)});return c.serializer=Va,e}function T(a,b,c,d,e,f){a.executeSql(c,d,e,function(a,g){g.code===g.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[b.storeName],function(a,h){h.rows.length?f(a,g):R(a,b,function(){a.executeSql(c,d,e,f)},f)},f):f(a,g)},f)}function U(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=e.serializer.deserialize(d)),b(d)},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function V(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName,[],function(c,d){for(var f=d.rows,g=f.length,h=0;h<g;h++){var i=f.item(h),j=i.value;if(j&&(j=e.serializer.deserialize(j)),void 0!==(j=a(j,i.key,h+1)))return void b(j)}b()},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function W(a,b,c,d){var e=this;a=j(a);var f=new va(function(f,g){e.ready().then(function(){void 0===b&&(b=null);var h=b,i=e._dbInfo;i.serializer.serialize(b,function(b,j){j?g(j):i.db.transaction(function(c){T(c,i,"INSERT OR REPLACE INTO "+i.storeName+" (key, value) VALUES (?, ?)",[a,b],function(){f(h)},function(a,b){g(b)})},function(b){if(b.code===b.QUOTA_ERR){if(d>0)return void f(W.apply(e,[a,h,c,d-1]));g(b)}})})}).catch(g)});return h(f,c),f}function X(a,b,c){return W.apply(this,[a,b,c,1])}function Y(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"DELETE FROM "+e.storeName+" WHERE key = ?",[a],function(){b()},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function Z(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"DELETE FROM "+d.storeName,[],function(){a()},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function $(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT COUNT(key) as c FROM "+d.storeName,[],function(b,c){var d=c.rows.item(0).c;a(d)},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function _(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT key FROM "+e.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var d=c.rows.length?c.rows.item(0).key:null;b(d)},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function aa(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT key FROM "+d.storeName,[],function(b,c){for(var d=[],e=0;e<c.rows.length;e++)d.push(c.rows.item(e).key);a(d)},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function ba(a){return new va(function(b,c){a.transaction(function(d){d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(c,d){for(var e=[],f=0;f<d.rows.length;f++)e.push(d.rows.item(f).name);b({db:a,storeNames:e})},function(a,b){c(b)})},function(a){c(a)})})}function ca(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;return d=a.name?new va(function(b){var d;d=a.name===c.name?e._dbInfo.db:openDatabase(a.name,"","",0),b(a.storeName?{db:d,storeNames:[a.storeName]}:ba(d))}).then(function(a){return new va(function(b,c){a.db.transaction(function(d){function e(a){return new va(function(b,c){d.executeSql("DROP TABLE IF EXISTS "+a,[],function(){b()},function(a,b){c(b)})})}for(var f=[],g=0,h=a.storeNames.length;g<h;g++)f.push(e(a.storeNames[g]));va.all(f).then(function(){b()}).catch(function(a){c(a)})},function(a){c(a)})})}):va.reject("Invalid arguments"),h(d,b),d}function da(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(a){return!1}}function ea(a,b){var c=a.name+"/";return a.storeName!==b.storeName&&(c+=a.storeName+"/"),c}function fa(){var a="_localforage_support_test";try{return localStorage.setItem(a,!0),localStorage.removeItem(a),!1}catch(a){return!0}}function ga(){return!fa()||localStorage.length>0}function ha(a){var b=this,c={};if(a)for(var d in a)c[d]=a[d];return c.keyPrefix=ea(a,b._defaultConfig),ga()?(b._dbInfo=c,c.serializer=Va,va.resolve()):va.reject()}function ia(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo.keyPrefix,c=localStorage.length-1;c>=0;c--){var d=localStorage.key(c);0===d.indexOf(a)&&localStorage.removeItem(d)}});return h(c,a),c}function ja(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo,d=localStorage.getItem(b.keyPrefix+a);return d&&(d=b.serializer.deserialize(d)),d});return h(d,b),d}function ka(a,b){var c=this,d=c.ready().then(function(){for(var b=c._dbInfo,d=b.keyPrefix,e=d.length,f=localStorage.length,g=1,h=0;h<f;h++){var i=localStorage.key(h);if(0===i.indexOf(d)){var j=localStorage.getItem(i);if(j&&(j=b.serializer.deserialize(j)),void 0!==(j=a(j,i.substring(e),g++)))return j}}});return h(d,b),d}function la(a,b){var c=this,d=c.ready().then(function(){var b,d=c._dbInfo;try{b=localStorage.key(a)}catch(a){b=null}return b&&(b=b.substring(d.keyPrefix.length)),b});return h(d,b),d}function ma(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo,c=localStorage.length,d=[],e=0;e<c;e++){var f=localStorage.key(e);0===f.indexOf(a.keyPrefix)&&d.push(f.substring(a.keyPrefix.length))}return d});return h(c,a),c}function na(a){var b=this,c=b.keys().then(function(a){return a.length});return h(c,a),c}function oa(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo;localStorage.removeItem(b.keyPrefix+a)});return h(d,b),d}function pa(a,b,c){var d=this;a=j(a);var e=d.ready().then(function(){void 0===b&&(b=null);var c=b;return new va(function(e,f){var g=d._dbInfo;g.serializer.serialize(b,function(b,d){if(d)f(d);else try{localStorage.setItem(g.keyPrefix+a,b),e(c)}catch(a){"QuotaExceededError"!==a.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==a.name||f(a),f(a)}})})});return h(e,c),e}function qa(a,b){if(b=k.apply(this,arguments),a="function"!=typeof a&&a||{},!a.name){var c=this.config();a.name=a.name||c.name,a.storeName=a.storeName||c.storeName}var d,e=this;return d=a.name?new va(function(b){b(a.storeName?ea(a,e._defaultConfig):a.name+"/")}).then(function(a){for(var b=localStorage.length-1;b>=0;b--){var c=localStorage.key(b);0===c.indexOf(a)&&localStorage.removeItem(c)}}):va.reject("Invalid arguments"),h(d,b),d}function ra(a,b){a[b]=function(){var c=arguments;return a.ready().then(function(){return a[b].apply(a,c)})}}function sa(){for(var a=1;a<arguments.length;a++){var b=arguments[a];if(b)for(var c in b)b.hasOwnProperty(c)&&($a(b[c])?arguments[0][c]=b[c].slice():arguments[0][c]=b[c])}return arguments[0]}var ta="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ua=e();"undefined"==typeof Promise&&a(3);var va=Promise,wa="local-forage-detect-blob-support",xa=void 0,ya={},za=Object.prototype.toString,Aa="readonly",Ba="readwrite",Ca={_driver:"asyncStorage",_initStorage:C,_support:f(),iterate:E,getItem:D,setItem:F,removeItem:G,clear:H,length:I,key:J,keys:K,dropInstance:L},Da="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ea="~~local_forage_type~",Fa=/^~~local_forage_type~([^~]+)~/,Ga="__lfsc__:",Ha=Ga.length,Ia="arbf",Ja="blob",Ka="si08",La="ui08",Ma="uic8",Na="si16",Oa="si32",Pa="ur16",Qa="ui32",Ra="fl32",Sa="fl64",Ta=Ha+Ia.length,Ua=Object.prototype.toString,Va={serialize:P,deserialize:Q,stringToBuffer:N,bufferToString:O},Wa={_driver:"webSQLStorage",_initStorage:S,_support:M(),iterate:V,getItem:U,setItem:X,removeItem:Y,clear:Z,length:$,key:_,keys:aa,dropInstance:ca},Xa={_driver:"localStorageWrapper",_initStorage:ha,_support:da(),iterate:ka,getItem:ja,setItem:pa,removeItem:oa,clear:ia,length:na,key:la,keys:ma,dropInstance:qa},Ya=function(a,b){return a===b||"number"==typeof a&&"number"==typeof b&&isNaN(a)&&isNaN(b)},Za=function(a,b){for(var c=a.length,d=0;d<c;){if(Ya(a[d],b))return!0;d++}return!1},$a=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},_a={},ab={},bb={INDEXEDDB:Ca,WEBSQL:Wa,LOCALSTORAGE:Xa},cb=[bb.INDEXEDDB._driver,bb.WEBSQL._driver,bb.LOCALSTORAGE._driver],db=["dropInstance"],eb=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(db),fb={description:"",driver:cb.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},gb=function(){function a(b){d(this,a);for(var c in bb)if(bb.hasOwnProperty(c)){var e=bb[c],f=e._driver;this[c]=f,_a[f]||this.defineDriver(e)}this._defaultConfig=sa({},fb),this._config=sa({},this._defaultConfig,b),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return a.prototype.config=function(a){if("object"===(void 0===a?"undefined":ta(a))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in a){if("storeName"===b&&(a[b]=a[b].replace(/\W/g,"_")),"version"===b&&"number"!=typeof a[b])return new Error("Database version must be a number.");this._config[b]=a[b]}return!("driver"in a&&a.driver)||this.setDriver(this._config.driver)}return"string"==typeof a?this._config[a]:this._config},a.prototype.defineDriver=function(a,b,c){var d=new va(function(b,c){try{var d=a._driver,e=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!a._driver)return void c(e);for(var f=eb.concat("_initStorage"),g=0,i=f.length;g<i;g++){var j=f[g];if((!Za(db,j)||a[j])&&"function"!=typeof a[j])return void c(e)}(function(){for(var b=function(a){return function(){var b=new Error("Method "+a+" is not implemented by the current driver"),c=va.reject(b);return h(c,arguments[arguments.length-1]),c}},c=0,d=db.length;c<d;c++){var e=db[c];a[e]||(a[e]=b(e))}})();var k=function(c){_a[d]&&console.info("Redefining LocalForage driver: "+d),_a[d]=a,ab[d]=c,b()};"_support"in a?a._support&&"function"==typeof a._support?a._support().then(k,c):k(!!a._support):k(!0)}catch(a){c(a)}});return i(d,b,c),d},a.prototype.driver=function(){return this._driver||null},a.prototype.getDriver=function(a,b,c){var d=_a[a]?va.resolve(_a[a]):va.reject(new Error("Driver not found."));return i(d,b,c),d},a.prototype.getSerializer=function(a){var b=va.resolve(Va);return i(b,a),b},a.prototype.ready=function(a){var b=this,c=b._driverSet.then(function(){return null===b._ready&&(b._ready=b._initDriver()),b._ready});return i(c,a,a),c},a.prototype.setDriver=function(a,b,c){function d(){g._config.driver=g.driver()}function e(a){return g._extend(a),d(),g._ready=g._initStorage(g._config),g._ready}function f(a){return function(){function b(){for(;c<a.length;){var f=a[c];return c++,g._dbInfo=null,g._ready=null,g.getDriver(f).then(e).catch(b)}d();var h=new Error("No available storage method found.");return g._driverSet=va.reject(h),g._driverSet}var c=0;return b()}}var g=this;$a(a)||(a=[a]);var h=this._getSupportedDrivers(a),j=null!==this._driverSet?this._driverSet.catch(function(){return va.resolve()}):va.resolve();return this._driverSet=j.then(function(){var a=h[0];return g._dbInfo=null,g._ready=null,g.getDriver(a).then(function(a){g._driver=a._driver,d(),g._wrapLibraryMethodsWithReady(),g._initDriver=f(h)})}).catch(function(){d();var a=new Error("No available storage method found.");return g._driverSet=va.reject(a),g._driverSet}),i(this._driverSet,b,c),this._driverSet},a.prototype.supports=function(a){return!!ab[a]},a.prototype._extend=function(a){sa(this,a)},a.prototype._getSupportedDrivers=function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];this.supports(e)&&b.push(e)}return b},a.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0,b=eb.length;a<b;a++)ra(this,eb[a])},a.prototype.createInstance=function(b){return new a(b)},a}(),hb=new gb;b.exports=hb},{3:3}]},{},[4])(4)});

//scripts/bootstrap.bundle.min.js
/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t=new Map,e={set(e,i,n){t.has(e)||t.set(e,new Map);const s=t.get(e);s.has(i)||0===s.size?s.set(i,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(e,i)=>t.has(e)&&t.get(e).get(i)||null,remove(e,i){if(!t.has(e))return;const n=t.get(e);n.delete(i),0===n.size&&t.delete(e)}},i="transitionend",n=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),s=t=>{t.dispatchEvent(new Event(i))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(n(t)):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,m=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},g=(t,e=[],i=t)=>"function"==typeof t?t(...e):i,_=(t,e,n=!0)=>{if(!n)return void g(t);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let r=!1;const a=({target:n})=>{n===e&&(r=!0,e.removeEventListener(i,a),g(t))};e.addEventListener(i,a),setTimeout((()=>{r||s(e)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=I(t);return C.has(o)||(o=t),[n,s,o]}function S(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=L(e,i,n);if(e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return P(s,{delegateTarget:r}),n.oneOff&&N.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return P(n,{delegateTarget:t}),i.oneOff&&N.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function D(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function $(t,e,i,n){const s=e[i]||{};for(const[o,r]of Object.entries(s))o.includes(n)&&D(t,e,i,r.callable,r.delegationSelector)}function I(t){return t=t.replace(y,""),T[t]||t}const N={on(t,e,i,n){S(t,e,i,n,!1)},one(t,e,i,n){S(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))$(t,l,i,e.slice(1));for(const[i,n]of Object.entries(c)){const s=i.replace(w,"");a&&!e.includes(s)||D(t,l,r,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;D(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==I(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());const l=P(new Event(e,{bubbles:o,cancelable:!0}),i);return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function P(t,e={}){for(const[i,n]of Object.entries(e))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}function j(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function M(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const F={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${M(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${M(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=j(t.dataset[n])}return e},getDataAttribute:(t,e)=>j(t.getAttribute(`data-bs-${M(e)}`))};class H{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?F.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?F.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[n,s]of Object.entries(e)){const e=t[n],r=o(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)}var i}}class W extends H{constructor(t,i){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(i),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return e.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const B=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e?e.split(",").map((t=>n(t))).join(","):null},z={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))},getSelectorFromElement(t){const e=B(t);return e&&z.findOne(e)?e:null},getElementFromSelector(t){const e=B(t);return e?z.findOne(e):null},getMultipleElementsFromSelector(t){const e=B(t);return e?z.find(e):[]}},R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,n=t.NAME;N.on(document,i,`[data-bs-dismiss="${n}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const s=z.getElementFromSelector(this)||this.closest(`.${n}`);t.getOrCreateInstance(s)[e]()}))},q=".bs.alert",V=`close${q}`,K=`closed${q}`;class Q extends W{static get NAME(){return"alert"}close(){if(N.trigger(this._element,V).defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),N.trigger(this._element,K),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=Q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(Q,"close"),m(Q);const X='[data-bs-toggle="button"]';class Y extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Y.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}N.on(document,"click.bs.button.data-api",X,(t=>{t.preventDefault();const e=t.target.closest(X);Y.getOrCreateInstance(e).toggle()})),m(Y);const U=".bs.swipe",G=`touchstart${U}`,J=`touchmove${U}`,Z=`touchend${U}`,tt=`pointerdown${U}`,et=`pointerup${U}`,it={endCallback:null,leftCallback:null,rightCallback:null},nt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class st extends H{constructor(t,e){super(),this._element=t,t&&st.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return it}static get DefaultType(){return nt}static get NAME(){return"swipe"}dispose(){N.off(this._element,U)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),g(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&g(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,tt,(t=>this._start(t))),N.on(this._element,et,(t=>this._end(t))),this._element.classList.add("pointer-event")):(N.on(this._element,G,(t=>this._start(t))),N.on(this._element,J,(t=>this._move(t))),N.on(this._element,Z,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ot=".bs.carousel",rt=".data-api",at="next",lt="prev",ct="left",ht="right",dt=`slide${ot}`,ut=`slid${ot}`,ft=`keydown${ot}`,pt=`mouseenter${ot}`,mt=`mouseleave${ot}`,gt=`dragstart${ot}`,_t=`load${ot}${rt}`,bt=`click${ot}${rt}`,vt="carousel",yt="active",wt=".active",At=".carousel-item",Et=wt+At,Tt={ArrowLeft:ht,ArrowRight:ct},Ct={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ot={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class xt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=z.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===vt&&this.cycle()}static get Default(){return Ct}static get DefaultType(){return Ot}static get NAME(){return"carousel"}next(){this._slide(at)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(lt)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?N.one(this._element,ut,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void N.one(this._element,ut,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?at:lt;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&N.on(this._element,ft,(t=>this._keydown(t))),"hover"===this._config.pause&&(N.on(this._element,pt,(()=>this.pause())),N.on(this._element,mt,(()=>this._maybeEnableCycle()))),this._config.touch&&st.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of z.find(".carousel-item img",this._element))N.on(t,gt,(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(ct)),rightCallback:()=>this._slide(this._directionToOrder(ht)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new st(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Tt[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=z.findOne(wt,this._indicatorsElement);e.classList.remove(yt),e.removeAttribute("aria-current");const i=z.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(yt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===at,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>N.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r(dt).defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(yt),i.classList.remove(yt,c,l),this._isSliding=!1,r(ut)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return z.findOne(Et,this._element)}_getItems(){return z.find(At,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===ct?lt:at:t===ct?at:lt}_orderToDirection(t){return p()?t===lt?ct:ht:t===lt?ht:ct}static jQueryInterface(t){return this.each((function(){const e=xt.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}N.on(document,bt,"[data-bs-slide], [data-bs-slide-to]",(function(t){const e=z.getElementFromSelector(this);if(!e||!e.classList.contains(vt))return;t.preventDefault();const i=xt.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");return n?(i.to(n),void i._maybeEnableCycle()):"next"===F.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),N.on(window,_t,(()=>{const t=z.find('[data-bs-ride="carousel"]');for(const e of t)xt.getOrCreateInstance(e)})),m(xt);const kt=".bs.collapse",Lt=`show${kt}`,St=`shown${kt}`,Dt=`hide${kt}`,$t=`hidden${kt}`,It=`click${kt}.data-api`,Nt="show",Pt="collapse",jt="collapsing",Mt=`:scope .${Pt} .${Pt}`,Ft='[data-bs-toggle="collapse"]',Ht={parent:null,toggle:!0},Wt={parent:"(null|element)",toggle:"boolean"};class Bt extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=z.find(Ft);for(const t of i){const e=z.getSelectorFromElement(t),i=z.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ht}static get DefaultType(){return Wt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>Bt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(N.trigger(this._element,Lt).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(Pt),this._element.classList.add(jt),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(jt),this._element.classList.add(Pt,Nt),this._element.style[e]="",N.trigger(this._element,St)}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(N.trigger(this._element,Dt).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(jt),this._element.classList.remove(Pt,Nt);for(const t of this._triggerArray){const e=z.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(jt),this._element.classList.add(Pt),N.trigger(this._element,$t)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(Nt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Ft);for(const e of t){const t=z.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=z.find(Mt,this._config.parent);return z.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=Bt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}N.on(document,It,Ft,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of z.getMultipleElementsFromSelector(this))Bt.getOrCreateInstance(t,{toggle:!1}).toggle()})),m(Bt);var zt="top",Rt="bottom",qt="right",Vt="left",Kt="auto",Qt=[zt,Rt,qt,Vt],Xt="start",Yt="end",Ut="clippingParents",Gt="viewport",Jt="popper",Zt="reference",te=Qt.reduce((function(t,e){return t.concat([e+"-"+Xt,e+"-"+Yt])}),[]),ee=[].concat(Qt,[Kt]).reduce((function(t,e){return t.concat([e,e+"-"+Xt,e+"-"+Yt])}),[]),ie="beforeRead",ne="read",se="afterRead",oe="beforeMain",re="main",ae="afterMain",le="beforeWrite",ce="write",he="afterWrite",de=[ie,ne,se,oe,re,ae,le,ce,he];function ue(t){return t?(t.nodeName||"").toLowerCase():null}function fe(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function pe(t){return t instanceof fe(t).Element||t instanceof Element}function me(t){return t instanceof fe(t).HTMLElement||t instanceof HTMLElement}function ge(t){return"undefined"!=typeof ShadowRoot&&(t instanceof fe(t).ShadowRoot||t instanceof ShadowRoot)}const _e={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];me(s)&&ue(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});me(n)&&ue(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function be(t){return t.split("-")[0]}var ve=Math.max,ye=Math.min,we=Math.round;function Ae(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Ee(){return!/^((?!chrome|android).)*safari/i.test(Ae())}function Te(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),s=1,o=1;e&&me(t)&&(s=t.offsetWidth>0&&we(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&we(n.height)/t.offsetHeight||1);var r=(pe(t)?fe(t):window).visualViewport,a=!Ee()&&i,l=(n.left+(a&&r?r.offsetLeft:0))/s,c=(n.top+(a&&r?r.offsetTop:0))/o,h=n.width/s,d=n.height/o;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l,x:l,y:c}}function Ce(t){var e=Te(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Oe(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&ge(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function xe(t){return fe(t).getComputedStyle(t)}function ke(t){return["table","td","th"].indexOf(ue(t))>=0}function Le(t){return((pe(t)?t.ownerDocument:t.document)||window.document).documentElement}function Se(t){return"html"===ue(t)?t:t.assignedSlot||t.parentNode||(ge(t)?t.host:null)||Le(t)}function De(t){return me(t)&&"fixed"!==xe(t).position?t.offsetParent:null}function $e(t){for(var e=fe(t),i=De(t);i&&ke(i)&&"static"===xe(i).position;)i=De(i);return i&&("html"===ue(i)||"body"===ue(i)&&"static"===xe(i).position)?e:i||function(t){var e=/firefox/i.test(Ae());if(/Trident/i.test(Ae())&&me(t)&&"fixed"===xe(t).position)return null;var i=Se(t);for(ge(i)&&(i=i.host);me(i)&&["html","body"].indexOf(ue(i))<0;){var n=xe(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function Ie(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ne(t,e,i){return ve(t,ye(e,i))}function Pe(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function je(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const Me={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=be(i.placement),l=Ie(a),c=[Vt,qt].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return Pe("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:je(t,Qt))}(s.padding,i),d=Ce(o),u="y"===l?zt:Vt,f="y"===l?Rt:qt,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=$e(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=Ne(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Oe(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Fe(t){return t.split("-")[1]}var He={top:"auto",right:"auto",bottom:"auto",left:"auto"};function We(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,m=void 0===p?0:p,g="function"==typeof h?h({x:f,y:m}):{x:f,y:m};f=g.x,m=g.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=Vt,y=zt,w=window;if(c){var A=$e(i),E="clientHeight",T="clientWidth";A===fe(i)&&"static"!==xe(A=Le(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===zt||(s===Vt||s===qt)&&o===Yt)&&(y=Rt,m-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,m*=l?1:-1),s!==Vt&&(s!==zt&&s!==Rt||o!==Yt)||(v=qt,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&He),x=!0===h?function(t,e){var i=t.x,n=t.y,s=e.devicePixelRatio||1;return{x:we(i*s)/s||0,y:we(n*s)/s||0}}({x:f,y:m},fe(i)):{x:f,y:m};return f=x.x,m=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?m+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const Be={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:be(e.placement),variation:Fe(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,We(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,We(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var ze={passive:!0};const Re={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=fe(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,ze)})),a&&l.addEventListener("resize",i.update,ze),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,ze)})),a&&l.removeEventListener("resize",i.update,ze)}},data:{}};var qe={left:"right",right:"left",bottom:"top",top:"bottom"};function Ve(t){return t.replace(/left|right|bottom|top/g,(function(t){return qe[t]}))}var Ke={start:"end",end:"start"};function Qe(t){return t.replace(/start|end/g,(function(t){return Ke[t]}))}function Xe(t){var e=fe(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ye(t){return Te(Le(t)).left+Xe(t).scrollLeft}function Ue(t){var e=xe(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ge(t){return["html","body","#document"].indexOf(ue(t))>=0?t.ownerDocument.body:me(t)&&Ue(t)?t:Ge(Se(t))}function Je(t,e){var i;void 0===e&&(e=[]);var n=Ge(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=fe(n),r=s?[o].concat(o.visualViewport||[],Ue(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Je(Se(r)))}function Ze(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ti(t,e,i){return e===Gt?Ze(function(t,e){var i=fe(t),n=Le(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Ee();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+Ye(t),y:l}}(t,i)):pe(e)?function(t,e){var i=Te(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):Ze(function(t){var e,i=Le(t),n=Xe(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=ve(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=ve(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ye(t),l=-n.scrollTop;return"rtl"===xe(s||i).direction&&(a+=ve(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(Le(t)))}function ei(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?be(s):null,r=s?Fe(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case zt:e={x:a,y:i.y-n.height};break;case Rt:e={x:a,y:i.y+i.height};break;case qt:e={x:i.x+i.width,y:l};break;case Vt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?Ie(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case Xt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case Yt:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function ii(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.strategy,r=void 0===o?t.strategy:o,a=i.boundary,l=void 0===a?Ut:a,c=i.rootBoundary,h=void 0===c?Gt:c,d=i.elementContext,u=void 0===d?Jt:d,f=i.altBoundary,p=void 0!==f&&f,m=i.padding,g=void 0===m?0:m,_=Pe("number"!=typeof g?g:je(g,Qt)),b=u===Jt?Zt:Jt,v=t.rects.popper,y=t.elements[p?b:u],w=function(t,e,i,n){var s="clippingParents"===e?function(t){var e=Je(Se(t)),i=["absolute","fixed"].indexOf(xe(t).position)>=0&&me(t)?$e(t):t;return pe(i)?e.filter((function(t){return pe(t)&&Oe(t,i)&&"body"!==ue(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=ti(t,i,n);return e.top=ve(s.top,e.top),e.right=ye(s.right,e.right),e.bottom=ye(s.bottom,e.bottom),e.left=ve(s.left,e.left),e}),ti(t,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(pe(y)?y:y.contextElement||Le(t.elements.popper),l,h,r),A=Te(t.elements.reference),E=ei({reference:A,element:v,strategy:"absolute",placement:s}),T=Ze(Object.assign({},v,E)),C=u===Jt?T:A,O={top:w.top-C.top+_.top,bottom:C.bottom-w.bottom+_.bottom,left:w.left-C.left+_.left,right:C.right-w.right+_.right},x=t.modifiersData.offset;if(u===Jt&&x){var k=x[s];Object.keys(O).forEach((function(t){var e=[qt,Rt].indexOf(t)>=0?1:-1,i=[zt,Rt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function ni(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?ee:l,h=Fe(n),d=h?a?te:te.filter((function(t){return Fe(t)===h})):Qt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=ii(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[be(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const si={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=be(g),b=l||(_!==g&&p?function(t){if(be(t)===Kt)return[];var e=Ve(t);return[Qe(t),e,Qe(e)]}(g):[Ve(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat(be(i)===Kt?ni(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=be(O),k=Fe(O)===Xt,L=[zt,Rt].indexOf(x)>=0,S=L?"width":"height",D=ii(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),$=L?k?qt:Vt:k?Rt:zt;y[S]>w[S]&&($=Ve($));var I=Ve($),N=[];if(o&&N.push(D[x]<=0),a&&N.push(D[$]<=0,D[I]<=0),N.every((function(t){return t}))){T=O,E=!1;break}A.set(O,N)}if(E)for(var P=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},j=p?3:1;j>0&&"break"!==P(j);j--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function oi(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function ri(t){return[zt,qt,Rt,Vt].some((function(e){return t[e]>=0}))}const ai={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=ii(e,{elementContext:"reference"}),a=ii(e,{altBoundary:!0}),l=oi(r,n),c=oi(a,s,o),h=ri(l),d=ri(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},li={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=ee.reduce((function(t,i){return t[i]=function(t,e,i){var n=be(t),s=[Vt,zt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[Vt,qt].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},ci={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=ei({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},hi={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=ii(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=be(e.placement),b=Fe(e.placement),v=!b,y=Ie(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,S="y"===y?zt:Vt,D="y"===y?Rt:qt,$="y"===y?"height":"width",I=A[y],N=I+g[S],P=I-g[D],j=f?-T[$]/2:0,M=b===Xt?E[$]:T[$],F=b===Xt?-T[$]:-E[$],H=e.elements.arrow,W=f&&H?Ce(H):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=B[S],R=B[D],q=Ne(0,E[$],W[$]),V=v?E[$]/2-j-q-z-O.mainAxis:M-q-z-O.mainAxis,K=v?-E[$]/2+j+q+R+O.mainAxis:F+q+R+O.mainAxis,Q=e.elements.arrow&&$e(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=I+K-Y,G=Ne(f?ye(N,I+V-Y-X):N,I,f?ve(P,U):P);A[y]=G,k[y]=G-I}if(a){var J,Z="x"===y?zt:Vt,tt="x"===y?Rt:qt,et=A[w],it="y"===w?"height":"width",nt=et+g[Z],st=et-g[tt],ot=-1!==[zt,Vt].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=Ne(t,e,i);return n>i?i:n}(at,et,lt):Ne(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function di(t,e,i){void 0===i&&(i=!1);var n,s,o=me(e),r=me(e)&&function(t){var e=t.getBoundingClientRect(),i=we(e.width)/t.offsetWidth||1,n=we(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=Le(e),l=Te(t,r,i),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==ue(e)||Ue(a))&&(c=(n=e)!==fe(n)&&me(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:Xe(n)),me(e)?((h=Te(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=Ye(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function ui(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var fi={placement:"bottom",modifiers:[],strategy:"absolute"};function pi(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function mi(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?fi:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},fi,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:pe(t)?Je(t):t.contextElement?Je(t.contextElement):[],popper:Je(e)};var r,c,u=function(t){var e=ui(t);return de.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(pi(e,i)){a.rects={reference:di(e,$e(i),"fixed"===a.options.strategy),popper:Ce(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!pi(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var gi=mi(),_i=mi({defaultModifiers:[Re,ci,Be,_e]}),bi=mi({defaultModifiers:[Re,ci,Be,_e,li,si,hi,Me,ai]});const vi=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ae,afterRead:se,afterWrite:he,applyStyles:_e,arrow:Me,auto:Kt,basePlacements:Qt,beforeMain:oe,beforeRead:ie,beforeWrite:le,bottom:Rt,clippingParents:Ut,computeStyles:Be,createPopper:bi,createPopperBase:gi,createPopperLite:_i,detectOverflow:ii,end:Yt,eventListeners:Re,flip:si,hide:ai,left:Vt,main:re,modifierPhases:de,offset:li,placements:ee,popper:Jt,popperGenerator:mi,popperOffsets:ci,preventOverflow:hi,read:ne,reference:Zt,right:qt,start:Xt,top:zt,variationPlacements:te,viewport:Gt,write:ce},Symbol.toStringTag,{value:"Module"})),yi="dropdown",wi=".bs.dropdown",Ai=".data-api",Ei="ArrowUp",Ti="ArrowDown",Ci=`hide${wi}`,Oi=`hidden${wi}`,xi=`show${wi}`,ki=`shown${wi}`,Li=`click${wi}${Ai}`,Si=`keydown${wi}${Ai}`,Di=`keyup${wi}${Ai}`,$i="show",Ii='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ni=`${Ii}.${$i}`,Pi=".dropdown-menu",ji=p()?"top-end":"top-start",Mi=p()?"top-start":"top-end",Fi=p()?"bottom-end":"bottom-start",Hi=p()?"bottom-start":"bottom-end",Wi=p()?"left-start":"right-start",Bi=p()?"right-start":"left-start",zi={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ri={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class qi extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=z.next(this._element,Pi)[0]||z.prev(this._element,Pi)[0]||z.findOne(Pi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return zi}static get DefaultType(){return Ri}static get NAME(){return yi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!N.trigger(this._element,xi,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add($i),this._element.classList.add($i),N.trigger(this._element,ki,t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!N.trigger(this._element,Ci,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove($i),this._element.classList.remove($i),this._element.setAttribute("aria-expanded","false"),F.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,Oi,t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===vi)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=bi(t,this._menu,e)}_isShown(){return this._menu.classList.contains($i)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return Wi;if(t.classList.contains("dropstart"))return Bi;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?Mi:ji:e?Hi:Fi}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(F.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...g(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Ti,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=qi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=z.find(Ni);for(const i of e){const e=qi.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Ei,Ti].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=this.matches(Ii)?this:z.prev(this,Ii)[0]||z.next(this,Ii)[0]||z.findOne(Ii,t.delegateTarget.parentNode),o=qi.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}N.on(document,Si,Ii,qi.dataApiKeydownHandler),N.on(document,Si,Pi,qi.dataApiKeydownHandler),N.on(document,Li,qi.clearMenus),N.on(document,Di,qi.clearMenus),N.on(document,Li,Ii,(function(t){t.preventDefault(),qi.getOrCreateInstance(this).toggle()})),m(qi);const Vi="backdrop",Ki="show",Qi=`mousedown.bs.${Vi}`,Xi={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Yi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ui extends H{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Xi}static get DefaultType(){return Yi}static get NAME(){return Vi}show(t){if(!this._config.isVisible)return void g(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(Ki),this._emulateAnimation((()=>{g(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(Ki),this._emulateAnimation((()=>{this.dispose(),g(t)}))):g(t)}dispose(){this._isAppended&&(N.off(this._element,Qi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),N.on(t,Qi,(()=>{g(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const Gi=".bs.focustrap",Ji=`focusin${Gi}`,Zi=`keydown.tab${Gi}`,tn="backward",en={autofocus:!0,trapElement:null},nn={autofocus:"boolean",trapElement:"element"};class sn extends H{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return en}static get DefaultType(){return nn}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,Gi),N.on(document,Ji,(t=>this._handleFocusin(t))),N.on(document,Zi,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,N.off(document,Gi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=z.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===tn?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?tn:"forward")}}const on=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",rn=".sticky-top",an="padding-right",ln="margin-right";class cn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,an,(e=>e+t)),this._setElementAttributes(on,an,(e=>e+t)),this._setElementAttributes(rn,ln,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,an),this._resetElementAttributes(on,an),this._resetElementAttributes(rn,ln)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&F.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=F.getDataAttribute(t,e);null!==i?(F.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of z.find(t,this._element))e(i)}}const hn=".bs.modal",dn=`hide${hn}`,un=`hidePrevented${hn}`,fn=`hidden${hn}`,pn=`show${hn}`,mn=`shown${hn}`,gn=`resize${hn}`,_n=`click.dismiss${hn}`,bn=`mousedown.dismiss${hn}`,vn=`keydown.dismiss${hn}`,yn=`click${hn}.data-api`,wn="modal-open",An="show",En="modal-static",Tn={backdrop:!0,focus:!0,keyboard:!0},Cn={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class On extends W{constructor(t,e){super(t,e),this._dialog=z.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new cn,this._addEventListeners()}static get Default(){return Tn}static get DefaultType(){return Cn}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||N.trigger(this._element,pn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(wn),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(N.trigger(this._element,dn).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(An),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){N.off(window,hn),N.off(this._dialog,hn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ui({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new sn({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=z.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(An),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,mn,{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,vn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),N.on(window,gn,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),N.on(this._element,bn,(t=>{N.one(this._element,_n,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(wn),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,fn)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(N.trigger(this._element,un).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(En)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(En),this._queueCallback((()=>{this._element.classList.remove(En),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=On.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}N.on(document,yn,'[data-bs-toggle="modal"]',(function(t){const e=z.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),N.one(e,pn,(t=>{t.defaultPrevented||N.one(e,fn,(()=>{a(this)&&this.focus()}))}));const i=z.findOne(".modal.show");i&&On.getInstance(i).hide(),On.getOrCreateInstance(e).toggle(this)})),R(On),m(On);const xn=".bs.offcanvas",kn=".data-api",Ln=`load${xn}${kn}`,Sn="show",Dn="showing",$n="hiding",In=".offcanvas.show",Nn=`show${xn}`,Pn=`shown${xn}`,jn=`hide${xn}`,Mn=`hidePrevented${xn}`,Fn=`hidden${xn}`,Hn=`resize${xn}`,Wn=`click${xn}${kn}`,Bn=`keydown.dismiss${xn}`,zn={backdrop:!0,keyboard:!0,scroll:!1},Rn={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class qn extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return zn}static get DefaultType(){return Rn}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||N.trigger(this._element,Nn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new cn).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Dn),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Sn),this._element.classList.remove(Dn),N.trigger(this._element,Pn,{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(N.trigger(this._element,jn).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add($n),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Sn,$n),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new cn).reset(),N.trigger(this._element,Fn)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new Ui({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():N.trigger(this._element,Mn)}:null})}_initializeFocusTrap(){return new sn({trapElement:this._element})}_addEventListeners(){N.on(this._element,Bn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():N.trigger(this._element,Mn))}))}static jQueryInterface(t){return this.each((function(){const e=qn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}N.on(document,Wn,'[data-bs-toggle="offcanvas"]',(function(t){const e=z.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;N.one(e,Fn,(()=>{a(this)&&this.focus()}));const i=z.findOne(In);i&&i!==e&&qn.getInstance(i).hide(),qn.getOrCreateInstance(e).toggle(this)})),N.on(window,Ln,(()=>{for(const t of z.find(In))qn.getOrCreateInstance(t).show()})),N.on(window,Hn,(()=>{for(const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&qn.getOrCreateInstance(t).hide()})),R(qn),m(qn);const Vn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Kn=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Qn=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Xn=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!Kn.has(i)||Boolean(Qn.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Yn={allowList:Vn,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Un={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Gn={entry:"(string|element|function|null)",selector:"(string|element)"};class Jn extends H{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Yn}static get DefaultType(){return Un}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Gn)}_setContent(t,e,i){const n=z.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)Xn(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return g(t,[this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Zn=new Set(["sanitize","allowList","sanitizeFn"]),ts="fade",es="show",is=".modal",ns="hide.bs.modal",ss="hover",os="focus",rs={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},as={allowList:Vn,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ls={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class cs extends W{constructor(t,e){if(void 0===vi)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return as}static get DefaultType(){return ls}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),N.off(this._element.closest(is),ns,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=N.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),N.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(es),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._queueCallback((()=>{N.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!N.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(es),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger[os]=!1,this._activeTrigger[ss]=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(ts,es),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(ts),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Jn({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ts)}_isShown(){return this.tip&&this.tip.classList.contains(es)}_createPopper(t){const e=g(this._config.placement,[this,t,this._element]),i=rs[e.toUpperCase()];return bi(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return g(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,...g(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)N.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===ss?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===ss?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");N.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?os:ss]=!0,e._enter()})),N.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?os:ss]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(is),ns,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=F.getDataAttributes(this._element);for(const t of Object.keys(e))Zn.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=cs.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(cs);const hs={...cs.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},ds={...cs.DefaultType,content:"(null|string|element|function)"};class us extends cs{static get Default(){return hs}static get DefaultType(){return ds}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=us.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(us);const fs=".bs.scrollspy",ps=`activate${fs}`,ms=`click${fs}`,gs=`load${fs}.data-api`,_s="active",bs="[href]",vs=".nav-link",ys=`${vs}, .nav-item > ${vs}, .list-group-item`,ws={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},As={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Es extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return ws}static get DefaultType(){return As}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(N.off(this._config.target,ms),N.on(this._config.target,ms,bs,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=z.find(bs,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=z.findOne(decodeURI(e.hash),this._element);a(t)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(_s),this._activateParents(t),N.trigger(this._element,ps,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))z.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(_s);else for(const e of z.parents(t,".nav, .list-group"))for(const t of z.prev(e,ys))t.classList.add(_s)}_clearActiveClass(t){t.classList.remove(_s);const e=z.find(`${bs}.${_s}`,t);for(const t of e)t.classList.remove(_s)}static jQueryInterface(t){return this.each((function(){const e=Es.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(window,gs,(()=>{for(const t of z.find('[data-bs-spy="scroll"]'))Es.getOrCreateInstance(t)})),m(Es);const Ts=".bs.tab",Cs=`hide${Ts}`,Os=`hidden${Ts}`,xs=`show${Ts}`,ks=`shown${Ts}`,Ls=`click${Ts}`,Ss=`keydown${Ts}`,Ds=`load${Ts}`,$s="ArrowLeft",Is="ArrowRight",Ns="ArrowUp",Ps="ArrowDown",js="Home",Ms="End",Fs="active",Hs="fade",Ws="show",Bs=".dropdown-toggle",zs=`:not(${Bs})`,Rs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',qs=`.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`,Vs=`.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;class Ks extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,Ss,(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?N.trigger(e,Cs,{relatedTarget:t}):null;N.trigger(t,xs,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(Fs),this._activate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),N.trigger(t,ks,{relatedTarget:e})):t.classList.add(Ws)}),t,t.classList.contains(Hs)))}_deactivate(t,e){t&&(t.classList.remove(Fs),t.blur(),this._deactivate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),N.trigger(t,Os,{relatedTarget:e})):t.classList.remove(Ws)}),t,t.classList.contains(Hs)))}_keydown(t){if(![$s,Is,Ns,Ps,js,Ms].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter((t=>!l(t)));let i;if([js,Ms].includes(t.key))i=e[t.key===js?0:e.length-1];else{const n=[Is,Ps].includes(t.key);i=b(e,t.target,n,!0)}i&&(i.focus({preventScroll:!0}),Ks.getOrCreateInstance(i).show())}_getChildren(){return z.find(qs,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=z.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=z.findOne(t,i);s&&s.classList.toggle(n,e)};n(Bs,Fs),n(".dropdown-menu",Ws),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(Fs)}_getInnerElement(t){return t.matches(qs)?t:z.findOne(qs,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=Ks.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(document,Ls,Rs,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||Ks.getOrCreateInstance(this).show()})),N.on(window,Ds,(()=>{for(const t of z.find(Vs))Ks.getOrCreateInstance(t)})),m(Ks);const Qs=".bs.toast",Xs=`mouseover${Qs}`,Ys=`mouseout${Qs}`,Us=`focusin${Qs}`,Gs=`focusout${Qs}`,Js=`hide${Qs}`,Zs=`hidden${Qs}`,to=`show${Qs}`,eo=`shown${Qs}`,io="hide",no="show",so="showing",oo={animation:"boolean",autohide:"boolean",delay:"number"},ro={animation:!0,autohide:!0,delay:5e3};class ao extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ro}static get DefaultType(){return oo}static get NAME(){return"toast"}show(){N.trigger(this._element,to).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(io),d(this._element),this._element.classList.add(no,so),this._queueCallback((()=>{this._element.classList.remove(so),N.trigger(this._element,eo),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(N.trigger(this._element,Js).defaultPrevented||(this._element.classList.add(so),this._queueCallback((()=>{this._element.classList.add(io),this._element.classList.remove(so,no),N.trigger(this._element,Zs)}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(no),super.dispose()}isShown(){return this._element.classList.contains(no)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,Xs,(t=>this._onInteraction(t,!0))),N.on(this._element,Ys,(t=>this._onInteraction(t,!1))),N.on(this._element,Us,(t=>this._onInteraction(t,!0))),N.on(this._element,Gs,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=ao.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(ao),m(ao),{Alert:Q,Button:Y,Carousel:xt,Collapse:Bt,Dropdown:qi,Modal:On,Offcanvas:qn,Popover:us,ScrollSpy:Es,Tab:Ks,Toast:ao,Tooltip:cs}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map

//scripts/crypto.js
class crypt
{constructor()
{this.crypto_digest="SHA-512";};bufToB64(buf)
{return btoa(Array.prototype.map.call(buf,ch=>String.fromCharCode(ch)).join(""));};b64ToBuf(b64)
{const binstr=atob(b64),buf=new Uint8Array(binstr.length);Array.prototype.forEach.call(binstr,(ch,i)=>{buf[i]=ch.charCodeAt(0);});return buf;};gen_pass(n,is_symb)
{if(n<20||n>400)
{n=100;}
var res='';var symb_arr="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#%*@_-+";if(is_symb==false)
{symb_arr="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";}
var b="";var l=symb_arr.length;if(n>l)
{while(res.length<n)
{let rn=window.crypto.getRandomValues(new Uint8Array(1));if(rn[0]<l)
{res=res+symb_arr[rn[0]];}}}
else
{while(res.length<n)
{let rn=window.crypto.getRandomValues(new Uint8Array(1));if(rn[0]<l)
{b=symb_arr[rn[0]];if(!res.includes(b))
{res=res+b;}}}}
return res;};get_key_material(pass)
{let enc=new TextEncoder();return window.crypto.subtle.importKey("raw",enc.encode(pass),{name:"PBKDF2"},false,["deriveBits","deriveKey"]);};gen_key(keyMaterial,salt)
{return window.crypto.subtle.deriveKey({"name":"PBKDF2",salt:salt,"iterations":100000,"hash":this.crypto_digest},keyMaterial,{"name":"AES-GCM","length":256},false,["encrypt","decrypt"]);};get_key(pass,salt)
{var that=this;let promise=new Promise(function(resolve,reject)
{that.get_key_material(pass).then(function(value)
{that.gen_key(value,salt).then(function(value)
{resolve(value);}).catch(function(err){reject(1);});}).catch(function(err){reject(1);});});return promise;};encrypt_text(key,text)
{var that=this;let promise=new Promise(function(resolve,reject)
{let enc=new TextEncoder();let encoded=enc.encode(text);let iv=window.crypto.getRandomValues(new Uint8Array(12));let salt=window.crypto.getRandomValues(new Uint8Array(16));that.get_key(key,salt).then((res1,rej1)=>{if(rej1==undefined||rej1==null)
{window.crypto.subtle.encrypt({name:"AES-GCM",iv:iv,tagLength:128},res1,encoded).then(function(value)
{const hashArray_tmp=Array.from(new Uint8Array(value));let hashArray=new Uint8Array([...iv,...salt,...hashArray_tmp]);const hashHex=that.bufToB64(hashArray);resolve(hashHex);}).catch(function(err){resolve(1);});}
else
{resolve(1);}});});return promise;};decrypt_text(key,text)
{var that=this;let promise=new Promise(function(resolve,reject)
{let enc_text=that.b64ToBuf(text);let iv=enc_text.slice(0,12)
let salt=enc_text.slice(12,28)
that.get_key(key,salt).then((res1,rej1)=>{if(rej1==undefined||rej1==null)
{window.crypto.subtle.decrypt({name:"AES-GCM",iv:iv,tagLength:128},res1,enc_text.slice(28)).then(function(value)
{resolve(new TextDecoder().decode(value));}).catch(function(err){resolve(1);});}
else
{resolve(1);}});});return promise;};encrypt_file(key,body)
{var that=this;let promise=new Promise(function(resolve,reject)
{let iv=window.crypto.getRandomValues(new Uint8Array(12));let salt=window.crypto.getRandomValues(new Uint8Array(16));that.get_key(key,salt).then((res1,rej1)=>{if(rej1==undefined||rej1==null)
{window.crypto.subtle.encrypt({name:"AES-GCM",iv:iv,tagLength:128},res1,body).then(function(value)
{const hashArray_tmp=Array.from(new Uint8Array(value));let hashArray=new Uint8Array([...iv,...salt,...hashArray_tmp]);const hashHex=that.bufToB64(hashArray);resolve(hashHex);}).catch(function(err){reject(1);});}
else
{reject(1);}});});return promise;};decrypt_file(key,text)
{var that=this;let promise=new Promise(function(resolve,reject)
{let enc_text=that.b64ToBuf(text);let iv=enc_text.slice(0,12)
let salt=enc_text.slice(12,28)
that.get_key(key,salt).then((res1,rej1)=>{if(rej1==undefined||rej1==null)
{window.crypto.subtle.decrypt({name:"AES-GCM",iv:iv,tagLength:128},res1,enc_text.slice(28)).then(function(value)
{resolve(value);}).catch(function(err){resolve(1);});}
else
{resolve(1);}});});return promise;};}

//scripts/store.js
class db
{constructor()
{this.db_name="db";localforage.setDriver(localforage.INDEXEDDB);this.t_item_group=localforage.createInstance({name:this.db_name,storeName:"t_item_group",description:""});this.t_item=localforage.createInstance({name:this.db_name,storeName:"t_item",description:""});this.t_file=localforage.createInstance({name:this.db_name,storeName:"t_file",description:""});this.t_conf=localforage.createInstance({name:this.db_name,storeName:"t_conf",description:""});};item_group_add(type,name,color)
{var that=this;let promise=new Promise(function(resolve,reject)
{if(type!==""&&type!==undefined&&name!==""&&name!==undefined&&color!==""&&color!==undefined)
{var uuid=self.crypto.randomUUID();that.t_item_group.setItem(uuid,{"name":name,"color":color,"type":type}).then(function(value)
{resolve(uuid);}).catch(function(err){resolve(1);});}
else
{resolve(1);}});return promise;};item_group_upd(id,type,name,color)
{var that=this;let promise=new Promise(function(resolve,reject)
{if(id!==""&&id!==undefined&&type!==""&&type!==undefined&&name!==""&&name!==undefined&&color!==""&&color!==undefined)
{that.t_item_group.setItem(id,{"name":name,"color":color,"type":type}).then(function(value)
{resolve(0);}).catch(function(err){resolve(1);});}
else
{resolve(1);}});return promise;};item_group_del(id,type)
{var that=this;let promise=new Promise(function(resolve,reject)
{if(id!==""&&id!==undefined)
{that.t_item_group.removeItem(id).then(async function()
{var res=null;if(type==1)
{res=await that.item_del_by_group(id);}
else if(type==2)
{res=await that.file_del_by_group(id);}
resolve(res);}).catch(function(err)
{resolve(1);});}
else
{resolve(1);}});return promise;};item_group_type_get_all(type)
{var that=this;let promise=new Promise(function(resolve,reject)
{var res_arr=[];that.t_item_group.iterate(function(value,key,iterationNumber){if("type"in value)
{if(value["type"]==type)
{value["id"]=key;res_arr.push(value);}}}).then(function()
{res_arr.sort(function(a,b)
{return a.name.localeCompare(b.name);});resolve(res_arr);}).catch(function(err){resolve(1);});});return promise;};item_group_check_id(id)
{var that=this;let promise=new Promise(function(resolve,reject)
{var is_find=false;that.t_item_group.iterate(function(value,key,iterationNumber)
{if(key==id)
{is_find=true;return;}}).then(function(){resolve(is_find);}).catch(function(err){resolve(1);});});return promise;};item_add(id_group,name,descr,hide_data)
{var that=this;let promise=new Promise(function(resolve,reject)
{if(id_group!==""&&id_group!==undefined&&name!==""&&name!==undefined&&descr!==""&&descr!==undefined&&hide_data!==""&&hide_data!==undefined)
{var uuid=self.crypto.randomUUID();var time_stamp=Date.now();that.t_item.setItem(uuid,{"id_group":id_group,"name":name,"descr":descr,"hide_data":hide_data,"time_stamp":time_stamp,"is_elect":false}).then(function(value)
{resolve(uuid);}).catch(function(err){resolve(1);});}
else
{resolve(1);}});return promise;};item_upd(id,id_group,name,descr,hide_data,is_elect)
{var that=this;let promise=new Promise(function(resolve,reject)
{if(id!==""&&id!==undefined&&id_group!==""&&id_group!==undefined&&name!==""&&name!==undefined&&descr!==""&&descr!==undefined&&hide_data!==""&&hide_data!==undefined)
{var time_stamp=Date.now();that.t_item.setItem(id,{"id_group":id_group,"name":name,"descr":descr,"hide_data":hide_data,"time_stamp":time_stamp,"is_elect":is_elect}).then(function(value)
{resolve(0);}).catch(function(err){resolve(1);});}
else
{resolve(1);}});return promise;};item_del(id)
{var that=this;let promise=new Promise(function(resolve,reject)
{if(id!==""&&id!==undefined)
{that.t_item.removeItem(id).then(function()
{resolve(0);}).catch(function(err){resolve(1);});}
else
{resolve(1);}});return promise;};item_get_type_all(id_group)
{var that=this;let promise=new Promise(function(resolve,reject)
{var res_arr=[];that.t_item.iterate(function(value,key,_)
{if("id_group"in value)
{if(value["id_group"]==id_group)
{res_arr.push({"id":key,"name":value["name"],"descr":value["descr"],"id_group":value["id_group"],"is_elect":value["is_elect"]});}}}).then(function()
{resolve(res_arr);}).catch(function(err){resolve(1);});});return promise;};item_get_type_count(id_group)
{var that=this;let promise=new Promise(function(resolve,reject)
{var res_count=0;that.t_item.iterate(function(value,key,iterationNumber)
{if("id_group"in value)
{if(value["id_group"]==id_group)
{res_count++;}}}).then(function()
{resolve(res_count);}).catch(function(err){resolve(0);});});return promise;};item_del_by_group(id_group)
{var that=this;let promise=new Promise(function(resolve,reject)
{var ids=[];that.t_item.iterate(function(value,key,iterationNumber)
{if("id_group"in value)
{if(value["id_group"]==id_group)
{ids.push(key);}}}).then(async function()
{var res=null;var is_ok_del=ids.length;for(var i=0;i<ids.length;i++)
{res=await that.item_del(ids[i]);if(res==0)
{is_ok_del--;}}
if(is_ok_del==0)
{resolve(0);}
else
{resolve(1);}}).catch(function(err)
{resolve(1);});});return promise;};item_get_all()
{var that=this;let promise=new Promise(function(resolve,reject)
{var res_arr=[];that.t_item.iterate(function(value,key,iterationNumber)
{res_arr.push({"id":key,"name":value["name"],"descr":value["descr"],"hide_data":value["hide_data"],"id_group":value["id_group"],"is_elect":value["is_elect"]});}).then(function()
{res_arr.sort(function(a,b)
{return a.name.localeCompare(b.name);});resolve(res_arr);}).catch(function(err){resolve(1);});});return promise;};item_get(id)
{var that=this;let promise=new Promise(function(resolve,reject)
{if(id!==""&&id!==undefined)
{that.t_item.getItem(id).then(function(value){resolve(value);}).catch(function(err){resolve(1);});}
else
{resolve(1);}});return promise;};item_check_id(id)
{var that=this;let promise=new Promise(function(resolve,reject)
{var is_find=false;that.t_item.iterate(function(value,key,iterationNumber)
{if(key==id)
{is_find=true;return;}}).then(function(){resolve(is_find);}).catch(function(err){resolve(1);});});return promise;};item_set_elect(id,is_elect)
{var that=this;let promise=new Promise(function(resolve,reject)
{if(id!==""&&id!==undefined)
{that.t_item.getItem(id).then(function(item){that.t_item.setItem(id,{"id_group":item["id_group"],"name":item["name"],"descr":item["descr"],"hide_data":item["hide_data"],"time_stamp":item["time_stamp"],"is_elect":is_elect}).then(function(value)
{resolve(0);}).catch(function(err){resolve(1);});}).catch(function(err){resolve(1);});}
else
{resolve(1);}});return promise;};conf_init(m_pass)
{var that=this;let promise=new Promise(function(res,rej)
{that.t_conf.getItem("1").then(function(value)
{if(value===undefined||value===null)
{that.t_conf.setItem("1",{"m_pass":m_pass,"idle_time":15,"items_show_groups":true,"files_show_groups":true,"first_login":true}).then(function(value)
{res(0);}).catch(function(err){rej(1);});}}).catch(function(err){rej(1);});});return promise;};conf_change_m_pass(m_pass)
{var that=this;let promise=new Promise(function(resolve,reject)
{that.t_conf.getItem("1").then(function(value)
{that.t_conf.setItem("1",{"m_pass":m_pass,"idle_time":value["idle_time"],"items_show_groups":value["items_show_groups"],"files_show_groups":value["files_show_groups"],"first_login":false}).then(function(value)
{resolve(0);}).catch(function(err){resolve(1);});}).catch(function(err){resolve(1);});});return promise;};conf_change_idle_time(idle_time)
{var that=this;let promise=new Promise(function(resolve,reject)
{that.t_conf.getItem("1").then(function(value)
{that.t_conf.setItem("1",{"m_pass":value["m_pass"],"idle_time":idle_time,"items_show_groups":value["items_show_groups"],"files_show_groups":value["files_show_groups"],"first_login":value["first_login"]}).then(function(value)
{resolve(0);}).catch(function(err){resolve(1);});}).catch(function(err){resolve(1);});});return promise;};conf_get_m_pass()
{var that=this;let promise=new Promise(function(resolve,reject)
{that.t_conf.getItem("1").then(function(value)
{resolve(value["m_pass"]);}).catch(function(err)
{resolve(1);});});return promise;};conf_get_idle_time()
{var that=this;let promise=new Promise(function(resolve,reject)
{that.t_conf.getItem("1").then(function(value)
{resolve(value["idle_time"]);}).catch(function(err){resolve(1);});});return promise;};conf_set_items_show_groups(items_show_groups)
{var that=this;let promise=new Promise(function(resolve,reject)
{that.t_conf.getItem("1").then(function(value)
{that.t_conf.setItem("1",{"m_pass":value["m_pass"],"idle_time":value["idle_time"],"items_show_groups":items_show_groups,"files_show_groups":value["files_show_groups"],"first_login":value["first_login"]}).then(function(value)
{resolve(0);}).catch(function(err){resolve(1);});}).catch(function(err){resolve(1);});});return promise;};conf_set_files_show_groups(files_show_groups)
{var that=this;let promise=new Promise(function(resolve,reject)
{that.t_conf.getItem("1").then(function(value)
{that.t_conf.setItem("1",{"m_pass":value["m_pass"],"idle_time":value["idle_time"],"items_show_groups":value["items_show_groups"],"files_show_groups":files_show_groups,"first_login":value["first_login"]}).then(function(value)
{resolve(0);}).catch(function(err){resolve(1);});}).catch(function(err){resolve(1);});});return promise;};conf_get_items_show_groups()
{var that=this;let promise=new Promise(function(resolve,reject)
{that.t_conf.getItem("1").then(function(value)
{resolve(value["items_show_groups"]);}).catch(function(err){resolve(1);});});return promise;};conf_get_files_show_groups()
{var that=this;let promise=new Promise(function(resolve,reject)
{that.t_conf.getItem("1").then(function(value)
{resolve(value["files_show_groups"]);}).catch(function(err){resolve(1);});});return promise;};conf_get_first_login()
{var that=this;let promise=new Promise(function(resolve,reject)
{that.t_conf.getItem("1").then(function(value)
{resolve(value["first_login"]);}).catch(function(err){resolve(1);});});return promise;};file_add(id_group,name,ext,body)
{var that=this;let promise=new Promise(function(resolve,reject)
{if(id_group!==""&&id_group!==undefined&&name!==""&&name!==undefined&&ext!==""&&ext!==undefined&&body!==""&&body!==undefined)
{var uuid=self.crypto.randomUUID();that.t_file.setItem(uuid,{"id_group":id_group,"name":name,"ext":ext,"body":body}).then(function(value)
{resolve(uuid);}).catch(function(err){resolve(1);});}
else
{resolve(1);}});return promise;};file_upd(id,id_group,name,ext,body)
{var that=this;let promise=new Promise(function(resolve,reject)
{if(id!==""&&id!==undefined&&id_group!==""&&id_group!==undefined&&name!==""&&name!==undefined&&ext!==""&&ext!==undefined&&body!==""&&body!==undefined)
{that.t_file.setItem(id,{"id_group":id_group,"name":name,"ext":ext,"body":body}).then(function(value)
{resolve(0);}).catch(function(err){resolve(1);});}
else
{resolve(1);}});return promise;};file_del(id)
{var that=this;let promise=new Promise(function(resolve,reject)
{if(id!==""&&id!==undefined)
{that.t_file.removeItem(id).then(function()
{resolve(0);}).catch(function(err){resolve(1);});}
else
{resolve(1);}});return promise;};file_del_by_group(id_group)
{var that=this;let promise=new Promise(function(resolve,reject)
{var ids=[];that.t_file.iterate(function(value,key,iterationNumber)
{if("id_group"in value)
{if(value["id_group"]==id_group)
{ids.push(key);}}}).then(async function()
{var res=null;var is_ok_del=ids.length;for(var i=0;i<ids.length;i++)
{res=await that.file_del(ids[i]);if(res==0)
{is_ok_del--;}}
if(is_ok_del==0)
{resolve(0);}
else
{resolve(1);}}).catch(function(err)
{resolve(1);});});return promise;};file_get_by_group_all(id_group)
{var that=this;let promise=new Promise(function(resolve,reject)
{var res_arr=[];that.t_file.iterate(function(value,key,iterationNumber){if("id_group"in value)
{if(value["id_group"]==id_group)
{res_arr.push({"id":key,"name":value["name"],"ext":value["ext"],"id_group":value["id_group"]});}}}).then(function()
{resolve(res_arr);}).catch(function(err){resolve(1);});});return promise;};file_get_by_group_count(id_group)
{var that=this;let promise=new Promise(function(resolve,reject)
{var res_count=0;that.t_file.iterate(function(value,key,iterationNumber)
{if("id_group"in value)
{if(value["id_group"]==id_group)
{res_count++;}}}).then(function()
{resolve(res_count);}).catch(function(err){resolve(0);});});return promise;};file_get_all()
{var that=this;let promise=new Promise(function(resolve,reject)
{var res_arr=[];that.t_file.iterate(function(value,key,iterationNumber)
{res_arr.push({"id":key,"name":value["name"],"ext":value["ext"],"id_group":value["id_group"]});}).then(function()
{res_arr.sort(function(a,b)
{return a.name.localeCompare(b.name);});resolve(res_arr);}).catch(function(err){resolve(1);});});return promise;};file_get(id)
{var that=this;let promise=new Promise(function(resolve,reject)
{if(id!==""&&id!==undefined)
{that.t_file.getItem(id).then(function(value)
{resolve({"id":value["id"],"name":value["name"],"ext":value["ext"],"id_group":value["id_group"]});}).catch(function(err){resolve(1);});}
else
{resolve(1);}});return promise;};file_get_body(id)
{var that=this;let promise=new Promise(function(resolve,reject)
{if(id!==""&&id!==undefined)
{that.t_file.getItem(id).then(function(value){resolve(value);}).catch(function(err){resolve(1);});}
else
{resolve(1);}});return promise;};file_check_id(id)
{var that=this;let promise=new Promise(function(resolve,reject)
{var is_find=false;that.t_file.iterate(function(value,key,iterationNumber)
{if(key==id)
{is_find=true;return;}}).then(function(){resolve(is_find);}).catch(function(err){resolve(1);});});return promise;};}

//scripts/app.js
var __db=null;var __crypt=null;var __cur_blob=null;var __m_pass=null;var __cur_item_type=1;var __is_edit_item_group=false;var __is_edit_item=false;var __cur_id_item_group=null;var __cur_id_item=null;var __imp_file_data="";var __cur_id_file_group=null;var __cur_id_file=null;var idle_timer;var idle_events=["load","mousemove","mousedown","touchstart","click","keydown","scroll"];var __idle_time=10;var __back_count_app_exit=0;var __back_timeout=null;var __id_page=0;function read_file(files)
{__cur_blob=null;if(!files.length)
{show_msg("Выберите файл!");return;}
const fsize=Math.round((files.item(0).size/1024/1024));if(fsize>30)
{show_msg("Сообщение","Выбранный файл слишком большой (максимум 30 Мб)!");return;}
let file=files[0];if(file!==undefined)
{ui_preload(true);const reader=new FileReader();reader.addEventListener("load",(event)=>{var ext=file.type;if(ext==null||ext==undefined||ext=="")
{ext="application/octet-stream";}
__cur_blob={"name":file.name,"ext":ext,"body":event.target.result};document.getElementById("ui_file_name").innerHTML="Имя файла: <b>"+file.name+"</b>";ui_preload(false);});reader.addEventListener("error",(event)=>{ui_preload(false);show_msg("Сообщение","Произошла ошибка при загрузке файла! (1)");});reader.addEventListener("abort",(event)=>{ui_preload(false);show_msg("Сообщение","Произошла ошибка при загрузке файла! (2)");});reader.readAsArrayBuffer(file);}};function read_text_file(files)
{__imp_file_data="";if(!files.length)
{show_msg("Сообщение","Выберите файл!");return;}
const fsize=Math.round((files.item(0).size/1024/1024));if(fsize>300)
{show_msg("Сообщение","Выбранный файл слишком большой (максимум 300 Мб)!");return;}
let file=files[0];if(file!==undefined)
{const reader=new FileReader();ui_preload(true);reader.addEventListener("load",(event)=>{__imp_file_data=event.target.result;ui_preload(false);});reader.addEventListener("error",(event)=>{ui_preload(false);show_msg("Сообщение","Произошла ошибка при загрузке файла! (1)");});reader.addEventListener("abort",(event)=>{ui_preload(false);show_msg("Сообщение","Произошла ошибка при загрузке файла! (2)");});reader.readAsText(file);}}
function download_file(content,fileName,contentType)
{var a=document.createElement("a");var file=new Blob([content],{type:contentType});a.href=URL.createObjectURL(file);a.download=fileName;a.click();a.remove();show_toast("Файл успешно получен");};function get_now_date_time_string()
{const currentDate=new Date();const currentDayOfMonth=currentDate.getDate();const currentMonth=currentDate.getMonth();const currentYear=currentDate.getFullYear();const currentHour=currentDate.getHours();const currentMinute=currentDate.getMinutes();const currentSecond=currentDate.getSeconds();const dateString=currentYear+""+currentDayOfMonth+""+(currentMonth+1)+"_"+currentHour+"_"+currentMinute+"_"+currentSecond;return dateString;};async function conf_init()
{if(navigator.storage&&navigator.storage.persist)
{const isPersisted=await navigator.storage.persist();}
var ret=1;var res=await __db.conf_get_m_pass();if(res==1)
{var res1=await __crypt.encrypt_text("password",__crypt.gen_pass(365,true));if(res1!==1)
{var res2=await __db.conf_init(res1);if(res2!==1)
{ret=2;}
else
{ret=1;}}
else
{ret=1;}}
else
{ret=0;}
return ret;};async function login(pass)
{var ret=1;var res=await __db.conf_get_m_pass();if(res!==1)
{var res2=await __crypt.decrypt_text(pass,res)
if(res2!==1)
{__m_pass=res2;ret=0}
else
{ret=2;}}
else
{ret=1;}
return ret;};function logout()
{__cur_blob=null;__m_pass=null;__cur_item_type=1;__is_edit_item_group=false;__is_edit_item=false;__cur_id_item_group=null;__cur_id_item=null;__imp_file_data="";__cur_id_file_group=null;__cur_id_file=null;__back_count_app_exit=0;var obj=bootstrap.Offcanvas.getInstance(document.getElementById("ui_main_menu"))
if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=null;document.getElementById("ui_login_page").classList.remove("d-none");document.getElementById("ui_main_page").classList.add("d-none");document.getElementById("ui_pswd").focus();ui_clear(4);__id_page=0;};async function item_add(id_group,name,descr,login,pass,info)
{if(id_group!==null&&id_group!==undefined&&id_group.trim()!==""&&name!==null&&name!==undefined&&name.trim()!==""&&descr!==null&&descr!==undefined&&descr.trim()!==""&&login!==null&&login!==undefined&&login.trim()!==""&&pass!==null&&pass!==undefined&&pass.trim()!==""&&info!==null&&info!==undefined&&info.trim()!=="")
{ui_preload(true);var hide_data=JSON.stringify({"login":login,"pass":pass,"info":info});var hide_data_enc=await __crypt.encrypt_text(__m_pass,hide_data);if(hide_data_enc!==1)
{var res=await __db.item_add(id_group,name,descr,hide_data_enc)
if(res!==1)
{var r=await ui_main_init(false);ui_item_list_add(res,name,descr);var obj=document.querySelector(".ui_item_group_menu_el.active .badge");if((obj!==null)||(obj!==undefined))
{obj.innerText=document.getElementsByClassName("ui_list_item").length;}
obj=null;f_show_hide_no_data(false);ui_preload(false);show_toast("Запись успешно добавлена");}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при добавлении записи! (1)");}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при добавлении записи! (2)");}}
else
{ui_preload(false);show_msg("Сообщение","Проверьте заполнение обязательных полей!");}};async function item_get(id)
{if(id!==null&&id!==undefined&&id.trim()!=="")
{ui_preload(true);var item=await __db.item_get(id);if(item!==1)
{var hide_data_decr=await __crypt.decrypt_text(__m_pass,item["hide_data"]);var hide_data=JSON.parse(hide_data_decr);if(hide_data_decr!==1&&hide_data!==undefined&&hide_data!==null&&hide_data!={})
{document.getElementById("ui_item_name").value=item["name"];document.getElementById("ui_item_descr").value=item["descr"];document.getElementById("ui_item_login").value=hide_data["login"];document.getElementById("ui_item_pass").value=hide_data["pass"];document.getElementById("ui_item_info").value=hide_data["info"];document.getElementById("ui_item_group").value=item["id_group"];document.getElementById("ui_div_cont_item_work_form").setAttribute("is_elect",item["is_elect"]);ui_preload(false);}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при получении данных записи! (1)");}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при получении данных записи! (2)");}}};async function item_get_all(id_group)
{var count=0;ui_preload(true);var res=await __db.item_get_type_all(id_group)
if(res!==1)
{document.getElementById("ui_list_items").innerHTML="";for(var i=0;i<res.length;i++)
{document.getElementById("ui_list_items").insertAdjacentHTML("beforeend",ui_item_create(res[i]["id"],res[i]["name"],res[i]["descr"],StrToBool(res[i]["is_elect"])));}
count=res.length;ui_list_sort();ui_preload(false);}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при получении записей!");}
return count;};async function item_get_all_count(id_group)
{ui_preload(true);var count=await __db.item_get_type_count(id_group)
ui_preload(false);return count;};async function item_upd(id,id_group,name,descr,login,pass,info,is_elect)
{if(id!==null&&id!==undefined&&id_group!==null&&id_group!==undefined&&id_group.trim()!==""&&name!==null&&name!==undefined&&name.trim()!==""&&descr!==null&&descr!==undefined&&descr.trim()!==""&&login!==null&&login!==undefined&&login.trim()!==""&&pass!==null&&pass!==undefined&&pass.trim()!==""&&info!==null&&info!==undefined&&info.trim()!=="")
{ui_preload(true);var hide_data=JSON.stringify({"login":login,"pass":pass,"info":info});var hide_data_enc=await __crypt.encrypt_text(__m_pass,hide_data);if(hide_data_enc!==1)
{var res=await __db.item_upd(id,id_group,name,descr,hide_data_enc,is_elect);if(res!==1)
{var r=await ui_main_init(false);if(id_group!==__cur_id_item_group){item_get_all(__cur_id_item_group);}else{ui_item_list_update(id,name,descr);}
ui_preload(false);show_toast("Запись успешно обновлена");}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при обновлении записи!(1)");}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при обновлении записи! (2)");}}
else
{ui_preload(false);show_msg("Сообщение","Проверьте заполнение обязательных полей!");}};async function item_set_elect(id,is_elect)
{if(id!==null&&id!==undefined)
{ui_preload(true);var res=await __db.item_set_elect(id,is_elect);if(res!==1)
{ui_item_list_update_elect(id,is_elect)
ui_preload(false);}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при занесении в избранные записи!");}}
else
{ui_preload(false);show_msg("Сообщение","Проверьте заполнение обязательных полей!");}};async function item_del(id)
{if(id!==undefined&&id!==null&&id!=="")
{ui_preload(true);var res=await __db.item_del(id);if(res!==1)
{ui_preload(false);show_toast("Запись успешно удалена");}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при удалении записи!");}}
else
{show_msg("Сообщение","Произошла ошибка при удалении записи! (2)");}};async function item_group_add(type,name,color)
{ui_preload(true);var res=await __db.item_group_add(type,name,color);if(res!==1)
{ui_preload(false);show_toast("Группа успешно создана");}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при добавлении группы!");}};async function item_group_upd(id,type,name,color)
{ui_preload(true);var res=await __db.item_group_upd(id,type,name,color);if(res!==1)
{ui_preload(false);show_toast("Группа успешно обновлена");}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при обновлении группы!");};};async function item_group_get_all(op,type)
{ui_preload(true);var res=await __db.item_group_type_get_all(type)
if(res!==1)
{ui_preload(false);var r=await ui_item_group_vew(op,res);}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при получении списка групп!");}};async function item_group_del(id,type)
{ui_preload(true);var res=await __db.item_group_del(id,type);if(res!==1)
{ui_preload(false);if(type==1)
{if(id===__cur_id_item_group)
{__cur_id_item_group=null;}}
else if(type==2)
{if(id===__cur_id_file_group)
{__cur_id_file_group=null;}}
show_toast("Группа успешно удалена");}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при удалении группы!");}};async function conf_change_m_pass(pass)
{ui_preload(true);var res1=await __crypt.encrypt_text(pass,__m_pass);if(res1!==1)
{var res2=await __db.conf_change_m_pass(res1);if(res2!==1)
{ui_preload(false);show_msg("Сообщение","Мастер-пароль изменён. Необходимо перезайти в программу.");logout();}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при смене мастер-пароля! (1)");}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при смене мастер-пароля! (2)");}};async function conf_get_idle_time()
{var idle_time=await __db.conf_get_idle_time()
if(idle_time!==1)
{}
else
{idle_time=10;}
return idle_time;};async function conf_change_idle_time(idle_time)
{ui_preload(true);var res=await __db.conf_change_idle_time(idle_time);if(res!==1)
{ui_preload(false);__idle_time=idle_time*60000;idle_reset_timer();show_toast("Время бездействия до блокировки успешно сохранено");}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при сохранении времени бездействия до блокировки!");}};async function file_add(id_group)
{if(__cur_blob!==null&&id_group!==null&&id_group!==undefined)
{ui_preload(true);var res=await __crypt.encrypt_file(__m_pass,__cur_blob["body"]);if(res!==1)
{var name=__cur_blob["name"];var ext=__cur_blob["ext"];var res1=await __db.file_add(id_group,name,ext,res)
if(res1!==1)
{var r=await ui_files_init(false);ui_files_list_add(res1,name,ext);var obj=document.querySelector(".ui_file_group_menu_el.active .badge");if((obj!==null)||(obj!==undefined))
{obj.innerText=document.getElementsByClassName("ui_files_list_item").length;}
obj=null;ui_preload(false);show_toast("Файл успешно добавлен");__cur_blob=null;}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при добавлении файла! (1)");__cur_blob=null;}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при добавлении файла! (2)");__cur_blob=null;}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при добавлении файла! (3)");__cur_blob=null;}};async function file_get(id)
{if(id!==undefined&&id!==null)
{ui_preload(true);var res1=await __db.file_get(id);if(res1!==1)
{document.getElementById("ui_file_name").innerHTML="Имя файла: <b>"+res1["name"]+"</b>";document.getElementById("ui_file_group").value=res1["id_group"];ui_preload(false);}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при получении данных файла! (1)");}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при получении данных файла! (2)");}};async function file_get_body(id)
{if(id!==undefined&&id!==null)
{ui_preload(true);var res1=await __db.file_get_body(id);if(res1!==1)
{var res2=await __crypt.decrypt_file(__m_pass,res1["body"])
if(res2!==1)
{download_file(res2,res1["name"],res1["ext"]);ui_preload(false);}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при получении файла! (1)");}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при получении файла! (2)");}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при получении файла! (3)");}};async function file_get_all(id_group)
{ui_preload(true);var res=await __db.file_get_by_group_all(id_group);var count=0;if(res!==1)
{document.getElementById("ui_list_files").innerHTML="";for(var i=0;i<res.length;i++)
{document.getElementById("ui_list_files").insertAdjacentHTML("beforeend",ui_file_create(res[i]["id"],res[i]["name"],res[i]["ext"]));}
count=res.length;ui_list_sort();ui_preload(false);}
else
{show_msg("Сообщение","Произошла ошибка при получении файлов!");ui_preload(false);}
return count;};async function file_get_all_count(id_group)
{ui_preload(true);var count=await __db.file_get_by_group_count(id_group)
ui_preload(false);return count;};async function file_del(id)
{ui_preload(true);var res=await __db.file_del(id);if(res!==1)
{ui_preload(false);show_toast("Файл успешно удалён");}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при удалении файла!");}};async function data_export(is_with_files)
{ui_preload(true);var export_data=null;var item_group=null;var pass=__crypt.gen_pass(182,true);if(is_with_files==true)
{var file_group=null;export_data={"item_group":null,"item":[],"file_group":null,"file":[]};item_group=await __db.item_group_type_get_all(1);file_group=await __db.item_group_type_get_all(2);if(item_group!==1&&file_group!==1)
{export_data["item_group"]=item_group;export_data["file_group"]=file_group;var is_all_ok=2;var items=await __db.item_get_all();if(items!==1)
{var hide_data_decr="";var hide_data=null;var item_data=null;for(let i=0;i<items.length;i++)
{hide_data_decr=await __crypt.decrypt_text(__m_pass,items[i]["hide_data"]);hide_data=JSON.parse(hide_data_decr);if(hide_data_decr!==1&&hide_data!==undefined&&hide_data!==null&&hide_data!={})
{item_data=items[i];item_data["hide_data"]=hide_data;export_data["item"].push(item_data);}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при экспорте данных! (1)");export_data=null;}}
if(export_data!==null)
{is_all_ok--;}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при экспорте данных! (2)");}
var files=await __db.file_get_all();if(files!==1)
{var hide_data_decr="";var hide_data=null;var file_data=null;for(let i=0;i<files.length;i++)
{var file_body=await __db.file_get_body(files[i]["id"])
body_decr=await __crypt.decrypt_file(__m_pass,file_body["body"]);body=btoa(new Uint8Array(body_decr).reduce(function(data,byte){return data+String.fromCharCode(byte);},''));if(body_decr!==1&&body!==undefined&&body!==null&&body!={})
{file_data=files[i];file_data["body"]=body;export_data["file"].push(file_data);}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при экспорте данных! (3)");export_data=null;}}
if(export_data!==null)
{is_all_ok--;}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при экспорте данных! (4)");}
if(is_all_ok==0)
{if(export_data!==null)
{export_data_enc=await __crypt.encrypt_text(pass,JSON.stringify(export_data));export_data=null;document.getElementById("ui_data_export_pass").value=pass;ui_preload(false);download_file(export_data_enc,"skyguardian_export_"+get_now_date_time_string()+".dat","text/plain");}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при экспорте данных! (5)");}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при экспорте данных! (6)");};}
else
{export_data={"item_group":null,"item":[]};item_group=await __db.item_group_type_get_all(1);if(item_group!==1)
{export_data["item_group"]=item_group;var items=await __db.item_get_all();if(items!==1)
{var hide_data_decr="";var hide_data=null;var item_data=null;for(let i=0;i<items.length;i++)
{hide_data_decr=await __crypt.decrypt_text(__m_pass,items[i]["hide_data"]);hide_data=JSON.parse(hide_data_decr);if(hide_data_decr!==1&&hide_data!==undefined&&hide_data!==null&&hide_data!={})
{item_data=items[i];item_data["hide_data"]=hide_data;export_data["item"].push(item_data);}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при экспорте данных! (7)");export_data=null;}}
if(export_data!==null)
{export_data_enc=await __crypt.encrypt_text(pass,JSON.stringify(export_data));export_data=null;document.getElementById("ui_data_export_pass").value=pass;ui_preload(false);download_file(export_data_enc,"skyguardian_export_"+get_now_date_time_string()+".dat","text/plain");}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при экспорте данных! (8)");}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при экспорте данных! (9)");};}
pass=null;item_group=null;file_group=null;};async function data_import(is_all,is_with_files,pass)
{if(__imp_file_data!==""&&__imp_file_data!==null&&__imp_file_data!==undefined)
{ui_preload(true);var import_data=__imp_file_data;var type=2;if(is_all==true)
{type=1;}
var is_ok_import=true;if(import_data!==""&&import_data!==undefined&&pass!==""&&pass!==undefined&&pass.length>100)
{var import_data_decr=await __crypt.decrypt_text(pass,import_data);if(import_data_decr!==1)
{import_data_decr=JSON.parse(import_data_decr);if(is_with_files==true&&"file"in import_data_decr&&"file_group"in import_data_decr)
{if(type==1)
{var is_all_ok=2;var item_groups=import_data_decr["item_group"];var file_groups=import_data_decr["file_group"];var res=1;for(let i=0;i<item_groups.length;i++)
{res=await __db.item_group_upd(item_groups[i]["id"],item_groups[i]["type"],item_groups[i]["name"],item_groups[i]["color"]);if(res===1)
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (1)");is_ok_import=false;break;}}
if(is_ok_import==true)
{var items=import_data_decr["item"];var res=1;var hide_data_enc=null;for(let i=0;i<items.length;i++)
{hide_data_enc=await __crypt.encrypt_text(__m_pass,JSON.stringify(items[i]["hide_data"]));if(hide_data_enc!==1)
{res=await __db.item_upd(items[i]["id"],items[i]["id_group"],items[i]["name"],items[i]["descr"],hide_data_enc,items[i]["is_elect"]);if(res===1)
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (2)");is_ok_import=false;break;}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (3)");is_ok_import=false;break;}}
if(is_ok_import==true)
{is_all_ok--;}}
res=1;for(let i=0;i<file_groups.length;i++)
{res=await __db.item_group_upd(file_groups[i]["id"],file_groups[i]["type"],file_groups[i]["name"],file_groups[i]["color"]);if(res===1)
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (4)");is_ok_import=false;break;}}
if(is_ok_import==true)
{var files=import_data_decr["file"];var res=1;var body_enc=null;for(let i=0;i<files.length;i++)
{body_enc=await __crypt.encrypt_file(__m_pass,__crypt.b64ToBuf(files[i]["body"]));if(body_enc!==1)
{res=await __db.file_upd(files[i]["id"],files[i]["id_group"],files[i]["name"],files[i]["ext"],body_enc);if(res===1)
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (5)");is_ok_import=false;break;}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (6)");is_ok_import=false;break;}}
if(is_ok_import==true)
{is_all_ok--;}}
if(is_all_ok==0)
{ui_preload(false);show_msg("Сообщение","Импорт данных успешно завершён.");ui_clear(6);if(__cur_item_type==1)
{ui_main_init(true);}
else
{ui_files_init(true);}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (7)");}}
else if(type==2)
{var is_find=false;var item_groups=import_data_decr["item_group"];var file_groups=import_data_decr["file_group"];var is_all_ok=2;var res=1;for(let i=0;i<item_groups.length;i++)
{is_find=await __db.item_group_check_id(item_groups[i]["id"]);if(is_find==false)
{res=await __db.item_group_upd(item_groups[i]["id"],item_groups[i]["type"],item_groups[i]["name"],item_groups[i]["color"]);if(res===1)
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (8)");is_ok_import=false;break;}}}
if(is_ok_import==true)
{var items=import_data_decr["item"];var res=1;var hide_data_enc=null;var is_find=false;for(let i=0;i<items.length;i++)
{is_find=await __db.item_check_id(items[i]["id"]);if(is_find==false)
{hide_data_enc=await __crypt.encrypt_text(__m_pass,JSON.stringify(items[i]["hide_data"]));if(hide_data_enc!==1)
{res=await __db.item_upd(items[i]["id"],items[i]["id_group"],items[i]["name"],items[i]["descr"],hide_data_enc,items[i]["is_elect"]);if(res!==1)
{}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (9)");is_ok_import=false;break;}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (10)");is_ok_import=false;break;}}}
if(is_ok_import==true)
{is_all_ok--;}}
res=1;for(let i=0;i<file_groups.length;i++)
{is_find=await __db.item_group_check_id(file_groups[i]["id"]);if(is_find==false)
{res=await __db.item_group_upd(file_groups[i]["id"],file_groups[i]["type"],file_groups[i]["name"],file_groups[i]["color"]);if(res===1)
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (11)");is_ok_import=false;break;}}}
if(is_ok_import==true)
{var files=import_data_decr["file"];var res=1;var hide_data_enc=null;var is_find=false;for(let i=0;i<files.length;i++)
{is_find=await __db.file_check_id(files[i]["id"]);if(is_find==false)
{body_enc=await __crypt.encrypt_file(__m_pass,__crypt.b64ToBuf(files[i]["body"]));if(body_enc!==1)
{res=await __db.file_upd(files[i]["id"],files[i]["id_group"],files[i]["name"],files[i]["ext"],body_enc);if(res===1)
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (12)");is_ok_import=false;break;}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (13)");is_ok_import=false;break;}}}
if(is_ok_import==true)
{is_all_ok--;}}
if(is_all_ok==0)
{ui_preload(false);show_msg("Сообщение","Импорт данных успешно завершён.");ui_clear(6);if(__cur_item_type==1)
{ui_main_init(true);}
else
{ui_files_init(true);}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (14)");}}}
else
{if(type==1)
{var item_groups=import_data_decr["item_group"];var res=1;for(let i=0;i<item_groups.length;i++)
{res=await __db.item_group_upd(item_groups[i]["id"],item_groups[i]["type"],item_groups[i]["name"],item_groups[i]["color"]);if(res===1)
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (1)");is_ok_import=false;break;}}
if(is_ok_import==true)
{var items=import_data_decr["item"];var res=1;var hide_data_enc=null;for(let i=0;i<items.length;i++)
{hide_data_enc=await __crypt.encrypt_text(__m_pass,JSON.stringify(items[i]["hide_data"]));if(hide_data_enc!==1)
{res=await __db.item_upd(items[i]["id"],items[i]["id_group"],items[i]["name"],items[i]["descr"],hide_data_enc,items[i]["is_elect"]);if(res===1)
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (2)");is_ok_import=false;break;}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (3)");is_ok_import=false;break;}}
if(is_ok_import==true)
{ui_preload(false);show_msg("Сообщение","Импорт данных успешно завершён.");ui_clear(6);if(__cur_item_type==1)
{ui_main_init(true);}
else
{ui_files_init(true);}}}}
else if(type==2)
{var is_find=false;var item_groups=import_data_decr["item_group"];var res=1;for(let i=0;i<item_groups.length;i++)
{is_find=await __db.item_group_check_id(item_groups[i]["id"]);if(is_find==false)
{res=await __db.item_group_upd(item_groups[i]["id"],item_groups[i]["type"],item_groups[i]["name"],item_groups[i]["color"]);if(res===1)
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (4)");is_ok_import=false;break;}}}
if(is_ok_import==true)
{var items=import_data_decr["item"];var res=1;var hide_data_enc=null;var is_find=false;for(let i=0;i<items.length;i++)
{is_find=await __db.item_check_id(items[i]["id"]);if(is_find==false)
{hide_data_enc=await __crypt.encrypt_text(__m_pass,JSON.stringify(items[i]["hide_data"]));if(hide_data_enc!==1)
{res=await __db.item_upd(items[i]["id"],items[i]["id_group"],items[i]["name"],items[i]["descr"],hide_data_enc,items[i]["is_elect"]);if(res!==1)
{}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (5)");is_ok_import=false;break;}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (6)");is_ok_import=false;break;}}}
if(is_ok_import==true)
{ui_preload(false);ui_clear(6);show_msg("Сообщение","Импорт данных успешно завершён.");if(__cur_item_type==1)
{ui_main_init(true);}
else
{ui_files_init(true);}}}}}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (7)");}}
else
{ui_preload(false);show_msg("Сообщение","Проверьте выбор файла экспорта и введённый пароль!");}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при импорте данных! (8)");}};async function app_start()
{ui_preload(true);var res_conf_init=await conf_init();if(res_conf_init!==1)
{var pass=document.getElementById("ui_pswd").value;if(pass.length!=0&&pass.trim()!="")
{var res=await login(pass);if(res!==1&&res!==2)
{window.history.pushState(null,null,window.location.href);var r=await conf_get_first_login()
if(r==true)
{show_msg("Сообщение","Рекомендуется сменить мастер-пароль установленный по умолчанию!");}
ui_main_init(true);ui_preload(false);var res=await idle_time_init();res=await ui_get_show_groups(1);res=await ui_get_show_groups(2);}
else if(res==2)
{ui_preload(false);document.getElementById("ui_pswd").value="";var r=await show_msg_res("Сообщение","Введенный пароль не верен!",false);document.getElementById("ui_pswd").focus();}
else
{ui_preload(false);show_msg("Ошибка","Произошла ошибка при входе (1)");}}
else
{ui_preload(false);var r=await show_msg_res("Сообщение","Введите пароль!",false);document.getElementById("ui_pswd").focus();}}
else
{ui_preload(false);show_msg("Ошибка","Произошла ошибка при входе (2)");}};async function idle_time_init()
{__idle_time=await conf_get_idle_time()*60000;window.onload=idle_reset_timer;idle_events.forEach(function(name){document.addEventListener(name,idle_reset_timer,true);});};function idle_logout()
{clearTimeout(idle_timer);window.removeEventListener("load",idle_reset_timer);idle_events.forEach(function(name){document.removeEventListener(name,idle_reset_timer,true);});logout();};function idle_reset_timer()
{clearTimeout(idle_timer);idle_timer=setTimeout(idle_logout,__idle_time);};async function update_app(registration)
{var r=await show_msg_res("Обновление","Доступна новая версия приложения. Обновить сейчас?",true);if(r==true)
{ui_preload(true);if(registration.waiting)
{registration.waiting.postMessage("SKIP_WAITING");}}};async function conf_get_items_show_groups()
{var items_show_groups=await __db.conf_get_items_show_groups()
if(items_show_groups!==1)
{}
else
{items_show_groups=true}
return items_show_groups;};async function conf_set_items_show_groups(items_show_groups)
{var res=await __db.conf_set_items_show_groups(items_show_groups);if(res!==1)
{}};async function conf_get_files_show_groups()
{var files_show_groups=await __db.conf_get_files_show_groups()
if(files_show_groups!==1)
{}
else
{files_show_groups=true}
return files_show_groups;};async function conf_set_files_show_groups(files_show_groups)
{var res=await __db.conf_set_files_show_groups(files_show_groups);if(res!==1)
{}};async function conf_get_first_login()
{var first_login=await __db.conf_get_first_login()
if(first_login==1)
{return true;}
return first_login;};function StrToBool(str){return(str==="true")||(str==true)}
window.addEventListener("load",async()=>{const registration=await navigator.serviceWorker.register("sw.js",{scope:"/skyguardian/"})
if(registration.waiting)
{var r=await update_app(registration);}
registration.addEventListener("updatefound",()=>{if(registration.installing){registration.installing.addEventListener("statechange",()=>{if(registration.waiting){if(navigator.serviceWorker.controller){update_app(registration)}else{}}})}});var refreshing=false;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!refreshing){window.location.reload()
refreshing=true}});ui_init();});

//scripts/ui.js
function ui_copy_text(val)
{if(val.trim()!==""&&val!=null&&val!==undefined)
{navigator.clipboard.writeText(val).then(function()
{show_toast("Данные успешно скопированы");},function()
{show_msg("Сообщение","Произошла ошибка при доступе к буферу обмена!");});}};function ui_clear(op)
{if(op==1)
{document.getElementById("ui_item_groups").disabled=false;document.getElementById("ui_item_group_type").disabled=false;document.getElementById("ui_item_group_name").value=null;document.getElementById("ui_item_group_color").value="#00CC22";document.getElementById("ui_item_group_add").disabled=false;document.getElementById("ui_item_group_edit").disabled=false;document.getElementById("ui_item_group_save").disabled=true;document.getElementById("ui_item_group_del").disabled=true;document.getElementById("ui_item_group_cancel").disabled=true;document.getElementById("ui_item_group_name").disabled=true;document.getElementById("ui_item_group_color").disabled=true;__is_edit_item_group=false;}
else if(op==2)
{document.getElementById("ui_item_name").value="";document.getElementById("ui_item_descr").value="-";document.getElementById("ui_item_login").value="";document.getElementById("ui_item_pass").value="";document.getElementById("ui_item_info").value="-";document.getElementById("ui_item_edit_button").disabled=true;document.getElementById("ui_item_save_button").disabled=false;document.getElementById("ui_item_del_button").disabled=true;document.getElementById("ui_item_cancel_button").disabled=true;document.getElementById("ui_item_name").disabled=false;document.getElementById("ui_item_descr").disabled=false;document.getElementById("ui_item_login").disabled=false;document.getElementById("ui_item_pass").disabled=false;document.getElementById("ui_item_info").disabled=false;document.getElementById("ui_item_group").disabled=true;__is_edit_item=false;__cur_id_item=null;}
else if(op==3)
{document.getElementById("ui_file_name").innerHTML="Имя файла: не выбран";document.getElementById("ui_add_file_selector").value="";document.getElementById("ui_item_save_button").disabled=false;document.getElementById("ui_item_del_button").disabled=false;document.getElementById("ui_add_file_button").disabled=false;__is_edit_item=false;__cur_id_item=null;}
else if(op==4)
{document.getElementById("ui_item_group_menu").innerHTML="";document.getElementById("ui_list_items").innerHTML="";document.getElementById("ui_file_group_menu").innerHTML="";document.getElementById("ui_list_files").innerHTML="";document.getElementById("ui_item_groups").innerHTML="";document.getElementById("ui_item_group").innerHTML="";document.getElementById("ui_file_group").innerHTML="";document.getElementById("ui_search_text").value="";ui_clear(1);ui_clear(2);ui_clear(3);ui_clear(5);ui_clear(6);ui_clear(7);var obj=bootstrap.Modal.getInstance(document.getElementById("ui_about_modal"));if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=bootstrap.Modal.getInstance(document.getElementById("ui_export_data"));if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=bootstrap.Modal.getInstance(document.getElementById("ui_import_data"));if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=bootstrap.Modal.getInstance(document.getElementById("ui_msg"));if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=bootstrap.Modal.getInstance(document.getElementById("ui_msg_result"));if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=bootstrap.Toast.getInstance(document.getElementById("ui_toast"));if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=null;}
else if(op==5)
{document.getElementById("ui_new_m_pass").value="";document.getElementById("ui_new_m_pass_repeate").value="";document.getElementById("ui_item_group_name").value=null;}
else if(op==6)
{document.getElementById("ui_import_export_data_file_selector").value="";document.getElementById("ui_import_export_data_pass").value="";document.getElementById("ui_import_export_data_type").checked=false;document.getElementById("ui_import_export_data_with_files").checked=false;}
else if(op==7)
{document.getElementById("ui_data_export_pass").value="";document.getElementById("ui_data_export_with_files").checked=false;}
else if(op==8)
{document.getElementById("ui_item_edit_button").disabled=false;document.getElementById("ui_item_save_button").disabled=true;document.getElementById("ui_item_del_button").disabled=true;document.getElementById("ui_item_cancel_button").disabled=true;document.getElementById("ui_item_name").disabled=true;document.getElementById("ui_item_descr").disabled=true;document.getElementById("ui_item_login").disabled=true;document.getElementById("ui_item_pass").disabled=true;document.getElementById("ui_item_info").disabled=true;document.getElementById("ui_item_group").disabled=true;}
else if(op==9)
{document.getElementById("ui_random_generate_data_len").value="100";document.getElementById("ui_random_generate_is_symb").checked=true;document.getElementById("ui_random_generate_text").innerHTML="";}};function ui_calc_size()
{if(document.getElementById("ui_div_cont_item").classList.contains("d-none")===false)
{document.getElementById("ui_div_cont_item").style.height=(document.getElementById("ui_main_page").offsetHeight-(document.getElementById("ui_header").offsetHeight+21))+"px";var w=(document.getElementById("ui_div_cont_item").offsetWidth-document.getElementById("ui_item_group_menu_div").offsetWidth);if(w<=300)
{document.getElementById("ui_item_group_menu_div").style.maxWidth="40%";}
else
{document.getElementById("ui_item_group_menu_div").style.maxWidth="300px";}
document.getElementById("ui_list_items_div").style.width=(document.getElementById("ui_div_cont_item").offsetWidth-document.getElementById("ui_item_group_menu_div").offsetWidth+"px");}
if(document.getElementById("ui_div_cont_item_work").classList.contains("d-none")===false)
{document.getElementById("ui_div_cont_item_work_form").style.height=(document.getElementById("ui_main_page").offsetHeight-(document.getElementById("ui_header").offsetHeight+30+document.getElementById("ui_div_cont_item_work_form_buttons").offsetHeight))+"px";}
if(document.getElementById("ui_div_cont_file").classList.contains("d-none")===false)
{document.getElementById("ui_div_cont_file").style.height=(document.getElementById("ui_main_page").offsetHeight-(document.getElementById("ui_header").offsetHeight+21))+"px";var w=(document.getElementById("ui_div_cont_file").offsetWidth-document.getElementById("ui_file_group_menu_div").offsetWidth);if(w<=300)
{document.getElementById("ui_file_group_menu_div").style.maxWidth="40%";}
else
{document.getElementById("ui_file_group_menu_div").style.maxWidth="300px";}
document.getElementById("ui_list_files_div").style.width=(document.getElementById("ui_div_cont_file").offsetWidth-document.getElementById("ui_file_group_menu_div").offsetWidth+"px");}
if(document.getElementById("ui_div_cont_conf").classList.contains("d-none")===false)
{document.getElementById("ui_div_cont_conf").style.height=(document.getElementById("ui_main_page").offsetHeight-(document.getElementById("ui_header").offsetHeight+21))+"px";}
ui_calc_position();};async function on_click_item_group(e)
{e.preventDefault();if(__cur_id_item_group!==e.target.getAttribute("id_group"))
{var obj=document.querySelector(".ui_item_group_menu_el.active");if((obj!==null)&&(obj!==undefined))
{obj.classList.remove("active");}
e.target.closest(".ui_item_group_menu_el").classList.add("active");__cur_id_item_group=e.target.getAttribute("id_group");var res=await item_get_all(__cur_id_item_group);obj=document.querySelector(".ui_item_group_menu_el.active .badge");if((obj!==null)&&(obj!==undefined))
{obj.innerText=res;}
obj=null;f_show_hide_no_data(false);}};async function on_click_file_group(e)
{e.preventDefault();if(__cur_id_file_group!==e.target.getAttribute("id_group"))
{var obj=document.querySelector(".ui_file_group_menu_el.active");if((obj!==null)&&(obj!==undefined))
{obj.classList.remove("active");}
e.target.closest(".ui_file_group_menu_el").classList.add("active");__cur_id_file_group=e.target.getAttribute("id_group");var res=await file_get_all(__cur_id_file_group);obj=document.querySelector(".ui_file_group_menu_el.active .badge");if((obj!==null)&&(obj!==undefined))
{obj.innerText=res;}
obj=null;f_show_hide_no_data(false);}};async function on_click_item(e)
{e.preventDefault();__cur_id_item=e.target.getAttribute("id_item");if(__cur_id_item!==undefined&&__cur_id_item!==null)
{var res=await item_get(__cur_id_item);document.getElementById("ui_div_cont_item_work").classList.remove("d-none");document.getElementById("ui_div_cont_item").classList.add("d-none");document.getElementById("ui_main_return_div").classList.remove("d-none");document.getElementById("ui_main_menu_div").classList.add("d-none");document.getElementById("ui_float_action_button").classList.add("d-none");document.getElementById("ui_float_groups_button").classList.add("d-none");document.getElementById("ui_item_name").disabled=true;document.getElementById("ui_item_descr").disabled=true;document.getElementById("ui_item_login").disabled=true;document.getElementById("ui_item_pass").disabled=true;document.getElementById("ui_item_info").disabled=true;document.getElementById("ui_item_group").disabled=true;document.getElementById("ui_item_edit_button").disabled=false;document.getElementById("ui_item_save_button").disabled=true;document.getElementById("ui_item_del_button").disabled=true;document.getElementById("ui_item_cancel_button").disabled=true;document.getElementById("ui_div_search_cont").classList.add("d-none");document.getElementById("ui_item_gen_pass_div").classList.remove("d-none");ui_calc_size();if(document.getElementById("ui_div_cont_item_work_form").scrollTop>0)
{document.getElementById("ui_div_cont_item_work_form").scroll({top:0,behavior:"smooth"});}
__id_page=3;ui_tooltip_hide_all();ui_tooltip_init();}};async function on_click_file(e)
{e.preventDefault();__cur_id_file=e.target.getAttribute("id_item");if(__cur_id_file!==undefined&&__cur_id_file!==null)
{var res=await file_get(__cur_id_file);document.getElementById("ui_div_cont_file_work").classList.remove("d-none");document.getElementById("ui_div_cont_file").classList.add("d-none");document.getElementById("ui_main_return_div").classList.remove("d-none");document.getElementById("ui_main_menu_div").classList.add("d-none");document.getElementById("ui_float_action_button").classList.add("d-none");document.getElementById("ui_float_groups_button").classList.add("d-none");document.getElementById("ui_file_work_header").classList.remove("d-none");var obj=bootstrap.Offcanvas.getInstance(document.getElementById("ui_main_menu"))
if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=null;document.getElementById("ui_add_file_selector").value="";document.getElementById("ui_add_file_button").disabled=true;document.getElementById("ui_file_save_button").disabled=true;document.getElementById("ui_file_del_button").disabled=false;document.getElementById("ui_get_file_button").disabled=false;document.getElementById("ui_div_search_cont").classList.add("d-none");document.getElementById("ui_file_group").disabled=true;document.getElementById("ui_file_group").value=__cur_id_file_group;ui_calc_size();__id_page=4;ui_tooltip_hide_all();ui_tooltip_init();}};async function ui_item_group_create(id,name,color)
{var count=await item_get_all_count(id);var el_text="<li class=\"nav-item\">"+
"<a class=\"ui_item_group_menu_el nav-link d-flex\" style=\"color:"+color+";\" id_group=\""+id+"\">"+
"<span class=\"w-100\" style=\"padding-right: 10px;\" onclick=\"on_click_item_group(event)\" id_group=\""+id+"\">"+name+"</span>"+
"<span class=\"ui_item_group_menu_el_badge badge bg-light justify-content-end\" style=\"color:black;\">"+count+"</span>"+
"</a>"+
"</li>";return el_text;};async function ui_file_group_create(id,name,color)
{var count=await file_get_all_count(id);var el_text="<li class=\"nav-item\">"+
"<a class=\"ui_file_group_menu_el nav-link d-flex\" style=\"color:"+color+";\" id_group=\""+id+"\">"+
"<span class=\"w-100\" style=\"padding-right: 10px;\" onclick=\"on_click_file_group(event)\" id_group=\""+id+"\">"+name+"</span>"+
"<span class=\"ui_file_group_menu_el_badge badge bg-light justify-content-end\" style=\"color:black;\">"+count+"</span>"+
"</a>"+
"</li>";return el_text;};function ui_group_select_create(id,name,color)
{var el_text="<option value=\""+id+"\" color=\""+color+"\" group_name=\""+name+"\">"+name+"</option>";return el_text;};function ui_item_create(id,name,descr,is_elect)
{var elect_view="";if(is_elect===false){elect_view="d-none"}
var el_text="<div id_item=\""+id+"\" item_name=\""+name+"\"  item_descr=\""+descr+"\" is_elect=\""+is_elect+"\" class=\"ui_list_item d-flex\" onclick=\"on_click_item(event)\" oncontextmenu=\"on_contextmenu_item(event)\">"+
"<span class=\"ui_is_elect display-4 pe-1 "+elect_view+"\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi-star-fill\" viewBox=\"0 0 16 16\">"+
"<path d=\"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z\"/>"+
"</svg></span>"+
"<div id_item=\""+id+"\" class=\"card flex-grow-1\">"+
"<div id_item=\""+id+"\" class=\"card-body\">"+
"<h6 id_item=\""+id+"\" class=\"ui_list_item_name card-title\">"+name+"</h6>"+
"<p id_item=\""+id+"\" class=\"card-text\"><small class=\"ui_list_item_descr text-muted\">"+descr+"</small></p></div></div></div>";return el_text;};function ui_file_create(id,name,type)
{var el_text="<div id_item=\""+id+"\" item_name=\""+name+"\" class=\"ui_files_list_item\" class=\"col\" onclick=\"on_click_file(event)\">"+
"<div id_item=\""+id+"\" class=\"card\" style=\"min-height: 150px;\">"+
"<div id_item=\""+id+"\" class=\"card-body\">"+
"<h6 id_item=\""+id+"\" class=\"ui_files_list_item_name card-title\">"+name+"</h6>"+
"<p id_item=\""+id+"\" class=\"card-text\"><small class=\"ui_files_list_item_type text-muted\">"+type+"</small></p></div></div></div>";return el_text;};async function ui_item_group_vew(op,arr)
{if(op==1)
{document.getElementById("ui_item_group_menu").innerHTML="";for(var i=0;i<arr.length;i++)
{var r=await ui_item_group_create(arr[i]["id"],arr[i]["name"],arr[i]["color"])
document.getElementById("ui_item_group_menu").insertAdjacentHTML('beforeend',r);}}
else if(op==2)
{document.getElementById("ui_item_groups").innerHTML="";for(var i=0;i<arr.length;i++)
{document.getElementById("ui_item_groups").insertAdjacentHTML('beforeend',ui_group_select_create(arr[i]["id"],arr[i]["name"],arr[i]["color"]));}}
else if(op==3)
{document.getElementById("ui_item_group").innerHTML="";for(var i=0;i<arr.length;i++)
{document.getElementById("ui_item_group").insertAdjacentHTML('beforeend',ui_group_select_create(arr[i]["id"],arr[i]["name"],arr[i]["color"]));}}
else if(op==4)
{document.getElementById("ui_file_group_menu").innerHTML="";for(var i=0;i<arr.length;i++)
{var r=await ui_file_group_create(arr[i]["id"],arr[i]["name"],arr[i]["color"])
document.getElementById("ui_file_group_menu").insertAdjacentHTML('beforeend',r);}}
else if(op==5)
{document.getElementById("ui_file_group").innerHTML="";for(var i=0;i<arr.length;i++)
{document.getElementById("ui_file_group").insertAdjacentHTML('beforeend',ui_group_select_create(arr[i]["id"],arr[i]["name"],arr[i]["color"]));}}};async function ui_main_init(is_refresh_list)
{__back_count_app_exit=0;document.getElementById("ui_div_cont_conf").classList.add("d-none");document.getElementById("ui_main_return_div").classList.add("d-none");document.getElementById("ui_main_menu_div").classList.remove("d-none");document.getElementById("ui_main_page").classList.remove("d-none");document.getElementById("ui_div_cont_item").classList.remove("d-none");document.getElementById("ui_div_cont_file").classList.add("d-none");document.getElementById("ui_login_page").classList.add("d-none");document.getElementById("ui_pswd").value="";document.getElementById("ui_float_action_button").classList.remove("d-none");document.getElementById("ui_float_groups_button").classList.remove("d-none");document.getElementById("ui_div_cont_item_work").classList.add("d-none");document.getElementById("ui_div_cont_file_work").classList.add("d-none");document.getElementById("ui_div_search_cont").classList.remove("d-none");document.getElementById("ui_item_gen_pass_div").classList.add("d-none");document.getElementById("ui_conf_header").classList.add("d-none");document.getElementById("ui_file_work_header").classList.add("d-none");document.getElementById("ui_search_text").value="";var obj=bootstrap.Modal.getInstance(document.getElementById("ui_import_data"))
if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=bootstrap.Modal.getInstance(document.getElementById("ui_export_data"))
if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=bootstrap.Offcanvas.getInstance(document.getElementById("ui_main_menu"))
if(obj!==undefined&&obj!==null)
{obj.hide();}
if(__cur_id_item_group!==""&&__cur_id_item_group!==undefined&&__cur_id_item_group!==null)
{obj=document.querySelector(".ui_item_group_menu_el.active");if((obj!==null)&&(obj!==undefined))
{obj.classList.remove("active");}
Array.from(document.getElementsByClassName("ui_item_group_menu_el")).forEach(function(element)
{if(element.getAttribute("id_group")===__cur_id_item_group)
{element.classList.add("active");}});var obj=document.querySelector(".ui_item_group_menu_el.active .badge");if((obj!==null)||(obj!==undefined))
{obj.innerText=document.getElementsByClassName("ui_list_item").length;}}
obj=null;if(is_refresh_list==true)
{var res=await item_group_get_all(1,__cur_item_type);res=await item_group_get_all(2,__cur_item_type);res=await item_group_get_all(3,__cur_item_type);if(__cur_id_item_group!==""&&__cur_id_item_group!==undefined&&__cur_id_item_group!==null)
{Array.from(document.getElementsByClassName("ui_item_group_menu_el")).forEach(function(element)
{if(element.getAttribute("id_group")===__cur_id_item_group)
{element.classList.add("active");}});res=await item_get_all(__cur_id_item_group);var obj=document.querySelector(".ui_item_group_menu_el.active .badge");if((obj!==null)||(obj!==undefined))
{obj.innerText=res;}
obj=null;}
else
{if(document.getElementsByClassName("ui_item_group_menu_el").length>0)
{if(document.getElementsByClassName("ui_item_group_menu_el")[0].childNodes.length>0)
{document.getElementsByClassName("ui_item_group_menu_el")[0].childNodes[0].click();}}}
}
obj=document.querySelector(".ui_main_menu_list_elem.active");if((obj!==null)&&(obj!==undefined))
{obj.classList.remove("active");}
document.getElementById("ui_item_list_button").classList.add("active");obj=null;ui_clear(1);ui_clear(2);ui_calc_size();ui_float_groups_button_init();__id_page=1;f_show_hide_no_data(false);ui_tooltip_hide_all();ui_tooltip_init();};function show_msg(title,text,is_large,is_copied)
{if(is_large==true)
{document.querySelector("#ui_msg_div").classList.add("modal-lg");document.querySelector("#ui_msg_text").style="min-height: 200px;word-wrap: break-word;width: inherit";}
else
{document.querySelector("#ui_msg_div").classList.remove("modal-lg");document.querySelector("#ui_msg_text").style="";};if(is_copied==true){document.querySelector("#ui_msg_text").classList.add("ui_is_copied");}else{if(document.querySelector("#ui_msg_text").classList.contains("ui_is_copied")==true){document.querySelector("#ui_msg_text").classList.remove("ui_is_copied");}}
document.querySelector("#ui_msg_title").innerHTML=title;document.querySelector("#ui_msg_text").innerHTML=text;var msg=new bootstrap.Modal(document.getElementById("ui_msg"),{keyboard:false});msg.show();};async function show_msg_res(title,text,is_question)
{var o=bootstrap.Modal.getInstance(document.getElementById("ui_msg_result"));if(o!==undefined&&o!==null)
{o.hide();}
if(is_question==true){document.querySelector("#ui_msg_result_yes_button").classList.remove("d-none");document.querySelector("#ui_msg_result_no_button").classList.remove("d-none");document.querySelector("#ui_msg_result_ok_button").classList.add("d-none");}else{document.querySelector("#ui_msg_result_yes_button").classList.add("d-none");document.querySelector("#ui_msg_result_no_button").classList.add("d-none");document.querySelector("#ui_msg_result_ok_button").classList.remove("d-none");}
const msg=new Promise(function(resolve,reject)
{document.querySelector("#ui_msg_result_title").innerHTML=title;document.querySelector("#ui_msg_result_text").innerHTML=text;var obj=new bootstrap.Modal(document.getElementById("ui_msg_result"),{keyboard:false,backdrop:"static"});document.getElementById("ui_msg_result_yes_button").onclick=function()
{var mobj=bootstrap.Modal.getInstance(document.getElementById("ui_msg_result"));if(mobj!==undefined&&mobj!==null)
{mobj.hide();}
resolve(true);};document.getElementById("ui_msg_result_no_button").onclick=function()
{var mobj=bootstrap.Modal.getInstance(document.getElementById("ui_msg_result"));if(mobj!==undefined&&mobj!==null)
{mobj.hide();}
resolve(false);};document.getElementById("ui_msg_result_ok_button").onclick=function()
{var mobj=bootstrap.Modal.getInstance(document.getElementById("ui_msg_result"));if(mobj!==undefined&&mobj!==null)
{mobj.hide();}
resolve(true);};obj.show();});var res=await msg;return res;};function show_toast(text)
{document.querySelector("#ui_toast_text").innerHTML=text;var toast=bootstrap.Toast.getOrCreateInstance(document.getElementById("ui_toast"),{});toast.show();};function ui_modal_export_data()
{ui_clear(7);var mdl_object=document.getElementById("ui_export_data");var mdl=new bootstrap.Modal(mdl_object,{keyboard:false,backdrop:"static"});mdl_object.addEventListener("hidden.bs.modal",event=>{ui_clear(7);});mdl.show();};function ui_modal_import_data()
{ui_clear(6);var mdl_object=document.getElementById("ui_import_data");var mdl=new bootstrap.Modal(mdl_object,{keyboard:false,backdrop:"static"});mdl_object.addEventListener("hidden.bs.modal",event=>{ui_clear(6);});mdl.show();};function ui_preload(is_show)
{if(is_show==true)
{if(document.querySelector("#ui_preload").classList.contains("d-none")===true)
{document.getElementById("ui_preload").insertAdjacentHTML("beforeend","<div class=\"d-flex justify-content-center\">"+
"<div class=\"spinner-border\" role=\"status\" style=\"top: 50%; position: absolute;\">"+
"</div></div>");document.getElementById("ui_preload").classList.remove("d-none");}}
else
{document.getElementById("ui_preload").classList.add("d-none");document.getElementById("ui_preload").innerHTML="";}};async function ui_files_init(is_refresh_list)
{document.getElementById("ui_div_cont_conf").classList.add("d-none");document.getElementById("ui_main_return_div").classList.add("d-none");document.getElementById("ui_main_menu_div").classList.remove("d-none");document.getElementById("ui_main_page").classList.remove("d-none");document.getElementById("ui_div_cont_item").classList.add("d-none");document.getElementById("ui_div_cont_file").classList.remove("d-none");document.getElementById("ui_login_page").classList.add("d-none");document.getElementById("ui_pswd").value="";document.getElementById("ui_float_action_button").classList.remove("d-none");document.getElementById("ui_float_groups_button").classList.remove("d-none");document.getElementById("ui_div_cont_item_work").classList.add("d-none");document.getElementById("ui_div_cont_file_work").classList.add("d-none");document.getElementById("ui_file_work_header").classList.add("d-none");document.getElementById("ui_div_search_cont").classList.remove("d-none");document.getElementById("ui_item_gen_pass_div").classList.add("d-none");document.getElementById("ui_conf_header").classList.add("d-none");document.getElementById("ui_search_text").value="";var obj=bootstrap.Modal.getInstance(document.getElementById("ui_import_data"))
if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=bootstrap.Modal.getInstance(document.getElementById("ui_export_data"))
if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=bootstrap.Offcanvas.getInstance(document.getElementById("ui_main_menu"))
if(obj!==undefined&&obj!==null)
{obj.hide();}
if(__cur_id_file_group!==""&&__cur_id_file_group!==undefined&&__cur_id_file_group!==null)
{obj=document.querySelector(".ui_file_group_menu_el.active");if((obj!==null)&&(obj!==undefined))
{obj.classList.remove("active");}
Array.from(document.getElementsByClassName("ui_file_group_menu_el")).forEach(function(element)
{if(element.getAttribute("id_group")===__cur_id_file_group)
{element.classList.add("active");}});var obj=document.querySelector(".ui_file_group_menu_el.active .badge");if((obj!==null)||(obj!==undefined))
{obj.innerText=document.getElementsByClassName("ui_files_list_item").length;}}
obj=null;if(is_refresh_list==true)
{var res=await item_group_get_all(4,__cur_item_type);res=await item_group_get_all(5,__cur_item_type);res=await item_group_get_all(2,__cur_item_type);if(__cur_id_file_group!==""&&__cur_id_file_group!==undefined&&__cur_id_file_group!==null)
{Array.from(document.getElementsByClassName("ui_file_group_menu_el")).forEach(function(element)
{if(element.getAttribute("id_group")===__cur_id_file_group)
{element.classList.add("active");}});res=await file_get_all(__cur_id_file_group);var res=await file_get_all(__cur_id_file_group);obj=document.querySelector(".ui_file_group_menu_el.active .badge");if((obj!==null)&&(obj!==undefined))
{obj.innerText=res;}
obj=null;}
else
{if(document.getElementsByClassName("ui_file_group_menu_el").length>0)
{if(document.getElementsByClassName("ui_file_group_menu_el")[0].childNodes.length>0)
{document.getElementsByClassName("ui_file_group_menu_el")[0].childNodes[0].click();}}}
}
obj=document.querySelector(".ui_main_menu_list_elem.active");if((obj!==null)&&(obj!==undefined))
{obj.classList.remove("active");}
document.getElementById("ui_file_list_button").classList.add("active");obj=null;ui_clear(3);ui_calc_size();ui_float_groups_button_init();__id_page=2;f_show_hide_no_data(false);ui_tooltip_hide_all();ui_tooltip_init();};function ui_filter()
{var text=document.getElementById("ui_search_text").value;if(__cur_item_type==1)
{ui_filter_items(text);}
else if(__cur_item_type==2)
{ui_filter_files(text);}}
function ui_filter_items(text)
{if(text.length>0)
{Array.from(document.getElementsByClassName("ui_list_item")).forEach(function(element)
{if((element.getAttribute("item_name").toLowerCase().includes(text.toLowerCase())==true)||(element.getAttribute("item_descr").toLowerCase().includes(text.toLowerCase())==true))
{}
else
{element.classList.add("d-none");}});}
else
{Array.from(document.getElementsByClassName("ui_list_item")).forEach(function(element)
{element.classList.remove("d-none");});}
f_show_hide_no_data(true);};function ui_filter_files(text)
{if(text.length>0)
{Array.from(document.getElementsByClassName("ui_files_list_item")).forEach(function(element)
{if(element.getAttribute("item_name").toLowerCase().includes(text.toLowerCase())==true)
{}
else
{element.classList.add("d-none");}});}
else
{Array.from(document.getElementsByClassName("ui_files_list_item")).forEach(function(element)
{element.classList.remove("d-none");});}
f_show_hide_no_data(true);};async function ui_conf_get_idle_time()
{var res=await conf_get_idle_time();document.getElementById("ui_idle_time_range").value=res;document.getElementById("ui_idle_time_range_label").innerHTML="Время ("+res+" мин.)";};async function ui_conf_upd_idle_time()
{var idle_time=document.getElementById("ui_idle_time_range").value;var res=await conf_change_idle_time(idle_time);};function ui_item_list_update(id,name,descr)
{if(id!==""&&id!==undefined&&id!==null)
{var el_main=document.querySelector(".ui_list_item[id_item='"+id+"']");if(el_main!==undefined&&el_main!==null)
{el_main.setAttribute("item_name",name);el_main.setAttribute("item_descr",descr);el_main.querySelector(".ui_list_item_name").innerText=name;el_main.querySelector(".ui_list_item_descr").innerText=descr;ui_list_sort();}}};function ui_item_list_update_elect(id,is_elect)
{if(id!==""&&id!==undefined&&id!==null)
{var el_main=document.querySelector(".ui_list_item[id_item='"+id+"']");if(el_main!==undefined&&el_main!==null)
{el_main.setAttribute("is_elect",is_elect);var el_is_elect=document.querySelector(".ui_list_item[id_item='"+id+"'] .ui_is_elect");if(el_is_elect!==undefined&&el_is_elect!==null)
{if(is_elect==true){el_is_elect.classList.remove("d-none")}else{el_is_elect.classList.add("d-none")}}
ui_list_sort();}}};function ui_item_list_add(id,name,descr)
{if(id!==""&&id!==undefined&&id!==null&&name!==""&&name!==undefined&&name!==null&&descr!==""&&descr!==undefined&&descr!==null)
{document.getElementById("ui_list_items").insertAdjacentHTML("beforeend",ui_item_create(id,name,descr,false));ui_list_sort();}};function ui_files_list_add(id,name,type)
{if(id!==""&&id!==undefined&&id!==null&&name!==""&&name!==undefined&&name!==null&&type!==""&&type!==undefined&&type!==null)
{document.getElementById("ui_list_files").insertAdjacentHTML("beforeend",ui_file_create(id,name,type));ui_list_sort();}};function ui_list_element_delete(id)
{if(id!==""&&id!==undefined&&id!==null)
{var el_main=null;if(__cur_item_type==1)
{el_main=document.querySelector(".ui_list_item[id_item='"+id+"']");}
else if(__cur_item_type==2)
{el_main=document.querySelector(".ui_files_list_item[id_item='"+id+"']");}
if(el_main!==undefined&&el_main!==null)
{el_main.remove();ui_list_sort();}}};function ui_list_sort()
{var div=null,para=null;if(__cur_item_type==1)
{div=document.querySelector("#ui_list_items");para=document.querySelectorAll("#ui_list_items .ui_list_item");}
else if(__cur_item_type==2)
{div=document.querySelector("#ui_list_files");para=document.querySelectorAll("#ui_list_files .ui_files_list_item");}
var paraArr=[].slice.call(para).sort(function(a,b)
{return a.getAttribute("item_name").localeCompare(b.getAttribute("item_name"));});if(__cur_item_type==1){paraArr=paraArr.sort(function(a,b)
{return b.getAttribute("is_elect").localeCompare(a.getAttribute("is_elect"));});}
div.innerHTML="";paraArr.forEach(function(p){div.appendChild(p);});paraArr=null;};function ui_calc_position()
{if(__cur_item_type==1)
{if(document.getElementById("ui_float_groups_button_left").classList.contains("d-none")==false)
{document.getElementById("ui_float_groups_button").style.left=document.getElementById("ui_item_group_menu_div").offsetWidth-12+'px';}
else
{document.getElementById("ui_float_groups_button").style.left=document.getElementById("ui_item_group_menu_div").offsetWidth+'px';}}
else if(__cur_item_type==2)
{if(document.getElementById("ui_float_groups_button_left").classList.contains("d-none")==false)
{document.getElementById("ui_float_groups_button").style.left=document.getElementById("ui_file_group_menu_div").offsetWidth-12+'px';}
else
{document.getElementById("ui_float_groups_button").style.left=document.getElementById("ui_file_group_menu_div").offsetWidth+'px';}}};function ui_float_groups_button_init()
{if(__cur_item_type==1)
{if(document.getElementById("ui_item_group_menu_div").classList.contains("d-none")==false)
{document.getElementById("ui_float_groups_button_left").classList.remove("d-none");document.getElementById("ui_float_groups_button_right").classList.add("d-none");document.getElementById("ui_list_items_div").classList.add("border-start");}
else
{document.getElementById("ui_float_groups_button_left").classList.add("d-none");document.getElementById("ui_float_groups_button_right").classList.remove("d-none");document.getElementById("ui_list_items_div").classList.remove("border-start");}}
else if(__cur_item_type==2)
{if(document.getElementById("ui_file_group_menu_div").classList.contains("d-none")==false)
{document.getElementById("ui_float_groups_button_left").classList.remove("d-none");document.getElementById("ui_float_groups_button_right").classList.add("d-none");document.getElementById("ui_list_files_div").classList.add("border-start");}
else
{document.getElementById("ui_float_groups_button_left").classList.add("d-none");document.getElementById("ui_float_groups_button_right").classList.remove("d-none");document.getElementById("ui_list_files_div").classList.remove("border-start");}}
ui_calc_position();};function f_show_hide_no_data(is_filter)
{if(is_filter==false)
{if(__cur_item_type==1)
{if(document.getElementsByClassName("ui_item_group_menu_el").length==0)
{document.getElementById("ui_item_group_menu").classList.add("d-none");document.getElementById("ui_item_group_menu_no_data").classList.remove("d-none");document.getElementById("ui_float_action_button").classList.add("d-none");document.getElementById("ui_float_groups_button").classList.add("d-none");}
else
{document.getElementById("ui_item_group_menu").classList.remove("d-none");document.getElementById("ui_item_group_menu_no_data").classList.add("d-none");document.getElementById("ui_float_action_button").classList.remove("d-none");document.getElementById("ui_float_groups_button").classList.remove("d-none");}
if(document.getElementsByClassName("ui_list_item").length==0)
{document.getElementById("ui_list_items").classList.add("d-none");document.getElementById("ui_list_items_no_data").classList.remove("d-none");}
else
{document.getElementById("ui_list_items").classList.remove("d-none");document.getElementById("ui_list_items_no_data").classList.add("d-none");}}
else
{if(document.getElementsByClassName("ui_file_group_menu_el").length==0)
{document.getElementById("ui_file_group_menu").classList.add("d-none");document.getElementById("ui_file_group_menu_no_data").classList.remove("d-none");document.getElementById("ui_float_action_button").classList.add("d-none");document.getElementById("ui_float_groups_button").classList.add("d-none");}
else
{document.getElementById("ui_file_group_menu").classList.remove("d-none");document.getElementById("ui_file_group_menu_no_data").classList.add("d-none");document.getElementById("ui_float_action_button").classList.remove("d-none");document.getElementById("ui_float_groups_button").classList.remove("d-none");}
if(document.getElementsByClassName("ui_file_group_menu_el").length==0)
{document.getElementById("ui_list_files").classList.add("d-none");document.getElementById("ui_list_files_no_data").classList.remove("d-none");}
else
{document.getElementById("ui_list_files").classList.remove("d-none");document.getElementById("ui_list_files_no_data").classList.add("d-none");}}}
else
{if(__cur_item_type==1)
{var els=document.getElementsByClassName("ui_list_item");var n=0;for(var el of els)
{if(el.classList.contains("d-none")==false)
{n++;}}
if(n==0)
{document.getElementById("ui_list_items").classList.add("d-none");document.getElementById("ui_list_items_no_data").innerHTML="Записей не найдено";document.getElementById("ui_list_items_no_data").classList.remove("d-none");}
else
{document.getElementById("ui_list_items").classList.remove("d-none");document.getElementById("ui_list_items_no_data").innerHTML="Нет данных";document.getElementById("ui_list_items_no_data").classList.add("d-none");}}
else
{var els=document.getElementsByClassName("ui_files_list_item");var n=0;for(var el of els)
{if(el.classList.contains("d-none")==false)
{n++;}}
if(n==0)
{document.getElementById("ui_list_files").classList.add("d-none");document.getElementById("ui_list_files_no_data").innerHTML="Записей не найдено";document.getElementById("ui_list_files_no_data").classList.remove("d-none");}
else
{document.getElementById("ui_list_files").classList.remove("d-none");document.getElementById("ui_list_files_no_data").innerHTML="Нет данных";document.getElementById("ui_list_files_no_data").classList.add("d-none");}}}};async function ui_get_show_groups(type)
{if(type==1)
{var res=await conf_get_items_show_groups();if(res!==1)
{if(res==true||res==undefined)
{document.getElementById("ui_item_group_menu_div").classList.remove("d-none");document.getElementById("ui_float_groups_button_left").classList.remove("d-none");document.getElementById("ui_float_groups_button_right").classList.add("d-none");document.getElementById("ui_list_items_div").classList.add("border-start");}
else
{document.getElementById("ui_item_group_menu_div").classList.add("d-none");document.getElementById("ui_float_groups_button_left").classList.add("d-none");document.getElementById("ui_float_groups_button_right").classList.remove("d-none");document.getElementById("ui_list_items_div").classList.remove("border-start");}}}
else
{var res=await conf_get_files_show_groups();if(res!==1)
{if(res==true||res==undefined)
{document.getElementById("ui_file_group_menu_div").classList.remove("d-none");document.getElementById("ui_float_groups_button_left").classList.remove("d-none");document.getElementById("ui_float_groups_button_right").classList.add("d-none");document.getElementById("ui_list_files_div").classList.add("border-start");}
else
{document.getElementById("ui_file_group_menu_div").classList.add("d-none");document.getElementById("ui_float_groups_button_left").classList.add("d-none");document.getElementById("ui_float_groups_button_right").classList.remove("d-none");document.getElementById("ui_list_files_div").classList.remove("border-start");}}}
ui_calc_size();ui_calc_position();};async function on_contextmenu_item(e){e.preventDefault();var elem=e.target.closest(".ui_list_item");if(StrToBool(elem.getAttribute("is_elect"))==true){var r=await show_msg_res("Записи","Удалить запись из избранных?",true);if(r)
{var r=await item_set_elect(elem.getAttribute("id_item"),false);}}else{var r=await show_msg_res("Записи","Добавить запись в избранные?",true);if(r)
{var r=await item_set_elect(elem.getAttribute("id_item"),true);}}};function ui_modal_generate_random_data()
{ui_clear(9);var mdl_object=document.getElementById("ui_random_generate");var mdl=new bootstrap.Modal(mdl_object,{keyboard:false,backdrop:"static"});mdl_object.addEventListener("hidden.bs.modal",event=>{ui_clear(9);});document.getElementById("ui_random_generate_text").innerHTML=__crypt.gen_pass(document.getElementById("ui_random_generate_data_len").value,document.getElementById("ui_random_generate_is_symb").checked);mdl.show();};function ui_init()
{document.getElementById("ui_login_button").onclick=function(e)
{e.preventDefault();app_start();};document.getElementById("ui_pswd").onkeydown=function(e)
{if(e.key==="Enter")
{e.preventDefault();app_start();}};document.getElementById("ui_logout_button").onclick=async function(e)
{e.preventDefault();var r=await show_msg_res("Подтверждение","Вы действительно хотите выйти?",true);if(r)
{logout();try
{nw.App.quit();}
catch(error)
{}}
else
{bootstrap.Offcanvas.getInstance(document.getElementById("ui_main_menu")).hide();}};document.getElementById("ui_conf_button").onclick=async function(e)
{e.preventDefault();document.getElementById("ui_div_cont_conf").classList.remove("d-none");document.getElementById("ui_div_cont_item").classList.add("d-none");document.getElementById("ui_main_return_div").classList.remove("d-none");document.getElementById("ui_main_menu_div").classList.add("d-none");document.getElementById("ui_float_action_button").classList.add("d-none");document.getElementById("ui_float_groups_button").classList.add("d-none");document.getElementById("ui_div_cont_file").classList.add("d-none");bootstrap.Offcanvas.getInstance(document.getElementById("ui_main_menu")).hide();document.getElementById("ui_item_group_name").value=null;document.getElementById("ui_item_group_color").value="#00CC22";document.getElementById("ui_item_group_add").disabled=false;document.getElementById("ui_item_group_edit").disabled=false;document.getElementById("ui_item_group_save").disabled=true;document.getElementById("ui_item_group_del").disabled=true;document.getElementById("ui_item_group_cancel").disabled=true;document.getElementById("ui_div_search_cont").classList.add("d-none");document.getElementById("ui_conf_header").classList.remove("d-none");var res=await ui_conf_get_idle_time();ui_calc_size();if(document.getElementById("ui_div_cont_conf").scrollTop>0)
{document.getElementById("ui_div_cont_conf").scroll({top:0,behavior:'smooth'});}
document.getElementById("ui_item_group_type").value=__cur_item_type;obj=document.querySelector(".ui_main_menu_list_elem.active");if((obj!==null)&&(obj!==undefined))
{obj.classList.remove("active");}
document.getElementById("ui_conf_button").classList.add("active");obj=null;__id_page=5;ui_tooltip_hide_all();ui_tooltip_init();};document.getElementById("ui_main_return_div").onclick=async function(e)
{e.preventDefault();ui_clear(5);if(__cur_item_type==1)
{if(__cur_id_item_group==null)
{ui_main_init(true);}
else
{ui_main_init(false);}}
else if(__cur_item_type==2)
{if(__cur_id_file_group==null)
{ui_files_init(true);}
else
{ui_files_init(false);}}
ui_tooltip_hide_all();ui_tooltip_init();};document.getElementById("ui_about_button").onclick=function(e)
{e.preventDefault();var dialog=new bootstrap.Modal(document.getElementById("ui_about_modal"),{});dialog.show();bootstrap.Offcanvas.getInstance(document.getElementById("ui_main_menu")).hide();};document.getElementById("ui_item_groups").onclick=function(e)
{e.preventDefault();if(document.getElementById("ui_item_groups").selectedIndex!==-1)
{document.getElementById("ui_item_group_name").disabled=true;document.getElementById("ui_item_group_color").disabled=true;}};document.getElementById("ui_item_group_type").onchange=function(e)
{e.preventDefault();document.getElementById("ui_item_groups").innerHTML="";ui_clear(1);item_group_get_all(2,e.target.value);};document.getElementById("ui_item_group_add").onclick=function(e)
{e.preventDefault();document.getElementById("ui_item_groups").disabled=true;document.getElementById("ui_item_group_name").value=null;document.getElementById("ui_item_group_color").value="#00CC22";document.getElementById("ui_item_group_add").disabled=true;document.getElementById("ui_item_group_edit").disabled=true;document.getElementById("ui_item_group_save").disabled=false;document.getElementById("ui_item_group_del").disabled=true;document.getElementById("ui_item_group_cancel").disabled=false;document.getElementById("ui_item_group_name").disabled=false;document.getElementById("ui_item_group_color").disabled=false;__is_edit_item_group=false;};document.getElementById("ui_item_group_cancel").onclick=function(e)
{e.preventDefault();ui_clear(1);};document.getElementById("ui_item_group_save").onclick=async function(e)
{e.preventDefault();if(document.getElementById("ui_item_group_type").selectedIndex!=-1&&document.getElementById("ui_item_group_name").value!==""&&document.getElementById("ui_item_group_name").value!==undefined&&document.getElementById("ui_item_group_name").value!==null)
{if(__is_edit_item_group==false)
{var res=await item_group_add(document.getElementById("ui_item_group_type").value,document.getElementById("ui_item_group_name").value.trim(),document.getElementById("ui_item_group_color").value);}
else
{var res=await item_group_upd(document.getElementById("ui_item_groups").value,document.getElementById("ui_item_group_type").value,document.getElementById("ui_item_group_name").value.trim(),document.getElementById("ui_item_group_color").value);};ui_clear(1);document.getElementById("ui_item_groups").innerHTML="";if(__cur_item_type==1)
{item_group_get_all(1,1);item_group_get_all(2,document.getElementById("ui_item_group_type").value);item_group_get_all(3,1);}
else if(__cur_item_type==2)
{item_group_get_all(2,document.getElementById("ui_item_group_type").value);item_group_get_all(4,2);item_group_get_all(5,2);}}
else
{show_msg("Сообщение","Проверьте ввод данных группы!");}};document.getElementById("ui_item_group_edit").onclick=function(e)
{e.preventDefault();if(document.getElementById("ui_item_groups").selectedIndex!==-1)
{document.getElementById("ui_item_groups").disabled=true;document.getElementById("ui_item_group_type").disabled=true;document.getElementById("ui_item_group_add").disabled=true;document.getElementById("ui_item_group_edit").disabled=true;document.getElementById("ui_item_group_save").disabled=false;document.getElementById("ui_item_group_del").disabled=false;document.getElementById("ui_item_group_cancel").disabled=false;document.getElementById("ui_item_group_name").disabled=false;document.getElementById("ui_item_group_color").disabled=false;var el=document.getElementById("ui_item_groups").options[document.getElementById("ui_item_groups").selectedIndex];document.getElementById("ui_item_group_name").value=el.getAttribute("group_name");document.getElementById("ui_item_group_color").value=el.getAttribute("color");__is_edit_item_group=true;}};document.getElementById("ui_item_group_del").onclick=async function(e)
{e.preventDefault();var msg_text="";if(__cur_item_type==1)
{msg_text="Вы действительно хотите удалить группу и все привязанные к ней записи?";}
else if(__cur_item_type==2)
{msg_text="Вы действительно хотите удалить группу и все привязанные к ней файлы?";}
var r=await show_msg_res("Группы",msg_text,true);if(r)
{var rr=await show_msg_res("Подтверждение","Вы уверены?",true);if(rr)
{var res=await item_group_del(document.getElementById("ui_item_groups").value,__cur_item_type);ui_clear(1);document.getElementById("ui_item_groups").innerHTML="";if(__cur_item_type==1)
{item_group_get_all(1,1);item_group_get_all(2,document.getElementById("ui_item_group_type").value);item_group_get_all(3,1);}
else if(__cur_item_type==2)
{item_group_get_all(2,document.getElementById("ui_item_group_type").value);item_group_get_all(4,2);item_group_get_all(5,2);}}}};document.getElementById("ui_new_m_pass_button").onclick=async function(e)
{e.preventDefault();if((document.getElementById("ui_new_m_pass").value===document.getElementById("ui_new_m_pass_repeate").value)&&(document.getElementById("ui_new_m_pass").value.length>8))
{var r=await show_msg_res("Настройки","Вы действительно хотите сменить мастер-пароль?",true);if(r)
{var res=await conf_change_m_pass(document.getElementById("ui_new_m_pass").value);}}
else
{show_msg("Сообщение","Проверьте ввод нового пароля и его подтверждения а так же длину!");}};document.getElementById("ui_item_list_button").onclick=async function(e)
{e.preventDefault();__cur_item_type=1;if(document.getElementById("ui_div_cont_item").classList.contains("d-none")===true)
{ui_main_init(true);}
var obj=bootstrap.Offcanvas.getInstance(document.getElementById("ui_main_menu"))
if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=null;obj=document.querySelector(".ui_main_menu_list_elem.active");if((obj!==null)&&(obj!==undefined))
{obj.classList.remove("active");}
document.getElementById("ui_item_list_button").classList.add("active");obj=null;};document.getElementById("ui_float_action_button").onclick=function(e)
{e.preventDefault();if(__cur_item_type==1)
{if(__cur_id_item_group!==""&&__cur_id_item_group!==undefined&&__cur_id_item_group!==null)
{document.getElementById("ui_div_cont_item_work").classList.remove("d-none");document.getElementById("ui_div_cont_item").classList.add("d-none");document.getElementById("ui_main_return_div").classList.remove("d-none");document.getElementById("ui_main_menu_div").classList.add("d-none");document.getElementById("ui_float_action_button").classList.add("d-none");document.getElementById("ui_float_groups_button").classList.add("d-none");var obj=bootstrap.Offcanvas.getInstance(document.getElementById("ui_main_menu"))
if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=null;document.getElementById("ui_item_name").value="";document.getElementById("ui_item_descr").value="-";document.getElementById("ui_item_login").value="";document.getElementById("ui_item_pass").value="";document.getElementById("ui_item_info").value="-";document.getElementById("ui_item_name").disabled=false;document.getElementById("ui_item_descr").disabled=false;document.getElementById("ui_item_login").disabled=false;document.getElementById("ui_item_pass").disabled=false;document.getElementById("ui_item_info").disabled=false;document.getElementById("ui_item_group").disabled=false;document.getElementById("ui_item_edit_button").disabled=true;document.getElementById("ui_item_save_button").disabled=false;document.getElementById("ui_item_del_button").disabled=true;document.getElementById("ui_item_cancel_button").disabled=true;document.getElementById("ui_div_search_cont").classList.add("d-none");document.getElementById("ui_item_gen_pass_div").classList.remove("d-none");document.getElementById("ui_item_group").value=__cur_id_item_group;ui_calc_size();if(document.getElementById("ui_div_cont_item_work_form").scrollTop>0)
{document.getElementById("ui_div_cont_item_work_form").scroll({top:0,behavior:'smooth'});}
document.getElementById("ui_item_name").focus();__id_page=3;}}
else if(__cur_item_type==2)
{if(__cur_id_file_group!==""&&__cur_id_file_group!==undefined&&__cur_id_file_group!==null)
{document.getElementById("ui_div_cont_file_work").classList.remove("d-none");document.getElementById("ui_div_cont_file").classList.add("d-none");document.getElementById("ui_main_return_div").classList.remove("d-none");document.getElementById("ui_main_menu_div").classList.add("d-none");document.getElementById("ui_float_action_button").classList.add("d-none");document.getElementById("ui_float_groups_button").classList.add("d-none");document.getElementById("ui_file_work_header").classList.remove("d-none");var obj=bootstrap.Offcanvas.getInstance(document.getElementById("ui_main_menu"))
if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=null;document.getElementById("ui_file_name").innerHTML="Имя файла: не выбран";document.getElementById("ui_add_file_selector").value="";document.getElementById("ui_add_file_button").disabled=false;document.getElementById("ui_file_save_button").disabled=false;document.getElementById("ui_file_del_button").disabled=true;document.getElementById("ui_get_file_button").disabled=true;document.getElementById("ui_div_search_cont").classList.add("d-none");document.getElementById("ui_file_group").value=__cur_id_file_group;ui_calc_size();__id_page=4;}}};document.getElementById("ui_item_save_button").onclick=async function(e)
{e.preventDefault();if(__is_edit_item==false)
{var res=await item_add(document.getElementById("ui_item_group").value,document.getElementById("ui_item_name").value.trim(),document.getElementById("ui_item_descr").value.trim(),document.getElementById("ui_item_login").value.trim(),document.getElementById("ui_item_pass").value.trim(),document.getElementById("ui_item_info").value.trim());}
else
{var res=await item_upd(__cur_id_item,document.getElementById("ui_item_group").value,document.getElementById("ui_item_name").value.trim(),document.getElementById("ui_item_descr").value.trim(),document.getElementById("ui_item_login").value.trim(),document.getElementById("ui_item_pass").value.trim(),document.getElementById("ui_item_info").value.trim(),StrToBool(document.getElementById("ui_div_cont_item_work_form").getAttribute("is_elect")));};};document.getElementById("ui_file_save_button").onclick=async function(e)
{e.preventDefault();file_add(document.getElementById("ui_file_group").value);};document.getElementById("ui_item_cancel_button").onclick=function(e)
{e.preventDefault();ui_clear(8);};document.getElementById("ui_item_edit_button").onclick=function(e)
{e.preventDefault();document.getElementById("ui_item_name").disabled=false;document.getElementById("ui_item_descr").disabled=false;document.getElementById("ui_item_login").disabled=false;document.getElementById("ui_item_pass").disabled=false;document.getElementById("ui_item_info").disabled=false;document.getElementById("ui_item_group").disabled=false;document.getElementById("ui_item_edit_button").disabled=true;document.getElementById("ui_item_save_button").disabled=false;document.getElementById("ui_item_del_button").disabled=false;document.getElementById("ui_item_cancel_button").disabled=false;__is_edit_item=true;};document.getElementById("ui_item_del_button").onclick=async function(e)
{e.preventDefault();var r=await show_msg_res("Записи","Вы действительно хотите удалить запись?",true);if(r)
{var res=await item_del(__cur_id_item);ui_list_element_delete(__cur_id_item);ui_main_init(false);}};document.getElementById("ui_file_del_button").onclick=async function(e)
{e.preventDefault();var r=await show_msg_res("Файлы","Вы действительно хотите удалить файл?",true);if(r)
{var res=await file_del(__cur_id_file);ui_list_element_delete(__cur_id_file);ui_files_init(false);}};document.getElementById("ui_copy_login_button").onclick=async function(e)
{e.preventDefault();ui_copy_text(document.getElementById("ui_item_login").value);document.getElementById("ui_copy_login_button").blur();};document.getElementById("ui_copy_pass_button").onclick=async function(e)
{e.preventDefault();ui_copy_text(document.getElementById("ui_item_pass").value);document.getElementById("ui_copy_pass_button").blur();};document.getElementById("ui_item_gen_pass_button").onclick=async function(e)
{e.preventDefault();ui_modal_generate_random_data();};document.getElementById("ui_data_export_button").onclick=async function(e)
{e.preventDefault();ui_modal_export_data();};document.getElementById("ui_data_import_button").onclick=async function(e)
{e.preventDefault();ui_modal_import_data();};document.getElementById("ui_data_export_create_button").onclick=async function(e)
{e.preventDefault();var is_with_files=document.getElementById("ui_data_export_with_files").checked;if(is_with_files!==undefined)
{var res=await data_export(is_with_files);}};document.getElementById("ui_import_export_data_import_button").onclick=async function(e)
{e.preventDefault();var r=await show_msg_res("Импорт","Вы действительно хотите импортировать данные с выбранными параметрами?",true)
if(r)
{var is_all=document.getElementById("ui_import_export_data_type").checked;var is_with_files=document.getElementById("ui_import_export_data_with_files").checked;if(is_all!==undefined)
{var pass=document.getElementById("ui_import_export_data_pass").value.trim();if(pass!==undefined&&pass!==null&&pass!=="")
{if(is_with_files!==undefined)
{var res=await data_import(is_all,is_with_files,pass);}}
else
{show_msg("Сообщение","Проверьте ввод пароля от файла экспорта!");}}}};document.getElementById("ui_import_export_data_file_button").onclick=function()
{document.getElementById("ui_import_export_data_file_selector").click();};document.getElementById("ui_import_export_data_file_selector").onchange=function()
{read_text_file(document.getElementById("ui_import_export_data_file_selector").files);};document.getElementById("ui_add_file_button").onclick=function()
{document.getElementById("ui_add_file_selector").click();};document.getElementById("ui_add_file_selector").onchange=function()
{read_file(document.getElementById("ui_add_file_selector").files);};document.getElementById("ui_file_list_button").onclick=function(e)
{e.preventDefault();__cur_item_type=2;if(document.getElementById("ui_div_cont_file").classList.contains("d-none")===true)
{ui_files_init(true);}
var obj=bootstrap.Offcanvas.getInstance(document.getElementById("ui_main_menu"))
if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=null;obj=document.querySelector(".ui_main_menu_list_elem.active");if((obj!==null)&&(obj!==undefined))
{obj.classList.remove("active");}
document.getElementById("ui_file_list_button").classList.add("active");obj=null;};document.getElementById("ui_get_file_button").onclick=function(e)
{e.preventDefault();file_get_body(__cur_id_file);};document.getElementById("ui_filter_button").onclick=function(e)
{e.preventDefault();ui_filter();};document.getElementById("ui_search_text").onkeydown=function(e)
{if(e.key==="Enter")
{e.preventDefault();ui_filter();}};document.getElementById("ui_search_text").onsearch=function(e)
{e.preventDefault();ui_filter();};document.getElementById("ui_idle_time_save_button").onclick=async function(e)
{e.preventDefault();var res=await ui_conf_upd_idle_time();};document.getElementById("ui_idle_time_range").oninput=function(e)
{e.preventDefault();document.getElementById("ui_idle_time_range_label").innerHTML="Время ("+document.getElementById("ui_idle_time_range").value+" мин.)";};document.getElementById("ui_msg_text").onclick=function(e)
{e.preventDefault();if(document.getElementById("ui_msg_text").classList.contains("ui_is_copied")==true){ui_copy_text(document.getElementById("ui_msg_text").innerText);}};document.getElementById("ui_data_export_with_files").onchange=async function(e)
{e.preventDefault();if(document.getElementById("ui_data_export_with_files").checked===true)
{var r=await show_msg_res("Экспорт","Вы действительно хотите создать экспорт с файлами?",true);if(r==false)
{document.getElementById("ui_data_export_with_files").checked=false;}}};document.getElementById("ui_data_export_pass").onclick=function(e)
{e.preventDefault();ui_copy_text(document.getElementById("ui_data_export_pass").value);};document.getElementById("ui_float_groups_button").onclick=async function(e)
{e.preventDefault();if(__cur_item_type==1)
{document.getElementById("ui_div_cont_item_cont").classList.add("d-none");if(document.getElementById("ui_item_group_menu_div").classList.contains("d-none")==true)
{document.getElementById("ui_item_group_menu_div").classList.remove("d-none");document.getElementById("ui_float_groups_button_left").classList.remove("d-none");document.getElementById("ui_float_groups_button_right").classList.add("d-none");document.getElementById("ui_list_items_div").classList.add("border-start");var res=await conf_set_items_show_groups(true);}
else
{document.getElementById("ui_item_group_menu_div").classList.add("d-none");document.getElementById("ui_float_groups_button_left").classList.add("d-none");document.getElementById("ui_float_groups_button_right").classList.remove("d-none");document.getElementById("ui_list_items_div").classList.remove("border-start");var res=await conf_set_items_show_groups(false);}
document.getElementById("ui_div_cont_item_cont").classList.remove("d-none");}
else if(__cur_item_type==2)
{document.getElementById("ui_div_cont_file_cont").classList.add("d-none");if(document.getElementById("ui_file_group_menu_div").classList.contains("d-none")==true)
{document.getElementById("ui_file_group_menu_div").classList.remove("d-none");document.getElementById("ui_float_groups_button_left").classList.remove("d-none");document.getElementById("ui_float_groups_button_right").classList.add("d-none");document.getElementById("ui_list_files_div").classList.add("border-start");var res=await conf_set_files_show_groups(true);}
else
{document.getElementById("ui_file_group_menu_div").classList.add("d-none");document.getElementById("ui_float_groups_button_left").classList.add("d-none");document.getElementById("ui_float_groups_button_right").classList.remove("d-none");document.getElementById("ui_list_files_div").classList.remove("border-start");var res=await conf_set_files_show_groups(false);}
document.getElementById("ui_div_cont_file_cont").classList.remove("d-none");}
ui_calc_size();ui_calc_position();};document.getElementById("ui_random_generate_is_symb").onchange=function(e)
{e.preventDefault();document.getElementById("ui_random_generate_text").innerHTML=__crypt.gen_pass(document.getElementById("ui_random_generate_data_len").value,document.getElementById("ui_random_generate_is_symb").checked);};document.getElementById("ui_random_generate_data_len").onchange=function(e)
{e.preventDefault();document.getElementById("ui_random_generate_text").innerHTML=__crypt.gen_pass(document.getElementById("ui_random_generate_data_len").value,document.getElementById("ui_random_generate_is_symb").checked);};document.getElementById("ui_random_generate_text").onclick=function(e)
{e.preventDefault();ui_copy_text(document.getElementById("ui_random_generate_text").innerText);};document.getElementById("ui_pswd").focus();__db=new db();__crypt=new crypt();__imp_file_data="";window.history.pushState(null,null,window.location.href);window.history.back();window.history.forward();__id_page=0;if(window.matchMedia('(display-mode: standalone)').matches===true)
{window.resizeTo(1024,768);}
window.addEventListener("resize",function()
{ui_calc_size();});window.addEventListener("popstate",function(e)
{e.preventDefault();__back_timeout=setTimeout(clear_back_timeout,2000);if(__id_page===0)
{return;}
else if(__id_page==1||__id_page==2)
{if(__back_count_app_exit==1)
{clearTimeout(__back_timeout);logout();return;}
else
{__back_count_app_exit=__back_count_app_exit+1;show_toast("Для выхода повторите нажатие кнопки \"Назад\"");window.history.pushState(null,null,null);return;}}
else if(__id_page==3||__id_page==4||__id_page==5)
{__back_count_app_exit=0;clearTimeout(__back_timeout);history.pushState(null,null,null);document.getElementById("ui_main_return_div").click();return;}
else
{window.history.pushState(null,null,null);return;}});try
{nw.Window.get().on("close",async function()
{var r=await show_msg_res("Подтверждение","Вы действительно хотите выйти?",true);if(r)
{this.close(true);}});}
catch(error)
{}
ui_tooltip_init();};function clear_back_timeout()
{__back_count_app_exit=0;};function ui_tooltip_init()
{const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]');const tooltipList=[...tooltipTriggerList].map(tooltipTriggerEl=>new bootstrap.Tooltip(tooltipTriggerEl,{show:100,hide:1000}));}
function ui_tooltip_hide_all()
{const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]');const tooltipList=[...tooltipTriggerList].map(tooltipTriggerEl=>bootstrap.Tooltip.getInstance(tooltipTriggerEl).hide());}

