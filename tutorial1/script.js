$('#content')
  .on("dragover", dragOver)
  .on("dragleave", dragOver)
  .on("drop", uploadFiles);
  $("#tutorial")[0].volume =0.2;

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

if (files[0].name.match(/CD.png/)){
$('#튜토5').animate({'opacity': 1}, {'duration': 2500, 'queue': false})
.css({"display":"block"});
$('#튜토4,#content').css({"display":"none"});
$("#tutorial")[0].pause();
$("#clear")[0].play();
$("#clear")[0].volume =0.2;
}

else{
      alert('올바른 아이템을 올려주세요.');
      return;
    }
}