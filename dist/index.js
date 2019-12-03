import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/index';
import './scss-style.scss';
import './style1.scss';
import './style2.scss';
// import でもできるが面倒なので、妥協して require を使用
var reactImg = require('./assets/img/react.png');
function App() {
    console.log('test111');
    console.log('test111');
    console.log('test111');
    console.log('test111');
    var sum = function (a, b) { return a + b; };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("h1", { className: "css-style" }, "React & TypeScript!"),
            React.createElement("p", null,
                "Test: ",
                sum(15, 15),
                " ")),
        React.createElement("div", { className: "scss-style" }),
        React.createElement("div", { className: "sass-img" }),
        React.createElement("div", null,
            React.createElement("img", { src: reactImg, alt: "react" })),
        React.createElement("div", { className: "style1" }, "style1"),
        React.createElement("div", { className: "style2" }, "style2"),
        React.createElement("div", null,
            React.createElement(Button, { text: 'ボタンですよ', flag: true, action: function () { return console.log('ボタンを押した!'); } }))));
}
export default App;
var root = document.getElementById('app-root');
ReactDOM.render(React.createElement(App, null), root);
//# sourceMappingURL=index.js.map