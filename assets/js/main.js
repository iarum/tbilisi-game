let width = $(window).width();
let height = $(window).height();
let gameStarted = false;

let car = $('.car');
let score = 0;
let timeout = 8000;

const bgAudio = new Audio('assets/sounds/bg.mp3');
const coin = new Audio('assets/sounds/coin.mp3');
const death = new Audio('assets/sounds/death.mp3');

function randomNumber(from, to) {
    return Math.floor((Math.random() * to) + from);
}

// function speedUp() {
//     $("body").get(0).style.setProperty("--speed", "5s");
// }

$(document).on('keypress', function (e) {
    let key = e.which;

    $('.start').detach();
    gameStarted = true;
    bgAudio.play();

    // a 97, d 100, w 119, s 115
    if (gameStarted) {
        if (key == 119) {
            car.css('top', "-35%");
        }
        if (key == 115) {
            car.css('top', "20%");
        }
        if (key == 100) {
            car.css('left', car.offset().left + 60 + 'px');
        }
        if (key == 97) {
            car.css('left', car.offset().left - 50 + 'px');
        }
    }
});

// GAME STARTED 👇

// ☁
setInterval(function () {
    $('.clouds').append(`<i class="fa-solid fa-cloud cloud" style="top: ${randomNumber(0, height * 0.75)}px; left: ${width}px;"></i>`);
    setTimeout(function () {
        $('.clouds').find('.cloud:first').detach();
    }, 30000)
}, 2000)

// 🚗
setInterval(function () {
    $('.lines').append(`<div class="line" style="left: ${width}px;"></div>`);
    setTimeout(function () {
        $('.lines').find('.line:first').detach();
    }, timeout * 2)
}, 400)

// 🌲
setInterval(function () {
    $('.trees').append('<img src="assets/img/tree.png" class="tree" style="left:' + width + 'px; "/>');
    setTimeout(function () {
        $('.trees').find('.tree:first').detach();
    }, timeout)
}, 5000)

setInterval(function () {
    $('.trees2').append('<img src="assets/img/tree2.png" class="tree" style="left:' + width + 'px; "/>');
    setTimeout(function () {
        $('.trees2').find('.tree:first').detach();
    }, timeout)
}, 6100)

setInterval(function () {
    $('.trees3').append('<img src="assets/img/tree3.png" class="tree" style="left:' + width + 'px; "/>');
    setTimeout(function () {
        $('.trees3').find('.tree:first').detach();
    }, timeout)
}, 7900)

setInterval(function () {
    $('.grass').append('<img src="assets/img/grass.png" class="gras" style="left:' + width + 'px; "/>');
    setTimeout(function () {
        $('.grass').find('.gras:first').detach();
    }, timeout)
}, 4500)

setInterval(function () {
    $('.spring').append('<img src="assets/img/spring.png" class="gras" style="left:' + width + 'px; "/>');
    setTimeout(function () {
        $('.spring').find('.gras:first').detach();
    }, timeout)
}, 6400)

setInterval(function () {
    $('.grass2').append('<img src="assets/img/grass2.png" class="gras" style="left:' + width + 'px; "/>');
    setTimeout(function () {
        $('.grass2').find('.gras:first').detach();
    }, timeout)
}, 7800)

//////////////////////////////////////////////////

// 🐛
setInterval(function () {
    if (gameStarted) {
        let position = ['0', '85px']
        let currentPosition = position[Math.floor(Math.random() * position.length)];
        $('.worms').append(`<img class="worm" src="assets/img/hole.png" style="top: ${currentPosition}; left: ${width}px;"/>`);
        setTimeout(function () {
            $('.worms').find('.worm:first').detach();
        }, timeout)
    }
}, 2100)

// 💲
setInterval(function () {
    if (gameStarted) {
        let position = ['7px', '94px']
        let currentPosition = position[Math.floor(Math.random() * position.length)];
        $('.coins').append(`<img class="coin" src="assets/img/star.png" style="top: ${currentPosition}; left: ${width}px;"/>`);
    }
}, 3500)

setInterval(function () {
    if (gameStarted) {
        let position = ['-10px', '60px']
        let currentPosition = position[Math.floor(Math.random() * position.length)];
        $('.more-coins').append(`<img class="more-coin" src="assets/img/money.png" style="top: ${currentPosition}; left: ${width}px;"/>`);
    }
}, 15000)

// Level ups

// 🚕
setInterval(function () {
    if (score >= 17) {
        if (gameStarted) {
            let position = ['-30px', '45px']
            let currentPosition = position[Math.floor(Math.random() * position.length)];
            $('.taxis').append(`<img class="taxi" src="assets/img/taxi.png" style="top: ${currentPosition}; left: ${width}px;"/>`);
            setTimeout(function () {
                $('.taxis').find('.taxi:first').detach();
            }, timeout)
        }
    }
}, 10000)

setInterval(function () {
    if (score >= 38) {
        if (gameStarted) {
            let position = ['-30px', '45px']
            let currentPosition = position[Math.floor(Math.random() * position.length)];
            $('.buses').append(`<img class="bus" src="assets/img/bus.png" style="top: ${currentPosition}; left: ${width}px;"/>`);
            setTimeout(function () {
                $('.buses').find('.bus:first').detach();
            }, timeout * 2)
        }
    }
}, 13500)

// Win or die
setInterval(function () {
    if (gameStarted) {
        $('.worm').each(function () {
            if (
                (car.offset().left - $(this).offset().left) < 50 &&
                (car.offset().left - $(this).offset().left) > - 120 &&
                (car.offset().top - $(this).offset().top) < 0 &&
                (car.offset().top - $(this).offset().top) > - 70
            ) {
                $('.car').detach();
                death.play();
                bgAudio.pause();
                $('.end').find('span').text(score);
                $('.end').show();
            }
        })

        $('.taxi').each(function () {
            if (
                (car.offset().left - $(this).offset().left) < 50 &&
                (car.offset().left - $(this).offset().left) > - 120 &&
                (car.offset().top - $(this).offset().top) < 0 &&
                (car.offset().top - $(this).offset().top) > - 70
            ) {
                $('.car').detach();
                death.play();
                bgAudio.pause();
                $('.end').find('span').text(score);
                $('.end').show();
            }
        })

        $('.bus').each(function () {
            if (
                (car.offset().left - $(this).offset().left) < 50 &&
                (car.offset().left - $(this).offset().left) > - 120 &&
                (car.offset().top - $(this).offset().top) < 0 &&
                (car.offset().top - $(this).offset().top) > - 70
            ) {
                $('.car').detach();
                death.play();
                bgAudio.pause();
                $('.end').find('span').text(score);
                $('.end').show();
            }
        })

        $('.coin').each(function () {
            if (
                (car.offset().left - $(this).offset().left) < 50 &&
                (car.offset().left - $(this).offset().left) > - 130 &&
                (car.offset().top - $(this).offset().top) < 10 &&
                (car.offset().top - $(this).offset().top) > - 70
            ) {
                score++;
                coin.play();
                $(this).detach();
                $('.score').find('span').text(score);
                levelUp();
            }
        })

        $('.more-coin').each(function () {
            if (
                (car.offset().left - $(this).offset().left) < 50 &&
                (car.offset().left - $(this).offset().left) > - 130 &&
                (car.offset().top - $(this).offset().top) < 10 &&
                (car.offset().top - $(this).offset().top) > - 70
            ) {
                score = score + 5;
                coin.play();
                $(this).detach();
                $('.score').find('span').text(score);
                levelUp();
            }
        })
    }
}, 10)

$('.reload').click(function () {
    location.reload();
});