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
trig = 'off';

function uploadFiles(e) {
  e.stopPropagation();
  e.preventDefault();
  dragOver(e);

e.dataTransfer = e.originalEvent.dataTransfer;
var files = e.target.files || e.dataTransfer.files;
if (files.length > 1) {
  action_popup.alert('너무 많은걸 한번에 하려하지 마라.');
  return;
}

if (files[0].name.startsWith('Item_지도.png') && trig == 'off') {
  $('#지도').css({
    "background-image": "url(" + window.URL.createObjectURL(files[0]) + ")",
    "outline": "none",
    "background-size": "100% 100%",
    "z-index": "5",
    "width": "800px",
    "height": "640px"
  })
    .draggable();
  $('#문제').css({ "pointer-events": "none", "user-select": "none", "z-index": "+=10" });

  return;
}


if (files[0].name.startsWith('Item_edit')) {
  action_popup.alert('장난을 치는건가?');
  return;
}
if (files[0].name.startsWith('Item_keyword')) {
  action_popup.alert('내 시간을 빼앗지 마라.');
  return;
}
if (files[0].name.startsWith('Item_음악마법')) {
  action_popup.alert('미야...음악을 들어야만 잠에 들었는데.');
  return;
}


if (files[0].name.startsWith('Item_소환마법')) {
  action_popup.alert('소환해봤자 뭐가 달라지는데...?');
  return;
}

if (files[0].name.startsWith('Item_톱니바퀴')) {
  action_popup.alert('봉인 재료가 숨겨진 두번째 장소를 찾아야한다.');
  return;
}

if (files[0].name.startsWith('Item_주사위')) {
  action_popup.alert('봉인 재료가 숨겨진 두번째 장소를 찾아야한다.');
  return;
}

if (files[0].name.startsWith('Item_고무호스')) {
  action_popup.alert('봉인 재료가 숨겨진 두번째 장소를 찾아야한다.');
  return;
}


if (files[0].name.startsWith('Item_색마법')) {
  action_popup.alert('미야...모험을 떠나자 할때 막았어야 했는데...');
  return;
}

if (files[0].name.startsWith('Item_조각')) {
  action_popup.alert('조각을 올려둘 자리가 아니다.');
  return;
}

if (files[0].name.startsWith('Item_동전')) {
  action_popup.alert('봉인 재료가 숨겨진 두번째 장소를 찾아야한다.');
  return;
}

if (files[0].name.startsWith('Item_유연제')) {
  action_popup.alert('유화 시켜봤자 달라질 것이 없다.');
  return;
}

if (files[0].name.startsWith('Item_발톱')) {
  action_popup.alert('구멍을 내봤자 도움될 것이 없다.');
  return;
}
	
	if (files[0].name.startsWith('Item_열쇠')) {
  action_popup.alert('부활에 대한 정보가 있는 두번째 장소를 찾아야한다.');
  return;
}

if (files[0].name.startsWith('Item_지도')&& trig == 'on') {
  action_popup.alert('지도는 이미 올라가 있다.');
  return;
}

else if (files[0].name.startsWith('Item_')) {
  if (trig == 'on') {
      action_popup.alert("더이상 아이템을 쓸 필요는 없다");
      return;
  }
  else {
    action_popup.alert("이미 봉인하고 없는 물건이다.");
    return;
  }
}


else {
  action_popup.alert('난생 처음 보는 것이다...');
  return;
}
}

$(".modal_close").on("click", function () {
action_popup.close(this);
});
var action_popup = {
timer: 500,
alert: function (txt) { this.open("type-alert", txt); },

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
  setTimeout(function () { dimLayer != null ? dimLayer.remove() : ""; }, this.timer);
}
}

