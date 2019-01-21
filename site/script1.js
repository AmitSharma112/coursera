var message="inside global";
console.log("global: message= "+ message);
function a(){
    var message="inside a";
    console.log("a: message = " + message);
b();
}
function b()
{
    console.log("b: message =" + message);
}
a();