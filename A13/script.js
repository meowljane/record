$('#content')
    .on("dragover", dragOver)
    .on("dragleave", dragOver)
    .on("drop", uploadFiles);

function dragOver(e) {
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

mag = 'off';
map = 'off';
claw = 'off';
function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);

    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        action_popup.alert('순서대로 진행하자...');
        return;
    }

    if (files[0].name.startsWith('Item_확대마법') && mag == 'off') {
        $('#mag').draggable().fadeIn(2000);
        $('#bgm').animate({volume: 0}, 500);
        setTimeout(function() {$('#bgm').animate({volume: 1}, 500);}, 10000);
        var audio = new Audio("./done.mp3");
        audio.play();
        $('*').css('cursor', 'none')
        $('.dial').css('cursor', 'url(https://www.thelabyrinth.co.kr/labyrinth/upload/quest/3440/1629109221972/%EC%BB%A4%EC%84%9C1_1.png), default')
        $('button').css('cursor', 'url(https://www.thelabyrinth.co.kr/labyrinth/upload/quest/3440/1629109221972/%EC%BB%A4%EC%84%9C2.png), pointer')

        mag = 'on'
        if (map == 'off') {
            action_popup.alert('돋보기로 무얼 봐야하지?');
            return;
        }
        else if (claw == 'on') {
            action_popup.alert('모든 준비가 끝났다.');
            return;
        }
        else {
            action_popup.alert('돋보기에 무언가 더 조작을 해야겠다.');
            return;
        }
    }

    if (files[0].name.startsWith('Item_지도') && map == 'off') {
        $('#map').attr("src", window.URL.createObjectURL(files[0]))
        var audio = new Audio("./done.mp3");
        audio.play();
        map = 'on'
        if (mag == 'off') {
            action_popup.alert('지도를 볼 도구가 필요하다.');
            return;
        }
        else if (claw == 'on') {
            action_popup.alert('모든 준비가 끝났다.');
            return;
        }
        else {
            action_popup.alert('돋보기에 무언가 더 조작을 해야겠다.');
            return;
        }
    }



    if (files[0].name.startsWith('Item_발톱') && mag == 'on') {
        $('#mag').draggable().css({ 'background-image': 'url(./mag.png)' });
        var audio = new Audio("./done.mp3");
        audio.play();
        claw = 'on'
        if (map == 'on') {
            action_popup.alert('모든 준비가 끝났다.');
            return;
        }
        else {
            action_popup.alert('자 이걸로 무얼 관찰해야하지?');
            return;
        }
    }

    if (files[0].name.startsWith('Item_edit')) {
        action_popup.alert('미야가 이것만 보면 잔소리를 했는데.');
        return;
    }
    if (files[0].name.startsWith('Item_keyword')) {
        action_popup.alert('미야가 이것 좀 버리라고 했는데...');
        return;
    }
    if (files[0].name.startsWith('Item_음악마법')) {
        action_popup.alert('내가 해야할 일은 따로 있다.');
        return;
    }


    if (files[0].name.startsWith('Item_소환마법')) {
        action_popup.alert('미야.... 어떻게 이런 일이?');
        return;
    }

    if (files[0].name.startsWith('Item_톱니바퀴')) {
        action_popup.alert('부활에 대한 정보가 숨겨진 장소를 찾아내야 한다..');
        return;
    }

    if (files[0].name.startsWith('Item_주사위')) {
        action_popup.alert('부활에 대한 정보가 숨겨진 장소를 찾아내야 한다..');
        return;
    }

    if (files[0].name.startsWith('Item_고무호스')) {
        action_popup.alert('부활에 대한 정보가 숨겨진 장소를 찾아내야 한다..');
        return;
    }


    if (files[0].name.startsWith('Item_색마법')) {
        action_popup.alert('왜 나도 아닌 미야에게 이런 일이..?');
        return;
    }

    if (files[0].name.startsWith('Item_조각')) {
        action_popup.alert('이런것을 올릴 곳이 아니다...');
        return;
    }

    if (files[0].name.startsWith('Item_동전')) {
        action_popup.alert('부활에 대한 정보가 숨겨진 장소를 찾아내야 한다..');
        return;
    }

    if (files[0].name.startsWith('Item_유연제')) {
        action_popup.alert('왜 하필 나와 미야인거지..?');
        return;
    }

    if (files[0].name.startsWith('Item_발톱') && mag == 'off') {
        if (claw == 'on') {
            action_popup.alert('구멍은 이미 뚫렸다.');
            return;
        }
        else {
            action_popup.alert('좋은 생각이지만 다른 과정이 필요하다.');
            return;
        }
    }

    if (files[0].name.startsWith('Item_지도') && map == 'on') {
        action_popup.alert('지도는 이미 올려져있다.');
        return;
    }

    if (files[0].name.startsWith('Item_열쇠')) {
        action_popup.alert('난 왜 지금 혼자 있는거지??');
        return;
    }

    if (files[0].name.startsWith('Item_확대마법') && mag == 'on') {
        action_popup.alert('이것은 이미 사용중이다.');
        return;
    }

    else if (files[0].name.startsWith('Item_')) {
        action_popup.alert("이미 봉인하고 없는 물건이다.");
        return;
    }


    else {
        action_popup.alert('미지의 물체는 날 힘들게 한다.');
        return;
    }
}

$(".modal_close").on("click", function () {
    action_popup.close(this);
});
var action_popup = {
    timer: 500,
    alert: function (txt) { this.open("type-alert", txt); },

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
        setTimeout(function () { dimLayer != null ? dimLayer.remove() : ""; }, this.timer);
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

    $mag.html($img).css('opacity', '1');


    $(document).on("mousemove", moveHandler);
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
            bigy = (ly - magHeight / 4 - fy) * 2 + 104,
            bigx = (lx - magWidth / 4 - fx) * 2 + 100;

        $img.css({ 'left': -bigx, 'top': -bigy });


    }
});
