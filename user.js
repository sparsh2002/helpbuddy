var identity =["sparsh","prakhar","manish",
"ui20ec01@iiitsurat.ac.in",
"ui20ec02@iiitsurat.ac.in",
"ui20ec03@iiitsurat.ac.in",
"ui20ec04@iiitsurat.ac.in",
"ui20ec04@iiitsurat.ac.in",
"ui20ec06@iiitsurat.ac.in",
"ui20ec05@iiitsurat.ac.in",
"ui20ec07@iiitsurat.ac.in",
"ui20ec07@iiitsurat.ac.in",
"ui20ec08@iiitsurat.ac.in",
"ui20ec09@iiitsurat.ac.in",
"ui20ec10@iiitsurat.ac.in",
"ui20ec11@iiitsurat.ac.in",
"ui20ec12@iiitsurat.ac.in",
"ui20ec13@iiitsurat.ac.in",
"ui20ec14@iiitsurat.ac.in",
"ui20ec15@iiitsurat.ac.in",
"ui20ec16@iiitsurat.ac.in",
"ui20ec17@iiitsurat.ac.in",
"ui20ec18@iiitsurat.ac.in",
"ui20ec19@iiitsurat.ac.in",
"ui20ec20@iiitsurat.ac.in",
"ui20ec21@iiitsurat.ac.in",
"ui20ec22@iiitsurat.ac.in",
"ui20ec23@iiitsurat.ac.in",
"ui20ec24@iiitsurat.ac.in",
"ui20ec25@iiitsurat.ac.in",
"ui20ec26@iiitsurat.ac.in",
"ui20ec27@iiitsurat.ac.in",
"ui20ec28@iiitsurat.ac.in",
"ui20ec29@iiitsurat.ac.in",
"ui20ec30@iiitsurat.ac.in",
"ui20ec31@iiitsurat.ac.in",
"ui20ec32@iiitsurat.ac.in",
"ui20ec33@iiitsurat.ac.in",
"ui20ec34@iiitsurat.ac.in",
"ui20ec35@iiitsurat.ac.in",
"ui20ec36@iiitsurat.ac.in",
"ui20ec37@iiitsurat.ac.in",
"ui20ec38@iiitsurat.ac.in",
"ui20ec39@iiitsurat.ac.in",
"ui20ec40@iiitsurat.ac.in",
"ui20ec41@iiitsurat.ac.in",
"ui20ec42@iiitsurat.ac.in",
"ui20ec43@iiitsurat.ac.in",
"ui20ec44@iiitsurat.ac.in",
"ui20ec45@iiitsurat.ac.in",
"ui20ec46@iiitsurat.ac.in",
"ui20ec47@iiitsurat.ac.in",
"ui20ec48@iiitsurat.ac.in",
"ui20ec49@iiitsurat.ac.in",
"ui20ec50@iiitsurat.ac.in",
"ui20ec51@iiitsurat.ac.in",
"ui20ec52@iiitsurat.ac.in",
"ui20ec53@iiitsurat.ac.in",
"ui20ec54@iiitsurat.ac.in",
"ui20ec55@iiitsurat.ac.in",
"ui20ec56@iiitsurat.ac.in",
"ui20ec57@iiitsurat.ac.in",
"ui20ec58@iiitsurat.ac.in",
"ui20ec59@iiitsurat.ac.in",
"ui20ec58@iiitsurat.ac.in",
"ui20ec59@iiitsurat.ac.in",
"ui20ec60@iiitsurat.ac.in",
"ui20ec61@iiitsurat.ac.in",
"ui20ec62@iiitsurat.ac.in",
"ui20ec63@iiitsurat.ac.in",
"ui20ec64@iiitsurat.ac.in",
"ui20ec65@iiitsurat.ac.in",
"ui20ec66@iiitsurat.ac.in",
"ui20ec67@iiitsurat.ac.in",
"ui20ec68@iiitsurat.ac.in",
"ui20ec69@iiitsurat.ac.in",
"ui20ec70@iiitsurat.ac.in",
"ui20ec71@iiitsurat.ac.in",
"ui20ec72@iiitsurat.ac.in",
"ui20ec10@iiitsurat.ac.in",
];







var password = "hello";
var psswd;
var email;
var entrycount=0;

var entrylimit=3;
var error=false;
var i=0;
while(email!=identity[i] && psswd!=password  && !error){
    if (entrycount<entrylimit && !error){
        email=window.prompt("Enter Email");
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