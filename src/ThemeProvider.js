import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, colors, font } from './theme';

const Base = styled.div`
  font-family: ${font};
  color: ${colors.white};
`;

export default class VUiProvider extends Component {
  componentWillMount() {
    window.WebFontConfig = {
      google: {
        families: ['Lato'],
      },
    };

    ((d) => {
      const wf = d.createElement('script');
      const s = d.scripts[0];
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.async = true;
      s.parentNode.insertBefore(wf, s);
    })(document);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Base {...this.props} />
      </ThemeProvider>
    );
  }
}
