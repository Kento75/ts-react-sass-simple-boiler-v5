import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/index';
import './scss-style.scss';
import './style1.scss';
import './style2.scss';

// import でもできるが面倒なので、妥協して require を使用
const reactImg = require('./assets/img/react.png');

function App(): JSX.Element {
  console.log('test111');
  console.log('test111');
  console.log('test111');
  console.log('test111');
  const sum = (a: number, b: number): number => a + b;

  return (
    <React.Fragment>
      <div>
        <h1 className="css-style">React & TypeScript!</h1>
        <p>Test: {sum(15, 15)} </p>
      </div>
      <div className="scss-style" />
      <div className="sass-img" />
      <div>
        <img src={reactImg} alt="react" />
      </div>
      <div className="style1">style1</div>
      <div className="style2">style2</div>
      <div>
        <Button
          text={'ボタンですよ'}
          flag={true}
          action={() => console.log('ボタンを押した!')}
        />
      </div>
    </React.Fragment>
  );
}

export default App;

const root = document.getElementById('app-root');

ReactDOM.render(<App />, root);
