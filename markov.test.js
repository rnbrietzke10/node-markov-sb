const { MarkovMachine } = require('./markov');

describe('test makeChains function', function () {
  let mm;
  const text =
    'I would not, could not, in the rain. Not in the dark. Not on a train, Not in a car, Not in a tree. I do not like them, Sam, you see. Not in a house. Not in a box. Not with a mouse. Not with a fox. I will not eat them here or there. I do not like them anywhere!';
  beforeEach(function () {
    console.log('BEFORE EACH!');
    mm = new MarkovMachine(text);
  });
  test('returns an object', function () {
    expect(mm.makeChains()).toBeInstanceOf(Object);
  });
  //   test('playing with toContain matcher', function () {
  //     const colors = ['red', 'orange'];

  //     expect(colors).toContain('red');
  //     expect('hello').toContain('hell');
  //   });

  //   test('playing with numeric matchers', function () {
  //     expect(7).toBeGreaterThanOrEqual(2);
  //     expect(7).toBeGreaterThanOrEqual(7);
  //   });

  //   test('playing with boolean matchers', function () {
  //     expect('hi').toBeTruthy();
  //     expect('').toBeFalsy();
  //   });

  //   test('playing with any', function () {
  //     const randNum = Math.random() * 6;
  //     expect(randNum).toEqual(expect.any(Number));
  //     expect('ASDK').toEqual(expect.any(String));
  //   });

  //   test('playing with not', function () {
  //     const numLives = 9;
  //     expect(numLives).not.toEqual(0);
  //     expect(numLives).not.toEqual(expect.any(Array));
  //   });
});
