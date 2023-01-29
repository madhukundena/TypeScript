//object

var student:any={
    fname:"Sai",
    lname:"mani",
    score:"95"
};
console.log(student.fname)
console.log(student.lname)
console.log(student)

//looping object

for(var item in student){
   // console.log(item);
  console.log(student[item]);
}
  // console.log(student['fname']);

  // console.log(student['lname']);
  // console.log(student['score']);

  var arr2:Array<any> ;
  arr2=["Angular",1,3,23.3];
  arr2.push(100)
  console.log(arr2);
  console.log(arr2.pop());

  var arr3=["Angular",1,4,23.3];
  console.log(arr3)
  
  for(var i=0;i<arr3.length;i++){
    console.log(arr3[i])
  }

var level:number[] = [10,20,30,40]
console.log(level.toString());
console.log(level.join("/"))
console.log(level.slice(1,2))
console.log(level.slice(2))
level.splice(2,3,50,60,70)
console.log(level)
level.push(1,2,3,4)
console.log(level.toString());