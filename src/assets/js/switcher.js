
/* ========================
	Switcher

	<div class="theme-box"><h5 class="switcher-title"><span>Theme</span></h5><h6 class="switcher-title">Standard</h6><ul val="themeFullColor" class="color-skins-db theme-panel-save"><li><a class="theme-skin skin-1" href="javascript:void(0);" dir="css/skin/skin-1" logo="assets/images/logo.png"></a></li><li><a class="theme-skin skin-2" href="javascript:void(0);" dir="css/skin/skin-2" logo="assets/images/logo-2.png"></a></li><li><a class="theme-skin skin-3" href="javascript:void(0);" dir="css/skin/skin-3" logo="assets/images/logo-3.png"></a></li><li><a class="theme-skin skin-4" href="javascript:void(0);" dir="css/skin/skin-4" logo="assets/images/logo-4.png"></a></li><li><a class="theme-skin skin-5" href="javascript:void(0);" dir="css/skin/skin-5" logo="assets/images/logo-5.png"></a></li><li><a class="theme-skin skin-6" href="javascript:void(0);" dir="css/skin/skin-6" logo="assets/images/logo-6.png"></a></li><li><a class="theme-skin skin-7" href="javascript:void(0);" dir="css/skin/skin-7" logo="assets/images/logo-7.png"></a></li><li><a class="theme-skin skin-8" href="javascript:void(0);" dir="css/skin/skin-8" logo="assets/images/logo-8.png"></a></li></ul></div>
========================= */
function addSwitcher(){0==$("#dzSwitcher").length&&jQuery("body").append('<div id="styleswitcher" class="styleswitcher"><div class="switcher-btn-bx"><a class="switch-btn closed"> <span class="fa fa-cogs fa-lg"></span></a></div><div class="styleswitcher-inner"><a href="javascript:void(0);" class="dez-page site-button button-sm" onclick="deleteAllCookie();">Delete All Cookie</a><div class="theme-box"><h5 class="switcher-title"><span>Layout</span></h5><ul val="layout" class="layout-view theme-panel-save"><li class="wide-layout active"><a href="javascript:void(0);" dir="wide-layout">Wide</a></li><li class="boxed"><a href="javascript:void(0);" dir="boxed">Boxed</a></li><li class="frame"><a href="javascript:void(0);" dir="frame">Frame</a></li></ul><div id="ThemeRangeSlider" class="price-slide-2 range-slider" style="display:none"><div class="price"><input type="text" id="FramePadding" class="amount" readonly="" value="20px" /><div id="slider-range-3"></div></div></div></div><div class="theme-box"><h5 class="switcher-title"><span>Header</span></h5><ul val="header" class="header-view theme-panel-save"><li class="header-fixed active"><a href="javascript:void(0);" dir="sticky-header">Fixed</a></li><li class="header-static"><a href="javascript:void(0);" dir="sticky-no">Static</a></li></ul></div><div class="theme-box"><h5 class="switcher-title"><span>Background</span></h5><h6 class="switcher-title">Color</h6><ul val="bgColor" class="bg-color-switcher theme-panel-save"><li><a class="bg-color-1" href="javascript:void(0);" dir="#09325b"></a></li><li><a class="bg-color-2" href="javascript:void(0);" dir="#e4484e"></a></li><li><a class="bg-color-3" href="javascript:void(0);" dir="#ffc600"></a></li><li><a class="bg-color-4" href="javascript:void(0);" dir="#9ac92f"></a></li><li><a class="bg-color-5" href="javascript:void(0);" dir="#FF9763"></a></li><li><a class="bg-color-6" href="javascript:void(0);" dir="#ff5e14"></a></li><li><a class="bg-color-7" href="javascript:void(0);" dir="#7192BD"></a></li><li><a class="bg-color-8" href="javascript:void(0);" dir="#26AA5D"></a></li></ul><h6 class="switcher-title">Image</h6><ul val="bgImage" class="background-switcher theme-panel-save"><li><img src="assets/images/switcher/switcher-bg/bg1.jpg" dir="assets/images/background/bg1.jpg" alt=""></li><li><img src="assets/images/switcher/switcher-bg/bg2.jpg" dir="assets/images/background/bg2.jpg" alt=""></li><li><img src="assets/images/switcher/switcher-bg/bg3.jpg" dir="assets/images/background/bg3.jpg" alt=""></li><li><img src="assets/images/switcher/switcher-bg/bg4.jpg" dir="assets/images/background/bg4.jpg" alt=""></li></ul><h6 class="switcher-title">Pattern</h6><ul val="bgPatten" class="pattern-switcher theme-panel-save"><li><img src="assets/images/switcher/switcher-patterns/bg1.jpg" dir="assets/images/pattern/pt1.jpg" alt=""></li><li><img src="assets/images/switcher/switcher-patterns/bg2.jpg" dir="assets/images/pattern/pt2.jpg" alt=""></li><li><img src="assets/images/switcher/switcher-patterns/bg3.jpg" dir="assets/images/pattern/pt3.jpg" alt=""></li><li><img src="assets/images/switcher/switcher-patterns/bg4.jpg" dir="assets/images/pattern/pt4.jpg" alt=""></li><li><img src="assets/images/switcher/switcher-patterns/bg5.jpg" dir="assets/images/pattern/pt5.jpg" alt=""></li><li><img src="assets/images/switcher/switcher-patterns/bg6.jpg" dir="assets/images/pattern/pt6.jpg" alt=""></li><li><img src="assets/images/switcher/switcher-patterns/bg7.jpg" dir="assets/images/pattern/pt7.jpg" alt=""></li><li><img src="assets/images/switcher/switcher-patterns/bg8.jpg" dir="assets/images/pattern/pt8.jpg" alt=""></li><li><img src="assets/images/switcher/switcher-patterns/bg9.jpg" dir="assets/images/pattern/pt9.jpg" alt=""></li><li><img src="assets/images/switcher/switcher-patterns/bg10.jpg" dir="assets/images/pattern/pt10.jpg" alt=""></li><li><img src="assets/images/switcher/switcher-patterns/bg11.jpg" dir="assets/images/pattern/pt11.jpg" alt=""></li><li><img src="assets/images/switcher/switcher-patterns/bg12.jpg" dir="assets/images/pattern/pt12.jpg" alt=""></li></ul></div></div></div>')}jQuery(window).on("load",function(){jQuery(".styleswitcher").animate({left:"-220px"}),jQuery(".styleswitcher-right").animate({right:"-220px",left:"auto"}),jQuery(".switch-btn").addClass("closed")}),$(function(){"use strict";addSwitcher(),jQuery(".switch-btn").on("click",function(){jQuery(this).hasClass("open")?(jQuery(this).addClass("closed"),jQuery(this).removeClass("open"),jQuery(".styleswitcher").animate({left:"-220px"}),jQuery(".styleswitcher-right").animate({right:"-220px",left:"auto"})):jQuery(this).hasClass("closed")&&(jQuery(this).addClass("open"),jQuery(this).removeClass("closed"),jQuery(".styleswitcher").animate({left:"0"}),jQuery(".styleswitcher-right").animate({right:"0",left:"auto"}))}),jQuery(".skin-1").on("click",function(){return jQuery(".skin").attr("href","css/skin/skin-1.css"),jQuery(".logo-header img").attr("src","assets/images/logo.png"),jQuery(".header-transparent .logo-header img").attr("src","assets/images/logo-white.png"),jQuery(".logo-header.logo-white img").attr("src","assets/images/logo-white.png"),jQuery(".box-header .logo-header img").attr("src","assets/images/logo.png"),!1}),jQuery(".skin-2").on("click",function(){return jQuery(".skin").attr("href","css/skin/skin-2.css"),jQuery(".logo-header img").attr("src","assets/images/logo-2.png"),jQuery(".header-transparent .logo-header img").attr("src","assets/images/logo-white-2.png"),jQuery(".logo-header.logo-white img").attr("src","assets/images/logo-white-2.png"),jQuery(".box-header .logo-header img").attr("src","assets/images/logo-2.png"),!1}),jQuery(".skin-3").on("click",function(){return jQuery(".skin").attr("href","css/skin/skin-3.css"),jQuery(".logo-header img").attr("src","assets/images/logo-3.png"),jQuery(".header-transparent .logo-header img").attr("src","assets/images/logo-white-3.png"),jQuery(".logo-header.logo-white img").attr("src","assets/images/logo-white-3.png"),jQuery(".box-header .logo-header img").attr("src","assets/images/logo-3.png"),!1}),jQuery(".skin-4").on("click",function(){return jQuery(".skin").attr("href","css/skin/skin-4.css"),jQuery(".logo-header img").attr("src","assets/images/logo-4.png"),jQuery(".header-transparent .logo-header img").attr("src","assets/images/logo-white-4.png"),jQuery(".logo-header.logo-white img").attr("src","assets/images/logo-white-4.png"),jQuery(".box-header .logo-header img").attr("src","assets/images/logo-4.png"),!1}),jQuery(".skin-5").on("click",function(){return jQuery(".skin").attr("href","css/skin/skin-5.css"),jQuery(".logo-header img").attr("src","assets/images/logo-5.png"),jQuery(".header-transparent .logo-header img").attr("src","assets/images/logo-white-5.png"),jQuery(".logo-header.logo-white img").attr("src","assets/images/logo-white-5.png"),jQuery(".box-header .logo-header img").attr("src","assets/images/logo-5.png"),!1}),jQuery(".skin-6").on("click",function(){return jQuery(".skin").attr("href","css/skin/skin-6.css"),jQuery(".logo-header img").attr("src","assets/images/logo-6.png"),jQuery(".header-transparent .logo-header img").attr("src","assets/images/logo-white-6.png"),jQuery(".logo-header.logo-white img").attr("src","assets/images/logo-white-6.png"),jQuery(".box-header .logo-header img").attr("src","assets/images/logo-6.png"),!1}),jQuery(".skin-7").on("click",function(){return jQuery(".skin").attr("href","css/skin/skin-7.css"),jQuery(".logo-header img").attr("src","assets/images/logo-7.png"),jQuery(".header-transparent .logo-header img").attr("src","assets/images/logo-white-7.png"),jQuery(".logo-header.logo-white img").attr("src","assets/images/logo-white-7.png"),jQuery(".box-header .logo-header img").attr("src","assets/images/logo-7.png"),!1}),jQuery(".skin-8").on("click",function(){return jQuery(".skin").attr("href","css/skin/skin-8.css"),jQuery(".logo-header img").attr("src","assets/images/logo-8.png"),jQuery(".header-transparent .logo-header img").attr("src","assets/images/logo-white-8.png"),jQuery(".logo-header.logo-white img").attr("src","assets/images/logo-white-8.png"),jQuery(".box-header .logo-header img").attr("src","assets/images/logo-8.png"),!1}),jQuery(".background-switcher li img").on("click",function(){var e=jQuery(this).attr("dir");jQuery("#bg").css({backgroundImage:"url("+e+")"})}),jQuery(".pattern-switcher li img").on("click",function(){var e=jQuery(this).attr("dir");jQuery("#bg").css({backgroundImage:"url("+e+")"}),jQuery("#bg").css("background-size","auto")}),jQuery(".bg-color-switcher li a").on("click",function(){var e=jQuery(this).attr("dir");jQuery("#bg").css("background-color",e),jQuery("#bg").css("background-image","")}),jQuery(".layout-view li ").on("click",function(){jQuery(".layout-view li ").removeClass("active"),jQuery(this).addClass("active")}),jQuery(".skin-view li ").on("click",function(){jQuery(".skin-view li ").removeClass("active"),jQuery(this).addClass("active")}),jQuery(".wide-layout").on("click",function(){jQuery("body").addClass("wide-layout"),jQuery("body").removeClass("boxed"),jQuery("body").removeClass("frame").removeAttr("style"),jQuery("#ThemeRangeSlider").hide("slow")}),jQuery(".boxed").on("click",function(){jQuery("body").addClass("boxed"),jQuery("body").removeClass("wide-layout"),jQuery("body").removeClass("frame").removeAttr("style"),jQuery("#ThemeRangeSlider").hide("slow")}),jQuery(".frame").on("click",function(){jQuery("body").addClass("frame"),jQuery("body").removeClass("wide-layout"),jQuery("body").removeClass("boxed"),jQuery("body").removeClass("boxed"),jQuery("#ThemeRangeSlider").show("slow"),jQuery(".main-bar-wraper").addClass("sticky-no"),jQuery(".main-bar-wraper").removeClass("sticky-header")}),themeFramePadding(),jQuery(".nav-view li ").on("click",function(){jQuery(".nav-view li ").removeClass("active"),jQuery(this).addClass("active")}),jQuery(".nav-light").on("click",function(){jQuery(".header-nav").addClass("nav-light"),jQuery(".header-nav").removeClass("nav-dark")}),jQuery(".nav-dark").on("click",function(){jQuery(".header-nav").addClass("nav-dark"),jQuery(".header-nav").removeClass("nav-light")}),jQuery(".header-view li ").on("click",function(){jQuery(".header-view li ").removeClass("active"),jQuery(this).addClass("active")}),jQuery(".header-fixed").on("click",function(){jQuery(".main-bar-wraper").addClass("sticky-header"),jQuery(".main-bar-wraper").removeClass("sticky-no")}),jQuery(".header-static").on("click",function(){jQuery(".main-bar-wraper").addClass("sticky-no"),jQuery(".main-bar-wraper").removeClass("sticky-header")}),jQuery(".menubar-view li").on("click",function(){jQuery(".menubar-view li").removeClass("active"),jQuery(this).addClass("active")}),jQuery(".menubar-left").on("click",function(){jQuery(".page-wraper").addClass("sidemenu"),jQuery(".header-nav").addClass("sidenav content-scroll"),setTimeout(function(){Lavi.headerResize()},1e3),Lavi.customScroll(),Lavi.dzTheme()}),jQuery(".menubar-top").on("click",function(){jQuery(".page-wraper").removeClass("sidemenu"),jQuery(".header-nav").removeClass("sidenav"),setTimeout(function(){Lavi.headerResize()},1e3);var e=jQuery("<div>").append($(".header-nav .logo-header").clone()).html(),a=jQuery("<div>").append($(".header-nav .navbar-nav").clone()).html(),i=jQuery("<div>").append($(".header-nav .footer-menu").clone()).html();jQuery(".content-scroll").removeClass("content-scroll mCustomScrollbar _mCS_1 mCS_no_scrollbar"),jQuery(".header-nav").empty(),jQuery(".header-nav").append(e).append(a).append(i)}),window.location.href.indexOf("index.html")>-1&&jQuery(".menubar-box").remove()});var themeOption=["themeStandardColor","themeFullColor","layout","header","menubar","bgColor","bgImage","bgPatten"];function themeFramePadding(){var e=getCookie("frame_value");""==e&&(e=20),$("#slider-range-3").length>0&&$("#slider-range-3").unbind().slider({min:20,max:80,value:e,animate:"slow",orientation:"horizontal",slide:function(e,a){frameSlider=a.value,$("#"+this.id).prev().val(frameSlider+"px"),$("#bg").css("padding",frameSlider+"px"),setCookie("frame_value",frameSlider,1)}})}function setThemePanel(){jQuery.each(themeOption,function(e,a){if(themeOptionItemValue=getCookie(a+"_value"),""!=themeOptionItemValue)if("themeStandardColor"==a)jQuery(".skin").attr("href",themeOptionItemValue+".css"),setThemeLogo(a);else if("themeFullColor"==a)jQuery(".skin").attr("href",themeOptionItemValue+".css"),setThemeLogo(a);else if("layout"==a)jQuery("."+a+"-view li").removeClass("active"),jQuery("."+a+"-view").find("."+themeOptionItemValue).addClass("active"),"frame"==themeOptionItemValue?(jQuery("#ThemeRangeSlider").show("slow"),jQuery("body").addClass(themeOptionItemValue),themeOptionFrameValue=getCookie("frame_value"),""==themeOptionFrameValue&&(themeOptionFrameValue=20),jQuery("#FramePadding").val(themeOptionFrameValue+"px"),jQuery("#bg").css("padding",themeOptionFrameValue+"px")):jQuery("body").addClass(themeOptionItemValue);else if("header"==a)jQuery("."+a+"-view li").removeClass("active"),"sticky-header"==themeOptionItemValue?jQuery("."+a+"-view").find(".header-fixed").addClass("active"):"sticky-no"==themeOptionItemValue&&jQuery("."+a+"-view").find(".header-static").addClass("active"),jQuery(".main-bar-wraper").addClass(themeOptionItemValue);else if("menubar"==a){if(jQuery("."+a+"-view li").removeClass("active"),"left"==themeOptionItemValue)jQuery("."+a+"-view").find(".menubar-left").addClass("active"),jQuery(".page-wraper").addClass("sidemenu"),jQuery(".header-nav").addClass("sidenav content-scroll"),setTimeout(function(){Lavi.headerResize()},1e3),Lavi.customScroll(),Lavi.dzTheme();else if("top"==themeOptionItemValue){jQuery("."+a+"-view").find(".menubar-top").addClass("active"),jQuery(".page-wraper").removeClass("sidemenu"),jQuery(".header-nav").removeClass("sidenav"),setTimeout(function(){Lavi.headerResize()},1e3);var i=jQuery("<div>").append($(".header-nav .logo-header").clone()).html(),r=jQuery("<div>").append($(".header-nav .navbar-nav").clone()).html(),s=jQuery("<div>").append($(".header-nav .footer-menu").clone()).html();jQuery(".content-scroll").removeClass("content-scroll mCustomScrollbar _mCS_1 mCS_no_scrollbar"),jQuery(".header-nav").empty(),jQuery(".header-nav").append(i).append(r).append(s)}}else"bgColor"==a?(jQuery("#bg").css("background-color",themeOptionItemValue),jQuery("#bg").css("background-image","")):"bgImage"==a?jQuery("#bg").css({backgroundImage:"url("+themeOptionItemValue+")"}):"bgPatten"==a&&(jQuery("#bg").css({backgroundImage:"url("+themeOptionItemValue+")"}),jQuery("#bg").css("background-size","auto"))}),logoValue=getCookie("logo_value"),""!=logoValue&&(jQuery(".logo-white img").attr("src",logoValue),jQuery(".logo-dark img").attr("src",logoValue),jQuery(".logo-center .logo-c").attr("src",logoValue))}function setThemeLogo(e){var a=getCookie(e+"_logo");""!=a&&(jQuery(".logo-white img").attr("src",a),jQuery(".logo-dark img").attr("src",a),jQuery(".logo-center .logo-c").attr("src",a))}function setCookie(e,a,i){var r=new Date;r.setTime(r.getTime()+18e5);var s="expires="+r.toString();document.cookie=e+"="+a+";"+s+";path=/"}function getCookie(e){for(var a=e+"=",i=decodeURIComponent(document.cookie).split(";"),r=0;r<i.length;r++){for(var s=i[r];" "==s.charAt(0);)s=s.substring(1);if(0==s.indexOf(a))return s.substring(a.length,s.length)}return""}function deleteCookie(e){var a=new Date;a.setTime(a.getTime()+1);var i="expires="+a.toString();document.cookie=e+"=1;"+i+";path=/"}function deleteAllCookie(){jQuery.each(themeOption,function(e,a){deleteCookie(a+"_value")}),location.reload()}themeOption.layout=["wide","boxed","frame","frame_value","layout_value"],themeOption.themeStandardColor=["skin-1","skin-2","skin-3","skin-4","skin-5","skin-6","skin-7","skin-8","skin-9","skin-10","themeStandardColor_value","themeStandardColor_logo"],themeOption.themeFullColor=["css/skin/skin-1","css/skin/skin-2","css/skin/skin-3","css/skin/skin-4","css/skin/skin-5","css/skin/skin-6","css/skin/skin-7","css/skin/skin-8","css/skin/skin-9","css/skin/skin-10","themeFullColor_value","themeFullColor_logo"],themeOption.header=["fixed","static","header_value"],themeOption.menubar=["left","top","menubar_value"],themeOption.bgColor=["#ff5e14","#d2151e","#fdb400","#0086f0","#6a1a1f","#019444","#00c6ff","#e87800","#cc9f5a","#bd5ec6","bgColor_value"],themeOption.bgImage=["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bgImage_value"],themeOption.bgPatten=["pt1.jpg","pt2.jpg","pt3.jpg","pt4.jpg","pt5.jpg","pt6.jpg","pt7.jpg","pt8.jpg","pt9.jpg","pt10.jpg","pt11.jpg","pt12.jpg","bgPatten_value"],jQuery(document).ready(function(){jQuery(".theme-panel-save li a, .theme-panel-save li img").on("click",function(){var e=jQuery(this).attr("dir"),a=jQuery(this).parent().parent().attr("val");if("bgColor"==a)deleteCookie("bgImage_value"),deleteCookie("bgPatten_value");else if("bgImage"==a)deleteCookie("bgColor_value"),deleteCookie("bgPatten_value");else if("bgPatten"==a)deleteCookie("bgColor_value"),deleteCookie("bgImage_value");else if("themeStandardColor"==a)deleteCookie("themeFullColor_value");else if("themeFullColor"==a){setCookie("logo_value",jQuery(this).attr("logo"),1),deleteCookie("themeStandardColor_value")}else if("themeStandardColor"==a||"themeFullColor"==a){setCookie(a+"_logo",jQuery(this).attr("logo"),1)}setCookie(a+"_value",e,1)})});
