function echo(msg){
    console.log(msg);
}
function add(n1,n2){
    console.log(n1+n2);
}
// export default echo;
//export default 資料

//如果想同時輸出這兩個函式

export default {
    echo:echo,
    add:add
    //方法的名稱:方法對應的資料
};