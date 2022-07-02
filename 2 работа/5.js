console.log("Задание №5 \n");

const back = document.getElementById("back");
const forward = document.getElementById("forward");

let n = 0;
let action;
let ImgId = document.querySelectorAll(".Img");

back.addEventListener("click", () => { imgback(); })
forward.addEventListener("click", () => { imgnext(); })

// function chekk() {
//     ImgId[kol].style.display = 'none';
//     if (action == -1 && kol == 0) {
//         kol = 2;
//         ImgId[kol].style.display = 'block';
//     }
//     else if (action == true && kol == 2) {
//         kol = 0;
//         ImgId[kol].style.display = 'block';
//     }
//     else {
//         ImgId[kol + action].style.display = 'block';
//         kol += action;
//     }
// }


function imgback() {
    if (n - 1 < 0) {
        ImgId[n].style.display = 'none';
        n = ImgId.length - 1;
        ImgId[n].style.display = 'inline';
    } else {
        ImgId[n].style.display = 'none';
        n--;
        ImgId[n].style.display = 'inline';
    }
}

function imgnext() {
    if (n + 1 >= ImgId.length) {
        ImgId[n].style.display = 'none';
        n = 0;
        ImgId[n].style.display = 'inline';

    } else {
        ImgId[n].style.display = 'none';
        n++;
        ImgId[n].style.display = 'inline';
    }
}

