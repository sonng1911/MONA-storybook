// generated 2025-09-09T08:32:53.723Z
import pugRuntime from 'pug-runtime';
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function render(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (desc, imgSrc, title) {
      pug_html = pug_html + "\u003Cdiv class=\"hero-card\"\u003E\u003Cdiv class=\"hero-card__media\"\u003E\u003Cimg" + (" class=\"hero-card__img\""+pug_attr("src", imgSrc, true, true)+pug_attr("alt", title, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero-card__body\"\u003E\u003Ch3 class=\"hero-card__title\"\u003E" + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cp class=\"hero-card__desc\"\u003E" + (pug_escape(null == (pug_interp = desc) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "desc" in locals_for_with ?
        locals_for_with.desc :
        typeof desc !== 'undefined' ? desc : undefined, "imgSrc" in locals_for_with ?
        locals_for_with.imgSrc :
        typeof imgSrc !== 'undefined' ? imgSrc : undefined, "title" in locals_for_with ?
        locals_for_with.title :
        typeof title !== 'undefined' ? title : undefined));
    ;;return pug_html;}
export default (locals = {}) => render(locals, pugRuntime);