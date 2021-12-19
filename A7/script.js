var oldPageX = 0,
    oldPageY = 0,
    flag = 0,
    theTip = $('#tip'),
theTiptwo = $('#tip2');
theTipthree = $('#tip3');
theTipfour = $('#tip4');

$(".view").mousemove(function(e){
  if(flag == 1) {
    var pageX = e.pageX,
      pageY = e.pageY,
      tipLeft = parseInt(theTip.css("left").substring(0, theTip.css("left").length - 2));
    console.log(tipLeft)
    if(pageX < oldPageX && pageY > oldPageY && (tipLeft > -593.5)) {      
      theTip.css( {
         width: "+=6",
         height: "+=6",
         bottom: "-=6",
         left: "-=6"
       }); 
    } else if(pageX > oldPageX && pageY < oldPageY && (tipLeft < -203.5)){
       theTip.css( {
         width: "-=6",
         height: "-=6",
         bottom: "+=6",
         left: "+=6"
       }); 
    }
    oldPageX = pageX;
    oldPageY = pageY;
}
});

$(".view").mousemove(function(e){
  if(flag == 2) {
    var pageX = e.pageX,
      pageY = e.pageY,
      tipRight = parseInt(theTiptwo.css("right").substring(0, theTiptwo.css("right").length-2 ));
    console.log(tipRight)
    if(pageX > oldPageX && pageY > oldPageY && (tipRight > 955.5)) {      
      theTiptwo.css( {
         width: "+=6",
         height: "+=6",
         bottom: "-=6",
         right: "-=6",

       }); 
    } else if(pageX < oldPageX && pageY < oldPageY && (tipRight <= 1347.5)){
       theTiptwo.css( {
         width: "-=6",
         height: "-=6",
         bottom: "+=6",
         right: "+=6"
       }); 
    }
    oldPageX = pageX;
    oldPageY = pageY;
  }
});

$(".view").mousemove(function(e){
  if(flag == 3) {
    var pageX = e.pageX,
      pageY = e.pageY,
      tipRight = parseInt(theTipthree.css("right").substring(0, theTipthree.css("right").length-2 ));
    console.log(tipRight)
    if(pageX > oldPageX && pageY < oldPageY && (tipRight > 955.5)) {      
      theTipthree.css( {
         width: "+=6",
         height: "+=6",
         top: "-=6",
         right: "-=6"
       }); 
    } else if(pageX < oldPageX && pageY > oldPageY && (tipRight < 1347.5)){
       theTipthree.css( {
         width: "-=6",
         height: "-=6",
         top: "+=6",
         right: "+=6"
       }); 
    }
    oldPageX = pageX;
    oldPageY = pageY;
  }
});

$(".view").mousemove(function(e){
  if(flag == 4) {
    var pageX = e.pageX,
      pageY = e.pageY,
      tipLeft = parseInt(theTipfour.css("left").substring(0, theTipfour.css("left").length - 2));
    console.log(tipLeft)
    if(pageX < oldPageX && pageY < oldPageY && (tipLeft > -593.5)) {      
      theTipfour.css( {
         width: "+=6",
         height: "+=6",
         top: "-=6",
         left: "-=6"
       }); 
    } else if(pageX > oldPageX && pageY > oldPageY && (tipLeft < -203.5)){
       theTipfour.css( {
         width: "-=6",
         height: "-=6",
         top: "+=6",
         left: "+=6"
       }); 
    }
    oldPageX = pageX;
    oldPageY = pageY;
  }
});

 $('#tip').mousedown(function() {
  flag = 1;
 theTip.css('opacity', '0.9');
 theTiptwo.css('opacity', '0.9');
 theTipthree.css('opacity', '0.9');
 theTipfour.css('opacity', '0.9');
return 0;
});

 $('#tip2').mousedown(function() {
  flag = 2;
 theTip.css('opacity', '0.9');
 theTiptwo.css('opacity', '0.9');
 theTipthree.css('opacity', '0.9');
 theTipfour.css('opacity', '0.9');
return 0;
});

 $('#tip3').mousedown(function() {
  flag = 3;
 theTip.css('opacity', '0.9');
 theTiptwo.css('opacity', '0.9');
 theTipthree.css('opacity', '0.9');
 theTipfour.css('opacity', '0.9');
return 0;
});

 $('#tip4').mousedown(function() {
  flag = 4;
 theTip.css('opacity', '0.9');
 theTiptwo.css('opacity', '0.9');
 theTipthree.css('opacity', '0.9');
 theTipfour.css('opacity', '0.9');
return 0;
});

 $('#tip').mouseup(function() {
  flag = 0;
 theTip.css('opacity', '1');
 theTiptwo.css('opacity', '1');
 theTipthree.css('opacity', '1');
 theTipfour.css('opacity', '1');
return 0;
});

 $('#tip2').mouseup(function() {
  flag = 0;
 theTip.css('opacity', '1');
 theTiptwo.css('opacity', '1');
 theTipthree.css('opacity', '1');
 theTipfour.css('opacity', '1');
return 0;
});

 $('#tip3').mouseup(function() {
  flag = 0;
 theTip.css('opacity', '1');
 theTiptwo.css('opacity', '1');
 theTipthree.css('opacity', '1');
 theTipfour.css('opacity', '1');
return 0;
});

 $('#tip4').mouseup(function() {
  flag = 0;
 theTip.css('opacity', '1');
 theTiptwo.css('opacity', '1');
 theTipthree.css('opacity', '1');
 theTipfour.css('opacity', '1');
return 0;
});

 $('.view').mouseup(function() {
  flag = 0;
 theTip.css('opacity', '1');
 theTiptwo.css('opacity', '1');
 theTipthree.css('opacity', '1');
 theTipfour.css('opacity', '1');
return 0;
});
  $('body').mouseup(function() {
  flag = 0;
 theTip.css('opacity', '1');
 theTiptwo.css('opacity', '1');
 theTipthree.css('opacity', '1');
 theTipfour.css('opacity', '1');
return 0;
});



