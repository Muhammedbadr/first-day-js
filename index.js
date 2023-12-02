window.onload = function(){
    document.querySelector("h1").style.color = "blue";
};

console.table(["omar" , "omar" ,"omar" ]);
console.log("Hello from %c js %c hwo are you" , "color: blue; font-size:40px;" , "color: red; font-size:40px;")


var myname = " osma";

console.log("Hello " + myname);

console.log(typeof "muhammad");

console.log(typeof [5000 , 43, 34]);


console.log(typeof {name : "muhammad" , age: " 16" , from :"Rs"});



var user = "omar"
console.log(user);
console.log(user);
console.log(user);
console.log("gon");





console.log("muhammad 'muhammad'");      
console.log('muhammad "muhammad" ');      
console.log('muhammad \"muhammad\" ');    
console.log('muhammad \
muhammad \
muhammad');    
console.log(' muhammad \n muhammad \n muhammad');    


let a = "java";
let b = "screp";
let c = "html"

document.write( a + "  " + b + " \n " + c);
console.log(a + "  \"\" "+ b + "\n "+c)  

console.log( ` ${a}  " "
 ${b}  ${c} $.100.* 23}`);


/* #################################### */
let title = "Car.info makes it easy to find the right car, make accurate car valuations, compare statistics, verify car history and find the right accessories";
let prgrf = "Car.info makes it easy to find the right car ";

let markUp = `
    <div class="zoldik">
        <div class= "family">
            <h2> ${title} </h2>
            <p> ${ prgrf}</p>
        </div>
    </div>`;
document.write(markUp);
/* #################################### */


console.log(6 % 2);
console.log(6 * 2);
console.log(typeof NaN);



console.log(+"100");


let aa = 10;
let bf = "80";
let bb = 80;
console.log(++aa + ++bf);


/* #################################### */
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 7676);


console.log((100).toString());
console.log(100.10.toString());

console.log(100.55555.toFixed(2));

console.log(parseInt("100 omar"));
console.log(parseInt("omar 100 omar"));
console.log(parseInt("100.555 omar"));
console.log(parseFloat("100.555 omar"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));
/* #################################### */





/* #################################### */
console.log(Math.round(99.3))
console.log(Math.round(99.6))

console.log(Math.ceil(99.1))
console.log(Math.floor(99.9))

console.log(Math.min(100, 34, -150, 400))
console.log(Math.max(400, 34, -150, 100))

console.log(Math.pow(3 , 3))

console.log(Math.random())

console.log(Math.trunc(99.232))
/* #################################### */



/* Quiz time */
let d = 1_00;
let e =2_00.5;
let f = 1e2;
let j = 2.3;

console.log(Math.floor(Math.min (d , e , f ,j)));

console.log(Math.trunc(j) );

console.log(Math.round(j));
console.log(Math.floor(j));
console.log(Math.trunc(j));
console.log(parseInt(j));  
/* finsh */


/* #################################### */
let Thename = " Mukhammad";
console.log(Thename);
console.log(Thename[1]);

console.log(Thename.charAt(1));
console.log(Thename.length);
console.log(Thename.trim());

console.log(Thename.toUpperCase());
console.log(Thename.toLowerCase());


console.log(Thename.trim().charAt(5).toUpperCase());
/* #################################### */



/* #################################### */
let z = "A h m a d Muhammad Nur Amer Aisha" ;

console.log(z.indexOf("muhammad"));
console.log(z.indexOf("Nur", 8));

console.log(z.indexOf("l"));
console.log(z.lastIndexOf("l"));

console.log(z.slice( 1 , 7));
console.log(z.slice( -1));

console.log(z.repeat(5))

console.log(z.split(" "  ))
/* #################################### */


/* #################################### */
let w = "Ahmad Muhammad  Nur Amer Aisha" ;
console.log(w.length)

console.log (w.substring(2,6));
console.log (w.substring(6,2));
console.log(w.substring(-10 , 6));
console.log(w.substring(w.length - 5));

console.log(w.substr(0,5));

console.log(w.includes("Nur"));
console.log(w.includes("Nur" , ));

console.log(w.startsWith("A",2))/* false */
console.log(w.startsWith("Ahmad",0))/* true */

console.log(w.endsWith("Ahmad"))/* false */
console.log(w.endsWith("a"))/* true */
console.log(w.endsWith("d" ,5)) 
/* #################################### */



/* Quiz time */
let t = "Elzero web school"

console.log(t.charAt(2).toUpperCase()+t.slice(2 , 6));/* First */

