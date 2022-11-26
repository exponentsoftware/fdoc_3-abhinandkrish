{/**Copy the student object to newStudent without mutating the original object.
 In the new object add the following ?

	1. Add Bootstrap with level 8 to the front end skill sets
	2. Add Express with level 9 to the back end skill sets
	3. Add SQL with level 8 to the data base skill sets
	4. Add SQL without level to the data science skill sets */}

const student = {
   name: 'David',
   age: 25,
   skills: {
      frontEnd: [
         { skill: 'HTML', level: 10 },
         { skill: 'CSS', level: 8 },
         { skill: 'JS', level: 8 },
         { skill: 'React', level: 9 }
      ],
      backEnd: [
         { skill: 'Node',level: 7 },
         { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
         { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
   }
}
const newStudent = {
   ...student,
   skills:{
      ...student.skills,
      // ...student.skills.frontEnd.push({skill:"Bootstrap", level: 8}),
      // ...student.skills.backEnd.push({skill:"Express", level: 9}),
      // ...student.skills.dataBase.push({skill:"SQL", level: 8}),
      // ...student.skills.dataScience.push("SQL"),
      frontEnd: [...student.skills.frontEnd, {skill:"Bootstrap", level: 8} ],
      backEnd: [...student.skills.backEnd, {skill:"Express", level: 9} ],
      dataBase: [...student.skills.dataBase, {skill:"SQL", level: 8} ],
      dataScience: [...student.skills.dataScience, "SQL" ]
   }
}
// console.log(newStudent);

const lengthFinder = (obj, query) => {  
   let queryLength=[];
   Object.entries(obj).map(([key, value]) => {
      let newQuery = query ==="value"? value:key;
      queryLength.push(JSON.stringify(newQuery).length);
   })
   return  queryLength;
}

console.log("1.3.a)",lengthFinder(student, "key"));
console.log("1.3.b)",lengthFinder(student, "value"));
console.log("1.3.c)",lengthFinder(student.skills, "value"));

const objHasGraphics = (obj) => {  
   let arrNormal = Object.keys(obj);
   let arrAll = Reflect.ownKeys(obj);
   return arrNormal.length === arrAll.length? "Object keys have no graphics" : "Object keys have graphics";
}
console.log("1.3.d)",objHasGraphics(student));

console.log("1.3.e)",Object.entries(student).map(([key]) => {
   return key;
}))


