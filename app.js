let char= document.getElementById('perso')
let obs= document.getElementById('obstacle')

function jump(){
    if (char.classList!= 'animation'){
    
    char.classList.add('animation')
}
    setTimeout(function(){
        char.classList.remove('animation')
    },500)
}



var checkloose = setInterval(function(){
    var perso_top= parseInt(window.getComputedStyle(char).getPropertyValue('top'))
    var obs_left= parseInt(window.getComputedStyle(obs).getPropertyValue('left'))
    if (obs_left<20 && obs_left>0 && perso_top>=130){
        alert("you loose ")
        obs.style.animation= 'none '
        obs.style.display='none'
        
    }


},2)
