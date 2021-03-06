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
track = 1
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
	    trig= 'on';
      return;}


if (files[0].name.startsWith('Item_톱니바퀴')){
         action_popup.alert("그걸 어떻게 얻었어? \n 좋은 생각이지만 아직은 아니야!");
      return;
}

if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('그건 이제 지워도 될 것 같은데?');
      return;
}
	if (files[0].name.startsWith('Item_keyword')){
      action_popup.alert('그 아이템은 이제 버리도록 해.');
      return;
}
	

if (files[0].name.startsWith('Item_음악마법')){
	if(track==1){action_popup.alert('우와 뭐야 너 연주도 할 줄 알아? \n 또 들려줘!');
		     $("#track1")[0].pause(); $("#track2")[0].play();
		    track=2}
	else if(track==2){action_popup.alert('마법으로 하는거라고? \n 하나 더 들려줘!');
		     $("#track2")[0].pause(); $("#track3")[0].play();
		    track=3}
	else {action_popup.alert('그거 들려줘! 처음 들려준거!!');
		     $("#track3")[0].pause(); $("#track1")[0].play();
		    track=1}
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
	
	
else if(files[0].name.startsWith('Item_')) {
	if (trig=='on'){action_popup.alert("그건 어디서 가져온거야?")}
	else{action_popup.alert("일단 소환부터 해보자!");
      return;}
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
