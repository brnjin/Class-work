var arg = process.argv

var person = arg[2];
var place = arg[3];
var adj = arg[4];
var verb = arg[5];

console.log("Today, " + person + " went to the " + place + " because it was so nice out today. But little did " + person + " know, " + person + " was about to eat a " + adj + " ice cream. When you realized this, you " + verb + " the ice cream and went to somewhere else.");