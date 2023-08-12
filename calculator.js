// console.log("hello")
let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn')
const time = document.getElementById('time')
for(x of btn)
{
    x.addEventListener('click',(a)=>{
        btntext=a.target.innerText;
        if(btntext=="x"){
            btntext = "*"
        }
        if(btntext=="+"){
            btntext = "+"
        }
        if(btntext=="-"){
            btntext = "-"
        }
        if(btntext=="/"){
            btntext = "/"
        }
        if(btntext=="."){
            btntext = "."
        }
        screen.value += btntext
    }
    )
}
console.log(Math.PI)
function sin(){
    screen.value =  Math.sin(screen.value * Math.PI/180)
}
function cos(){
    screen.value =  Math.cos(screen.value * Math.PI / 180)
}
function tan(){
    screen.value =  Math.tan(screen.value * Math.PI / 180)
}
function log(){
    screen.value =  Math.log10(screen.value)
}
function ln(){
    screen.value =  Math.LN2(screen.value)
}
function power(){
    screen.value =  (screen.value*1)**btntext
}
function root(){
    screen.value =  Math.sqrt(screen.value,2)
}
function pi(){
    screen.value +=  3.1415926535
}
function e(){
    screen.value = screen.value * (10**btntext)
}
function del(){
    screen.value =  screen.value.substr(0, screen.value.length-1)
}
function ac(){
    screen.value = ""
}
function percent(){
    screen.value = screen.value/100
}
const CT = document.querySelector('.icon');
const togglerBtn= document.querySelector('.Theme-toggler');
function changeTheme(){
    let calculator = document.querySelector('.first');
    calculator.classList.toggle('second');
}
function changetheme(){
    let Calculator = document.querySelector('.second');
    Calculator.classList.toggle('third')
}
function bo(){
    screen.value+= "("
}
function bc(){
    screen.value+= ")"
}
console.log("hello world 111")
function setTime(){
    let t = new Date();
    h = t.getHours();
    m = t.getMinutes();
    s = t.getSeconds();
    console.log(t)
    console.log(h + m + s)
    time.innerText = h + " : " + m + " : " + s
}
function message(){
    alert("Hello")
}
setInterval(setTime, 1000)
window.addEventListener('load', setTime())
// // //BMI for John 1

// // function BMI_John1(a, b) {
// //   let c = a / b ** 2;
// //   console.log(c);
// // }
// // BMI_John1(78, 1.69);

// // //BMI for Mark 1

// // function BMI_Mark1(a, b) {
// //   let c = a / b ** 2;
// //   console.log(c);
// // }
// // BMI_Mark1(92, 1.96);

// // //alternative method

// // //function BMI_Mark1(a, b){
// // // let c = a/b**2;
// // // return c;
// // //}
// // //console.log(BMI_Mark1(92,1.96))

// // // BMI for John2

// // function BMI_John2(a, b) {
// //   let c = a / b ** 2;
// //   console.log(c);
// // }
// // BMI_John2(85, 1.88);

// // // BMI for Mark 2

// // function BMI_Mark2(a, b) {
// //   let c = a / b ** 2;
// //   console.log(c);
// // }
// // BMI_Mark2(95, 1.88);

// // if (BMI_John1 > BMI_Mark1) {
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }

// // if (BMI_John2 > BMI_Mark2) {
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }

// // function multiply(e, f) {
// //   let v = e * f;
// //   let x = 2 + 3;
// //   return v;
// // }

// // console.log(multiply(6, 5));

// // let person = {
// //   first: "Oyero",
// //   age: 30,
// //   last: "alusoft",
// //   details: function () {
// //     return this.first + " " + this.last + " " + this.age;
// //   },
// // };
// // console.log(person);
// // // console.log(person.first,person.last,person.age);
// // // console.log(person['first'], person['age'])

// // // console.log(typeof person);

// // // function Add(a, b) {
// // //  let c = a + b;
// // // let v = a * b
// // // console.log(c,v)

// // // }
// // // //Calling or Invoking a Function
// // // Add(4, 5),
// // // Add(10,5);
// // // Add(5,2)

// // let person1 = {
// //   Lastname: "Oyero",
// //   Firstname: "Temitope",
// //   Age: 20,
// //   details: function () {
// //     return this.Firstname + " " + this.Lastname + " " + this.Age;
// //   },
// // };
// // console.log(person1.details());
// // v = "temitope Oyero";
// // let w = v.length;
// // console.log(v);

// // let x = "John";
// // let t = x.split(",");
// // console.log(t);

// // let address = "          AISHA         ";
// // let y = address.trimStart().length;
// // console.log(y);

// // let text1 = "Alusoft";
// // let text3 = text1.charCodeAt(3);
// // console.log(text3);