console.log(t.charAt(13).repeat(8).toUpperCase())/* Second */

console.log(t.slice(0 ,6).split());/* Third */

console.log(t.substr(0,6)+t.substr(10,17));/* Fourth */

console.log(t.slice(0,1 ).toLowerCase()+t.slice(1,16).toUpperCase()+ t.slice(16,17).toLocaleLowerCase());/* Fifth */
/* finsh */ 


/* #################################### */

console.log(10 == "10");/* false */
console.log(10 != "10");/* true */

console.log(10 === "20");
console.log(10 !== "10");
console.log(10 !== 10)

console.log(10 <= 10)
console.log(10 > 100);

console.log("omer" == "ali");
console.log(typeof"omer" == typeof"ali");
/* 
    != Not
    && = and 
    || = or 
*/
console.log(10 == "10" && 10 > 8 && 10 >10 );
console.log(10 == "10" || 10 > 80 || 10 >50 );
/*####################################*/




/*####################################*/
let price1 = 100;
let discount1= false;
let discountAmount1 = 50 ;
let country1 = "KSA" ;

if (discount1 === true){
    price1 -= discountAmount1;// price = price - discountAmount 
}
else if (country1 === "Russia" ){
    price1 -= discountAmount1
}
else if (country1 === "U.S.A" ){
    price1 = price1 - 10
}
else {
    price1 -= 5
}

console.log(price1)


/*#####################*/



let price2 = 100;
let discount2= false;
let discountAmount2 = 20 ;
let country2 = "Russia" ;
let student = true ;

if (discount2 === true){
    price2 -= discountAmount2;// price = price - discountAmount 

}
else if (country2 === "Russia" ){

    if (student === true){
        price2 -= discountAmount2 + 40;
    }
    else {
        price2 -= discountAmount2 + 10;
    }
}

console.log(price2)
// ################################## 

// ################################## 

let thename = "jan";
let theGender = "male";
let theage = "23";
let help = "How can help you"
let age = "1 "

if(thename === "muhammad"){
    console.log("Mr")   
}
else{
    console.log("Mrs")
}

// ? if true , : if folse
theGender === "male" ? console.log("mr") : console.log("mrs");

let result = theGender === "male" ?"ms brodn" : "mrs";

document.write(result);


console.log(theGender === "male" ? "ms brodn" : "mrs");


console.log(`Hello ${thename === thename ? thename : "Sir" } ${help}`);

age < 10  && age > 5 ? console.log("boy") : age > 20 && age < 60 ? console.log("man") : age > 60 ? console.log("old-man" ): console.log("baby") 
// ################################## 

/*####################################*/
console.log(Boolean(100))
console.log(Boolean(-100))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))

let price = 0;

console.log(`The chicken price ${ price || 50}` )
console.log(`The chicken price ${ price ?? 50}` ) // console.log(Boolean(0)) 
/*####################################*/

// ################################## 
// Quiz Time 

let st = "Elzero Web school";

if((st.length*2).toString() === "34"){
    console.log("Good");
};

if (st.charAt(st.indexOf("W")) === "W"){
 console.log("Good");
}; 

if (st !== "string"){
 console.log("Good");
} 

if (typeof st.length === "number"){
    console.log("Good");
} 

if (st.substring(0,6).repeat(2) === "ElzeroElzero"){
    console.log("Good");
} 

// finsh
// ################################## 

// ################################## 
let day = 4 ;

switch(day){
    case 0:
        console.log("Saturday")
    break;
    case  1 :
        console.log("Sunday")
    break;
    case  2 :
        case 3 :
            console.log("Monday")
        break;
        default:
            console.log("error")

    }
    // ################################## 


    // ################################## 
    let job = "IT"
let salary = 0 ;

if (job === "Manager"){
    salary = 8000;
}
else if (job === "IT" || job === "suppert"){
    salary = 6000;
}
else if (job === "Developer" || job === "Designer"){
    salary = 7000;
}else{
    salary = 4000;
}
console.log(salary)




let holiday = 7;
let mony =0 ;

switch(holiday){
    case 0 :
        mony = 8000;
        console.log(`My salary ${mony}`);
        break;
    case 1 :
    case 2 :
        mony= 7000;
        console.log(`My salary ${mony}`);
        break;
    case 3 :
    case 4 :
        mony= 6000;
        console.log(`My salary ${mony}`);
        break;
    default:
        mony= 2000;
        console.log(`Min salary  ${mony}`)
}
// ################################## 


