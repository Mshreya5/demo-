const students = [
 { id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
 { id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
 { id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
 { id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
 { id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
 { id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
 { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
 { id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
 { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
 { id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
];

//map
//1.
const name= students.map(students=>students.name);
console.log(name);

//2.
const nc=students.map(students=>({
    Name:students.name,
    Course:students.course
}));
console.log("name and course",nc);

//3.
const status=students.map(students=>({
    name:students.name,
    status:students.marks >= 60? "pass" : "fail"
}));
console.log("status",status);

//4.
const nCString = students.map(function(student) {
  return student.name + " - " + student.course;
});
console.log(nCString);


//5.
const tmark=students.map(students=>({
    marks:students.marks+5 
}));
console.log("Marks after adding 5",tmark);

//filter
//1.
const cs=students.filter(students=>students.course==="Computer Science");
console.log("CS Students",cs);

//2.
const m80=students.filter(students=>students.marks>=80);
console.log("marks above 80",m80);

//3.
const fnp=students.filter(students=>students.feesPaid===false);
console.log("fees not paid:",fnp);

//4.
const am=students.filter(students=>students.age>20 && students.marks>70);
console.log("student age>20 and mark>70",am);

//5.
const mech=students.filter(students=>students.course==="Mechanical" && students.marks<85);
console.log("mech with mark<85",mech);

//reduce
//1.
const totalm=students.reduce((sum,students)=>sum+students.marks,0);
console.log("total marks",totalm);

//2.
const avg=students.reduce((sum,students)=>sum+students.marks,0)/students.length;
console.log("Avg mark:",avg);

//3.
const fp=students.reduce((count,students)=>students.feesPaid? count+1 : count,0);
console.log("fees paid",fp);

//4.
const hm=students.reduce((high,students)=>students.marks>high? students.marks:high,0);
console.log("High mark",hm);

//5.
const gbc=students.reduce((group,students)=>{
    if(!group[students.course]){
        group[students.course]=[];
    }
    group[students.course].push(students.name);
    return group;
},{});
console.log("group",gbc);










