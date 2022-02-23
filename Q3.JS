//Write a code to print the numbers in the array
// output- 1234567891011
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < 11; i++) { //erroe i=1 and i--
    new_string += numsArr[i]
}
console.log(new_string);



// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
//Write a code to print the numbers in the array
//output- 1,2,3,4,5,6,7,8,9,10,11

var numsArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
new_string = ""
for (var i = 1; i < 11; i++) {
    new_string += numsArr1[i] + join(",")
    console.log(new_string);

    //Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
    //Output: 11 10 9 8 7 6 5 4 3 2 1
    var numsArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var new_string = " "

    for (var i = 11; i > 0; i--) {
        new_string += numsArr2[i]
    }
    console.log(new_string.trim());



    //Write a code to replace the array value — If the number is even, replace it with ‘even’.
    //Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
    var numsArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];
    for (var i = 0; i <= 10; i++) {
        if (numsArr3[i] % 2 == 0) {
            numsArr3[i] = 'even'

        }
    }
    console.log(numsArr3);

    // Write a code to replace the array value — If the index is even, replace it with ‘even’.
    // Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
    var numsArr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    for (var i = 0; i <= 10; i++) {
        if (numsArr4[i] % 2 !== 0) //error ==
        {
            numsArr4[i] = "even"
        }
    }
    console.log(numsArr4);


    //Write a code to add all the numbers in the array
    //66
    const numsArr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += numsArr6[i];
    }
    console.log(sum);
}



// Write a code to add the even numbers only
// Output: 30
var numsArr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum1 = 0;
for (var i = 0; i < numsArr7.length; i++) { //error i<10
    if (numsArr7[i] % 2 == 0) {
        sum1 += numsArr7[i]
    }
}
console.log(sum1);

//Write a code to add the even numbers and subract the odd numbers
//output:94
var numsArr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum2 = 100;
for (var i = 0; i <= 10; i++) {
    if (numsArr8[i] % 2 == 0) //error !=and,
    {
        sum2 += numsArr8[i]
    } else {
        sum2 -= numsArr8[i]
    }
}
console.log(sum2);



//Write a code to print inner arrays
//output:Array(5) [ 1, 2, 3, 4, 5 ]
//Array(6) [ 6, 7, 8, 9, 10, 11 ]
var numsArr9 = [
    [1, 2, 3, 4, 5][6, 7, 8, 9, 10, 11]
];
for (var i = 0; i < numsArr9.length; i++); {
    console.log(numsArr9[i].length, numsArr9[i])
}


//Write a code to print elements in the inner arrays
// Output: 1234567891011
var numsArr99 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11]
];
var str_alll = "";
for (var i = 0; i < numsArr99.length; i++) {
    var inner_array = numsArr99[i];
    for (var j = 0; j < inner_array.length; j++)
        str_alll += inner_array[j]
}
console.log(str_all);


//Write a code to replace the array value — If the index is even, replace it with ‘even’.
//output:[ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
var numsArr11 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11]
];
var str_all11 = 0;
for (var i = 0; i < numsArr11.length; i++) {
    var inner_array11 = numsArr11[i];
    for (var j = 0; j < inner_array.length; i++)
        if (numsArr11[i][j] % 2 == 0) {
            numsArr11[i][j] = even
        }
}
console.log(numsArr11);



//Write a code to print elements in the inner arrays in reverse
//Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr12 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11]
];
var str_all = "";
for (var i = numsArr12.length - 1; i >= 0; i--) {
    var inner_array = numsArr[i];
    for (var j = inner_array.length - 1; j >= 0; j--)
        str_all += numsArr12[i][j] + ""
}
console.log(str_all);


// //Write a code to add elements in the inner arrays based on odd or even values
//Output:
// 36
// 30
var numsArr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11]
];
var sum_odd = 0;
var sum_even = 0;
for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];
    for (var j = 0; j < inner_array.length; j++) {
        if (numsArr[i][j] % 2 != 0) {
            sum_odd += numsArr[i][j]
        } else {
            sum_even += numsArr[i][j]
        }
    }
}
console.log(sum_odd);
console.log(sum_even);