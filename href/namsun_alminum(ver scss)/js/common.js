$(function(){
  // console.log($("body"));
  // console.log(window.location.href);
  // console.log($(location).attr("href"));

  /*
    실습:
    #lnb의 메뉴와 같은 서브페이지의 주소값을 매칠하여 해당 메뉴에 on class를 추가하시오
  */
  // let token = $(location).attr("href").split("/");
  // let tokenLeng = token.length;
  // let locationName = token[tokenLeng - 1].split(".")[0];
  //
  // let aLeng = $("#lnb ul li a").length;
  // for (var i = 0; i<aLeng; i++) {
  //   var str = $("#lnb ul li a").eq(i).text().toLowerCase();
  //   if (locationName == str){
  //     $("#lnb ul li a").eq(i).addClass("on");
  //   }
  //   else{
  //     $("#lnb ul li a").eq(i).removeClass("on");
  //   }
  // }

  /* 강사님 ver */
  // let currentHref = $(location).attr("href").split("/");
  // currentHref = currentHref[currentHref.length -1].split(".");
  // currentHref = currentHref[0];

  $("#lnb a").each(function(){
    // let matchHref = $(this).attr("href").split("/");
    // matchHref = matchHref[matchHref.length -1].split(".");
    // matchHref = matchHref[0];
    if(tokenFunc($(this)) == tokenFunc($(location))){
      $(this).addClass("on")
    }
    else{
      $(this).removeClass("on")
    }
  });

  function tokenFunc(elem){
    let token = elem.attr("href").split("/");
    token = token[token.length -1].split(".");
    token = token[0];
    return token;
  }

  // script 영역 아코디언
  $(".accordion dd:not(:first)").css("display","none");
  $(".accordion dl dt").click(function(){
    if($("+dd",this).css("display") == "none"){
      $("dd").slideUp("slow");
      $("+dd",this).slideDown("slow");
    }
  });
});
