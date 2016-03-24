'use strict';

function isJavascript() {
  // if we're trying to execute this with something other than javascript,
  // presumable it will light on fire #yolo
  return true;
}

module.exports = isJavascript;
