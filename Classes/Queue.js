class Queue {
  constructor(...value) {
    this.actual = []

    this.put(...value);
  }

  put(...value) {
    this.actual.push(...value);
  }

  next() {
    return this.actual[0];
  }

  isEmpty() {
    if(this.actual.length > 0)
      return true;
  
    return false;
  }

  freeSpace() {
    return this.actual.shift();
  }
}

module.exports = Queue;