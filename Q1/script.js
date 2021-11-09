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
        action_popup.alert('아이템은 하나씩 써. 천천히.');
        return;
    }
	

    if (files[0].name.startsWith('Item_소환마법')){
      $('#Q0').animate({'opacity': 0}, {'duration': 2500, 'queue': false});
      $('#Q').animate({'opacity': 1}, {'duration': 2500, 'queue': false});
      var audio = new Audio("./done.mp3");
      audio.play();
      return;}


if (files[0].name.startsWith('Item_톱니바퀴')){
         action_popup.alert("그걸 어떻게 얻었어? \n 좋은 생각이지만 아직은 아니야!");
      return;
}

if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('그건 이제 지워도 될 것 같은데?');
      return;
}

if (files[0].name.startsWith('Item_음악마법')){
      action_popup.alert('노래가 마음에 들지 않는거니? \n이 노래는 어때?');
      return;
}
	
	
if (files[0].name.startsWith('Item_동전')){
      action_popup.alert('뭐야~ 바닥에서 주운거야?');
      return;
}
	
	
if (files[0].name.startsWith('Item_발톱')){
      action_popup.alert('윽 뭐야.. 누구거야..?');
      return;
}
	
	
else if (files[0].name.startsWith('Item_')){action_popup.alert("그건 어디서 가져온거야?");
      return;
}
	
else{
      action_popup.alert('응? 그건 이 세상의 것이 아닌 것 같아...');
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
