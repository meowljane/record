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
        action_popup.alert('이제 마지막인데 집중해!! 하나씩!');
        return;
    }

if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('너 진짜~! 아직도 가지고 있니!');
      return;
}
	if (files[0].name.startsWith('Item_keyword')){
      action_popup.alert('이걸 끝까지 들고 오다니....');
      return;
}
	

if (files[0].name.startsWith('Item_음악마법')){
      action_popup.alert('음...얼마 안남았는데 집중하자!');
      return;
}	
	
if (files[0].name.startsWith('Item_동전')){
      action_popup.alert('뭐야~ 바닥에서 주운거야?');
      return;
}
	
	
if (files[0].name.startsWith('Item_발톱')){
      action_popup.alert('윽 뭐야.. 누구거야..?');
      return;
}
		
	
	
if (files[0].name.startsWith('Item_크로스워드')){
$('#crossword').css({"background-image": "url(" + window.URL.createObjectURL(files[0]) + ")",
            "outline": "none",
            "background-size": "100% 100%",
"z-index":"5",
"width":"800px",
"height":"638px"})
.draggable();
$('#문제').css({"pointer-events":"none","user-select":"none","z-index":"+=10"});
$('#content').css({"pointer-events":"none","user-select":"none","z-index":"-=15"});
}

else{
      action_popup.alert('그건 난생 처음 보는데...');
      return;
    }
}
$( '#crossword').css({"z-index":"5"});
$( '#문제').css({"z-index":"10"});
$( '#content').css({"z-index":"15"});


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
