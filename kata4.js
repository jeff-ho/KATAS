function instructorWithLongestName(instructors) {
  for (let i = 0 ; i < instructors.length -1 ; i++) {
    for (let j = 0 ; j < instructors.length - 1 - i ; j++) {
      if (instructors[j].name.length > instructors[j+1].name.length) {
        [instructors[j], instructors[j+1]] = [instructors[j+1], instructors[j]]
      } 
    }
  }
  return instructors[instructors.length - 1]; 
}


console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));