// // let str = "a,b,c,d,e";
// // arr = str.split(",");
// // console.log(arr[3]);

// // let num =
// //   "All the passengers should be moved to the boarding door 23, door 23!";
// // let z = num.replaceAll("door", "window");
// // console.log(z);

// // let getExt = "Olatunji.pdf";
// // let answer = getExt.substring(9, 12);
// // console.log(answer);

// // let que = "Olatunji,.txt,.pdf,.jpg";
// // let ans = que.split(",");
// // console.log(ans[1]);

// // // function myfunction(a) {
// // //   let filename = "file.css";
// // //   let result = filename.split(".")[1];
// // //   console.log(result);
// // // }
// // // console.log(myfunction());

// // function extension(a) {
// //   return a.split(".")[1];
// // }
// // console.log(extension("index.pdf"));
// // console.log(extension("transcorp.jpeg"));
// // // let r = "apple";
// // // let q = Number(r);
// // // console.log(q);

// // // function isEven(a) {
// // //   if (a % 2 === 4) {
// // //     console.log(true);
// // //   } else {
// // //     console.log(false);
// // //   }
// // // }
// // // isEven(2);

// // const fruits = [1, 2, 3, 4, 6, 10, 20];
// // for (const fruit of fruits) {
// //   console.log(fruit);
// // }

// // function rev(a) {
// //   let x = a.split("").reverse().join('');
// //   return x;
// // }
// // console.log(rev("yeast"));

// let arr1 = [1,2,3,4,5,6,8,9,10,12];
// let arr2 = arr1.map(function(v){
//   for (let i = 0; i % 2 == 0; i+=2){
//     v[i] = v[i]  + "-";
//   }
//   return v;
// })
// console.log(arr2)




// // // // // function formatName(name) {
// // // // //   name = name.trim().toLowerCase().split(/\s+/);
// // // // //   name[0] = name[0].toUpperCase();
// // // // //   for (let i = 1; i < name.length; i++)
// // // // //     name[i] = name[i][0].toUpperCase() + name[i].slice(1);
// // // // //   alert(name.join(" "));
// // // // //   return name.join(" ");
// // // // // }

// // // // // // let button = document.getElementById('btn').addEventListener('click',
// // // // // // function formatName(){
// // // // // //   let getValue = document.getElementById('input').value;
// // // // // //   let message = "Welcome" + " " + getValue;
// // // // // //   alert(message);
// // // // // //   console.log(getValue);
// // // // // // }
// // // // // // )
// // // // // function str(a) {
// // // // //   let p = a;
// // // // //   let q = a.split("").reverse().join("");
// // // // //   if (p === q) {
// // // // //     console.log(true);
// // // // //   } else {
// // // // //     console.log(false);
// // // // //   }
// // // // // }
// // // // // str("cat");

// // // // // function snakeCase(c) {
// // // // //   c = c.toLowerCase();
// // // // //   c = c.split("_");
// // // // //   for (let k = 1; k < c.length; k++) {
// // // // //     c[k] = c[k][0].toUpperCase() + c[k].slice(1);
// // // // //   }
// // // // //   return c.join("");
// // // // // }
// // // // // console.log(snakeCase("file_name_cat"));

// // // // // function onlyInitials(fname) {
// // // // //   fname = fname.toUpperCase();
// // // // //   fname = fname.split(" ");
// // // // //   for (let i = 1; i < fname.length; i++) {
// // // // //     fname[i] = fname[i][0];
// // // // //     fname[i] = fname[i][0] + ".";
// // // // //   }
// // // // //   return fname.join(" ");
// // // // // }
// // // // // console.log(onlyInitials("oyero temitope oluwaseun"));

// // // // // function toUpper(str) {
// // // // //   str = str[0].toUpperCase() + str.slice(1);
// // // // //   return str;
// // // // // }
// // // // // console.log(toUpper("animal"));

// // // // // function convert(arr) {
// // // // //   arr = arr.split("");
// // // // //   return arr;
// // // // // }
// // // // // console.log(convert("ade"));

// // // // // // let num = [2,3,4];
// // // // // // let num1 = num.map(myFunction);

// // // // // // function myFunction(value){
// // // // // //   return value*2
// // // // // // }
// // // // // // console.log(num1)

// // // // // let num = [16,6,10,5,6,1,4];
// // // // // let num1 = num.reduce(function(total,value,index,array){
// // // // //   return total+=value/array.length;
// // // // // },0)
// // // // // console.log(num1)
// // // // // console.log(num.length)

// // // // //check if an input is an array
// // // // function check(a) {
// // // //   if (Array.isArray(a) == true) {
// // // //     console.log("it is an array");
// // // //   } else {
// // // //     console.log(false);
// // // //   }
// // // // }
// // // // check("ade");

