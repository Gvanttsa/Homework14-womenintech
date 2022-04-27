//1
let array = [2, 5, 17, 28];
array.push ('javascript', 'python')
array.unshift ('html', 'css')
console.log(array);

array.shift ();
array.pop ();
console.log(array);

//2
let array1 = ['orange', 'banana', 'pear'];
console.log(array1);

array1.push ('apple', 'pineapple')
array1.unshift ('watermelon')
console.log(array1);

array1.splice (2, 0, 'mango')
array1.shift ();
array1.pop ();
console.log(array1);

//3
let array2 = [12, 25, 3, 6, 8, 14, 7, 23]

let result = array2.map (x => x % 3);
console.log(result);

//4
let array3 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

let newarray3 = array3.filter (function (y) {
    return typeof y =="number";
})
console.log(newarray3);

//5
let languages = ['html', 'css', 'javascript', 'python', 'php']

let newLanguages = languages.filter (function(z) {
    return z.length >3;
})

console.log(newLanguages);

//6
let array4 = ['academy', 'of', 'digital', 'industries']. reduce (function(i,o) {
    return i.concat(o);
},
' '
)

console.log(array4);

//7
let item = [12, 'google', 32, null, 'yahoo', 25]

let newitem = item.map (function(q) {
    if (typeof q == 'number') {
        return q*q;
    } else if (typeof q == 'string') {
       return q.toUpperCase ();
    } else {
        return q;
    }
})

console.log(newitem);

//8
let words = ['Madrid', 'Rome', 'Milan', 'Berlin']

let newWords = words.filter (f => f.includes ('m') || f.includes ('M'));
console.log(newWords);