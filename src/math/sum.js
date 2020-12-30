export default function (value) {
    return value.reduce((total,v)=>(total+=v),0)
}