// // // // //clone an array
// // // // let x = ["cat", "dog", "cow"];
// // // // function clone(arr) {
// // // //   arr = x.slice(0);
// // // //   return arr;
// // // // }
// // // // console.log(clone());
// // // // console.log(x);

// // // // // return the first character of an array
// // // // function firstEl(first) {
// // // //   first = x.shift();
// // // //   return first;
// // // // }
// // // // console.log(firstEl());

// // // // //return the last character of an array
// // // // function lastEl(last) {
// // // //   last = x.pop();
// // // //   return last;
// // // // }
// // // // console.log(lastEl());

// // // // //convert array to string
// // // // let y = ["I", "am", "a", "Boy"];
// // // // function toString(string) {
// // // //   string = y.join(" ");
// // // //   return string;
// // // // }
// // // // console.log(toString());

// // // // //map()
// // // // let Test_data = [16, 4, 5, 6, 10, 7, 9];
// // // // let test_data = [1, 3, 13, 14, 5, 10, 9];
// // // // let test1 = Test_data.map((v) => v * 2);
// // // // let test2 = test_data.map((v) => v * 2);
// // // // console.log(test1, test2);

// // // // //filter
// // // // let test3 = Test_data.filter((v) => v <= 5);
// // // // let test4 = test_data.filter((v) => v <= 5);
// // // // console.log(test3, test4);

// // // // //reduce

// // // // let test5 = Test_data.reduce((acm, v, i, arr) => (acm += v / arr.length), 0);
// // // // let test6 = test_data.reduce((acm, v, i, arr) => (acm += v / arr.length), 0);
// // // // console.log(test5 + " " + test6);

// // // // // let arr1 = new Array(7);
// // // // // let arr2 = arr1.fill(1,2,6)
// // // // // console.log(arr2)
// // // // // console.log(arr1);
// // // // // let arrFrom = Array.from({length:7},(acc,i) => i+1)
// // // // // console.log(arrFrom)

// // // // // let arrFrom = Array.from({length:7}, function (acm,i){
// // // // //   return i + 1
// // // // // })
// // // // // console.log(arrFrom)

// // // // // let arr = [1, 2, [3, [4]], [5, ["a"]], 6, 7, [10, [15, [20]]]];
// // // // // let arrFlat = arr.flat(3);
// // // // // console.log(arrFlat);

// // // // // let arr1 = [1, 2, 3, 4, 6, 7, 8, 10];
// // // // // let arr2 = arr1.map(function (v) {
// // // // //   for (let i = 0; i < arr1.length; i++) {
// // // // //     if (v % 2 == 0) {
// // // // //       v = v + " -";
// // // // //     }
// // // // //   }
// // // // //   return v;
// // // // // });
// // // // // console.log(arr2);

// // // // // let arr1 = [1, 2, 3, 4, 6, 7, 8, 10];
// // // // // let arr2 = arr1.map(function (v) {
// // // // //   let z = (v%2==0)
// // // // //   for(i = 0; i<arr1.length; i++){
// // // // //     if (arr1 = z,z){
// // // // //       z = z + "-"
// // // // // }
// // // // // }
// // // // //   return z
// // // // // });
// // // // // console.log(arr2);

// // // // let sort = [-1, 3, 5, -3, 10];
// // // // function sorted(number) {
// // // //   number = sort.sort(function (a, b) {
// // // //     return a - b;
// // // //   });
// // // //   return number;
// // // // }
// // // // console.log(sorted());
// // // // console.log(typeof sorted);
// // // // let Cars = ["benz", "toyota", "RR"];
// // // // let carKeys = Cars.includes("RR");
// // // // // console.log(carKeys);
// // // // // let key = "";
// // // // // for (const e of carKeys){
// // // // //   key += e ;
// // // // // }
// // // // // console.log(key)
// // // // // for (const key of carKeys)
// // // // //   console.log(key)

// // // // // let d = new Date(2022, 8, 16 ,0 ,0 ,0);
// // // // // d = d.getTime();
// // // // // console.log(d);

// // // // // let f = new Date (1663542000000);
// // // // // console.log(f)

// // // // // let h = f-d;
// // // // // console.log(h)
// // // // function getDate (){
// // // //  let d = new Date(2022,8,16);
// // // // //  d = d.getTime()
// // // //  let f = new Date (2022,8,19);
// // // // //  f = f.getTime()
// // // //  console.log(d)
// // // //  return f-d
// // // // }
// // // // console.log(getDate())



// // // function insertHyphen (num){
// // //   let txt = num.split('');
// // //   let numArr = txt.map(Number);
// // //   for (i = 0; i<numArr.length; i++){
// // //     if (numArr[i-1]%2==0 && numArr[i]%2==0){
// // //       numArr.splice(i,0,'-')
// // //     }
// // //   } 
// // //   return numArr.join('')
// // // }
// // // console.log(insertHyphen('124346782'))

