var url = require('url');
var adr = "http://localhost:8080";
var q = url.parse(adr, true); // Note the comma instead of a period
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

