define(["./core","./var/rnotwhite","./ajax/var/nonce","./ajax/var/rquery","./core/init","./ajax/parseJSON","./ajax/parseXML","./deferred"],function(e,t,a,r){function n(a){return function(r,n){"string"!=typeof r&&(n=r,r="*");var o,s=0,i=r.toLowerCase().match(t)||[];if(e.isFunction(n))for(;o=i[s++];)"+"===o[0]?(o=o.slice(1)||"*",(a[o]=a[o]||[]).unshift(n)):(a[o]=a[o]||[]).push(n)}}function o(t,a,r,n){function o(c){var d;return s[c]=!0,e.each(t[c]||[],function(e,t){var c=t(a,r,n);return"string"!=typeof c||i||s[c]?i?!(d=c):void 0:(a.dataTypes.unshift(c),o(c),!1)}),d}var s={},i=t===v;return o(a.dataTypes[0])||!s["*"]&&o("*")}function s(t,a){var r,n,o=e.ajaxSettings.flatOptions||{};for(r in a)void 0!==a[r]&&((o[r]?t:n||(n={}))[r]=a[r]);return n&&e.extend(!0,t,n),t}function i(e,t,a){for(var r,n,o,s,i=e.contents,c=e.dataTypes;"*"===c[0];)c.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(n in i)if(i[n]&&i[n].test(r)){c.unshift(n);break}if(c[0]in a)o=c[0];else{for(n in a){if(!c[0]||e.converters[n+" "+c[0]]){o=n;break}s||(s=n)}o=o||s}return o?(o!==c[0]&&c.unshift(o),a[o]):void 0}function c(e,t,a,r){var n,o,s,i,c,d={},f=e.dataTypes.slice();if(f[1])for(s in e.converters)d[s.toLowerCase()]=e.converters[s];for(o=f.shift();o;)if(e.responseFields[o]&&(a[e.responseFields[o]]=t),!c&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=o,o=f.shift())if("*"===o)o=c;else if("*"!==c&&c!==o){if(s=d[c+" "+o]||d["* "+o],!s)for(n in d)if(i=n.split(" "),i[1]===o&&(s=d[c+" "+i[0]]||d["* "+i[0]])){s===!0?s=d[n]:d[n]!==!0&&(o=i[0],f.unshift(i[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+c+" to "+o}}}return{state:"success",data:t}}var d=/#.*$/,f=/([?&])_=[^&]*/,p=/^(.*?):[ \t]*([^\r\n]*)$/gm,u=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,l=/^(?:GET|HEAD)$/,x=/^\/\//,y=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,h={},v={},m="*/".concat("*"),g=window.location.href,j=y.exec(g.toLowerCase())||[];return e.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:g,type:"GET",isLocal:u.test(j[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":m,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":e.parseJSON,"text xml":e.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,a){return a?s(s(t,e.ajaxSettings),a):s(e.ajaxSettings,t)},ajaxPrefilter:n(h),ajaxTransport:n(v),ajax:function(n,s){function u(t,a,r,n){var o,s,d,f,p,u=a;2!==k&&(k=2,b&&clearTimeout(b),T=void 0,w=n||"",J.readyState=t>0?4:0,o=t>=200&&300>t||304===t,r&&(f=i(R,J,r)),f=c(R,f,J,o),o?(R.ifModified&&(p=J.getResponseHeader("Last-Modified"),p&&(e.lastModified[S]=p),p=J.getResponseHeader("etag"),p&&(e.etag[S]=p)),204===t||"HEAD"===R.type?u="nocontent":304===t?u="notmodified":(u=f.state,s=f.data,d=f.error,o=!d)):(d=u,(t||!u)&&(u="error",0>t&&(t=0))),J.status=t,J.statusText=(a||u)+"",o?D.resolveWith(q,[s,u,J]):D.rejectWith(q,[J,u,d]),J.statusCode(O),O=void 0,L&&F.trigger(o?"ajaxSuccess":"ajaxError",[J,R,o?s:d]),N.fireWith(q,[J,u]),L&&(F.trigger("ajaxComplete",[J,R]),--e.active||e.event.trigger("ajaxStop")))}"object"==typeof n&&(s=n,n=void 0),s=s||{};var T,S,w,C,b,H,L,M,R=e.ajaxSetup({},s),q=R.context||R,F=R.context&&(q.nodeType||q.jquery)?e(q):e.event,D=e.Deferred(),N=e.Callbacks("once memory"),O=R.statusCode||{},E={},$={},k=0,A="canceled",J={readyState:0,getResponseHeader:function(e){var t;if(2===k){if(!C)for(C={};t=p.exec(w);)C[t[1].toLowerCase()]=t[2];t=C[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===k?w:null},setRequestHeader:function(e,t){var a=e.toLowerCase();return k||(e=$[a]=$[a]||e,E[e]=t),this},overrideMimeType:function(e){return k||(R.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>k)for(t in e)O[t]=[O[t],e[t]];else J.always(e[J.status]);return this},abort:function(e){var t=e||A;return T&&T.abort(t),u(0,t),this}};if(D.promise(J).complete=N.add,J.success=J.done,J.error=J.fail,R.url=((n||R.url||g)+"").replace(d,"").replace(x,j[1]+"//"),R.type=s.method||s.type||R.method||R.type,R.dataTypes=e.trim(R.dataType||"*").toLowerCase().match(t)||[""],null==R.crossDomain&&(H=y.exec(R.url.toLowerCase()),R.crossDomain=!(!H||H[1]===j[1]&&H[2]===j[2]&&(H[3]||("http:"===H[1]?"80":"443"))===(j[3]||("http:"===j[1]?"80":"443")))),R.data&&R.processData&&"string"!=typeof R.data&&(R.data=e.param(R.data,R.traditional)),o(h,R,s,J),2===k)return J;L=e.event&&R.global,L&&0===e.active++&&e.event.trigger("ajaxStart"),R.type=R.type.toUpperCase(),R.hasContent=!l.test(R.type),S=R.url,R.hasContent||(R.data&&(S=R.url+=(r.test(S)?"&":"?")+R.data,delete R.data),R.cache===!1&&(R.url=f.test(S)?S.replace(f,"$1_="+a++):S+(r.test(S)?"&":"?")+"_="+a++)),R.ifModified&&(e.lastModified[S]&&J.setRequestHeader("If-Modified-Since",e.lastModified[S]),e.etag[S]&&J.setRequestHeader("If-None-Match",e.etag[S])),(R.data&&R.hasContent&&R.contentType!==!1||s.contentType)&&J.setRequestHeader("Content-Type",R.contentType),J.setRequestHeader("Accept",R.dataTypes[0]&&R.accepts[R.dataTypes[0]]?R.accepts[R.dataTypes[0]]+("*"!==R.dataTypes[0]?", "+m+"; q=0.01":""):R.accepts["*"]);for(M in R.headers)J.setRequestHeader(M,R.headers[M]);if(R.beforeSend&&(R.beforeSend.call(q,J,R)===!1||2===k))return J.abort();A="abort";for(M in{success:1,error:1,complete:1})J[M](R[M]);if(T=o(v,R,s,J)){J.readyState=1,L&&F.trigger("ajaxSend",[J,R]),R.async&&R.timeout>0&&(b=setTimeout(function(){J.abort("timeout")},R.timeout));try{k=1,T.send(E,u)}catch(W){if(!(2>k))throw W;u(-1,W)}}else u(-1,"No Transport");return J},getJSON:function(t,a,r){return e.get(t,a,r,"json")},getScript:function(t,a){return e.get(t,void 0,a,"script")}}),e.each(["get","post"],function(t,a){e[a]=function(t,r,n,o){return e.isFunction(r)&&(o=o||n,n=r,r=void 0),e.ajax({url:t,type:a,dataType:o,data:r,success:n})}}),e});