// var moment = require('moment');

// var formatDates = (item, lvl) => {
//   if (lvl > 5) { 
//     return item; 
//   } else if (item instanceof Date) {
//     console.log('found date', item);
//     item = moment(item).format('MM-DD-YYYY');
//   } else if (Array.isArray(item)) {
//     item.forEach((val) => { formatDates(val, lvl++) })
//   } else if (typeof item === "object") {
//     for (key in item) {
//       formatDates(item[key], lvl++);
//     }
//   }

//   return item;
// }

// module.exports = {formatDates: formatDates}