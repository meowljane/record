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


trig='off';


function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        action_popup.alert('천천히..하자..여기 너무 아름다워');
        return;
    }



if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('여기다가는 버리지 말자!');
      return;
}

if (files[0].name.startsWith('Item_keyword')){
  action_popup.alert('지금은 그거 말고 하늘을 봐봐...');
  return;
}

if (files[0].name.startsWith('Item_음악마법')){
      action_popup.alert('그래.. 별이랑 너랑 음악.. 더 바랄게 없네');
      return;
}

if (files[0].name.startsWith('Item_소환마법')){
      action_popup.alert('충분히 행복해.. 무언가가 더 필요하지는 않아');
      return;
}

if (files[0].name.startsWith('Item_빛마법')){
  action_popup.alert('네가 만드는 빛도 참 멋있다.');
  return;
}

if (files[0].name.startsWith('Item_색마법')){
  action_popup.alert('별들도 제각각 색을 가지고 있겠지?.');
  return;
}

else if(files[0].name.startsWith('Item_')) {
  action_popup.alert("지금은 그런거 신경쓰지 말고 하늘만 보자...");
      return;}
	
else{
      action_popup.alert('아앗..이게 뭐야? 그거 내려놓고 하늘을 봐!');
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
