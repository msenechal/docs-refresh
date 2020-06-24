!function(){"use strict";var s=/^sect(\d)$/,n=document.querySelector(".nav-container"),i=document.querySelector(".nav-toggle");if(n&&i){i&&i.addEventListener("click",function(e){if(i.classList.contains("is-active"))return r(e);var t=document.documentElement;t.classList.add("is-clipped--nav"),i.classList.add("is-active"),n.classList.add("is-active"),t.addEventListener("click",r),v(e)}),n&&n.addEventListener("click",v);var o=n.querySelector("[data-panel=menu]");if(!o)return;var c=n.querySelector(".nav"),l=o.querySelector(".is-current-page"),d=l;l?(u(l),m(o,l.querySelector(".nav-link"))):o.scrollTop=0,f(o,".nav-item-toggle").forEach(function(e){var t=e.parentElement;e.addEventListener("click",a.bind(t));var n=function(e,t){var n=e.nextElementSibling;if(!n)return;return(!t||n[n.matches?"matches":"msMatchesSelector"](t))&&n}(e,".nav-text");n&&(n.style.cursor="pointer",n.addEventListener("click",a.bind(t)))}),c.querySelector(".context")&&c.querySelector(".context").addEventListener("click",function(){var e=c.querySelector(".is-active[data-panel]"),t="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),c.querySelector("[data-panel="+t+"]").classList.toggle("is-active")}),o.addEventListener("mousedown",function(e){1<e.detail&&e.preventDefault()}),o&&o.querySelector('.nav-link[href^="#"]')&&(window.location.hash&&e(),window.addEventListener("hashchange",e))}function e(){var e,t,n=window.location.hash;if(n&&(n.indexOf("%")&&(n=decodeURIComponent(n)),!(e=o.querySelector('.nav-link[href="'+n+'"]')))){var i=document.getElementById(n.slice(1));if(i)for(var a=i,c=document.querySelector("article.doc");(a=a.parentNode)&&a!==c;){var r=a.id;if(!r&&(r=a.className.match(s))&&(r=(a.firstElementChild||{}).id),r&&(e=o.querySelector('.nav-link[href="#'+r+'"]')))break}}if(e)t=e.parentNode;else{if(!d)return;e=(t=d).querySelector(".nav-link")}t!==l&&(f(o,".nav-item.is-active").forEach(function(e){e.classList.remove("is-active","is-current-path","is-current-page")}),t.classList.add("is-current-page"),u(l=t),m(o,e))}function u(e){for(var t,n=e.parentNode;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}function a(){this.classList.toggle("is-active")}function r(e){var t=document.documentElement;t.classList.remove("is-clipped--nav"),i.classList.remove("is-active"),n.classList.remove("is-active"),t.removeEventListener("click",r),v(e)}function v(e){e.stopPropagation()}function m(e,t){var n=e.getBoundingClientRect(),i=n.height,a=window.getComputedStyle(c);"sticky"===a.position&&(i-=n.top-parseFloat(a.top)),e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-i)+t.offsetTop)}function f(e,t){return[].slice.call(e.querySelectorAll(t))}}();
!function(){"use strict";var e=document.querySelector("aside.toc.sidebar");if(e){if(document.querySelector("body.-toc"))return e.parentNode.removeChild(e);var t=parseInt(e.dataset.levels||2);if(!(t<0)){for(var d,n,o,c,s=document.querySelector("article.doc"),i=[],r=0;r<=t;r++)i.push(r?".sect"+r+">h"+(r+1)+"[id]":"h1[id].sect0");if(n=i.join(","),o=s,!(d=[].slice.call((o||document).querySelectorAll(n))).length)return e.parentNode.removeChild(e);var l={},u=d.reduce(function(e,t){var n=document.createElement("a");n.textContent=t.textContent,l[n.href="#"+t.id]=n;var o=document.createElement("li");return o.dataset.level=parseInt(t.nodeName.slice(1))-1,o.appendChild(n),e.appendChild(o),e},document.createElement("ul")),a=e.querySelector(".toc-menu");a||((a=document.createElement("div")).className="toc-menu");var f=document.createElement("h3");f.textContent=e.dataset.title||"Contents",a.appendChild(f),a.appendChild(u);var m,v=!document.getElementById("toc")&&s.querySelector("h1.page ~ :not(.is-before-toc)");v&&((m=document.createElement("aside")).className="toc embedded",m.appendChild(a.cloneNode(!0)),v.parentNode.insertBefore(m,v)),window.addEventListener("load",function(){p(),window.addEventListener("scroll",p)})}}function p(){var t,e=window.pageYOffset,n=1.15*h(document.documentElement,"fontSize"),o=s.offsetTop;if(e&&window.innerHeight+e+2>=document.documentElement.scrollHeight){c=Array.isArray(c)?c:Array(c||0);var i=[],r=d.length-1;return d.forEach(function(e,t){var n="#"+e.id;t===r||e.getBoundingClientRect().top+h(e,"paddingTop")>o?(i.push(n),c.indexOf(n)<0&&l[n].classList.add("is-active")):~c.indexOf(n)&&l[c.shift()].classList.remove("is-active")}),u.scrollTop=u.scrollHeight-u.offsetHeight,void(c=1<i.length?i:i[0])}if(Array.isArray(c)&&(c.forEach(function(e){l[e].classList.remove("is-active")}),c=void 0),d.some(function(e){if(e.getBoundingClientRect().top+h(e,"paddingTop")-n>o)return!0;t="#"+e.id}),t){if(t===c)return;c&&l[c].classList.remove("is-active");var a=l[t];a.classList.add("is-active"),u.scrollHeight>u.offsetHeight&&(u.scrollTop=Math.max(0,a.offsetTop+a.offsetHeight-u.offsetHeight)),c=t}else c&&(l[c].classList.remove("is-active"),c=void 0)}function h(e,t){return parseFloat(window.getComputedStyle(e)[t])}}();
!function(){"use strict";var o=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function i(e){return e&&(~e.indexOf("%")?decodeURIComponent(e):e).slice(1)}function c(e){e&&(window.location.hash="#"+this.id,e.preventDefault()),window.scrollTo(0,function e(t,n){return o.contains(t)?e(t.offsetParent,t.offsetTop+n):n}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var n,o;(n=i(window.location.hash))&&(o=document.getElementById(n))&&(c.bind(o)(),setTimeout(c.bind(o),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t,n;(t=i(e.hash))&&(n=document.getElementById(t))&&e.addEventListener("click",c.bind(n))})}();
!function(){"use strict";var t,e=document.querySelector(".page-versions .version-menu-toggle");e&&(t=document.querySelector(".page-versions"),e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")}))}();
document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&t.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("is-active"),document.getElementById(e.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})})});
document.addEventListener("DOMContentLoaded",function(){function l(e){var t=document.createElement("div");t.innerHTML=e,Array.from(t.querySelectorAll("i.conum, b")).map(function(e){t.removeChild(e)});var n=document.createElement("textarea");return n.innerHTML=t.innerHTML,n.value}var m=["gram"],s=function(e,t,n){var r=document.createElement(e);return r.setAttribute("class",t),Array.isArray(n)&&n.forEach(function(e){r.appendChild(e)}),r};Array.from(document.querySelectorAll(".highlight")).map(function(e){var t,n,r,a,o,c=e.querySelector("code"),d=e.parentNode,i=c.innerHTML,u=c.hasAttribute("class")&&c.getAttribute("class").match(/language-([a-z0-9-])+/)[0].replace("language-","");-1<m.indexOf(u)||((t=document.createElement("div")).className="code-language",u&&(t.innerHTML=u),(n=s("button","btn btn-copy",[document.createTextNode("Copy to Clipboard")])).addEventListener("click",function(e){var t,n;e.preventDefault(),t=i,(n=document.createElement("textarea")).value=l(t),n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)}),r=[t,n],"cypher"===u&&((a=s("button","btn btn-run btn-primary",[document.createTextNode("Run in Browser")])).addEventListener("click",function(e){e.preventDefault(),a.addEventListener("click",function(e){e.preventDefault(),window.location.href="neo4j-desktop://graphapps/neo4j-browser?cmd=edit&arg="+encodeURIComponent(l(i))})}),r.push(a)),o=s("div","code-header",r),e.className+=" has-header",d.insertBefore(o,e))})});
!function(){"use strict";var o,i,n,r=document.querySelector(".feedback");r&&(o=r.innerHTML,i=function(e,t,o){var a="project="+document.querySelector("body").className.replace("article ","");a+="&url="+encodeURIComponent(window.location.href),a+="&helpful="+e.toString(),e||(a+="&reason="+encodeURIComponent(t),o&&(a+="&moreInformation="+encodeURIComponent(o))),fetch("https://uglfznxroe.execute-api.us-east-1.amazonaws.com/dev/Feedback",{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a})},(n=function(){r.classList.remove("negative"),r.classList.remove("positive"),r.innerHTML=o;var e=r.querySelector(".yes"),t=r.querySelector(".no");e.addEventListener("click",function(e){e.preventDefault(),i(!0),r.classList.add("positive"),r.innerHTML='<div class="header thank-you-positive"><p><strong>Thank you for your feedback!</strong></p></div>'}),t.addEventListener("click",function(e){e.preventDefault(),function(){r.classList.add("negative"),r.innerHTML='<form class="form"><div class="header"><p><strong>We&rsquo;re sorry to hear that. How could we improve this page?</strong></p><svg width="14px" height="22px" viewBox="0 0 22 22" role="button" class="cancel"><line x1="19.5833333" y1="0.416666667" x2="0.416666667" y2="19.5833333" id="Shape"></line><line x1="19.5833333" y1="19.5833333" x2="0.416666667" y2="0.416666667" id="Shape"></line></svg></div><div><input id="missing" type="radio" data-reason="missing" name="specific" value="missing" checked="true"><label for="missing">It has missing information</label></div><div><input id="hard-to-follow" type="radio" data-reason="hard-to-follow" name="specific" value="hard-to-follow"><label for="hard-to-follow">It&rsquo;s hard to follow or confusing</label></div><div><input id="inaccurate" type="radio" data-reason="inaccurate" name="specific" value="inaccurate"><label for="inaccurate">It&rsquo;s inaccurate, out of date, or doesn&rsquo;t work</label></div><div><input id="other" type="radio" data-reason="other" name="specific" value="other"><label for="other">Something else</label></div><div class="more-information"><label for="more-information"><strong>More information</strong></label><textarea id="more-information" type="text" rows="3" cols="50" name="more-information" style="resize:none"></textarea></div><div class="buttons"><input type="button" class="primary" data-submit="submit" value="Submit feedback"><input type="button" class="secondary" data-submit="skip" value="Skip"></div></div>';var a='<div class="header thank-you-positive"><p><strong>Thank you for your feedback!</strong></p><p>We will take this information into account while updating our documentation.</p></div>';r.querySelector(".cancel").addEventListener("click",function(e){e.preventDefault(),n()}),r.querySelector(".primary").addEventListener("click",function(e){r.classList.remove("negative"),r.classList.add("positive"),e.preventDefault();var t=r.querySelector('input[name="specific"]:checked').value,o=r.querySelector('textarea[name="more-information"]').value;i(!1,t,o),r.innerHTML=a}),r.querySelector(".secondary").addEventListener("click",function(e){e.preventDefault();var t=r.querySelector('input[name="specific"]:checked').value,o=r.querySelector('textarea[name="more-information"]').value;i(!1,t,o),r.innerHTML=a})}()})})())}();
!function(){"use strict";var o,d,r,u,c,i=document.querySelector("body"),e=document.querySelector("div.glossary");e&&(o=function(e,t,n){var o=document.createElement(e);return o.setAttribute("class",t),Array.isArray(n)&&n.forEach(function(e){o.appendChild(e)}),o},r=function(){return u&&clearTimeout(u),u=setTimeout(function(){c.innerHTML=null,c.style.display="none"},200),!1},(c=(d=function(e,t){var n;return c||(c=o("div","tooltip tooltip--bottom"),i.appendChild(c)),c.innerHTML=null,e&&(e=o("div","tooltip-header",[document.createTextNode(e)]),c.appendChild(e)),t&&((n=o("div","tooltip-body")).innerHTML=t,c.appendChild(n),c.style.display="block"),c})()).addEventListener("mouseover",function(){clearTimeout(u)}),c.addEventListener("mouseout",r),Array.from(e.querySelectorAll("a[id]")).forEach(function(e){var t=document.querySelectorAll('a[href="#'+e.getAttribute("id")+'"]'),n=e.parentElement,a=n.innerText,l=(window.dt=n).nextElementSibling.innerHTML;Array.from(t).forEach(function(e){e.classList.add("glossary-term"),e.addEventListener("mouseover",function(e){e.stopPropagation(),clearTimeout(u),c=d(a,l);var t=e.target.offsetTop,n=e.target.offsetLeft,o=e.target.offsetWidth,r=c.clientWidth,i=c.clientHeight;c.style.top=t-i-10+"px",c.style.left=n+o/2-r/2+"px"}),e.addEventListener("mouseout",r)})}))}();
!function(){"use strict";var t="search--active",e=document.getElementById("search_open");console.log(e);var n=document.getElementsByClassName("search")[0],a=n.getElementsByTagName("input")[0],r=document.getElementById("close_search"),c=document.getElementById("submit_search"),i=document.getElementsByClassName("search-filters")[0],s=document.getElementsByClassName("search-filters-header")[0],l=document.getElementsByClassName("search-results")[0];console.log(n),console.log(e);function o(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function d(){n.classList.add(t),a.focus()}function u(){n.classList.remove(t)}document.addEventListener("keydown",function(e){"/"!==e.key||n.classList.contains(t)?"Escape"===e.key&&n.classList.contains(t)&&u():(d(),e.preventDefault())}),e.addEventListener("click",function(e){e.stopPropagation(),d()}),Array.from(e.childNodes).forEach(function(e){e.addEventListener("click",function(e){e.preventDefault()})}),n.addEventListener("click",function(e){e.target===this&&u()}),r.addEventListener("click",function(){u()}),a.addEventListener("keydown",function(e){"Escape"===e.key?u():"Enter"===e.key&&(e.preventDefault(),E())}),s.addEventListener("click",function(e){i.classList.toggle("search-filters--active")});function p(e){e.preventDefault(),g++,L()}function m(e){e.preventDefault(),g--,L()}function h(e){e.preventDefault(),e.target.checked?v.push(e.target.value):v.splice(v.indexOf(e.target.value),1),L()}var f,g,v=[],E=function(){C(),(f=a.value)&&(v=[],g=1,L())},L=function(){C(),l.classList.add("loading");var e={};v.length&&(e.page={"post-type":{values:v}}),window.swiftTypeSearch(f,g,e).then(function(e){y(e),b(e),N(e),k(e),l.scrollTo(0,0)}).finally(function(){l.classList.remove("loading")})},C=function(){l.classList.add("loading"),o(l)},y=function(e){var t,n,a,r=document.getElementById("search-info");r?r.innerHTML="":((r=document.createElement("p")).setAttribute("id","search-info"),l.appendChild(r)),0<e.record_count?(r.appendChild(document.createTextNode("Displaying results ")),(t=document.createElement("strong")).innerHTML=(e.info.page.current_page-1)*e.info.page.per_page+1,r.appendChild(t),r.appendChild(document.createTextNode(" to ")),(n=document.createElement("strong")).innerHTML=(e.info.page.current_page-1)*e.info.page.per_page+e.record_count,r.appendChild(n),r.appendChild(document.createTextNode(" of ")),(a=document.createElement("strong")).innerHTML=e.info.page.total_result_count,r.appendChild(a),r.appendChild(document.createTextNode(" results for "))):r.innerHTML="No results found for ";var c=document.createElement("strong");c.innerHTML=e.info.page.query,r.appendChild(c),r.appendChild(document.createTextNode("."))},b=function(e){var i=document.querySelector(".search-filters-content"),s=!1;i.innerHTML="",Object.values(e.info.page.facets).forEach(function(e){Object.entries(e).forEach(function(e){s=!0;var t=e.join("-"),n=document.createElement("div");n.className="search-filter-checkbox";var a=document.createElement("input");a.setAttribute("id",t),a.setAttribute("type","checkbox"),a.setAttribute("name","facet"),a.setAttribute("value",e[0]),-1<v.indexOf(e[0])&&a.setAttribute("checked","checked");var r=document.createElement("label");r.setAttribute("for",t),r.innerHTML=e[0];var c=document.createElement("span");c.innerHTML=e[1],r.appendChild(c),a.addEventListener("change",h),n.appendChild(a),n.appendChild(r),i.appendChild(n)})}),s?i.parentNode.classList.remove("hidden"):i.parentNode.classList.add("hidden")},N=function(e){Array.from(document.querySelectorAll(".search-result-item")).forEach(function(e){l.removeChild(e)}),e.records.page.forEach(function(e){var t=document.createElement("div");t.className="search-result-item";var n=document.createElement("h3"),a=document.createElement("a");a.setAttribute("href",e.url),a.setAttribute("target","blank"),a.innerHTML=e.highlight.title||e.title,n.appendChild(a),t.appendChild(n);var r=document.createElement("a");r.className="search-result-url",r.setAttribute("href",e.url),r.setAttribute("target","blank"),r.innerHTML=e.url,t.appendChild(r);var c,i,s,o=document.createElement("p");o.className="search-result-body",o.innerHTML=e.highlight.body||e.body,t.appendChild(o),e["post-type"]&&(c="label--"+e["post-type"].toLowerCase().replace(/[^a-z0-9+]/gi,"-"),(i=document.createElement("div")).className="search-result-labels",(s=document.createElement("span")).className="search-result-label search-result-"+c+" "+c,s.innerHTML=e["post-type"],i.appendChild(s),t.appendChild(i)),l.appendChild(t)})},k=function(e){var t,n,a=document.getElementById("search-pagination"),r=!1;a?(l.removeChild(a),o(a)):((a=document.createElement("div")).setAttribute("id","search-pagination"),a.className="search-pagination"),1<e.info.page.current_page&&(r=!0,(t=document.createElement("a")).setAttribute("role","button"),t.className="search-pagination-link search-pagination--previous",t.innerHTML="&lt; Previous",t.addEventListener("click",m),a.appendChild(t)),0<e.info.page.num_pages&&e.info.page.current_page<e.info.page.num_pages&&(r=!0,(n=document.createElement("a")).setAttribute("role","button"),n.className="search-pagination-link search-pagination--next",n.innerHTML="Next &gt;",n.addEventListener("click",p),a.appendChild(n)),r&&l.appendChild(a)};c.addEventListener("click",function(){E()})}();