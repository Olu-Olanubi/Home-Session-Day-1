var getPrimes = require('../src/getPrimes.js');
describe("test case for getPrimes if arg is not a number", function() {

    it("should return 'invalid input' for data type other than number", function() {
      expect(getPrimes('song')).toBe('invalid input');
    });

    it("should return 'invalid input' for data type other than number", function() {
      expect(getPrimes()).toBe('invalid input');
    });
   });

    describe("test case for getPrimes if number is less than 2", function() {
		it("should return 'cannot list prime' for number", function() {
      expect(getPrimes(0)).toBe('cannot list prime');

    	});	
    	it("should return 'cannot list prime' for number", function() {
      expect(getPrimes(-1)).toBe('cannot list prime');
  		});
  	});

  	describe("test case for getPrimes if number is a greater than 2", function() {
		it("should return [2,3,5,7,10] for 10", function() {
      expect(getPrimes(10)).toEqual([2,3,5,7]);

    	});	
    	it("should return [2,3,5,7,11,13,17,19]  for 20", function() {
      expect(getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
  		});
  	});


