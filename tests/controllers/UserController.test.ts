import { StatusCodes } from "http-status-codes";
import { testService } from "../jest.setup";

describe("Test UserController...", () => {

    it("Test ok when call method signup", async () => {
        testService.post("/v1/user/signup").send({
            "name": "James Stephean",
            "username": "James.Steph",
            "password": "12345678"
        }).expect(StatusCodes.OK)
    })

    it("Should get error when call api signup", async () => {
        testService.post("/v1/user/signup").send({
            "name": "Richard Clayderman",
            "username": "Rich",
            "password": "123"
        }).expect(StatusCodes.BAD_GATEWAY)

    })

    it("Test ok when try signin", () => {
        testService.get("/v1/user/signin").send({
            "username": "James.Steph",
            "password": "12345678"
        }).expect(StatusCodes.OK)
    })

})