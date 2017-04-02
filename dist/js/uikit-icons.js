/*! UIkit 3.0.0-beta.18 | http://www.getuikit.com | (c) 2014 - 2017 YOOtheme | MIT License */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('icons')) :
    typeof define === 'function' && define.amd ? define('uikiticons', ['icons'], factory) :
    (global.UIkitIcons = factory(global.Icons));
}(this, (function (Icons) { 'use strict';

Icons = 'default' in Icons ? Icons['default'] : Icons;

function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.icon.add(Icons);

}

if (typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

return plugin;

})));