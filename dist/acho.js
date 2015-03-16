/**
 * acho - An extremely simple (but powerful) logging system for NodeJS and browser.
 * @version v1.0.1
 * @link    https://github.com/Kikobeats/acho
 * @license MIT
 */!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.acho=e()}}(function(){return function e(t,r,n){function o(s,u){if(!r[s]){if(!t[s]){var l="function"==typeof require&&require;if(!u&&l)return l(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var p=r[s]={exports:{}};t[s][0].call(p.exports,function(e){var r=t[s][1][e];return o(r?r:e)},p,p.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t){"use strict";var r,n,o;n=e("./default"),o=e("chalk"),t.exports=r=function(){function e(e){var t;if(null==e&&(e={}),this.color=null!=e.color?e.color:n.COLOR,this.level=null!=e.level?e.level:n.LEVEL,this.types=null!=e.types?e.types:n.TYPES,this.print=null!=e.print?e.print:n.PRINT,this.muted=null!=e.muted?e.muted:n.MUTED,null!=e.messages)this.messages=e.messages;else{this.messages={};for(t in this.types)this.messages[t]=[]}this.outputType=null!=e.outputType?e.outputType:n.OUTPUT_TYPE,this.outputMessage=null!=e.outputMessage?e.outputMessage:n.OUTPUT_MESSAGE}return e.DEFAULT=n,e.prototype.push=function(e,t){return this.messages[e].push(t),this},e.prototype.add=function(e,t){return this[e](t),this.push(e,t),this},e.prototype.error=function(e){return this.printLine("error",e),this},e.prototype.warning=function(e){return this.printLine("warning",e),this},e.prototype.success=function(e){return this.printLine("success",e),this},e.prototype.info=function(e){return this.printLine("info",e),this},e.prototype.verbose=function(e){return this.printLine("verbose",e),this},e.prototype.debug=function(e){return this.printLine("debug",e),this},e.prototype.silly=function(e){return this.printLine("silly",e),this},e.prototype.isPrintable=function(e){return this.level===this.muted?!1:this.types[e].level<=this.types[this.level].level},e.prototype.colorize=function(e,t){var r,n,i,s;if(!this.color)return t;for(e=e.split(" "),s=o,n=0,i=e.length;i>n;n++)r=e[n],s=s[r];return s(t)},e.prototype.printLine=function(e,t){var r,n;if(this.isPrintable(e))return r=this.types[e].color,n=this.outputType(e),n=this.colorize(r,n),t=this.outputMessage(t),t=this.colorize(this.types.line.color,t),console.log(n+" "+t)},e}()},{"./default":2,chalk:5}],2:[function(e,t){"use strict";t.exports={OUTPUT_TYPE:function(e){return e+"	: "},OUTPUT_MESSAGE:function(e){return e},PRINT:function(){var e,t,r;t=[];for(r in this.types)t.push(function(){var t,n,o,i;for(o=this.messages[r],i=[],t=0,n=o.length;n>t;t++)e=o[t],i.push(this.printLine(r,e));return i}.call(this));return t},LEVEL:"info",COLOR:!1,MUTED:"silent",TYPES:{line:{color:"gray"},error:{level:0,color:"red"},warning:{level:1,color:"yellow"},success:{level:2,color:"green"},info:{level:3,color:"white"},verbose:{level:4,color:"cyan"},debug:{level:5,color:"blue"},silly:{level:6,color:"magenta"}}}},{}],3:[function(){},{}],4:[function(e,t){function r(){if(!s){s=!0;for(var e,t=i.length;t;){e=i,i=[];for(var r=-1;++r<t;)e[r]();t=i.length}s=!1}}function n(){}var o=t.exports={},i=[],s=!1;o.nextTick=function(e){i.push(e),s||setTimeout(r,0)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=n,o.addListener=n,o.once=n,o.off=n,o.removeListener=n,o.removeAllListeners=n,o.emit=n,o.binding=function(){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],5:[function(e,t){(function(r){"use strict";function n(e){this.enabled=e&&void 0!==e.enabled?e.enabled:f}function o(e){var t=function r(){return i.apply(r,arguments)};return t._styles=e,t.enabled=this.enabled,t.__proto__=g,t}function i(){var e=arguments,t=e.length,r=0!==t&&String(arguments[0]);if(t>1)for(var n=1;t>n;n++)r+=" "+e[n];if(!this.enabled||!r)return r;for(var o=this._styles,i=o.length;i--;){var s=l[o[i]];r=s.open+r.replace(s.closeRe,s.open)+s.close}return r}function s(){var e={};return Object.keys(h).forEach(function(t){e[t]={get:function(){return o.call(this,[t])}}}),e}var u=e("escape-string-regexp"),l=e("ansi-styles"),c=e("strip-ansi"),p=e("has-ansi"),f=e("supports-color"),a=Object.defineProperties;"win32"===r.platform&&(l.blue.open="[94m");var h=function(){var e={};return Object.keys(l).forEach(function(t){l[t].closeRe=new RegExp(u(l[t].close),"g"),e[t]={get:function(){return o.call(this,this._styles.concat(t))}}}),e}(),g=a(function(){},h);a(n.prototype,s()),t.exports=new n,t.exports.styles=l,t.exports.hasColor=p,t.exports.stripColor=c,t.exports.supportsColor=f}).call(this,e("_process"))},{_process:4,"ansi-styles":6,"escape-string-regexp":7,"has-ansi":8,"strip-ansi":10,"supports-color":12}],6:[function(e,t){"use strict";var r=t.exports={modifiers:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},colors:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39]},bgColors:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49]}};r.colors.grey=r.colors.gray,Object.keys(r).forEach(function(e){var t=r[e];Object.keys(t).forEach(function(e){var n=t[e];r[e]=t[e]={open:"["+n[0]+"m",close:"["+n[1]+"m"}}),Object.defineProperty(r,e,{value:t,enumerable:!1})})},{}],7:[function(e,t){"use strict";var r=/[|\\{}()[\]^$+*?.]/g;t.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(r,"\\$&")}},{}],8:[function(e,t){"use strict";var r=e("ansi-regex"),n=new RegExp(r().source);t.exports=n.test.bind(n)},{"ansi-regex":9}],9:[function(e,t){"use strict";t.exports=function(){return/(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/g}},{}],10:[function(e,t){"use strict";var r=e("ansi-regex")();t.exports=function(e){return"string"==typeof e?e.replace(r,""):e}},{"ansi-regex":11}],11:[function(e,t,r){arguments[4][9][0].apply(r,arguments)},{dup:9}],12:[function(e,t){(function(e){"use strict";var r=e.argv;t.exports=function(){return"FORCE_COLOR"in e.env?!0:-1!==r.indexOf("--no-color")||-1!==r.indexOf("--no-colors")||-1!==r.indexOf("--color=false")?!1:-1!==r.indexOf("--color")||-1!==r.indexOf("--colors")||-1!==r.indexOf("--color=true")||-1!==r.indexOf("--color=always")?!0:e.stdout&&!e.stdout.isTTY?!1:"win32"===e.platform?!0:"COLORTERM"in e.env?!0:"dumb"===e.env.TERM?!1:/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(e.env.TERM)?!0:!1}()}).call(this,e("_process"))},{_process:4}],acho:[function(e,t){"use strict";e("coffee-script/register"),t.exports=e("./lib/Acho")},{"./lib/Acho":1,"coffee-script/register":3}]},{},[])("acho")});