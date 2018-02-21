import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, font } from './theme';
import Box from './Box';

const Base = Box.extend`
  font-family: ${font};
`;

export default class VUiProvider extends Component {
  componentWillMount() {
    window.WebFontConfig = {
      google: {
        families: ['Lato:300,400'],
      },
    };

    ((d) => {
      const wf = d.createElement('script');
      const s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
    })(document);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Base color="white" f={[14, 16, 18, 20, 22, 24]} {...this.props} />
      </ThemeProvider>
    );
  }
}