// ################################## 
let myFriends = [  "Muhammad" , "Ahmed" , "Ali" , " islam" , "Ali" , " islam"];

console.log(`Hello ${myFriends[3][2]}` )
console.log(`Hello ${myFriends[4][1][1]}`)

console.log(myFriends);
myFriends[4][1]="yusuf"
console.log(myFriends);
console.log(Array.isArray(myFriends));

console.log(myFriends.length); // 6

let mybrother = [  "Muhammad" , "Ahmed" , "Ali" , " islam" , "Ali" , " islam"];
mybrother.length=3;
console.log(mybrother);

console.log(mybrother.length); // 

let myFamily = [  "Muhammad" , "Ahmed" , "Ali" , " islam" , "Ali" , " islam"];
//
myFamily.unshift("sssss" , "islam")
console.log(myFamily);
myFamily.push ("omar" , "sssss")
console.log(myFamily);
// 
let first = myFamily.shift ()
console.log(myFamily);
console.log(`First Name is ${first}`);

let lest  = myFamily.pop ()
console.log(myFamily);
console.log(`lest Name is ${lest}`);
// ################################## 


// ################################## 
let boy = [  "Ali" , "Ahmed" , "Ali" , "islam" , "Ali"  , " mert", "jan" , "Ali"  , " mert"];

console.log(boy.indexOf("jan"))
console.log(boy.indexOf("jan", 4))

console.log(boy.lastIndexOf("Ali"))

console.log(boy.includes("Ali"))
console.log(boy.includes("Ali" , 2));

if (boy.indexOf("Ali")=== 1){
    console.log("Not Found")
};
// ################################## 


// ################################## 
let boyage = [  "Ali" , 44 , "Ahmed" , "415" , "Ali" , 43, "islam" , -22 , "Ali" ,12 ];
console.log(boyage);
console.log(boyage.sort().reverse());
console.log(boyage.reverse());
// ################################## 


// ################################## 
let family = [  "Ali" , "yousuf" , "nasa" , "jak" ];
console.log(family.slice);
console.log(family.slice(-2)); 
console.log(family.slice(-0 , -3)); 
// console.log(family.slice(4));
family.splice(0 , 2 ,"smmer" ,"mhammad");
console.log(family) ;
// ################################## 


// ################################## 
let myboy = [  "Ali" , "yousuf" , "nasa" , "jak" ]
let my_bro_boy = [  "Ali" , "yousuf" , "nasa" , "jak" ]
let my_sis_boy = [  "Ali" , "yousuf" , "nasa" , "jak" ]

let allfmaily = my_bro_boy.concat(myboy,my_sis_boy , "Gameel" , [1,2,3,4,5]);
console.log(allfmaily);

console.log(allfmaily.join());
console.log(allfmaily.join(""));
console.log(allfmaily.join("|"));
console.log(allfmaily.join("|").toUpperCase());
// ################################## 


// ################################## 
// Quize
let zero = 0 ;
let counter = 3 ;
let my = ["ahmed" , "mazero","elham" , "osama" , "gamal" , "ameer"];
// 1
console.log(my.slice(zero,++counter).reverse());
// 2
console.log(my.slice(my.shift(),counter -2).reverse());
// 3
console.log(my.unshift("Elzero"));
// ################################## 

//####################################
//loop
//for
let myfemily = [ 1,2 ,"Ali" , "yousuf" , "nasa" , "jak" , "sjak"];
let onlyname=[]
// if (typeof myfemily[0] === 'string'){
//     onlyname.push(myfemily[0])
// }

// if (typeof myfemily[1] === 'string'){
//     onlyname.push(myfemily[1])
// }

// if (typeof myfemily[2] === 'string'){
//     onlyname.push(myfemily[2])
// }

// if (typeof myfemily[3] === 'string'){
//     onlyname.push(myfemily[3])
// }
// while loop
for(let s = 0 ; s < myfemily.length ; s++){
    if(typeof myfemily[s] ==="string")
    {onlyname.push(myfemily[s])
    ;}
}
console.log(onlyname)

// console.log(myfemily[0]);
// console.log(myfemily[1]);
// console.log(myfemily[2]);
// console.log(myfemily[3]);
// console.log(myfemily[4]);
// console.log(myfemily[5]);
//while loop
for(let i = 0 ; i< myfemily.length ; i++){
     console.log(myfemily[i]);
}

