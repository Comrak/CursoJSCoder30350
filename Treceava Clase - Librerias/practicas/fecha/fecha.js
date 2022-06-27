import * as luxon from "./luxon.js";

const date1 = new Date('7/13/2010');
const date2 = new Date('12/15/2010');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffTime + "  Milisegundos");
console.log(diffDays + "  Dias");


const date1l = luxon.DateTime.fromISO('2010-07-13')
const date2l = luxon.DateTime.fromISO('2010-12-15')
console.log(date1l,date2l)
const diff = date2l.diff(date1l, ["years", "months", "days", "hours"])

const diff2 = date2l.diff(date1l, ["days"])
const diff3 = date2l.diff(date1l, ["hours"])
const diff4 = date2l.diff(date1l, ["minutes"])

console.log(diff.toObject())
console.log(diff2.toObject())
console.log(diff3.toObject())
console.log(diff4.toObject())