// var notify = {
//     type:'basic',
//     iconUrl: '../icon/48.png',
//     title: 'notification By Arbaz',
//     message: 'You got This notification by Arbaz Because He Wants To Send You notify'
// };
// document.getElementById('log').addEventListener('click', function(){
//     chrome.notifications.create('Practice',notify);
// });   

$(function(){
    $('button').click(function(){
        $('#box1').toggle(1000);
        $('#box2').slideToggle(2000);
        $('#box3').fadeToggle(2500);
    });
});