import React from "react";
import Task from "./index";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import { JestEnvironment } from "@jest/environment";

configure({ adapter: new Adapter() });

it("matches the snapshot", () => {
    const props = {
        onDelete: jest.fn(),
        onCheck: jest.fn(),
        task: {
            id: 1,
            title: "",
            checked: false
        }
    }
    const tree = shallow(<Task {
        ...props
    } />);
    expect(toJson(tree)).toMatchSnapshot();
});
