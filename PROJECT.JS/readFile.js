var fs=require('fs');
try{
    var data=fs.readFileSync("message.txt","utf8");
    console.log(data);
}
catch(error){
    console.log(error);

}
 console.log("thank you");
