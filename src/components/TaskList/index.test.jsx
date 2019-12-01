import React from "react";
import TaskList from "./index";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import { JestEnvironment } from "@jest/environment";

configure({ adapter: new Adapter() });

it("matches the snapshot", () => {
    const props = {
        onDelete: jest.fn(),
        onCheck: jest.fn(),
        tasks: [{
            id: 1,
            title: "",
            checked: false
        }]
    }
    const tree = shallow(<TaskList {
        ...props
    } />);
    expect(toJson(tree)).toMatchSnapshot();
});
