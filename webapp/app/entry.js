'use strict';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Two from 'two.js';
import $ from 'jquery';

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
// UIkit.notification('Hello world.');

$(function () {

  var canvas = document.getElementById('myCanvas');
  var two = new Two({ autostart: true }).appendTo(canvas);
  var rect = two.makeRectangle(two.width / 2, two.height / 2, 250, 250);

  rect.noStroke().fill = getRandomColor();

  // Update the renderer in order to generate corresponding DOM Elements.
  two.update();

  $(rect._renderer.elem)
    .css('cursor', 'pointer')
    .click(function (e) {
      rect.fill = getRandomColor();
    });

  two.bind('update', function (frameCount, timeDelta) {
    // rect.rotation = frameCount / 60;
  });

  function getRandomColor() {
    return 'rgb('
      + Math.floor(Math.random() * 255) + ','
      + Math.floor(Math.random() * 255) + ','
      + Math.floor(Math.random() * 255) + ')';
  }
});
