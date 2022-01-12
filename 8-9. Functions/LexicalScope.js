// Prev > BlockScope / Functions

// Nested functions:
function outer() {
    let hero = "Black Panther";

    function inner() {
        let cryForHelp = '${hero}, please save me!'
        console.log(cryForHelp);
    }

    inner();
}




function out(){
    let movie = 'Amadeus';
    function inn(){
        console.log(movie.toUpperCase()) // declaring a function but never calling it
    }
    inn(); // executing inn inside of out
}
// inn(); // wont work outside the function
// will print AMADEUS



// function outSecond(){
//     let movie = 'Amadeus';
//     function innerSecond(){
//         let movie = 'The Shining'
//         console.log(movie.toUpperCase()) 
//     }
//     innerSecond();
// }
// will print THE SHINING


function outSecond(){
    let movie = 'Amadeus';
    function innerSecond(){
        let movie = 'The Shining' 
        function extraInner(){
            console.log(movie.toUpperCase()) 
        }
        extraInner(); // calling the function
    }
    innerSecond();
}

// If we run outSecond we will get The Shining


// In react functions are a components on a page:
function TodoList(){
    let todos = [];
    let username = '';
    function addTodo(){
        // they may use todos and username in the function body
    }
    function removeTodo(){

    }
    function other(){
        
    }
}



// Next > Function Expressions / Functions