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
      action_popup.alert('여러개를 동시에 할 순 없다...');
        return;
    }


  
    if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('왜 아직도 버리지 않은거지?');
      return;
}
      if (files[0].name.startsWith('Item_keyword')){
      action_popup.alert('내 반응이 재미있나?');
      return;
}
if (files[0].name.startsWith('Item_음악마법')){
      action_popup.alert('미야와 결혼할 것이다...무조건.');
      return;
}
if (files[0].name.startsWith('Item_동전')){
      action_popup.alert('이곳에서 얻었던 보물이다. 더는 쓸 곳이 없어보이네');
      return;
}

if (files[0].name.startsWith('Item_소환마법')){
action_popup.alert('미야는 아직 완전히 떠난게 아니다. 절대로.');
return;
}

if (files[0].name.startsWith('Item_톱니바퀴')){
  action_popup.alert('이곳엔 사실 이런게 필요 없다.');
  return;
  }

if (files[0].name.startsWith('Item_주사위')){
action_popup.alert('이런거 없이도 풀 수 있다.');
return;
}

if (files[0].name.startsWith('Item_고무호스')){
  action_popup.alert('머리. 머리를 쓰자...');
  return;
}


if (files[0].name.startsWith('Item_색마법')){
      action_popup.alert('이 수정동굴에서 아이처럼 좋아했는데');
      return;
      }

if (files[0].name.startsWith('Item_조각')){
action_popup.alert('모험이 끝나면 해주고픈 이야기도 많았는데');
return;
}

  else if(files[0].name.startsWith('Item_')) {
      action_popup.alert("이미 봉인하고 없는 물건이다.");
return;
}

else{
  action_popup.alert('정체를 알 수 없는 물건이다.');
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
