class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a,b) => a-b);
    this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if (this.items.length === 0 ){
      throw new Error("EmptySortedList")
    }
    return this.items[this.length-1];
  }

  min() {
    if (this.items.length === 0 ){
      throw new Error("EmptySortedList")
    }
    return this.items[0];
  }
  average() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList")
    }
    return this.sum()/this.items.length
  }
  sum() {
    if (this.items.length === 0){
      return 0
    }
    return this.items.reduce((acc, curr) => acc + curr)
  }
};

module.exports = SortedList;
