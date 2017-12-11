const grid = {
  icon2: true,
  icon3: true,
  icon4: true,
  icon5: true,
  icon6: false,
  icon7: false,
  icon8: false,
  icon9: false,
  icon10: true,
  icon11: true,
  icon12: true,
  icon13: true,
  icon14: true,
  icon15: true,
  icon16: true,
  icon17: false,
  icon18: false,
  icon19: false,
  icon20: false
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
