import { fireEvent, render } from "@testing-library/svelte";
import { describe, expect, test } from '@jest/globals'
import Nav from './Nav.svelte'

test("module loading", () => {
    const { component } = render(Nav);
    expect(component.addition(1, 2)).toEqual(3)

})