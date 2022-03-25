// Prev> NestedDestructing / JS Features



//            (function definition) with listed parameters
// putting them into {} will extract the values from the arguments passed in
// so Im expecting fullName to be passed in {object} which will take first and last
// const fullName = ({first, last}) => {
//    return `${first} ${last}`
// }

const runner = {
   first: "Eluid",
   last: "Kipchoge",
   country: "Kenya",
   title: "Elder of the Order of the Golden Heart of Kenya"
}

// fullName(runner); // Eluid Kipchoge


// function print(person){
//    const {first, last, title} = person;
//    console.log(`${first} ${last}, ${title}`)
// }

print(runner) // Eluid Kipchoge, Elder of the Order of the Golden Heart of Kenya


// destructing {objects}
function print({first, last, title}){
   console.log(`${first} ${last}, ${title}`)
}



// destructing [arrays]
const response = [
   'HTTP/1.1',
   '200 OK',
   'application/json',
]

function parseResponse([protocol, statusCode, contentType]){
   console.log(`Status: ${statusCode}`)
}