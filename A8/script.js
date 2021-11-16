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
      action_popup.alert('한번에 많은걸 하려하지 말자.');
        return;
    }


    if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('이런거에 정신팔려서는 안된다.');
      return;
}
      if (files[0].name.startsWith('Item_keyword')){
      action_popup.alert('장난칠 시간따위 없다.');
      return;
}
if (files[0].name.startsWith('Item_음악마법')){
      action_popup.alert('음악은 사람의 마음을 흩뜨려놓는다.');
      return;
}


if (files[0].name.startsWith('Item_소환마법')){
action_popup.alert('전에는 이곳에서 어떻게 했더라..?');
return;
}

if (files[0].name.startsWith('Item_톱니바퀴')){
  action_popup.alert('아이템은 그만 보고 다른 장소를 보자.');
  return;
  }

if (files[0].name.startsWith('Item_주사위')){
action_popup.alert('아이템은 그만 보고 다른 장소를 보자.');
return;
}

if (files[0].name.startsWith('Item_고무호스')){
  action_popup.alert('다른곳을 봐야 할 것 같다.');
  return;
}


if (files[0].name.startsWith('Item_색마법')){
      action_popup.alert('확실히 이게 그려져있긴 한데...');
      return;
      }

if (files[0].name.startsWith('Item_조각')){
action_popup.alert('전에는 이곳에서 어떻게 했더라..?');
return;
}

if (files[0].name.startsWith('Item_동전')){
  action_popup.alert('이곳에서 아이템만 봐서는 풀 수 없다.');
  return;
  }

  if (files[0].name.startsWith('Item_유연제')){
      action_popup.alert('다른곳을 봐야 할 것 같다.');
      return;
}

  else if(files[0].name.startsWith('Item_')) {
      action_popup.alert("이미 봉인하고 없는 물건이다.");
return;
}

else{
  action_popup.alert('이게 뭐지?');
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
