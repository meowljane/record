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
      action_popup.alert('??????????????? ????????????.');
        return;
    }

    if (files[0].name.startsWith('Item_?????????')&&trig=='off'){
      $('#Q').css({'opacity': '0', 'z-index' : '-3'});
        $('#bgm').animate({volume: 0.1}, 500);
        setTimeout(function() {$('#bgm').animate({volume: 1}, 500);}, 10000);
        var audio = new Audio("./done.mp3");
        audio.play();
      trig= 'on';
      return;
      }

      if (files[0].name.startsWith('Item_?????????')&&trig=='on'){
        action_popup.alert('????????? ???????????? ????????? ??? ???????????????.');
        return;
  }
  
      if (files[0].name.startsWith('Item_edit')){
        action_popup.alert('????????? ?????? ????????? ???????????? ??????.');
        return;
  }
        if (files[0].name.startsWith('Item_keyword')){
        action_popup.alert('????????? ?????? ????????? ??????.');
        return;
  }
  if (files[0].name.startsWith('Item_????????????')){
        action_popup.alert('???????????? ????????? ?????? ????????? ???????????? ??????.');
        return;
  }
  
  
  if (files[0].name.startsWith('Item_????????????')){
  action_popup.alert('????????? ?????? ?????? ????????? ??? ????????? ??????.');
  return;
  }
  
  if (files[0].name.startsWith('Item_????????????')){
    action_popup.alert('?????? ?????? ????????? ?????? ?????? ???????????? ??????.');
    return;
    }
  
  if (files[0].name.startsWith('Item_?????????')){
  action_popup.alert('?????? 5??? ????????? ????????? ?????? ??? ?????????.');
  return;
  }
  
  if (files[0].name.startsWith('Item_????????????')){
    action_popup.alert('?????? ???????????? ????????? ????????? ??????????????? ??????.');
    return;
  }
  
  
  if (files[0].name.startsWith('Item_?????????')){
        action_popup.alert('?????? ????????? ?????? ?????? ?????? ????????????.');
        return;
        }
  
  if (files[0].name.startsWith('Item_??????')){
  action_popup.alert('?????? ????????? ?????? ??????????????? ?????????????????? ??????.');
  return;
  }
  
  if (files[0].name.startsWith('Item_??????')){
    action_popup.alert('??? ????????? 10??? ???????????? ??????????????? ??????.');
    return;
    }

    else if(files[0].name.startsWith('Item_')) {
        action_popup.alert("?????? ???????????? ?????? ????????????.");
  return;
  }
  
  else{
    action_popup.alert('????????? ????????? ?????? ????????? ??????.');
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
