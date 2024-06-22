const Build = require("../../dist/browser.min.js");

describe("Is Defined ?", () =>
{
    it("Build is exported", () =>
    {
        expect(Build).toBeInstanceOf(Object);
        expect(Build.Client).toBeInstanceOf(Object);
    });
})