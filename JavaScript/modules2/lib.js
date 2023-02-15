// //預設的輸出
// let x="Hello";
// // export default x;
// //非預設的輸出
// let data=[3,4,5];
// let obj={x:10,y:20};
// // export{data,obj};
// // 整合
// export{x as default,data,obj};


let add=function(n1,n2){
    console.log(n1+n2);
};
let multiply=function(n1,n2){
    console.log(n1*n2);
};
let math={
    add:add,multiply:multiply
};
export default math;
export{add,multiply}
