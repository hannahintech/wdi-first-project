$(() => {

  const $counter = $('.counter');
  const $icons = $('li');

  // Up arrow	38
  // Down arrow	40
  // Left arrow	37
  // Right arrow	39

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
  }

  // change class vs check attribute -> finding out which image is used

  //   function iconTargetted(e) {
  //     // for (let i = 0; i < gridUK.length; i++) {
  //     //   if ($gridUK[i].target()
  //     // }
  //     e.target.style.visibility = 'hidden';
  //   }
  //
  //   function hideIcon() {
  //     if () {
  //       $icon[i].hide();
  //     }
  //   }
  //
  //   function showCounter(){
  //     for (let i = 0; i < gridUK.length; i++) {
  //       if (i === true) {
  //         $counter.show();
  //       } else hideIcon();
  //     }
  //   }
  //
  // });

  // I need to listen for a click
  // then, if clicked, I need to hide icon and show showCounter
  //icons on click, => check class => store in variable
  // if true do x, if false do y
  //

  $icons.on('click', function(e) {
    const whichClass = $(e.target).attr('class');
    console.log(whichClass);
    if (gridUK[whichClass]) {
      gridUK[whichClass].removeClass( 'icons' ).addClass( 'counter' );
    }
  });

});
