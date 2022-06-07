'use strict'
$(function(){
  function menuDisplayFunc(elem, num){
    console.log(elem);
    elem.mouseenter(function(){
      $(this).css("color","#0266b2").addClass("active");
      $(`.sub-gnb .menu:nth-child(${num})`).addClass("active");
    }).mouseleave(function(){
      $(this).css("color","#333333").removeClass("active");
      $(`.sub-gnb .menu:nth-child(${num})`).removeClass("active");
    });
  }

  for(var i = 1; i<6; i++){
    menuDisplayFunc($(`.gnb .inner-gnb ul li:nth-child(${i}) a`), i);
  }


  $(".mini-header .inner-header .inner-ul li:last-child").click(function(){
    if ($(this).find("#language").css("display") == "block"){
      $(this).find("#language").css("display","none");
    }
    else {
      $(this).find("#language").css("display","block");
    }
  }).mouseleave(function(){
    $(this).find("#language").css("display","none");
  });

  $(".mini-header .inner-header .inner-ul li:nth-child(4)").click(function(){
    if ($(this).find(".page-list").css("display") == "block"){
      $(this).find(".page-list").css("display","none");
    }
    else {
      $(this).find(".page-list").css("display","block");
    }
  }).mouseleave(function(){
    $(this).find(".page-list").css("display","none");
  });
  // $("nav ul li a, back-to-top a, a.button, #footer ul li a").click(function(){
  //   // console.log(this.hash);
  //   // console.log($(this.hash).offset().top);
  //   let thisHash = $(this.hash);
  //
  //   /* 방법1 애니메이션 작동 될때 여러번 클릭을 방지 */
  //   let isAni = $("html,body").is(":animated");
  //   if( !isAni ){
  //     $("html,body").animate({scrollTop : thisHash.offset().top},1500);
  //   }
});
