class Processor {
    static Process(data) {
      return data.split("\n").map(row => row.split(","));
    }
  }
  
  module.exports = Processor;
  