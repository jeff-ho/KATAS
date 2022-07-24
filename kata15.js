const organizeInstructors = function(instructors) {
  let results = {};
  let nameIos = [];
  let nameWeb = [];
  let nameBlock = [];
  for (i = 0 ; i < instructors.length ; i++) {
    if (instructors[i].course === 'iOS') {
      nameIos.push(instructors[i].name)
      results['iOS'] = nameIos;
    } else if (instructors[i].course === 'Web') {
      nameWeb.push(instructors[i].name)
      results['Web'] = nameWeb;
    } else if (instructors[i].course === 'Blockchain') {
      nameBlock.push(instructors[i].name)
      results['Blockchain'] = nameBlock;
    }
  }     
    return results;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
