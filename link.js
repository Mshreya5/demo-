const fetchdata=async()=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response);
  const data= await response.json();
  console.log(data);
};
fetchdata();


const Fetchdata=async()=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response.ok);
  if(response.ok===true){
    const data= await response.json();
  console.log(data);
  }
};
Fetchdata();


const FetchData=async()=>{
    try{
  const response=await fetch("https://jsonplaceholder.typicode.com/ushkhers");
  const response1=await fetch("https://jsonplaceholder.typicode.com/ushkhers");
const response2=await fetch("https://jsonplaceholder.typicode.com/uskkhers");
if(response1.ok){
    const data= await response.json();
  console.log(data);
}
  if(response.ok===true){
    const data= await response.json();
  console.log(data);
  }
if(!response.ok|| !response1.ok||!response2.ok){
throw new Error("something went wrong");
}
    }catch (err){
        console.log("Error",err);  
    }
};
FetchData();
