!function(e,t){"use strict";function n(e,t,n){this.root=this.currentNode=e,this.nodeType=t,this.filter=n}function r(e,t){for(var n=e.length;n--;)if(!t(e[n]))return!1;return!0}function o(e,t,n){if(e.nodeName!==t)return!1;for(var r in n)if(e.getAttribute(r)!==n[r])return!1;return!0}function i(e,t){return e.nodeType===t.nodeType&&e.nodeName===t.nodeName&&e.className===t.className&&(!e.style&&!t.style||e.style.cssText===t.style.cssText)}function a(e){return e.nodeType===L&&!!ne[e.nodeName]}function s(e){return te.test(e.nodeName)}function d(e){return e.nodeType===L&&!s(e)&&r(e.childNodes,s)}function l(e){return e.nodeType===L&&!s(e)&&!d(e)}function c(e){var t=e.ownerDocument,r=new n(t.body,R,d,!1);return r.currentNode=e,r}function h(e){return c(e).previousNode()}function f(e){return c(e).nextNode()}function u(e,t,n){do if(o(e,t,n))return e;while(e=e.parentNode);return null}function p(e){var t,n,r,o,i,a=e.parentNode;return a&&e.nodeType===L?(t=p(a),t+=(t?">":"")+e.nodeName,(n=e.id)&&(t+="#"+n),(r=e.className.trim())&&(o=r.split(/\s\s*/),o.sort(),t+=".",t+=o.join(".")),(i=e.dir)&&(t+="[dir="+i+"]")):t=a?p(a):"",t}function g(e){var t=e.nodeType;return t===L?e.childNodes.length:e.length||0}function m(e){var t=e.parentNode;return t&&t.removeChild(e),e}function v(e,t){var n=e.parentNode;n&&n.replaceChild(t,e)}function N(e){for(var t=e.ownerDocument.createDocumentFragment(),n=e.childNodes,r=n?n.length:0;r--;)t.appendChild(e.firstChild);return t}function C(e,n,r,o){var i,a,s,d,l=e.createElement(n);if(r instanceof Array&&(o=r,r=null),r)for(i in r)a=r[i],a!==t&&l.setAttribute(i,r[i]);if(o)for(s=0,d=o.length;d>s;s+=1)l.appendChild(o[s]);return l}function _(e){var t,n,r=e.ownerDocument,o=e;if("BODY"===e.nodeName&&((n=e.firstChild)&&"BR"!==n.nodeName||(t=k(r).createDefaultBlock(),n?e.replaceChild(t,n):e.appendChild(t),e=t,t=null)),s(e)){for(n=e.firstChild;$&&n&&n.nodeType===x&&!n.data;)e.removeChild(n),n=e.firstChild;n||($?(t=r.createTextNode(F),k(r)._didAddZWS()):t=r.createTextNode(""))}else if(G){for(;e.nodeType!==x&&!a(e);){if(n=e.firstChild,!n){t=r.createTextNode("");break}e=n}e.nodeType===x?/^ +$/.test(e.data)&&(e.data=""):a(e)&&e.parentNode.insertBefore(r.createTextNode(""),e)}else if(!e.querySelector("BR"))for(t=C(r,"BR");(n=e.lastElementChild)&&!s(n);)e=n;return t&&e.appendChild(t),o}function S(e){var t,n,r,o,i=e.childNodes,a=e.ownerDocument,d=null,c=k(a)._config;for(t=0,n=i.length;n>t;t+=1)r=i[t],o="BR"===r.nodeName,!o&&s(r)?(d||(d=C(a,c.blockTag,c.blockAttributes)),d.appendChild(r),t-=1,n-=1):(o||d)&&(d||(d=C(a,c.blockTag,c.blockAttributes)),_(d),o?e.replaceChild(d,r):(e.insertBefore(d,r),t+=1,n+=1),d=null),l(r)&&S(r);return d&&e.appendChild(_(d)),e}function y(e,t,n){var r,o,i,a=e.nodeType;if(a===x&&e!==n)return y(e.parentNode,e.splitText(t),n);if(a===L){if("number"==typeof t&&(t=t<e.childNodes.length?e.childNodes[t]:null),e===n)return t;for(r=e.parentNode,o=e.cloneNode(!1);t;)i=t.nextSibling,o.appendChild(t),t=i;return"OL"===e.nodeName&&u(e,"BLOCKQUOTE")&&(o.start=(+e.start||1)+e.childNodes.length-1),_(e),_(o),(i=e.nextSibling)?r.insertBefore(o,i):r.appendChild(o),y(r,o,n)}return t}function T(e,t){if(e.nodeType===L)for(var n,r,o,a=e.childNodes,d=a.length,l=[];d--;)if(n=a[d],r=d&&a[d-1],d&&s(n)&&i(n,r)&&!ne[n.nodeName])t.startContainer===n&&(t.startContainer=r,t.startOffset+=g(r)),t.endContainer===n&&(t.endContainer=r,t.endOffset+=g(r)),t.startContainer===e&&(t.startOffset>d?t.startOffset-=1:t.startOffset===d&&(t.startContainer=r,t.startOffset=g(r))),t.endContainer===e&&(t.endOffset>d?t.endOffset-=1:t.endOffset===d&&(t.endContainer=r,t.endOffset=g(r))),m(n),n.nodeType===x?r.appendData(n.data):l.push(N(n));else if(n.nodeType===L){for(o=l.length;o--;)n.appendChild(l.pop());T(n,t)}}function b(e,t,n){for(var r,o,i,a=t;1===a.parentNode.childNodes.length;)a=a.parentNode;m(a),o=e.childNodes.length,r=e.lastChild,r&&"BR"===r.nodeName&&(e.removeChild(r),o-=1),i={startContainer:e,startOffset:o,endContainer:e,endOffset:o},e.appendChild(N(t)),T(e,i),n.setStart(i.startContainer,i.startOffset),n.collapse(!0),q&&(r=e.lastChild)&&"BR"===r.nodeName&&e.removeChild(r)}function E(e){var t,n,r=e.previousSibling,o=e.firstChild,a=e.ownerDocument,s="LI"===e.nodeName;if(!s||o&&/^[OU]L$/.test(o.nodeName))if(r&&i(r,e)){if(!l(r)){if(!s)return;n=C(a,"DIV"),n.appendChild(N(r)),r.appendChild(n)}m(e),t=!l(e),r.appendChild(N(e)),t&&S(r),o&&E(o)}else s&&(r=C(a,"DIV"),e.insertBefore(r,o),_(r))}function k(e){for(var t,n=ye.length;n--;)if(t=ye[n],t._doc===e)return t;return null}function B(e,t){var n,r;e||(e={});for(n in t)r=t[n],e[n]=r&&r.constructor===Object?B(e[n],r):r;return e}function O(e,t){var n,r=e.defaultView,o=e.body;this._win=r,this._doc=e,this._body=o,this._events={},this._sel=r.getSelection(),this._lastSelection=null,j&&this.addEventListener("beforedeactivate",this.getSelection),this._hasZWS=!1,this._lastAnchorNode=null,this._lastFocusNode=null,this._path="",this.addEventListener("keyup",this._updatePathOnEvent),this.addEventListener("mouseup",this._updatePathOnEvent),r.addEventListener("focus",this,!1),r.addEventListener("blur",this,!1),this._undoIndex=-1,this._undoStack=[],this._undoStackLength=0,this._isInUndoState=!1,this._ignoreChange=!1,Y?(n=new MutationObserver(this._docWasChanged.bind(this)),n.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0}),this._mutation=n):this.addEventListener("keyup",this._keyUpDetectChange),this._awaitingPaste=!1,this.addEventListener(Z?"beforecut":"cut",this._onCut),this.addEventListener(Z?"beforepaste":"paste",this._onPaste),this.addEventListener(q?"keypress":"keydown",this._onKey),this._keyHandlers=Object.create(Se),this.setConfig(t),Z&&(r.Text.prototype.splitText=function(e){var t=this.ownerDocument.createTextNode(this.data.slice(e)),n=this.nextSibling,r=this.parentNode,o=this.length-e;return n?r.insertBefore(t,n):r.appendChild(t),o&&this.deleteData(e,o),t}),o.setAttribute("contenteditable","true");try{e.execCommand("enableObjectResizing",!1,"false"),e.execCommand("enableInlineTableEditing",!1,"false")}catch(i){}ye.push(this),this.setHTML("")}var A=2,L=1,x=3,R=1,D=4,U=0,I=1,P=2,w=3,F="​",H=e.defaultView,M=navigator.userAgent,W=/iP(?:ad|hone|od)/.test(M),K=/Mac OS X/.test(M),z=/Gecko\//.test(M),Z=/Trident\/[456]\./.test(M),q=!!H.opera,V=/WebKit\//.test(M),Q=K?"meta-":"ctrl-",G=Z||q,$=Z||V,j=Z,Y="undefined"!=typeof MutationObserver,X=/[^ \t\r\n]/,J=Array.prototype.indexOf;Object.create||(Object.create=function(e){var t=function(){};return t.prototype=e,new t});var ee={1:1,2:2,3:4,8:128,9:256,11:1024};n.prototype.nextNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){for(e=t.firstChild;!e&&t&&t!==n;)e=t.nextSibling,e||(t=t.parentNode);if(!e)return null;if(ee[e.nodeType]&r&&o(e))return this.currentNode=e,e;t=e}},n.prototype.previousNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){if(t===n)return null;if(e=t.previousSibling)for(;t=e.lastChild;)e=t;else e=t.parentNode;if(!e)return null;if(ee[e.nodeType]&r&&o(e))return this.currentNode=e,e;t=e}};var te=/^(?:#text|A(?:BBR|CRONYM)?|B(?:R|D[IO])?|C(?:ITE|ODE)|D(?:ATA|FN|EL)|EM|FONT|HR|I(?:NPUT|MG|NS)?|KBD|Q|R(?:P|T|UBY)|S(?:U[BP]|PAN|TR(?:IKE|ONG)|MALL|AMP)?|U|VAR|WBR)$/,ne={BR:1,IMG:1,INPUT:1},re=function(e,t){for(var n=e.childNodes;t&&e.nodeType===L;)e=n[t-1],n=e.childNodes,t=n.length;return e},oe=function(e,t){if(e.nodeType===L){var n=e.childNodes;if(t<n.length)e=n[t];else{for(;e&&!e.nextSibling;)e=e.parentNode;e&&(e=e.nextSibling)}}return e},ie=function(e,t){var n,r,o,i,a=e.startContainer,s=e.startOffset,d=e.endContainer,l=e.endOffset;a.nodeType===x?(n=a.parentNode,r=n.childNodes,s===a.length?(s=J.call(r,a)+1,e.collapsed&&(d=n,l=s)):(s&&(i=a.splitText(s),d===a?(l-=s,d=i):d===n&&(l+=1),a=i),s=J.call(r,a)),a=n):r=a.childNodes,o=r.length,s===o?a.appendChild(t):a.insertBefore(t,r[s]),a===d&&(l+=r.length-o),e.setStart(a,s),e.setEnd(d,l)},ae=function(e,t){var n=e.startContainer,r=e.startOffset,o=e.endContainer,i=e.endOffset;t||(t=e.commonAncestorContainer),t.nodeType===x&&(t=t.parentNode);for(var a,s,d,l=y(o,i,t),c=y(n,r,t),h=t.ownerDocument.createDocumentFragment();c!==l;)a=c.nextSibling,h.appendChild(c),c=a;return n=t,r=l?J.call(t.childNodes,l):t.childNodes.length,d=t.childNodes[r],s=d&&d.previousSibling,s&&s.nodeType===x&&d.nodeType===x&&(n=s,r=s.length,s.appendData(d.data),m(d)),e.setStart(n,r),e.collapse(!0),_(t),h},se=function(e){he(e),ae(e),ce(e);var t=fe(e),n=ue(e);t&&n&&t!==n&&b(t,n,e),t&&_(t);var r=e.endContainer.ownerDocument.body,o=r.firstChild;o&&"BR"!==o.nodeName||(_(r),e.selectNodeContents(r.firstChild))},de=function(e,t){for(var n=!0,r=t.childNodes,o=r.length;o--;)if(!s(r[o])){n=!1;break}if(e.collapsed||se(e),ce(e),n)ie(e,t),e.collapse(!1);else{for(var i,a,d=e.startContainer,l=y(d,e.startOffset,u(d.parentNode,"BLOCKQUOTE")||d.ownerDocument.body),c=l.previousSibling,h=c,p=h.childNodes.length,m=l,v=0,N=l.parentNode;(i=h.lastChild)&&i.nodeType===L&&"BR"!==i.nodeName;)h=i,p=h.childNodes.length;for(;(i=m.firstChild)&&i.nodeType===L&&"BR"!==i.nodeName;)m=i;for(;(i=t.firstChild)&&s(i);)h.appendChild(i);for(;(i=t.lastChild)&&s(i);)m.insertBefore(i,m.firstChild),v+=1;for(a=t;a=f(a);)_(a);N.insertBefore(t,l),a=l.previousSibling,l.textContent?E(l):N.removeChild(l),l.parentNode||(m=a,v=g(m)),c.textContent?E(c):(h=c.nextSibling,p=0,N.removeChild(c)),e.setStart(h,p),e.setEnd(m,v),ce(e)}},le=function(e,t,n){var r=t.ownerDocument.createRange();if(r.selectNode(t),n){var o=e.compareBoundaryPoints(w,r)>-1,i=e.compareBoundaryPoints(I,r)<1;return!o&&!i}var a=e.compareBoundaryPoints(U,r)<1,s=e.compareBoundaryPoints(P,r)>-1;return a&&s},ce=function(e){for(var t,n=e.startContainer,r=e.startOffset,o=e.endContainer,i=e.endOffset;n.nodeType!==x&&(t=n.childNodes[r],t&&!a(t));)n=t,r=0;if(i)for(;o.nodeType!==x&&(t=o.childNodes[i-1],t&&!a(t));)o=t,i=g(o);else for(;o.nodeType!==x&&(t=o.firstChild,t&&!a(t));)o=t;e.collapsed?(e.setStart(o,i),e.setEnd(n,r)):(e.setStart(n,r),e.setEnd(o,i))},he=function(e,t){var n,r=e.startContainer,o=e.startOffset,i=e.endContainer,a=e.endOffset;for(t||(t=e.commonAncestorContainer);r!==t&&!o;)n=r.parentNode,o=J.call(n.childNodes,r),r=n;for(;i!==t&&a===g(i);)n=i.parentNode,a=J.call(n.childNodes,i)+1,i=n;e.setStart(r,o),e.setEnd(i,a)},fe=function(e){var t,n=e.startContainer;return s(n)?t=h(n):d(n)?t=n:(t=re(n,e.startOffset),t=f(t)),t&&le(e,t,!0)?t:null},ue=function(e){var t,n,r=e.endContainer;if(s(r))t=h(r);else if(d(r))t=r;else{if(t=oe(r,e.endOffset),!t)for(t=r.ownerDocument.body;n=t.lastChild;)t=n;t=h(t)}return t&&le(e,t,!0)?t:null},pe=new n(null,D|R,function(e){return e.nodeType===x?X.test(e.data):"IMG"===e.nodeName}),ge=function(e){var t=e.startContainer,n=e.startOffset;if(t.nodeType===x){if(n)return!1;pe.currentNode=t}else pe.currentNode=oe(t,n);return pe.root=fe(e),!pe.previousNode()},me=function(e){var t,n=e.endContainer,r=e.endOffset;if(n.nodeType===x){if(t=n.data.length,t&&t>r)return!1;pe.currentNode=n}else pe.currentNode=re(n,r);return pe.root=ue(e),!pe.nextNode()},ve=function(e){var t,n=fe(e),r=ue(e);n&&r&&(t=n.parentNode,e.setStart(t,J.call(t.childNodes,n)),t=r.parentNode,e.setEnd(t,J.call(t.childNodes,r)+1))},Ne=function(e){return function(t,n){n.preventDefault(),t[e]()}},Ce=function(e,t){return t=t||null,function(n,r){r.preventDefault();var o=n.getSelection();n.hasFormat(e,null,o)?n.changeFormat(null,{tag:e},o):n.changeFormat({tag:e},t,o)}},_e=function(e,t){try{t||(t=e.getSelection());var n,r=t.startContainer;for(r.nodeType===x&&(r=r.parentNode),n=r;s(n)&&(!n.textContent||n.textContent===F);)r=n,n=r.parentNode;r!==n&&(t.setStart(n,J.call(n.childNodes,r)),t.collapse(!0),n.removeChild(r),d(n)||(n=h(n)),_(n),ce(t)),e._ensureBottomLine(),e.setSelection(t),e._updatePath(t,!0)}catch(o){e.didError(o)}},Se={enter:function(e,t,n){var r,o,i;if(t.preventDefault(),e._recordUndoState(n),Me(n.startContainer),e._removeZWS(),e._getRangeAndRemoveBookmark(n),n.collapsed||se(n),r=fe(n),!r||/^T[HD]$/.test(r.nodeName))return ie(n,e.createElement("BR")),n.collapse(!1),e.setSelection(n),void e._updatePath(n,!0);if((o=u(r,"LI"))&&(r=o),!r.textContent){if(u(r,"UL")||u(r,"OL"))return e.modifyBlocks(Fe,n);if(u(r,"BLOCKQUOTE"))return e.modifyBlocks(Re,n)}for(i=Ae(e,r,n.startContainer,n.startOffset),Ee(r),Ve(r),_(r);i.nodeType===L;){var a,s=i.firstChild;if("A"===i.nodeName&&(!i.textContent||i.textContent===F)){s=e._doc.createTextNode(""),v(i,s),i=s;break}for(;s&&s.nodeType===x&&!s.data&&(a=s.nextSibling,a&&"BR"!==a.nodeName);)m(s),s=a;if(!s||"BR"===s.nodeName||s.nodeType===x&&!q)break;i=s}n=e._createRange(i,0),e.setSelection(n),e._updatePath(n,!0),i.nodeType===x&&(i=i.parentNode);var d=e._doc,l=e._body;i.offsetTop+i.offsetHeight>(d.documentElement.scrollTop||l.scrollTop)+l.offsetHeight&&i.scrollIntoView(!1)},backspace:function(e,t,n){if(e._removeZWS(),e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),n.collapsed)if(ge(n)){t.preventDefault();var r=fe(n),o=r&&h(r);if(o){if(!o.isContentEditable)return void m(o);for(b(o,r,n),r=o.parentNode;r&&!r.nextSibling;)r=r.parentNode;r&&(r=r.nextSibling)&&E(r),e.setSelection(n)}else if(r){if(u(r,"UL")||u(r,"OL"))return e.modifyBlocks(Fe,n);if(u(r,"BLOCKQUOTE"))return e.modifyBlocks(xe,n);e.setSelection(n),e._updatePath(n,!0)}}else e.setSelection(n),setTimeout(function(){_e(e)},0);else t.preventDefault(),se(n),_e(e,n)},"delete":function(e,t,n){if(e._removeZWS(),e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),n.collapsed)if(me(n)){t.preventDefault();var r=fe(n),o=r&&f(r);if(o){if(!o.isContentEditable)return void m(o);for(b(r,o,n),o=r.parentNode;o&&!o.nextSibling;)o=o.parentNode;o&&(o=o.nextSibling)&&E(o),e.setSelection(n),e._updatePath(n,!0)}}else{var o,i=n.commonAncestorContainer,a=!1;if(s(i)){for(var l,c=i.nodeValue&&i.nodeValue.length||i.innerText.length;i.parentNode&&!i.nextSibling&&s(i.parentNode);)i=i.parentNode;o=i.nextSibling,l=window.getComputedStyle(o).display,s(i)&&n.endOffset===c&&"IMG"===o.nodeName&&!/^inline|inline-block$/.test(l)&&(a=!0)}else d(i)&&(o=i.childNodes[n.startOffset],i===n.endContainer&&i===n.startContainer&&"IMG"===o.nodeName&&(a=!0));a&&(t.preventDefault(),o.parentNode.removeChild(o)),e.setSelection(n),setTimeout(function(){_e(e)},0)}else t.preventDefault(),se(n),_e(e,n)},tab:function(e,t,n){var r,o;if(e._removeZWS(),n.collapsed&&ge(n)&&me(n)){for(r=fe(n);o=r.parentNode;){if("UL"===o.nodeName||"OL"===o.nodeName){r.previousSibling&&(t.preventDefault(),e.modifyBlocks(we,n));break}r=o}t.preventDefault()}},space:function(e,t,n){var r,o;e._recordUndoState(n),Me(n.startContainer),e._getRangeAndRemoveBookmark(n),r=n.endContainer,o=r.parentNode,n.collapsed&&"A"===o.nodeName&&!r.nextSibling&&n.endOffset===g(r)&&n.setStartAfter(o),e.setSelection(n)},left:function(e){e._removeZWS()},right:function(e){e._removeZWS()}};K&&z&&H.getSelection().modify&&(Se["meta-left"]=function(e,t){t.preventDefault(),e._sel.modify("move","backward","lineboundary")},Se["meta-right"]=function(e,t){t.preventDefault(),e._sel.modify("move","forward","lineboundary")}),Se[Q+"b"]=Ce("B"),Se[Q+"i"]=Ce("I"),Se[Q+"u"]=Ce("U"),Se[Q+"shift-7"]=Ce("S"),Se[Q+"shift-5"]=Ce("SUB",{tag:"SUP"}),Se[Q+"shift-6"]=Ce("SUP",{tag:"SUB"}),Se[Q+"shift-8"]=Ne("makeUnorderedList"),Se[Q+"shift-9"]=Ne("makeOrderedList"),Se[Q+"["]=Ne("decreaseQuoteLevel"),Se[Q+"]"]=Ne("increaseQuoteLevel"),Se[Q+"y"]=Ne("redo"),Se[Q+"z"]=Ne("undo"),Se[Q+"shift-z"]=Ne("redo");var ye=[],Te=O.prototype;Te.setConfig=function(e){return e=B({blockTag:"DIV",blockAttributes:null,tagAttributes:{blockquote:null,ul:null,ol:null,li:null}},e),e.blockTag=e.blockTag.toUpperCase(),this._config=e,this},Te.createElement=function(e,t,n){return C(this._doc,e,t,n)},Te.createDefaultBlock=function(e){var t=this._config;return _(this.createElement(t.blockTag,t.blockAttributes,e))},Te.didError=function(e){console.log(e)},Te.getDocument=function(){return this._doc};var be={focus:1,blur:1,pathChange:1,select:1,input:1,undoStateChange:1};Te.fireEvent=function(e,t){var n,r,o,i=this._events[e];if(i)for(t||(t={}),t.type!==e&&(t.type=e),i=i.slice(),n=0,r=i.length;r>n;n+=1){o=i[n];try{o.handleEvent?o.handleEvent(t):o.call(this,t)}catch(a){a.details="Squire: fireEvent error. Event type: "+e,this.didError(a)}}return this},Te.destroy=function(){var e,t=this._win,n=this._doc,r=this._events;t.removeEventListener("focus",this,!1),t.removeEventListener("blur",this,!1);for(e in r)be[e]||n.removeEventListener(e,this,!0);this._mutation&&this._mutation.disconnect();for(var o=ye.length;o--;)ye[o]===this&&ye.splice(o,1)},Te.handleEvent=function(e){this.fireEvent(e.type,e)},Te.addEventListener=function(e,t){var n=this._events[e];return t?(n||(n=this._events[e]=[],be[e]||this._doc.addEventListener(e,this,!0)),n.push(t),this):(this.didError({name:"Squire: addEventListener with null or undefined fn",message:"Event type: "+e}),this)},Te.removeEventListener=function(e,t){var n,r=this._events[e];if(r){for(n=r.length;n--;)r[n]===t&&r.splice(n,1);r.length||(delete this._events[e],be[e]||this._doc.removeEventListener(e,this,!1))}return this},Te._createRange=function(e,t,n,r){if(e instanceof this._win.Range)return e.cloneRange();var o=this._doc.createRange();return o.setStart(e,t),n?o.setEnd(n,r):o.setEnd(e,t),o},Te.setSelection=function(e){if(e){W&&this._win.focus();var t=this._sel;t.removeAllRanges(),t.addRange(e)}return this},Te.getSelection=function(){var e,t,n,r=this._sel;return r.rangeCount?(e=r.getRangeAt(0).cloneRange(),t=e.startContainer,n=e.endContainer,t&&a(t)&&e.setStartBefore(t),n&&a(n)&&e.setEndBefore(n),this._lastSelection=e):e=this._lastSelection,e||(e=this._createRange(this._body.firstChild,0)),e},Te.getSelectedText=function(){var e,t=this.getSelection(),r=new n(t.commonAncestorContainer,D|R,function(e){return le(t,e,!0)}),o=t.startContainer,i=t.endContainer,a=r.currentNode=o,d="",l=!1;for(r.filter(a)||(a=r.nextNode());a;)a.nodeType===x?(e=a.data,e&&/\S/.test(e)&&(a===i&&(e=e.slice(0,t.endOffset)),a===o&&(e=e.slice(t.startOffset)),d+=e,l=!0)):("BR"===a.nodeName||l&&!s(a))&&(d+="\n",l=!1),a=r.nextNode();return d},Te.getPath=function(){return this._path};var Ee=function(e){for(var t,r,o,i=new n(e,D,function(){return!0},!1);r=i.nextNode();)for(;(o=r.data.indexOf(F))>-1;){if(1===r.length){do t=r.parentNode,t.removeChild(r),r=t;while(s(r)&&!g(r));break}r.deleteData(o,1)}};Te._didAddZWS=function(){this._hasZWS=!0},Te._removeZWS=function(){this._hasZWS&&(Ee(this._body),this._hasZWS=!1)},Te._updatePath=function(e,t){var n,r=e.startContainer,o=e.endContainer;(t||r!==this._lastAnchorNode||o!==this._lastFocusNode)&&(this._lastAnchorNode=r,this._lastFocusNode=o,n=r&&o?r===o?p(o):"(selection)":"",this._path!==n&&(this._path=n,this.fireEvent("pathChange",{path:n}))),e.collapsed||this.fireEvent("select")},Te._updatePathOnEvent=function(){this._updatePath(this.getSelection())},Te.focus=function(){return q||this._body.focus(),this._win.focus(),this},Te.blur=function(){return z&&this._body.blur(),top.focus(),this};var ke="squire-selection-start",Be="squire-selection-end";Te._saveRangeToBookmark=function(e){var t,n=this.createElement("INPUT",{id:ke,type:"hidden"}),r=this.createElement("INPUT",{id:Be,type:"hidden"});ie(e,n),e.collapse(!1),ie(e,r),n.compareDocumentPosition(r)&A&&(n.id=Be,r.id=ke,t=n,n=r,r=t),e.setStartAfter(n),e.setEndBefore(r)},Te._getRangeAndRemoveBookmark=function(e){var t=this._doc,n=t.getElementById(ke),r=t.getElementById(Be);if(n&&r){var o,i=n.parentNode,a=r.parentNode,s={startContainer:i,endContainer:a,startOffset:J.call(i.childNodes,n),endOffset:J.call(a.childNodes,r)};i===a&&(s.endOffset-=1),m(n),m(r),T(i,s),i!==a&&T(a,s),e||(e=t.createRange()),e.setStart(s.startContainer,s.startOffset),e.setEnd(s.endContainer,s.endOffset),o=e.collapsed,ce(e),o&&e.collapse(!0)}return e||null},Te._keyUpDetectChange=function(e){var t=e.keyCode;e.ctrlKey||e.metaKey||e.altKey||!(16>t||t>20)||!(33>t||t>45)||this._docWasChanged()},Te._docWasChanged=function(){return Y&&this._ignoreChange?void(this._ignoreChange=!1):(this._isInUndoState&&(this._isInUndoState=!1,this.fireEvent("undoStateChange",{canUndo:!0,canRedo:!1})),void this.fireEvent("input"))},Te._recordUndoState=function(e){if(!this._isInUndoState){var t=this._undoIndex+=1,n=this._undoStack;t<this._undoStackLength&&(n.length=this._undoStackLength=t),e&&this._saveRangeToBookmark(e),n[t]=this._getHTML(),this._undoStackLength+=1,this._isInUndoState=!0}},Te.undo=function(){if(0!==this._undoIndex||!this._isInUndoState){this._recordUndoState(this.getSelection()),this._undoIndex-=1,this._setHTML(this._undoStack[this._undoIndex]);var e=this._getRangeAndRemoveBookmark();e&&this.setSelection(e),this._isInUndoState=!0,this.fireEvent("undoStateChange",{canUndo:0!==this._undoIndex,canRedo:!0}),this.fireEvent("input")}return this},Te.redo=function(){var e=this._undoIndex,t=this._undoStackLength;if(t>e+1&&this._isInUndoState){this._undoIndex+=1,this._setHTML(this._undoStack[this._undoIndex]);var n=this._getRangeAndRemoveBookmark();n&&this.setSelection(n),this.fireEvent("undoStateChange",{canUndo:!0,canRedo:t>e+2}),this.fireEvent("input")}return this},Te.hasFormat=function(e,t,r){if(e=e.toUpperCase(),t||(t={}),!r&&!(r=this.getSelection()))return!1;var o,i,a=r.commonAncestorContainer;if(u(a,e,t))return!0;if(a.nodeType===x)return!1;o=new n(a,D,function(e){return le(r,e,!0)},!1);for(var s=!1;i=o.nextNode();){if(!u(i,e,t))return!1;s=!0}return s},Te._addFormat=function(e,t,r){var o,i,a,s,d,l,c,h;if(r.collapsed)o=_(this.createElement(e,t)),ie(r,o),r.setStart(o.firstChild,o.firstChild.length),r.collapse(!0);else{if(i=new n(r.commonAncestorContainer,D|R,function(e){return(e.nodeType===x||"BR"===e.nodeName)&&le(r,e,!0)},!1),a=r.startContainer,d=r.startOffset,s=r.endContainer,l=r.endOffset,i.currentNode=a,i.filter(a)||(a=i.nextNode(),d=0),!a)return r;do c=i.currentNode,h=!u(c,e,t),h&&(c===s&&c.length>l&&c.splitText(l),c===a&&d&&(c=c.splitText(d),s===a&&(s=c,l-=d),a=c,d=0),o=this.createElement(e,t),v(c,o),o.appendChild(c));while(i.nextNode());s.nodeType!==x&&(c.nodeType===x?(s=c,l=c.length):(s=c.parentNode,l=1)),r=this._createRange(a,d,s,l)}return r},Te._removeFormat=function(e,t,n,r){this._saveRangeToBookmark(n);var i,a=this._doc;n.collapsed&&($?(i=a.createTextNode(F),this._didAddZWS()):i=a.createTextNode(""),ie(n,i));for(var d=n.commonAncestorContainer;s(d);)d=d.parentNode;var l=n.startContainer,c=n.startOffset,h=n.endContainer,f=n.endOffset,u=[],p=function(e,t){if(!le(n,e,!1)){var r,o,i=e.nodeType===x;if(!le(n,e,!0))return void("INPUT"===e.nodeName||i&&!e.data||u.push([t,e]));if(i)e===h&&f!==e.length&&u.push([t,e.splitText(f)]),e===l&&c&&(e.splitText(c),u.push([t,e]));else for(r=e.firstChild;r;r=o)o=r.nextSibling,p(r,t)}},g=Array.prototype.filter.call(d.getElementsByTagName(e),function(r){return le(n,r,!0)&&o(r,e,t)});r||g.forEach(function(e){p(e,e)}),u.forEach(function(e){var t=e[0].cloneNode(!1),n=e[1];v(n,t),t.appendChild(n)}),g.forEach(function(e){v(e,N(e))}),this._getRangeAndRemoveBookmark(n),i&&n.collapse(!1);var m={startContainer:n.startContainer,startOffset:n.startOffset,endContainer:n.endContainer,endOffset:n.endOffset};return T(d,m),n.setStart(m.startContainer,m.startOffset),n.setEnd(m.endContainer,m.endOffset),n},Te.changeFormat=function(e,t,n,r){return n||(n=this.getSelection())?(this._recordUndoState(n),this._getRangeAndRemoveBookmark(n),t&&(n=this._removeFormat(t.tag.toUpperCase(),t.attributes||{},n,r)),e&&(n=this._addFormat(e.tag.toUpperCase(),e.attributes||{},n)),this.setSelection(n),this._updatePath(n,!0),Y||this._docWasChanged(),this):void 0};var Oe={DT:"DD",DD:"DT",LI:"LI"},Ae=function(e,t,n,r){var i=Oe[t.nodeName],a=null,s=y(n,r,t.parentNode),d=e._config;return i||(i=d.blockTag,a=d.blockAttributes),o(s,i,a)||(t=C(s.ownerDocument,i,a),s.dir&&(t.dir=s.dir),v(s,t),t.appendChild(N(s)),s=t),s};Te.forEachBlock=function(e,t,n){if(!n&&!(n=this.getSelection()))return this;t&&(this._recordUndoState(n),this._getRangeAndRemoveBookmark(n));var r=fe(n),o=ue(n);if(r&&o)do if(e(r)||r===o)break;while(r=f(r));return t&&(this.setSelection(n),this._updatePath(n,!0),Y||this._docWasChanged()),this},Te.modifyBlocks=function(e,t){if(!t&&!(t=this.getSelection()))return this;this._isInUndoState?this._saveRangeToBookmark(t):this._recordUndoState(t),ve(t);var n,r=this._body;return he(t,r),n=ae(t,r),ie(t,e.call(this,n)),t.endOffset<t.endContainer.childNodes.length&&E(t.endContainer.childNodes[t.endOffset]),E(t.startContainer.childNodes[t.startOffset]),this._getRangeAndRemoveBookmark(t),this.setSelection(t),this._updatePath(t,!0),Y||this._docWasChanged(),this};var Le=function(e){return this.createElement("BLOCKQUOTE",this._config.tagAttributes.blockquote,[e])},xe=function(e){var t=e.querySelectorAll("blockquote");return Array.prototype.filter.call(t,function(e){return!u(e.parentNode,"BLOCKQUOTE")}).forEach(function(e){v(e,N(e))}),e},Re=function(){return this.createDefaultBlock([this.createElement("INPUT",{id:ke,type:"hidden"}),this.createElement("INPUT",{id:Be,type:"hidden"})])},De=function(e,t,n){for(var r,o,i,a,s=c(t),d=e._config.tagAttributes,l=d[n.toLowerCase()],h=d.li;r=s.nextNode();)o=r.parentNode.nodeName,"LI"!==o?(a=e.createElement("LI",h),r.dir&&(a.dir=r.dir),(i=r.previousSibling)&&i.nodeName===n?i.appendChild(a):v(r,e.createElement(n,l,[a])),a.appendChild(r)):(r=r.parentNode.parentNode,o=r.nodeName,o!==n&&/^[OU]L$/.test(o)&&v(r,e.createElement(n,l,[N(r)])))},Ue=function(e){return De(this,e,"UL"),e},Ie=function(e){return De(this,e,"OL"),e},Pe=function(e){var t,n,r,o,i,a,s,d=e.querySelectorAll("UL, OL");for(t=0,n=d.length;n>t;t+=1){for(o=d[t],i=N(o),a=i.childNodes,r=a.length;r--;)s=a[r],v(s,N(s));S(i),v(o,i)}return e},we=function(e){var t,n,r,o,i,a,s=e.querySelectorAll("LI"),d=this._config.tagAttributes,c=d.li;for(t=0,n=s.length;n>t;t+=1)r=s[t],l(r.firstChild)||(o=r.parentNode.nodeName,i=r.previousSibling,i&&(i=i.lastChild)&&i.nodeName===o||(a=d[o.toLowerCase()],v(r,this.createElement("LI",c,[i=this.createElement(o,a)]))),i.appendChild(r));return e},Fe=function(e){var t=e.querySelectorAll("LI");return Array.prototype.filter.call(t,function(e){return!l(e.firstChild)}).forEach(function(t){var n,r=t.parentNode,o=r.parentNode,i=t.firstChild,a=i;for(t.previousSibling&&(r=y(r,t,o));a&&(n=a.nextSibling,!l(a));)o.insertBefore(a,r),a=n;for("LI"===o.nodeName&&i.previousSibling&&y(o,i,o.parentNode);t!==e&&!t.childNodes.length;)r=t.parentNode,r.removeChild(t),t=r},this),S(e),e},He=/\b((?:(?:ht|f)tps?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,}\/)(?:[^\s()<>]+|\([^\s()<>]+\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|([\w\-.%+]+@(?:[\w\-]+\.)+[A-Z]{2,}\b)/i,Me=function(e){for(var t,r,o,i,a,s,d,l=e.ownerDocument,c=new n(e,D,function(e){return!u(e,"A")},!1);t=c.nextNode();)for(r=t.data,o=t.parentNode;i=He.exec(r);)a=i.index,s=a+i[0].length,a&&(d=l.createTextNode(r.slice(0,a)),o.insertBefore(d,t)),d=l.createElement("A"),d.textContent=r.slice(a,s),d.href=i[1]?/^(?:ht|f)tps?:/.test(i[1])?i[1]:"http://"+i[1]:"mailto:"+i[2],o.insertBefore(d,t),t.data=r=r.slice(s)},We=/^(?:A(?:DDRESS|RTICLE|SIDE|UDIO)|BLOCKQUOTE|CAPTION|D(?:[DLT]|IV)|F(?:IGURE|OOTER)|H[1-6]|HEADER|L(?:ABEL|EGEND|I)|O(?:L|UTPUT)|P(?:RE)?|SECTION|T(?:ABLE|BODY|D|FOOT|H|HEAD|R)|UL)$/,Ke={1:10,2:13,3:16,4:18,5:24,6:32,7:48},ze={backgroundColor:{regexp:X,replace:function(e,t){return C(e,"SPAN",{"class":"highlight",style:"background-color: "+t})}},color:{regexp:X,replace:function(e,t){return C(e,"SPAN",{"class":"colour",style:"color:"+t})}},fontWeight:{regexp:/^bold/i,replace:function(e){return C(e,"B")}},fontStyle:{regexp:/^italic/i,replace:function(e){return C(e,"I")}},fontFamily:{regexp:X,replace:function(e,t){return C(e,"SPAN",{"class":"font",style:"font-family:"+t})}},fontSize:{regexp:X,replace:function(e,t){return C(e,"SPAN",{"class":"size",style:"font-size:"+t})}}},Ze=function(e){return function(t,n){var r=C(t.ownerDocument,e);return n.replaceChild(r,t),r.appendChild(N(t)),r}},qe={SPAN:function(e,t){var n,r,o,i,a,s,d=e.style,l=e.ownerDocument;for(n in ze)r=ze[n],o=d[n],o&&r.regexp.test(o)&&(s=r.replace(l,o),i&&i.appendChild(s),i=s,a||(a=s));return a&&(i.appendChild(N(e)),t.replaceChild(a,e)),i||e},STRONG:Ze("B"),EM:Ze("I"),STRIKE:Ze("S"),FONT:function(e,t){var n,r,o,i,a,s=e.face,d=e.size,l=e.color,c=e.ownerDocument;return s&&(n=C(c,"SPAN",{"class":"font",style:"font-family:"+s}),a=n,i=n),d&&(r=C(c,"SPAN",{"class":"size",style:"font-size:"+Ke[d]+"px"}),a||(a=r),i&&i.appendChild(r),i=r),l&&/^#?([\dA-F]{3}){1,2}$/i.test(l)&&("#"!==l.charAt(0)&&(l="#"+l),o=C(c,"SPAN",{"class":"colour",style:"color:"+l}),a||(a=o),i&&i.appendChild(o),i=o),a||(a=i=C(c,"SPAN")),t.replaceChild(a,e),i.appendChild(N(e)),i},TT:function(e,t){var n=C(e.ownerDocument,"SPAN",{"class":"font",style:'font-family:menlo,consolas,"courier new",monospace'});return t.replaceChild(n,e),n.appendChild(N(e)),n}},Ve=function(e){for(var t,n=e.childNodes,r=n.length;r--;)t=n[r],t.nodeType!==L||a(t)?t.nodeType!==x||t.data||e.removeChild(t):(Ve(t),s(t)&&!t.firstChild&&e.removeChild(t))},Qe=function(e,t){var n,r,o,i,a,d,l,c,h,f,u=e.childNodes;for(n=0,r=u.length;r>n;n+=1)if(o=u[n],i=o.nodeName,a=o.nodeType,d=qe[i],a===L){if(l=o.childNodes.length,d)o=d(o,e);else{if(!We.test(i)&&!s(o)){n-=1,r+=l-1,e.replaceChild(N(o),o);continue}!t&&o.style.cssText&&o.removeAttribute("style")}l&&Qe(o,t)}else{if(a===x){if(c=o.data,/\S/.test(c)){if(s(e))continue;if(h=0,f=c.length,!n||!s(u[n-1])){for(;f>h&&!X.test(c.charAt(h));)h+=1;h&&(o.data=c=c.slice(h),f-=h)}if(n+1===r||!s(u[n+1])){for(h=f;h>0&&!X.test(c.charAt(h-1));)h-=1;f>h&&(o.data=c.slice(0,h))}continue}if(n&&r>n+1&&s(u[n-1])&&s(u[n+1])){o.data=" ";continue}}e.removeChild(o),n-=1,r-=1}return e},Ge=function(e){return e.nodeType===L?"BR"===e.nodeName:X.test(e.data)},$e=function(e){for(var t,r=e.parentNode;s(r);)r=r.parentNode;return t=new n(r,R|D,Ge),t.currentNode=e,!!t.nextNode()},je=function(e){var t,n,r,o=e.querySelectorAll("BR"),i=[],a=o.length;for(t=0;a>t;t+=1)i[t]=$e(o[t]);for(;a--;)if(n=o[a],r=n.parentNode){for(;s(r);)r=r.parentNode;if(d(r)){if(i[a]){if("DIV"!==r.nodeName)continue;y(n.parentNode,n,r.parentNode)}m(n)}else S(r)}};Te._ensureBottomLine=function(){var e=this._body,t=e.lastElementChild;t&&t.nodeName===this._config.blockTag&&d(t)||e.appendChild(this.createDefaultBlock())},Te._onCut=function(){var e=this.getSelection(),t=this;this._recordUndoState(e),this._getRangeAndRemoveBookmark(e),this.setSelection(e),setTimeout(function(){try{t._ensureBottomLine()}catch(e){t.didError(e)}},0)},Te._onPaste=function(e){if(!this._awaitingPaste){var t,n,r=e.clipboardData,o=r&&r.items,i=!1,a=!1;if(o){for(t=o.length;t--;){if(n=o[t].type,"text/html"===n){a=!1;break}/^image\/.*/.test(n)&&(a=!0)}if(a)return e.preventDefault(),this.fireEvent("dragover",{dataTransfer:r,preventDefault:function(){i=!0}}),void(i&&this.fireEvent("drop",{dataTransfer:r}))}this._awaitingPaste=!0;var s,d,l,c,h,u=this,p=this._body,g=this.getSelection();u._recordUndoState(g),u._getRangeAndRemoveBookmark(g),s=g.startContainer,d=g.startOffset,l=g.endContainer,c=g.endOffset,h=fe(g);var v=this.createElement("DIV",{style:"position: absolute; overflow: hidden; top:"+(p.scrollTop+(h?h.getBoundingClientRect().top:0))+"px; left: 0; width: 1px; height: 1px;"});p.appendChild(v),g.selectNodeContents(v),this.setSelection(g),setTimeout(function(){try{var e=N(m(v)),t=e.firstChild,n=u._createRange(s,d,l,c);if(t){t===e.lastChild&&"DIV"===t.nodeName&&e.replaceChild(N(t),t),e.normalize(),Me(e),Qe(e,!1),je(e),Ve(e);for(var r=e,o=!0,i={fragment:e,preventDefault:function(){o=!1},isDefaultPrevented:function(){return!o}};r=f(r);)_(r);u.fireEvent("willPaste",i),o&&(de(n,i.fragment),Y||u._docWasChanged(),n.collapse(!1),u._ensureBottomLine())}u.setSelection(n),u._updatePath(n,!0),u._awaitingPaste=!1}catch(a){u.didError(a)}},0)}};var Ye={8:"backspace",9:"tab",13:"enter",32:"space",37:"left",39:"right",46:"delete",219:"[",221:"]"};Te._onKey=function(e){var t=e.keyCode,n=Ye[t],r="",o=this.getSelection();n||(n=String.fromCharCode(t).toLowerCase(),/^[A-Za-z0-9]$/.test(n)||(n="")),q&&46===e.which&&(n="."),
t>111&&124>t&&(n="f"+(t-111)),"backspace"!==n&&"delete"!==n&&(e.altKey&&(r+="alt-"),e.ctrlKey&&(r+="ctrl-"),e.metaKey&&(r+="meta-")),e.shiftKey&&(r+="shift-"),n=r+n,this._keyHandlers[n]?this._keyHandlers[n](this,e,o):1!==n.length||o.collapsed||(this._recordUndoState(o),this._getRangeAndRemoveBookmark(o),se(o),this._ensureBottomLine(),this.setSelection(o),this._updatePath(o,!0))},Te.setKeyHandler=function(e,t){return this._keyHandlers[e]=t,this},Te._getHTML=function(){return this._body.innerHTML},Te._setHTML=function(e){var t=this._body;t.innerHTML=e;do _(t);while(t=f(t));this._ignoreChange=!0},Te.getHTML=function(e){var t,n,r,o,i,a=[];if(e&&(i=this.getSelection())&&this._saveRangeToBookmark(i),G)for(t=this._body;t=f(t);)t.textContent||t.querySelector("BR")||(n=this.createElement("BR"),t.appendChild(n),a.push(n));if(r=this._getHTML().replace(/\u200B/g,""),G)for(o=a.length;o--;)m(a[o]);return i&&this._getRangeAndRemoveBookmark(i),r},Te.setHTML=function(e){var t,n=this._doc.createDocumentFragment(),r=this.createElement("DIV");r.innerHTML=e,n.appendChild(N(r)),Qe(n,!0),je(n),S(n);for(var o=n;o=f(o);)_(o);this._ignoreChange=!0;for(var i=this._body;t=i.lastChild;)i.removeChild(t);i.appendChild(n),_(i),this._undoIndex=-1,this._undoStack.length=0,this._undoStackLength=0,this._isInUndoState=!1;var a=this._getRangeAndRemoveBookmark()||this._createRange(i.firstChild,0);return this._recordUndoState(a),this._getRangeAndRemoveBookmark(a),j?this._lastSelection=a:this.setSelection(a),this._updatePath(a,!0),this},Te.insertElement=function(e,t){if(t||(t=this.getSelection()),t.collapse(!0),s(e))ie(t,e),t.setStartAfter(e);else{for(var n,r,o=this._body,i=fe(t)||o;i!==o&&!i.nextSibling;)i=i.parentNode;i!==o&&(n=i.parentNode,r=y(n,i.nextSibling,o)),r?(o.insertBefore(e,r),t.setStart(r,0),t.setStart(r,0),ce(t)):(o.appendChild(e),o.appendChild(this.createDefaultBlock()),t.setStart(e,0),t.setEnd(e,0)),this.focus(),this.setSelection(t),this._updatePath(t)}return this},Te.insertImage=function(e,t){var n=this.createElement("IMG",B({src:e},t));return this.insertElement(n),n},Te.insertHTML=function(e){var t=this.getSelection(),n=this._doc.createDocumentFragment(),r=this.createElement("DIV");r.innerHTML=e,n.appendChild(N(r)),this._recordUndoState(t),this._getRangeAndRemoveBookmark(t);try{n.normalize(),Me(n),Qe(n,!0),je(n),Ve(n),S(n);for(var o=n;o=f(o);)_(o);de(t,n),Y||this._docWasChanged(),t.collapse(!1),this._ensureBottomLine(),this.setSelection(t),this._updatePath(t,!0)}catch(i){this.didError(i)}return this};var Xe=function(e,t,n){return function(){return this[e](t,n),this.focus()}};Te.addStyles=function(e){if(e){var t=this._doc.documentElement.firstChild,n=this.createElement("STYLE",{type:"text/css"});n.styleSheet?(t.appendChild(n),n.styleSheet.cssText=e):(n.appendChild(this._doc.createTextNode(e)),t.appendChild(n))}return this},Te.bold=Xe("changeFormat",{tag:"B"}),Te.italic=Xe("changeFormat",{tag:"I"}),Te.underline=Xe("changeFormat",{tag:"U"}),Te.strikethrough=Xe("changeFormat",{tag:"S"}),Te.subscript=Xe("changeFormat",{tag:"SUB"},{tag:"SUP"}),Te.superscript=Xe("changeFormat",{tag:"SUP"},{tag:"SUB"}),Te.removeBold=Xe("changeFormat",null,{tag:"B"}),Te.removeItalic=Xe("changeFormat",null,{tag:"I"}),Te.removeUnderline=Xe("changeFormat",null,{tag:"U"}),Te.removeStrikethrough=Xe("changeFormat",null,{tag:"S"}),Te.removeSubscript=Xe("changeFormat",null,{tag:"SUB"}),Te.removeSuperscript=Xe("changeFormat",null,{tag:"SUP"}),Te.makeLink=function(e,t){var n=this.getSelection();if(n.collapsed){var r=e.indexOf(":")+1;if(r)for(;"/"===e[r];)r+=1;ie(n,this._doc.createTextNode(e.slice(r)))}return t||(t={}),t.href=e,this.changeFormat({tag:"A",attributes:t},{tag:"A"},n),this.focus()},Te.removeLink=function(){return this.changeFormat(null,{tag:"A"},this.getSelection(),!0),this.focus()},Te.setFontFace=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"font",style:"font-family: "+e+", sans-serif;"}},{tag:"SPAN",attributes:{"class":"font"}}),this.focus()},Te.setFontSize=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"size",style:"font-size: "+("number"==typeof e?e+"px":e)}},{tag:"SPAN",attributes:{"class":"size"}}),this.focus()},Te.setTextColour=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"colour",style:"color: "+e}},{tag:"SPAN",attributes:{"class":"colour"}}),this.focus()},Te.setHighlightColour=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"highlight",style:"background-color: "+e}},{tag:"SPAN",attributes:{"class":"highlight"}}),this.focus()},Te.setTextAlignment=function(e){return this.forEachBlock(function(t){t.className=(t.className.split(/\s+/).filter(function(e){return!/align/.test(e)}).join(" ")+" align-"+e).trim(),t.style.textAlign=e},!0),this.focus()},Te.setTextDirection=function(e){return this.forEachBlock(function(t){t.dir=e},!0),this.focus()},Te.increaseQuoteLevel=Xe("modifyBlocks",Le),Te.decreaseQuoteLevel=Xe("modifyBlocks",xe),Te.makeUnorderedList=Xe("modifyBlocks",Ue),Te.makeOrderedList=Xe("modifyBlocks",Ie),Te.removeList=Xe("modifyBlocks",Pe),Te.increaseListLevel=Xe("modifyBlocks",we),Te.decreaseListLevel=Xe("modifyBlocks",Fe),top!==H?(H.editor=new O(e),H.onEditorLoad&&(H.onEditorLoad(H.editor),H.onEditorLoad=null)):"object"==typeof exports?module.exports=O:H.Squire=O}(document);