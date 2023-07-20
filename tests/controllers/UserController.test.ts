import { testService } from "../jest.setup";

describe("Test UserController...", () => {
    it("Test ok when call method signup", async () => {

        const test = await testService.post("/v1/user/signup").send({
            "name": "James Stephean",
            "username": "sfsfsfsafsfs",
            "password": "12345678"
        });

        console.log("test")
    })
})