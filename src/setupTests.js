import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { toJson, createSerializer } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
expect.addSnapshotSerializer(toJson);