//####################################
let products = ["key","PS","pan","pad","maus" , 2,3,4,5];
let mdein = ["ruusa","america","palctin","mroko","shapon" ];
let colors = ["red","blue","green","ornge"];
let model = [2020,2023];

for(let r=0; r< products.length; r++){
    console.log("#".repeat(15))
    console.log(`# ${products[r]}`)
    console.log("#".repeat(15))
    console.log("colors :")
    for(let j=0 ; j < colors.length; j++){
        console.log(`- ${colors[j]}`)
    }
    console.log("model :")
    for(let m=0 ; m < model.length; m++){
        console.log(`- ${model[m]}`)
    }
}
console.log("#".repeat(40))
//###################
for(let g = 0 ; g < products.length; g++){
    console.log(products[g])
    if (products[g] === "pad"){
        break;
    }
}
console.log("#".repeat(40))
//###################
for(let b = 0 ; b < products.length; b++){
    if (typeof products[b] === "number"){
        continue;
    }
    console.log(products[b])
}
//###################
for(let c = 0 ; c < products.length; c++){
    if (typeof products[c] === "string"){
        continue;
    }
    console.log(products[c])
}
//###################
mainLoop : for(let k=0 ; k < mdein.length; k++){
    console.log(mdein[k]);

    nestedlopp : for(let v=0 ; v < colors.length; v++){
        console.log(`- ${colors[v]}`)
        if(colors[v] === "green"){
            break mainLoop ;
        }
    }
}
//###################
let ms = 0 ;
for (;;){
    console.log(mdein[ms]);
    ms++
    if(ms === mdein.length )break;
}
//###################

let showcout = 5 ;
let h = 0

document.write(`<h1> show ${showcout} proja </h1>`)
for(;  h < showcout; h++) {
    document.write(`<div>`)
    document.write(`<h3 >[${h + 1}] ${products[h]} </h3>`)
    document.write(`<p >${colors.join(" - ")} </p>`)
    document.write(`</div>`)
}
//#################

let y = 0 ;
do  {  console.log(y);
    y++;
}
while(false){
  

};
//###################//###################

// qize 
let myAdmins = ["ahmed" , "mazero","elham" , "osama" , "gamal" , "ameer"];
let myEmployees = ["ahmed" , "mazero","elham" , "osama" , "gamal" , "ameer" , "asha" , "musa"];


document.write(`<h1>we have ${myAdmins.length} admins</h1> `)
document.write(`<hr>`)




let cout = 4 ;
let x = 0

document.write(`<h1> show ${cout} proja </h1>`)
for(;  x < cout; x++) {
    document.write(`<div>`)
    document.write(`<h3 > Team Members: </h3>`)
    for( let l = 0 ; l < colors.length ; l++)
    document.write(`<p >[${l + 1}] ${myEmployees[l]} </p>`)
    document.write(`<hr>`)
    document.write(`</div>`)
}
//###################//###################
// function 

function sayhello(userName){
    console.log(`hi ${userName}`)
}
sayhello("Muhammad");
sayhello("Ali");
sayhello("Jan");

//############
function sayhi(userName , age){
    if (age < 18 ){
        console.log(`Plase you can't ues the app , You are under 18 years of age `)
    }else{
    console.log(`hi ${userName} your age is ${age} ` )
}
}
sayhi("Muhammad" , 45);
sayhi("Ali", 12 );
sayhi("Jan" , 18);

//############

function generateYears(start , end , exclude){
    for (let index = start; index <= end; index++) {
        if (index === exclude){
            continue;
        }
        console.log(index)
    }
}
generateYears(2007,2023 ,2020);
//############
console.log("#".repeat(15))
function Namber(start , end ){

    for (let yon = start; yon <= end; yon++) {
        console.log(yon)
        if (yon === 10){
            return;
        }
    }
}
Namber( 0 , 20);
//##############
console.log("#".repeat(15))

function math(ali , jan ){
    return ali + jan ;
}
let hg = math(15, 16 );
console.log(hg+50)
//##############
function mykids( userNames = "plase enter your userNames",ages = "plase enter your age"){
    // if(ages === undefined){
    //     ages= "no info"
    // ages = ages || "no info"
    console.log(`hi ${userNames} your age is ${ages}`)
}
console.log(mykids("jan"))
//##############
function Nambers(...number ){
    let results = 0 ; 
    for(let hgh  = 0; hgh < number.length; hgh++ ){
        results += number[hgh]
    }
    return `final result is ${results}`
}
console.log(Nambers(10,10,10,10,100,100))
//###########################


