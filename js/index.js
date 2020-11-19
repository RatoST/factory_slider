function moveRight (id) {
  var lastImage = $(id + ' img').last().detach();
  $(id).prepend(lastImage);
};

function moveLeft (id) {
  var firstImage = $(id +' img').first().detach();
  $(id).append(firstImage);
}

$('#goRight').click(function() {
  $('#image-container-1, #image-container-2').fadeOut(300, 'linear');
  moveRight('#image-container-1');
  moveRight('#image-container-2');
  $('#image-container-1, #image-container-2').fadeIn(300, 'linear');
});

$('#goLeft').click(function() {
  $('#image-container-1, #image-container-2').fadeOut(300, 'linear');
  moveLeft('#image-container-1');
  moveLeft('#image-container-2');
  $('#image-container-1, #image-container-2').fadeIn(300, 'linear');
});