var password = "dragon";
var psswd;
var entrycount=0;

var entrylimit=3;
var error=false;
var i=0;
while(psswd!=password  && !error){
    if (entrycount<entrylimit && !error){
        psswd=window.prompt("Enter Password");
        i++;
        entrycount++;
    }else{
        error=true;
    }
}
if (error){
    alert("Too many entries");
}else{
    document.write('<a href="/content">Click Here To Visit</a>');
}


