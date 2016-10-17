'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that constants are computed properly", function() {
  it("should give 10 for 5 inputs", function() {
    assert(lib.sumOfPrimes(5) == 10);
  });
 describe("Test that constants are computed properly", function() {
  it("should give 17 for 7 inputs", function() {
    assert(lib.sumOfPrimes(7) == 17);
  }); 
describe("Test that constants are computed properly", function() {
   it("should return 28 for input 11", function() {
        assert(lib.sumOfPrimes(11)==28);
    });
 describe("Test that constants are computed properly", function() {  
 it("should return 41 for input 13", function() {
       assert(lib.sumOfPrimes(13)==41);
    });
describe("Test that constants are computed properly", function() {    
it("should return 58 for input 17", function() {
        assert(lib.sumOfPrimes(17)==58);
    });
 describe("Test that constants are computed properly", function() {  
 it("should return 77 for input 20", function() {
       assert(lib.sumOfPrimes(20)==77);
    });
  describe("Test that constants are computed properly", function() { 
 it("should return 100 for input 23", function() {
       assert(lib.sumOfPrimes(23)==100);
    });
  describe("Test that constants are computed properly", function() {    
it("should return the string 'Invalid input' for negative numbers", function() {
        assert(lib.sumOfPrimes(-5)=='Invalid input');
    });
 describe("Test that constants are computed properly", function() {   
it("should return the string 'Invalid input' for strings", function() {
        assert(lib.sumOfPrimes('12xy3z')=='Invalid input');
    });
describe("Test that constants are computed properly", function() {    
it("should return undefined when no input is supplied", function() {
        assert.isUndefined(lib.sumOfPrimes(), 'required arg is not provided');
    });
 describe("Test that constants are computed properly", function() {   
it("should return 129 for input 29", function() {
        assert(lib.sumOfPrimes(29)==129);
    });
 describe("Test that constants are computed properly", function() {   
it("should return 160 for input 31", function() {
       assert(lib.sumOfPrimes(31)==160);
    });
});

});