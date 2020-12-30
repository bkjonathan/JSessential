// let data = new Object();
// data.name = "Thomas";
// data.location = "Mandalay";

let username = 'Thomas';
let data ={
  name:username,
  location:"Mandalay",
  printMsg:function () {
    console.log('Hello!' + data.name +'.Are you from '+data.location+'?')
  }
}
// let test = data;
let test = Object.assign({},data);
// let test = JSON.parse(JSON.stringify(data));
test.name = "Mg Mg";
console.log('From Data',data);
console.log('From Test',test);

test.printMsg();