// // // function insertHyphen (num){
// // //   let result = [];
// // //   let numArr = num.split('');
// // //   for(let i = 0; i < numArr.length; i++){
// // //     if (numArr[i-1]%2==0 && numArr[i]%2==0){
// // //       result.push('-', numArr[i])
// // //     } else {result.push(numArr[i])}
// // //   }
// // //   return result.join('')
// // // }
// // // console.log(insertHyphen('12346435'));


// // // // let d = new Date()
// // // // let local = navigator.language;
// // // // const options = {
// // // //     year : 'numeric',
// // // //     month: 'numeric',
// // // //     day : 'numeric',
// // // //     hour: 'numeric',
// // // //     minutes : 'numeric',
// // // //     second:'numeric',
// // // //     weekday: 'short',
// // // // }
// // // // let int = new Intl.DateTimeFormat(local,options).format(d);
// // // // console.log(int)

// // // function getDate (d){
// // //    d = new Date("2022-09-24");
// // //    f = d.getDay();
// // //    if (f!=0 && f<=2){
// // //     console.log("Week Start")
// // //    } else if (f >= 3 && f <= 4 ){
// // //     console.log("Mid-Week")
// // //    }else{
// // //     console.log("Week End")
// // //    }
// // //    return f
// // // }
// // // console.log(getDate())

// // // // function getDay (a){
// // // //   a = new Date("2022-06")
// // // //   b = new Date ("2022-03-10")
// // // //   result = []
// // // //   for (i=0; i<=6;i++){
// // // //     result.push(a.getDay())
// // // //   }
// // // //   return result
// // // // }
// // // // console.log(getDay())

// // // let x = [1,2,200,0,-400,-1]
// // // let y = Math.min(x)
// // // console.log(y)
// // // console.log(Math.min(1,2,200,0,-400,-1))
// // // console.log(Math.max(1,2,200,0,-400,-1))


// // // function countWeekEnd(start,end){
// // //    start = new Date(start)
// // //    end = new Date(end)
// // //    diff = end - start;
// // //    dayDiff = diff/(1000*60*60*24)
// // //    weekDiff = dayDiff/7
// // //    let weekEnd = Math.floor(weekDiff)*2
// // //    let leftover = dayDiff % 7
// // //    if (leftover>0){
// // //       if(start.getDay()==6 && leftover>1){
// // //          weekEnd += 2
// // //       }else if (start.getDay()){
// // //          weekEnd+1
// // //       }
// // //    }
// // //    return weekEnd
// // // }
// // // console.log(countWeekEnd("2022-07-20","2022-09-22"))
// // // let s = new Set([1,2,3,4,5])
// // // let x = ""
// // //  s.forEach (function(value){
// // //     return x+=value*2 + ","
// // // })
// // // console.log(x)
// // // console.log(s.values())

// // const fruits = new Map();
// // fruits.set("apples", 500);
// // fruits.set("bananas", 300);
// // fruits.set("oranges", 200);
// // console.log(fruits)
// // // console.log(fruits.get("apples"))
// // let fruit = "";
// // // fruits.forEach((v,k)=>fruit+=k + ":" + v)
// // // console.log(fruit)
// // for(const q of fruits.entries()){
// //     //  fruit+= q + ":::"
// //     console.log((q))
// // }
// // console.log(fruit)
// // // try {
// // //     adddlert("Welcome guest!");
// // //   }
// // //   catch(err) {
// // //     console.log(err.message) ;
// // //   }

// // // let person = {
// // //     fname: "John",
// // //     lname: "Doe",
// // //     Age : 21,
// // //     fullname: function (a){
// // //          a= this.fname + " " + this.lname + " " + "is a boy" + ", and he is " + this.Age + " years old";
// // //          return a
// // //     }
// // // }
// // // // console.log(person.fullname())
// // //   let person1 = {
// // //     fname: "Thomas",
// // //     lname:"Partey",
// // //     // Age: 29
// // //   }
// // //   console.log(person.fullname.call(person1))
// // // const person = {
// // //     firstName  : "John",
// // //     lastName   : "Doe",
// // //     id         : 5566,
// // //     myFunction : function() {
// // //       return this;
// // //     }
// // //   };
// // //   console.log(person.myFunction())
// // jump = () => console.log("I can Jump");
// // jump();
// // Hello = x => "Hello" + x;
// // console.log(Hello(" World"))




// // class person{
// //     constructor(fname,lname,age){
// //         this.fname=fname;
// //         this.lname=lname;
// //         this.age=age
// //     }
// // }
// // let person1 = new person("John", "Doe",21)
// // let person2 = new person("Ade", "Geji",24)
// // console.log(person1)
// // console.log(person2)

