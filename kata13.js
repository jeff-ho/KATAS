const talkingCalendar = function(date) {
  const months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let year = '';
  let mon = '';
  let day = '';
  for (i = 0 ; i < date.length ; i++) {
    if ( i === 0 || i === 1 || i === 2 || i === 3) {
      year+=date[i]
    } else if (i === 5 || i === 6) {
      mon+=date[i]
    } else if (i === 8 || i === 9) {
      day+=date[i]
    }
  } 
  if (day[0] === '0') {
    day = day[1]
  }
  if (day === '1' || day === '21' || day === '31') {
    day+= "st"
  } else if (day === '2' || day === '22') {
    day+= "nd"
  } else if (day === '3' || day === '23') {
    day+= 'rd'
  } else  {
    day+= 'th'
  }
  return months[parseInt(mon)-1] + " " + day + ", " + year
};



console.log(talkingCalendar("2017/12/2"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
