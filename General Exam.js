window.onload= function() {
  document.getElementById("exam-page-1").style.display = 'none';
  document.getElementById("exam-page-2").style.display = 'none';
  document.getElementById("exam-page-3").style.display = 'none';
  document.getElementById("exam-page-4").style.display = 'none';
  document.getElementById("nav").style.display = 'none';
  document.getElementById("welcome").style.display = 'block';
}
function checkup(){
  document.getElementById("exam-page-4").style.display = 'none';
  document.getElementById("exam-page-2").style.display = 'none';
  document.getElementById("exam-page-3").style.display = 'none';
  document.getElementById("exam-page-1").style.display = 'block';
  document.getElementById("welcome").style.display = 'none';
  document.getElementById("nav").style.display = 'block';

}
function english(){
 document.getElementById("exam-page-4").style.display = 'none';
  document.getElementById("exam-page-2").style.display = 'none';
  document.getElementById("exam-page-3").style.display = 'none';
  document.getElementById("welcome").style.display = 'none';
  document.getElementById("exam-page-1").style.display = 'block';
  document.getElementById("nav").style.display = 'block';
  
}
function maths(){
  document.getElementById("exam-page-1").style.display = 'none';
  document.getElementById("exam-page-4").style.display = 'none';
  document.getElementById("exam-page-3").style.display = 'none';
  document.getElementById("welcome").style.display = 'none';
  document.getElementById("exam-page-2").style.display = 'block';
  document.getElementById("nav").style.display = 'block';
}

function science(){
  document.getElementById("exam-page-1").style.display = 'none';
  document.getElementById("exam-page-2").style.display = 'none';
  document.getElementById("exam-page-4").style.display = 'none';
  document.getElementById("welcome").style.display = 'none';
  document.getElementById("exam-page-3").style.display = 'block';
  document.getElementById("nav").style.display = 'block';
}
function social(){
  document.getElementById("exam-page-1").style.display = 'none';
  document.getElementById("exam-page-2").style.display = 'none';
  document.getElementById("exam-page-3").style.display = 'none';
  document.getElementById("welcome").style.display = 'none';
  document.getElementById("exam-page-4").style.display = 'block';
  document.getElementById("nav").style.display = 'block';
}


