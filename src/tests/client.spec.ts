import { Client } from "../code/main";

describe("Is Defined ?", () =>
{
    it("Client is exported", () =>
    {
        expect(Client).toBeInstanceOf(Object);
    });
})