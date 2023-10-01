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
 ${b}  ${c} ${100 * 23}`);


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
let w = "Ahmad Muhammad Nur Amer Aisha" ;
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













