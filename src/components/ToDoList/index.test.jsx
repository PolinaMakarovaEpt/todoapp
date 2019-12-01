import React from "react";
import ToDoList from "./index";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

it("matches the snapshot", () => {
    const tree = shallow(<ToDoList />);
    expect(toJson(tree)).toMatchSnapshot();
  });
