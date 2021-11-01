// function probando() 
// {
// var img = $('img');
// img.animate({
//     top: '+20px',
//     opacity: '0.6'
//     }, 600);



// $('button').on('click', probando)


// $(document).ready(() =>
// $('img').hover(
// () => { 
//     console.log('funcionando');
//     $('img').animate({
//         transform: 'scale(.6)',
//         filter: 'grayscale(80%)',
//         top: '-10px',
//         opacity: '0.5'
//     }, 300)
// }, 'fast'));
// $("button").click(function(){
//     $("img").animate({left: '25px'});
// }); 

function initHover() {
    $('img').css('transition', ' all 700ms');
    $('img').css('top', '-7px');
    $('img').css('opacity', '0.5');
}

function finishHover () {
    $('img').css('transition', 'all 700ms');
    $('img').css('top', '0px');
    $('img').css('opacity', '1.0');

}

$(document).ready(
    $('img').hover(initHover, finishHover)
)
















