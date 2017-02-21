(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Post = {
  findAll: function findAll() {
    return new Promise(function (resolve, reject) {
      var uri = "http://localhost:3000/posts";
      var request = new XMLHttpRequest();

      request.open("GET", uri, true);

      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          resolve(JSON.parse(request.response));
        }
      };

      request.onerror = function () {
        reject(new Error("Houston we have an error on the API"));
      };

      request.send();
    });
  }
};

var ui = {
  renderPosts: function renderPosts(posts) {
    console.log(posts);
  }
};

Post.findAll().then(ui.renderPosts).catch(function (error) {
  console.log(error);
});

},{}]},{},[1]);
