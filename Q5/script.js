$('.content')
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
var aonoff = 'bad';
var bonoff = 'bad';
var conoff = 'bad';
var donoff = 'bad';
puzzledone='off';

function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
 

    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        action_popup.alert('공간이 좁아.하나씩 써봐.');
        return;
    }

    if (files[0].name.startsWith($(e.target).attr("value"))){
        $(e.target).css({"background-image": "url(" + window.URL.createObjectURL(files[0]) + ")",
            "outline": "none",
            "background-size": "100% 100%",});
        if (files[0].name.startsWith('Item_조각A')){
          aonoff='good'
          if (aonoff=='good' && bonoff=='good'&&conoff=='good'&&donoff=='good'){
            $('#frame').css({"opacity" :"1" , "z-index" : "2"});
            $('.content').css({"opacity" :"0" , "z-index" : "0"});
            $('#content').css({"opacity" :"1" , "z-index" : "2"});
            action_popup.alert('대단해! 미로가 나왔어. \n WASD키로 움직여봐!');
	setTimeout(function() { if(trig=='off'){action_popup.alert('아직...아이템을 더 사용해야 할 것 같아...');}}, 15000);
          }}
        if (files[0].name.startsWith('Item_조각B')){
          bonoff='good'
          if (aonoff=='good' && bonoff=='good'&&conoff=='good'&&donoff=='good'){
            $('#frame').css({"opacity" :"1" , "z-index" : "2"});
            $('.content').css({"opacity" :"0" , "z-index" : "0"});
            $('#content').css({"opacity" :"1" , "z-index" : "2"});
            action_popup.alert('대단해! 미로가 나왔어. \n WASD키로 움직여봐!');
            setTimeout(function() { if(trig=='off'){action_popup.alert('아직...아이템을 더 사용해야 할 것 같아...');}}, 15000);
          }}
        if (files[0].name.startsWith('Item_조각C')){
          conoff='good'
          if (aonoff=='good' && bonoff=='good'&&conoff=='good'&&donoff=='good'){
            $('#frame').css({"opacity" :"1" , "z-index" : "2"});
            $('.content').css({"opacity" :"0" , "z-index" : "0"});
            $('#content').css({"opacity" :"1" , "z-index" : "2"});
            action_popup.alert('대단해! 미로가 나왔어. \n WASD키로 움직여봐!');
            setTimeout(function() { if(trig=='off'){action_popup.alert('아직...아이템을 더 사용해야 할 것 같아...');}}, 15000);
          }}
        if (files[0].name.startsWith('Item_조각D')){
          donoff='good'
          if (aonoff=='good' && bonoff=='good'&&conoff=='good'&&donoff=='good'){
            $('#frame').css({"opacity" :"1" , "z-index" : "2"});
            $('.content').css({"opacity" :"0" , "z-index" : "0"});
            $('#content').css({"opacity" :"1" , "z-index" : "2"});
            action_popup.alert('대단해! 미로가 나왔어. \n WASD키로 움직여봐!');
            setTimeout(function() { if(trig=='off'){action_popup.alert('아직...아이템을 더 사용해야 할 것 같아...');}}, 15000);
          }}
        }


    else if (files[0].name.startsWith('Item_조각')){
    action_popup.alert('조각을 올리는 건 맞지만 거기가 아닌 것 같아!');
    return;
    }

    else if (files[0].name.startsWith('Item_')){
      action_popup.alert('내가 보기에 여기엔 조각을 올려야해!');
      return;
      }

    else{
      action_popup.alert('그게 뭐야..? 난생 처음 보는걸.');
      return;}
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
