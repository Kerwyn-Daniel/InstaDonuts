console.log("js started");
//Lets create lifetime donut/clicker counter and current balance as var
var lifeTimeCount = 0;
var curBal = 0;
var totAutClick = 0;
//displays current value of balances
document.getElementById("curCount").innerHTML = curBal;
document.getElementById("totCount").innerHTML = lifeTimeCount;
document.getElementById("taCli").innerHTML = totAutClick;
//lets create base variables with values for additional auto clickers.
var oven = 100;
document.getElementById("bake").innerHTML = oven; //displays var for user.
var homemade = 200;
document.getElementById("at").innerHTML = homemade;  //displays var for user.
var influence = 1000;
document.getElementById("inf").innerHTML = influence; //displays var for user.
var store = 5000;
document.getElementById("front").innerHTML = store;  //displays var for user.
//special fun auto clicker
var legend = 5000000;
document.getElementById("frede").innerHTML = legend; //displays var for user. can only be purchased once

//next block of code disables buttons plus alert
//thank you abigail roberts for these block of code



//lets create counters for each auto click 
var countOven = 0;
document.getElementById("ovc").innerHTML = countOven;
var countHome= 0;
document.getElementById("hdm").innerHTML = countHome;
var countInflu = 0;
document.getElementById("tub").innerHTML = countInflu;
var countStore = 0;
document.getElementById("stf").innerHTML = countStore;
var countFred= 0;
document.getElementById("ld").innerHTML = countFred;

//this block of code disabling buttons plus alert
//thank you abigail roberts for these block of code idea
function runTest(){
document.getElementById('easy').disabled = true;
document.getElementById('Home').disabled = true;
document.getElementById('tuber').disabled = true;
document.getElementById('comm').disabled = true;
document.getElementById('fred').disabled = true;
    if (curBal >= oven){
    document.getElementById('easy').disabled = false;
    }
    if (curBal >= (homemade-1)){
        document.getElementById('Home').disabled = false;
    }
    if (curBal >= (influence-1)){
        document.getElementById('tuber').disabled = false;
    }
    if (curBal >= (store-1)){
        document.getElementById('comm').disabled = false;
    }
    if (curBal >= (legend-1)){
        document.getElementById('fred').disabled = false;
    }
    }

//lets create the first main click function and add to both balances along with
var doClick = document.getElementById('donutClick');
doClick.onclick = function addDonut() {
    console.log("reg clicker here");
    //create simple add function line that +1 to balances
    lifeTimeCount += 1;
    curBal += 1;
    document.getElementById("curCount").innerHTML = curBal;    //displays var for user.
    document.getElementById("totCount").innerHTML = lifeTimeCount;  //displays var for user.
    runTest();
}




//General auto timer info. 
const donTest = document.getElementById("curCount").innerHTML = curBal;
const lifTest = document.getElementById("totCount").innerHTML = lifeTimeCount;
function timerRun(){
setInterval(function(){
    lifeTimeCount += 1;
    curBal += 1;
    lifTest.textContent = lifeTimeCount;
    donTest.textContent = curBal;
    document.getElementById("curCount").innerHTML = curBal;
    document.getElementById("totCount").innerHTML = lifeTimeCount;
    console.log("hi test");//kept to make sure this function is running
    runTest();
}, 1000);
};


//first level auto clicker event
var firstClick = document.getElementById("easy");
firstClick.onclick = function auto1click() {
    //first level auto clicker with balance checker and  10% raise
    if (curBal >= oven) { //this function checks if user has enough to buy.
        curBal -= oven;
        document.getElementById("curCount").innerHTML = curBal; //displays var for user.
        runTest();
        totAutClick += 1; //this line counts all total clicker  
        //This line adds 1 to lifetime counter used
        document.getElementById("taCli").innerHTML = totAutClick;
        countOven += 1;
        document.getElementById("ovc").innerHTML = countOven;
        timerRun();
        oven =  Math.round(oven + (oven * 0.1));  //this lines raises the clicker by 10%
        document.getElementById("bake").innerHTML = oven;
    }
    else {
        alert('You spilled the batter...')//tell user not enough to purchase
    }
}

//second level auto clicker event
var secondClick = document.getElementById("Home");
secondClick.onclick = function auto2click() {
    //first level auto clicker with balance checker and  10% raise
    if (curBal >= homemade) { //this function checks if user has enough to buy.
        curBal -= homemade;
        document.getElementById("curCount").innerHTML = curBal; //displays var for user.
        homemade =  Math.round(homemade + (homemade * 0.1));  //this lines raises the clicker by 10%
        document.getElementById("at").innerHTML = homemade;
        runTest();
        totAutClick += 1; //this line counts all total clicker  
        //This line adds 1 to lifetime counter used
        document.getElementById("taCli").innerHTML = totAutClick;
        countHome += 1;
        document.getElementById("hdm").innerHTML = countHome;
        timer2Run();
    }
    else {
        alert('Your card was declined...')//tell user not enough to purchase
    }
}

