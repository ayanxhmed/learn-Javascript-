const accountId = 144553
let accountEmail = "ayan@google.com"
var accountpassword ="12345"
accountCity = "jaipur"

//accountId = 2 not allowed
accountEmail = "rayyan@google"
accountpassword = "515645"
accountCity = "sahaspur"

console.log(accountId);
/*
prefer not to use var 
because of issue i block scope and functional scope
*/ 
console.table([accountEmail,accountpassword,accountCity])
