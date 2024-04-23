import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Calculator from './Calculator';


const root = createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
<Auth0Provider
    domain="dev-zl6rkudru53n313d.us.auth0.com"
    clientId="261HvJSW39yIGny0RGdSmYZzalq7wicj"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  ><Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/google" element={<Calculator/>}/>
    </Routes>
  </Auth0Provider>,
  </BrowserRouter>
);