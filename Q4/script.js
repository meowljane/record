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
        action_popup.alert('뭐가 이렇게 많아! 하나씩 해.');
        return;
    }

    if (files[0].name.startsWith('Item_색마법')){
      $('#Q1').css('filter', 'saturate(100%)');
      var audio = new Audio("./done.mp3");
      audio.play();
      trig='on';
      return;
      }

if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('이젠 그거 버릴 때 된 것 같아.');
      return;
}

if (files[0].name.startsWith('Item_keyword')){
  action_popup.alert('그 종이쪼가리 언제까지 들고있을거야?');
  return;
}

if (files[0].name.startsWith('Item_음악마법')){
      action_popup.alert('목장 느낌 나는 음악이란거, 신기한 것 같아..');
      return;
}


if (files[0].name.startsWith('Item_주사위')){
  action_popup.alert('난 내 친구가 도박하는걸 원하지 않아.');
  return;
}


if (files[0].name.startsWith('Item_고무호스')){
  action_popup.alert('와 이거 동물 가죽이야...\n 보통 호스가 아닌데?');
  return;
}



if (files[0].name.startsWith('Item_조각')){
  action_popup.alert('음 이거 하나만 더 있으면 알 것 같기도 해..');
  return;
}

else if(files[0].name.startsWith('Item_')) {
	if (trig=='on'){action_popup.alert("넌 가끔 알수없는걸 잘 가져오는 것 같아")}
	else{action_popup.alert("동물들이 다 비슷해보여 \n 구분할 방법이 없을까?");
      return;}
}
	
else{
      action_popup.alert('이 세상의 것이 아닌 것 같은 느낌인데..');
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
