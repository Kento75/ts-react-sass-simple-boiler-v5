import * as React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../components/Button';
test('小コンポーネントが存在すること', function () {
    var wrapper = shallow(React.createElement(Button, { text: "\u30DC\u30BF\u30F3\u3067\u3059", flag: true, action: function () { return console.log('test'); } }));
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').text()).toEqual('ボタンです');
    expect(wrapper).toMatchSnapshot();
});
test('pコンポーネントが表示されないこと', function () {
    var wrapper = shallow(React.createElement(Button, { text: "\u30DC\u30BF\u30F3\u3067\u3059", flag: false, action: function () { return console.log('test'); } }));
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('p').length).toBe(0);
    expect(wrapper).toMatchSnapshot();
});
test('イベント発火時にコールバック関数が呼び出されること', function () {
    var Spy = jest.fn();
    var wrapper = shallow(React.createElement(Button, { text: "\u30DC\u30BF\u30F3\u3067\u3059", flag: true, action: Spy }));
    wrapper.find('button').simulate('click');
    expect(Spy).toHaveBeenCalledWith();
    expect(wrapper).toMatchSnapshot();
});
//# sourceMappingURL=index.test.js.map