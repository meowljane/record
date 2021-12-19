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

track = 1;

function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        action_popup.alert('더이상 소란은 싫어...하나씩 하자');
        return;
    }


    if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('이젠 여기다가 버리고 가자...');
      return;
}

if (files[0].name.startsWith('Item_keyword')){
  action_popup.alert('그만 버리는거 어때?');
  return;
}

if (files[0].name.startsWith('Item_음악마법')){
	if(track==1){action_popup.alert('으응... 음악을 들으니 \n 그나마 나아지네...');
		     $("#track1")[0].pause(); $("#track2")[0].play();
		    track=2}
	else {action_popup.alert('고마워... 처음 것도 다시 듣자');
		     $("#track2")[0].pause(); $("#track1")[0].play();
		    track=1}
      return;
}
	

if (files[0].name.startsWith('Item_빛마법')){
  action_popup.alert('지금은 최대한 눈에 띄지 말아야해');
  return;
}

if (files[0].name.startsWith('Item_조각')){
  action_popup.alert('빨리 풀고 도망가고 싶어');
  return;
}

if (files[0].name.startsWith('Item_')){
  action_popup.alert('아이템은 필요 없을지도 몰라...');
  return;
}

else{
      action_popup.alert('나 너무 무서워, 장난치지 말아줘.');
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
