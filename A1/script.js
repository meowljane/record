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
        alert('머리아프다...하나씩 하자...');
        return;
    }


if (files[0].name.startsWith('Item_톱니바퀴')){
      $('#Q').css({"background-image": "url(./Q2.gif)",
                  "outline": "none",
                  "background-size": "100% 100%"});
	        $('#bgm').animate({volume: 0.1}, 500);
        setTimeout(function() {$('#bgm').animate({volume: 1}, 500);}, 10000);
        var audio = new Audio("./done.mp3");
        audio.play();
      trig= 'on';
      return;
      }

      if (files[0].name.startsWith('Item_edit')){
            action_popup.alert('난 이걸로 실랑이 할 생각이 없다.');
            return;
      }
            if (files[0].name.startsWith('Item_keyword')){
            action_popup.alert('장난칠 기분이 아니다.');
            return;
      }

      if (files[0].name.startsWith('Item_음악마법')){
            action_popup.alert('미야 생각에 머리가 찢어질 듯 울린다.');
            return;
      }


if (files[0].name.startsWith('Item_소환마법')){
      action_popup.alert('이건...사용할 때가 분명 올 것이다.');
      return;
}

if (files[0].name.startsWith('Item_색마법')){
      action_popup.alert('미야의 눈이 떠올라 이건 봉인하지 못했다.');
      return;
}

else if(files[0].name.startsWith('Item_')) {
	if (trig=='on'){action_popup.alert("이젠 다 끝이다. 마지막 할일을 하자.")}
	else{action_popup.alert("이미 봉인하고 없는 물건이다.");
      return;}
}

else{
      action_popup.alert('내가 다룰 수 없는 물건이다.');
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
