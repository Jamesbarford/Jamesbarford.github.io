var imageBackground = {
  mainSplash: document.querySelector('.main-splash'),
  mainList: document.querySelector('.main-list'),
  clientLogos: document.querySelector('.client-logos-list'),
  changeBackground: function () {
    if (document.getElementsByTagName('h1')[1].textContent == 'Consultancy') {
      this.mainSplash.style.backgroundImage = "url('styles/background/consultancy-background.jpg')";
      this.mainList.style.backgroundColor = '#3B6AA3';
    } else {
      this.mainSplash.style.backgroundImage = "url('styles/background/interim-background.jpg')";
      this.mainList.style.backgroundColor = '#295C5F';
      this.clientLogos.style.paddingTop = '40px';
      this.clientLogos.style.height = 'auto';
    }
  }
};
imageBackground.changeBackground();

(function footerText() {
  var date = new Date;
  var year = date.getFullYear();
  document.querySelector('.year').textContent = year;
})();

(function mobileFix (){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.querySelector('.main-splash').style.height = window.innerHeight + 'px';
    document.querySelector('.fa-angle-down').style.display = 'none';
  }
})();
