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
      $('#이후판').css({"background-image" :"url(./이후판.png)","transition": "1.5s", "opacity":"1"});
      $('#이전판').css({"transition": "1.5s", "opacity":"0"});
      $('#길').css({"transform" : "rotate(180deg) translateY(-6px)","transition": "2s"});
      var audio = new Audio("./done.mp3");
      audio.play();

      return;
      }


if (files[0].name.startsWith('튜토리얼')){
      alert('그 아이템은 이제 필요 없어요. 버려주세요');
      return;
}

if (files[0].name.startsWith('CD')){
      alert('노래 말고 문제에 집중해주세요.\n틀 노래가 떨어져서 이러는건 아니에요.');
      return;
}

if (files[0].name.startsWith('상자')){
      alert('그게 아니에요. 여기 너무 어둡지 않아요?');
      return;
}

else{
      alert('올바른 아이템을 올려주세요.');
      return;
    }
    }
