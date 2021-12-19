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
track = 1;


function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        action_popup.alert('여기에 그렇게 많은건 필요 없어.');
        return;
    }

    if (files[0].name.startsWith('Item_구슬')&&trig=='off'){
      $('#Q2').fadeIn(2000);
      $('#btn').css('display','block')
      var audio = new Audio("./done.mp3");
      audio.play();
      trig='on';
      action_popup.alert('됐다! 설명서를 읽고 게임을 해보자.');
      return;
      }

if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('이쯤되면 날 놀리는거지?');
      return;
}

if (files[0].name.startsWith('Item_keyword')){
  action_popup.alert('그거 언제 버릴거야..?');
  return;
}

if (files[0].name.startsWith('Item_음악마법')){
      action_popup.alert('쉿.... 경비병들이 들을라...!');
      return;
}

if (files[0].name.startsWith('Item_소환마법')){
      action_popup.alert('지금은 도움이 되지 않을 것 같아');
      return;
}

if (files[0].name.startsWith('Item_빛마법')){
  action_popup.alert('무서워... 그런 장난은 그만둬...');
  return;
}

else if(files[0].name.startsWith('Item_')) {
	if (trig=='on'){action_popup.alert("어서 문제를 풀고 도망가자")}
	else{action_popup.alert("약한 벽돌들이 있어. 부술 방법이 있을까?");
      return;}
}
	
else{
      action_popup.alert('날 무섭게 하지 말아줘...이게 뭐야?');
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
