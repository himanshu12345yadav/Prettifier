(function(e){function t(t){for(var r,c,s=t[0],o=t[1],d=t[2],l=0,v=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&v.push(i[c][0]),i[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(v.length)v.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(r=!1)}r&&(n.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},i={app:0},n=[];function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Prettifier/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3053:function(e,t,a){e.exports=a.p+"img/product-demo.df10b133.png"},3068:function(e,t,a){},"45a0":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23");function i(e,t,a,i,n,c){var s=Object(r["l"])("Landing");return Object(r["h"])(),Object(r["c"])(s)}var n=a("3053"),c=a.n(n),s=Object(r["g"])("div",{class:"heading"},[Object(r["g"])("h1",{class:"display"},"Prettifier")],-1),o=Object(r["g"])("div",{class:"showcase"},[Object(r["g"])("div",{class:"container"},[Object(r["g"])("div",{class:"product-intro"},[Object(r["g"])("div",{class:"product-intro-heading"},"Beautify Large Url's"),Object(r["g"])("div",{class:"product-intro-content"}," Prettifier is multipurpose beautifying tool which is efficient, fast , reliable . Prettifier can parse and beautify large URL's , json payload, and many more. ")]),Object(r["g"])("div",{class:"product-image"},[Object(r["g"])("img",{src:c.a,alt:"placeholder"})])]),Object(r["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},[Object(r["g"])("path",{fill:"#ffffff","fill-opacity":"1",d:"M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,181.3C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"})])],-1),d={class:"parser-wrapper"},u={class:"main-parser"},l=Object(r["e"])('<div class="parser-header"><div class="parser-buttons"><div class="navigation-button close"></div><div class="navigation-button minimise"></div><div class="navigation-button maximise"></div></div></div>',1);function v(e,t,a,i,n,c){var v=Object(r["l"])("Features"),f=Object(r["l"])("Parser"),p=Object(r["l"])("Footer");return Object(r["h"])(),Object(r["c"])(r["a"],null,[s,o,Object(r["g"])(v),Object(r["g"])("div",d,[Object(r["g"])("div",u,[l,Object(r["g"])(f)])]),Object(r["g"])(p)],64)}var f={class:"parser-input",ref:"parser_input"},p={class:"parser-output",ref:"parser_output"},b={contenteditable:"true",autocorrect:"false",autocapitalize:"false",autocomplete:"off",spellcheck:"false",tabindex:"0",class:"parser-output-content",ref:"output_text"},g={key:0},h={class:"key"},j={class:"value"},O={class:"parsing-error"},m={class:"parsing-error-message"},y=Object(r["g"])("i",{class:"fa fa-exclamation-triangle parsing-error-icon"},null,-1);function _(e,t,a,i,n,c){return Object(r["h"])(),Object(r["c"])("div",{class:"parser-content",ref:"parser_content",onMousemove:t[4]||(t[4]=function(e){return c.dividerhandler(e)})},[Object(r["g"])("div",f,[Object(r["p"])(Object(r["g"])("textarea",{autocorrect:"false",autocapitalize:"false",autocomplete:"off",spellcheck:"false",tabindex:"0",ref:"input_text",onKeyup:t[1]||(t[1]=function(){return c.keyUpHandler.apply(c,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.input_text=e}),placeholder:"Write your URL Here!"},null,544),[[r["n"],n.input_text]])],512),Object(r["g"])("div",{class:"parser-divider",ref:"parser_divider",onMousedown:t[3]||(t[3]=function(e){return n.isDraging=!0})},null,544),Object(r["g"])("div",p,[Object(r["g"])("div",b,[n.render&&!n.isBroken?(Object(r["h"])(),Object(r["c"])("div",g,[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["k"])(n.reactive_data,(function(e,t){return Object(r["h"])(),Object(r["c"])("div",{class:"parsedDiv",key:t},[Object(r["g"])("span",h,Object(r["m"])(e.key)+" : ",1),Object(r["g"])("span",j,Object(r["m"])(e.value),1)])})),128))])):Object(r["d"])("",!0)],512),Object(r["p"])(Object(r["g"])("div",O,[Object(r["g"])("div",m,[y,Object(r["f"])(" "+Object(r["m"])(n.parsing_error_message),1)])],512),[[r["o"],n.isBroken]])],512)],544)}a("4160"),a("a434"),a("498a"),a("159b"),a("ac1f"),a("466d");var w=a("2909"),x=a("d4ec"),k=a("bee2"),R=function(){function e(t){Object(x["a"])(this,e),this.uri=t.trim(),this.domainRegex=/\w+:\/\/[\w\d-_./]+/g,this.valueRegex=/(?<=&?\w+=)[=\w,.-:_-]+/g,this.keyRegex=/(?<=[&?])[\w\d]+/g}return Object(k["a"])(e,[{key:"decoder",value:function(){this.decoded_URI=decodeURIComponent(this.uri)}},{key:"parsedOutput",value:function(){this.decoder();var e=[],t=this.decoded_URI.match(this.domainRegex);if(e.push({key:"Authority",value:t[0]}),t[0].length!==this.decoded_URI.length){var a=Object(w["a"])(this.decoded_URI.match(this.keyRegex)),r=Object(w["a"])(this.decoded_URI.match(this.valueRegex));r.forEach((function(t,r){var i=a[r],n={key:i,value:t};e.push(n)}))}return e}}]),e}(),P=R,U={name:"Parser",components:{},data:function(){return{isDraging:!1,isBroken:!1,input_text:"",reactive_data:[],render:!1,parsing_error_message:""}},methods:{dividerhandler:function(e){var t=this.$refs.parser_content.getBoundingClientRect(),a=t.right-t.left,r=e.clientX-t.left;this.isDraging&&r>=15&&r<=a-30&&(this.$refs.parser_divider.style.left="".concat(r,"px"),this.$refs.parser_input.style.width="".concat(r-10,"px"),this.$refs.parser_output.style.width="".concat(a-r,"px"),this.$refs.input_text.blur(),this.$refs.output_text.blur())},keyUpHandler:function(e){var t=this,a=new P(this.input_text);try{if(0===e.target.value.trim().length)throw new Error("URL is Empty");var r=a.parsedOutput();this.render?(this.reactive_data=[],r.forEach((function(e,a){t.reactive_data.splice(a,0,{key:e.key,value:e.value})}))):this.reactive_data=r,this.render=!0,this.isBroken=!1}catch(i){"URL is Empty"===i.message?(this.parsing_error_message="Start, Typing the URL",this.isBroken=!0):(this.parsing_error_message="Malformed URL",this.isBroken=!0)}}},mounted:function(){var e=this;document.addEventListener("mouseup",(function(){e.isDraging=!1}))}};a("5a8b");U.render=_;var L=U,B=Object(r["q"])("data-v-79820a57");Object(r["j"])("data-v-79820a57");var C={class:"features-wrapper"},M=Object(r["e"])('<div class="features" data-v-79820a57><div class="feature" data-v-79820a57><div class="feature-icon" data-v-79820a57><i class="fa fa-fire fa-2x" data-v-79820a57></i></div><div class="feature-info" data-v-79820a57><div class="feature-title" data-v-79820a57>Free</div><div class="feature-description" data-v-79820a57> Prettifier is completely free and open source for personal and enterprise usage </div></div></div><div class="feature" data-v-79820a57><div class="feature-icon" data-v-79820a57><i class="fa fa-rocket fa-2x" data-v-79820a57></i></div><div class="feature-info" data-v-79820a57><div class="feature-title" data-v-79820a57>Fast</div><div class="feature-description" data-v-79820a57> Prettifier uses Javascript Regex Engine and VUE JS framework which makes it blazingly fast </div></div></div><div class="feature" data-v-79820a57><div class="feature-icon" data-v-79820a57><i class="fa fa-wrench fa-2x" data-v-79820a57></i></div><div class="feature-info" data-v-79820a57><div class="feature-title" data-v-79820a57>Browser Support</div><div class="feature-description" data-v-79820a57> Prettifier is supported by all the major browser and works perfectly in all of them. </div></div></div></div>',1);Object(r["i"])();var E=B((function(e,t,a,i,n,c){return Object(r["h"])(),Object(r["c"])("div",C,[M])})),I={name:"features",components:{}};a("a226");I.render=E,I.__scopeId="data-v-79820a57";var S=I,F=Object(r["q"])("data-v-52c6aca4");Object(r["j"])("data-v-52c6aca4");var $={class:"footer-wrapper"},D=Object(r["e"])('<div class="footer" data-v-52c6aca4><div class="copyright" data-v-52c6aca4><div class="brand_name" data-v-52c6aca4>Prettifier</div><div class="copy" data-v-52c6aca4>Copyright © 2020</div></div><div class="made-by" data-v-52c6aca4>Made with ❤ by Himanshu Yadav</div></div>',1);Object(r["i"])();var H=F((function(e,t,a,i,n,c){return Object(r["h"])(),Object(r["c"])("div",$,[D])})),J={name:"Footer",components:{}};a("aa7a");J.render=H,J.__scopeId="data-v-52c6aca4";var z=J,T={name:"Landing",components:{Parser:L,Features:S,Footer:z}};a("7b75");T.render=v;var q=T,A={name:"App",components:{Landing:q}};a("64be");A.render=i;var V=A;Object(r["b"])(V).mount("#app")},"5a8b":function(e,t,a){"use strict";a("f54d")},"64be":function(e,t,a){"use strict";a("3068")},"7b75":function(e,t,a){"use strict";a("c215")},"8d31":function(e,t,a){},a226:function(e,t,a){"use strict";a("45a0")},aa7a:function(e,t,a){"use strict";a("8d31")},c215:function(e,t,a){},f54d:function(e,t,a){}});
//# sourceMappingURL=app.fbec5c83.js.map