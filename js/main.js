$('.accordionHead').click(function () {
    $('.accordionBody').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})



let boxColorwi = $('#menu').width()
$('#menu').css('left', -boxColorwi)
let left = true
$('#btn').click(function () {
    $('#menu').css('display', 'flex')
    $('#menu').animate({ left: `0` }, 500)
    $('#btn').animate({ left: `${boxColorwi}` }, 500)
})
$('#close').click(function () {
    $('#menu').css('display', 'flex')
    $('#menu').animate({ left: `-${250}` }, 500)
    $('#btn').animate({ left: 0 }, 500)
})

$('.nav-item a[href^="#"]').click(function () {
    let aHref = $(this).attr('href')
    let Offset = $(aHref).offset().top
    $('html,body').animate({ scrollTop: Offset }, 1000)
})
//count words
document.getElementById('message').addEventListener('keyup', function () {
    let len = document.getElementById('message').value
    let cartona = ``
    if (100 - len.length > 0) {
        cartona = `<span class="me-2">${100 - len.length}</span>`
        document.getElementById('current').innerHTML = cartona
    }
    else {
        cartona = `<span class="me-2">your available character finished</span>`
        document.getElementById('current').innerHTML = cartona
    }
})

let countDown = setInterval(function () {
    let deadline = new Date("dec 31, 2023 15:00:00").getTime();
    let now = new Date().getTime();
    let t = deadline - now;
    if (t > 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById('days').innerHTML = `<span>${days}D</span>`
        document.getElementById('hours').innerHTML = `<span>${hours}h</span>`
        document.getElementById('mins').innerHTML = `<span>${mins}m</span>`
        document.getElementById('secs').innerHTML = `<span>${secs}s</span>`
    }
    else
    {
        let cartona=`<span class="me-2 brdr">the event has finished</span>`
        document.getElementById('details').innerHTML=cartona
    }
}, 100)