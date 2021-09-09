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

var 돋보기 = 'off';

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

    if (files[0].name.startsWith('Item_확대마법')){
      $('#mag').draggable().fadeIn(2000);
      var audio = new Audio("./done.mp3");
      audio.play();
      돋보기 ='on'
      return;
      }

      if (files[0].name.startsWith('Item_지도')){
            $('#map').attr("src", window.URL.createObjectURL(files[0]))
           var audio = new Audio("./done.mp3");
           audio.play();
           return;
           }



if (files[0].name.startsWith('Item_발톱') && 돋보기=='on'){
      $('#mag').draggable().css({'background-image' : 'url(./mag.png)'});
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

var $mag = $("#mag"),
magWidth = $mag.width(),
magHeight = $mag.height();

$(document).on("mouseenter", "#지도", function (e) {
    var $currImage = $(this),
        $img = $('<img/>')
        .attr('src', $('img', this).attr("src"))
        .css({ 'width': $currImage.width() * 2, 'height': $currImage.height() * 2 });

    
    $(document).on("mousemove",moveHandler);
                   
    function moveHandler(e) {
        var imageOffset = $currImage.offset(),
            fx = imageOffset.left - magWidth / 2,
            fy = imageOffset.top - magHeight / 2,
            fh = imageOffset.top + $currImage.height() + magHeight / 2,
            fw = imageOffset.left + $currImage.width() + magWidth / 2;
        
        $mag.css({
            'left': e.pageX - 75,
            'top': e.pageY - 75
        });

        var magOffset = $mag.offset(),
            lx = magOffset.left,
            ly = magOffset.top,
            lw = lx + magWidth,
            lh = ly + magHeight,
            bigy = (ly - magHeight / 4 - fy) * 2+104,
            bigx = (lx - magWidth / 4 - fx) * 2+100;

        $img.css({ 'left': -bigx, 'top': -bigy });

    }
});
