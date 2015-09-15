'use strict';
var $links = $('a')
var hash = window.location.hash;

$links.click(function()  {
  $(this).parent('li').addClass('active').siblings().removeClass('active');
  var currentLink = $(this).context.firstChild.data.toLowerCase();
  $('#' + currentLink + '-block').show().siblings().hide();
});

window.location.hash = hash
window.onload = function(){
  $(hash + '-block').show().siblings().hide();
  if($links.prevObject[0].URL === "http://localhost:8000/#blue"){
    $($links[1]).parent().addClass('active').siblings().removeClass('active');
  }else if($links.prevObject[0].URL === "http://localhost:8000/#red"){
    $($links[0]).parent().addClass('active').siblings().removeClass('active')
  }else if($links.prevObject[0].URL === "http://localhost:8000/#green"){
    $($links[2]).parent().addClass('active').siblings().removeClass('active')
  }
}

