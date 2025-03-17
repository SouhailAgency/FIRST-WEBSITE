//ترتيب العمليات في جافاسكربت: https://rb.gy/a2zng6
// let = ينشئ متغير جديد
// typeof = يطبع نوع المتغير
//variable "Number"
let a = 10
let b = 2.5

console.log(typeof a)
console.log(typeof b)
console.log(a + b)
console.log(a / b)
console.log(a * b)
console.log(a - b)

//Variable "String"
let Title = "الدرس الأول"
let js = "JavaScripte"

console.log(Title)
console.log("الدرس الأول\"")
console.log(Title + " " + js)

//Variable True Or False "Boolean"
let raining = false
let sunny = true
let cloudy = false

console.log(typeof raining)
    //AND = &&
    // OR = ||
console.log(raining && cloudy)
console.log(raining || sunny)
console.log(raining && sunny)
console.log(sunny && cloudy || raining)

//Variable "undefined = غير معرف OR Null = فارغ"
let nulll

console.log( typeof nulll)

//المقارنة بين المتغيرات
    // هل تساوي =  "=="
    // هل يخالف = "!="
    // أكبر من = ">"
    // أصغر من = "<"
    // أكبر من او يساوي او اصغر من او يساوي = ">=", "<="
let c = 1
let d = 2
console.log(a == b)
console.log(a != b)
console.log(raining == cloudy)

{
    const a = "10";
    const b = "20";
    
    //تحويل صريح لنوع المتغير Explicit
    console.log(parseFloat(a) + parseInt(b)); // type coercion
    
    //تحويل تلقائي لنوع المتغير Implicit
    console.log(a * b);
    console.log(a - b);
    console.log(a / b);
    
    //string to number تحويل نص لرقم
    ////parse Int رقم صحيح بدون كسور
    ////parse Float رقم عشري 
}

{
const a = 1;
const b = "1";
console.log(a === b); //المقارنة دون تغيير نوع المتغيير
}

{
//Array المصفوفة
const langs = ["Arabic", "English", "French", "Japans"];
langs.push("Germany");
console.log(langs);
console.log(typeof(langs));
console.log(langs[0]);
}