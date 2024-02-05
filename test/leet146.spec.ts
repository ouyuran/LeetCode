import LRU from "../src/leet146";
import { expect } from "chai";

describe("leet code ", () => {

  it("case 1", () => {
    const lRUCache = new LRU(2);
    lRUCache.put(1, 1); // 缓存是 {1=1}
    lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
    expect(lRUCache.get(1)).to.equal(1);    // 返回 1
    lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
    expect(lRUCache.get(2)).to.equal(-1);    // 返回 -1 (未找到)
    lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
    expect(lRUCache.get(1)).to.equal(-1);    // 返回 -1 (未找到)
    expect(lRUCache.get(3)).to.equal(3);    // 返回 3
    expect(lRUCache.get(4)).to.equal(4);    // 返回 4

  })

  // it("case 2", () => {
  //   expect(fn()).to.equal();
  // })

})