// $(function(){
// 	if(typeof(WOW)!= "undefined"){
//     	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
// 			new WOW().init({
// 				offset:"30",
// 			});
// 		};
//     }


// 	 //头部固定
// $.fn.capacityFixed = function(options) {
//         var opts = $.extend({},$.fn.capacityFixed.deflunt,options);
//         var FixedFun = function(element) {
//             var top = opts.top;
//             element.css({
//                 "top":top
//             });
//             $(window).scroll(function() {
//                 var scrolls = $(this).scrollTop();
//                 if (scrolls > top) {

//                     if (window.XMLHttpRequest) {
//                     	element.addClass('fixed');
//                         element.css({
//                             position: "fixed",
//                             top: 0,
//                         });
//                     } else {
//                         element.css({
//                             top: scrolls
//                         });
//                     }
//                 }else {
//                 	element.removeClass('fixed');
//                     element.css({
//                         position: "absolute",
//                         top: top
//                     });
//                 }
//             });
//             element.find(".close-ico").click(function(event){
//                 element.remove();
//                 event.preventDefault();
//             })
//         };
//         return $(this).each(function() {
//             FixedFun($(this));
//         });
//     };
//     $.fn.capacityFixed.deflunt={
// 		right : 0,
//         top:0
// 	};
// 	$(".header").capacityFixed();


//     //手机菜单
// $('.gh').click(function(){
// 		$('.header-nav-box').toggle();
// 		$('.gh').toggleClass('active');
// 		return false;
// })
//    //回到顶部
//   $('.gotop').click(function(){
//   	$('html,body').animate({scrollTop:0},500);
//   	return false;
//   })

// })