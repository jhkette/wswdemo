function getHelloWorld() {
    return "Hello World";
  }
  
  describe("getHelloWorld()", () => {
    it("should return 'Hello World' when invoking the function", () => {
      const result = getHelloWorld();
      expect(result).toBe("Hello World");
    });
  });
  