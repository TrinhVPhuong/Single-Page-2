$(document).ready(function() {
    $(".date-picker").datepicker({
        dateFormat: "dd/mm/yy",
        inline: true,
        showOtherMonths: true,
        dayNamesMin: ['CN', 'THỨ 2', 'THỨ 3', 'THỨ 4', 'THỨ 5', 'THỨ 6', 'THỨ 7'],
        monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
            'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
        ],
        nextText: '<i class="fa fa-chevron-circle-right" aria-hidden="true" style="color: #ddd"></i>',
        prevText: '<i class="fa fa-chevron-circle-left" aria-hidden="true" style="color: #ddd"></i>',
    });
});

function isInViewport(elem) {
	var bounding     = elem.getBoundingClientRect();
	var clientHeight = window.innerHeight || document.documentElement.clientHeight;
	var clientWidth  = window.innerWidth  || document.documentElement.clientWidth;
    return (((bounding.top >= 0 && bounding.top <= clientHeight)  || (bounding.top >= 0 && bounding.bottom <= clientHeight) || (bounding.top < 0 && bounding.bottom >= clientHeight) || (bounding.top < 0 && bounding.bottom <= clientHeight && bounding.bottom >= 0)) &&
        ((bounding.left >= 0 && bounding.left <= clientWidth) || (bounding.left < 0 && bounding.right >= clientWidth) || (bounding.left < 0 && bounding.right <= clientWidth && bounding.right > 0) || (bounding.left >= 0 && bounding.right <= clientWidth)));
};

function ContentCircle_RollToRight() {
	var ContentCircle = document.getElementsByClassName("content-circle");
	var Container     = document.getElementById("beautyful-place");
    for (var i = 0; i < ContentCircle.length; i++)
        if (isInViewport(ContentCircle[i])) { ContentCircle[i].classList.add("anim-roll-to-right") }
    else if (isInViewport(Container) == false) { ContentCircle[i].classList.remove("anim-roll-to-right") };
};

function TwoSelection_ToCenter() {
	var Item      = document.getElementsByClassName("two-selection__content__block__item");
	var Container = document.getElementById("two-selection");
    if (isInViewport(Item[0]) && isInViewport(Item[0])) { Item[0].classList.add("Left-To-Center");
        Item[1].classList.add("Right-To-Center") }
    else if (isInViewport(Container) == false) { Item[0].classList.remove("Left-To-Center");
        Item[1].classList.remove("Right-To-Center") };
};

function ActivitySectionAnimation(){
	var Item      = document.getElementsByClassName("activity__content__item__content__main");
	var Container = document.getElementById("activity");
	for (var i = 0; i < Item.length; i++)
        if (isInViewport(Item[i])) { Item[i].classList.add("animation") }
    else if (isInViewport(Container) == false) { Item[i].classList.remove("animation") };
};

window.addEventListener("scroll", function(){ ContentCircle_RollToRight(); TwoSelection_ToCenter(); ActivitySectionAnimation()});

document.addEventListener("DOMContentLoaded", () => {
    let BgHeaderImg = document.getElementById('background-header__image');
    let BgHeaderVid = document.getElementById('background-header__video');
    let BgVideo     = document.getElementById('bgVideo');
    let btnPlay     = document.getElementsByClassName("background-header__button");
    let btnClose    = document.getElementsByClassName("background-header__video__close-button");
    let btnMute     = document.getElementsByClassName("background-header__video__mute-button");

    BgHeaderVid.style.height = BgHeaderImg.height + 'px';
    BgHeaderVid.style.width  = BgHeaderImg.width  + 'px';

    btnPlay[0].onclick = function(){
        BgHeaderImg.style.display = 'none';
        BgHeaderVid.style.display = 'block';
        btnPlay[0].style.display  = 'none';
        BgVideo.play();
        BgVideo.loop = true;
    };

    btnClose[0].onclick = function(){
        BgHeaderImg.style.display = 'block';
        BgHeaderVid.style.display = 'none';
         btnPlay[0].style.display = 'block';
        BgVideo.pause();
    };

    btnMute[0].onclick = function(){
        if (BgVideo.muted){
            btnMute[0].getElementsByTagName('img')[0].src = 'image/header-mute.png';
            BgVideo.muted = false;
        }
        else {
            btnMute[0].getElementsByTagName('img')[0].src = 'image/header-unmute.png';
            BgVideo.muted = true;
        }
    };
});

function open_navigator(){
    document.getElementsByClassName("m-menu")[0].style.display = "block";
    document.getElementsByClassName("m-header-block")[0].style.display = "none";
}
function close_navigator(){
    document.getElementsByClassName("m-menu")[0].style.display = "none";
    document.getElementsByClassName("m-header-block")[0].style.display = "block";
}