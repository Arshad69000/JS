//Conditional statements :- if,else,else if

//Even or odd number.
// let num=8;
// if(num%2==0)
// {
//     console.log(num," is an even number");
// }
// else
// {
//     console.log(num," is an odd number");
// }

//Grades based on percentage.
// let percentage=44;
// if(percentage>=90)
// {
//     console.log("Grade A");
// }
// else if(percentage>=80)
// {
//     console.log("Grade B");
// }
// else if(percentage>=70)
// {
//     console.log("Grade C");
// }
// else if(percentage>=60)
// {
//     console.log("Grade D");
// }
// else if(percentage>=50)
// {
//     console.log("Grade E");
// }
// else
// {
//     console.log("Grade F");
// }

//Switch statement
// let num=5;
// switch(num)
// {
//     case 1:console.log('January');
//     break;
//     case 2:console.log('February');
//     break;
//     case 3:console.log('March');
//     break;
//     case 4:console.log('April');
//     break;
//     case 5:console.log('May');
//     break;
//     case 6:console.log('June');
//     break;
//     case 7:console.log('July');
//     break;
//     case 8:console.log('August');
//     break;
//     case 9:console.log('September');
//     break;
//     case 10:console.log('October');
//     break;
//     case 11:console.log('November');
//     break;
//     case 12:console.log('December');
//     break;
//     default:console.log("Enter number between 1 to 12");
//     break;
// }

//for, for in,for of
// let num=7;
// for(let i=1;i<=num;i++)
// {
//     console.log(i);
// }

// let num_array=[11,22,33,44,55,66,77,88,99];
// for(let i in num_array)  //for in returns the index
// {
//     console.log(i)
// }

// let num_array=[11,22,33,44,55,66,77,88,99];
// for(let i of num_array) // for of returns the value.
// {
//     console.log(i)
// }

//Functions
function multiply(a,b)
{
    return a*b
}
let a=10;b=2;
console.log(multiply(a,b))