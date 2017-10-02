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