const grid = {
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

  // const $counter = $('.counter');
  const $icons = $('li');
  const $playButton = $('.playButton');
  const $overlayChoose = $('.overlayChoose');
  const $france = $('.France');
  const $overlayInstructions = $('.overlayInstructions');
  const $beginJourney = $('.beginJourney');
  // Up arrow	38
  // Down arrow	40
  // Left arrow	37
  // Right arrow	39

  // this shows counter, or wiggles div if incorrect answer (add setTimeout or other options in jquery? ie .animate)
  $icons.on('click', function(e) {
    const storedId = $(e.target).attr('id');
    if (grid[storedId]) {
      $(e.target).toggleClass('counter');
    } else {
      $(e.target).toggleClass('wiggle');
    }
  });

  // play button: shows an 'overlay' for country choice
  $playButton.on('click', function() {
    $overlayChoose.show();
    //make playButton say "back" and navigate home
  });

  // populate France with background image
  function populateGrid() {
    $icons.each(function(i, icon){
      const iconName = $(icon).attr('id');
      $(icon).css('background-image', `url('images-france/${iconName}.jpg')`);
    });
  }

  // populate France images using jquery
  $france.on('click', function() {
    populateGrid();
    $overlayChoose.hide();
    $overlayInstructions.show();
  });

  // begin journey button
  $beginJourney.on('click', function() {
    $overlayInstructions.hide();
  });

});

// images: store as france, and italy etc (create the list and choose from correct and false).
// how to randomise it?
