var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var result = students.sort(function(studentA, studentB) {
  // If names are the same, sort older student first
  if (studentA.name === studentB.name) {
    return studentB.age - studentA.age
  } 
  
  // Sort by name
  if (studentA.name > studentB.name) {
    return 1
  } else {
    return -1
  }
})

console.log(result)