import HelloWorld from "../utils/HelloWorld";

it("Should return 'Hello Lucas'", () => {
  const result = HelloWorld();
  expect(result).toBe("Hello Lucas");
});
