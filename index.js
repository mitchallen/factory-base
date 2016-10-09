/**
    Module: @mitchallen/factory-base
    Author: Mitch Allen
*/

/*jshint esversion: 6 */

"use strict";

module.exports = function (spec, callback) {
    let data = { status: "OK" };
    callback(null, data);
};