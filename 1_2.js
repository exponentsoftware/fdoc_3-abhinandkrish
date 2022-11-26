{/**Write a function called convertArrayToObject which can 
convert the array to a structured object. */}
const students = [
   ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
   ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
const convertArrayToObject = (students) => {  
  let studentsRefined = [];
   students.map((student)=>{
      const [name, skills, scores] = student;
      studentsRefined.push({name, skills, scores});
   })
   return studentsRefined;
}
// console.log(convertArrayToObject(students))

