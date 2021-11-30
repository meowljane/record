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
trig ='off'
function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
      action_popup.alert('하나씩 하고 싶다...');
        return;
    }

    if (files[0].name.startsWith('Item_색마법')&&trig=='off'){
	$('#bgm').animate({volume: 0.1}, 500);
      $('#Q2').fadeIn(2000);
      $('#Q1').css({'transition':'1s', 'opacity':'0', });
      var audio = new Audio("./done.mp3");
      audio.play();
	    setTimeout(function() {$('#bgm').animate({volume: 1}, 500);}, 10000);
      trig = 'on';
      return;
      }

      if (files[0].name.startsWith('Item_edit')) {
            action_popup.alert('잔소리 해주는 미야가 없다.');
            return;
        }
        if (files[0].name.startsWith('Item_keyword')) {
            action_popup.alert('버리라고 타박줄 미야가 없다.');
            return;
        }
        if (files[0].name.startsWith('Item_음악마법')) {
            action_popup.alert('미야...금방 다시 들려줄게...');
            return;
        }
    
    
        if (files[0].name.startsWith('Item_소환마법')) {
            action_popup.alert('봉인을 마치고 미야를 소환해야 한다...');
            return;
        }
    
        if (files[0].name.startsWith('Item_톱니바퀴')) {
            action_popup.alert('미야... 얼마나 무서웠을까...');
            return;
        }
    
        if (files[0].name.startsWith('Item_주사위')) {
            action_popup.alert('살짝만 긁혀도 엉엉 울던 사람이었는데');
            return;
        }
    
        if (files[0].name.startsWith('Item_고무호스')) {
            action_popup.alert('정신차리고 집중해야 한다...');
            return;
        }
    
    
        if (files[0].name.startsWith('Item_색마법')&&trig=='on') {
            action_popup.alert('더 색을 바꿀 이유는 없다.');
            return;
        }
    
        if (files[0].name.startsWith('Item_조각')) {
            action_popup.alert('문제에 적힌 지시를 따르자...');
            return;
        }
    
        if (files[0].name.startsWith('Item_동전')) {
            action_popup.alert('미야가 살려달라고 울부짖는 듯 하다...');
            return;
        }
    
        if (files[0].name.startsWith('Item_유연제')) {
            action_popup.alert('차라리 나를 죽일 것이지...');
            return;
        }
    
        if (files[0].name.startsWith('Item_발톱')) {
                action_popup.alert('미야가 귀에서 부활의 희망을 속삭인다.');
              return;
        }
    
        if (files[0].name.startsWith('Item_지도')) {
            action_popup.alert('미야는 부활을 바라고 있다.');
            return;
        }
    
        if (files[0].name.startsWith('Item_열쇠')) {
            action_popup.alert('미야가 내 귀에서 속삭이는게 들린다');
            return;
        }
    
        if (files[0].name.startsWith('Item_확대마법')) {
            action_popup.alert('미야가 제발 살려달라고 울고있다.');
            return;
        }

        if (files[0].name.startsWith('Item_반지')) {
            action_popup.alert('미야...미안해...그렇게 좋아했는데');
            return;
        }

        else if (files[0].name.startsWith('Item_')) {
              if (trig=='on'){
            action_popup.alert("더이상 아이템을 쓸 필요 없다.");
            return;}
            else{action_popup.alert("이미 봉인하고 없는 물건이다.");
            return;}
        }
    
    
        else {
            action_popup.alert('알 수 없는것을 보여주는군..');
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
    
    
