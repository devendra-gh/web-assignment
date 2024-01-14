import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

import './index.css';

import { store } from './redux/storeConfig/store'
import { IntlProviderWrapper } from './utility/context/Internationalization';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const Loader = lazy(() => import('./components/Loader'))
const MUIWrapper = lazy(() => import('./components/MUIWrapper'))
const LazyApp = lazy(() => import('./App'))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MUIWrapper>
      <Provider store={store}>
        <Suspense fallback={<Loader enable={true} />}>
          <BrowserRouter>
            <IntlProviderWrapper>
              <LazyApp />
            </IntlProviderWrapper>
          </BrowserRouter>
        </Suspense>
      </Provider>
    </MUIWrapper>
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();
reportWebVitals();
