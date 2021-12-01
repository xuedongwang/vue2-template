import { expect } from 'chai';
import { add } from "../src/utils/add";

describe("utils::add test", function() {
  it("should 3 when add(1, 2) return", function() {
    expect(add(1, 2)).to.equal(3);
  });
  it("should 5 when add(2, 3) return", function() {
    expect(add(2, 3)).to.equal(5);
  });
});