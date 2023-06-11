import { Fragment } from 'react';
import GlobalStyles from './global-styles';
import Content from './components/content';

function App() {
  return (
    <div className="App">
      <Fragment>
        <GlobalStyles />
        <Content />
      </Fragment>
    </div>
  );
}

export default App;
