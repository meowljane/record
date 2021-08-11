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
        action_popup.alert('하나만 올려주세요.');
        return;
    }

if (files[0].name.startsWith('톱니바퀴')){
      action_popup.alert('좋은 생각입니다만, 굳이 지금 할 필요가 있을까요?');
      return;
}

if (files[0].name.startsWith('튜토리얼')){
      action_popup.alert('그 아이템은 이제 필요 없어요. 버려주세요');
      return;
}

if (files[0].name.startsWith('CD')){
      action_popup.alert('지금 노래가 맘에 안드신다는거죠? 어디 이 노래는 어때요?\n문제 풀이랑은 상관 없어요. 분위기나 바꿔보려는거예요.');
      return;
}

else{
      action_popup.alert('올바른 아이템을 올려주세요.');
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