function showInfo(uName = "un" ,age="un", time = 0 , show= "Yes" , ...skills){
    document.write(`<div>`)
    document.write(`<h3> Welcome,${uName} </h3>`)
    document.write(`<p> Age ${age}</p>`)
    document.write(`<p> Hour : ${time}</p>`)
    if (show === "yes"){
        if(skills.length > 0 ){
            document.write(`<p> skills : ${skills.join(" and ")}</p>`)
        }
        else{
            document.write(`<p> skills :No skils</p>`)
        }
    }
    else{
        document.write(`<p> Skills is ematy</p>`)
    }

    document.write(`</div>`)
}

showInfo(
    "ali", 65 , "5:00" ,
    "yes" ,
        "html" , "css" , "js"
 )
 //############
 function showDetails(...data) {
    let 
      a = 0,
      b = 0 ,
      c = 0 ;
    for (let ind = 0; ind < 3; ind++) {
        typeof data[ind] === 'string' ? (a = data[ind])
        : typeof data[ind] === 'number' ? (b = data[ind])
         ( b = b || "no info")
        : data[ind] === false ? (c = 'Not Availble')
        : (c = 'Availble');
    }
    return console.log(`Hi ,${a}, Your Age Is ${b} ,You Are ${c} For Hire`);

 }
 showDetails(false , 'Mohamed');


 //############
let calculater =function (apple , panepinl) {
    return apple + panepinl;
}
console.log(calculater(10 , 55 ))
 //#######
function sayhello(){
    console.log("hello jan") 
}

//#######
setTimeout( function (){
    console.log("good jap man")
}, 2000);
//######
// export 1
function saymessage(fName , IName){
    let  message  = `hello`;
    function concamessage(){
        message = `${message} ${fName} ${IName} `
    }
    concamessage()
    
    return message;
}
console.log(saymessage("ali" , "badr"))

// export 2

function saymessage2(fName , IName){
    let  message  = `hello`;
    function concamessage(){
        return `${message} ${fName} ${IName} `
    }
    return concamessage();
}
console.log(saymessage2("jan" , "nonot"))

// export 3

function saymessage3(fName , IName){
    let  message  = `hello`;
    function concamessage(){
        function getfullname(){
            return `${fName} ${IName} `
        }
        return `${message} ${getfullname()}`
    }
    return concamessage();
}
console.log(saymessage3("yusuf" , "jon"))


//######

function  print(){
    return 10 
}
console.log(print())
//seam
let print1 = function(){
    return 20;
};
console.log(print1())
//#######
let print2 = () => 30;
console.log(print2())
//######
let print3 = function(num){
    return num; };
console.log(print3(50))
//#######
let print4= num =>  num ;
console.log(print4(50))
//#######
let print5= (num1,num2) => num1 + num2 ;
console.log(print5(50 , 50))

//############
var one = 1;
let two = 2;

function showtext(){
    var one = 100
    var two = 200
    console.log(`From Global ${one}`)
    console.log(`From Global ${two}`)
}
showtext( )
console.log(`From Global ${one}`)
console.log(`From Global ${two}`)
//######
function pareet(){
    let height = 11
    function child(){
        console.log(height)
    
        function in_low(){
            console.log(`hi ${height}`)
        }
        in_low ()
    }
    child  ()  
} 
pareet()

// quiz time 

let nemes = (...string) =>`String [${string.join("], [")}] => Done`;
console.log(nemes("omar" , "omar" , "omar" , "omar" , "omar" , "omar"));

let myNumbers =[ 20,50,10,60];
let calc = (one,two,...nume) => one + two + nume[0];
console.log(calc (myNumbers[2], myNumbers[0], myNumbers[1] ))

//finsh 
//exampl 1
let myNums = [1,2,3,4,5,6 ];
let mybro = ["ali" ];
let newArray = []
for(let ol = 0 ; ol < myNums.length ; ol++ ){
    newArray.push(myNums[ol] + myNums[ol]);}
console.log(newArray);
//same idey with marginTop: 

//exampl 2
let addsalf =  myNums.map((elemant) => elemant + elemant)
console.log(addsalf)

//exampl 3
function addition(ele){
    return ele + ele;
}

//#################

let add = myNums.map(addition)
console.log(add)
// one
let swapp = "elZERo"
// two
let nuber = [1. -10 , -20 , 15 , 100 , -100 ]
// three
let ignor = "ZolDik534"

