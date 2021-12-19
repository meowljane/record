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

aonoff = 0;
bonoff = 0;
conoff = 0;
donoff = 0;
track = 1;

ballon = aonoff+bonoff+conoff+donoff;
function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        action_popup.alert('하나씩 올려봐!!');
        return;
    }


    if (files[0].name.startsWith('Item_톱니바퀴')&&aonoff==0){
      $('#공1').fadeIn(2000);
      var audio = new Audio("./done.mp3");
      audio.play();
      aonoff=1;
      ballon = aonoff+bonoff+conoff+donoff;
      if (ballon==1){ $('#more').css({"background-image" :"url(./more3.png)"});}
      if (ballon==2){ $('#more').css({"background-image" :"url(./more2.png)"});}
      if (ballon==3){ $('#more').css({"background-image" :"url(./more1.png)"});}
      if (ballon==4){ $('#more').fadeOut(2000);$('#이후판').css({"background-image" :"url(./이후판.png)","transition": "1s", "opacity":"1"});}
      return;
      }

    if (files[0].name.startsWith('Item_동전')&&bonoff==0){
      $('#공2').fadeIn(2000);
      var audio = new Audio("./done.mp3");
      audio.play();
      bonoff=1;
      ballon = aonoff+bonoff+conoff+donoff;
      if (ballon==1){ $('#more').css({"background-image" :"url(./more3.png)"});}
      if (ballon==2){ $('#more').css({"background-image" :"url(./more2.png)"});}
      if (ballon==3){ $('#more').css({"background-image" :"url(./more1.png)"});}
      if (ballon==4){ $('#more').fadeOut(2000);$('#이후판').css({"background-image" :"url(./이후판.png)","transition": "1s", "opacity":"1"});}
      return;
      }
   
    if (files[0].name.startsWith('Item_반지')&&conoff==0){
      $('#공3').fadeIn(2000);
      var audio = new Audio("./done.mp3");
      audio.play();
      conoff=1;
      ballon = aonoff+bonoff+conoff+donoff;
      if (ballon==1){ $('#more').css({"background-image" :"url(./more3.png)"});}
      if (ballon==2){ $('#more').css({"background-image" :"url(./more2.png)"});}
      if (ballon==3){ $('#more').css({"background-image" :"url(./more1.png)"});}
      if (ballon==4){ $('#more').fadeOut(2000);$('#이후판').css({"background-image" :"url(./이후판.png)","transition": "1s", "opacity":"1"});}
      return;
      }

    if (files[0].name.startsWith('Item_구슬')&&donoff==0){
      $('#공4').fadeIn(2000);
      var audio = new Audio("./done.mp3");
      audio.play();
      donoff=1;
      ballon = aonoff+bonoff+conoff+donoff;
      if (ballon==1){ $('#more').css({"background-image" :"url(./more3.png)"});}
      if (ballon==2){ $('#more').css({"background-image" :"url(./more2.png)"});}
      if (ballon==3){ $('#more').css({"background-image" :"url(./more1.png)"});}
      if (ballon==4){ $('#more').fadeOut(2000);$('#이후판').css({"background-image" :"url(./이후판.png)","transition": "1s", "opacity":"1"});}
      return;
      }

      if (files[0].name.startsWith('Item_톱니바퀴')&&aonoff==1){
        action_popup.alert('이 구는 이미 넣었어. 잘했어.');
      return;
}

      if (files[0].name.startsWith('Item_동전')&&bonoff==1){
        action_popup.alert('이 구는 이미 넣었어. 잘했어.');
      return;
}

      if (files[0].name.startsWith('Item_반지')&&conoff==1){
        action_popup.alert('이 구는 이미 넣었어. 잘했어.');
      return;
}
      if (files[0].name.startsWith('Item_구슬')&&donoff==1){
        action_popup.alert('이 구는 이미 넣었어. 잘했어.');
      return;
}

if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('마지막으로 말해줄거야. 그만 버려!');
      return;
}

if (files[0].name.startsWith('Item_keyword')){
  action_popup.alert('그거 이제 진짜 버려~');
  return;
}

	
	if (files[0].name.startsWith('Item_음악마법')){
	if(track==1){action_popup.alert('앞으로도 평생 나에게 음악 들려줘야해~');
		     $("#track1")[0].pause(); $("#track2")[0].play();
		    track=2}
	else if(track==2){action_popup.alert('매일 아침마다 너가 음악으로 깨워주면 되겠다');
		     $("#track2")[0].pause(); $("#track3")[0].play();
		    track=3}
	else {action_popup.alert('좋아~ 처음 음악 다시 들어도 될까?');
		     $("#track3")[0].pause(); $("#track1")[0].play();
		    track=1}
      return;
}
	

if (files[0].name.startsWith('Item_빛마법')){
  action_popup.alert('날 위해 켜주는거야? 고마워...');
  return;
}

if (files[0].name.startsWith('Item_색마법')){
  action_popup.alert('너 정말 내 눈 색을 좋아하는구나');
  return;
}

if (files[0].name.startsWith('Item_확대마법')){
  action_popup.alert('히히. 그만. 장난치지 마! 간지러워');
  return;
}

else if(files[0].name.startsWith('Item_')&&ballon==4) {action_popup.alert("이미 문제를 풀 준비는 끝났어"); return;}
else if(files[0].name.startsWith('Item_')&&ballon==3) {action_popup.alert("어디 공으로 쓸만한거 하나 없나?"); return;}
else if(files[0].name.startsWith('Item_')&&ballon==2) {action_popup.alert("공이 두개 더 필요해. 주머니 뒤져봐!"); return;}
else if(files[0].name.startsWith('Item_')&&ballon==1) {action_popup.alert("아까처럼 동그란 무언가를 찾아 넣어야해!"); return;}

else if(files[0].name.startsWith('Item_')&&ballon==0) {action_popup.alert("공을 넣으라고..?공이 어디있지?"); return;}
	
else{
      action_popup.alert('으으 이상한거 보여주지 말고...너무해!');
      return;
    }
}


$(".modal_close").on("click", function () {
      action_popup.close(this);
  });
var action_popup = {
      timer: 500,
    alert: function (txt) {this.open("type-alert", txt);},
  
      open: function (type, txt) {
          var popup = $("." + type);
          popup.find(".menu_msg").text(txt);
          $("body").append("<div class='dimLayer'></div>");
          $(".dimLayer").css('height', $(document).height()).attr("target", type);
          popup.fadeIn(this.timer);
      },
  
      close: function (target) {
          var modal = $(target).closest(".modal-section");
          var dimLayer = $(".dimLayer[target=type-alert]")
          modal.fadeOut(this.timer);
          setTimeout(function () {dimLayer != null ? dimLayer.remove() : "";}, this.timer);
      }
  }
