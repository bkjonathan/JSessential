import addition from "./sum";

export function mean(values) {
  return addition(values) / values.length;
}

export function asyncAdd(values) {
  return new Promise((resolve)=>{
    setTimeout(() => {
      let total = addition(values);
      console.log(`Async Total: ${total}`);
      resolve(total);
    }, 2000);
  });

}

export { addition };
export * from "./operation";
