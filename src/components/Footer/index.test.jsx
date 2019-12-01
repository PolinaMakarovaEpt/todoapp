import React from "react";
import Footer from "./index";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import { JestEnvironment } from "@jest/environment";

configure({ adapter: new Adapter() });

it("matches the snapshot", () => {
    const props = {
        onFilterChanged: jest.fn(),
        tasks: [{
            id: 1,
            title: "",
            checked: false
        }],
        filter: "all",
        onClearCompleted: jest.fn()
    }
    const tree = shallow(<Footer {
        ...props
    } />);
    expect(toJson(tree)).toMatchSnapshot();
});
