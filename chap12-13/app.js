// let  user_input = +prompt("Enter a number");
// if(user_input === 0){
//     console.log("your input number is equal to 0 " + " = "  +  user_input);
// }
// else if(user_input > 0){
//     console.log("your input number " +  user_input  + " is a positive number" );  
// }

// else if(user_input < 0){
//     console.log("your input number " +  user_input  + " is a negative number" );  
// }

// else{
// console.log("please enter a number");
// }

        // question-2

// let user_input_vowels = prompt("Enter an alphabetic character").toLowerCase();

// if (user_input_vowels === "a" || user_input_vowels === "e" || user_input_vowels === "i" || user_input_vowels === "o" || user_input_vowels === "u"){
//     console.log("Your input character " + user_input_vowels + " is a vowel character");
// }
// else{
//     console.log("Please enter a vowel character");
// }

            // question-3
 
//  let hours = +prompt("Enter hours from 24 hours");
//  if (hours < 18) {
//    console.log("Good day") 
//  } 
//  else{
//     console.log("Good evening");
//  } 


                // question-4


let user_email = document.getElementById('email').value;
let user_password = document.getElementById('password').value;
    
let user_db_email = "ahsankhan@gmail.com";
let user_db_password = "ahsan991130";
    
if (user_email === user_db_email && user_password === user_db_password){
        document.write("Succesfully login");   
}
else{
        document.write("Incorrect email and password");
}






