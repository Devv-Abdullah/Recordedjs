var english = document.getElementById('english');
var arabic = document.getElementById('arabic');
var firsth1 = document.getElementById('firsth1');
var secondh1 = document.getElementById('secondh1');
var direction = localStorage.getItem('dir' || 'ltr');
// english.onclick = engLang();

function engLang(){
    document.dir = 'ltr';
    localStorage.setItem('lan', 'english');
    localStorage.setItem('dir', 'ltr');
    firsth1.innerHTML = 'Build Your Landing Page With Bootslander';
    secondh1.innerHTML = 'Build Your Landing Page With Bootslander';
}

// arabic.onclick = arabicLang();

function arabicLang(){
    document.dir = 'rtl'
    localStorage.setItem('lan', 'arabic');
    localStorage.setItem('dir', 'rtl');
    firsth1.innerHTML = "صفحه واحده من الموقع"
    secondh1.innerHTML = "صفحه واحده من الموقع"
}

document.dir = direction;
if(localStorage.getItem('lan') === 'english'){
    engLang();
}
else{
    arabicLang();
}