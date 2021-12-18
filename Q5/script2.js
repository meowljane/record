

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
	if(track==1){action_popup.alert('너 자꾸 집중 안하고 \n 음악 들려달라고 할래!?');
		     $("#track1")[0].pause(); $("#track2")[0].play();
		    track=2}
	else if(track==2){action_popup.alert('난 몰라~ 음악이나 들을래 너가 풀어줘 히히');
		     $("#track2")[0].pause(); $("#track3")[0].play();
		    track=3}
	else {action_popup.alert('더 생각나는 음악도 없어! \n원래대로 돌려줄게!!');
		     $("#track3")[0].pause(); $("#track1")[0].play();
		    track=1}
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
      action_popup.alert('윽... 괴상한 형체의 물건이네.');
      return;
    }
}
