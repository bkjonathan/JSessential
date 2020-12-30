import * as math from './math'
// import * as math from './math'

let data =[290,39,39,58,474,50];

console.log('Addtional',math.addition(data));
// math.asyncAdd(data).then((result)=>console.log(result))

async function doTask() {
    let total = await math.asyncAdd(data);
    console.log(`Main Total: ${total}`);
}
doTask();
// console.log('Multiply',math.multiply(data))
// console.log('Subtract',math.subtract(data))
// console.log('Divided',math.divied(10,2))
// console.log('Mean',math.mean(data))
