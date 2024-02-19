import { describe, test, expect } from "vitest";
import { shallow } from "enzyme";
import { GifGridItem } from "../components/GifGridItem";

describe("Pruebas en <GifGridItem>", () => {
  test("Test 1: Muestra componente correctamente", () => {
    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
