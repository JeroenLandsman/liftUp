(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*----------------------------------------------------------------------------*\
    Liftup POC 
    Js code for POC
\*----------------------------------------------------------------------------*/

/**
 * Use strict as per:
 * http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
 */
'use strict';


/**
 * Check if eneco object exists, otherwise create it
 */
var eneco = eneco || {};


/**
 * Jshint global references
 * Please define all third party plugins that you use to not break jshinting
 */



/*  Component
\*----------------------------------------------------------------------------*/

eneco.test = {
    init: function(){
        // Your javascript
        this.initTest(document);
    },

    initTest: function () {
        console.log("test success")
    }
};

window.addEventListener('load', function () {
    eneco.test.init();
}, false);
},{}]},{},[1]);