// one
let sw = swapp.split("").map(function(ele){
    return ele === ele.toUpperCase() ? ele.toLowerCase() :ele.toUpperCase()
})
.join("")
console.log(swapp.toUpperCase())
console.log(sw)
//two
let moznag = nuber.map(function(ele){
    return +ele
})
console.log(moznag)
// three
let delit = ignor.split("").map(function(ele){
    return isNaN(parseInt(ele)) ? ele  : "";
}) 
.join("")

console.log(delit)

//############

// one
let fillter = ["omar","ahmad","muhammad","ali","jan"]
//two 
let phonnaber =[1,3,4,6,7,8,3,6]

// one
let fillterfrends = fillter.filter(function(ele){
    return ele.startsWith("a")?true:false; })
console.log(fillterfrends)
//two
let fillternamber = phonnaber.filter(function(ele){
    return ele % 2 === 0 
})
console.log(fillternamber)

//############

let sentence = "I Love foods code So playing much"
let foodcode = sentence.split(" ").filter(function(ele){
    return ele.length <= 4
})
.join(" ")
console.log(foodcode)


let instgram = "A13Bs52zzx"

let justnaber = instgram.split("").filter(function(ele){
    return !isNaN(parseInt(ele)) ;
})
.map(function(el){
    return el * el   ;
    
})
.join("")
console.log(justnaber);

//############

let reduce= [10,20,30,40]

let adds = reduce.reduce(function(acc , current , index , arr){
    console.log(`acc   => ${acc}`)
    console.log(`current element => ${current}`)
    console.log(`current element index => ${index}`)
    console.log(`array => ${arr}`)
    console.log(acc + current)

    console.log(`#################`)
    
    return acc + current 
},10)
console.log(adds)
//######

let beegerword = [ "propagande" ,"bule" ,  "green" , "black" , "red" , "red"  ]
let beg = beegerword.reduce(function(acc , current ){
    console.log(`acc   => ${acc}`)
    console.log(`current element => ${current}`)
    console.log(acc.length > current.length ? acc : current )
    console.log(`############`)
    return acc.length > current.length ? acc : current;  
})
console.log(beg)



let  remonv =  ["@","Z","@","O","@","L","@","D","@","I","@","K"]
let jg = remonv.filter(function(ele){
    return !ele.startsWith("@")
})
.reduce(function(acc,current){
    return `${acc}${current}`
})
console.log(jg)
//##########

//foreach

let allis = document.querySelectorAll("ul li");
let alldiv = document.querySelectorAll(".content div");


allis.forEach(function(elele){

    elele.onclick = function (){

        allis.forEach(function(ele){
            ele.classList.remove("active")
        })    

    this.classList.add("active")
    
    alldiv.forEach(function(el){
        el.style.display ="none"
    });
    };
});

// quiz time

let mystring = "1,2,3,ZZ,o,l,r,_,W,e,b,_,S,c,h,o,o,l,2,0,z"
let hghg = mystring.split("").filter((ele) => isNaN(parseInt(ele)) ? ele  : "")
.filter( (ele)=> !ele.startsWith(","))
.map((ele) => ele === '_' ? ele =(' ') : ele )
.join("")
console.log(hghg)
// finsh

//##############
// Object 
let theuser = {
    // properties
    thename:"muhammad",
    theage:"33",
    //methods
    sayHello: function(){
        return `hello` ;
    }

}
console.log(theuser.thename)
console.log(theuser.theage)
console.log(theuser.sayHello(""))

//#########

let theinfo ={
    thename:"jack",
    "My contry of":"Russia",
    "My age after fif Y":25
}
console.log(theinfo.thename)
console.log(theinfo[ "My contry of"])
console.log(theinfo[ "My age after fif Y"])

//#########

//#########
let myvar = "contry"

let ABC = {
    thename:"jan",
    contry:"palsten",
}
console.log(ABC.thename)
console.log(ABC[myvar])
//#########

//#########
let myinfo = {
    thename:"jan",
    age:22,
    skils:["html","css","js"],
    mared:false, 
    addrs :{
        palsten: "Gaza",
        turky: {
            first:"ankara"
            , sicend:"istanbul", 
        },
    },

    checkav: function (){
        if (myinfo.mared === true){
            return `please wait` 
        }
        else {
            return `welcom to wrok`
        }
    }
}
console.log(myinfo.skils.join(" | "))
console.log(myinfo.addrs.turky.first)
console.log(myinfo.checkav())
//#####

console.log(this)
console.log(this === window)
function saymaney(){
    console.log(this);
}
saymaney()
//#####

