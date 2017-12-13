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
  let petrolAmount = 75;
  let pointsScorer = 0;

  // this shows counter, or wiggles div if there is an incorrect answer
  $icons.on('click', function(e) {
    const storedId = $(e.target).attr('id');
    if (grid[storedId] && $(e.target).hasClass('counter') === false) {
      $(e.target).addClass('counter');
      pointsScorer = pointsScorer +5;
      petrolAmount = petrolAmount -5;
      console.log('pointsScorer =>', pointsScorer);
      console.log('petrol =>', petrolAmount);
    } else {
      $(e.target).addClass('wiggle');
      petrolAmount = petrolAmount -5;
      console.log('points:',pointsScorer, 'petrol:',petrolAmount);
    }
  });

  // this changes the petrol level
  $icons.on('click', function() {
    $('.petrol').css('width', `${petrolAmount}%`);
    // petrolAmount = petrolAmount - 8;
    if (petrolAmount <= 0 && pointsScorer < 60) {
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

  // call the populate France function and go to next stage
  $france.on('click', function() {
    populateGridFrance();
    $overlayChoose.hide();
    $overlayInstructions.show();
  });

  // after pressing begin journey button
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
