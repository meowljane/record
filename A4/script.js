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

function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        action_popup.alert('하나씩 올리자.');
        return;
    }

    if (files[0].name.startsWith('Item_고무호스')){
      action_popup.alert('차갑게 식은 거죽이 만져진다.');
      return;
}

if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('....?');
      return;
}
      if (files[0].name.startsWith('Item_keyword')){
      action_popup.alert('뭘 하란 거지..?');
      return;
}
if (files[0].name.startsWith('Item_음악마법')){
      action_popup.alert('음악 틀 기분이 아니다.');
      return;
}


if (files[0].name.startsWith('Item_소환마법')){
action_popup.alert('수시로 사용법을 익히고 있다.');
return;
}

if (files[0].name.startsWith('Item_톱니바퀴')){
action_popup.alert('차가운 금속제의 톱니바퀴');
return;
}

if (files[0].name.startsWith('Item_주사위')){
action_popup.alert('아무리 던져도 5만 나오는 주사위');
return;
}

if (files[0].name.startsWith('Item_색마법')){
      action_popup.alert('미야의 눈이 무슨 색이었지..?');
      return;
      }

else if(files[0].name.startsWith('Item_')) {
      action_popup.alert("이미 봉인하고 없는 물건이다.");
return;
}

else{
action_popup.alert('나의 것이 아니다.');
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