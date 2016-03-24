'use strict';

const tap = require('tap');
const isJavascript = require('./');

tap.equal(isJavascript(), true);
