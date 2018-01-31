console.log('JS Logic Loops');

  /* if statments */
  if ('foo' === 'foo'){
    console.log('Of course these strings are equal');
  }

  if (5 > 10){
    console.log('You Will NEVER see this.');
  } else{
    console.log('You will ALWAYS see this!');
  }

  var number = 100;

  if ('number > 100') {
    console.log('true');
  } else {
    console.log('False');
  }

  var number1 = 50
  if ('number1 !> 100') {
    console.log('less');
  } else {
    console.log('Greater');
  }


  var num2 = 10;
  if (num2 > 100) {
    console.log('This will never be true');
  } else {
    console.log(num2 + 'is not > 100');
  }


  // if the var is NOT > 100, let the user know what is was.

  // is a string stored in a variable, the same as another strings

  var myString = 'foo'
  if(myString === 'foo'){
    console.log('Hey, here you are');
  } else {
    console.log('You are in the else');
  }

  // the else if statement

  if(10 < 4){
    console.log('you will not end up here');
  } else if (10 >= 10) {
    console.log('You will end up here');
  } else {
    console.log('you will not end up here either');
  }

  // a function that return something
  function topspeed() {
    return (75+ 5); // return the number 80
  }

  console.log(topspeed()); // Logs the console 80


  // function that accepts arguments
  // thus now mean that we are required to prived values for those argu.
  // when we invoke the function

  function addNumbers(num1, num2){
    return (num1 + num2); // the values of my args are now used as vars inside my function
  }
  console.log(addNumbers(100, 3000));

  if (addNumbers(50, 50) === 100){
    console.log('Congrats!!')
    }

    // This is function does not return anything, we just 'do something' immidiately
    // this is named function
    function fullName(fName, lName){
      console.log(fName + ' ' + lName);
    }

    fullName('Sumit', 'Kumar');

    // we can also create a function and store in a variable

    var myGreatFunc = function(){
      console.log('function stored in var');
    };

    myGreatFunc();


    function opendoor(door) {
      console.log(door);
      // based on the value of door, log a prize
      if(door === 'green'){
        console.log('you opend the green door! you win a prize');
      } else if (door === 'red') {
        console.log('you opend the red door, you win a scooter');
      }
    }

    // based on value of door console.log a prize
    opendoor('red');
    opendoor('green');

    // {} object seat are in curley bracket
    var foo = {
      color: 'red'
    };
    console.log(typeof foo.color);

    // [] arrey are seat in this bracket

    var cartoons = ['garfield', 'heathclif', 'snoopy'];
    console.log(cartoons.length) // log 3
