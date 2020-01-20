// crypter une chaine de caractères
function crypter(chaine){

    let code="";
    let newCode="";

    for(var i=0; i<chaine.length; i++){
        code = chaine.charCodeAt(i)+1;
        if(code == 123){
            code = 97;
        }
        newCode += String.fromCharCode(code);
    }
    return newCode;
}