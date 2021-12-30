// Write a function to find the average value in an array of numbers 
// avg([0,50]) // 25
// avg([75, 76, 80, 95, 100]) // 85.2

function avg(arr){
    let total = 0;
    // loop over each num
    for(let num of arr){
        // add them together
        totel += num;
    }
    // divide by number of nums
    let res = total / arr.length; // or use return total / arr.length;
    return res;
}