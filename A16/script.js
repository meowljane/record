$('#content')
  .on("dragover", dragOver)
  .on("dragleave", dragOver)
  .on("drop", uploadFiles);

function dragOver(e) {
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

trig = 'off'
function uploadFiles(e) {
  e.stopPropagation();
  e.preventDefault();
  dragOver(e);

  e.dataTransfer = e.originalEvent.dataTransfer;
  var files = e.target.files || e.dataTransfer.files;
  if (files.length > 1) {
    action_popup.alert('아아아...어지러워');
    return;
  }


  if (files[0].name.startsWith('Item_크로스워드') && trig == 'off') {
    $('#crossword').css({
      "background-image": "url(" + window.URL.createObjectURL(files[0]) + ")",
      "outline": "none",
      "background-size": "100% 100%",
      "z-index": "5",
      "width": "800px",
      "height": "636px"
    })
      .draggable();
    $('#문제').css({ "pointer-events": "none", "user-select": "none", "z-index": "+=10" });
    $('#문제2').css({ "pointer-events": "none", "user-select": "none", "z-index": "+=5" });
        $('#bgm').animate({volume: 0.1}, 500);
        setTimeout(function() {$('#bgm').animate({volume: 1}, 500);}, 10000);
        var audio = new Audio("./done.mp3");
        audio.play();
    return;
  }


  if (files[0].name.startsWith('Item_edit')) {
    action_popup.alert('응...미야...버릴게..');
    return;
  }
  if (files[0].name.startsWith('Item_keyword')) {
    action_popup.alert('미야가..이거 버리라 했다...');
    return;
  }
  if (files[0].name.startsWith('Item_음악마법')) {
    action_popup.alert('미야의 속삭임이 들린다.....');
    return;
  }


  if (files[0].name.startsWith('Item_소환마법')) {
    action_popup.alert('미야를 되살려야 한다...');
    return;
  }

  if (files[0].name.startsWith('Item_톱니바퀴')) {
    action_popup.alert('아...미야...울지마...아프지..미안해...');
    return;
  }

  if (files[0].name.startsWith('Item_주사위')) {
    action_popup.alert('미야...같이 집으로 가는거야. 혼자 안갈게...');
    return;
  }

  if (files[0].name.startsWith('Item_고무호스')) {
    action_popup.alert('미야...미야...우린 조금 이따 보는거야...');
    return;
  }


  if (files[0].name.startsWith('Item_색마법')) {
    action_popup.alert('미야... 네 눈 금방...볼거야...');
    return;
  }

  if (files[0].name.startsWith('Item_조각')) {
    action_popup.alert('미야...으응...어서 집으로 가자');
    return;
  }

  if (files[0].name.startsWith('Item_동전')) {
    action_popup.alert('미야...널 반드시 되살려줄게...');
    return;
  }

  if (files[0].name.startsWith('Item_유연제')) {
    action_popup.alert('으응...미야...살려달라고...기다려...');
    return;
  }

  if (files[0].name.startsWith('Item_발톱')) {
    action_popup.alert('미야...미야...으응..아팠겠다...');
    return;
  }

  if (files[0].name.startsWith('Item_지도')) {
    action_popup.alert('미야...보물을 봉인하라고...알겠어...');
    return;
  }

  if (files[0].name.startsWith('Item_열쇠')) {
    action_popup.alert('미야...조금만 참아...되살려줄게...');
    return;
  }

  if (files[0].name.startsWith('Item_확대마법')) {
    action_popup.alert('미야...으흑...자꾸 끔찍한 모습이 생각나');
    return;
  }

  if (files[0].name.startsWith('Item_반지')) {
    action_popup.alert('미야...널 살려서 반드시 결혼할거야...');
    return;
  }

  if (files[0].name.startsWith('Item_구슬')) {
    action_popup.alert('미야..조금만 기다려봐...');
    return;
  }

  if (files[0].name.startsWith('Item_크로스워드') && trig == 'on') {
    action_popup.alert('이미 올려놨다...');
    return;
  }

  if (files[0].name.startsWith('Item_확대마법')) {
    action_popup.alert('다시 모든걸...돌려놔야해...');
    return;
  }

  else if (files[0].name.startsWith('Item_')&&trig == 'on') {
      action_popup.alert("더이상 무언갈 쓸 필요 없어...");
      return;
  }


  else {
    action_popup.alert('이 괴상한건 뭐야...');
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


$('#crossword').css({ "z-index": "5" });
$('#문제').css({ "z-index": "10" });
$('#문제2').css({ "z-index": "8" });
$('#content').css({ "z-index": "15" });
