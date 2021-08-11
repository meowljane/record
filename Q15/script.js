$('#content')
  .on("dragover", dragOver)
  .on("dragleave", dragOver)
  .on("drop", uploadFiles);

function dragOver(e){
	e.stopPropagation();
	e.preventDefault();
	if (e.type == "dragover") {
		$(e.target).css({
			"background-color": "black",
			"outline-offset": "-20px"
		});
	} else {
    	$(e.target).css({
			"background-color": "black",
			"outline-offset": "-10px"
		});
    }
}

var aonoff = 0;
var bonoff = 0;
var conoff = 0;
var donoff = 0;

function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        action_popup.alert('하나만 올려주세요.');
        return;
    }
    if (files[0].name.startsWith('Item_렌즈')){
      $('#공1').fadeIn(2000);
      var audio = new Audio("./done.mp3");
      audio.play();
      aonoff=1;
      var ballon = aonoff+bonoff+conoff+donoff;
      if (ballon==1){ $('#more').css({"background-image" :"url(./more3.png)"});}
      if (ballon==2){ $('#more').css({"background-image" :"url(./more2.png)"});}
      if (ballon==3){ $('#more').css({"background-image" :"url(./more1.png)"});}
      if (ballon==4){ $('#more').fadeOut(2000);$('#이후판').css({"background-image" :"url(./이후판.png)","transition": "1s", "opacity":"1"});}
      return;
      }

    if (files[0].name.startsWith('Item_동전')){
      $('#공2').fadeIn(2000);
      var audio = new Audio("./done.mp3");
      audio.play();
      bonoff=1;
      var ballon = aonoff+bonoff+conoff+donoff;
      if (ballon==1){ $('#more').css({"background-image" :"url(./more3.png)"});}
      if (ballon==2){ $('#more').css({"background-image" :"url(./more2.png)"});}
      if (ballon==3){ $('#more').css({"background-image" :"url(./more1.png)"});}
      if (ballon==4){ $('#more').fadeOut(2000);$('#이후판').css({"background-image" :"url(./이후판.png)","transition": "1s", "opacity":"1"});}
      return;
      }
   
    if (files[0].name.startsWith('Item_반지')){
      $('#공3').fadeIn(2000);
      var audio = new Audio("./done.mp3");
      audio.play();
      conoff=1;
      var ballon = aonoff+bonoff+conoff+donoff;
      if (ballon==1){ $('#more').css({"background-image" :"url(./more3.png)"});}
      if (ballon==2){ $('#more').css({"background-image" :"url(./more2.png)"});}
      if (ballon==3){ $('#more').css({"background-image" :"url(./more1.png)"});}
      if (ballon==4){ $('#more').fadeOut(2000);$('#이후판').css({"background-image" :"url(./이후판.png)","transition": "1s", "opacity":"1"});}
      return;
      }

    if (files[0].name.startsWith('Item_구슬')){
      $('#공4').fadeIn(2000);
      var audio = new Audio("./done.mp3");
      audio.play();
      donoff=1;
      var ballon = aonoff+bonoff+conoff+donoff;
      if (ballon==1){ $('#more').css({"background-image" :"url(./more3.png)"});}
      if (ballon==2){ $('#more').css({"background-image" :"url(./more2.png)"});}
      if (ballon==3){ $('#more').css({"background-image" :"url(./more1.png)"});}
      if (ballon==4){ $('#more').fadeOut(2000);$('#이후판').css({"background-image" :"url(./이후판.png)","transition": "1s", "opacity":"1"});}
      return;
      }


if (files[0].name.startsWith('Item_edit')){
      aaction_popup.alert('그 아이템은 이제 필요 없어요. 버려주세요');
      return;
}

if (files[0].name.startsWith('Item_CD')){
     action_popup.alert('노래 말고 문제에 집중해주세요.\n틀 노래가 떨어져서 이러는건 아니에요.');
      return;
}

if (files[0].name.startsWith('Item_상자')){
      action_popup.alert('그게 아니에요. 여기 너무 어둡지 않아요?');
      return;
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
