#content{
    outline: 2px dashed #ffffff ;
    outline-offset:-10px;  
    text-align: center;
    transition: all .15s ease-in-out;
    width: 200px;
    height: 150px;
    background-color: rgba(0,0,0,0.1);
}

#content img, #content video{
    width:100%;
    height:100%;
    display:none;
}

<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Q12</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
  
    <audio id="bgm" autoplay="autoplay" loop>
 <source src="./Sparkle.mp3" type="audio/mp3">
</audio>
  
<div id="box" style=" width : 800px;">
  
  <div class="in" style="text-align: center;" align="center">
    <a href="https://meowljane.github.io/cube/wild3" target="_self"><img src="https://meowljane.github.io/record/Q12/door.png" title="" width="288" height="359" class="door"></a>
    </div>
<div id="content">
</div>
 </div>            
  
  <section class="modal modal-section type-alert">
        <div class="enroll_box">
                  <p class="menu_msg"></p>
              </div>
              <div class="enroll_btn">
                  <button class="btn pink_btn modal_close">확인</button>
              </div>
          </section>


  
 <style>

@import url(https://fonts.googleapis.com/earlyaccess/hanna.css);
             
             p{
             font-family: 'Hanna', sans-serif;
             }
                    
            
            


#content{position: absolute;
    left: 300px;
    top: 450px;}

   
#box{margin:0 auto; position: relative;}
    
          *{
cursor: url(https://www.thelabyrinth.co.kr/labyrinth/upload/quest/3440/1629109221972/%EC%BB%A4%EC%84%9C1_1.png), default;}
#content, #btn, button, .door{
    cursor: url(https://www.thelabyrinth.co.kr/labyrinth/upload/quest/3440/1629109221972/%EC%BB%A4%EC%84%9C2.png), pointer;
} 
    
.modal .btn{border: 1px solid #999999;text-align: center;border-radius: 5px;outline: none;font-weight: 500;}
.modal{width: 300px;height: 252px;border-radius: 10px;padding: 50px 24px;box-sizing: border-box;text-align: center;}
.modal-section{background: #c4c4c4;box-sizing: border-box;display: none;position: absolute;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);transform: translate(-50%, -50%);display: none;z-index: 9999;}
.menu_msg{font-size: 21px;font-weight: 500;}
.enroll_box p{padding-bottom: 56px;}
.pink_btn {width: 90px;background: #303030;color: #fff;height: 36px;line-height: 36px;transition: 0.5s;font-size: 17px;border: none;}
</style>

 <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
 <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script  src="./script.js"></script>
  <script>
  $( function() {
    $( 'item').draggable();
  } );
  </script>

</body>
</html>

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
        action_popup.alert('천천히..하자..여기 너무 아름다워');
        return;
    }



if (files[0].name.startsWith('Item_edit')){
      action_popup.alert('여기다가는 버리지 말자!');
      return;
}

if (files[0].name.startsWith('Item_keyword')){
  action_popup.alert('지금은 그거 말고 하늘을 봐봐...');
  return;
}

if (files[0].name.startsWith('Item_음악마법')){
      action_popup.alert('그래.. 별이랑 너랑 음악.. 더 바랄게 없네');
      return;
}

if (files[0].name.startsWith('Item_소환마법')){
      action_popup.alert('충분히 행복해.. 무언가가 더 필요하지는 않아');
      return;
}

if (files[0].name.startsWith('Item_빛마법')){
  action_popup.alert('네가 만드는 빛도 참 멋있다.');
  return;
}

if (files[0].name.startsWith('Item_색마법')){
  action_popup.alert('별들도 제각각 색을 가지고 있겠지?.');
  return;
}

else if(files[0].name.startsWith('Item_')) {
  action_popup.alert("지금은 그런거 신경쓰지 말고 하늘만 보자...");
      return;}
	
else{
      action_popup.alert('아앗..이게 뭐야? 그거 내려놓고 하늘을 봐!');
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
