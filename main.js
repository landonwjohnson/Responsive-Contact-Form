// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD6hPeRuGJKaNjrpMRcvvhn8lwJzS_X2N4",
    authDomain: "responsive-contact-form-dc14c.firebaseapp.com",
    databaseURL: "https://responsive-contact-form-dc14c.firebaseio.com",
    projectId: "responsive-contact-form-dc14c",
    storageBucket: "responsive-contact-form-dc14c.appspot.com",
    messagingSenderId: "1045945896226"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');


// Listen for form submit
    document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
    function submitForm(e){
        e.preventDefault();
        
        // Get values
        var name = getInputVal('name');
        var company = getInputVal('company');
        var email = getInputVal('email');
        var phone = getInputVal('phone');
        var message = getInputVal('message');

        // Save message
        saveMessage(name, company, email, phone, message);
    }

// Function to get form values
    function getInputVal(id){
        return document.getElementById(id).value;
    }

// Save message to firebase
    function saveMessage(name, company, email, phone, message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            company: company,
            email: email,
            phone: phone, 
            message: message
        })
    }