document.getElementById("cl").onclick = function(){
    console.log(this)
}

//#####
let dayorage={
    age : 15 , 
    ageinfo:function(){
        return this.age * 360
    },
    
}
console.log(dayorage.age);
console.log(dayorage.ageinfo());

//#####
let obj = Object.create({})
obj.car_pries = 555500;

console.log(obj)

console.log(`#`.repeat(16))

let berth = {
    age : 15 , 
    info:function(){
        return this.age * 2
    },
    
}
let copyobj = Object.create(berth);
copyobj.age = 25;
console.log(copyobj)
console.log(copyobj.age);
console.log(copyobj.info());
//#######

let obj1 ={
    prop1: 1,
    meth1: function (){
        return this.prop1
    }
}

let obj2 ={
    prop2: 2,
    meth2: function (){
        return this.prop2
    }
}

let targetObject ={
    prop1:777,
    prop2:888,
    prop3:999,
}

let finalobjet= Object.assign(targetObject,obj1,obj2);
finalobjet.prop1  = 200 ;
finalobjet.prop4  = 0 ;
console.log(finalobjet)


let newobject = Object.assign({}, obj1 ,{ prop2:2020 , prop3:2021 ,prop4:2022 , prop5:2023})
newobject.prop1 = 2019
console.log(newobject)

//#########

let myidHtml = document.getElementById("mydiv");
console.log(myidHtml);

let mytagelment = document.getElementsByTagName("P")
console.log(mytagelment)

let myclassElment = document.getElementsByClassName("my_span")
console.log(myclassElment)

let myElment = document.querySelector(".special")
console.log(myclassElment)

let myqueryallElment = document.querySelectorAll(".my_span")
console.log(myclassElment)

console.log(document.forms[0].one.value)
console.log(document.links[1].href)


let elemant =document.querySelector(".js")

console.log(elemant.innerHTML)
console.log(elemant.textContent)

elemant.innerHTML = "Text From <span> main.js </span> File "
elemant.textContent = "Text From <span> main.js </span> File "

document.images[0].src = "http://127.0.0.1:5500/index.html"
document.images[0].alt = "alptal"
document.images[0].title = "photo"
document.images[0].id = "imges"
document.images[0].className = "clss"


let elemantget =  document.querySelector(".link")
// console.log(elemantget.getAnimations("class"))
// console.log(elemantget.getAnimations("href"))

elemantget.setAttribute("href" , "htpps//google.com")
elemantget.setAttribute("href" , "htpps//google.com")
//#####

console.log(document.getElementsByTagName("h1")[0].attributes)

// let myp = document.getElementsByTagName("h1")[0];

// if (myp.hasAttribute("data-src")){
//     myp.removeAttribute("data-src");
// }
// else{
//     console.log(`not it found`)
// }

let mssk = document.getElementsByTagName("h1")[0];
if (mssk.hasAttribute("data-src")){

  if (  mssk.getAttribute("data-src") === ""){
        mssk.removeAttribute("data-src");
    }
    else{
        mssk.setAttribute("data-src","trip") 
    }
}
else {
    console.log("no has any att")

}

// if (document.getElementsByTagName("div")[0].hasAttribute()){
//     console.log("yes has")
// }
// else {
//     console.log("no has any att")

// }


let myElments = document.createElement("div");
let myElmentsAatt = document.createAttribute("date-custom");
let mytext = document.createTextNode ("prodct one ")
let mycomment = document.createComment("this not knaw")

myElments.className = "trping";
myElments.setAttributeNode(myElmentsAatt);
myElments.setAttribute("date-test" , "testing")
// append comment to elemant
myElments.appendChild(mycomment)
// append text to elemant
myElments.appendChild(mytext)

// print
document.body.appendChild(myElments)
console.log(myElments)

//#######

for (let usb = 0; usb < 10; usb++) {

let mymindiv = document.createElement("div");
let myheding = document.createElement("h1");
let myP = document.createElement("p");

let myhedingtext = document.createTextNode( ` [${usb + 1}]  Hi how are you doing `)
let myprgraphtext = document.createTextNode(` [${usb + 1}]  I'm fine , how about yoursulf` )

mymindiv.className ="prodect"

// add heading text
myheding.appendChild(myhedingtext);
// add heading to mymindiv
mymindiv.appendChild(myheding);

// add pargraph text
myP.appendChild(myprgraphtext);
// add pargraph to mynindiv
mymindiv.appendChild(myP);


document.body.appendChild(mymindiv)
}
//#####


