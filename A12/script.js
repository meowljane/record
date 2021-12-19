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


    if (files[0].name.startsWith('Item_edit')) {
      action_popup.alert('그건 좀 버리자.');
      return;
    }
    if (files[0].name.startsWith('Item_keyword')) {
      action_popup.alert('그건 그만 보고싶다.');
      return;
    }
    if (files[0].name.startsWith('Item_음악마법')) {
      action_popup.alert('이 언덕에서 음악을 들려달라 했는데...');
      return;
    }
    
    
    if (files[0].name.startsWith('Item_소환마법')) {
      action_popup.alert('이곳에서의 미야의 모습이 잊혀지지 않는다.');
      return;
    }
    
    if (files[0].name.startsWith('Item_톱니바퀴')) {
      action_popup.alert('미야... 내가 조금 더 주의했더라면...');
      return;
    }
    
    if (files[0].name.startsWith('Item_주사위')) {
      action_popup.alert('이 언덕에서 미야의 손을 잡고 별을 봤는데...');
      return;
    }
    
    if (files[0].name.startsWith('Item_고무호스')) {
      action_popup.alert('차라리 그때 내 고백을 차버리지.');
      return;
    }
    
    
    if (files[0].name.startsWith('Item_색마법')) {
      action_popup.alert('여기서 미야는 무슨 생각을 했을까...?');
      return;
    }
    
    if (files[0].name.startsWith('Item_조각')) {
      action_popup.alert('저기...전엔 보지 못한 문양이 있다...');
      return;
    }
    
    if (files[0].name.startsWith('Item_동전')) {
      action_popup.alert('미야를 말려서 집으로 돌아가야 했다.');
      return;
    }
    
    if (files[0].name.startsWith('Item_유연제')) {
      action_popup.alert('모험에 응한 내 자신을 죽이고 싶다.');
      return;
    }
    
    if (files[0].name.startsWith('Item_발톱')) {
      action_popup.alert('난 미야가 당한것을 보고도 도망을 쳤다...');
      return;
    }
    
    if (files[0].name.startsWith('Item_지도')) {
      action_popup.alert('미야...얼마나 무서웠을까?');
      return;
    }
    
    if (files[0].name.startsWith('Item_열쇠')) {
      action_popup.alert('이딴식으로 죽음을 맞이할 아이가 아니었다.');
      return;
    }

    else if (files[0].name.startsWith('Item_')) {
        action_popup.alert("이미 봉인하고 없는 물건이다.");
        return;
    }
    
    
    else {
      action_popup.alert('이건 처음보는데...');
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
    
    
