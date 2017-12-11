const gridUK = {
  icon1: true,
  icon2: false,
  icon3: false,
  icon4: false,
  icon5: false,
  icon6: true,
  icon7: true,
  icon8: true,
  icon9: true,
  icon10: true,
  icon11: false,
  icon12: false,
  icon13: false,
  icon14: false,
  icon15: true,
  icon16: true,
  icon17: true,
  icon18: true,
  icon19: true,
  icon20: true
};

$(() => {

  const $counter = $('.counter');
  const $icons = $('li');
  const $playButton = $('.playButton')
  const $overlayPlay = $('.overlayPlay')
  const $france = $('.France')
  // Up arrow	38
  // Down arrow	40
  // Left arrow	37
  // Right arrow	39

  // this shows counter, or wiggles div if incorrect answer (add setTimeout or other options in jquery? ie .animate)
  $icons.on('click', function(e) {
    const storedId = $(e.target).attr('id');
    if (gridUK[storedId]) {
      $(e.target).toggleClass('counter');
    } else {
      $(e.target).toggleClass('wiggle');
    }
  });

  // play button that shows an 'overlay' for country choice
  $playButton.on('click', function() {
    $overlayPlay.show();
  });

  // background image - image source .css for France
  function populateGrid() {
    console.log($icons)
    $icons.each(function(i, icon){
      const iconName = $(icon).attr('id');
      $(icon).css('background-image', `url('images-france/${iconName}.jpg')`);
    })

  }

  // populate images using jquery
  $france.on('click', function() {
    populateGrid();
  });

});
