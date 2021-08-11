$('.content')
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
			"outline-offset": "0px"
		});
    }
}
var aonoff = 'bad';
var bonoff = 'bad';
var conoff = 'bad';
var donoff = 'bad';

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
          }}
        if (files[0].name.startsWith('Item_조각B')){
          bonoff='good'
          if (aonoff=='good' && bonoff=='good'&&conoff=='good'&&donoff=='good'){
            $('#frame').css({"opacity" :"1" , "z-index" : "2"});
            $('.content').css({"opacity" :"0" , "z-index" : "0"});
            $('#content').css({"opacity" :"1" , "z-index" : "2"});
          }}
        if (files[0].name.startsWith('Item_조각C')){
          conoff='good'
          if (aonoff=='good' && bonoff=='good'&&conoff=='good'&&donoff=='good'){
            $('#frame').css({"opacity" :"1" , "z-index" : "2"});
            $('.content').css({"opacity" :"0" , "z-index" : "0"});
            $('#content').css({"opacity" :"1" , "z-index" : "2"});
          }}
        if (files[0].name.startsWith('Item_조각D')){
          donoff='good'
          if (aonoff=='good' && bonoff=='good'&&conoff=='good'&&donoff=='good'){
            $('#frame').css({"opacity" :"1" , "z-index" : "2"});
            $('.content').css({"opacity" :"0" , "z-index" : "0"});
            $('#content').css({"opacity" :"1" , "z-index" : "2"});
          }}
        }


    else if (files[0].name.startsWith('Item_조각')){
    action_popup.alert('퍼즐을 올리는건 맞지만 거기가 아니에요');
    return;
    }

    else{
      action_popup.alert('올바른 아이템을 올려주세요.');
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
