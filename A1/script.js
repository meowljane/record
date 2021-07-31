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


if (files[0].name.startsWith('톱니바퀴')){
      $('#Q').css({"background-image": "url(./Q2.gif)",
                  "outline": "none",
                  "background-size": "100% 100%"})
      .draggable();
      return;
      }

if (files[0].name.startsWith('튜토리얼')){
      alert('그 아이템은 이제 필요 없어요. 버려주세요');
      return;
}

if (files[0].name.startsWith('CD')){
      alert('지금 노래가 맘에 안드신다는거죠? 어디 이 노래는 어때요?\n문제 풀이랑은 상관 없어요. 분위기나 바꿔보려는거예요.');
      return;
}

else{
      alert('올바른 아이템을 올려주세요.');
      return;
    }
}