let elematsforhtml = document.querySelector("h4");

console.log(elematsforhtml);
console.log(elematsforhtml.children)
console.log(elematsforhtml.children[0])
console.log(elematsforhtml.childNodes[0])

console.log(elematsforhtml.firstChild)
console.log(elematsforhtml.lastChild)

console.log(elematsforhtml.firstElementChild)
console.log(elematsforhtml.lastElementChild)

//############

let mybtn = document.getElementById("btn")

// left btn
mybtn.onclick = function (){
    console.log('free')
}
// right btn
mybtn.oncontextmenu = function (){
    console.log('free')
}
// tach on  btn
mybtn.onmouseleave = function (){
    console.log('free')
}
// scroll
window.onscroll = function(){
    console.log("scroll")
}

//#########

document.links[3].onmouseenter =function(link2){
    console.log(link2)    
}

document.links[3].onclick =function(link2){
    console.log(link2)    
    link2.preventDefault();
}

let userinput = document.querySelector("[name='username']")
let ageinput = document.querySelector("[name='age']")


document.forms[3].onsubmit= function(rr){
    let burger = false;
    let hamburger = false;
    
    if (userinput.value !== "" && userinput.value.length <= 10){
        burger = true ;
        }
    if (ageinput.value !== ""){
        hamburger = true;
    }
    if (burger === false || hamburger === false){
        rr.preventDefault();
    }

}

//########

let twos = document.querySelector(".two")
let ones = document.querySelector(".one")
window.onload = function (){
    twos.focus()
}

ones.onblur = function (){
    document.getElementById('googlelink').click()
}
//########
//classlist

let elemantzozo = document.getElementById("my_id")

console.log(elemantzozo.classList)
console.log(typeof elemantzozo.classList)

// srsh in class
console.log(elemantzozo.classList.contains("osma"))
console.log(elemantzozo.classList.contains("one"))
console.log(elemantzozo.classList.contains("my_id"))
// sarsh in class for how many class
console.log(elemantzozo.classList.item("2"))

elemantzozo.onclick = function (){
    this.classList.remove(" three")
}
elemantzozo.onclick = function (){
    this.classList.add("first-div" , "scend-div")
}

elemantzozo.onclick = function (){
    this.classList.toggle("ali")
}


let JSwithCSS = document.getElementById("my_id-scend")

JSwithCSS.style.color = "white"
JSwithCSS.style.background = "red"
JSwithCSS.style.fontWeight = "bold"
JSwithCSS.style.width = "1000px"

JSwithCSS.style.cssText = "font-weight: bold ; color:white ; background:black"

//JSwithCSS.style.removeProperty("color")
JSwithCSS.style.setProperty("font-size","40px","important");

console.log(document.styleSheets[0].cssRules[0].style.setProperty("height", "10px"))
console.log(document.styleSheets[0].cssRules[0].style.removeProperty("height"))

//#######

let main = document.getElementById("my_id-thred")
let createdP = document.createElement("p")
// before my_id-thred
main.before("Hi in cors js")
// after my_id-thred
main.after("Hi in js")
// element after my_id-thred 
main.after(createdP)
// put in ferst 
main.prepend("Hello jack , how are you doing")
main.prepend(createdP)
// put in last 
main.append("Hello jack , how are you doing")
main.append(createdP)

// main.remove() display: 

// #####
let spasn = document.querySelector(".twos2")
console.log(spasn.nextElementSibling)
console.log(spasn.previousElementSibling)

spasn.onclick = function(){
    spasn.parentElement.style.opacity = '0'
}
spasn.onclick = function(){
    spasn.parentElement.remove()
}


//##########

let my_P = document.querySelector(".gool").cloneNode(true)
let mydives = document.querySelector(".dives")

my_P.id = `${my_P.id}-clone`
mydives.appendChild(my_P)


// my_P.onclick = function (){
//     console.log("Hi jack who are you doing")
// }

let textP = document.querySelector(".jackboy");

// textP.onclick=mone;
function mone(){
    console.log("jack jone")
}

textP.addEventListener("click" , function(){
    console.log("jack how are you man")
})
textP.addEventListener("click", mone)


let copytext = document.querySelector(".copyPargraf");

copytext.onclick=function(){
    let copyP = copytext.cloneNode(true)
    copyP.className= 'clone'
    document.body.appendChild(copyP)
}

document.addEventListener("click" , function (e){
    if (e.target.className === 'clone'){
        console.log("im a clone")
    }
})

//qize time
