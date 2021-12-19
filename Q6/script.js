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
      action_popup.alert('하나씩 해! 예쁜 광경에 너도 신나는구나?');
        return;
    }


    if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('버려~ 언제까지 안버릴거야?');
      return;
}

if (files[0].name.startsWith('Item_keyword')){
  action_popup.alert('언젠가 그게 필요할거라 생각하는거야?');
  return;
}

if (files[0].name.startsWith('Item_음악마법')){
	if(track==1){action_popup.alert('응...반짝반짝 빛나는 듯한 음악이다');
		     $("#track1")[0].pause(); $("#track2")[0].play();
		    track=2}
	else if(track==2){action_popup.alert('나 정말 모험 떠나길 잘한 것 같아!');
		     $("#track2")[0].pause(); $("#track3")[0].play();
		    track=3}
	else {action_popup.alert('처음 음악이 다시 듣고싶어!');
		     $("#track3")[0].pause(); $("#track1")[0].play();
		    track=1}
      return;
}

if (files[0].name.startsWith('Item_빛마법')){
  action_popup.alert('우와아... 반짝반짝 너무 예쁘다...');
  return;
}

if (files[0].name.startsWith('Item_조각')){
  action_popup.alert('우리 아까 되게 멋있게 풀었어 그치?');
  return;
}

if (files[0].name.startsWith('Item_')){
  action_popup.alert('이 문제는 그냥 풀 수 있을 것 같아!');
  return;
}

else{
      action_popup.alert('으악 그건 뭐야! 여기랑 너무 안어울려!');
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
