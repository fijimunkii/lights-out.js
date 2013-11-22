$(function() {

  for (var y=1; y<6; y++) {
    for (var x=1; x<6; x++) {
      $light = $('<div>');
      $light.addClass('light');
      $light.attr('id', y + '-' + x);
      $('#game-container').append($light);
    }
  }

  $('#new-game').on('click', function() {
    loopLights();
  });

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

    var numMoves = $('#num-moves');
    numMoves.text(parseInt(numMoves.text())+1);

    var numLeft = $('.on');
    if (numLeft.length === 0) {
      loopLights();
    }

  });

  function loopLights() {

    $('.light').removeClass('on');
    var numMoves = $('#num-moves');
    numMoves.text('');

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
      numMoves.text('0');
    }, 2200);
  }


  function newGame() {

    function setUpGame(coordArray) {
      for (var i=0, numCoords = coordArray.length; i<numCoords; i++) {
        $('#' + coordArray[i]).addClass('on');
      }
    }

    var randomCoords = randGame();
    setUpGame(randomCoords);
  }


  function randGame() {
    var numbers = [1,2,3,4,5],
        firstNum = [],
        secondNum = [],
        newGame = [],
        numLights = 0;

    while (numLights < 1) {
      numLights = Math.floor(Math.random()*12);
    }

    for (var i=0; i<numLights; i++) {
      var firstIndex = Math.floor(Math.random()*5),
          secondIndex = Math.floor(Math.random()*5);

      firstNum.push(numbers[firstIndex]);
      secondNum.push(numbers[secondIndex]);
    }

    for (var i=0; i<numLights; i++) {
      var newLight = firstNum[i] + '-' + secondNum[i];
      newGame.push(newLight);
    }

    for (var i=0; i<numLights; i++) {
      var oppFirst = Math.abs(firstNum[i]-6),
          oppSecond = Math.abs(secondNum[i]-6);

      var newLight = (oppFirst + '-' + oppSecond);
      newGame.push(newLight);
    }

    return newGame;
  }

  loopLights();

  FastClick.attach(document.body);

});






