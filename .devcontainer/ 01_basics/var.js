console.log("hi")
const accountId =12345
let accountEmail="anuja@gmai.com"
var accountpassword ="12345"
accountcity ="jaipur"
let accountstate;

// accountId=2 not aalowed
//prefer not to usenbecause of issue in block scope and funtional scope
accountEmail="123@gmail.com"
accountpassword="345"

console.log(accountId);
console.table([accountEmail,accountId,accountpassword,accountcity,accountstate])