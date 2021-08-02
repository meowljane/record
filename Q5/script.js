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
        alert('하나만 올려주세요.');
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
    alert('퍼즐을 올리는건 맞지만 거기가 아니에요');
    return;
    }

    else{
      alert('올바른 아이템을 올려주세요.');
      return;}
    }
