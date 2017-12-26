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


$(() => {

  // main section
  const $icons = $('li');
  const $grid = $('.grid');

  // overlays
  const $playGame = $('.play-game');
  const $overlayChoose = $('.overlay-choose');
  const $overlayInstructions = $('.overlay-instructions');
  const $overlayWin = $('.overlay-win');
  const $overlayLose = $('.overlay-lose');
  const $paragraph = $('p');

  // score feature
  const $petrolBar = $('.petrol-bar');
  const $petrol = $('.petrol');
  let petrolAmount = 75;
  let pointsScorer = 0;

  // span class for country specific text
  const $countryChosen = $('.country-chosen');

  // stay at top of page
  $('html, body').animate({ scrollTop: 0 }, 500);

  // button events
  $('.play-button').on('click', function() {
    $playGame.hide();
    $overlayChoose.show();
  });

  $('.begin-journey').on('click', function() {
    $overlayInstructions.hide();
    $petrolBar.show();
    $grid.show();
  });

  $('.go-back').on('click', function(){
    $overlayInstructions.hide();
    $overlayChoose.show();
  });

  // populate the grid button events
  $('.france').on('click', function() {
    populateGridFrance();
    $overlayChoose.hide();
    $overlayInstructions.show();
    $countryChosen.text('French');
  });

  $('.italy').on('click', function() {
    populateGridItaly();
    $overlayChoose.hide();
    $overlayInstructions.show();
    $countryChosen.text('Italian');
  });

  $('.britain').on('click', function() {
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
    $petrol.css('width', '100%');
    pointsScorer = 0;
    $icons.removeClass('addTick');
    $icons.removeClass('wiggle');
  }

  // populate grid logic
  function populateGridFrance() {
    iconArray = shuffle(iconArray);
    for (var i = 0; i < iconArray.length; i++) {
      $icons.each(function(i, icon){
        $(icon).attr('id', iconArray[i]);
        $(icon).css('background-image', `url('france/${iconArray[i]}.jpg')`);
      });
    }
  }

  function populateGridItaly() {
    iconArray = shuffle(iconArray);
    for (var i = 0; i < iconArray.length; i++) {
      $icons.each(function(i, icon){
        $(icon).attr('id', iconArray[i]);
        $(icon).css('background-image', `url('italy/${iconArray[i]}.jpg')`);
      });
    }
  }

  function populateGridBritain() {
    iconArray = shuffle(iconArray);
    for (var i = 0; i < iconArray.length; i++) {
      $icons.each(function(i, icon){
        $(icon).attr('id', iconArray[i]);
        $(icon).css('background-image', `url('britain/${iconArray[i]}.jpg')`);
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
    $petrol.css('width', `${petrolAmount}%`);
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
      $grid.hide();
      $petrolBar.hide();
      $overlayWin.show();
    } else if (petrolAmount <= 0) {
      window.scrollTo(0, 0);
      $grid.hide();
      $petrolBar.hide();
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
  $('.return-home').on('click', reset);
  $('.home').on('click', reset);

// end of page loaded function
});
