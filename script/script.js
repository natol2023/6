function ex1() {
    let d = 7;
    let result = 7;
    for (let i = 1; i <= 3; i++) {
      console.log(result);
      result *= d;
    }
  }
  // ex1();
  
  function ex2() {
    let num1 = +prompt("Please enter a first number");
    let num2 = +prompt("Please enter a second number");
    if (num1 > num2) {
      console.log(num1 + num2);
    } else if (num1 < num2) {
      console.log(num1 * num2);
    } else {
      console.log("The numbers are equal");
    }
  }
  // ex2();
  
  function ex3() {
    let num = +prompt("Please enter a number");
    if (num > 0) {
      console.log(num ** 3);
    } else {
      console.log("You must enter a positive number");
    }
  }
  // ex3();
  
  function ex4() {
    let num1 = +prompt("Please enter a number of students in class");
    let num2 = +prompt("Please enter a number of chairs in class");
    if (num2 >= num1) {
      console.log("There are enough chairs");
    } else {
      console.log("There are not enough chairs");
    }
  }
  // ex4();
  
  function ex5() {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  }
  // ex5();
  
  let arr = [2, 25, 18, 24, 12, 31, -16, 78, 15, -1];
  
  function ex6() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 15) {
        console.log(arr[i]);
      }
    }
  }
  // ex6();
  
  function ex7() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }
    }
  }
  // ex7();
  
  function ex8() {
    for (let i = 1; i < arr.length; i++) {
      if (i % 3 == 0) {
        console.log(arr[i]);
      }
    }
  }
  // ex8();
  
  function ex9() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        sum += arr[i];
      }
    }
    console.log(sum);
  }
  // ex9();
  
  function ex10() {
    let sumEven = 0;
    let sumNotEven = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEven += arr[i];
      } else if (arr[i] % 2 !== 0) {
        sumNotEven += arr[i];
      }
    }
    if (sumEven < sumNotEven) {
      console.log(sumNotEven - sumEven);
    } else {
      console.log(sumEven - sumNotEven);
    }
  }
  // ex10();