var images = [
  'img/20140829_21_00234.jpg',
  'img/20140829_21_00239.jpg',
  'img/20140829_22_00293.jpg',
  'img/20140829_22_00320-2.jpg',
  'img/20140829_22_00329.jpg',
  'img/20140829_22_00357-2.jpg',
  'img/20140831_00_00582-2.jpg',
  'img/20140831_01_00649.jpg',
  'img/20140831_01_00711.jpg',
  'img/20140831_01_00802.jpg',
  'img/20140831_01_00841-2.jpg'
];
var bgIndex = 0, oldIndex;
$(document).ready(function(){
  index = Math.floor((Math.random()*images.length));
  $.backstretch(images[index], {duration: 15000, fade: 3750});
  setInterval(function() {
    oldIndex = index;
    while (oldIndex == index) {
      index = Math.floor((Math.random()*images.length));
    }
    $.backstretch(images[index]);
  }, 25000);
  $(images).each(function() {
    $('<img/>')[0].src = this;
  });
});
