(function imgBackground() {
  if (document.getElementsByTagName('h1')[1] == undefined || document.getElementsByTagName('h1') == null) {
  console.log('')
 }
  else if(document.getElementsByTagName('h1')[1].textContent == 'Consultancy') {
    document.querySelector('.main-splash').style.backgroundImage = "url('styles/background/consultancy-background.jpg')";
    document.querySelector('.main-list').style.backgroundColor = '#3B6AA3';
  }
  else {
    document.querySelector('.main-splash').style.backgroundImage = "url('styles/background/interim-background.jpg')";
    document.querySelector('.main-list').style.backgroundColor = '#295C5F';
  }
})();

(function footerText() {
  var date = new Date;
  var year = date.getFullYear();
  document.querySelector('.year').textContent = year;
})();

(function mobileFix (){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.querySelector('.main-splash').style.height = window.innerHeight + 'px';
  }
})();
