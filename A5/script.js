$('.content')
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
	} 
    else {
    	$(e.target).css({
			"background-color": "rgba(0,0,0,0.1)",
			"outline-offset": "-10px"
		});
    }
}

var gearon = 'off';


function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);

  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        action_popup.alert('하나씩...처리하자...');
        return;
    }

    if (files[0].name.startsWith('Item_조각')){
    if(gearon=='on') {$(e.target).css({"background-image": "url(" + window.URL.createObjectURL(files[0]) + ")",
            "outline": "none",
            "background-size": "100% 100%",});
            return;}
    else { action_popup.alert('좋은 생각이다. 그 전에 다른 작업이 필요하다.');return;}
}

if (files[0].name.startsWith('Item_톱니바퀴')){
    $('.content').css({"background-image": "url(./톱니바퀴.png)",
                "background-size": "100% 100%",});
    gearon = 'on';
    $('#click').css({"opacity": "1"});
    $('#Q2').css({"opacity": "1"});
    $('#Q1').css({"opacity": "0"});
	return;
    }


  
  if (files[0].name.startsWith('Item_edit')){
        action_popup.alert('그것을 올리는 곳이 아니다.');
        return;
  }
        if (files[0].name.startsWith('Item_keyword')){
        action_popup.alert('그것을 올리는 곳이 아니다.');
        return;
  }
  if (files[0].name.startsWith('Item_음악마법')){
        action_popup.alert('제발...미야를 떠올리게 하지 마.');
        return;
  }
  
  
  if (files[0].name.startsWith('Item_소환마법')){
  action_popup.alert('그것을 올리는 곳이 아니다.');
  return;
  }
  
  if (files[0].name.startsWith('Item_주사위')){
  action_popup.alert('그것을 올리는 곳이 아니다.');
  return;
  }
  
  if (files[0].name.startsWith('Item_고무호스')){
    action_popup.alert('그것을 올리는 곳이 아니다.');
    return;
}


  if (files[0].name.startsWith('Item_색마법')){
        action_popup.alert('이렇게 미야를 사랑하게 되었을 때 앗아가다니..');
        return;
        }
  

    else if(files[0].name.startsWith('Item_')) {
        action_popup.alert("이미 봉인하고 없는 물건이다.");
  return;
  }

else{
    action_popup.alert('그런것을 올렸다간 모든게 수포로 돌아간다.');
      return;
    }
}


$(function () {
    var matrix = $("#content1").css('transform').split('(')[1].split(')')[0].split(',');
    var angle = Math.round((180/Math.PI) * Math.atan2(matrix[1], matrix[0]));
    $("#content1").click(function(){
        if (gearon == 'on'){
        angle = angle + 90;
        $("#content1").stop().css({'transform': 'rotate('+angle+'deg)'},1000);}
    });
});

$(function () {
    var matrix = $("#content2").css('transform').split('(')[1].split(')')[0].split(',');
    var angle = Math.round((180/Math.PI) * Math.atan2(matrix[1], matrix[0]));
    $("#content2").click(function(){
        if (gearon == 'on'){
        angle = angle + 90;
        $("#content2").stop().css({'transform': 'rotate('+angle+'deg)'},1000);}
    });
});

$(function () {
    var matrix = $("#content3").css('transform').split('(')[1].split(')')[0].split(',');
    var angle = Math.round((180/Math.PI) * Math.atan2(matrix[1], matrix[0]));
    $("#content3").click(function(){
        if (gearon == 'on'){
        angle = angle + 90;
        $("#content3").stop().css({'transform': 'rotate('+angle+'deg)'},1000);}
    });
});

$(function () {
    var matrix = $("#content4").css('transform').split('(')[1].split(')')[0].split(',');
    var angle = Math.round((180/Math.PI) * Math.atan2(matrix[1], matrix[0]));
    $("#content4").click(function(){
        if (gearon == 'on'){
        angle = angle + 90;
        $("#content4").stop().css({'transform': 'rotate('+angle+'deg)'},1000);}
    });
});




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
