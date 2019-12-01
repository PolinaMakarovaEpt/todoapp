import React from "react";
import AddTask from "./index";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import { JestEnvironment } from "@jest/environment";

configure({ adapter: new Adapter() });

it("matches the snapshot", () => {
    const props = {
        onCreate: jest.fn(),
        onClick: jest.fn()
    }
    const tree = shallow(<AddTask {
        ...props
    } />);
    expect(toJson(tree)).toMatchSnapshot();
  });
