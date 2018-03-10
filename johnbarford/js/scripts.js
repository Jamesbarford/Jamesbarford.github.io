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
  arrowDown: document.querySelector('.fa-angle-down'),
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
        console.log('kawabunga');
      }
        this.arrowDown.style.display = 'none';
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

function scrollIt(destination, duration, easing, callback) {
  if (duration === undefined) duration = 200;
  var easings = {
    linear: function linear(t) {
      return t;
    }
  };

  var start = window.pageYOffset;
  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    return;
  }

  function scroll() {
    var now = 'now' in window.performance ? performance.now() : new Date().getTime();
    var time = Math.min(1, (now - startTime) / duration);
    var timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      return;
    }
    window.requestAnimationFrame(scroll);
  }
  scroll();
}
document.querySelector('.fa-angle-down').addEventListener('click', function () {
  scrollIt(document.querySelector('.column-wrapper') || document.querySelector('.page-image-wrap'), 500, 'linear')
});
