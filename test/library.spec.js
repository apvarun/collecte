import { expect } from "chai";
import Library from "../index.js";

describe("Given an instance of my library", () => {
  let lib;
  before(() => {
    lib = new Library();
  });
  describe("when I need the name", () => {
    it("should return the name", () => {
      expect(lib.name).to.be.equal("Collecte");
    });
  });
});
