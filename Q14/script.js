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
 action_popup.alert('뭐야 뭘 말해주려고 이렇게 잔뜩 꺼내!');
        return;
    }

    if (files[0].name.startsWith('Item_keyword')){
      action_popup.alert('이거 보여주려고 이러는거야?');
      return;
}

if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('아이참 날 놀리는거야??');
      return;
}


if (files[0].name.startsWith('Item_음악마법')){
	if(track==1){action_popup.alert('으음~ 노래 들려주려고? 덕분에 기분 좋아졌어');
		     $("#track1")[0].pause(); $("#track2")[0].play();
		    track=2}
	else if(track==2){action_popup.alert('하고 싶은 말은 없는거야??');
		     $("#track2")[0].pause(); $("#track3")[0].play();
		    track=3}
	else {action_popup.alert('뭐야~ 뭘 하려고 이렇게 음악을 바꿔대!');
		     $("#track3")[0].pause(); $("#track1")[0].play();
		    track=1}
      return;
}
	
	
	
if (files[0].name.startsWith('Item_소환마법')){
       action_popup.alert('히히 마법이라도 보여주려는거야?');
      return;
}

if (files[0].name.startsWith('Item_빛마법')){
  action_popup.alert('뭐야~~ 뭘 말해주려고 이렇게 분위기를 잡아!');
  return;
}

if (files[0].name.startsWith('Item_반지')){
  action_popup.alert('미래에서 시간을 돌리지 마시오');
  return;
}

if (files[0].name.startsWith('Item_동전')){
  action_popup.alert('으앗! 적선하는거야? 나 돈 많아...');
  return;
}

if (files[0].name.startsWith('Item_색마법')){
  action_popup.alert('뭐야~ 색이 아직도 안보여?');
  return;
}

if (files[0].name.startsWith('Item_열쇠')){
  action_popup.alert('이건 아까 쓴거잖아!');
  return;
}

if (files[0].name.startsWith('Item_구슬')){
  action_popup.alert('응? 이걸 나 주려고?');
  return;
}

if (files[0].name.startsWith('Item_지도')){
  action_popup.alert('으..응? 길 찾아달라고?? 나 길치야..');
  return;
}

if (files[0].name.startsWith('Item_조각')){
  action_popup.alert('음? 이거 또 풀어달라구?');
  return;
}

if (files[0].name.startsWith('Item_발톱')){
  action_popup.alert('으악!! 할말 있다며 이게뭐야...!');
  return;
}

if (files[0].name.startsWith('Item_고무호스')){
  action_popup.alert('으악!! 할말 있다며 이게뭐야...!');
  return;
}

else if(files[0].name.startsWith('Item_')){
  action_popup.alert("뭐야~ 할말이 뭔데 그래~");
      return;
}
	
else{
      action_popup.alert('이런거 말고..할말있으면 제대로 해줘');
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
