let eye="close"
function visible(){
    if(eye=="close"){
    let conform=document.getElementById("confirm")
    conform.setAttribute("type","text")
    eye="open"
}
else{
    let conform=document.getElementById("confirm")
    conform.setAttribute("type","password")
    eye="close"
}
};
// -----eye -end-----

function matching(){

    
    let conform=document.getElementById("confirm").value
    let newpass=document.getElementById("new").value
    if(newpass==""){
        let notmatch=document.getElementById("notmatch")
        notmatch.textContent="*enter the password*"
        notmatch.style.display="block"
    }
    else{
    if(conform==newpass){
        let match=document.getElementById("match")
        match.style.display="block"
        let notmatch=document.getElementById("notmatch")
        notmatch.style.display="none"
    }
    else{
         let notmatch=document.getElementById("notmatch")
         notmatch.textContent="*Passwords do not match*"
        notmatch.style.display="block"
        let match=document.getElementById("match")
        match.style.display="none"
    }};
};
// -------matchinend
let newpass=document.getElementById("new")
newpass.addEventListener("focusout",()=>{
    let name=document.getElementById("username").value
    if(name==""){
let warmsg=document.getElementById("name")
 warmsg.style.display="block"
    }
    else{
        let warmsg=document.getElementById("name")
        warmsg.style.display="none"
    }
});
// -----focuseout-end

let mail=document.getElementById("mailid")
mail.addEventListener("focusout",()=>{
    let mailvalue=document.getElementById("mailid").value
    if(!mailvalue.includes("@")){
let mailwar=document.getElementById("mail")
mailwar.style.display="block"
    }
    else{
        let mailwar=document.getElementById("mail")
        mailwar.style.display="none"
    };
})


