'use strict';
var $links = $('a')
var hash = window.location.hash;

$links.click(function()  {
  $(this).parent('li').addClass('active').siblings().removeClass('active');
  var currentLink = $(this).context.firstChild.data.toLowerCase();
  $('#' + currentLink + '-block').show().siblings().hide();
});
window.location.hash = hash

