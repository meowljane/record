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
        action_popup.alert('하나씩 해~ 침착하라구!');
        return;
    }
	

if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('이게 뭐야 그건 이제 버려!');
      return;
}
	
if (files[0].name.startsWith('Item_keyword')){
      action_popup.alert('그건 버리라니까!.');
      return;
}

if (files[0].name.startsWith('Item_음악마법')){
	if(track==1){action_popup.alert('정말 평화로운 곳이야... \n 음악 덕분인가?');
		     $("#track1")[0].pause(); $("#track2")[0].play();
		    track=2}
	else if(track==2){action_popup.alert('음악이 생기고 더 마을이 활기차졌어 \n이 노래는 어때?');
		     $("#track2")[0].pause(); $("#track3")[0].play();
		    track=3}
	else {action_popup.alert('더 생각나는 음악도 없어! \n원래대로 돌려줄게!!');
		     $("#track3")[0].pause(); $("#track1")[0].play();
		    track=1}
      return;
}

if (files[0].name.startsWith('Item_빛마법')){
      action_popup.alert('깜짝이야! 너~ 이제 마법으로 날 놀리려 하는구나!');
      return;
}

if (files[0].name.startsWith('Item_소환마법')){
      action_popup.alert('너 그거 계속 남용하다가 \n 실수로 흑마법 나오는거 아니야?..');
      return;
}
	
if (files[0].name.startsWith('Item_확대마법')){
      action_popup.alert('나 솔직히 이게 일반 돋보기랑 뭐가 다른지 모르겠어. 안그래?');
      return;
}
if (files[0].name.startsWith('Item_고무호스')){
      action_popup.alert('좋은 생각이긴 해! \n하지만 지금 쓸건 아니야.');
      return;
}
	
	
if (files[0].name.startsWith('Item_구슬')){
      action_popup.alert('새로운 구슬은 필요 없을 것 같아!');
      return;
}

	if (files[0].name.startsWith('Item_조각')){
      action_popup.alert('으으...미안해 나 이런거 잘 못해...');
      return;
}
	
else if (files[0].name.startsWith('Item_')){action_popup.alert("이 문제는 아이템 없이도 풀 수 있을 것 같지 않아?");
      return;
}
	
else{
      action_popup.alert('이 세상의 물건이 아닌 것 같은데...');
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
