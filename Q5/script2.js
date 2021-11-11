$('#content')
  .on("dragover", dragOver)
  .on("dragleave", dragOver)
  .on("drop", uploadFiles);

function dragOver(e){
	e.stopPropagation();
	e.preventDefault();
	if (e.type == "dragover") {
		$(e.target).css({
			"background-color": "rgba(0,0,0,0.1)",
			"outline-offset": "-20px"
		});
	} else {
    	$(e.target).css({
			"background-color": "rgba(0,0,0,0.1)",
			"outline-offset": "-10px"
		});
    }
}

trig='off';

function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
      action_popup.alert('진정하고 하나씩 해봐!');
        return;
    }

    if (files[0].name.startsWith('Item_확대마법')){
      $('#mag').css({'visibility': 'visible', 'opacity' : '1'});
      $('#Q2').css({'opacity' : '1'});
      var audio = new Audio("./done.mp3");
      audio.play();
      
      trig='on';
      return;
      }

if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('그거 아직도 안 버렸어?');
      return;
}

if (files[0].name.startsWith('Item_음악마법')){
      action_popup.alert('이와중에 음악? \n 그...그래...');
      return;
}

if (files[0].name.startsWith('Item_소환마법')){
      action_popup.alert('지금 장난칠때가 아니야! \n 이 문제 풀기 직전이라구');
      return;
}

else if(files[0].name.startsWith('Item_')) {
	if (trig=='on'){action_popup.alert("장난은 그만! \n위에 문장도 변한거 봤어?")}
	else{action_popup.alert("조사...? \n 자세히 들여다볼 도구가 있나?");
      return;}
}

else{
      alert('윽... 괴상한 형체의 물건이네.');
      return;
    }
}
