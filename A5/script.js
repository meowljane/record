$('.content')
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
	} 
    else {
    	$(e.target).css({
			"background-color": "black",
			"outline-offset": "0px"
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
        alert('하나만 올려주세요.');
        return;
    }

if (files[0].name.match('puzzle')){
    if(gearon=='on') {$(e.target).css({"background-image": "url(" + window.URL.createObjectURL(files[0]) + ")",
            "outline": "none",
            "background-size": "100% 100%",});
            return;}
    else { alert('퍼즐을 올리는 것은 맞지만 아직 해야할 게 있어요.');return;}
}

if (files[0].name.match('톱니바퀴')){
    $('.content').css({"background-image": "url(" + window.URL.createObjectURL(files[0]) + ")",
                "background-size": "100% 100%",});
    gearon = 'on';
    $('#click').css({"opacity": "1"});
    $('#Q2').css({"opacity": "1"});
    $('#Q1').css({"opacity": "0"});
    }

else{
      alert('올바른 아이템을 올려주세요.');
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
