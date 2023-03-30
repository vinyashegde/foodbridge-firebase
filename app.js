// setting firebase

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD1FWsHvue2G4JnFdDL6EvSYrKJ4uV0eQw",
  authDomain: "foodbridge-6a85e.firebaseapp.com",
  projectId: "foodbridge-6a85e",
  storageBucket: "foodbridge-6a85e.appspot.com",
  messagingSenderId: "445260306945",
  appId: "1:445260306945:web:cb42789eee6467d52fbe00",
});
const database = firebaseApp.database();
const auth = firebaseApp.auth();

//Organization sign up
const OrgsignUp = () => {
  const orgemail = document.getElementById("orgemail").value;
  const orgfullname = document.getElementById("orgfullname").value;
  const orglocation = document.getElementById("orglocation").value;
  const orgpassword = document.getElementById("orgpassword").value;
  console.log(orgemail, orgpassword);
  //firebase signup code
  firebase.auth().createUserWithEmailAndPassword(orgemail, orgpassword)
    .then((result) => {
      // Signed in
      //document.write("Your Signed up")
      var user = auth.currentUser;

      //Add this user to firebase database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        orgemail: orgemail,
        orgfullname: orgfullname,
        orglocation: orglocation,
        orglast_login: Date.now(),
      };

      database_ref.child("org/" + user.uid).set(user_data)

      console.log(result);
      // M.toast({ html: `Organisation Registered Successfully`, classes: "green" });
      Toastify({
        text: "Organization SignedUp Successfully",
        className: "info",
        style: {
          background: "green",
        }
      }).showToast();
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // M.toast({ html: error.message, classes: "red" });
      Toastify({
        text: error.message,
        className: "info",
        style: {
          background: "red",
        }
      }).showToast();
      // ..
    });

  //emptying the values in email and pass
  //email.value =""
  //password.value=""
};




//Organization sign in
const OrgsignIn = () => {
  const orgemail = document.getElementById("orglogusername").value;
  const orgpassword = document.getElementById("orglogpassword").value;
  firebase.auth().signInWithEmailAndPassword(orgemail, orgpassword)
    .then((result) => {
      // Signed in
      //   document.write("Your Signed In")
      console.log(result);
      Toastify({
        text: "Organization LoggedIn Successfully",
        className: "info",
        style: {
          background: "green",
        }
      }).showToast();
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // M.toast({ html: error.message, classes: "red" });
      Toastify({
        text: error.message,
        className: "info",
        style: {
          background: "red",
        }
      }).showToast();
    });

  //emptying the values in email and pass
  //email.value =""
  //password.value=""
};


//Organization sign up
const UsersignUp = () => {
    const email = document.getElementById("email").value;
    const fullname = document.getElementById("fullname").value;
    const location = document.getElementById("location").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    //firebase signup code
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // Signed in
        //document.write("Your Signed up")
        var user = auth.currentUser;
  
        //Add this user to firebase database
        var database_ref = database.ref();
  
        // Create User data
        var user_data = {
          email: email,
          fullname: fullname,
          location: location,
          last_login: Date.now(),
        };
  
        database_ref.child("users/" + user.uid).set(user_data)
  
        console.log(result);
        // M.toast({ html: `User Registered Successfully`, classes: "green" });
        Toastify({
          text: "User SignedUp Successfully",
          className: "info",
          style: {
            background: "green",
          }
        }).showToast();
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        // M.toast({ html: error.message, classes: "red" });
        Toastify({
          text: error.message,
          className: "info",
          style: {
            background: "red",
          }
        }).showToast();
        // ..
      });
  
    //emptying the values in email and pass
    //email.value =""
    //password.value=""
  };
  
  //Organization sign in
  const UsersignIn = () => {
    const email = document.getElementById("logfullname").value;
    const password = document.getElementById("logpassword").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        // Signed in
        //getuserInfo(user.uid)
        //   document.write("Your Signed In")
        console.log(result);
        // M.toast({ html: `User LoggedIn Successfully`, classes: "green" });
        Toastify({
          text: "User LoggedIn Successfully",
          className: "info",
          style: {
            background: "green",
          }
        }).showToast();
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        // M.toast({ html: error.message, classes: "red" });
        Toastify({
          text: error.message,
          className: "info",
          style: {
            background: "red",
          }
        }).showToast();
      });
  
    //emptying the values in email and pass
    //email.value =""
    //password.value=""
  };


function logOut() {
  firebase.auth().signOut();
  Toastify({
    text: "Signed Out",
    className: "info",
    style: {
      background: "grey",
    }
  }).showToast();
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
  } else {
    console.log("signout success");
    // M.toast({ html: `Signed Out` });
    // Toastify({
    //   text: "Signed Out",
    //   className: "info",
    //   style: {
    //     background: "grey",
    //   }
    // }).showToast();
  }
});


// function for showing user details in user profile
// const userDetails = document.querySelector('.user-info')
// async function getuserInfo(userID){
//   if(userID){
//     const userInfoSnap = await firebase.database()
//     .collection('users')
//     .doc(userID)
//     .get()

//     const userInfo = userInfoSnap.data()
//     if(userInfo){
//       userDetails.innerHTML = `
//       <h3>${userInfo.fullname}</h3>
//       <h3>${userInfo.email}</h3>
//       <h3>${userInfo.location}</h3>
//       `
//     }
//   }else{
//     userDetails.innerHTML = `
//       <h3>Please login</h3>
//       `
//   }
// }




