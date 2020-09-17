// ==UserScript==
// @name         小霸王
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  脚本更新发布点：                                    cnsource.github.io
// @author       CnSource
// @include      https://www.yikm.net/*
// @match        https://legacy.gitbook.com/book/cologler/greasemonkey/details
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    var s = document.getElementsByClassName('qr_code_pc')[0];
    s.style.display='none';
})();