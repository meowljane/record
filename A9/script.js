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

var dice = 'off';
trig = 'off';

function uploadFiles(e) {
      e.stopPropagation();
      e.preventDefault();
      dragOver(e);

      e.dataTransfer = e.originalEvent.dataTransfer;
      var files = e.target.files || e.dataTransfer.files;
      if (files.length > 1) {
            action_popup.alert('하나씩 하자...');
            return;
      }

      if (files[0].name.startsWith('Item_주사위')&&dice=='off') {
            $('#Q2').draggable().fadeIn(2000);
        $('#bgm').animate({volume: 0.1}, 500);
        setTimeout(function() {$('#bgm').animate({volume: 1}, 500);}, 10000);
        var audio = new Audio("./done.mp3");
        audio.play();
            action_popup.alert('좋아...근데 주사위 구멍이 더 필요해.');
            dice = 'on'
            return;
      }

      if (files[0].name.startsWith('Item_발톱') && dice == 'on') {
            $('#Q2').draggable().css({ 'background-image': 'url(./Q3.png)' });
        $('#bgm').animate({volume: 0.1}, 500);
        setTimeout(function() {$('#bgm').animate({volume: 1}, 500);}, 10000);
        var audio = new Audio("./done.mp3");
        audio.play();
            trig = 'on'
            return;
      }


      if (files[0].name.startsWith('Item_edit')&&dice=='off') {
            action_popup.alert('장난칠 기분이 아니다.');
            return;
      }
      if (files[0].name.startsWith('Item_keyword')&&dice=='off') {
            action_popup.alert('이걸 보여주는 이유가 뭐지?');
            return;
      }
      if (files[0].name.startsWith('Item_음악마법')&&dice=='off') {
            action_popup.alert('음악을 들을 기분이 아니다.');
            return;
      }


      if (files[0].name.startsWith('Item_소환마법')&&dice=='off') {
            action_popup.alert('소환하고 싶은 것이 없다.');
            return;
      }

      if (files[0].name.startsWith('Item_톱니바퀴')&&dice=='off') {
            action_popup.alert('여기에 쓰일만한 것은 아니다.');
            return;
      }

      if (files[0].name.startsWith('Item_주사위')&&dice=='on') {
            action_popup.alert('새 주사위는 더이상 필요없다.');
            return;
      }

      if (files[0].name.startsWith('Item_고무호스')&&dice=='off') {
            action_popup.alert('아무리 봐도 여기완 관련 없다.');
            return;
      }


      if (files[0].name.startsWith('Item_색마법')&&dice=='off') {
            action_popup.alert('이걸로 무얼 어쩌려고..?');
            return;
      }

      if (files[0].name.startsWith('Item_조각')&&dice=='off') {
            action_popup.alert('이걸로 할 수 있는건 없다.');
            return;
      }

      if (files[0].name.startsWith('Item_동전')&&dice=='off') {
            action_popup.alert('동전 튕기기로 게임이라도 하자는건가?');
            return;
      }

      if (files[0].name.startsWith('Item_유연제')&&dice=='off') {
            action_popup.alert('유하게 만들 필요는 없어보인다.');
            return;
      }

      if (files[0].name.startsWith('Item_발톱')&&dice=='off') {
            action_popup.alert('좋은 생각이지만 먼저 해야할게 있다.');
            return;
      }


      else if(files[0].name.startsWith('Item_')) {
            if (dice=='on'){
                  if (trig=='on'){action_popup.alert("더이상 아이템을 쓸 필요는 없다");
                  return;}
                  else{action_popup.alert("이걸로 주사위에 구멍이 뚫릴까?");
                  return;}}
            else{action_popup.alert("이미 봉인하고 없는 물건이다.");
            return;}
      }
      

      else {
            action_popup.alert('이게 뭐지?');
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
