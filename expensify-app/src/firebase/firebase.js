import * as firebase from 'firebase';

const firebaseConfig = {
    // apiKey: "AIzaSyBAMjfJoD8P9JKCjWnkeAfOdidXS1K00yA",
    // authDomain: "expensify-eff71.firebaseapp.com",
    // databaseURL: "https://expensify-eff71-default-rtdb.firebaseio.com",
    // projectId: "expensify-eff71",
    // storageBucket: "expensify-eff71.appspot.com",
    // messagingSenderId: "426590475323",
    // appId: "1:426590475323:web:b129767f247672b06df81e",
    // measurementId: "G-EJRW3MP9LM"
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  




  firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


















// /////////// Setup "expenses" with three items (description, note, amount, createdAt)
// /// The expenses will be stored as nested objects of a main object called 'expenses'; firebase do not store arrays!


//   database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
//   });
  
//   database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 5900,
//     createdAt: 976123498763
//   });
  
//   database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 976123498763
//   });  


// /////////// FETCH objects from the firebase database and print them out once as an array of objects
  
// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });




// /////////// FETCH objects from the firebase database,
// // and print them out through a subscrition ('on') as an array of objects everytime that there is an update on the values on the database 

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });



// //// METHODS that fire off on child removed/changed/add (prova a cancellare da firebase/editare e vedrai che si attivano - guarda la console -)

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('removed: ' + snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('changed: ' + snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('added: ' + snapshot.key, snapshot.val());
// });



  

///////////////////////// ADDING data in block 

  // database.ref().set({
  //   name: 'Alessandro Ladu',
  //   age:36,
  //   stressLevel: 8,
  //   job: {
  //     title: 'software developer',
  //     company: 'BiroriTech'
  //   },
  //   isSingle: false,
  //   location: {
  //     city: 'Liverpool',
  //     country: 'UK'
  //   }
  // }).then(() => {
  //   console.log('data is saved');
  // }).catch((e) => {
  //   console.log('This failed: ',e);
  // })



////////////////////// FETCH data from the database once 

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });



//////////////////////  FETCH data from the database every time the data base changes

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })




//////////////////////  ADDING data as extra bits

//   database.ref('nationality').set('Italian')
//   .then(() => {
//     console.log('some more data is saved');
//   }).catch((e) => {
//     console.log('This failed: ',e);
//   })



//////////////////////  UPDATE data one bit at the time
//   database.ref('nationality').set('Sardinian')
//   .then(() => {
//     console.log('some data is updated one bit at the time');
//   }).catch((e) => {
//     console.log('This failed: ',e);
//   })



//////////////////////  UPDATE data in block

// database.ref().update({
//   age:35,
//   location: {
//     city: 'Orroli',
//     country: 'Sardinia'
//   },
//   hobbies: 'gaming'
// }).then(() => {
//   console.log('some data is updated in block');
// }).catch((e) => {
//   console.log('This failed: ',e);
// })


//////////////////////  UPDATE data in block, including data nested into objects

// database.ref().update({
//   'location/city': 'Macomer',
//   stressLevel: 10,
//   'job/company': 'amazon'
// }).then(() => {
//   console.log('some values nested into objects are updated, without changing the rest of the object values');
// }).catch((e) => {
//   console.log('This failed: ',e);
// })


//////////////////////  REMOVE a specific set of data with UPDATE

//   database.ref().update({  
//     hobbies: null
//   })
//   .then(() => {
//     console.log('some data is removed with UPDATE');
//   }).catch((e) => {
//     console.log('This failed: ',e);
//   })
 

//////////////////////  REMOVE all data

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('All data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });


//////////////////////  REMOVE a specific set of data

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Some data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });



  



