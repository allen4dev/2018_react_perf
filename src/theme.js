import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${styledNormalize}

  *, *::before, &::after {
    box-sizing: border-box;
  }

  html {
    font-family: Arial;
  }

  html, body {
    height: 100%;
  }

  body, h1, h2, h3, h4, ul, p, figure {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`;

const colors = {};

const sizes = {};

export default {
  colors,
  sizes,
};
