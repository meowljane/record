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
        alert('복잡한건 이제 질색이다');
        return;
    }

    if (files[0].name.startsWith('Item_주사위')){
      $('#Q2').fadeIn(2500);
      var audio = new Audio("./done.mp3");
      audio.play();
      trig= 'on';
      return;
      }


      if (files[0].name.startsWith('Item_edit')){
            action_popup.alert('내가 이런것도 신경써야 하나?');
            return;
      }
            if (files[0].name.startsWith('Item_keyword')){
            action_popup.alert('이 아이템이 날 짜증나게 한다.');
            return;
      }

      if (files[0].name.startsWith('Item_음악마법')){
            action_popup.alert('음악에 집중하려 할수록 마야의 목이 떠오른다.');
            return;
      }


if (files[0].name.startsWith('Item_소환마법')){
      action_popup.alert('이것이 내 최후의 보루이다.');
      return;
}

if (files[0].name.startsWith('Item_색마법')){
      action_popup.alert('모든 일이 끝나면 색도 봉인할 것이다.');
      return;
}

if (files[0].name.startsWith('Item_톱니바퀴')){
      action_popup.alert('이게 다 무슨 소용이지?');
      return;
}

else if(files[0].name.startsWith('Item_')) {
	if (trig=='on'){action_popup.alert("더이상 아이템을 쓸 필요 없다.")}
	else{action_popup.alert("이미 봉인하고 없는 물건이다.");
      return;}
}

else{
      action_popup.alert('내가 이런 걸 주운 적 있었나.');
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