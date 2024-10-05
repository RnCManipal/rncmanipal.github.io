 var firebaseConfig = {
    apiKey: "AIzaSyD0WfiZqP0xl5nikUOldHFSl6T1lnYa5R8",
    authDomain: "rncwebsite.firebaseapp.com",
    databaseURL: "https://rncwebsite.firebaseio.com",
    projectId: "rncwebsite",
    storageBucket: "rncwebsite.appspot.com",
    messagingSenderId: "383651194422",
    appId: "1:383651194422:web:56ff6b6c640f6dd4161a97",
    measurementId: "G-6ZS58GB6WR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();
var messagesRef = firebase.database().ref('register');
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var date1 = new Date().toString()

  $('#contactForm').submit(function(e) {
    e.preventDefault();
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        subject: $('.subject').val(),
        message: $('.message').val(),
	date:date1
    });
 
    $('.success-message').show();
 	
    $('#contactForm')[0].reset();
	window.location.replace("thankyou.html");
});

