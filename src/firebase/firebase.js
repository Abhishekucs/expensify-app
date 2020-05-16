import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

export { firebase, database as default };


// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 15000,
//     createdAt: 25,
//     note: ''
// })
// database.ref('expenses').push({
//     description: 'Water Bill',
//     amount: 10000,
//     createdAt: 30,
//     note: ''
// })
// database.ref('expenses').push({
//     description: 'Electricity Bill',
//     amount: 25000,
//     createdAt: 250,
//     note: ''
// })


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

//   database.ref().set({
//       name: 'Abhishek Kumar',
//       age: 22,
//       stressLevel: 6,
//       job: {
//           title: 'Software Developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Gaya',
//           State: 'Bihar'
//       }
//   }).then(() => {
//       console.log('Data successfully sync!')
//   }).catch((e) => {
//     console.log('error', e)
//   })

// database.ref().on('value', (snapshot) => {
//     const name = snapshot.val().name
//     const company = snapshot.val().job.company
//     const title = snapshot.val().job.title
//     console.log(`${name} is ${title} at ${company}`)
// })