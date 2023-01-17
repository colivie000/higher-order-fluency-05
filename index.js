const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:23}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:24}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:23},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:22},
{name:'Carmen', job:'Marcy Lab School',language:'JavaScript', age:21},
{name:'Itzel', job:'Marcy Lab School',language:'JavaScript', age:22},
{name:'Ray', job:'Square Space',language:'JavaScript', age:21},
{name:'Jan', job:'Square Space',language:'JavaScript', age:22},
{name:'Uzma', job:'Thyme Care',language:'JavaScript', age:22}];

// Question 1
const averageAge = objArr => Math.round(objArr.reduce((acc, cur) => acc + cur.age, 0)/objArr.length);
console.log('averageAge Function');
console.log(averageAge(alumni)); // 22


// Question 2
const orderedAlumni = objArr => objArr.sort((a, b) => b.age - a.age);
console.log('orderdedAlumni Function');
console.log(orderedAlumni(alumni));
/*
 returns [
  { name: 'Stephanie', job: 'JPMorgan', language: 'JavaScript', age: 24},
  { name: 'Jarrit', job: 'TPT', language: 'JavaScript', age: 23 },
  { name: 'Devonte', job: 'WW', language: 'JavaScript', age: 23 },
  { name: 'Enmanuel', job: 'Asana', language: 'JavaScript', age: 23 },
  { name: 'Shemar', job: 'SquareSpace', language: 'JavaScript', age: 23},
  { name: 'Cielo', job: 'NYT', language: 'JavaScript', age: 22 },
  { name: 'Itzel', job: 'Marcy Lab School', language: 'JavaScript', age: 22},
  { name: 'Jan', job: 'Square Space', language: 'JavaScript', age: 22 },
  { name: 'Uzma', job: 'Thyme Care', language: 'JavaScript', age: 22 },
  { name: 'Carmen', job: 'Marcy Lab School', language: 'JavaScript', age: 21},
  { name: 'Ray', job: 'Square Space', language: 'JavaScript', age: 21 }
]
*/

// Question 3
const allUseJavaScript = objArr => objArr.every((obj) => obj.language == 'JavaScript');
console.log('allUseJavaScript Function');
console.log(allUseJavaScript(alumni)); // returns: true

