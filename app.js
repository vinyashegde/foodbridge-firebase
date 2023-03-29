// setting firebase

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD1FWsHvue2G4JnFdDL6EvSYrKJ4uV0eQw",
    authDomain: "foodbridge-6a85e.firebaseapp.com",
    projectId: "foodbridge-6a85e",
    storageBucket: "foodbridge-6a85e.appspot.com",
    messagingSenderId: "445260306945",
    appId: "1:445260306945:web:cb42789eee6467d52fbe00"
  });
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  
  //sign up
  const signUp=()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password);
    //firebase signup code
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in 
    //   document.write("Your Signed up")
      console.log(result)
      M.toast({html: `Registered Successfully`,classes:"green"})
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message)
      M.toast({html: error.message,classes:"red"})
      // ..
    });

    //emptying the values in email and pass
    //email.value =""
    //password.value=""
  }
  
  //sign in
  const signIn=()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
    //   document.write("Your Signed In")
      console.log(result)
      M.toast({html: `LoggedIn Successfully`,classes:"green"})
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message)
      M.toast({html: error.message,classes:"red"})
    });

    //emptying the values in email and pass
    //email.value =""
    //password.value=""
  }




  function logOut(){
    firebase.auth().signOut()
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user)
    } else {
      console.log('signout success');
      M.toast({html: `Signed Out`})
    }
  });