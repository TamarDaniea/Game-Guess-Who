let div_container=document.querySelector('#div_container')
let  currentUser=localStorage.getItem('currentUser')
let icon_container=document.querySelector('.icon_container')
currentUser=JSON.parse(currentUser)
if(currentUser.singUp==true)
div_container.innerText=`ברוך הבא  ${currentUser.name}`
else
div_container.innerText=`ברוך שובך  ${currentUser.name}`


let startButton = document.querySelector('.start_button');
let tooltip = document.createElement('div');
tooltip.className = 'tooltip';
tooltip.innerHTML = 'להתחלת המשחק ,לחצו כאן!'; 
document.body.appendChild(tooltip);


startButton.addEventListener('mouseover', function(event) {
    tooltip.style.display = 'block'; 
    tooltip.style.left = event.pageX + 'px'; 
    tooltip.style.top = event.pageY + 'px'; 
});


startButton.addEventListener('mouseout', function() {
    tooltip.style.display = 'none'; 
});
