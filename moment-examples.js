var moment=require('moment');

var now=moment();

//console.log(now.format());
//console.log(now.format());
//console.log(now.valueOf());

var timestamp=1450297170174;
var timestampMoment= moment.utc(timestamp);

console.log(now.format('h:mma'));

console.log(timestampMoment.local().format('h:mm a'));