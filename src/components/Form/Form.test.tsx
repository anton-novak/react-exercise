import matchers from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from '@jest/globals';

expect.extend(matchers);

// TODO: add more tests

describe("User input form", () => {
    test("renders a form with three input fields of specific types", () => {
        expect(1).toBe(1);
    })
});

