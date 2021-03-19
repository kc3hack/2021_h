'use strict';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import mermaid from 'mermaid';

mermaid.initialize({
  theme: 'forest',
  gantt: {
    axisFormatter: [
      ['%Y-%m-%d', (d) => {
        return d.getDay() === 1
      }]
    ]
  }
});

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
// UIkit.notification('Hello world.');
