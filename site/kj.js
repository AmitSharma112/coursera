var names=["aa","kl","rr"]; 
for(var i=0;i<names.length;i++){
    console.log("hello" +names[i]);

}  
names[100]="ss";
for(var i=0;i<names.length;i++){
    console.log("hello" +names[i]);
}