const socketSetup = require("./socketSetup")
// @ponicode
describe("socketSetup", () => {
    test("0", () => {
        let callFunction = () => {
            socketSetup(1.0, "mysql")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            socketSetup(-29.45, "mongo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            socketSetup(0.5, "mongo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            socketSetup(0.5, "mysql")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            socketSetup(0.5, "postgres")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            socketSetup(Infinity, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
