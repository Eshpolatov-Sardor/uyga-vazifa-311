
let arr =[
    {
        id:1,
        name:"for",
        price:200,
    },
    {
        id:2,
        name:"for",
        price:300,
    },
    {
        id:3,
        name:"for",
        price:400,
    }
]
arr.sort((a, b) => b.price - a.price);
for(let value of arr){
    document.write(value.price,'   kamayish tartib    ')
    // console.log(value.price);
}