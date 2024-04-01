
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach(trigger => {
    trigger.addEventListener('click', openAcordeon);
});



function openAcordeon(event) {   
    const acordeon = event.target.parentElement;
    const isCollapsed = acordeon.classList.contains('open') ? false : true;
    
    if (isCollapsed) { // This closes the previously opened acordeon.
        const acordeons = document.querySelectorAll('.acordeon');
        acordeons.forEach(acordeon => acordeon.classList.remove('open'));
    }         
    acordeon.classList.toggle('open')
}