import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import WebFont from "webfontloader";

import App from './App';

WebFont.load({
  google: {
    families: [
      "Poppins",
      "Roboto:400,700,900,300",
      "Oswald:500,400",
      "Redacted Script:400",
    ],
  },
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
