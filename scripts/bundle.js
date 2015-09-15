(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var $links = $('a');
var hash = window.location.hash;

$links.click(function () {
  $(this).parent('li').addClass('active').siblings().removeClass('active');
  var currentLink = $(this).context.firstChild.data.toLowerCase();
  $('#' + currentLink + '-block').show().siblings().hide();
});

window.location.hash = hash;
window.onload = function () {
  $(hash + '-block').show().siblings().hide();
  if ($links.prevObject[0].URL === "http://localhost:8000/#blue") {
    $($links[1]).parent().addClass('active').siblings().removeClass('active');
  } else if ($links.prevObject[0].URL === "http://localhost:8000/#red") {
    $($links[0]).parent().addClass('active').siblings().removeClass('active');
  } else if ($links.prevObject[0].URL === "http://localhost:8000/#green") {
    $($links[2]).parent().addClass('active').siblings().removeClass('active');
  }
};

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map