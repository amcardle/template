import {  render } from "@testing-library/svelte";
import { expect, test } from "@jest/globals";
import ExampleComponent from "./ExampleComponent.svelte";

test("example test", () => {
  expect(1 + 1).toEqual(2);
});

test("function in component", () => {
  const { component } = render(ExampleComponent);
  expect(component.addition(1, 2)).toEqual(3);
});

