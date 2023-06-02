//scripts/localforage.min.js
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.localforage=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(a){"use strict";function c(){k=!0;for(var a,b,c=l.length;c;){for(b=l,l=[],a=-1;++a<c;)b[a]();c=l.length}k=!1}function d(a){1!==l.push(a)||k||e()}var e,f=a.MutationObserver||a.WebKitMutationObserver;if(f){var g=0,h=new f(c),i=a.document.createTextNode("");h.observe(i,{characterData:!0}),e=function(){i.data=g=++g%2}}else if(a.setImmediate||void 0===a.MessageChannel)e="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var b=a.document.createElement("script");b.onreadystatechange=function(){c(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},a.document.documentElement.appendChild(b)}:function(){setTimeout(c,0)};else{var j=new a.MessageChannel;j.port1.onmessage=c,e=function(){j.port2.postMessage(0)}}var k,l=[];b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(a,b,c){"use strict";function d(){}function e(a){if("function"!=typeof a)throw new TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,a!==d&&i(this,a)}function f(a,b,c){this.promise=a,"function"==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),"function"==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}function g(a,b,c){o(function(){var d;try{d=b(c)}catch(b){return p.reject(a,b)}d===a?p.reject(a,new TypeError("Cannot resolve promise with itself")):p.resolve(a,d)})}function h(a){var b=a&&a.then;if(a&&("object"==typeof a||"function"==typeof a)&&"function"==typeof b)return function(){b.apply(a,arguments)}}function i(a,b){function c(b){f||(f=!0,p.reject(a,b))}function d(b){f||(f=!0,p.resolve(a,b))}function e(){b(d,c)}var f=!1,g=j(e);"error"===g.status&&c(g.value)}function j(a,b){var c={};try{c.value=a(b),c.status="success"}catch(a){c.status="error",c.value=a}return c}function k(a){return a instanceof this?a:p.resolve(new this(d),a)}function l(a){var b=new this(d);return p.reject(b,a)}function m(a){function b(a,b){function d(a){g[b]=a,++h!==e||f||(f=!0,p.resolve(j,g))}c.resolve(a).then(d,function(a){f||(f=!0,p.reject(j,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=new Array(e),h=0,i=-1,j=new this(d);++i<e;)b(a[i],i);return j}function n(a){function b(a){c.resolve(a).then(function(a){f||(f=!0,p.resolve(h,a))},function(a){f||(f=!0,p.reject(h,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=-1,h=new this(d);++g<e;)b(a[g]);return h}var o=a(1),p={},q=["REJECTED"],r=["FULFILLED"],s=["PENDING"];b.exports=e,e.prototype.catch=function(a){return this.then(null,a)},e.prototype.then=function(a,b){if("function"!=typeof a&&this.state===r||"function"!=typeof b&&this.state===q)return this;var c=new this.constructor(d);if(this.state!==s){g(c,this.state===r?a:b,this.outcome)}else this.queue.push(new f(c,a,b));return c},f.prototype.callFulfilled=function(a){p.resolve(this.promise,a)},f.prototype.otherCallFulfilled=function(a){g(this.promise,this.onFulfilled,a)},f.prototype.callRejected=function(a){p.reject(this.promise,a)},f.prototype.otherCallRejected=function(a){g(this.promise,this.onRejected,a)},p.resolve=function(a,b){var c=j(h,b);if("error"===c.status)return p.reject(a,c.value);var d=c.value;if(d)i(a,d);else{a.state=r,a.outcome=b;for(var e=-1,f=a.queue.length;++e<f;)a.queue[e].callFulfilled(b)}return a},p.reject=function(a,b){a.state=q,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a},e.resolve=k,e.reject=l,e.all=m,e.race=n},{1:1}],3:[function(a,b,c){(function(b){"use strict";"function"!=typeof b.Promise&&(b.Promise=a(2))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(a){return}}function f(){try{if(!ua||!ua.open)return!1;var a="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),b="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!a||b)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(a){return!1}}function g(a,b){a=a||[],b=b||{};try{return new Blob(a,b)}catch(f){if("TypeError"!==f.name)throw f;for(var c="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,d=new c,e=0;e<a.length;e+=1)d.append(a[e]);return d.getBlob(b.type)}}function h(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}function i(a,b,c){"function"==typeof b&&a.then(b),"function"==typeof c&&a.catch(c)}function j(a){return"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a)),a}function k(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}function l(a){for(var b=a.length,c=new ArrayBuffer(b),d=new Uint8Array(c),e=0;e<b;e++)d[e]=a.charCodeAt(e);return c}function m(a){return new va(function(b){var c=a.transaction(wa,Ba),d=g([""]);c.objectStore(wa).put(d,"key"),c.onabort=function(a){a.preventDefault(),a.stopPropagation(),b(!1)},c.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),c=navigator.userAgent.match(/Edge\//);b(c||!a||parseInt(a[1],10)>=43)}}).catch(function(){return!1})}function n(a){return"boolean"==typeof xa?va.resolve(xa):m(a).then(function(a){return xa=a})}function o(a){var b=ya[a.name],c={};c.promise=new va(function(a,b){c.resolve=a,c.reject=b}),b.deferredOperations.push(c),b.dbReady?b.dbReady=b.dbReady.then(function(){return c.promise}):b.dbReady=c.promise}function p(a){var b=ya[a.name],c=b.deferredOperations.pop();if(c)return c.resolve(),c.promise}function q(a,b){var c=ya[a.name],d=c.deferredOperations.pop();if(d)return d.reject(b),d.promise}function r(a,b){return new va(function(c,d){if(ya[a.name]=ya[a.name]||B(),a.db){if(!b)return c(a.db);o(a),a.db.close()}var e=[a.name];b&&e.push(a.version);var f=ua.open.apply(ua,e);b&&(f.onupgradeneeded=function(b){var c=f.result;try{c.createObjectStore(a.storeName),b.oldVersion<=1&&c.createObjectStore(wa)}catch(c){if("ConstraintError"!==c.name)throw c;console.warn('The database "'+a.name+'" has been upgraded from version '+b.oldVersion+" to version "+b.newVersion+', but the storage "'+a.storeName+'" already exists.')}}),f.onerror=function(a){a.preventDefault(),d(f.error)},f.onsuccess=function(){var b=f.result;b.onversionchange=function(a){a.target.close()},c(b),p(a)}})}function s(a){return r(a,!1)}function t(a){return r(a,!0)}function u(a,b){if(!a.db)return!0;var c=!a.db.objectStoreNames.contains(a.storeName),d=a.version<a.db.version,e=a.version>a.db.version;if(d&&(a.version!==b&&console.warn('The database "'+a.name+"\" can't be downgraded from version "+a.db.version+" to version "+a.version+"."),a.version=a.db.version),e||c){if(c){var f=a.db.version+1;f>a.version&&(a.version=f)}return!0}return!1}function v(a){return new va(function(b,c){var d=new FileReader;d.onerror=c,d.onloadend=function(c){var d=btoa(c.target.result||"");b({__local_forage_encoded_blob:!0,data:d,type:a.type})},d.readAsBinaryString(a)})}function w(a){return g([l(atob(a.data))],{type:a.type})}function x(a){return a&&a.__local_forage_encoded_blob}function y(a){var b=this,c=b._initReady().then(function(){var a=ya[b._dbInfo.name];if(a&&a.dbReady)return a.dbReady});return i(c,a,a),c}function z(a){o(a);for(var b=ya[a.name],c=b.forages,d=0;d<c.length;d++){var e=c[d];e._dbInfo.db&&(e._dbInfo.db.close(),e._dbInfo.db=null)}return a.db=null,s(a).then(function(b){return a.db=b,u(a)?t(a):b}).then(function(d){a.db=b.db=d;for(var e=0;e<c.length;e++)c[e]._dbInfo.db=d}).catch(function(b){throw q(a,b),b})}function A(a,b,c,d){void 0===d&&(d=1);try{var e=a.db.transaction(a.storeName,b);c(null,e)}catch(e){if(d>0&&(!a.db||"InvalidStateError"===e.name||"NotFoundError"===e.name))return va.resolve().then(function(){if(!a.db||"NotFoundError"===e.name&&!a.db.objectStoreNames.contains(a.storeName)&&a.version<=a.db.version)return a.db&&(a.version=a.db.version+1),t(a)}).then(function(){return z(a).then(function(){A(a,b,c,d-1)})}).catch(c);c(e)}}function B(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function C(a){function b(){return va.resolve()}var c=this,d={db:null};if(a)for(var e in a)d[e]=a[e];var f=ya[d.name];f||(f=B(),ya[d.name]=f),f.forages.push(c),c._initReady||(c._initReady=c.ready,c.ready=y);for(var g=[],h=0;h<f.forages.length;h++){var i=f.forages[h];i!==c&&g.push(i._initReady().catch(b))}var j=f.forages.slice(0);return va.all(g).then(function(){return d.db=f.db,s(d)}).then(function(a){return d.db=a,u(d,c._defaultConfig.version)?t(d):a}).then(function(a){d.db=f.db=a,c._dbInfo=d;for(var b=0;b<j.length;b++){var e=j[b];e!==c&&(e._dbInfo.db=d.db,e._dbInfo.version=d.version)}})}function D(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.get(a);h.onsuccess=function(){var a=h.result;void 0===a&&(a=null),x(a)&&(a=w(a)),b(a)},h.onerror=function(){d(h.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function E(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.openCursor(),i=1;h.onsuccess=function(){var c=h.result;if(c){var d=c.value;x(d)&&(d=w(d));var e=a(d,c.key,i++);void 0!==e?b(e):c.continue()}else b()},h.onerror=function(){d(h.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function F(a,b,c){var d=this;a=j(a);var e=new va(function(c,e){var f;d.ready().then(function(){return f=d._dbInfo,"[object Blob]"===za.call(b)?n(f.db).then(function(a){return a?b:v(b)}):b}).then(function(b){A(d._dbInfo,Ba,function(f,g){if(f)return e(f);try{var h=g.objectStore(d._dbInfo.storeName);null===b&&(b=void 0);var i=h.put(b,a);g.oncomplete=function(){void 0===b&&(b=null),c(b)},g.onabort=g.onerror=function(){var a=i.error?i.error:i.transaction.error;e(a)}}catch(a){e(a)}})}).catch(e)});return h(e,c),e}function G(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Ba,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.delete(a);f.oncomplete=function(){b()},f.onerror=function(){d(h.error)},f.onabort=function(){var a=h.error?h.error:h.transaction.error;d(a)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function H(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Ba,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.clear();e.oncomplete=function(){a()},e.onabort=e.onerror=function(){var a=g.error?g.error:g.transaction.error;c(a)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function I(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.count();g.onsuccess=function(){a(g.result)},g.onerror=function(){c(g.error)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function J(a,b){var c=this,d=new va(function(b,d){if(a<0)return void b(null);c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=!1,i=g.openKeyCursor();i.onsuccess=function(){var c=i.result;if(!c)return void b(null);0===a?b(c.key):h?b(c.key):(h=!0,c.advance(a))},i.onerror=function(){d(i.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function K(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.openKeyCursor(),h=[];g.onsuccess=function(){var b=g.result;if(!b)return void a(h);h.push(b.key),b.continue()},g.onerror=function(){c(g.error)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function L(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;if(a.name){var f=a.name===c.name&&e._dbInfo.db,g=f?va.resolve(e._dbInfo.db):s(a).then(function(b){var c=ya[a.name],d=c.forages;c.db=b;for(var e=0;e<d.length;e++)d[e]._dbInfo.db=b;return b});d=a.storeName?g.then(function(b){if(b.objectStoreNames.contains(a.storeName)){var c=b.version+1;o(a);var d=ya[a.name],e=d.forages;b.close();for(var f=0;f<e.length;f++){var g=e[f];g._dbInfo.db=null,g._dbInfo.version=c}return new va(function(b,d){var e=ua.open(a.name,c);e.onerror=function(a){e.result.close(),d(a)},e.onupgradeneeded=function(){e.result.deleteObjectStore(a.storeName)},e.onsuccess=function(){var a=e.result;a.close(),b(a)}}).then(function(a){d.db=a;for(var b=0;b<e.length;b++){var c=e[b];c._dbInfo.db=a,p(c._dbInfo)}}).catch(function(b){throw(q(a,b)||va.resolve()).catch(function(){}),b})}}):g.then(function(b){o(a);var c=ya[a.name],d=c.forages;b.close();for(var e=0;e<d.length;e++){d[e]._dbInfo.db=null}return new va(function(b,c){var d=ua.deleteDatabase(a.name);d.onerror=function(){var a=d.result;a&&a.close(),c(d.error)},d.onblocked=function(){console.warn('dropInstance blocked for database "'+a.name+'" until all open connections are closed')},d.onsuccess=function(){var a=d.result;a&&a.close(),b(a)}}).then(function(a){c.db=a;for(var b=0;b<d.length;b++)p(d[b]._dbInfo)}).catch(function(b){throw(q(a,b)||va.resolve()).catch(function(){}),b})})}else d=va.reject("Invalid arguments");return h(d,b),d}function M(){return"function"==typeof openDatabase}function N(a){var b,c,d,e,f,g=.75*a.length,h=a.length,i=0;"="===a[a.length-1]&&(g--,"="===a[a.length-2]&&g--);var j=new ArrayBuffer(g),k=new Uint8Array(j);for(b=0;b<h;b+=4)c=Da.indexOf(a[b]),d=Da.indexOf(a[b+1]),e=Da.indexOf(a[b+2]),f=Da.indexOf(a[b+3]),k[i++]=c<<2|d>>4,k[i++]=(15&d)<<4|e>>2,k[i++]=(3&e)<<6|63&f;return j}function O(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=Da[c[b]>>2],d+=Da[(3&c[b])<<4|c[b+1]>>4],d+=Da[(15&c[b+1])<<2|c[b+2]>>6],d+=Da[63&c[b+2]];return c.length%3==2?d=d.substring(0,d.length-1)+"=":c.length%3==1&&(d=d.substring(0,d.length-2)+"=="),d}function P(a,b){var c="";if(a&&(c=Ua.call(a)),a&&("[object ArrayBuffer]"===c||a.buffer&&"[object ArrayBuffer]"===Ua.call(a.buffer))){var d,e=Ga;a instanceof ArrayBuffer?(d=a,e+=Ia):(d=a.buffer,"[object Int8Array]"===c?e+=Ka:"[object Uint8Array]"===c?e+=La:"[object Uint8ClampedArray]"===c?e+=Ma:"[object Int16Array]"===c?e+=Na:"[object Uint16Array]"===c?e+=Pa:"[object Int32Array]"===c?e+=Oa:"[object Uint32Array]"===c?e+=Qa:"[object Float32Array]"===c?e+=Ra:"[object Float64Array]"===c?e+=Sa:b(new Error("Failed to get type for BinaryArray"))),b(e+O(d))}else if("[object Blob]"===c){var f=new FileReader;f.onload=function(){var c=Ea+a.type+"~"+O(this.result);b(Ga+Ja+c)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(c){console.error("Couldn't convert value into a JSON string: ",a),b(null,c)}}function Q(a){if(a.substring(0,Ha)!==Ga)return JSON.parse(a);var b,c=a.substring(Ta),d=a.substring(Ha,Ta);if(d===Ja&&Fa.test(c)){var e=c.match(Fa);b=e[1],c=c.substring(e[0].length)}var f=N(c);switch(d){case Ia:return f;case Ja:return g([f],{type:b});case Ka:return new Int8Array(f);case La:return new Uint8Array(f);case Ma:return new Uint8ClampedArray(f);case Na:return new Int16Array(f);case Pa:return new Uint16Array(f);case Oa:return new Int32Array(f);case Qa:return new Uint32Array(f);case Ra:return new Float32Array(f);case Sa:return new Float64Array(f);default:throw new Error("Unkown type: "+d)}}function R(a,b,c,d){a.executeSql("CREATE TABLE IF NOT EXISTS "+b.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],c,d)}function S(a){var b=this,c={db:null};if(a)for(var d in a)c[d]="string"!=typeof a[d]?a[d].toString():a[d];var e=new va(function(a,d){try{c.db=openDatabase(c.name,String(c.version),c.description,c.size)}catch(a){return d(a)}c.db.transaction(function(e){R(e,c,function(){b._dbInfo=c,a()},function(a,b){d(b)})},d)});return c.serializer=Va,e}function T(a,b,c,d,e,f){a.executeSql(c,d,e,function(a,g){g.code===g.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[b.storeName],function(a,h){h.rows.length?f(a,g):R(a,b,function(){a.executeSql(c,d,e,f)},f)},f):f(a,g)},f)}function U(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=e.serializer.deserialize(d)),b(d)},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function V(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName,[],function(c,d){for(var f=d.rows,g=f.length,h=0;h<g;h++){var i=f.item(h),j=i.value;if(j&&(j=e.serializer.deserialize(j)),void 0!==(j=a(j,i.key,h+1)))return void b(j)}b()},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function W(a,b,c,d){var e=this;a=j(a);var f=new va(function(f,g){e.ready().then(function(){void 0===b&&(b=null);var h=b,i=e._dbInfo;i.serializer.serialize(b,function(b,j){j?g(j):i.db.transaction(function(c){T(c,i,"INSERT OR REPLACE INTO "+i.storeName+" (key, value) VALUES (?, ?)",[a,b],function(){f(h)},function(a,b){g(b)})},function(b){if(b.code===b.QUOTA_ERR){if(d>0)return void f(W.apply(e,[a,h,c,d-1]));g(b)}})})}).catch(g)});return h(f,c),f}function X(a,b,c){return W.apply(this,[a,b,c,1])}function Y(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"DELETE FROM "+e.storeName+" WHERE key = ?",[a],function(){b()},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function Z(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"DELETE FROM "+d.storeName,[],function(){a()},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function $(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT COUNT(key) as c FROM "+d.storeName,[],function(b,c){var d=c.rows.item(0).c;a(d)},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function _(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT key FROM "+e.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var d=c.rows.length?c.rows.item(0).key:null;b(d)},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function aa(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT key FROM "+d.storeName,[],function(b,c){for(var d=[],e=0;e<c.rows.length;e++)d.push(c.rows.item(e).key);a(d)},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function ba(a){return new va(function(b,c){a.transaction(function(d){d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(c,d){for(var e=[],f=0;f<d.rows.length;f++)e.push(d.rows.item(f).name);b({db:a,storeNames:e})},function(a,b){c(b)})},function(a){c(a)})})}function ca(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;return d=a.name?new va(function(b){var d;d=a.name===c.name?e._dbInfo.db:openDatabase(a.name,"","",0),b(a.storeName?{db:d,storeNames:[a.storeName]}:ba(d))}).then(function(a){return new va(function(b,c){a.db.transaction(function(d){function e(a){return new va(function(b,c){d.executeSql("DROP TABLE IF EXISTS "+a,[],function(){b()},function(a,b){c(b)})})}for(var f=[],g=0,h=a.storeNames.length;g<h;g++)f.push(e(a.storeNames[g]));va.all(f).then(function(){b()}).catch(function(a){c(a)})},function(a){c(a)})})}):va.reject("Invalid arguments"),h(d,b),d}function da(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(a){return!1}}function ea(a,b){var c=a.name+"/";return a.storeName!==b.storeName&&(c+=a.storeName+"/"),c}function fa(){var a="_localforage_support_test";try{return localStorage.setItem(a,!0),localStorage.removeItem(a),!1}catch(a){return!0}}function ga(){return!fa()||localStorage.length>0}function ha(a){var b=this,c={};if(a)for(var d in a)c[d]=a[d];return c.keyPrefix=ea(a,b._defaultConfig),ga()?(b._dbInfo=c,c.serializer=Va,va.resolve()):va.reject()}function ia(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo.keyPrefix,c=localStorage.length-1;c>=0;c--){var d=localStorage.key(c);0===d.indexOf(a)&&localStorage.removeItem(d)}});return h(c,a),c}function ja(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo,d=localStorage.getItem(b.keyPrefix+a);return d&&(d=b.serializer.deserialize(d)),d});return h(d,b),d}function ka(a,b){var c=this,d=c.ready().then(function(){for(var b=c._dbInfo,d=b.keyPrefix,e=d.length,f=localStorage.length,g=1,h=0;h<f;h++){var i=localStorage.key(h);if(0===i.indexOf(d)){var j=localStorage.getItem(i);if(j&&(j=b.serializer.deserialize(j)),void 0!==(j=a(j,i.substring(e),g++)))return j}}});return h(d,b),d}function la(a,b){var c=this,d=c.ready().then(function(){var b,d=c._dbInfo;try{b=localStorage.key(a)}catch(a){b=null}return b&&(b=b.substring(d.keyPrefix.length)),b});return h(d,b),d}function ma(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo,c=localStorage.length,d=[],e=0;e<c;e++){var f=localStorage.key(e);0===f.indexOf(a.keyPrefix)&&d.push(f.substring(a.keyPrefix.length))}return d});return h(c,a),c}function na(a){var b=this,c=b.keys().then(function(a){return a.length});return h(c,a),c}function oa(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo;localStorage.removeItem(b.keyPrefix+a)});return h(d,b),d}function pa(a,b,c){var d=this;a=j(a);var e=d.ready().then(function(){void 0===b&&(b=null);var c=b;return new va(function(e,f){var g=d._dbInfo;g.serializer.serialize(b,function(b,d){if(d)f(d);else try{localStorage.setItem(g.keyPrefix+a,b),e(c)}catch(a){"QuotaExceededError"!==a.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==a.name||f(a),f(a)}})})});return h(e,c),e}function qa(a,b){if(b=k.apply(this,arguments),a="function"!=typeof a&&a||{},!a.name){var c=this.config();a.name=a.name||c.name,a.storeName=a.storeName||c.storeName}var d,e=this;return d=a.name?new va(function(b){b(a.storeName?ea(a,e._defaultConfig):a.name+"/")}).then(function(a){for(var b=localStorage.length-1;b>=0;b--){var c=localStorage.key(b);0===c.indexOf(a)&&localStorage.removeItem(c)}}):va.reject("Invalid arguments"),h(d,b),d}function ra(a,b){a[b]=function(){var c=arguments;return a.ready().then(function(){return a[b].apply(a,c)})}}function sa(){for(var a=1;a<arguments.length;a++){var b=arguments[a];if(b)for(var c in b)b.hasOwnProperty(c)&&($a(b[c])?arguments[0][c]=b[c].slice():arguments[0][c]=b[c])}return arguments[0]}var ta="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ua=e();"undefined"==typeof Promise&&a(3);var va=Promise,wa="local-forage-detect-blob-support",xa=void 0,ya={},za=Object.prototype.toString,Aa="readonly",Ba="readwrite",Ca={_driver:"asyncStorage",_initStorage:C,_support:f(),iterate:E,getItem:D,setItem:F,removeItem:G,clear:H,length:I,key:J,keys:K,dropInstance:L},Da="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ea="~~local_forage_type~",Fa=/^~~local_forage_type~([^~]+)~/,Ga="__lfsc__:",Ha=Ga.length,Ia="arbf",Ja="blob",Ka="si08",La="ui08",Ma="uic8",Na="si16",Oa="si32",Pa="ur16",Qa="ui32",Ra="fl32",Sa="fl64",Ta=Ha+Ia.length,Ua=Object.prototype.toString,Va={serialize:P,deserialize:Q,stringToBuffer:N,bufferToString:O},Wa={_driver:"webSQLStorage",_initStorage:S,_support:M(),iterate:V,getItem:U,setItem:X,removeItem:Y,clear:Z,length:$,key:_,keys:aa,dropInstance:ca},Xa={_driver:"localStorageWrapper",_initStorage:ha,_support:da(),iterate:ka,getItem:ja,setItem:pa,removeItem:oa,clear:ia,length:na,key:la,keys:ma,dropInstance:qa},Ya=function(a,b){return a===b||"number"==typeof a&&"number"==typeof b&&isNaN(a)&&isNaN(b)},Za=function(a,b){for(var c=a.length,d=0;d<c;){if(Ya(a[d],b))return!0;d++}return!1},$a=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},_a={},ab={},bb={INDEXEDDB:Ca,WEBSQL:Wa,LOCALSTORAGE:Xa},cb=[bb.INDEXEDDB._driver,bb.WEBSQL._driver,bb.LOCALSTORAGE._driver],db=["dropInstance"],eb=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(db),fb={description:"",driver:cb.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},gb=function(){function a(b){d(this,a);for(var c in bb)if(bb.hasOwnProperty(c)){var e=bb[c],f=e._driver;this[c]=f,_a[f]||this.defineDriver(e)}this._defaultConfig=sa({},fb),this._config=sa({},this._defaultConfig,b),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return a.prototype.config=function(a){if("object"===(void 0===a?"undefined":ta(a))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in a){if("storeName"===b&&(a[b]=a[b].replace(/\W/g,"_")),"version"===b&&"number"!=typeof a[b])return new Error("Database version must be a number.");this._config[b]=a[b]}return!("driver"in a&&a.driver)||this.setDriver(this._config.driver)}return"string"==typeof a?this._config[a]:this._config},a.prototype.defineDriver=function(a,b,c){var d=new va(function(b,c){try{var d=a._driver,e=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!a._driver)return void c(e);for(var f=eb.concat("_initStorage"),g=0,i=f.length;g<i;g++){var j=f[g];if((!Za(db,j)||a[j])&&"function"!=typeof a[j])return void c(e)}(function(){for(var b=function(a){return function(){var b=new Error("Method "+a+" is not implemented by the current driver"),c=va.reject(b);return h(c,arguments[arguments.length-1]),c}},c=0,d=db.length;c<d;c++){var e=db[c];a[e]||(a[e]=b(e))}})();var k=function(c){_a[d]&&console.info("Redefining LocalForage driver: "+d),_a[d]=a,ab[d]=c,b()};"_support"in a?a._support&&"function"==typeof a._support?a._support().then(k,c):k(!!a._support):k(!0)}catch(a){c(a)}});return i(d,b,c),d},a.prototype.driver=function(){return this._driver||null},a.prototype.getDriver=function(a,b,c){var d=_a[a]?va.resolve(_a[a]):va.reject(new Error("Driver not found."));return i(d,b,c),d},a.prototype.getSerializer=function(a){var b=va.resolve(Va);return i(b,a),b},a.prototype.ready=function(a){var b=this,c=b._driverSet.then(function(){return null===b._ready&&(b._ready=b._initDriver()),b._ready});return i(c,a,a),c},a.prototype.setDriver=function(a,b,c){function d(){g._config.driver=g.driver()}function e(a){return g._extend(a),d(),g._ready=g._initStorage(g._config),g._ready}function f(a){return function(){function b(){for(;c<a.length;){var f=a[c];return c++,g._dbInfo=null,g._ready=null,g.getDriver(f).then(e).catch(b)}d();var h=new Error("No available storage method found.");return g._driverSet=va.reject(h),g._driverSet}var c=0;return b()}}var g=this;$a(a)||(a=[a]);var h=this._getSupportedDrivers(a),j=null!==this._driverSet?this._driverSet.catch(function(){return va.resolve()}):va.resolve();return this._driverSet=j.then(function(){var a=h[0];return g._dbInfo=null,g._ready=null,g.getDriver(a).then(function(a){g._driver=a._driver,d(),g._wrapLibraryMethodsWithReady(),g._initDriver=f(h)})}).catch(function(){d();var a=new Error("No available storage method found.");return g._driverSet=va.reject(a),g._driverSet}),i(this._driverSet,b,c),this._driverSet},a.prototype.supports=function(a){return!!ab[a]},a.prototype._extend=function(a){sa(this,a)},a.prototype._getSupportedDrivers=function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];this.supports(e)&&b.push(e)}return b},a.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0,b=eb.length;a<b;a++)ra(this,eb[a])},a.prototype.createInstance=function(b){return new a(b)},a}(),hb=new gb;b.exports=hb},{3:3}]},{},[4])(4)});

//scripts/bootstrap.min.js
/*!
  * Bootstrap v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e(t.Popper)}(this,(function(t){"use strict";function e(t){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t)for(const s in t)if("default"!==s){const i=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(e,s,i.get?i:{enumerable:!0,get:()=>t[s]})}return e.default=t,Object.freeze(e)}const s=e(t),i=new Map,n={set(t,e,s){i.has(t)||i.set(t,new Map);const n=i.get(t);n.has(e)||0===n.size?n.set(e,s):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>i.has(t)&&i.get(t).get(e)||null,remove(t,e){if(!i.has(t))return;const s=i.get(t);s.delete(e),0===s.size&&i.delete(t)}},o="transitionend",r=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),a=t=>{t.dispatchEvent(new Event(o))},l=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),c=t=>l(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(r(t)):null,h=t=>{if(!l(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),s=t.closest("details:not([open])");if(!s)return e;if(s!==t){const e=t.closest("summary");if(e&&e.parentNode!==s)return!1;if(null===e)return!1}return e},d=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),u=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?u(t.parentNode):null},_=()=>{},g=t=>{t.offsetHeight},f=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,m=[],p=()=>"rtl"===document.documentElement.dir,b=t=>{var e;e=()=>{const e=f();if(e){const s=t.NAME,i=e.fn[s];e.fn[s]=t.jQueryInterface,e.fn[s].Constructor=t,e.fn[s].noConflict=()=>(e.fn[s]=i,t.jQueryInterface)}},"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of m)t()})),m.push(e)):e()},v=(t,e=[],s=t)=>"function"==typeof t?t(...e):s,y=(t,e,s=!0)=>{if(!s)return void v(t);const i=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:s}=window.getComputedStyle(t);const i=Number.parseFloat(e),n=Number.parseFloat(s);return i||n?(e=e.split(",")[0],s=s.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(s))):0})(e)+5;let n=!1;const r=({target:s})=>{s===e&&(n=!0,e.removeEventListener(o,r),v(t))};e.addEventListener(o,r),setTimeout((()=>{n||a(e)}),i)},w=(t,e,s,i)=>{const n=t.length;let o=t.indexOf(e);return-1===o?!s&&i?t[n-1]:t[0]:(o+=s?1:-1,i&&(o=(o+n)%n),t[Math.max(0,Math.min(o,n-1))])},A=/[^.]*(?=\..*)\.|.*/,E=/\..*/,C=/::\d+$/,T={};let k=1;const S={mouseenter:"mouseover",mouseleave:"mouseout"},L=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${k++}`||t.uidEvent||k++}function I(t){const e=O(t);return t.uidEvent=e,T[e]=T[e]||{},T[e]}function D(t,e,s=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===s))}function N(t,e,s){const i="string"==typeof e,n=i?s:e||s;let o=j(t);return L.has(o)||(o=t),[i,n,o]}function P(t,e,s,i,n){if("string"!=typeof e||!t)return;let[o,r,a]=N(e,s,i);if(e in S){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=I(t),c=l[a]||(l[a]={}),h=D(c,r,o?s:null);if(h)return void(h.oneOff=h.oneOff&&n);const d=O(r,e.replace(A,"")),u=o?function(t,e,s){return function i(n){const o=t.querySelectorAll(e);for(let{target:r}=n;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return $(n,{delegateTarget:r}),i.oneOff&&F.off(t,n.type,e,s),s.apply(r,[n])}}(t,s,r):function(t,e){return function s(i){return $(i,{delegateTarget:t}),s.oneOff&&F.off(t,i.type,e),e.apply(t,[i])}}(t,r);u.delegationSelector=o?s:null,u.callable=r,u.oneOff=n,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function x(t,e,s,i,n){const o=D(e[s],i,n);o&&(t.removeEventListener(s,o,Boolean(n)),delete e[s][o.uidEvent])}function M(t,e,s,i){const n=e[s]||{};for(const[o,r]of Object.entries(n))o.includes(i)&&x(t,e,s,r.callable,r.delegationSelector)}function j(t){return t=t.replace(E,""),S[t]||t}const F={on(t,e,s,i){P(t,e,s,i,!1)},one(t,e,s,i){P(t,e,s,i,!0)},off(t,e,s,i){if("string"!=typeof e||!t)return;const[n,o,r]=N(e,s,i),a=r!==e,l=I(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const s of Object.keys(l))M(t,l,s,e.slice(1));for(const[s,i]of Object.entries(c)){const n=s.replace(C,"");a&&!e.includes(n)||x(t,l,r,i.callable,i.delegationSelector)}}else{if(!Object.keys(c).length)return;x(t,l,r,o,n?s:null)}},trigger(t,e,s){if("string"!=typeof e||!t)return null;const i=f();let n=null,o=!0,r=!0,a=!1;e!==j(e)&&i&&(n=i.Event(e,s),i(t).trigger(n),o=!n.isPropagationStopped(),r=!n.isImmediatePropagationStopped(),a=n.isDefaultPrevented());const l=$(new Event(e,{bubbles:o,cancelable:!0}),s);return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&n&&n.preventDefault(),l}};function $(t,e={}){for(const[s,i]of Object.entries(e))try{t[s]=i}catch(e){Object.defineProperty(t,s,{configurable:!0,get:()=>i})}return t}function z(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function H(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const B={setDataAttribute(t,e,s){t.setAttribute(`data-bs-${H(e)}`,s)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${H(e)}`)},getDataAttributes(t){if(!t)return{};const e={},s=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const i of s){let s=i.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),e[s]=z(t.dataset[i])}return e},getDataAttribute:(t,e)=>z(t.getAttribute(`data-bs-${H(e)}`))};class q{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const s=l(e)?B.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof s?s:{},...l(e)?B.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[i,n]of Object.entries(e)){const e=t[i],o=l(e)?"element":null==(s=e)?`${s}`:Object.prototype.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(n).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${n}".`)}var s}}class W extends q{constructor(t,e){super(),(t=c(t))&&(this._element=t,this._config=this._getConfig(e),n.set(this._element,this.constructor.DATA_KEY,this))}dispose(){n.remove(this._element,this.constructor.DATA_KEY),F.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,s=!0){y(t,e,s)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return n.get(c(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.0"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const R=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let s=t.getAttribute("href");if(!s||!s.includes("#")&&!s.startsWith("."))return null;s.includes("#")&&!s.startsWith("#")&&(s=`#${s.split("#")[1]}`),e=s&&"#"!==s?s.trim():null}return r(e)},K={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const s=[];let i=t.parentNode.closest(e);for(;i;)s.push(i),i=i.parentNode.closest(e);return s},prev(t,e){let s=t.previousElementSibling;for(;s;){if(s.matches(e))return[s];s=s.previousElementSibling}return[]},next(t,e){let s=t.nextElementSibling;for(;s;){if(s.matches(e))return[s];s=s.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!d(t)&&h(t)))},getSelectorFromElement(t){const e=R(t);return e&&K.findOne(e)?e:null},getElementFromSelector(t){const e=R(t);return e?K.findOne(e):null},getMultipleElementsFromSelector(t){const e=R(t);return e?K.find(e):[]}},V=(t,e="hide")=>{const s=`click.dismiss${t.EVENT_KEY}`,i=t.NAME;F.on(document,s,`[data-bs-dismiss="${i}"]`,(function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),d(this))return;const n=K.getElementFromSelector(this)||this.closest(`.${i}`);t.getOrCreateInstance(n)[e]()}))};class Q extends W{static get NAME(){return"alert"}close(){if(F.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),F.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=Q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}V(Q,"close"),b(Q);const X='[data-bs-toggle="button"]';class Y extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Y.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}F.on(document,"click.bs.button.data-api",X,(t=>{t.preventDefault();const e=t.target.closest(X);Y.getOrCreateInstance(e).toggle()})),b(Y);const U={endCallback:null,leftCallback:null,rightCallback:null},G={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class J extends q{constructor(t,e){super(),this._element=t,t&&J.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return U}static get DefaultType(){return G}static get NAME(){return"swipe"}dispose(){F.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),v(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&v(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(F.on(this._element,"pointerdown.bs.swipe",(t=>this._start(t))),F.on(this._element,"pointerup.bs.swipe",(t=>this._end(t))),this._element.classList.add("pointer-event")):(F.on(this._element,"touchstart.bs.swipe",(t=>this._start(t))),F.on(this._element,"touchmove.bs.swipe",(t=>this._move(t))),F.on(this._element,"touchend.bs.swipe",(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Z="next",tt="prev",et="left",st="right",it="slid.bs.carousel",nt="carousel",ot="active",rt={ArrowLeft:st,ArrowRight:et},at={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},lt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ct extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=K.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===nt&&this.cycle()}static get Default(){return at}static get DefaultType(){return lt}static get NAME(){return"carousel"}next(){this._slide(Z)}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next()}prev(){this._slide(tt)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?F.one(this._element,it,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void F.one(this._element,it,(()=>this.to(t)));const s=this._getItemIndex(this._getActive());if(s===t)return;const i=t>s?Z:tt;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&F.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&(F.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),F.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&J.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of K.find(".carousel-item img",this._element))F.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(et)),rightCallback:()=>this._slide(this._directionToOrder(st)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new J(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=rt[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=K.findOne(".active",this._indicatorsElement);e.classList.remove(ot),e.removeAttribute("aria-current");const s=K.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add(ot),s.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const s=this._getActive(),i=t===Z,n=e||w(this._getItems(),s,i,this._config.wrap);if(n===s)return;const o=this._getItemIndex(n),r=e=>F.trigger(this._element,e,{relatedTarget:n,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:o});if(r("slide.bs.carousel").defaultPrevented)return;if(!s||!n)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=n;const l=i?"carousel-item-start":"carousel-item-end",c=i?"carousel-item-next":"carousel-item-prev";n.classList.add(c),g(n),s.classList.add(l),n.classList.add(l),this._queueCallback((()=>{n.classList.remove(l,c),n.classList.add(ot),s.classList.remove(ot,c,l),this._isSliding=!1,r(it)}),s,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return K.findOne(".active.carousel-item",this._element)}_getItems(){return K.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===et?tt:Z:t===et?Z:tt}_orderToDirection(t){return p()?t===tt?et:st:t===tt?st:et}static jQueryInterface(t){return this.each((function(){const e=ct.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}F.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const e=K.getElementFromSelector(this);if(!e||!e.classList.contains(nt))return;t.preventDefault();const s=ct.getOrCreateInstance(e),i=this.getAttribute("data-bs-slide-to");return i?(s.to(i),void s._maybeEnableCycle()):"next"===B.getDataAttribute(this,"slide")?(s.next(),void s._maybeEnableCycle()):(s.prev(),void s._maybeEnableCycle())})),F.on(window,"load.bs.carousel.data-api",(()=>{const t=K.find('[data-bs-ride="carousel"]');for(const e of t)ct.getOrCreateInstance(e)})),b(ct);const ht="show",dt="collapse",ut="collapsing",_t='[data-bs-toggle="collapse"]',gt={parent:null,toggle:!0},ft={parent:"(null|element)",toggle:"boolean"};class mt extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const s=K.find(_t);for(const t of s){const e=K.getSelectorFromElement(t),s=K.find(e).filter((t=>t===this._element));null!==e&&s.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return gt}static get DefaultType(){return ft}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>mt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(F.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(dt),this._element.classList.add(ut),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ut),this._element.classList.add(dt,ht),this._element.style[e]="",F.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[e]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(F.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,g(this._element),this._element.classList.add(ut),this._element.classList.remove(dt,ht);for(const t of this._triggerArray){const e=K.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ut),this._element.classList.add(dt),F.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(ht)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=c(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(_t);for(const e of t){const t=K.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=K.find(":scope .collapse .collapse",this._config.parent);return K.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const s of t)s.classList.toggle("collapsed",!e),s.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const s=mt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===s[t])throw new TypeError(`No method named "${t}"`);s[t]()}}))}}F.on(document,"click.bs.collapse.data-api",_t,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of K.getMultipleElementsFromSelector(this))mt.getOrCreateInstance(t,{toggle:!1}).toggle()})),b(mt);const pt="dropdown",bt="ArrowUp",vt="ArrowDown",yt="click.bs.dropdown.data-api",wt="keydown.bs.dropdown.data-api",At="show",Et='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ct=`${Et}.show`,Tt=".dropdown-menu",kt=p()?"top-end":"top-start",St=p()?"top-start":"top-end",Lt=p()?"bottom-end":"bottom-start",Ot=p()?"bottom-start":"bottom-end",It=p()?"left-start":"right-start",Dt=p()?"right-start":"left-start",Nt={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Pt={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class xt extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=K.next(this._element,Tt)[0]||K.prev(this._element,Tt)[0]||K.findOne(Tt,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Nt}static get DefaultType(){return Pt}static get NAME(){return pt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(d(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!F.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))F.on(t,"mouseover",_);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(At),this._element.classList.add(At),F.trigger(this._element,"shown.bs.dropdown",t)}}hide(){if(d(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!F.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))F.off(t,"mouseover",_);this._popper&&this._popper.destroy(),this._menu.classList.remove(At),this._element.classList.remove(At),this._element.setAttribute("aria-expanded","false"),B.removeDataAttribute(this._menu,"popper"),F.trigger(this._element,"hidden.bs.dropdown",t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!l(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${pt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===s)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:l(this._config.reference)?t=c(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=s.createPopper(t,this._menu,e)}_isShown(){return this._menu.classList.contains(At)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return It;if(t.classList.contains("dropstart"))return Dt;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?St:kt:e?Ot:Lt}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(B.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...v(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const s=K.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>h(t)));s.length&&w(s,e,t===vt,!s.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=xt.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=K.find(Ct);for(const s of e){const e=xt.getInstance(s);if(!e||!1===e._config.autoClose)continue;const i=t.composedPath(),n=i.includes(e._menu);if(i.includes(e._element)||"inside"===e._config.autoClose&&!n||"outside"===e._config.autoClose&&n)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),s="Escape"===t.key,i=[bt,vt].includes(t.key);if(!i&&!s)return;if(e&&!s)return;t.preventDefault();const n=this.matches(Et)?this:K.prev(this,Et)[0]||K.next(this,Et)[0]||K.findOne(Et,t.delegateTarget.parentNode),o=xt.getOrCreateInstance(n);if(i)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),n.focus())}}F.on(document,wt,Et,xt.dataApiKeydownHandler),F.on(document,wt,Tt,xt.dataApiKeydownHandler),F.on(document,yt,xt.clearMenus),F.on(document,"keyup.bs.dropdown.data-api",xt.clearMenus),F.on(document,yt,Et,(function(t){t.preventDefault(),xt.getOrCreateInstance(this).toggle()})),b(xt);const Mt="show",jt="mousedown.bs.backdrop",Ft={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},$t={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class zt extends q{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Ft}static get DefaultType(){return $t}static get NAME(){return"backdrop"}show(t){if(!this._config.isVisible)return void v(t);this._append();const e=this._getElement();this._config.isAnimated&&g(e),e.classList.add(Mt),this._emulateAnimation((()=>{v(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(Mt),this._emulateAnimation((()=>{this.dispose(),v(t)}))):v(t)}dispose(){this._isAppended&&(F.off(this._element,jt),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=c(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),F.on(t,jt,(()=>{v(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){y(t,this._getElement(),this._config.isAnimated)}}const Ht=".bs.focustrap",Bt="backward",qt={autofocus:!0,trapElement:null},Wt={autofocus:"boolean",trapElement:"element"};class Rt extends q{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return qt}static get DefaultType(){return Wt}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),F.off(document,Ht),F.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),F.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,F.off(document,Ht))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const s=K.focusableChildren(e);0===s.length?e.focus():this._lastTabNavDirection===Bt?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?Bt:"forward")}}const Kt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Vt=".sticky-top",Qt="padding-right",Xt="margin-right";class Yt{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Qt,(e=>e+t)),this._setElementAttributes(Kt,Qt,(e=>e+t)),this._setElementAttributes(Vt,Xt,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Qt),this._resetElementAttributes(Kt,Qt),this._resetElementAttributes(Vt,Xt)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,s){const i=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+i)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${s(Number.parseFloat(n))}px`)}))}_saveInitialAttribute(t,e){const s=t.style.getPropertyValue(e);s&&B.setDataAttribute(t,e,s)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const s=B.getDataAttribute(t,e);null!==s?(B.removeDataAttribute(t,e),t.style.setProperty(e,s)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(l(t))e(t);else for(const s of K.find(t,this._element))e(s)}}const Ut=".bs.modal",Gt="hidden.bs.modal",Jt="show.bs.modal",Zt="modal-open",te="show",ee="modal-static",se={backdrop:!0,focus:!0,keyboard:!0},ie={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ne extends W{constructor(t,e){super(t,e),this._dialog=K.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Yt,this._addEventListeners()}static get Default(){return se}static get DefaultType(){return ie}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||F.trigger(this._element,Jt,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Zt),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(F.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(te),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){F.off(window,Ut),F.off(this._dialog,Ut),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new zt({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Rt({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=K.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),g(this._element),this._element.classList.add(te),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,F.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){F.on(this._element,"keydown.dismiss.bs.modal",(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),F.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),F.on(this._element,"mousedown.dismiss.bs.modal",(t=>{F.one(this._element,"click.dismiss.bs.modal",(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Zt),this._resetAdjustments(),this._scrollBar.reset(),F.trigger(this._element,Gt)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(F.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(ee)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ee),this._queueCallback((()=>{this._element.classList.remove(ee),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),s=e>0;if(s&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!s&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const s=ne.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===s[t])throw new TypeError(`No method named "${t}"`);s[t](e)}}))}}F.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=K.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),F.one(e,Jt,(t=>{t.defaultPrevented||F.one(e,Gt,(()=>{h(this)&&this.focus()}))}));const s=K.findOne(".modal.show");s&&ne.getInstance(s).hide(),ne.getOrCreateInstance(e).toggle(this)})),V(ne),b(ne);const oe="show",re="showing",ae="hiding",le=".offcanvas.show",ce="hidePrevented.bs.offcanvas",he="hidden.bs.offcanvas",de={backdrop:!0,keyboard:!0,scroll:!1},ue={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class _e extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return de}static get DefaultType(){return ue}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||F.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new Yt).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(re),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(oe),this._element.classList.remove(re),F.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(F.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ae),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(oe,ae),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new Yt).reset(),F.trigger(this._element,he)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new zt({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():F.trigger(this._element,ce)}:null})}_initializeFocusTrap(){return new Rt({trapElement:this._element})}_addEventListeners(){F.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():F.trigger(this._element,ce))}))}static jQueryInterface(t){return this.each((function(){const e=_e.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}F.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=K.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this))return;F.one(e,he,(()=>{h(this)&&this.focus()}));const s=K.findOne(le);s&&s!==e&&_e.getInstance(s).hide(),_e.getOrCreateInstance(e).toggle(this)})),F.on(window,"load.bs.offcanvas.data-api",(()=>{for(const t of K.find(le))_e.getOrCreateInstance(t).show()})),F.on(window,"resize.bs.offcanvas",(()=>{for(const t of K.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&_e.getOrCreateInstance(t).hide()})),V(_e),b(_e);const ge={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},fe=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),me=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,pe=(t,e)=>{const s=t.nodeName.toLowerCase();return e.includes(s)?!fe.has(s)||Boolean(me.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(s)))},be={allowList:ge,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},ve={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},ye={entry:"(string|element|function|null)",selector:"(string|element)"};class we extends q{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return be}static get DefaultType(){return ve}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,s]of Object.entries(this._config.content))this._setContent(t,s,e);const e=t.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&e.classList.add(...s.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,s]of Object.entries(t))super._typeCheckConfig({selector:e,entry:s},ye)}_setContent(t,e,s){const i=K.findOne(s,t);i&&((e=this._resolvePossibleFunction(e))?l(e)?this._putElementInTemplate(c(e),i):this._config.html?i.innerHTML=this._maybeSanitize(e):i.textContent=e:i.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,s){if(!t.length)return t;if(s&&"function"==typeof s)return s(t);const i=(new window.DOMParser).parseFromString(t,"text/html"),n=[].concat(...i.body.querySelectorAll("*"));for(const t of n){const s=t.nodeName.toLowerCase();if(!Object.keys(e).includes(s)){t.remove();continue}const i=[].concat(...t.attributes),n=[].concat(e["*"]||[],e[s]||[]);for(const e of i)pe(e,n)||t.removeAttribute(e.nodeName)}return i.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return v(t,[this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Ae=new Set(["sanitize","allowList","sanitizeFn"]),Ee="fade",Ce="show",Te=".modal",ke="hide.bs.modal",Se="hover",Le="focus",Oe={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},Ie={allowList:ge,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},De={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ne extends W{constructor(t,e){if(void 0===s)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Ie}static get DefaultType(){return De}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),F.off(this._element.closest(Te),ke,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=F.trigger(this._element,this.constructor.eventName("show")),e=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(s),F.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(s),s.classList.add(Ce),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))F.on(t,"mouseover",_);this._queueCallback((()=>{F.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!F.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Ce),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))F.off(t,"mouseover",_);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),F.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Ee,Ce),e.classList.add(`bs-${this.constructor.NAME}-auto`);const s=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",s),this._isAnimated()&&e.classList.add(Ee),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new we({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ee)}_isShown(){return this.tip&&this.tip.classList.contains(Ce)}_createPopper(t){const e=v(this._config.placement,[this,t,this._element]),i=Oe[e.toUpperCase()];return s.createPopper(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return v(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,...v(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)F.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===Se?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),s=e===Se?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");F.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?Le:Se]=!0,e._enter()})),F.on(this._element,s,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?Le:Se]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},F.on(this._element.closest(Te),ke,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=B.getDataAttributes(this._element);for(const t of Object.keys(e))Ae.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:c(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,s]of Object.entries(this._config))this.constructor.Default[e]!==s&&(t[e]=s);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=Ne.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}b(Ne);const Pe={...Ne.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},xe={...Ne.DefaultType,content:"(null|string|element|function)"};class Me extends Ne{static get Default(){return Pe}static get DefaultType(){return xe}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=Me.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}b(Me);const je="click.bs.scrollspy",Fe="active",$e="[href]",ze={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},He={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Be extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return ze}static get DefaultType(){return He}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=c(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(F.off(this._config.target,je),F.on(this._config.target,je,$e,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const s=this._rootElement||window,i=e.offsetTop-this._element.offsetTop;if(s.scrollTo)return void s.scrollTo({top:i,behavior:"smooth"});s.scrollTop=i}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),s=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},i=(this._rootElement||document.documentElement).scrollTop,n=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(n&&t){if(s(o),!i)return}else n||t||s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=K.find($e,this._config.target);for(const e of t){if(!e.hash||d(e))continue;const t=K.findOne(decodeURI(e.hash),this._element);h(t)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Fe),this._activateParents(t),F.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))K.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(Fe);else for(const e of K.parents(t,".nav, .list-group"))for(const t of K.prev(e,".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(Fe)}_clearActiveClass(t){t.classList.remove(Fe);const e=K.find("[href].active",t);for(const t of e)t.classList.remove(Fe)}static jQueryInterface(t){return this.each((function(){const e=Be.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}F.on(window,"load.bs.scrollspy.data-api",(()=>{for(const t of K.find('[data-bs-spy="scroll"]'))Be.getOrCreateInstance(t)})),b(Be);const qe="ArrowLeft",We="ArrowRight",Re="ArrowUp",Ke="ArrowDown",Ve="active",Qe="fade",Xe="show",Ye='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ue=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Ye}`;class Ge extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),F.on(this._element,"keydown.bs.tab",(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),s=e?F.trigger(e,"hide.bs.tab",{relatedTarget:t}):null;F.trigger(t,"show.bs.tab",{relatedTarget:e}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(Ve),this._activate(K.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),F.trigger(t,"shown.bs.tab",{relatedTarget:e})):t.classList.add(Xe)}),t,t.classList.contains(Qe)))}_deactivate(t,e){t&&(t.classList.remove(Ve),t.blur(),this._deactivate(K.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),F.trigger(t,"hidden.bs.tab",{relatedTarget:e})):t.classList.remove(Xe)}),t,t.classList.contains(Qe)))}_keydown(t){if(![qe,We,Re,Ke].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[We,Ke].includes(t.key),s=w(this._getChildren().filter((t=>!d(t))),t.target,e,!0);s&&(s.focus({preventScroll:!0}),Ge.getOrCreateInstance(s).show())}_getChildren(){return K.find(Ue,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute("aria-selected",e),s!==t&&this._setAttributeIfNotExists(s,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=K.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const s=this._getOuterElement(t);if(!s.classList.contains("dropdown"))return;const i=(t,i)=>{const n=K.findOne(t,s);n&&n.classList.toggle(i,e)};i(".dropdown-toggle",Ve),i(".dropdown-menu",Xe),s.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,s){t.hasAttribute(e)||t.setAttribute(e,s)}_elemIsActive(t){return t.classList.contains(Ve)}_getInnerElement(t){return t.matches(Ue)?t:K.findOne(Ue,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=Ge.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}F.on(document,"click.bs.tab",Ye,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this)||Ge.getOrCreateInstance(this).show()})),F.on(window,"load.bs.tab",(()=>{for(const t of K.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))Ge.getOrCreateInstance(t)})),b(Ge);const Je="hide",Ze="show",ts="showing",es={animation:"boolean",autohide:"boolean",delay:"number"},ss={animation:!0,autohide:!0,delay:5e3};class is extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ss}static get DefaultType(){return es}static get NAME(){return"toast"}show(){F.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Je),g(this._element),this._element.classList.add(Ze,ts),this._queueCallback((()=>{this._element.classList.remove(ts),F.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(F.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(ts),this._queueCallback((()=>{this._element.classList.add(Je),this._element.classList.remove(ts,Ze),F.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ze),super.dispose()}isShown(){return this._element.classList.contains(Ze)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){F.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),F.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),F.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),F.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=is.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return V(is),b(is),{Alert:Q,Button:Y,Carousel:ct,Collapse:mt,Dropdown:xt,Modal:ne,Offcanvas:_e,Popover:Me,ScrollSpy:Be,Tab:Ge,Toast:is,Tooltip:Ne}}));
//# sourceMappingURL=bootstrap.min.js.map

//scripts/crypto.js
class crypt
{constructor()
{this.crypto_digest="SHA-512";};bufToB64(buf)
{return btoa(Array.prototype.map.call(buf,ch=>String.fromCharCode(ch)).join(""));};b64ToBuf(b64)
{const binstr=atob(b64),buf=new Uint8Array(binstr.length);Array.prototype.forEach.call(binstr,(ch,i)=>{buf[i]=ch.charCodeAt(0);});return buf;};gen_pass(n,is_symb)
{if(n<20||n>400)
{n=60;}
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
{var uuid=self.crypto.randomUUID();var time_stamp=Date.now();that.t_item.setItem(uuid,{"id_group":id_group,"name":name,"descr":descr,"hide_data":hide_data,"time_stamp":time_stamp}).then(function(value)
{resolve(uuid);}).catch(function(err){resolve(1);});}
else
{resolve(1);}});return promise;};item_upd(id,id_group,name,descr,hide_data)
{var that=this;let promise=new Promise(function(resolve,reject)
{if(id!==""&&id!==undefined&&id_group!==""&&id_group!==undefined&&name!==""&&name!==undefined&&descr!==""&&descr!==undefined&&hide_data!==""&&hide_data!==undefined)
{var time_stamp=Date.now();that.t_item.setItem(id,{"id_group":id_group,"name":name,"descr":descr,"hide_data":hide_data,"time_stamp":time_stamp}).then(function(value)
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
{var res_arr=[];that.t_item.iterate(function(value,key,iterationNumber)
{if("id_group"in value)
{if(value["id_group"]==id_group)
{res_arr.push({"id":key,"name":value["name"],"descr":value["descr"],"id_group":value["id_group"]});}}}).then(function()
{res_arr.sort(function(a,b)
{return a.name.localeCompare(b.name);});resolve(res_arr);}).catch(function(err){resolve(1);});});return promise;};item_del_by_group(id_group)
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
{res_arr.push({"id":key,"name":value["name"],"descr":value["descr"],"hide_data":value["hide_data"],"id_group":value["id_group"]});}).then(function()
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
{is_find=true;return;}}).then(function(){resolve(is_find);}).catch(function(err){resolve(1);});});return promise;};conf_init(m_pass)
{var that=this;let promise=new Promise(function(res,rej)
{that.t_conf.getItem("1").then(function(value)
{if(value===undefined||value===null)
{that.t_conf.setItem("1",{"m_pass":m_pass,"idle_time":15,"items_show_groups":true,"files_show_groups":true}).then(function(value)
{res(0);}).catch(function(err){rej(1);});}}).catch(function(err){rej(1);});});return promise;};conf_change_m_pass(m_pass)
{var that=this;let promise=new Promise(function(resolve,reject)
{that.t_conf.getItem("1").then(function(value)
{that.t_conf.setItem("1",{"m_pass":m_pass,"idle_time":value["idle_time"],"items_show_groups":value["items_show_groups"],"files_show_groups":value["files_show_groups"]}).then(function(value)
{resolve(0);}).catch(function(err){resolve(1);});}).catch(function(err){resolve(1);});});return promise;};conf_change_idle_time(idle_time)
{var that=this;let promise=new Promise(function(resolve,reject)
{that.t_conf.getItem("1").then(function(value)
{that.t_conf.setItem("1",{"m_pass":value["m_pass"],"idle_time":idle_time,"items_show_groups":value["items_show_groups"],"files_show_groups":value["files_show_groups"]}).then(function(value)
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
{that.t_conf.setItem("1",{"m_pass":value["m_pass"],"idle_time":value["idle_time"],"items_show_groups":items_show_groups,"files_show_groups":value["files_show_groups"]}).then(function(value)
{resolve(0);}).catch(function(err){resolve(1);});}).catch(function(err){resolve(1);});});return promise;};conf_set_files_show_groups(files_show_groups)
{var that=this;let promise=new Promise(function(resolve,reject)
{that.t_conf.getItem("1").then(function(value)
{that.t_conf.setItem("1",{"m_pass":value["m_pass"],"idle_time":value["idle_time"],"items_show_groups":value["items_show_groups"],"files_show_groups":files_show_groups}).then(function(value)
{resolve(0);}).catch(function(err){resolve(1);});}).catch(function(err){resolve(1);});});return promise;};conf_get_items_show_groups()
{var that=this;let promise=new Promise(function(resolve,reject)
{that.t_conf.getItem("1").then(function(value)
{resolve(value["items_show_groups"]);}).catch(function(err){resolve(1);});});return promise;};conf_get_files_show_groups()
{var that=this;let promise=new Promise(function(resolve,reject)
{that.t_conf.getItem("1").then(function(value)
{resolve(value["files_show_groups"]);}).catch(function(err){resolve(1);});});return promise;};file_add(id_group,name,ext,body)
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
{res_arr.sort(function(a,b)
{return a.name.localeCompare(b.name);});resolve(res_arr);}).catch(function(err){resolve(1);});});return promise;};file_get_all()
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
var __db=null;var __crypt=null;var __cur_blob=null;var __m_pass=null;var __cur_item_type=1;var __is_edit_item_group=false;var __is_edit_item=false;var __cur_id_item_group="";var __cur_id_item="";var __imp_file_data="";var __cur_id_file_group="";var __cur_id_file="";var idle_timer;var idle_events=["load","mousemove","mousedown","touchstart","click","keydown","scroll"];var __idle_time=10;var __back_count_app_exit=0;var __back_timeout=null;var __id_page=0;function read_file(files)
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
{__cur_blob=null;__m_pass=null;__cur_item_type=1;__is_edit_item_group=false;__is_edit_item=false;__cur_id_item_group="";__cur_id_item="";__imp_file_data="";__cur_id_file_group="";__cur_id_file="";__back_count_app_exit=0;var obj=bootstrap.Offcanvas.getInstance(document.getElementById("ui_main_menu"))
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
{document.getElementById("ui_item_name").value=item["name"];document.getElementById("ui_item_descr").value=item["descr"];document.getElementById("ui_item_login").value=hide_data["login"];document.getElementById("ui_item_pass").value=hide_data["pass"];document.getElementById("ui_item_info").value=hide_data["info"];document.getElementById("ui_item_group").value=item["id_group"];ui_preload(false);}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при получении данных записи! (1)");}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при получении данных записи! (2)");}}};async function item_get_all(id_group)
{var count=0;ui_preload(true);var res=await __db.item_get_type_all(id_group)
if(res!==1)
{document.getElementById("ui_list_items").innerHTML="";for(var i=0;i<res.length;i++)
{document.getElementById("ui_list_items").insertAdjacentHTML('beforeend',ui_item_create(res[i]["id"],res[i]["name"],res[i]["descr"]));}
count=res.length;ui_preload(false);}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при получении записей!");}
return count;};async function item_upd(id,id_group,name,descr,login,pass,info)
{if(id!==null&&id!==undefined&&id_group!==null&&id_group!==undefined&&id_group.trim()!==""&&name!==null&&name!==undefined&&name.trim()!==""&&descr!==null&&descr!==undefined&&descr.trim()!==""&&login!==null&&login!==undefined&&login.trim()!==""&&pass!==null&&pass!==undefined&&pass.trim()!==""&&info!==null&&info!==undefined&&info.trim()!=="")
{ui_preload(true);var hide_data=JSON.stringify({"login":login,"pass":pass,"info":info});var hide_data_enc=await __crypt.encrypt_text(__m_pass,hide_data);if(hide_data_enc!==1)
{var res=await __db.item_upd(id,id_group,name,descr,hide_data_enc);if(res!==1)
{var r=await ui_main_init(false);ui_item_list_update(id,name,descr);ui_preload(false);show_toast("Запись успешно обновлена");}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при обновлении записи!(1)");}}
else
{ui_preload(false);show_msg("Сообщение","Произошла ошибка при обновлении записи! (2)");}}
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
{ui_preload(false);ui_item_group_vew(op,res);}
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
{var r=await ui_files_init(false);ui_files_list_add(res1,name,ext);ui_preload(false);show_toast("Файл успешно добавлен");__cur_blob=null;}
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
{document.getElementById("ui_list_files").insertAdjacentHTML('beforeend',ui_file_create(res[i]["id"],res[i]["name"],res[i]["ext"]));}
count=res.length;ui_preload(false);}
else
{show_msg("Сообщение","Произошла ошибка при получении файлов!");ui_preload(false);}
return count;};async function file_del(id)
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
{res=await __db.item_upd(items[i]["id"],items[i]["id_group"],items[i]["name"],items[i]["descr"],hide_data_enc);if(res===1)
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
{res=await __db.item_upd(items[i]["id"],items[i]["id_group"],items[i]["name"],items[i]["descr"],hide_data_enc);if(res!==1)
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
{res=await __db.item_upd(items[i]["id"],items[i]["id_group"],items[i]["name"],items[i]["descr"],hide_data_enc);if(res===1)
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
{res=await __db.item_upd(items[i]["id"],items[i]["id_group"],items[i]["name"],items[i]["descr"],hide_data_enc);if(res!==1)
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
{window.history.pushState(null,null,window.location.href);if(res_conf_init==2)
{show_msg("Сообщение","При первом входе рекомендуется сменить мастер-пароль!");}
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
{}};window.addEventListener('load',async()=>{const registration=await navigator.serviceWorker.register("sw.js",{scope:'/skyguardian/'})
if(registration.waiting)
{var r=await update_app(registration);}
registration.addEventListener("updatefound",()=>{if(registration.installing){registration.installing.addEventListener("statechange",()=>{if(registration.waiting){if(navigator.serviceWorker.controller){update_app(registration)}else{}}})}});var refreshing=false;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!refreshing){window.location.reload()
refreshing=true}});ui_init();});

//scripts/ui.js
function ui_copy_text(val)
{if(val.trim()!==""&&val!=null&&val!==undefined)
{navigator.permissions.query({name:"clipboard-write"}).then(result=>{if(result.state=="granted"||result.state=="prompt")
{navigator.clipboard.writeText(val).then(function()
{show_toast("Данные успешно скопированы");},function()
{show_msg("Сообщение","Произошла ошибка при доступе к буферу обмена!");});}});}};function ui_clear(op)
{if(op==1)
{document.getElementById("ui_item_groups").disabled=false;document.getElementById("ui_item_group_type").disabled=false;document.getElementById("ui_item_group_name").value=null;document.getElementById("ui_item_group_color").value="#00CC22";document.getElementById("ui_item_group_add").disabled=false;document.getElementById("ui_item_group_edit").disabled=false;document.getElementById("ui_item_group_save").disabled=true;document.getElementById("ui_item_group_del").disabled=true;document.getElementById("ui_item_group_cancel").disabled=true;document.getElementById("ui_item_group_name").disabled=true;document.getElementById("ui_item_group_color").disabled=true;__is_edit_item_group=false;}
else if(op==2)
{document.getElementById("ui_item_name").value="";document.getElementById("ui_item_descr").value="-";document.getElementById("ui_item_login").value="";document.getElementById("ui_item_pass").value="";document.getElementById("ui_item_info").value="-";document.getElementById("ui_item_edit_button").disabled=true;document.getElementById("ui_item_save_button").disabled=false;document.getElementById("ui_item_del_button").disabled=true;document.getElementById("ui_item_cancel_button").disabled=true;document.getElementById("ui_item_name").disabled=false;document.getElementById("ui_item_descr").disabled=false;document.getElementById("ui_item_login").disabled=false;document.getElementById("ui_item_pass").disabled=false;document.getElementById("ui_item_info").disabled=false;document.getElementById("ui_item_group").disabled=true;__is_edit_item=false;__cur_id_item="";}
else if(op==3)
{document.getElementById("ui_file_name").innerHTML="Имя файла: не выбран";document.getElementById("ui_add_file_selector").value="";document.getElementById("ui_item_save_button").disabled=false;document.getElementById("ui_item_del_button").disabled=false;document.getElementById("ui_add_file_button").disabled=false;__is_edit_item=false;__cur_id_item="";}
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
{document.getElementById("ui_item_edit_button").disabled=false;document.getElementById("ui_item_save_button").disabled=true;document.getElementById("ui_item_del_button").disabled=true;document.getElementById("ui_item_cancel_button").disabled=true;document.getElementById("ui_item_name").disabled=true;document.getElementById("ui_item_descr").disabled=true;document.getElementById("ui_item_login").disabled=true;document.getElementById("ui_item_pass").disabled=true;document.getElementById("ui_item_info").disabled=true;document.getElementById("ui_item_group").disabled=true;}};function ui_calc_size()
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
{document.getElementById("ui_div_cont_item_work_form").scroll({top:0,behavior:'smooth'});}
__id_page=3;ui_tooltip_hide_all();ui_tooltip_init();}};async function on_click_file(e)
{e.preventDefault();__cur_id_file=e.target.getAttribute("id_item");if(__cur_id_file!==undefined&&__cur_id_file!==null)
{var res=await file_get(__cur_id_file);document.getElementById("ui_div_cont_file_work").classList.remove("d-none");document.getElementById("ui_div_cont_file").classList.add("d-none");document.getElementById("ui_main_return_div").classList.remove("d-none");document.getElementById("ui_main_menu_div").classList.add("d-none");document.getElementById("ui_float_action_button").classList.add("d-none");document.getElementById("ui_float_groups_button").classList.add("d-none");document.getElementById("ui_file_work_header").classList.remove("d-none");var obj=bootstrap.Offcanvas.getInstance(document.getElementById("ui_main_menu"))
if(obj!==undefined&&obj!==null)
{obj.hide();}
obj=null;document.getElementById("ui_add_file_selector").value="";document.getElementById("ui_add_file_button").disabled=true;document.getElementById("ui_file_save_button").disabled=true;document.getElementById("ui_file_del_button").disabled=false;document.getElementById("ui_get_file_button").disabled=false;document.getElementById("ui_div_search_cont").classList.add("d-none");document.getElementById("ui_file_group").disabled=true;document.getElementById("ui_file_group").value=__cur_id_file_group;ui_calc_size();__id_page=4;ui_tooltip_hide_all();ui_tooltip_init();}};function ui_item_group_create(id,name,color)
{var el_text="<li class=\"nav-item\">"+
"<a class=\"ui_item_group_menu_el nav-link d-flex\" style=\"color:"+color+";\" id_group=\""+id+"\">"+
"<span class=\"w-100\" style=\"padding-right: 10px;\" onclick=\"on_click_item_group(event)\" id_group=\""+id+"\">"+name+"</span>"+
"<span class=\"ui_item_group_menu_el_badge badge bg-light justify-content-end\" style=\"color:black;\"></span>"+
"</a>"+
"</li>";return el_text;};function ui_file_group_create(id,name,color)
{var el_text="<li class=\"nav-item\">"+
"<a class=\"ui_file_group_menu_el nav-link d-flex\" style=\"color:"+color+";\" id_group=\""+id+"\">"+
"<span class=\"w-100\" style=\"padding-right: 10px;\" onclick=\"on_click_file_group(event)\" id_group=\""+id+"\">"+name+"</span>"+
"<span class=\"badge ui_file_group_menu_el_badge bg-light justify-content-end\" style=\"color:black;\"></span>"+
"</a>"+
"</li>";return el_text;};function ui_group_select_create(id,name,color)
{var el_text="<option value=\""+id+"\" color=\""+color+"\" group_name=\""+name+"\">"+name+"</option>";return el_text;};function ui_item_create(id,name,descr)
{var el_text="<div id_item=\""+id+"\" item_name=\""+name+"\"  item_descr=\""+descr+"\" class=\"ui_list_item\" class=\"col\" onclick=\"on_click_item(event)\">"+
"<div id_item=\""+id+"\" class=\"card\">"+
"<div id_item=\""+id+"\" class=\"card-body\">"+
"<h6 id_item=\""+id+"\" class=\"ui_list_item_name card-title\">"+name+"</h6>"+
"<p id_item=\""+id+"\" class=\"card-text\"><small class=\"ui_list_item_descr text-muted\">"+descr+"</small></p></div></div></div>";return el_text;};function ui_file_create(id,name,type)
{var el_text="<div id_item=\""+id+"\" item_name=\""+name+"\" class=\"ui_files_list_item\" class=\"col\" onclick=\"on_click_file(event)\">"+
"<div id_item=\""+id+"\" class=\"card\" style=\"min-height: 150px;\">"+
"<div id_item=\""+id+"\" class=\"card-body\">"+
"<h6 id_item=\""+id+"\" class=\"ui_files_list_item_name card-title\">"+name+"</h6>"+
"<p id_item=\""+id+"\" class=\"card-text\"><small class=\"ui_files_list_item_type text-muted\">"+type+"</small></p></div></div></div>";return el_text;};function ui_item_group_vew(op,arr)
{if(op==1)
{document.getElementById("ui_item_group_menu").innerHTML="";for(var i=0;i<arr.length;i++)
{document.getElementById("ui_item_group_menu").insertAdjacentHTML('beforeend',ui_item_group_create(arr[i]["id"],arr[i]["name"],arr[i]["color"]));}}
else if(op==2)
{document.getElementById("ui_item_groups").innerHTML="";for(var i=0;i<arr.length;i++)
{document.getElementById("ui_item_groups").insertAdjacentHTML('beforeend',ui_group_select_create(arr[i]["id"],arr[i]["name"],arr[i]["color"]));}}
else if(op==3)
{document.getElementById("ui_item_group").innerHTML="";for(var i=0;i<arr.length;i++)
{document.getElementById("ui_item_group").insertAdjacentHTML('beforeend',ui_group_select_create(arr[i]["id"],arr[i]["name"],arr[i]["color"]));}}
else if(op==4)
{document.getElementById("ui_file_group_menu").innerHTML="";for(var i=0;i<arr.length;i++)
{document.getElementById("ui_file_group_menu").insertAdjacentHTML('beforeend',ui_file_group_create(arr[i]["id"],arr[i]["name"],arr[i]["color"]));}}
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
if(__cur_id_item_group!==""&&__cur_id_item_group!==undefined&&__cur_id_item_group!==null)
{}
else
{if(document.getElementsByClassName("ui_item_group_menu_el").length>0)
{if(document.getElementsByClassName("ui_item_group_menu_el")[0].childNodes.length>0)
{document.getElementsByClassName("ui_item_group_menu_el")[0].childNodes[0].click();}}}
}
obj=document.querySelector(".ui_main_menu_list_elem.active");if((obj!==null)&&(obj!==undefined))
{obj.classList.remove("active");}
document.getElementById("ui_item_list_button").classList.add("active");obj=null;ui_clear(1);ui_clear(2);ui_calc_size();ui_float_groups_button_init();__id_page=1;f_show_hide_no_data(false);ui_tooltip_hide_all();ui_tooltip_init();};function show_msg(title,text,is_large)
{if(is_large==true)
{document.querySelector("#ui_msg_div").classList.add("modal-lg");document.querySelector("#ui_msg_text").style="min-height: 200px;word-wrap: break-word;width: inherit";}
else
{document.querySelector("#ui_msg_div").classList.remove("modal-lg");document.querySelector("#ui_msg_text").style="";};document.querySelector("#ui_msg_title").innerHTML=title;document.querySelector("#ui_msg_text").innerHTML=text;var msg=new bootstrap.Modal(document.getElementById("ui_msg"),{keyboard:false});msg.show();};async function show_msg_res(title,text,is_question)
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
{ui_clear(7);var mdl=new bootstrap.Modal(document.getElementById("ui_export_data"),{keyboard:false,backdrop:"static"});mdl.show();};function ui_modal_import_data()
{ui_clear(6);var mdl=new bootstrap.Modal(document.getElementById("ui_import_data"),{keyboard:false,backdrop:"static"});mdl.show();};function ui_preload(is_show)
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
if(__cur_id_file_group!==""&&__cur_id_file_group!==undefined&&__cur_id_file_group!==null)
{}
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
{el_main.setAttribute("item_name",name);el_main.setAttribute("item_descr",descr);el_main.querySelector(".ui_list_item_name").innerText=name;el_main.querySelector(".ui_list_item_descr").innerText=descr;ui_list_sort();}}};function ui_item_list_add(id,name,descr)
{if(id!==""&&id!==undefined&&id!==null&&name!==""&&name!==undefined&&name!==null&&descr!==""&&descr!==undefined&&descr!==null)
{document.getElementById("ui_list_items").insertAdjacentHTML("beforeend",ui_item_create(id,name,descr));ui_list_sort();}};function ui_files_list_add(id,name,type)
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
{return a.getAttribute("item_name").localeCompare(b.getAttribute("item_name"));});div.innerHTML="";paraArr.forEach(function(p){div.appendChild(p);});paraArr=null;};function ui_calc_position()
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
ui_calc_size();ui_calc_position();}
function ui_init()
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
{var res=await item_upd(__cur_id_item,document.getElementById("ui_item_group").value,document.getElementById("ui_item_name").value.trim(),document.getElementById("ui_item_descr").value.trim(),document.getElementById("ui_item_login").value.trim(),document.getElementById("ui_item_pass").value.trim(),document.getElementById("ui_item_info").value.trim());};};document.getElementById("ui_file_save_button").onclick=async function(e)
{e.preventDefault();file_add(document.getElementById("ui_file_group").value);};document.getElementById("ui_item_cancel_button").onclick=function(e)
{e.preventDefault();ui_clear(8);};document.getElementById("ui_item_edit_button").onclick=function(e)
{e.preventDefault();document.getElementById("ui_item_name").disabled=false;document.getElementById("ui_item_descr").disabled=false;document.getElementById("ui_item_login").disabled=false;document.getElementById("ui_item_pass").disabled=false;document.getElementById("ui_item_info").disabled=false;document.getElementById("ui_item_group").disabled=false;document.getElementById("ui_item_edit_button").disabled=true;document.getElementById("ui_item_save_button").disabled=false;document.getElementById("ui_item_del_button").disabled=false;document.getElementById("ui_item_cancel_button").disabled=false;__is_edit_item=true;};document.getElementById("ui_item_del_button").onclick=async function(e)
{e.preventDefault();var r=await show_msg_res("Записи","Вы действительно хотите удалить запись?",true);if(r)
{var res=await item_del(__cur_id_item);ui_list_element_delete(__cur_id_item);ui_main_init(false);}};document.getElementById("ui_file_del_button").onclick=async function(e)
{e.preventDefault();var r=await show_msg_res("Файлы","Вы действительно хотите удалить файл?",true);if(r)
{var res=await file_del(__cur_id_file);ui_list_element_delete(__cur_id_file);ui_files_init(false);}};document.getElementById("ui_copy_login_button").onclick=async function(e)
{e.preventDefault();ui_copy_text(document.getElementById("ui_item_login").value);document.getElementById("ui_copy_login_button").blur();};document.getElementById("ui_copy_pass_button").onclick=async function(e)
{e.preventDefault();ui_copy_text(document.getElementById("ui_item_pass").value);document.getElementById("ui_copy_pass_button").blur();};document.getElementById("ui_item_gen_pass_button").onclick=async function(e)
{e.preventDefault();show_msg("Сгенерированные случайные данные",__crypt.gen_pass(100,true),true);};document.getElementById("ui_data_export_button").onclick=async function(e)
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
{e.preventDefault();ui_copy_text(document.getElementById("ui_msg_text").innerText);};document.getElementById("ui_data_export_with_files").onchange=async function(e)
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
ui_calc_size();ui_calc_position();};document.getElementById("ui_pswd").focus();__db=new db();__crypt=new crypt();__imp_file_data="";window.history.pushState(null,null,window.location.href);window.history.back();window.history.forward();__id_page=0;if(window.matchMedia('(display-mode: standalone)').matches===true)
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
{nw.Window.get().on('close',async function()
{var r=await show_msg_res("Подтверждение","Вы действительно хотите выйти?",true);if(r)
{this.close(true);}});}
catch(error)
{}
ui_tooltip_init();};function clear_back_timeout()
{__back_count_app_exit=0;};function ui_tooltip_init()
{const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]');const tooltipList=[...tooltipTriggerList].map(tooltipTriggerEl=>new bootstrap.Tooltip(tooltipTriggerEl,{show:100,hide:1000}));}
function ui_tooltip_hide_all()
{const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]');const tooltipList=[...tooltipTriggerList].map(tooltipTriggerEl=>bootstrap.Tooltip.getInstance(tooltipTriggerEl).hide());}

