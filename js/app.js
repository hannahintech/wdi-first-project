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

  // main section
  const $icons = $('li');
  const $grid = $('.grid');
  const $home = $('.home');

  // buttons
  const $playButton = $('.play-button');
  const $france = $('.france');
  const $italy = $('.italy');
  const $britain = $('.britain');
  const $beginJourney = $('.begin-journey');
  const $goBack = $('.go-back');
  const $returnHome = $('.return-home');
  const $viewJourney = $('.viewJourney');
  const $buttons = $('button');

  // overlays
  const $hello = $('.hello');
  const $playGame = $('.play-game');
  const $overlayChoose = $('.overlay-choose');
  const $overlayInstructions = $('.overlay-instructions');
  const $overlayWin = $('.overlay-win');
  const $overlayLose = $('.overlay-lose');

  // score feature
  const $petrolBar = $('.petrol-bar');
  let petrolAmount = 75;
  let pointsScorer = 0;

  // span class for country specific text
  const $countryChosen = $('.country-chosen');

  // stay at top of page
  $('html, body').animate({ scrollTop: 0 }, 500);

  // button events
  $playButton.on('click', function() {
    $playGame.hide();
    $overlayChoose.show();
  });

  $beginJourney.on('click', function() {
    $overlayInstructions.hide();
    $petrolBar.show();
    $grid.show();
  });

  $goBack.on('click', function(){
    $overlayInstructions.hide();
    $overlayChoose.show();
  });

  // populate the grid button events
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

  $britain.on('click', function() {
    populateGridBritain();
    $overlayChoose.hide();
    $overlayInstructions.show();
    $countryChosen.text('British');
  });


  // functions
  function reset() {
    $playGame.show();
    $overlayWin.hide();
    $overlayLose.hide();
    $overlayChoose.hide();
    $overlayInstructions.hide();
    $grid.hide();
    $petrolBar.hide();
    petrolAmount = 75;
    $('.petrol').css('width', `${petrolAmount}%`);
    pointsScorer = 0;
  }

  // I need to pass a string using jquery ie $(icon).css('background-image', `url('${franceGrid}/${iconArray[i]}.jpg')`); and make the rest an 'anonymous' funtion

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

  function populateGridBritain() {
    // loop over each element of the array,
    for (var i = 0; i < iconArray.length; i++) {
      // let iconName = iconArray[i];
      $icons.each(function(i, icon){
        $(icon).attr('id', iconArray[i]);
        $(icon).css('background-image', `url('images-britain/${iconArray[i]}.jpg')`);
      });
    }
  }

  function isTrue(e) {
    return grid[$(e.target).attr('id')];
  }

  function winPoints(e) {
    if (isTrue(e)) {
      addCounter(e);
      pointsScorer = pointsScorer +5;
    }
  }

  function losePoints(e) {
    if (!isTrue(e)) {
      wrongAnswer(e);
    }
  }

  function losePetrol() {
    petrolAmount = petrolAmount -5;
    $('.petrol').css('width', `${petrolAmount}%`);
  }

  function addCounter(e) {
    $(e.target).addClass('addTick');
  }

  function wrongAnswer(e) {
    $(e.target).addClass('wiggle');
  }

  function didYouWin() {
    if (petrolAmount >= 1 && pointsScorer >= 60){
      window.scrollTo(0, 0);
      $petrolBar.hide();
      $overlayWin.show();
    } else if (petrolAmount <= 0) {
      window.scrollTo(0, 0);
      $overlayLose.show();
    }
  }

  function addCursor() {
    $(this).addClass('addCursor');
  }

  // gameplay
  $icons.on('click', losePetrol);
  $icons.on('click', losePoints);
  $icons.on('click', winPoints);
  $icons.on('click', didYouWin);

  // mouseover icons, addClass
  $grid.on('mouseover', addCursor);

  // reset game button event
  $returnHome.on('click', reset);
  $home.on('click', reset);

// end of page loaded function
});
