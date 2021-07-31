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

if (files[0].name.match(/crossword.png/)){
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
      alert('올바른 아이템을 올려주세요.');
      return;
    }
}
$( '#crossword').css({"z-index":"5"});
$( '#문제').css({"z-index":"10"});
$( '#content').css({"z-index":"15"});