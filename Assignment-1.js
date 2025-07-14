//1 Check Even or Odd

const n = 6
if(n%2)
{
    console.log("Odd")
}else
{
    console.log("Even")
}

//2 Find the Maximum of Two Numbers

let a = 5;
let b = 10;

if (a > b) 
{
  console.log("The larger number is: " + a);
} else {
  console.log("The larger number is: " + b);
}


//3. Check Leap Year

let year = 2023;  

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) 
{
  console.log(year + " is a Leap Year.");
} else {
  console.log(year + " is not a Leap Year.");
}


