// fonction retournant le code html d'une case de tableau HTML
//paramètre: la valeur à insérer dans la case
function obtenirCaseHtml(valeur){

    if(Array.isArray(valeur)){
        valeur = valeur.join(", ");
    }
    return `<td> ${valeur} </td>`;
}

// fonction retournant le code html d'une ligne de tableau HTML
//paramètre: l'objet contenant les données de la ligne
function obtenirLigneHtml(objet){
    let html = "<tr>";
    for(clef in objet){
        html += obtenirCaseHtml(objet[clef]);
    }
    html +="</tr>";

    return html;
}

// fonction retournant le code html de l'entête de tableau HTML
//paramètre: un objet contenant les clés qui correspondent aux entêtes  
function obtenirEnteteHtml(data){
    let html = "<tr>";
    
    for(let key in data[0]){
        html += "<th>" + key + "</th>";
    }
    html += "</tr>";
    
    return html;
}

// fonction retournant le code html d'une table de tableau HTML
//paramètre: un tableau ordinal d'objets
function obtenirTableHtml(data){
    let html = "<table>";
    html += obtenirEnteteHtml(data);

    for(ligne of data){
        html +=obtenirLigneHtml(ligne);
    }

    html +="<table>";

    return html;
}

//document.getElementById("cible2").innerHTML = obtenirTableHtml(data);





var cible = document.getElementById("cible");  //cible la div en question
            
            var codeHtml = "<table>";

                //affichage de la ligne d'entête
                //ssi le tableau data n'est pas vide
                if (data.length >0){
                    codeHtml += "<tr>";
                        for (let clef in data[0]){
                            codeHtml += "<th>" + clef + "</th>";
                        }    
                    codeHtml += "</tr>";
                }
                
                //boucle sur le tableau ordinal
                //pour générer les lignes <tr>
                for (let ligne of data){
                    codeHtml += "<tr>";

                        for(let clef in ligne){
                            codeHtml += "<td>" + ligne[clef] + "</td>";
                        }
                    codeHtml += "</tr>";
                }

            codeHtml += "</table>";

            //ecriture du code html dans la cible
            //pour l'afficher sur la page
            
            //cible.innerHTML = codeHtml;