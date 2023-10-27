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

for (let i = 0; i < 10; i++){
    console.log(i)
}

let myfemily = [  "Ali" , "yousuf" , "nasa" , "jak" , "sjak"];

// console.log(myfemily[0]);
// console.log(myfemily[1]);
// console.log(myfemily[2]);
// console.log(myfemily[3]);
// console.log(myfemily[4]);
// console.log(myfemily[5]);

//while loop
for(let i = 0 ; i < 5 ; i++){
     console.log(myfemily[i]);
}



