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
	
	if (files[0].name.startsWith('Item')){

if (files[0].name.startsWith('Item_keyword')){
$('#키워드열쇠').css({"display":"block"}).draggable();
var audio = new Audio("./done.mp3");
audio.play();
return;
}

if (files[0].name.startsWith('Item_CD')){
  alert('그 시도에 박수를 보냅니다.\n하지만 지금은 튜토리얼에 집중해 주세요!');
  }
		
		    else{
      alert('그게 뭔가요?\n여기서 쓰이는 것 같긴 한데...');
      return;}

  }

else{
      alert('올바른 아이템을 올려주세요.');
      return;
    }
}
