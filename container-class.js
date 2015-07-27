/* globals define */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function() {

  /**
   * Given a prefix string like 'theme' and a value like
   * 'dark', add 'theme-dark' class to the given element 
   * after removing any other theme-* classes.
   * @param  {Object} el     Target DOM element
   * @param  {String} prefix Broad prefix slug/category, before the '-' separator.
   * @param  {String} value  Specific suffix value, after the '-' separator.
   */
  return function(el, prefix, value){
    el.classList.forEach(function(c){
      if (c.lastIndexOf(prefix) + '-' === 0 ){
        el.classList.remove(c);
      }
    });
    el.classList.add(prefix+'-'+value);
  };
}));