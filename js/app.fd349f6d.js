(function(e){function t(t){for(var r,n,c=t[0],o=t[1],d=t[2],p=0,l=[];p<c.length;p++)n=c[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&l.push(i[n][0]),i[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(l.length)l.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(r=!1)}r&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},i={app:0},s=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/Prettifier/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"078e":function(e,t,a){},"0bd5":function(e,t,a){},"1e20":function(e,t,a){},3053:function(e,t,a){e.exports=a.p+"img/product-demo.59b761ba.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23");function i(e,t,a,i,s,n){var c=Object(r["l"])("Landing");return Object(r["h"])(),Object(r["c"])(c)}var s=a("3053"),n=a.n(s),c=Object(r["g"])("div",{class:"heading"},[Object(r["g"])("h1",{class:"display"},"Prettifier")],-1),o=Object(r["g"])("div",{class:"showcase"},[Object(r["g"])("div",{class:"container"},[Object(r["g"])("div",{class:"product-intro"},[Object(r["g"])("div",{class:"product-intro-heading"},"Beautify Large Url's"),Object(r["g"])("div",{class:"product-intro-content"}," Prettifier is multipurpose beautifying tool which is efficient, fast , reliable . Prettifier can parse and beautify large URL's , json payload, and many more. ")]),Object(r["g"])("div",{class:"product-image"},[Object(r["g"])("img",{src:n.a,alt:"placeholder"})])]),Object(r["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},[Object(r["g"])("path",{fill:"#ffffff","fill-opacity":"1",d:"M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,181.3C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"})])],-1),d={class:"parser-wrapper"},u={class:"main-parser"},p=Object(r["e"])('<div class="parser-header"><div class="parser-buttons"><div class="navigation-button close"></div><div class="navigation-button minimise"></div><div class="navigation-button maximise"></div></div></div>',1);function l(e,t,a,i,s,n){var l=Object(r["l"])("Features"),f=Object(r["l"])("Parser"),v=Object(r["l"])("Footer");return Object(r["h"])(),Object(r["c"])(r["a"],null,[c,o,Object(r["g"])(l),Object(r["g"])("div",d,[Object(r["g"])("div",u,[p,Object(r["g"])(f)])]),Object(r["g"])(v)],64)}var f={class:"parser-input",ref:"parser_input"},v={class:"parser-output",ref:"parser_output"},b={contenteditable:"true",autocorrect:"false",autocapitalize:"false",autocomplete:"off",spellcheck:"false",tabindex:"0",class:"parser-output-content",ref:"output_text"},h={key:0},g={key:0,class:"QueryParameters"},j={key:1},O={class:"key"},m={class:"value"},y={class:"parsing-error"},_={class:"parsing-error-message"},w=Object(r["g"])("i",{class:"fa fa-exclamation-triangle parsing-error-icon"},null,-1);function k(e,t,a,i,s,n){return Object(r["h"])(),Object(r["c"])("div",{class:"parser-content",ref:"parser_content",onMousemove:t[4]||(t[4]=function(e){return n.dividerhandler(e)})},[Object(r["g"])("div",f,[Object(r["p"])(Object(r["g"])("textarea",{autocorrect:"false",autocapitalize:"false",autocomplete:"off",spellcheck:"false",tabindex:"0",ref:"input_text",onKeyup:t[1]||(t[1]=function(){return n.keyUpHandler.apply(n,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.input_text=e}),placeholder:"Write your URL Here!"},null,544),[[r["n"],s.input_text]])],512),Object(r["g"])("div",{class:"parser-divider",ref:"parser_divider",onMousedown:t[3]||(t[3]=function(e){return s.isDraging=!0})},null,544),Object(r["g"])("div",v,[Object(r["g"])("div",b,[s.render&&!s.isBroken?(Object(r["h"])(),Object(r["c"])("div",h,[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["k"])(s.reactive_data,(function(e,t){return Object(r["h"])(),Object(r["c"])("div",{class:"parsedDiv",key:t},["QueryParameters"===e.key?(Object(r["h"])(),Object(r["c"])("span",g,Object(r["m"])(e.value),1)):(Object(r["h"])(),Object(r["c"])("span",j,[Object(r["g"])("span",O,Object(r["m"])(e.key)+" : ",1),Object(r["g"])("span",m,Object(r["m"])(e.value),1)]))])})),128))])):Object(r["d"])("",!0)],512),Object(r["p"])(Object(r["g"])("div",y,[Object(r["g"])("div",_,[w,Object(r["f"])(" "+Object(r["m"])(s.parsing_error_message),1)])],512),[[r["o"],s.isBroken]])],512)],544)}a("4160"),a("a434"),a("498a"),a("159b"),a("4de4"),a("ac1f"),a("1276");var x=a("2909"),P=a("d4ec"),L=a("bee2"),M=function(){function e(t){Object(P["a"])(this,e),this.uri=t.trim(),this.Verifier=/^((http|https|ftp|mailto|file|data|irc):)(\/\/([^/?#]*))([^?#]*)(\?([^#]*))?(#(.*))?/,this.seperator=/^(http|https|ftp|mailto|file|data|irc):\/\/([^/?#]*)([^?#]*)?\??([^#]*)?#?(.*)?/g}return Object(L["a"])(e,[{key:"decoder",value:function(){this.decoded_URI=decodeURIComponent(this.uri)}},{key:"bodyParser",value:function(){var e=this,t=["Scheme","Authority","Path","Query","Fragment"],a=this.seperator.exec(this.decoded_URI);return a.shift(),this.componentsMapper={},t.forEach((function(t,r){e.componentsMapper[t]=a[r]})),this.parsedBody=[],t.forEach((function(t){void 0!==e.componentsMapper[t]&&e.parsedBody.push({key:t,value:e.componentsMapper[t]})})),this.parsedBody=this.parsedBody.filter((function(e){return"Query"!==e.key})),this.parsedBody}},{key:"parsedOutput",value:function(){if(this.decoder(),this.Verifier.test(this.decoded_URI)){var e=[];if(e.push.apply(e,Object(x["a"])(this.bodyParser())),void 0!==this.componentsMapper["Query"]){e.push({key:"QueryParameters",value:"---------------QueryParameters---------------"});var t=this.componentsMapper["Query"].split("&");t.forEach((function(t){e.push({key:t.split("=")[0],value:t.split("=")[1]})}))}return e}throw new Error("Malformed URI")}}]),e}(),U=M,B={name:"Parser",components:{},data:function(){return{isDraging:!1,isBroken:!1,input_text:"",reactive_data:[],render:!1,parsing_error_message:""}},methods:{dividerhandler:function(e){var t=this.$refs.parser_content.getBoundingClientRect(),a=t.right-t.left,r=e.clientX-t.left;this.isDraging&&r>=15&&r<=a-30&&(this.$refs.parser_divider.style.left="".concat(r,"px"),this.$refs.parser_input.style.width="".concat(r-10,"px"),this.$refs.parser_output.style.width="".concat(a-r,"px"),this.$refs.input_text.blur(),this.$refs.output_text.blur())},keyUpHandler:function(e){var t=this,a=new U(this.input_text);try{if(0===e.target.value.trim().length)throw new Error("URL is Empty");var r=a.parsedOutput();this.render?(this.reactive_data=[],r.forEach((function(e,a){t.reactive_data.splice(a,0,{key:e.key,value:e.value})}))):this.reactive_data=r,this.render=!0,this.isBroken=!1}catch(i){"URL is Empty"===i.message?(this.parsing_error_message="Start, Typing the URL",this.isBroken=!0):(this.parsing_error_message="Malformed URL",this.isBroken=!0)}}},mounted:function(){var e=this;document.addEventListener("mouseup",(function(){e.isDraging=!1}))}};a("5a8b");B.render=k;var R=B,E=Object(r["q"])("data-v-79820a57");Object(r["j"])("data-v-79820a57");var C={class:"features-wrapper"},S=Object(r["e"])('<div class="features" data-v-79820a57><div class="feature" data-v-79820a57><div class="feature-icon" data-v-79820a57><i class="fa fa-fire fa-2x" data-v-79820a57></i></div><div class="feature-info" data-v-79820a57><div class="feature-title" data-v-79820a57>Free</div><div class="feature-description" data-v-79820a57> Prettifier is completely free and open source for personal and enterprise usage </div></div></div><div class="feature" data-v-79820a57><div class="feature-icon" data-v-79820a57><i class="fa fa-rocket fa-2x" data-v-79820a57></i></div><div class="feature-info" data-v-79820a57><div class="feature-title" data-v-79820a57>Fast</div><div class="feature-description" data-v-79820a57> Prettifier uses Javascript Regex Engine and VUE JS framework which makes it blazingly fast </div></div></div><div class="feature" data-v-79820a57><div class="feature-icon" data-v-79820a57><i class="fa fa-wrench fa-2x" data-v-79820a57></i></div><div class="feature-info" data-v-79820a57><div class="feature-title" data-v-79820a57>Browser Support</div><div class="feature-description" data-v-79820a57> Prettifier is supported by all the major browser and works perfectly in all of them. </div></div></div></div>',1);Object(r["i"])();var F=E((function(e,t,a,i,s,n){return Object(r["h"])(),Object(r["c"])("div",C,[S])})),Q={name:"features",components:{}};a("a226");Q.render=F,Q.__scopeId="data-v-79820a57";var I=Q,$=Object(r["q"])("data-v-52c6aca4");Object(r["j"])("data-v-52c6aca4");var D={class:"footer-wrapper"},H=Object(r["e"])('<div class="footer" data-v-52c6aca4><div class="copyright" data-v-52c6aca4><div class="brand_name" data-v-52c6aca4>Prettifier</div><div class="copy" data-v-52c6aca4>Copyright © 2020</div></div><div class="made-by" data-v-52c6aca4>Made with ❤ by Himanshu Yadav</div></div>',1);Object(r["i"])();var J=$((function(e,t,a,i,s,n){return Object(r["h"])(),Object(r["c"])("div",D,[H])})),V={name:"Footer",components:{}};a("aa7a");V.render=J,V.__scopeId="data-v-52c6aca4";var z=V,T={name:"Landing",components:{Parser:R,Features:I,Footer:z}};a("7b75");T.render=l;var q=T,A={name:"App",components:{Landing:q}};a("64be");A.render=i;var K=A;Object(r["b"])(K).mount("#app")},"5a8b":function(e,t,a){"use strict";a("0bd5")},"5cc8":function(e,t,a){},"64be":function(e,t,a){"use strict";a("c894")},"7b75":function(e,t,a){"use strict";a("078e")},a226:function(e,t,a){"use strict";a("5cc8")},aa7a:function(e,t,a){"use strict";a("1e20")},c894:function(e,t,a){}});
//# sourceMappingURL=app.fd349f6d.js.map