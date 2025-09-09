// generated 2025-09-09T08:54:36.767Z
import pugRuntime from 'pug-runtime';
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;function render(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (path) {
      pug_mixins["img"] = pug_interp = function(name ,alt='Image' ,customClass=false){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cimg" + (pug_attr("class", pug_classes([customClass ? customClass : null], [true]), false, true)+pug_attr("src", path+"/assets/images/" + name , true, true)+pug_attr("alt", alt , true, true)+pug_attr("title", alt , true, true)+" loading=\"lazy\"") + "\u003E";
};
pug_mixins["btn"] = pug_interp = function(data={}){
var block = (this && this.block), attributes = (this && this.attributes) || {};
let {
  text="Tìm hiểu thêm",
  customClass=false,
  isButton=false,
  icon=false,
  modalLink=false
} = data

if (isButton) {
pug_html = pug_html + "\u003Cbutton" + (pug_attr("class", pug_classes(["btn",customClass ? `${customClass}` : null], [false,true]), false, true)+" type=\"button\"") + "\u003E";
if (text) {
pug_html = pug_html + "\u003Cspan\u003E" + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fspan\u003E";
}
if (icon) {
pug_mixins["img"](icon, text, text);
}
else {
pug_mixins["img"]('icon/icon_btn_pri.svg');
}
pug_html = pug_html + "\u003C\u002Fbutton\u003E";
}
else {
pug_html = pug_html + "\u003Ca" + (pug_attr("class", pug_classes(["btn",customClass ? `${customClass}` : null], [false,true]), false, true)+pug_attr("href", modalLink ? `#${modalLink}` : "#!", true, true)+pug_attr("rel", modalLink ? 'modal:open nofollow' : null, true, true)) + "\u003E";
if (text) {
pug_html = pug_html + "\u003Cspan\u003E" + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fspan\u003E";
}
if (icon) {
pug_mixins["img"](icon, text, text);
}
else {
pug_mixins["img"]('icon/icon_btn_pri.svg');
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
}
};
pug_html = pug_html + "\u003Csection class=\"intro\"\u003E\u003Cdiv class=\"intro-wrap\" data-aos=\"fade-in\"\u003E\u003Cdiv class=\"circle-wrap\"\u003E\u003Cdiv class=\"circle-group\"\u003E\u003Cdiv class=\"circle-line\"\u003E\u003Cdiv class=\"circle-line_box\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle-line_group\"\u003E\u003Cdiv class=\"circle-line_img\"\u003E";
pug_mixins["img"]("home/intro3.jpg");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle-line_img\"\u003E";
pug_mixins["img"]("home/intro2.jpg");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle-line_img\"\u003E";
pug_mixins["img"]("home/intro1.jpg");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle-line_img\"\u003E";
pug_mixins["img"]("home/intro3.jpg");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle-line_img\"\u003E";
pug_mixins["img"]("home/intro2.jpg");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle-line_img\"\u003E";
pug_mixins["img"]("home/intro1.jpg");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle-line\"\u003E\u003Cdiv class=\"circle-line_box\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle-line_group\"\u003E\u003Cdiv class=\"circle-line_img\"\u003E";
pug_mixins["img"]("home/intro4.jpg");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle-line_img\"\u003E";
pug_mixins["img"]("home/intro5.jpg");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle-line_img\"\u003E";
pug_mixins["img"]("home/intro4.jpg");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle-line_img\"\u003E";
pug_mixins["img"]("home/intro5.jpg");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Ch2 class=\"circle-content_logo\"\u003E";
pug_mixins["img"]("home/logo.png");
pug_html = pug_html + "\u003Cspan\u003ETrung Kiên Landscape\u003C\u002Fspan\u003E\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle-box\"\u003E\u003Cdiv class=\"circle-img\"\u003E";
pug_mixins["img"]("home/intro_decor.png");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle-content\"\u003E\u003Ch2 class=\"circle-content_logo\"\u003E";
pug_mixins["img"]("home/logo.png");
pug_html = pug_html + "\u003Cspan\u003ETrung Kiên Landscape\u003C\u002Fspan\u003E\u003C\u002Fh2\u003E\u003Cdiv class=\"circle-txt mona-content\"\u003E\u003Cp\u003ENăm\u003Cstrong\u003E 2010\u003C\u002Fstrong\u003E đánh dấu sự ra đời của\u003Cstrong\u003E Trung Kiên Landscape\u003C\u002Fstrong\u003E , một thương hiệu\u003Cbr\u003E cảnh quan mang giá trị và uy tín không ngừng gia tăng. Đặt tại\u003Cstrong\u003E Làng hoa\u003C\u002Fstrong\u003E\u003Cbr\u003E\u003Cstrong\u003E Xuân Quan, Văn Giang, Hưng Yên\u003C\u002Fstrong\u003E , Trung Kiên Landscape đã vươn mình trở thành một trong những\u003Cstrong\u003E người lãnh đạo hàng đầu\u003C\u002Fstrong\u003E trong lĩnh vực\u003Cstrong\u003E cảnh quan\u003C\u002Fstrong\u003E tại Việt Nam.\u003C\u002Fp\u003E\u003Cp\u003EVới đội ngũ\u003Cstrong\u003E chuyên nghiệp, sáng tạo,\u003C\u002Fstrong\u003E chúng tôi cung cấp đa dạng dịch vụ\u003Cstrong\u003E thiết kế, thi công và duy trì cảnh quan\u003C\u002Fstrong\u003E , kiến tạo những\u003Cstrong\u003E không gian xanh độc đáo và bền vững.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle-action\"\u003E";
pug_mixins["btn"]({text: 'Xem thêm'});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
    }.call(this, "path" in locals_for_with ?
        locals_for_with.path :
        typeof path !== 'undefined' ? path : undefined));
    ;;return pug_html;}
export default (locals = {}) => render(locals, pugRuntime);