$('#content')
  .on("dragover", dragOver)
  .on("dragleave", dragOver)
  .on("drop", uploadFiles);

function dragOver(e){
	e.stopPropagation();
	e.preventDefault();
	if (e.type == "dragover") {
		$(e.target).css({
			"background-color": "rgba(0,0,0,0.1)",
			"outline-offset": "-20px"
		});
	} else {
    	$(e.target).css({
			"background-color": "rgba(0,0,0,0.1)",
			"outline-offset": "-10px"
		});
    }
}


trig='off';


function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
      action_popup.alert('어수선한건 질색이다.');
        return;
    }

    if (files[0].name.startsWith('Item_유연제')&&trig=='off'){
      $('#Q').css({'opacity': '0', 'z-index' : '-3'});
        $('#bgm').animate({volume: 0.1}, 500);
        setTimeout(function() {$('#bgm').animate({volume: 1}, 500);}, 10000);
        var audio = new Audio("./done.mp3");
        audio.play();
      trig= 'on';
      return;
      }

      if (files[0].name.startsWith('Item_유연제')&&trig=='on'){
        action_popup.alert('더이상 부어대면 종이가 다 녹을것이다.');
        return;
  }
  
      if (files[0].name.startsWith('Item_edit')){
        action_popup.alert('이것에 관한 정보는 도서관에 없다.');
        return;
  }
        if (files[0].name.startsWith('Item_keyword')){
        action_popup.alert('이것에 관한 저서는 없다.');
        return;
  }
  if (files[0].name.startsWith('Item_음악마법')){
        action_popup.alert('소유자의 심리에 따라 음악이 바뀐다고 한다.');
        return;
  }
  
  
  if (files[0].name.startsWith('Item_소환마법')){
  action_popup.alert('보물을 소환 혹은 봉인할 수 있다고 한다.');
  return;
  }
  
  if (files[0].name.startsWith('Item_톱니바퀴')){
    action_popup.alert('마법 기계 장치의 뼈대 역을 해준다고 한다.');
    return;
    }
  
  if (files[0].name.startsWith('Item_주사위')){
  action_popup.alert('숫자 5만 나오는 원리는 찾을 수 없었다.');
  return;
  }
  
  if (files[0].name.startsWith('Item_고무호스')){
    action_popup.alert('라구 코끼리의 가죽은 무한정 늘어난다고 한다.');
    return;
  }
  
  
  if (files[0].name.startsWith('Item_색마법')){
        action_popup.alert('환상 마법이 아닌 실제 색을 입혀준다.');
        return;
        }
  
  if (files[0].name.startsWith('Item_조각')){
  action_popup.alert('보물 봉인은 주로 이런식으로 이루어진다고 한다.');
  return;
  }
  
  if (files[0].name.startsWith('Item_동전')){
    action_popup.alert('전 세계에 10개 가량만이 남아있다고 한다.');
    return;
    }

    else if(files[0].name.startsWith('Item_')) {
        action_popup.alert("이미 봉인하고 없는 물건이다.");
  return;
  }
  
  else{
    action_popup.alert('외계의 물건에 대한 서적은 없다.');
      return;
    }
  }

  
$(".modal_close").on("click", function () {
  action_popup.close(this);
});
var action_popup = {
  timer: 500,
alert: function (txt) {this.open("type-alert", txt);},

  open: function (type, txt) {
      var popup = $("." + type);
      popup.find(".menu_msg").text(txt);
      $("body").append("<div class='dimLayer'></div>");
      $(".dimLayer").css('height', $(document).height()).attr("target", type);
      popup.fadeIn(this.timer);
  },

  close: function (target) {
      var modal = $(target).closest(".modal-section");
      var dimLayer = $(".dimLayer[target=type-alert]")
      modal.fadeOut(this.timer);
      setTimeout(function () {dimLayer != null ? dimLayer.remove() : "";}, this.timer);
  }
}
