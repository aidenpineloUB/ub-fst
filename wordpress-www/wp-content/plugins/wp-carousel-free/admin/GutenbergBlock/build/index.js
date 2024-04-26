(()=>{"use strict";const e=window.wp.escapeHtml,t=wp.element.createElement,r={};r.spwpcfIcon=t("img",{src:(0,e.escapeAttribute)(sp_wp_carousel_free.url+"admin/GutenbergBlock/assets/wp-carousel-icon.svg")});const s=r,o=window.wp.i18n,a=window.wp.element,c=a.createElement,l=t=>{let{attributes:{shortcode:r},shortCodeList:s,shortcodeUpdate:l}=t;return(0,a.createElement)(a.Fragment,null,c("div",{className:"spwpcf-gutenberg-shortcode editor-styles-wrapper"},c("select",{className:"spwpcf-shortcode-selector",onChange:e=>l(e),value:(0,e.escapeAttribute)(r)},c("option",{value:(0,e.escapeAttribute)("0")},(0,e.escapeHTML)((0,o.__)("-- Select a shortcode --","wp-carousel-free"))),s.map((t=>{var r=t.title.length>35?t.title.substring(0,30)+".... #("+t.id+")":t.title+" #("+t.id+")";return c("option",{value:(0,e.escapeAttribute)(t.id.toString()),key:(0,e.escapeAttribute)(t.id.toString())},(0,e.escapeHTML)(r))})))))},p=window.wp.blocks,n=window.wp.components,i=window.wp.blockEditor,u=wp.serverSideRender,d=a.createElement;(0,p.registerBlockType)("sp-wp-carousel-pro/shortcode",{title:(0,e.escapeHTML)((0,o.__)("WP Carousel","wp-carousel-free")),description:(0,e.escapeHTML)((0,o.__)("Use WP Carousel to insert a carousel or gallery in your page.","wp-carousel-free")),icon:s.spwpcfIcon,category:"common",supports:{html:!0},edit:t=>{const{attributes:r,setAttributes:s}=t;var c=sp_wp_carousel_free.shortCodeList;let p=e=>{let t=!1,r=setInterval((function(){let s=jQuery(".wpcp-wrapper-"+e).parents().attr("id");document.getElementById(s)&&(jQuery.getScript(sp_wp_carousel_free.loadScript),jQuery.getScript(sp_wp_carousel_free.loadFancyBoxScript),jQuery("#wpcp-preloader-"+e).animate({opacity:0},600).remove(),jQuery("#sp-wp-carousel-free-id-"+e).animate({opacity:1},600),t=!0,s=""),t&&clearInterval(r),0==e&&clearInterval(r)}),10)},m=t=>{var r;r=t,s({shortcode:(0,e.escapeAttribute)(r.target.value)});let o=(0,e.escapeAttribute)(t.target.value);p(o)};return document.addEventListener("readystatechange",(t=>{if("complete"===t.target.readyState){let t=(0,e.escapeAttribute)(r.shortcode);p(t)}})),r.preview?d("div",{className:"spwpcf_shortcode_block_preview_image"},d("img",{src:(0,e.escapeAttribute)(sp_wp_carousel_free.url+"admin/GutenbergBlock/assets/wpc-block-preview.svg")})):0===c.length?(0,a.createElement)(a.Fragment,null,d("div",{className:"components-placeholder components-placeholder is-large"},d("div",{className:"components-placeholder__label"},d("img",{className:"block-editor-block-icon",src:(0,e.escapeAttribute)(sp_wp_carousel_free.url+"admin/GutenbergBlock/assets/wp-carousel-icon.svg")}),(0,e.escapeHTML)((0,o.__)("WP Carousel","wp-carousel-free"))),d("div",{className:"components-placeholder__instructions"},(0,e.escapeHTML)((0,o.__)("No shortcode found. ","wp-carousel-free")),d("a",{href:(0,e.escapeAttribute)(sp_wp_carousel_free.link)},(0,e.escapeHTML)((0,o.__)("Create a shortcode now!","wp-carousel-free")))))):r.shortcode&&0!=r.shortcode?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.InspectorControls,null,(0,a.createElement)(n.PanelBody,{title:"Select a shortcode"},(0,a.createElement)(n.PanelRow,null,(0,a.createElement)(l,{attributes:r,shortCodeList:c,shortcodeUpdate:m})))),(0,a.createElement)(u,{block:"sp-wp-carousel-pro/shortcode",attributes:r})):(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.InspectorControls,null,(0,a.createElement)(n.PanelBody,{title:"Select a shortcode"},(0,a.createElement)(n.PanelRow,null,(0,a.createElement)(l,{attributes:r,shortCodeList:c,shortcodeUpdate:m})))),d("div",{className:"components-placeholder components-placeholder is-large"},d("div",{className:"components-placeholder__label"},d("img",{className:"block-editor-block-icon",src:(0,e.escapeAttribute)(sp_wp_carousel_free.url+"admin/GutenbergBlock/assets/wp-carousel-icon.svg")}),(0,e.escapeHTML)((0,o.__)("WP Carousel","wp-carousel-free"))),d("div",{className:"components-placeholder__instructions"},(0,e.escapeHTML)((0,o.__)("Select a shortcode","wp-carousel-free"))),(0,a.createElement)(l,{attributes:r,shortCodeList:c,shortcodeUpdate:m})))},save:()=>null})})();