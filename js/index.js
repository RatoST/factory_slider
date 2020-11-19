function moveRight (id) {
  var lastImage = $(id + ' img').last().detach();
  $(id).prepend(lastImage);
};

function moveLeft (id) {
  var firstImage = $(id +' img').first().detach();
  $(id).append(firstImage);
}

$('#goRight').click(() => {
  $('#image-container-1, #image-container-2').fadeOut(300, 'swing');
  setTimeout(() => {
    moveRight('#image-container-1');
  }, 300); 
  setTimeout(() => {
    moveRight('#image-container-2');
  }, 300);  
  $('#image-container-1, #image-container-2').fadeIn(300, 'linear');
});

$('#goLeft').click(() => {
  $('#image-container-1, #image-container-2').fadeOut(300, 'swing');
  setTimeout(() => {
    moveLeft('#image-container-1');
  }, 300);
  setTimeout(() => {
    moveLeft('#image-container-2');  
  }, 300);  
  $('#image-container-1, #image-container-2').fadeIn(300, 'linear');
});