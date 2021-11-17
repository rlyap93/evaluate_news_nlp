import "babel-polyfill";
import { handleSubmit } from '../src/client/js/formHandler';


describe("Testing the submit functionality", () => {
    // Testing handleSubmit Type
    test("Testing the handleSubmit() function", () => {
           expect(typeof handleSubmit).toBe('function');
           expect(handleSubmit).toBeDefined();
    })
});