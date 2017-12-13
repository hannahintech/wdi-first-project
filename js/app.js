const grid = {
  icon1: true,
  icon2: true,
  icon3: true,
  icon4: true,
  icon5: true,
  icon6: true,
  icon7: true,
  icon8: true,
  icon9: true,
  icon10: true,
  icon11: true,
  icon12: true,
  icon13: false,
  icon14: false,
  icon15: false,
  icon16: false,
  icon17: false,
  icon18: false,
  icon19: false,
  icon20: false
};

// array from grid
let iconArray = Object.keys(grid);

// shuffle function (random element for an array)
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Used like so
iconArray = shuffle(iconArray);
console.log(iconArray);


$(() => {

  // const $counter = $('.counter');
  const $icons = $('li');
  const $playButton = $('.playButton');
  const $overlayChoose = $('.overlayChoose');
  const $france = $('.France');
  const $overlayInstructions = $('.overlayInstructions');
  const $beginJourney = $('.beginJourney');
  const $overlayWin = $('.overlayWin');
  const $overlayLose = $('.overlayLose');
  const $returnHome = $('.returnHome');
  const $petrolBar = $('.petrolBar');
  const $playGame = $('.playGame');
  const $grid = $('.grid');
  let petrolAmount = 100;
  let pointsScorer = 0;

  // this shows counter, or wiggles div if there is an incorrect answer (add setTimeout or other options in jquery? ie .animate)
  $icons.on('click', function(e) {
    const storedId = $(e.target).attr('id');
    if (grid[storedId]) {
      $(e.target).addClass('counter');
      pointsScorer = pointsScorer +5;
      console.log(pointsScorer);
    } else {
      $(e.target).addClass('wiggle');
    }
  });

  // this changes the petrol level
  $icons.on('click', function() {
    $('.petrol').css('width', `${petrolAmount}%`);
    petrolAmount = petrolAmount - 5;
    console.log(petrolAmount);
    if (petrolAmount <= 0) {
      $overlayLose.show();
    } else if (petrolAmount >= 1 && pointsScorer >= 60){
      $overlayWin.show();
    }
  });

  // play button: shows an 'overlay' for country choice
  $playButton.on('click', function() {
    $playGame.hide();
    $grid.css('visibility', 'visible');
    $overlayChoose.show();
  });

  // populate France with background image
  // function populateGridFrance() {
  //   $icons.each(function(i, icon){
  //     const iconName = $(icon).attr('id');
  //     $(icon).css('background-image', `url('images-france/${iconName}.jpg')`);
  //   });
  // }

  function populateGridFrance() {
    // loop over each element of the array,
    for (var i = 0; i < iconArray.length; i++) {
      // let iconName = iconArray[i];
      $icons.each(function(i, icon){
        $(icon).attr('id', iconArray[i]);
        $(icon).css('background-image', `url('images-france/${iconArray[i]}.jpg')`);
      });
    }
  }

  // add id text that is the same as css id
  // assigning the list items id and list items backround image that matches the array element string
  // add background images


  // populate France images using jquery
  $france.on('click', function() {
    populateGridFrance();
    $overlayChoose.hide();
    $overlayInstructions.show();
  });

  // begin journey button
  $beginJourney.on('click', function() {
    $overlayInstructions.hide();
    $petrolBar.show();
  });

  // this resets the Grid
  $returnHome.on('click', function() {
    location.reload();
  });


// end of page loaded function
});
