function instructorWithLongestName(instructors) {
  return instructors.sort((a,b)=>{
    return a.name.length - b.name.length
  })[instructors.length - 1]
}






console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Deeeeeeeetmaaaaaaaa", course: "Web"}
]));