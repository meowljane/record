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
      action_popup.alert('침착해야지. 나처럼! 후후.');
        return;
    }


if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('야~ 아까 도서관에서 그거 버리랬잖아!');
      return;
}

if (files[0].name.startsWith('Item_keyword')){
      action_popup.alert('야~ 아까 도서관에서 그거 버리랬잖아!');
      return;
}

if (files[0].name.startsWith('Item_음악마법')){
	if(track==1){action_popup.alert('엄청 웅장한 음악이네\n 명예의 전당이라 그런가?');
		     $("#track1")[0].pause(); $("#track2")[0].play();
		    track=2}
	else if(track==2){action_popup.alert('오징어 게임이 뭐지??');
		     $("#track2")[0].pause(); $("#track3")[0].play();
		    track=3}
	else {action_popup.alert('처음 음악으로 돌아가는 것 같은데!');
		     $("#track3")[0].pause(); $("#track1")[0].play();
		    track=1}
      return;
}
if (files[0].name.startsWith('Item_확대마법')){
      action_popup.alert('자세히 보지 말고 큰 형태를 봐봐!');
      return;
}

if (files[0].name.startsWith('Item_빛마법')){
      action_popup.alert('응? 이미 여기 밝지 않아?');
      return;
}

if (files[0].name.startsWith('Item_주사위')){
      action_popup.alert('그게 아니야. 이 문양 어디서 많이 본 것 같아');
      return;
    }

if (files[0].name.startsWith('Item_크로스워드')){
      action_popup.alert('지금 그거 풀 때가 아니야. 이거 익숙하지 않아?');
      return;
    }
else if (files[0].name.startsWith('Item_')){
      action_popup.alert('여기선 아이템이 필요 없을지도 몰라..!');
      return;
    }

else{
      action_popup.alert('으악. 깜짝이야 대체 그게 뭐야?');
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
