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

if (files[0].name.startsWith('Item_edit')){
$('#제작튜토리얼').css({"background-image": "url(" + window.URL.createObjectURL(files[0]) + ")",
            "outline": "none",
            "background-size": "100% 100%",
"width":"351px",
"height":"551px"})
.draggable();
var audio = new Audio("./done.mp3");
audio.play();
return;
}
if (files[0].name.startsWith('Item')){

if (files[0].name.startsWith('Item_keyword')){
  alert('그건 이미 사용했잖아요!\n하지만 나쁘지 않은 시도였어요!');
  return;
  }
  
  if (files[0].name.startsWith('Item_CD')){
    alert('CD가 마음에 들었나요? \n새로운 시도는 늘 응원해요.');
    return;
    }
  
    else{
      alert('그게 뭔가요?\n여기서 쓰이는 것 같긴 한데...');
      return;}

  }
else{
      alert('올바른 아이템을 올려주세요. \n 제대로 된 아이템은 파일명이 Item으로 시작해요.');
      return;
    }
}
