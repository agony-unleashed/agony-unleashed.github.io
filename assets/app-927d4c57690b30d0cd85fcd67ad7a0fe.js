!function(e){"use strict";function t(e,n){if(!(this instanceof t)){var i=new t(e,n);return i.open(),i}this.id=t.id++,this.setup(e,n),this.chainCallbacks(t._callbackChain)}if("undefined"==typeof e)return void("console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery."));var n=[],i=function(t){return n=e.grep(n,function(e){return e!==t&&e.$instance.closest("body").length>0})},a=function(e,t){var n={},i=new RegExp("^"+t+"([A-Z])(.*)");for(var a in e){var r=a.match(i);if(r){var s=(r[1]+r[2].replace(/([A-Z])/g,"-$1")).toLowerCase();n[s]=e[a]}}return n},r={keyup:"onKeyUp",resize:"onResize"},s=function(n){e.each(t.opened().reverse(),function(){return n.isDefaultPrevented()||!1!==this[r[n.type]](n)?void 0:(n.preventDefault(),n.stopPropagation(),!1)})},o=function(n){if(n!==t._globalHandlerInstalled){t._globalHandlerInstalled=n;var i=e.map(r,function(e,n){return n+"."+t.prototype.namespace}).join(" ");e(window)[n?"on":"off"](i,s)}};t.prototype={constructor:t,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",loading:"",persist:!1,otherClose:null,beforeOpen:e.noop,beforeContent:e.noop,beforeClose:e.noop,afterOpen:e.noop,afterContent:e.noop,afterClose:e.noop,onKeyUp:e.noop,onResize:e.noop,type:null,contentFilters:["jquery","image","html","ajax","iframe","text"],setup:function(t,n){"object"!=typeof t||t instanceof e!=0||n||(n=t,t=void 0);var i=e.extend(this,n,{target:t}),a=i.resetCss?i.namespace+"-reset":i.namespace,r=e(i.background||['<div class="'+a+"-loading "+a+'">','<div class="'+a+'-content">','<span class="'+a+"-close-icon "+i.namespace+'-close">',i.closeIcon,"</span>",'<div class="'+i.namespace+'-inner">'+i.loading+"</div>","</div>","</div>"].join("")),s="."+i.namespace+"-close"+(i.otherClose?","+i.otherClose:"");return i.$instance=r.clone().addClass(i.variant),i.$instance.on(i.closeTrigger+"."+i.namespace,function(t){var n=e(t.target);("background"===i.closeOnClick&&n.is("."+i.namespace)||"anywhere"===i.closeOnClick||n.closest(s).length)&&(t.preventDefault(),i.close())}),this},getContent:function(){if(this.persist!==!1&&this.$content)return this.$content;var t=this,n=this.constructor.contentFilters,i=function(e){return t.$currentTarget&&t.$currentTarget.attr(e)},a=i(t.targetAttr),r=t.target||a||"",s=n[t.type];if(!s&&r in n&&(s=n[r],r=t.target&&a),r=r||i("href")||"",!s)for(var o in n)t[o]&&(s=n[o],r=t[o]);if(!s){var c=r;if(r=null,e.each(t.contentFilters,function(){return s=n[this],s.test&&(r=s.test(c)),!r&&s.regex&&c.match&&c.match(s.regex)&&(r=c),!r}),!r)return"console"in window&&window.console.error("Featherlight: no content filter found "+(c?' for "'+c+'"':" (no target specified)")),!1}return s.process.call(t,r)},setContent:function(t){var n=this;return(t.is("iframe")||e("iframe",t).length>0)&&n.$instance.addClass(n.namespace+"-iframe"),n.$instance.removeClass(n.namespace+"-loading"),n.$instance.find("."+n.namespace+"-inner").not(t).slice(1).remove().end().replaceWith(e.contains(n.$instance[0],t[0])?"":t),n.$content=t.addClass(n.namespace+"-inner"),n},open:function(t){var i=this;if(i.$instance.hide().appendTo(i.root),!(t&&t.isDefaultPrevented()||i.beforeOpen(t)===!1)){t&&t.preventDefault();var a=i.getContent();if(a)return n.push(i),o(!0),i.$instance.fadeIn(i.openSpeed),i.beforeContent(t),e.when(a).always(function(e){i.setContent(e),i.afterContent(t)}).then(i.$instance.promise()).done(function(){i.afterOpen(t)})}return i.$instance.detach(),e.Deferred().reject().promise()},close:function(t){var n=this,a=e.Deferred();return n.beforeClose(t)===!1?a.reject():(0===i(n).length&&o(!1),n.$instance.fadeOut(n.closeSpeed,function(){n.$instance.detach(),n.afterClose(t),a.resolve()})),a.promise()},chainCallbacks:function(t){for(var n in t)this[n]=e.proxy(t[n],this,e.proxy(this[n],this))}},e.extend(t,{id:0,autoBind:"[data-featherlight]",defaults:t.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(t){return t instanceof e&&t},process:function(t){return this.persist!==!1?e(t):e(t).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,process:function(t){var n=this,i=e.Deferred(),a=new Image,r=e('<img src="'+t+'" alt="" class="'+n.namespace+'-image" />');return a.onload=function(){r.naturalWidth=a.width,r.naturalHeight=a.height,i.resolve(r)},a.onerror=function(){i.reject(r)},a.src=t,i.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(t){return e(t)}},ajax:{regex:/./,process:function(t){var n=e.Deferred(),i=e("<div></div>").load(t,function(e,t){"error"!==t&&n.resolve(i.contents()),n.fail()});return n.promise()}},iframe:{process:function(t){var n=new e.Deferred,i=e("<iframe/>").hide().attr("src",t).css(a(this,"iframe")).on("load",function(){n.resolve(i.show())}).appendTo(this.$instance.find("."+this.namespace+"-content"));return n.promise()}},text:{process:function(t){return e("<div>",{text:t})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(t,n){var i=this,a=new RegExp("^data-"+n+"-(.*)"),r={};return t&&t.attributes&&e.each(t.attributes,function(){var t=this.name.match(a);if(t){var n=this.value,s=e.camelCase(t[1]);if(e.inArray(s,i.functionAttributes)>=0)n=new Function(n);else try{n=e.parseJSON(n)}catch(o){}r[s]=n}}),r},extend:function(t,n){var i=function(){this.constructor=t};return i.prototype=this.prototype,t.prototype=new i,t.__super__=this.prototype,e.extend(t,this,n),t.defaults=t.prototype,t},attach:function(t,n,i){var a=this;"object"!=typeof n||n instanceof e!=0||i||(i=n,n=void 0),i=e.extend({},i);var r,s=i.namespace||a.defaults.namespace,o=e.extend({},a.defaults,a.readElementConfig(t[0],s),i);return t.on(o.openTrigger+"."+o.namespace,o.filter,function(s){var c=e.extend({$source:t,$currentTarget:e(this)},a.readElementConfig(t[0],o.namespace),a.readElementConfig(this,o.namespace),i),u=r||e(this).data("featherlight-persisted")||new a(n,c);"shared"===u.persist?r=u:u.persist!==!1&&e(this).data("featherlight-persisted",u),c.$currentTarget.blur(),u.open(s)}),t},current:function(){var e=this.opened();return e[e.length-1]||null},opened:function(){var t=this;return i(),e.grep(n,function(e){return e instanceof t})},close:function(){var e=this.current();return e?e.close():void 0},_onReady:function(){var t=this;t.autoBind&&(e(t.autoBind).each(function(){t.attach(e(this))}),e(document).on("click",t.autoBind,function(n){n.isDefaultPrevented()||(n.preventDefault(),t.attach(e(n.currentTarget)),e(n.target).click())}))},_callbackChain:{onKeyUp:function(e,t){return 27===t.keyCode?(this.closeOnEsc&&this.$instance.find("."+this.namespace+"-close:first").click(),!1):e(t)},onResize:function(e,t){if(this.$content.naturalWidth){var n=this.$content.naturalWidth,i=this.$content.naturalHeight;this.$content.css("width","").css("height","");var a=Math.max(n/parseInt(this.$content.parent().css("width"),10),i/parseInt(this.$content.parent().css("height"),10));a>1&&this.$content.css("width",""+n/a+"px").css("height",""+i/a+"px")}return e(t)},afterContent:function(e,t){var n=e(t);return this.onResize(t),n}}}),e.featherlight=t,e.fn.featherlight=function(e,n){return t.attach(this,e,n)},e(document).ready(function(){t._onReady()})}(jQuery),function(e,t,n,i){"use strict";function a(e){return("string"==typeof e||e instanceof String)&&(e=e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),e}function r(e){this.selector=e,this.query=""}var s=function(t){var n=e("head");n.prepend(e.map(t,function(e){return 0===n.has("."+e).length?'<meta class="'+e+'" />':void 0}))};s(["foundation-mq-small","foundation-mq-small-only","foundation-mq-medium","foundation-mq-medium-only","foundation-mq-large","foundation-mq-large-only","foundation-mq-xlarge","foundation-mq-xlarge-only","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),e(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof n.body&&FastClick.attach(n.body)});var o=function(t,i){if("string"==typeof t){if(i){var a;if(i.jquery){if(a=i[0],!a)return i}else a=i;return e(a.querySelectorAll(t))}return e(n.querySelectorAll(t))}return e(t,i)},c=function(e){var t=[];return e||t.push("data"),this.namespace.length>0&&t.push(this.namespace),t.push(this.name),t.join("-")},u=function(e){for(var t=e.split("-"),n=t.length,i=[];n--;)0!==n?i.push(t[n]):this.namespace.length>0?i.push(this.namespace,t[n]):i.push(t[n]);return i.reverse().join("-")},l=function(t,n){var i=this,a=function(){var a=o(this),r=!a.data(i.attr_name(!0)+"-init");a.data(i.attr_name(!0)+"-init",e.extend({},i.settings,n||t,i.data_options(a))),r&&i.events(this)};return o(this.scope).is("["+this.attr_name()+"]")?a.call(this.scope):o("["+this.attr_name()+"]",this.scope).each(a),"string"==typeof t?this[t].call(this,n):void 0},d=function(e,t){function n(){t(e[0])}function i(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime(),this.attr("src",e+t)}}return e.attr("src")?void(e[0].complete||4===e[0].readyState?n():i.call(e)):void n()};t.matchMedia||(t.matchMedia=function(){var e=t.styleMedia||t.media;if(!e){var i=n.createElement("style"),a=n.getElementsByTagName("script")[0],r=null;i.type="text/css",i.id="matchmediajs-test",a.parentNode.insertBefore(i,a),r="getComputedStyle"in t&&t.getComputedStyle(i,null)||i.currentStyle,e={matchMedium:function(e){var t="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return i.styleSheet?i.styleSheet.cssText=t:i.textContent=t,"1px"===r.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e){function n(){i&&(s(n),c&&e.fx.tick())}for(var i,a=0,r=["webkit","moz"],s=t.requestAnimationFrame,o=t.cancelAnimationFrame,c="undefined"!=typeof e.fx;a<r.length&&!s;a++)s=t[r[a]+"RequestAnimationFrame"],o=o||t[r[a]+"CancelAnimationFrame"]||t[r[a]+"CancelRequestAnimationFrame"];s?(t.requestAnimationFrame=s,t.cancelAnimationFrame=o,c&&(e.fx.timer=function(t){t()&&e.timers.push(t)&&!i&&(i=!0,n())},e.fx.stop=function(){i=!1})):(t.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-a)),r=t.setTimeout(function(){e(n+i)},i);return a=n+i,r},t.cancelAnimationFrame=function(e){clearTimeout(e)})}(e),r.prototype.toString=function(){return this.query||(this.query=o(this.selector).css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""))},t.Foundation={name:"Foundation",version:"5.5.3",media_queries:{small:new r(".foundation-mq-small"),"small-only":new r(".foundation-mq-small-only"),medium:new r(".foundation-mq-medium"),"medium-only":new r(".foundation-mq-medium-only"),large:new r(".foundation-mq-large"),"large-only":new r(".foundation-mq-large-only"),xlarge:new r(".foundation-mq-xlarge"),"xlarge-only":new r(".foundation-mq-xlarge-only"),xxlarge:new r(".foundation-mq-xxlarge")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,global:{namespace:i},init:function(e,n,i,a,r){var s=[e,i,a,r],c=[];if(this.rtl=/rtl/i.test(o("html").attr("dir")),this.scope=e||this.scope,this.set_namespace(),n&&"string"==typeof n&&!/reflow/i.test(n))this.libs.hasOwnProperty(n)&&c.push(this.init_lib(n,s));else for(var u in this.libs)c.push(this.init_lib(u,n));return o(t).load(function(){o(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),e},init_lib:function(t,n){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),n&&n.hasOwnProperty(t)?("undefined"!=typeof this.libs[t].settings?e.extend(!0,this.libs[t].settings,n[t]):"undefined"!=typeof this.libs[t].defaults&&e.extend(!0,this.libs[t].defaults,n[t]),this.libs[t].init.apply(this.libs[t],[this.scope,n[t]])):(n=n instanceof Array?n:new Array(n),this.libs[t].init.apply(this.libs[t],n))):function(){}},patch:function(e){e.scope=this.scope,e.namespace=this.global.namespace,e.rtl=this.rtl,e.data_options=this.utils.data_options,e.attr_name=c,e.add_namespace=u,e.bindings=l,e.S=this.utils.S},inherit:function(e,t){for(var n=t.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(e[n[i]]=this.utils[n[i]])},set_namespace:function(){var t=this.global.namespace===i?e(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===i||/false/i.test(t)?"":t},libs:{},utils:{S:o,throttle:function(e,t){var n=null;return function(){var i=this,a=arguments;null==n&&(n=setTimeout(function(){e.apply(i,a),n=null},t))}},debounce:function(e,t,n){var i,a;return function(){var r=this,s=arguments,o=function(){i=null,n||(a=e.apply(r,s))},c=n&&!i;return clearTimeout(i),i=setTimeout(o,t),c&&(a=e.apply(r,s)),a}},data_options:function(t,n){function i(e){return!isNaN(e-0)&&null!==e&&""!==e&&e!==!1&&e!==!0}function a(t){return"string"==typeof t?e.trim(t):t}n=n||"options";var r,s,o,c={},u=function(e){var t=Foundation.global.namespace;return t.length>0?e.data(t+"-"+n):e.data(n)},l=u(t);if("object"==typeof l)return l;for(o=(l||":").split(";"),r=o.length;r--;)s=o[r].split(":"),s=[s[0],s.slice(1).join(":")],/true/i.test(s[1])&&(s[1]=!0),/false/i.test(s[1])&&(s[1]=!1),i(s[1])&&(-1===s[1].indexOf(".")?s[1]=parseInt(s[1],10):s[1]=parseFloat(s[1])),2===s.length&&s[0].length>0&&(c[a(s[0])]=a(s[1]));return c},register_media:function(t,n){Foundation.media_queries[t]===i&&(e("head").append('<meta class="'+n+'"/>'),Foundation.media_queries[t]=a(e("."+n).css("font-family")))},add_custom_rule:function(e,t){if(t===i&&Foundation.stylesheet)Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[t];n!==i&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }",Foundation.stylesheet.cssRules.length)}},image_loaded:function(e,t){function n(e){for(var t=e.length,n=t-1;n>=0;n--)if(e.attr("height")===i)return!1;return!0}var a=this,r=e.length;(0===r||n(e))&&t(e),e.each(function(){d(a.S(this),function(){r-=1,0===r&&t(e)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)},match:function(e){return t.matchMedia(e).matches},is_small_up:function(){return this.match(Foundation.media_queries.small)},is_medium_up:function(){return this.match(Foundation.media_queries.medium)},is_large_up:function(){return this.match(Foundation.media_queries.large)},is_xlarge_up:function(){return this.match(Foundation.media_queries.xlarge)},is_xxlarge_up:function(){return this.match(Foundation.media_queries.xxlarge)},is_small_only:function(){return!(this.is_medium_up()||this.is_large_up()||this.is_xlarge_up()||this.is_xxlarge_up())},is_medium_only:function(){return this.is_medium_up()&&!this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_large_only:function(){return this.is_medium_up()&&this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xxlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&this.is_xxlarge_up()}}},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}}(jQuery,window,window.document),function(e,t,n,i){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.5.3",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,"small-only":Foundation.media_queries["small-only"],medium:Foundation.media_queries.medium,"medium-only":Foundation.media_queries["medium-only"],large:Foundation.media_queries.large,"large-only":Foundation.media_queries["large-only"],xlarge:Foundation.media_queries.xlarge,"xlarge-only":Foundation.media_queries["xlarge-only"],xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(t,n,i){if(null!==t&&/IMG/.test(t[0].nodeName)){var a=e.each(t,function(){this.src=n});if(new RegExp(n,"i").test(a))return;return t.attr("src",n),i(t[0].src)}var r=t.data(this.data_attr+"-last-path"),s=this;if(r!=n)return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(n)?(e(t).css("background-image","url("+n+")"),t.data("interchange-last-path",n),i(n)):e.get(n,function(e){t.html(e),t.data(s.data_attr+"-last-path",n),i()})}}},init:function(t,n,i){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),e.extend(!0,this.settings,n,i),this.bindings(n,i),this.reflow()},get_media_hash:function(){var e="";for(var t in this.settings.named_queries)e+=matchMedia(this.settings.named_queries[t]).matches.toString();return e},events:function(){var n,i=this;return e(t).off(".interchange").on("resize.fndtn.interchange",i.throttle(function(){var e=i.get_media_hash();e!==n&&i.resize(),n=e},50)),this},resize:function(){var t=this.cache;if(!this.images_loaded||!this.nodes_loaded)return void setTimeout(e.proxy(this.resize,this),50);for(var n in t)if(t.hasOwnProperty(n)){var i=this.results(n,t[n]);i&&this.settings.directives[i.scenario[1]].call(this,i.el,i.scenario[0],function(e){if(arguments[0]instanceof Array)var t=arguments[0];else var t=Array.prototype.slice.call(arguments,0);return function(){e.el.trigger(e.scenario[1],t)}}(i))}},results:function(e,t){var n=t.length;if(n>0)for(var i=this.S("["+this.add_namespace("data-uuid")+'="'+e+'"]');n--;){var a,r=t[n][2];if(a=this.settings.named_queries.hasOwnProperty(r)?matchMedia(this.settings.named_queries[r]):matchMedia(r),a.matches)return{el:i,scenario:t[n]}}return!1},load:function(e,t){return("undefined"==typeof this["cached_"+e]||t)&&this["update_"+e](),this["cached_"+e]},update_images:function(){var e=this.S("img["+this.data_attr+"]"),t=e.length,n=t,i=0,a=this.data_attr;for(this.cache={},this.cached_images=[],this.images_loaded=0===t;n--;){if(i++,e[n]){var r=e[n].getAttribute(a)||"";r.length>0&&this.cached_images.push(e[n])}i===t&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var e=this.S("["+this.data_attr+"]").not("img"),t=e.length,n=t,i=0,a=this.data_attr;for(this.cached_nodes=[],this.nodes_loaded=0===t;n--;){i++;var r=e[n].getAttribute(a)||"";r.length>0&&this.cached_nodes.push(e[n]),i===t&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(n){for(var i=this["cached_"+n].length;i--;)this.object(e(this["cached_"+n][i]));return e(t).trigger("resize.fndtn.interchange")},convert_directive:function(e){var t=this.trim(e);return t.length>0?t:"replace"},parse_scenario:function(e){var t=e[0].match(/(.+),\s*(\w+)\s*$/),n=e[1].match(/(.*)\)/);if(t)var i=t[1],a=t[2];else var r=e[0].split(/,\s*$/),i=r[0],a="";return[this.trim(i),this.convert_directive(a),this.trim(n[1])]},object:function(e){var t=this.parse_data_attr(e),n=[],i=t.length;if(i>0)for(;i--;){var a=t[i].split(/,\s?\(/);if(a.length>1){var r=this.parse_scenario(a);n.push(r)}}return this.store(e,n)},store:function(e,t){var n=this.random_str(),i=e.data(this.add_namespace("uuid",!0));return this.cache[i]?this.cache[i]:(e.attr(this.add_namespace("data-uuid"),n),this.cache[n]=t)},trim:function(t){return"string"==typeof t?e.trim(t):t},set_data_attr:function(e){return e?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(e){for(var t=e.attr(this.attr_name()).split(/\[(.*?)\]/),n=t.length,i=[];n--;)t[n].replace(/[\W\d]+/,"").length>4&&i.push(t[n]);return i},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,window,window.document),function(){"use strict";var e;$(document).foundation(),$.featherlight.defaults.loading='<img src="https://agony-unleashed.com/assets/puff-153e5981da238db15dc988b716662def.svg" />',e=function(e){var t;return t="and (min-width: "+e+")","only screen and (-webkit-min-device-pixel-ratio: 2) "+t+","+("only screen and (min--moz-device-pixel-ratio: 2) "+t+",")+("only screen and (-o-min-device-pixel-ratio: 2/1) "+t+",")+("only screen and (min-device-pixel-ratio: 2) "+t+",")+("only screen and (min-resolution: 192dpi) "+t+",")+("only screen and (min-resolution: 2dppx) "+t)},$(document).foundation("interchange",{named_queries:{medium_retina:e("40.063em"),large_retina:e("64.063em"),xlarge_retina:e("90.063em"),xxlarge_retina:e("120.063em")}})}.call(this);