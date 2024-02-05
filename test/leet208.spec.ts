import Trie from "../src/leet208";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    const tire = new Trie();
    tire.insert("apple");
    tire.insert("abc")
    expect(tire.search("apple")).to.equal(true);
    expect(tire.search("app")).to.equal(false);
    expect(tire.startsWith("app")).to.equal(true);
    tire.insert("app");
    expect(tire.search("app")).to.equal(true);
  })

})