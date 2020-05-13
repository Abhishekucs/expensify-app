// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self Publish'} = book.publisher

// if(publisherName) {
//     console.log(publisherName)
// }


// Array Destructuring

const item = ['Coffee (hot)', '$2.00', '$2.25', '$2.75']
const [coffee, , medium,] = item
console.log(`A medium ${coffee} costs ${medium}`)