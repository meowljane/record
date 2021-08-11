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

var dice = 'off';

function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
         action_popup.alert('하나만 써 욕심부리지 말고');
        return;
    }
if (files[0].name.startsWith('Item_edit')){
       action_popup.alert('그 아이템은 이제 필요 없어.. 버려');
      return;
}if (files[0].name.startsWith('Item_keyword')){
       action_popup.alert('그걸 왜 아직도 가지고 있어!');
      return;
}
	
	
    if (files[0].name.startsWith('Item_주사위')){
      $('#Q2').draggable().fadeIn(2000);
      var audio = new Audio("./done.mp3");
      audio.play();
      dice ='on'
      return;
      }

if (files[0].name.startsWith('Item_송곳') && dice=='on'){
       action_popup.alert('주사위에 눈구멍을 더 내려고? 괜찮은 생각인데 아직은 아니야.');
      return;
      }



if (files[0].name.startsWith('Item_CD')){
       action_popup.alert('여기 좀 음산하잖아... 이런 음악은 어때?');
      return;
}

if (files[0].name.startsWith('Item_상자')){
       action_popup.alert('그 상자는 어디서 난거야?');
      return;
}
if (files[0].name.startsWith('Item_유연제','Item_고무호스','Item_열쇠','Item_톱니바퀴','Item_반지','Item_지도')){
       action_popup.alert('그래.. 확실히 그런 아이템이 있다고는 들었는데...미래에서 왔니?');
      return;
}
else{
      action_popup.alert('그건 이 세계 아이템이 아닌 것 같아.');
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
