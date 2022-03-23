let numbers = 100;

for (let i = 1; i <= numbers; i++)
{
    let divisible3 = i % 3 === 0;
    let divisible5 = i % 5 ===0;

    if (divisible3 && divisible5)
    {
        console.log("Fizzbuzz");
    }
    else if (divisible3)
    {
        console.log("Fizz");
    }
    else if (divisible5)
    {
        console.log("Buzz");
    }
    else 
    {
        console.log(i);
    }
}

let num = [0, 1, 2, 3, 4];
console.log(num.length);

let num1 = [0, 1, 2, 3, 4];

num === num1 ? console.log(true) : console.log(false)

let text = "abcdfg";
let myArray = text.split("");
console.log(myArray.length);