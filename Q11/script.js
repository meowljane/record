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

    if (files[0].name.startsWith('Item_상자')){
      $('#Q0').animate({'opacity': 0}, {'duration': 2500, 'queue': false});
      $('#Q').animate({'opacity': 1}, {'duration': 2500, 'queue': false});
      var audio = new Audio("./done.mp3");
      audio.play();
      return;}


if (files[0].name.startsWith('Item_톱니바퀴')){
      alert('좋은 생각입니다만, 굳이 지금 할 필요가 있을까요?');
      return;
}

if (files[0].name.startsWith('Item_edit')){
      alert('그 아이템은 이제 필요 없어요. 버려주세요');
      return;
}

if (files[0].name.startsWith('Item_CD')){
      alert('지금 노래가 맘에 안드신다는거죠? 어디 이 노래는 어때요?\n문제 풀이랑은 상관 없어요. 분위기나 바꿔보려는거예요.');
      return;
}

else{
      alert('올바른 아이템을 올려주세요.');
      return;
    }
}