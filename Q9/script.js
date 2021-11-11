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
         action_popup.alert('하나씩 해! 몇개를 올린거야~');
        return;
    }
    
if (files[0].name.startsWith('Item_edit')){
       action_popup.alert('그 아이템은 버려');
      return;
}if (files[0].name.startsWith('Item_keyword')){
       action_popup.alert('그걸 왜 아직도 가지고 있어!');
      return;
}
	
	
    if (files[0].name.startsWith('Item_주사위')&& trig=='off'){
      $('#Q2').draggable().fadeIn(2000);
      var audio = new Audio("./done.mp3");
      audio.play();
      trig='on';
      return;
      }

if (files[0].name.startsWith('Item_발톱') && trig=='on'){
       action_popup.alert('주사위에 눈구멍을 더 내려고? 괜찮은 생각인데 아직은 아니야.');
      return;
      }

if (files[0].name.startsWith('Item_주사위') && trig=='on'){
            action_popup.alert('여기엔 5눈 발판이 없는데... 어떡하지?');
           return;
           }

if (files[0].name.startsWith('Item_구슬') && trig=='on'){
            action_popup.alert('흠... 우리에겐 5눈 주사위밖에 없는데...');
           return;
           }
if (files[0].name.startsWith('Item_발톱') && trig=='off'){
            action_popup.alert('좋은 생각이긴 한데... 지금 할 일은 아닌 것 같아!');
           return;
           }

if (files[0].name.startsWith('Item_음악마법')){
       action_popup.alert('으으 음산해... 노래 분위기 좀 바꾸자!');
      return;
}

if (files[0].name.startsWith('Item_빛마법')){
      action_popup.alert('음산하긴 해도 어둡진 않은걸!');
     return;
}

if (files[0].name.startsWith('Item_반지')){
      action_popup.alert('정말 예쁜 반지인걸!');
     return;
}

if (files[0].name.startsWith('Item_유연제')){
       action_popup.alert('그래.. 확실히 그런 아이템이 있다고는 들었는데...미래에서 왔니?');
      return;
}

else if(files[0].name.startsWith('Item_')) {
	if (trig=='on'){action_popup.alert("이제 다른건 필요 없지 않아?")}
	else{action_popup.alert("솔직히... 여기에 써보고 싶은 아이템은 정해져있잖아!");
      return;}
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
