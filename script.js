const fs = require('fs');

function removeCommentsFromJS(filePath) {
    let code = fs.readFileSync(filePath, 'utf-8');

    //Supprime uniquement les commentaires valides
    code = code.replace(/(^|\s)\/\/(?!\/).*|\/\*[\s\S]*?\*\//g, '').trim();

    fs.writeFileSync(filePath, code, 'utf-8');
    console.log(`✅ Nettoyage terminé : ${filePath}`);
}

//Exécuter sur un fichier JS/TS
removeCommentsFromJS('./example.js');
