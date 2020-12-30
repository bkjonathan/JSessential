export function multiply(value) {
    return value.reduce((total,val)=>total*val,1)
}

export function subtract(value) {
    return value.reduce((total,val)=>total - val,1)
}

export function divied(first,second) {
    return first/second;
}
