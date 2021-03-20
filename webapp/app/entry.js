'use strict';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import mermaid from 'mermaid';
// var Two = require('two.js');

$(document).ready(() => {
  mermaid.initialize(
    {
      theme: 'forest',
      startOnLoad: true,
      securityLevel: 'antiscript'
    }
  );
});


// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
// UIkit.notification('Hello world.');
