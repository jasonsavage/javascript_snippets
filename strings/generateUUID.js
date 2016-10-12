/**
 * Generates a unique ID string
 * https://github.com/googlevr/vrview/blob/master/src/util.js
 */
function generateUUID () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};
