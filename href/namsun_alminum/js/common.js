$(function(){
  $('#header').load('./header.html .auto', function(){
    //메뉴클릭 이벤트
    $(".att").click(function(){
      if($("+ul",this).css("display") != "block"){
          $(".inner-ul").slideUp();
          $("+ul",this).slideDown();
      }
      else if($("+ul",this).css("display") == "block"){
        $(".inner-ul").slideUp();
      }
    });

    $(".att").mouseover(function(){
      $(this).css("color","rgb(89,133,191)");
    });
    $(".att").mouseout(function(){
      $(this).css("color","#666666");
    });

    $(".header .gnb .gnblist li ul li").mouseover(function(){
      $(this).css("background-color","#383838");
    });
    $(".header .gnb .gnblist li ul li").mouseout(function(){
      $(this).css("background-color","rgba(12,77,162,0.97)");
    });
  });

  // section direct 부분 마우스 오버
  $(".direct ul li").mouseover(function(){
    $(this).css("border","1px solid blue");
  });
  $(".direct ul li").mouseout(function(){
    $(this).css("border","");
  });

  // section product부분 마우스 오버
  // 추후에 이미지 커지는 거 추가하기
  $(".product ul li").mouseover(function(){
    $(this).find(".inner").css("background-color","rgba(38,92,163,0.8)");

  });
  $(".product ul li").mouseout(function(){
    $(this).find(".inner").css("background-color","");
  });

  // technology product부분 마우스 오버
  // div 태그를 추가하여서 display로 on off 기능 수행함.
  $(".technology ul li").mouseover(function(){
    $(this).find(".r-cover").css("display","block");
  });
  $(".technology ul li").mouseout(function(){
    $(this).find(".r-cover").css("display","none");
  });

  // agency, ir의 버튼 부분 마우스 오버
  $(".btns a").mouseover(function(){
    $(this).css({
      "background-color":"rgba(255,255,255,1.2)",
      "color":"#000",
      "transition": "all 0.3s ease-out"
    });
  });
  $(".btns a").mouseout(function(){
    $(this).css({
      "background-color":"",
      "color":"#fff",
      "transition": "all 0.3s ease-out"
    });
  });
  $(".subsidiary > a").click(function(){
    if($('.sitemap').css('display') == "none"){
      $('.sitemap').css({
        "display":"block"
      });
    }
    else{
      $('.sitemap').css({
        "display":"none"
      });
    }
    return false;
  });
/*
  $(".btnNext").click(function(){
    //console.log($(".visualList li:first-child"));
    $(".visualList li:first-child").appendTo(".visualList");
    return false;
  });
  $(".btnPrev").click(function(){
    //console.log($(".visualList li:last-child"));
    $(".visualList li:last-child").prependTo(".visualList");
    return false;
  });
  */
});
