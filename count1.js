// //     const btn=document.getElementsByTagName("button");
// //     const incbtn= btn[0];
// //     const decbtn= btn[1];
// //     const resetbtn= btn[2];
// //     const p=document.querySelector("#val");
// //     let val =0;
// //     let inc=true;

// //     let pause=()=>{
// //         if (val>=10){
// //             inc=false;
// //         }
// //     };
// //      incbtn.addEventListener("click",()=>{
// //         if(inc){
// // val=val+1;
// // p.textContent=val;
// //         }
// //         pause();
// // });

// //     decbtn.addEventListener("click",()=>{
// //         if(inc){
// // val=val-1;
// // p.textContent=val;
// //         }
// //         pause();
// // //after 10 no increment and decrement should happen
// //     });

// //     resetbtn.addEventListener("click",()=>{
// // val=0;
// // p.textContent=val;
// //     });
   

// //      const handler=(vall)=>{
// //    if(inc){
// //         vall?(val=val+1):(val=val-1);
// //         val>=0 ? (p.style.color="green"):(p.style.color="blue");
// //         p.textContent=val;
// //     }
// //     pause();
// // };
// // const init=()=>{
// //     val=0;
// //     p.textContent=val;
// //     inc=true;
// // };

// // incbtn.addEventListener("click", ()=>handler(true));
// //  incbtn.addEventListener("click",()=> handler(false));
// //  resetbtn.addEventListener("click", init);

 
// //JSON javascript object notation
// var obj={
// id:1,
// name:"Name",
// email:"eg@com",
// data:{
//     address:"Delhi",
//     contact:90089,
//     aadhar:7865,

// info:{
// DOB: "5th oct",
// mothertongue:"Tulu",
// },
// },
// };
// console.log(obj);
// console.log(obj.email);
// console.log(obj.id);
// console.log(obj.name);
// console.log(obj.n);
// console.log(obj.data);
// console.log(obj.data.address);
// console.log(obj.data.contact);
// console.log(obj.data.aadhar);
// console.log(obj.data.info);
// console.log(obj.data.info.DOB);
// console.log(obj.data.info.mothertongue);

// console.log(obj);
// JSON.stringify(obj);
// console.log(obj.data);

// // array of objects
// let arr=[{id:1,name:"ab"},
//     {id:2,name:"ab"},
//     {id:3,name:"ab"},
//     {id:4,name:"ab"},
// ];
// console.log(arr);

// //forEach works on current array and does not return new array. it is similar to map
// arr.forEach((el)=>console.log(el));
// arr.map((el)=>console.log(el));

// console.log(arr);
// arr.forEach((el)=>console.log(el));
// const ca=arr.map((el)=>el.id=el.id*el.id);
//     console.log(ca);


// // const a=arr.map((el)=>{el.id=el.id*el.id;
// //     return el;
// // });
// // console.log(a);

// const a=arr.map((el)=>{el.id=el.id*el.id;
//     return{ 
//         i:el.id,
//         n:el.name,
//     };
// });
// console.log(a);

// const b=[0,0,0,0,0,0,0,0,0];
// // {
// //     id:index,
// //     name:index+el,
// //     as:id and name
// // }

// const c=b.map((el,index)=>{
//     // let n=el+index;
//     // const asd =index+n;
//     return{
//         id:index,
//         name: index+el,
//         as:index+index+el,
//     };
// })
// //.filter((el)=>el.id%2==0, (el)=>el.name%2==0 ,(el)=>el.as%2==0)//--- to print only even no. in all 3 (id,name,as)
// .filter((el)=>el.id%2==0 && el.name%2==0 && el.as%2==0)
// // .filter((el)=>el.id%2==1 || el.name%2==1|| el.as%2==1)

// // .filter((el)=>el.id%2==0);  ---for even no.
// // .filter((el)=>el.id%2==1); ---for odd no.
// console.log(c);

//***//

// const fetchData = async()=>{
//     const response=await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
      
// };

// fetchData();--here we get o/p because link is correct



// const fetchData = async()=>{
//     const response=await fetch("https://jsonplaceholder.typicode.com/userhs");
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
      
// };

// fetchData();--- if link is wrong we can't get o/p---

//console.log("Hello");
// const fetchData = async()=>{
//     const response=await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response.ok);
//  if(response.ok===true){  // here if reponse.ok is true then only it will work
//     const data = await response.json();
//     console.log(data);
//     }  
// };

// fetchData();

// console.log("Hello");

const fetchData=async()=>{
    const re= await fetch("https://jsonplaceholder.typicode.com/users");
   // console.log(re.ok);
    if(re.ok===true){
    const data=await re.json();
    console.log(data); 
    }
};
fetchData();

// const FetchData=async()=>{
//     const rep= await fetch("https://jsonplaceholder.typicode.com/todos");
//     //console.log(rep.ok);
//     if(rep.ok===true){
// const dat=await rep.json();
//     console.log(dat); 
//     }
// };
// FetchData();

// const Fetchdata=async()=>{
//     const Re= await fetch("https://jsonplaceholder.typicode.com/posts");
//     //console.log(Re.ok);
//     if(Re.ok===true){
//  const Data=await Re.json();
//     console.log(Data); 
//     }
// };
// Fetchdata();

const fetchdata=async()=>{
    try{
        //successful can have to write code inside try
        const re= await fetch("https://jsonplaceholder.typicode.com/users");
    if(re.ok===true){
    const data=await re.json();
    console.log(data); 
    }else{
        throw new Error("something is wrong");
    }
    }catch(err){
        console.log("Error",err);
    }
};
fetchdata();