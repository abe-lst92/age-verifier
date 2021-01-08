var ferrari={
    type: "Ferrari",
    model: "Sf90",
    available: "Yes there are many of this",
    description: "A good ferrari to enjoy the speed and it looks very luxury when you look at it, It specific details it looks decent"

}



function Info(){
    var design = document.getElementById("butt");


    for(value in ferrari){
        design.innerHTML = "Type " + ferrari.type + "</br> " +
        "Model " + ferrari.model + " </br> " + "Available " + ferrari.available + "</br>" + " Description " + ferrari.description;
    }


  

   
}
var lamborghini={
    type: "Lamborghini",
    model: "Aventador J",
    available: "In lamborguinis's store",
    description: "I am a good car to enjoy and get distracted for a while"

}
function info2(){
    var design2 = document.getElementById("details2");

    for(value in lamborghini){
        design2.innerHTML = "Type " + lamborghini.type + "<br>" +
        "Model " + lamborghini.model + " </br> " + "Available " + lamborghini.available + "</br>" + " Description " + lamborghini.description;
    }
}

var whippet={
    type: "Classic truck",
    model: "1927 Willys-Overland Whippet 93A",
    available: "Not that many",
    description: "I'm not fast but I seem so funny."

}
 function info3(){
    var design3 = document.getElementById("details3");

    for(value in whippet){
        design3.innerHTML = "Type " + whippet.type + "</br>" +
        "Model " + whippet.model + "</br>" + "Available " + whippet.available + "</br>" + " Description " + whippet.description;
    }

 }

 function remover(){
    var myobj = document.getElementById("butt");
    myobj.remove();

 }
 function remover2(){
    var myobj2 = document.getElementById("details2");
    myobj2.remove();

 }
 function remover3(){
    var myobj3 = document.getElementById("details3");

     myobj3.remove();

 }





// alert("Are you sure you want to go to the next page?");

//    var num =  prompt("Okay, First tell me your age?" );


// function ageTeller(){
// num
//     if(num >= 18){
//     alert("Acces confirm!");
// } else if(num <= 17){
//     alert("Acces denied!");

// };
// };

// ageTeller();



// var str = "Squirt";

// switch (str) 
// {
//     case "Squirt":
//         alert("This is my favorite coke");
//     case "coca-cola":
//         alert("This is my second favorite coke");
//         break;
//     case "mtdw":
//         alert("This is the third soda that i like");
//         break;
//     default:
//         alert("Unknown coke");
//         break;
// }
//   document.getElementById("demo").innerHTML = str;







// for(let i = 0; i < 10; i++){
//     document.write("Hello World" + '<br/>');
// }

// var x = 0;

// for(i = 0; i < 10; i++){
//     if(i === 7){
//         break;
//     }
// }
// document.write("The number is " + i + " <br/>");


// while(x <= 20){
//     document.write("The number is " + x + " <br/>");
//  x = x + 2;
// };

// for(var i = 0; i <= 20; i++){
//     if(i % 2 === 0){
//         document.write("The number is " + i + " Even" + " <br/>");

//     }else{
//         document.write("The number is " + i + " odd" + " <br/>");
//     }
// }


// var money = 500.00;
// var bills = 4500.00;

// if (money > bills){
//     document.write("You are covered ");

// } else if(money === bills){
//     document.write("you're good, just barely! ");
// } else if(money < bills || (money < 500)) {
//     document.write("you're good, just barely! ");

// }else{

//     document.write("you almost. ");


// };

// function assignGrade(num){

//     if(num >= 90 ){
//      document.write("You got an A! ");


//     }else if(num >= 80){
//         document.write("You got a B! ");

//     } else if(num >= 70) {
//         document.write("You got a C! ");


//     } else if(num >= 60){
//         document.write("You got a D! ");

//     }
//     else {

//     return 'F';

//     };
// };

// assignGrade(95);

// assignGrade(75);
// assignGrade(85);
// assignGrade(65);
// assignGrade(40);






