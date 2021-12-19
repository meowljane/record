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

trig='off';


function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        action_popup.alert('얼마 안남아 설레는건 알지만 하나씩 하자!');
        return;
    }

    if (files[0].name.startsWith('Item_열쇠')&&trig=='off'){
      $('.열쇠').fadeIn(2000);
      var audio = new Audio("./done.mp3");
      audio.play();
      trig='on';
      return;
      }

      if (files[0].name.startsWith('Item_열쇠')&&trig=='on'){
        action_popup.alert('열쇠를 천천히 밀어넣어보자');
       return;
 }

 if (files[0].name.startsWith('Item_고무호스')&&trig=='on'){
  action_popup.alert('아냐 그건 들어가지 않아');
 return;
}

if (files[0].name.startsWith('Item_유연제')&&trig=='on'){
  action_popup.alert('액을 넣을 곳도 없어');
 return;
}

if (files[0].name.startsWith('Item_edit')){
       action_popup.alert('그래그래...버리기 싫다면 가지고 다녀야지');
      return;
}

if (files[0].name.startsWith('Item_keyword')){
  action_popup.alert('너가 그렇게 그걸 버리기 싫다면야...');
 return;
}


	if (files[0].name.startsWith('Item_음악마법')){
	if(track==1){action_popup.alert('너가 들려주는 음악을 들으며 하는 모험이 좋아');
		     $("#track1")[0].pause(); $("#track2")[0].play();
		    track=2}
	else if(track==2){action_popup.alert('봉인 풀면서 음악 듣는거 너무 기분 좋다');
		     $("#track2")[0].pause(); $("#track3")[0].play();
		    track=3}
	else {action_popup.alert('그거 들려줘! 처음 들려준거!!');
		     $("#track3")[0].pause(); $("#track1")[0].play();
		    track=1}
      return;
}
	

if (files[0].name.startsWith('Item_소환마법')){
  action_popup.alert('이왕이면 고양이같은 귀여운게 소환되면 좋겠다');
  return;
}

if (files[0].name.startsWith('Item_빛마법')){
  action_popup.alert('고마워 내 마음 풀어주려 해줘서');
  return;
}

if (files[0].name.startsWith('Item_고무호스')){
  action_popup.alert('아리아드네의 실로 쓰기엔 너무 두꺼워');
  return;
}

if (files[0].name.startsWith('Item_유연제')){
  action_popup.alert('어림없어 흠조차 나지 않아');
  return;
}

if (files[0].name.startsWith('Item_지도')){
  action_popup.alert('이 미로의 길과는 상관 없어');
  return;
}

if (files[0].name.startsWith('Item_조각')){
  action_popup.alert('조각의 미로랑은 영 다르게 생겼네');
  return;
}

else if(files[0].name.startsWith('Item_')) {
	if (trig=='on'){action_popup.alert("이제 문제를 풀자. 할 수 있어!")}
	else{action_popup.alert("혹시 가지고 있는 열쇠 있어?");
      return;}
}

else{
       action_popup.alert('올바른 아이템을 올려주세요.');
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
