function moveRight (id) {
  var lastImage = $(id + ' img').last().detach();
  $(id).prepend(lastImage);
};

function moveLeft (id) {
  var firstImage = $(id +' img').first().detach();
  $(id).append(firstImage);
}

$('#goRight').click(() => {
  $('.image-1').last().animate({width:'hide'},300);
  $('.image-2').last().animate({width:'hide'},300);
  setTimeout(() => {
    moveRight('#image-container-1');
  }, 300); 
  setTimeout(() => {
    moveRight('#image-container-2');
  }, 300);  
  $('.image-1').last().animate({width:'show'},300);
  $('.image-2').last().animate({width:'show'},300);
});

$('#goLeft').click(() => {
  $('.image-1').first().animate({width:'hide'},300);
  $('.image-2').first().animate({width:'hide'},300);
  setTimeout(() => {
    moveLeft('#image-container-1');
  }, 300);
  setTimeout(() => {
    moveLeft('#image-container-2');  
  }, 300);  
  $('.image-1').first().animate({width:'show'},300);
  $('.image-2').first().animate({width:'show'},300);
});