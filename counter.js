// // //tag
// // //var body = document.getElementsByTagName("body");
// // //console.log(body[0]);
// // //let a=[1,4,5,6,7];
// // //console.log(a[3]);

// // //console.log(a);
// // //initial value,condition,increment/decrement
// // //for(let i=0;i<a.length;i++){
// //    // a[i]=a[i]*3;
// //    // console.log(a[i]);
// // //}
// // //console.log(a);

// // //let b=a.map((el,ui)=>{
// //    // return el*ui;

// // //});
// // //console.log(a);
// // //console.log(b);

// // //***//

// // let a=[1,2,3,4,5,6,7,8,9,10];
// // console.log(a);
// // for (let i=0;i<a.length;i++){

// //     console.log(`2*${a[i]}=`,a[i]);
// // }
// // console.log(a);

// // let b=a.map((el,ui)=>{
// //     console.log(`2*${el}=`,el*2);
// // });
// // console.log(a);

// // //* *//


// // let c=[1,2,3,4,5,6,7,8,9,10];
// // console.log(c);
// // for (let i=0;i<c.length;i++){

// //     console.log(`3*${c[i]}=`,c[i]);
// // }
// // console.log(c);

// // let d=c.map((el,ui)=>{
// //     console.log(`3*${el}=`,el*3);
// // });
// // console.log(c);

// // //to check only value use "==" to check value and type use "==="//

// // let table=(param)=>{

// // };
// // table(3);
// // let aa =45;
// // if(aa==4){
// // console.log("value is same");
// // }else if(a==40){
// //    console.log("value is 40"); 
// // }else if(a==90){
// //    console.log("value is 90"); 
// // }else{
// //     console.log("value is not same");
// // }

// // //**//

// let mark=80;
// if(mark>=90){
//     console.log("trip");
// }else if(mark>=80){
//     console.log("party");
// }else if(mark>=70){
// console.log("game");
// }else{
//     console.log("nothing");
// }


// //***//


// // // mark> 70? console.log("true"):console.log("false")
// // //condition?true value:fale value
//   mark> 70?table(3):table(2);

// //   //here o/p is false because we are checking address of "e" and"f"

//  let e=[1,3,5];
//  let f=[1,3,5];
//  console.log(e==f);
//  console.log(e===f);

// // //here o/p is true because we are checking value of "ee" and "ff"

//  let ee=[1,3,5];
//  let ff=[1,3,5];
//  console.log(a[ee]==a[ff]);
//  console.log(a[ee]===a[ff]);

// // //here o/p is false because we are checking address of empty array 


//  let ae=[1,3,5];
//  let af=[1,3,5];
//  console.log([]==[]);
//  console.log([]===[]);

//  let ab=[1,2,3,4,5,6,7,8,9,10]
//  let ba=ab.filter((el)=>{
// return el%2==1;
//  });
// console.log(ba);//odd number


//  let aab=[1,2,3,4,5,6,7,8,9,10]
//  let baa=ab.filter((el)=>{
// return el%2==0;
//  });
// console.log(baa);//even number


// let abb=[1,2,3,4,5,6,7,8,9,10]
//  let bba=ab.filter((el)=>el>=5).map((el)=>el*7);//return can be skipped if only single statement is there
//  let cc=b.map((el)=>el*5);
// console.log(bba);

// let a=[1,2,3,4,5,6,7,8,9,10]
//  let b =a.reduce((acrtcc,cur,index)=>{
//     return acrtcc+cur;
//  },0/10);
//  console.log(b);

//  let acc=0/10
//  acc=acc+1;
//  acc=acc+2;
//  acc=acc+3;
//  acc=acc+4;
//  acc=acc+5;
 //acc=acc+6;

// let a=[1,2,3,4,5,6,7,8,9,10]
//   let acc=0
//  acc=acc+1;
//  acc=acc+2;
//  acc=acc+3;
//  acc=acc+4;
//  acc=acc+5;
//  acc=acc+6;
// const evenSum=a.filter((el)=>el%2==0).reduce((a,e)=>a+e);
// const oddSum=a.filter((el)=>el%2==1).reduce((a,e)=>a+e);
// console.log(evenSum,oddSum)//o/p=30,25

//***//
const aa=[0,0,0,0,0,0,0,0,0,0];

const se=aa
.map((el,i)=>i+1)
.filter((el)=>el%2==0)
//.filter((el)=>el>5)
.reduce((a,e)=>a+e);

const so=aa
.map((el,i)=>i+1)
.filter((el)=>el%2==1)
.filter((el)=>el>5)
.reduce((a,e)=>a+e);

console.log(se,so);





