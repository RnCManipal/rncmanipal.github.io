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

  $('#vcontactForm').submit(function(e) {
    var a = document.getElementById("teamsize").value;
//console.log('a is '+a);
var m1='';
var m2='';
var m3='';
//alert(a);
if(a==1){
  m1=document.getElementById('0').value
}
else if(a==2){
  m1=document.getElementById('0').value
  m2=document.getElementById('1').value
}
else{
  m1=document.getElementById('0').value
  m2=document.getElementById('1').value
  m3=document.getElementById('2').value
}
var num = Math.floor(Math.random() * 90000) + 10000;
    e.preventDefault();
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email: $('.email').val(),
        phone: $('.phone').val(),
        message: $('.message').val(),
        teamname: $('.teamname').val(),
        teamsize: $('.teamsize').val(),
        collegedetails:$('.collegedetails').val(),
        date:date1,
        teamm1: m1,
        teamm2: m2,
        teamm3: m3,
        teamid:num
    });
 
    $('.success-message').show();
 	
    $('#vcontactForm')[0].reset();
  window.location.replace("thankyouv.html");
  alert('Your team id is '+num);
});

