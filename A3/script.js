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
      action_popup.alert('여러개를 한번에 보라는 건가..?');
        return;
    }

    if (files[0].name.startsWith('Item_고무호스')&&trig=='off'){
      $('#Q2').fadeIn(2000);
      action_popup.alert('구슬 관 양 끝을 호스로 이었다.');
        $('#bgm').animate({volume: 0.1}, 500);
        setTimeout(function() {$('#bgm').animate({volume: 1}, 500);}, 10000);
        var audio = new Audio("./done.mp3");
        audio.play();
      trig= 'on';
      return;
      }

      if (files[0].name.startsWith('Item_edit')){
            action_popup.alert('....');
            return;
      }
            if (files[0].name.startsWith('Item_keyword')){
            action_popup.alert('이걸 왜 가지고 있지?');
            return;
      }

      if (files[0].name.startsWith('Item_음악마법')){
            action_popup.alert('음악을 생각하면 미야가 떠오른다.');
            return;
      }


if (files[0].name.startsWith('Item_소환마법')){
      action_popup.alert('복수를 위해 쓰일 마법서');
      return;
}

if (files[0].name.startsWith('Item_톱니바퀴')){
      action_popup.alert('이건 어디에 쓰일까');
      return;
}

if (files[0].name.startsWith('Item_주사위')){
      action_popup.alert('이것도 미야의 미래를 점치지는 못했다.');
      return;
}

else if(files[0].name.startsWith('Item_')) {
	if (trig=='on'){action_popup.alert("아이템은 그만 보고 문제를 보자.")}
	else{action_popup.alert("이미 봉인하고 없는 물건이다.");
      return;}
}

else{
      action_popup.alert('이게 뭔데...?');
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
