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
        action_popup.alert('쉿! 정숙! 너무 많은걸 꺼내고 있어.');
        return;
    }

if (files[0].name.startsWith('Item_유연제')){
      action_popup.alert('좋은 생각이긴 한데... \n지금 쓸건 아닌 것 같아!');
      return;
}

	
	if (files[0].name.startsWith('Item_음악마법')){
	if(track==1){ action_popup.alert('음악을 바꿔주는 마법...\n 다른 세계에선 mp3라고 한대');
		     $("#track1")[0].pause(); $("#track2")[0].play();
		    track=2}
	else if(track==2){action_popup.alert('귀에 무언갈 달고 음악을 듣는 삽화야...징그럽다!');
		     $("#track2")[0].pause(); $("#track3")[0].play();
		    track=3}
	else {action_popup.alert('도서관이니까 조용히 원래 음악으로 바꿔두자');
		     $("#track3")[0].pause(); $("#track1")[0].play();
		    track=1}
      return;
}
	
	
if (files[0].name.startsWith('Item_빛마법')){
  action_popup.alert('흠.. 인광..형광?..들뜬상태..? 너가 대신 읽어봐ㅠㅠ');
  return;
}

if (files[0].name.startsWith('Item_소환마법')){
  action_popup.alert('우와..도서관 어디에도 소환마법에 관한 내용은 없어!');
  return;
}

if (files[0].name.startsWith('Item_색마법')){
  action_popup.alert('색약, 색맹에 관한 책만 있어. 관련이 있을까?');
  return;
}

if (files[0].name.startsWith('Item_조각')){
  action_popup.alert('이곳 도서관에서 보물들에 대한 서적을 찾아보자!');
  return;
}

if (files[0].name.startsWith('Item_주사위')){
  action_popup.alert('어떻게 던져도 5가 나오는 주사위. 이거 사기잖아!');
  return;
}

if (files[0].name.startsWith('Item_동전')){
  action_popup.alert('왕이 자주 바뀌어서 마법 동전에 새겨진 얼굴은 없대.');
  return;
}

if (files[0].name.startsWith('Item_크로스워드')){
  action_popup.alert('전부터 내려오던 종이 놀이래. 별다른 효능은 없나?');
  return;
}

if (files[0].name.startsWith('Item_구슬')){
  action_popup.alert('그래서...내가...뭐라고...했더라...?');
  return;
}

if (files[0].name.startsWith('Item_발톱')){
  action_popup.alert('람시적 사자의 발톱이래. 무엇이든 뚫을 수 있대!');
  return;
}

if (files[0].name.startsWith('Item_고무호스')){
  action_popup.alert('라구 코끼리 코가죽으로 만들었대. 잔인해...');
  return;
}

if (files[0].name.startsWith('Item_열쇠')){
  action_popup.alert('이 열쇠를 사용할 땐 천천히 사용하라는데?');
  return;
}

if (files[0].name.startsWith('Item_톱니바퀴')){
  action_popup.alert('마법의 톱니바퀴 외측은 완벽한 원형을 이루고 있대.');
  return;
}

if (files[0].name.startsWith('Item_반지')){
  action_popup.alert('역대 왕들이 프러포즈할때 쓴다는 반지... 로맨틱해..');
  return;
}

if (files[0].name.startsWith('Item_지도')){
  action_popup.alert('오..엄청난 정보. 저주를 관리할 수 있는 곳이 그려져있대!');
  return;
}

if (files[0].name.startsWith('Item_keyword')){
  action_popup.alert('[이것을 아직도 안 버린 당신...집착이다!]라는데..?');
  return;
}

if (files[0].name.startsWith('Item_edit')){
  action_popup.alert('[버릴 건 버려라]라는데..?');
  return;
}

else{
      action_popup.alert('그런건 이 도서관에서 찾을 수 없어..');
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
