$(function() {

  for (var y=1; y<6; y++) {
    for (var x=1; x<6; x++) {
      $light = $('<div>');
      $light.addClass('light');
      $light.attr('id', y + '-' + x);
      $('#game-container').append($light);
    }
  }

  $('body').on('click', '.light', function() {

    var id = $(this).attr('id'),
        yCoord = parseInt(id[0]),
        xCoord = parseInt(id[2]),
        top = (yCoord-1) + '-' + xCoord,
        right = yCoord + '-' + (xCoord+1),
        bottom = (yCoord+1) + '-' + xCoord,
        left = yCoord + '-' + (xCoord-1);

    $('#'+top).toggleClass('on');
    $('#'+bottom).toggleClass('on');
    $('#'+left).toggleClass('on');
    $('#'+right).toggleClass('on');
    $(this).toggleClass('on');

    var numLeft = $('.on');
    if (numLeft.length === 0) {
      loopLights();
    }

  });

  function loopLights() {

    $('.light').removeClass('on');

    function loopTimeout(divId,time) {
      setTimeout(function() {
        $('#' + divId).addClass('on');
      }, time);

      setTimeout(function() {
        $('#' + divId).removeClass('on');
      }, time+175);
    }

    loopTimeout('1-1', 0);
    loopTimeout('1-2', 100);
    loopTimeout('1-3', 200);
    loopTimeout('1-4', 300);
    loopTimeout('1-5', 400);
    loopTimeout('2-5', 500);
    loopTimeout('3-5', 600);
    loopTimeout('4-5', 700);
    loopTimeout('5-5', 800);
    loopTimeout('5-4', 900);
    loopTimeout('5-3', 1000);
    loopTimeout('5-2', 1100);
    loopTimeout('4-2', 1200);
    loopTimeout('3-2', 1300);
    loopTimeout('2-2', 1400);
    loopTimeout('2-3', 1500);
    loopTimeout('2-4', 1600);
    loopTimeout('3-4', 1700);
    loopTimeout('4-4', 1800);
    loopTimeout('4-3', 1900);
    loopTimeout('3-3', 2000);

    setTimeout(function() {
      newGame();
    }, 2200);
  }


  function newGame() {

    var randomNumber=Math.floor(Math.random()*11);

    if (randomNumber === 0) {
      $('#1-5').addClass('on');
      $('#2-4').addClass('on');
      $('#3-3').addClass('on');
      $('#4-2').addClass('on');
      $('#5-1').addClass('on');
    } else if (randomNumber === 1) {
      $('#1-1').addClass('on');
      $('#1-2').addClass('on');
      $('#1-3').addClass('on');
      $('#1-5').addClass('on');
      $('#2-1').addClass('on');
      $('#2-2').addClass('on');
      $('#3-2').addClass('on');
      $('#3-4').addClass('on');
      $('#4-4').addClass('on');
      $('#4-5').addClass('on');
      $('#5-1').addClass('on');
      $('#5-3').addClass('on');
      $('#5-4').addClass('on');
      $('#5-5').addClass('on');
    } else if (randomNumber === 2) {
      $('#1-1').addClass('on');
      $('#1-5').addClass('on');
      $('#2-2').addClass('on');
      $('#2-4').addClass('on');
      $('#3-3').addClass('on');
      $('#4-2').addClass('on');
      $('#4-4').addClass('on');
      $('#5-1').addClass('on');
      $('#5-5').addClass('on');
    } else if (randomNumber === 3) {
      $('#1-2').addClass('on');
      $('#1-4').addClass('on');
      $('#2-2').addClass('on');
      $('#2-4').addClass('on');
      $('#3-1').addClass('on');
      $('#3-2').addClass('on');
      $('#3-3').addClass('on');
      $('#3-4').addClass('on');
      $('#3-5').addClass('on');
      $('#4-2').addClass('on');
      $('#4-4').addClass('on');
      $('#5-2').addClass('on');
      $('#5-4').addClass('on');
    } else if (randomNumber === 4) {
      $('#1-3').addClass('on');
      $('#2-1').addClass('on');
      $('#2-2').addClass('on');
      $('#2-3').addClass('on');
      $('#2-4').addClass('on');
      $('#2-5').addClass('on');
      $('#3-3').addClass('on');
      $('#4-1').addClass('on');
      $('#4-2').addClass('on');
      $('#4-3').addClass('on');
      $('#4-4').addClass('on');
      $('#4-5').addClass('on');
      $('#5-3').addClass('on');
    } else if (randomNumber === 5) {
      $('#1-1').addClass('on');
      $('#2-2').addClass('on');
      $('#2-3').addClass('on');
      $('#2-4').addClass('on');
      $('#3-2').addClass('on');
      $('#3-4').addClass('on');
      $('#4-2').addClass('on');
      $('#4-3').addClass('on');
      $('#4-4').addClass('on');
      $('#5-5').addClass('on');
    } else if (randomNumber === 6) {
      $('#1-1').addClass('on');
      $('#1-3').addClass('on');
      $('#1-5').addClass('on');
      $('#2-3').addClass('on');
      $('#2-4').addClass('on');
      $('#3-1').addClass('on');
      $('#3-2').addClass('on');
      $('#3-4').addClass('on');
      $('#3-5').addClass('on');
      $('#4-2').addClass('on');
      $('#4-3').addClass('on');
      $('#5-1').addClass('on');
      $('#5-3').addClass('on');
      $('#5-5').addClass('on');
    } else if (randomNumber === 7) {
      $('#1-1').addClass('on');
      $('#1-3').addClass('on');
      $('#2-1').addClass('on');
      $('#2-2').addClass('on');
      $('#2-5').addClass('on');
      $('#3-1').addClass('on');
      $('#3-5').addClass('on');
      $('#4-1').addClass('on');
      $('#4-4').addClass('on');
      $('#4-5').addClass('on');
      $('#5-3').addClass('on');
      $('#5-5').addClass('on');
    } else if (randomNumber === 8) {
      $('#1-1').addClass('on');
      $('#2-1').addClass('on');
      $('#2-4').addClass('on');
      $('#3-1').addClass('on');
      $('#3-5').addClass('on');
      $('#4-2').addClass('on');
      $('#4-5').addClass('on');
      $('#5-5').addClass('on');
    } else if (randomNumber === 9) {
      $('#1-4').addClass('on');
      $('#1-5').addClass('on');
      $('#2-2').addClass('on');
      $('#2-4').addClass('on');
      $('#2-5').addClass('on');
      $('#4-1').addClass('on');
      $('#4-2').addClass('on');
      $('#4-4').addClass('on');
      $('#5-1').addClass('on');
      $('#5-2').addClass('on');
    }
  }

  loopLights();

});
