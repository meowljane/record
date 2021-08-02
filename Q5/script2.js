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
			"outline-offset": "0px"
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

    if (files[0].name.startsWith('Item_돋보기')){
      $('#mag').css({'visibility': 'visible', 'opacity' : '1'});
      $('#Q2').css({'opacity' : '1'});
      var audio = new Audio("./done.mp3");
      audio.play();
      return;
      }

if (files[0].name.startsWith('Item_edit')){
      alert('그 아이템은 이제 필요 없어요. 버려주세요');
      return;
}

if (files[0].name.startsWith('Item_CD')){
      alert('노래 말고 문제에 집중해주세요.\n틀 노래가 떨어져서 이러는건 아니에요.');
      return;
}

if (files[0].name.startsWith('Item_상자')){
      alert('그게 아니에요. 이친구 조사를 해야할 것 같지 않아요?');
      return;
}

else{
      alert('올바른 아이템을 올려주세요.');
      return;
    }
}