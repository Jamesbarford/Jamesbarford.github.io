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

var MobileFix = {
  interimColumn: document.querySelector('.column-interim'),
  consultantColumn: document.querySelector('.column-consultant'),
  homeWrap: document.querySelector('.home-text-wrap'),
  homeOverlay: document.querySelector('.home-overlay'),
  coloumnWrap: document.querySelector('.column-wrapper'),
  arrowDown: document.querySelector('.fa-angle-down'),
  fixHeight: function () {
    if((this.homeWrap && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && (window.innerHeight < window.innerWidth || window.innerHeight > window.innerWidth)) {
        this.homeWrap.style.height = window.innerHeight + 'px';
        this.homeOverlay.style.height = window.innerHeight + 'px';
        this.interimColumn.style.height = window.innerHeight - 25 + 'px';
        this.consultantColumn.style.height = window.innerHeight  - 25 + 'px';
        this.coloumnWrap.style.height = '100%';
        this.arrowDown.style.display = 'none';
    }
  }
};
window.addEventListener('resize', MobileFix.fixHeight());


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
