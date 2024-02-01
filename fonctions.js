function maFonction(event) {
    console.log('appel de "maFonction" avec aucuns parametres')
    // console.log(event);
    console.log(event.target);
    let p_message = document.querySelector('#p_message');
    p_message.innerHTML='click: appel de "maFonction" avec aucuns paramètres'
}

function montrerInterface(){
    console.log('appel de "montrerInterface"');
    let chargement = document.querySelector('#chargement');
    let application = document.querySelector('#application')
    chargement.style.display="none";
    chargement.style.display="block";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}