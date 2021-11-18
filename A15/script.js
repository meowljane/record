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

trig = 'off';

function uploadFiles(e) {
      e.stopPropagation();
      e.preventDefault();
      dragOver(e);

      e.dataTransfer = e.originalEvent.dataTransfer;
      var files = e.target.files || e.dataTransfer.files;
      if (files.length > 1) {
            action_popup.alert('이렇게 많이...?');
            return;
      }
      if (files[0].name.startsWith('Item_톱니바퀴') && trig == 'off') {
            $('#이후판').css({ "background-image": "url(./이후판.png)", "transition": "1.5s", "opacity": "1" });
            $('#이전판').css({ "transition": "1.5s", "opacity": "0" });
            $('#길').css({ "transform": "rotate(180deg) translateY(-6px)", "transition": "2s" });
            var audio = new Audio("./done.mp3");
            audio.play();
            trig = 'on';
            return;
      }

      if (files[0].name.startsWith('Item_edit')) {
            action_popup.alert('미야가 버리라고 속삭이는 듯 하다.');
            return;
      }
      if (files[0].name.startsWith('Item_keyword')) {
            action_popup.alert('미야의 목소리가 들린다...');
            return;
      }
      if (files[0].name.startsWith('Item_음악마법')) {
            action_popup.alert('미야의 목소리에 집중하고 싶다...');
            return;
      }


      if (files[0].name.startsWith('Item_소환마법')) {
            action_popup.alert('미야...?를 불러내라고...?');
            return;
      }

      if (files[0].name.startsWith('Item_톱니바퀴')&&trig=='on') {
            action_popup.alert('한바퀴 더 돌릴 셈인가..?');
            return;
      }

      if (files[0].name.startsWith('Item_주사위')) {
            action_popup.alert('미야가 울고있는 소리가 울린다.');
            return;
      }

      if (files[0].name.startsWith('Item_고무호스')) {
            action_popup.alert('미야가 집에 가고싶다고 울부짖는다.');
            return;
      }


      if (files[0].name.startsWith('Item_색마법')) {
            action_popup.alert('미야의 색이 붉은색으로 남아버렸다.');
            return;
      }

      if (files[0].name.startsWith('Item_조각')) {
            action_popup.alert('미야가 살려달라고 애원하고 있다.');
            return;
      }

      if (files[0].name.startsWith('Item_동전')) {
            action_popup.alert('분명 여기서 미야와 이것을 굴렸는데..');
            return;
      }

      if (files[0].name.startsWith('Item_유연제')) {
            action_popup.alert('어리고 다 큰 미야가 번갈아 떠오른다.');
            return;
      }

      if (files[0].name.startsWith('Item_발톱')) {
            action_popup.alert('왜 저렇게 비참하게 가야했지?');
            return;
      }

      if (files[0].name.startsWith('Item_지도')) {
            action_popup.alert('미야가 부활을 간절히 바라고 있다.');
            return;
      }

      if (files[0].name.startsWith('Item_열쇠')) {
            action_popup.alert('보물을 봉인해 살려달라고 애원하고 있다.');
            return;
      }

      if (files[0].name.startsWith('Item_확대마법')) {
            action_popup.alert('소원을 빌어 미야를 되살려야 한다.');
            return;
      }

      if (files[0].name.startsWith('Item_반지')) {
            action_popup.alert('미야...미야... 널 위해서 뭐든지 할게');
            return;
      }

      if (files[0].name.startsWith('Item_구슬')) {
            action_popup.alert('미야와 이곳에서 함께 굴렸었는데...');
            return;
      }

      else if (files[0].name.startsWith('Item_')) {
            if (trig == 'on') {
                  action_popup.alert("더이상 아이템을 쓸 필요 없다.");
                  return;
            }
            else {
                  action_popup.alert("이미 봉인하고 없는 물건이다.");
                  return;
            }
      }


      else {
            action_popup.alert('내가 환각을 보고 있는건가?');
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