function timer2Run(){
setInterval(function(){
    lifeTimeCount += 3;
    curBal += 3;
    lifTest.textContent = lifeTimeCount;
    donTest.textContent = curBal;
    document.getElementById("curCount").innerHTML = curBal;
document.getElementById("totCount").innerHTML = lifeTimeCount;
    console.log("hi 2 test");//kept to make sure this function is running
}, 2000);
};


//third level auto clicker event
var thirdClick = document.getElementById("tuber");
thirdClick.onclick = function auto3click() {
    //third level auto clicker with balance checker and  10% raise
    if (curBal >= influence) { //this function checks if user has enough to buy.
        curBal -= influence;
        document.getElementById("curCount").innerHTML = curBal; //displays var for user.
        influence = Math.round(influence + (influence * 0.1));  //this lines raises the clicker by 10%
        document.getElementById("inf").innerHTML = influence;
        runTest();
        totAutClick += 1; //this line counts all total clicker  
        //This line adds 1 to lifetime counter used
        document.getElementById("taCli").innerHTML = totAutClick;
        countInflu += 1;
        document.getElementById("tub").innerHTML = countInflu;
        timer3Run();
    }
    else {
        alert('Like, this could go VIRAL...')//tell user not enough to purchase
    }
}

function timer3Run(){
setInterval(function(){
    lifeTimeCount += 5;
    curBal += 5;
    lifTest.textContent = lifeTimeCount;
    donTest.textContent = curBal;
    document.getElementById("curCount").innerHTML = curBal;
    document.getElementById("totCount").innerHTML = lifeTimeCount;
    console.log("hi 3 test");//kept to make sure this function is running
}, 3000);
};

//fourth level auto clicker event
var fourthClick = document.getElementById("comm");
fourthClick.onclick = function auto4click() {
    //fourth level auto clicker with balance checker and  10% raise
    if (curBal >= store) { //this function checks if user has enough to buy.
        curBal -= store;
        document.getElementById("curCount").innerHTML = curBal; //displays var for user.
        store = Math.round(store + (store * 0.1));  //this lines raises the clicker by 10%
        document.getElementById("front").innerHTML = store;
        runTest();
        totAutClick += 1; //this line counts all total clicker  
        //This line adds 1 to lifetime counter used
        document.getElementById("taCli").innerHTML = totAutClick;
        countStore += 1;
        document.getElementById("stf").innerHTML = countStore;
        timer4Run();
    }
    else {
        alert('There was a gas leak detected...')//tell user not enough to purchase
    }
}

function timer4Run(){
setInterval(function(){
    lifeTimeCount += 10;
    curBal += 10;
    lifTest.textContent = lifeTimeCount;
    donTest.textContent = curBal;
    document.getElementById("curCount").innerHTML = curBal;
    document.getElementById("totCount").innerHTML = lifeTimeCount;
    console.log("hi 4 test");//kept to make sure this function is running
}, 4000);
};

//fifth level auto clicker event
var fifthClick = document.getElementById("fred");
fifthClick.onclick = function auto5click() {
    //fourth level auto clicker with balance checker and  10% raise
    if (curBal >= legend) { //this function checks if user has enough to buy.
        curBal -= legend;
        document.getElementById("curCount").innerHTML = curBal; //displays var for user.
        //legend = Math.round(legend + (legend * 0.1));  //this lines raises the clicker by 10%
        document.getElementById("frede").innerHTML = legend;
        runTest();
        totAutClick += 1; //this line counts all total clicker  
        //This line adds 1 to lifetime counter used
        document.getElementById("taCli").innerHTML = totAutClick;
        countFred += 1;
        document.getElementById("ld").innerHTML = countFred;
        timer4Run();
    }
    else {
        alert('You youngins\' dont know what work is...')//tell user not enough to purchase
    }
}

function timer5Run(){
setInterval(function(){
    lifeTimeCount += 1000;
    curBal += 1000;
    lifTest.textContent = lifeTimeCount;
    donTest.textContent = curBal;
    document.getElementById("curCount").innerHTML = curBal;
    document.getElementById("totCount").innerHTML = lifeTimeCount;
    console.log("hi 5 test");//kept to make sure this function is running
}, 7000);
};



var cheat = 0;
//cheat addition tired of clicking
var cheatAdd = document.getElementById('cheat');
cheatAdd.onclick = function addCheat() {
    console.log("cheat activated");
if (cheat = 0){
    console.log("1");
    curBal=300;
    document.getElementById("curCount").innerHTML = curBal;
    cheat +=1;
}
if (cheat =1){
    console.log("2");
    curBal+=5000000;
    document.getElementById("curCount").innerHTML = curBal;
    cheat +=1;}
// if (cheat = 2){
//     console.log("3");
//     curBal=70000;
//     document.getElementById("curCount").innerHTML = curBal;
//     cheat+=1;}
// if (cheat = 3){
//     console.log("4");
//     curBal=10000000000;
//     document.getElementById("curCount").innerHTML = curBal;
//     cheat+=1;}
runTest();
}
// var info = document.getElementById("infu")
// var history= document.getElementById("his");
// history.addEventListener('click',function show(){
//     if (infu.style.display === "" || infu.style.display === "none") {
//         infu.style.display = "block";
//     } else {
//         infu.style.display = "none";
//     }
// });

// function last(){
//     history.click(function()){

//     }
// }