// let users = ["Thomas","Soe gyi","Kyaw Gyi","Aung Aung"];
let users = [
  {
    name: "Thomas",
    age:30,
    income:1000000
  },
  {
    name: "Soe gyi",
    age:40,
    income:1200000
  },
  {
    name: "Kyaw Gyi",
    age:20,
    income:1300000
  },
  {
    name: "Aung Aung",
    age:23,
    income:1400000
  }
];
// let newUser = users.map((user)=> ({
//   user
// }));

// console.log(newUser);


// let filterArray = users.find((user)=>user.age <= 25);
// users.reverse()
// console.log(filterArray);
// let totalIncome = users.reduce((total,user)=>(total += user.income),0);
let findIn = users.findIndex((user)=>user.name == "Aung Aung")
users.splice(findIn,1)
console.log(users);

