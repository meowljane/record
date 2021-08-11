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
			"background-color": "black",
			"outline-offset": "-20px"
		});
	} else {
    	$(e.target).css({
			"background-color": "black",
			"outline-offset": "-10px"
		});
    }
}

function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        alert('하나만 올려주세요.');
        return;
    }

    if (files[0].name.startsWith('유연제')){
      $('#Q').css({'opacity': '0', 'z-index' : '-3'});
      var audio = new Audio("./done.mp3");
      audio.play();
      return;
      }

if (files[0].name.startsWith('튜토리얼')){
      alert('그 아이템은 이제 필요 없어요. 버려주세요');
      return;
}

if (files[0].name.startsWith('CD')){
      alert('노래 말고 문제에 집중해주세요.\n틀 노래가 떨어져서 이러는건 아니에요.');
      return;
}

if (files[0].name.startsWith('상자')){
      alert('그게 아니에요. 여기 너무 어둡지 않아요?');
      return;
}

else{
      alert('올바른 아이템을 올려주세요.');
      return;
    }
}