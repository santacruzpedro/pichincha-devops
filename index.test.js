const index = require("./index");

describe("Tests", () => {
    test("Test 1", () => {    
        index.handler({
            "message" : "This is a test",
            "to": "Jessica Tadeo",
            "from": "Rita Asturia",
            "timeToLifeSec" : 45
            }).then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.message).toBe("\"Hello Jessica Tadeo your message will be send\"");
            }
    )});
});