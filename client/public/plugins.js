//favicon animation plugin

$.tbFavAnime=function(n){if(void 0!==n.images){n.images.length<2&&console.warn("[tbFavAnime] Please Use alteast two images for animation.");var i,e=1,t=n.images,a="",o=$("link[rel=icon]").attr("href"),l=1;function r(){n.images.length>1?i=setInterval(function(){e==t.length-1?e=0:e++,$("link[rel=icon]").attr("href",a+t[e])},void 0!==n.interval?n.interval:500):$("link[rel=icon]").attr("href",a+t[0])}function c(){void 0!==i&&clearInterval(i),$("link[rel=icon]").attr("href",o)}void 0===n.type||0!=n.type&&2!=n.type||(l=n.type),void 0!==n.imgPath&&""!=n.imgPath&&(a=n.imgPath),0==l?r():2==l?($(window).focus(function(){r()}),$(window).blur(function(){c()})):($(window).blur(function(){r()}),$(window).focus(function(){c()}))}else console.warn("[tbFavAnime] Please Use images.")};