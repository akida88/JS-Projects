// Prev > Some&Every / Functions to Collections of Data


// SORT

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

prices.sort();
// [12, 3000, 35.99, 400.5, 9500, 99.99]

prices.sort((a, b) => a - b);
// [12, 35.99, 99.99, 400.5, 3000, 9500]

prices.sort((a, b) => b - a);
// [9500, 3000, 400.5, 99.99, 35.99, 12]
