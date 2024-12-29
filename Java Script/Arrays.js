// Arrays in JavaScript - Collection of Items --> linear

let arrays = [97,85,45,54,62,85];
console.log(arrays);
console.log(typeof arrays);
console.log(arrays.length);

// Array Indices
console.log(arrays[0]);
console.log(arrays[4]);
console.log(arrays[5]);
console.log(arrays[7]);

// Change of elemnts in arrays
arrays[1] = 92;
console.log(arrays);

// Strings are immutable
// Arrays are muttable

let st1 = "tony stark";
console.log(st1);
st1[1] = "j";
console.log(st1);

// Looping an arrays

// // for loop
// for(let i = 0;i < arrays.length;i++){
//     console.log(arrays[i]);
// }


// for of loop
for(let i of arrays){
    console.log(i);
}


// for in loop
for(let i in arrays){
    console.log(arrays[i])
}

cities = ["Kurnool","Nandhyal","Anathapur","Tirupati"];
for(let i=0;i<cities.length;i++){
    console.log(cities[i].toUpperCase());
}


// Practice qn to find avg of an array
let marks = [85,92,98,72,84,78];
let sum = 0;
for(let mark of marks){
    sum+=mark;
}
let totalavg = sum/marks.length;
console.log(totalavg);



// Practce qn 2;
let arr = [250,645,300,900,50];
let discount = 10/100;
for(let i=0;i<arr.length;i++){
    let dp = arr[i] * discount;
    arr[i] = arr[i]-dp;
}
console.log(arr);


// Arrays Methods in Java Script
// arraysname.push() - adds the elements only at the end of an array

let stati = ["Pens","Pencils","Books","Glue Sticks"];
console.log(stati);
console.log(stati.push("Eraser"));
stati.push("Duster","Computer","Money")
console.log(stati);

// arraysname.pop() - remove the element from the end and return res;
console.log(stati);
console.log(stati.pop());
console.log(stati);

// arraysname.toString() - converts all array elements to string
console.log(stati.toString());
console.log(stati); //But it wont change the original array

// concat() - joins multiple number of arrays
let bat1 = ["MRF","Ceat","SS","DSC"];
let bat2 = ["Kookabura","SG","TON"];
console.log(bat1);
console.log(bat2);
console.log(bat1.concat(bat2));

// unshift() - add the elemnts to start
console.log(bat1.unshift("Reebok","Bas")); 
console.log(bat1);


// shift() - delete the elements from start and return;
console.log(bat1.shift());
console.log(bat1);


// Slice - returns a piece of the array - arraysname.slice(startidx,endidx);
console.log(bat1.slice(1,3));
console.log(bat1.slice(1,));


// Splice - change original array(add,remove,replace) - arraysname.splice(add,remove,replace);
console.log(bat1.splice(1,1)); // Delete element
console.log(bat1);
console.log(bat1.splice(1,2,"Kookabura","GM")); // delete and add elements
console.log(bat1);
console.log(bat1.splice(3,0,"Reebok")); // only add elements
console.log(bat1);
console.log(bat1.splice(3)); // remove the elements from give idx in the array
console.log(bat1);
console.log(bat1.splice()); // if we dont give any idx the there will be no deletion of elements
console.log(bat1);



