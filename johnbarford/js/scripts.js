var menuObj = {
  hamburger: document.querySelector('.nav-hamburger'),
  navigation: document.querySelector('.nav'),
  navigationList: document.getElementsByClassName('nav-li'),
  openMenu: function (arg) {
    this.hamburger.classList.toggle('open');
    this.navigation.classList.toggle('open');
      for (var i = 0; i < this.navigationList.length; i++) {
        this.navigationList[i].classList.toggle('open');
      }
  },
  clickMenu: function () {
    this.hamburger.addEventListener('click', menuObj.openMenu.bind(menuObj));
  }
};
menuObj.clickMenu();

(function footerText() {
  var footerYear = document.querySelector('.year');
  var date = new Date;
  var year = date.getFullYear();
  if(footerYear) {
    footerYear.textContent = year;
  }
})();

var MobileFix = {
  interimColumn: document.querySelector('.column-interim'),
  mainSplash: document.getElementById('main-splash'),
  consultantColumn: document.querySelector('.column-consultant'),
  homeWrap: document.querySelector('.home-text-wrap'),
  homeOverlay: document.querySelector('.home-overlay'),
  coloumnWrap: document.querySelector('.column-wrapper'),
  orientationChange: function () {
    var self = this;
    // Cache window dimensions
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

    window.addEventListener('resize', function() {
      if (self.windowWidth !== window.innerWidth && self.windowHeight !== window.innerHeight) {
        self.windowWidth = window.innerWidth;
        self.windowHeight = window.innerHeight;
        MobileFix.fixHeight();
       }
     });
  },
  fixHeight: function () {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      if(this.homeWrap) {
        this.homeWrap.style.height = window.innerHeight + 'px';
        this.homeOverlay.style.height = window.innerHeight + 'px';
        this.interimColumn.style.height = window.innerHeight - 25 + 'px';
        this.consultantColumn.style.height = window.innerHeight  - 25 + 'px';
        this.coloumnWrap.style.height = '100%';
      }
      else if(this.mainSplash) {
        this.mainSplash.style.height = window.innerHeight + 'px';
      }
        MobileFix.orientationChange();
    }
  }
};
window.addEventListener('resize', MobileFix.fixHeight());


var imageBackground = {
  mainSplash: document.querySelector('.main-splash'),
  mainList: document.querySelector('.main-list'),
  clientLogos: document.querySelector('.client-logos-list'),
  changeBackground: function () {
    if(this.mainSplash) {
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
  }
};
imageBackground.changeBackground();
