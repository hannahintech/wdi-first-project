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

// consider the best position for this
iconArray = shuffle(iconArray);

$(() => {
  const $icons = $('li');
  const $grid = $('.grid');

  // buttons
  const $playButton = $('.playButton');
  const $france = $('.france');
  const $italy = $('.italy');
  const $britain = $('.britain');
  const $beginJourney = $('.beginJourney');
  const $goBack = $('.goBack');
  const $returnHome = $('.returnHome');
  const $viewJourney = $('.viewJourney');

  // overlays
  const $playGame = $('.playGame');
  const $overlayChoose = $('.overlayChoose');
  const $overlayInstructions = $('.overlayInstructions');
  const $overlayWin = $('.overlayWin');
  const $overlayLose = $('.overlayLose');

  // score feature
  const $petrolBar = $('.petrolBar');
  let petrolAmount = 75;
  let pointsScorer = 0;

  // span class for country specific text
  const $countryChosen = $('.countryChosen');

  // jquery button click functions
  $playButton.on('click', function() {
    $playGame.hide();
    $grid.css('visibility', 'visible');
    $overlayChoose.show();
  });

  $beginJourney.on('click', function() {
    $overlayInstructions.hide();
    $petrolBar.show();
  });

  $goBack.on('click', function(){
    $overlayInstructions.hide();
    $overlayChoose.show();
  });

  // reset game button
  $returnHome.on('click', function() {
    location.reload();
  });

  // populate the grid buttons
  $france.on('click', function() {
    populateGridFrance();
    $overlayChoose.hide();
    $overlayInstructions.show();
    $countryChosen.text('French');
  });

  $italy.on('click', function() {
    populateGridItaly();
    $overlayChoose.hide();
    $overlayInstructions.show();
    $countryChosen.text('Italian');
  });

  // populate grid logic
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

  function populateGridItaly() {
    // loop over each element of the array,
    for (var i = 0; i < iconArray.length; i++) {
      // let iconName = iconArray[i];
      $icons.each(function(i, icon){
        $(icon).attr('id', iconArray[i]);
        $(icon).css('background-image', `url('images-italy/${iconArray[i]}.jpg')`);
      });
    }
  }

  // keeps score
  $icons.on('click', function() {
    $('.petrol').css('width', `${petrolAmount}%`);
    if (petrolAmount <= 0 && pointsScorer < 60) {
      $overlayLose.show();
    } else if (petrolAmount >= 1 && pointsScorer >= 60){
      $petrolBar.hide();
      $overlayWin.show();
    }
  });

  // function that shows if user is correct not
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


// end of page loaded function
});
