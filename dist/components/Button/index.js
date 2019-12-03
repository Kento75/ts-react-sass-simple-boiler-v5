import * as React from 'react';
var Button = function (props) {
    var text = props.text, flag = props.flag, action = props.action;
    return (React.createElement(React.Fragment, null,
        flag && React.createElement("p", null, text),
        React.createElement("button", { onClick: action }, "Button")));
};
export default Button;
//# sourceMappingURL=index.js.map