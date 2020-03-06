import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ServiceList from './ServiceList';

Enzyme.configure({ adapter: new Adapter() });

beforeAll(() => {
  global.fetch = jest.fn();
});

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ServiceList />, { disableLifecycleMethods: true });
});

afterEach(() => {
  wrapper.unmount();
});

it('should rendera list of services', done => {
  expect.assertions(3);
  const spyDidMount = jest.spyOn(ServiceList.prototype, 'componentDidMount');

  fetch.mockImplementation(() => {
    return Promise.resolve({
      status: 200,
      json: () => {
        return Promise.resolve({
          Assets: ['Version: 1234.some.git.hash', 'Slot: BLUE'],
          Auth: ['Version: 5678.some.other.git.has', 'Slot: GREEN']
        });
      }
    });
  });

  const didMount = wrapper.instance().componentDidMount();

  expect(spyDidMount).toHaveBeenCalled();

  didMount.then(() => {
    wrapper.update();

    expect(wrapper.find('li').first().text()).toContain('Assets');
    expect(wrapper.find('li').last().text()).toContain('Auth');

    spyDidMount.mockRestore();
    fetch.mockClear();
    done();
  });
});
