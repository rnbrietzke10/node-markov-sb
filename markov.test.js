const { MarkovMachine } = require('./markov');

let mm;
const text =
  'I would not, could not, in the rain. Not in the dark. Not on a train, Not in a car, Not in a tree. I do not like them, Sam, you see. Not in a house. Not in a box. Not with a mouse. Not with a fox. I will not eat them here or there. I do not like them anywhere!';

describe('test makeChains function', function () {
  beforeEach(function () {
    console.log('BEFORE EACH!');
    mm = new MarkovMachine(text);
  });
  test('returns an object', function () {
    expect(mm.makeChains()).toBeInstanceOf(Object);
  });

  test('markov chains', function () {
    const marckovChainObj = new MarkovMachine(
      'I would not, could not, in the rain. Not in the dark.'
    );

    expect(marckovChainObj.makeChains()).toEqual({
      I: ['would'],
      would: ['not,'],
      'not,': ['could', 'in'],
      could: ['not,'],
      in: ['the'],
      the: ['rain.', 'dark.'],
      'rain.': ['Not'],
      Not: ['in'],
      'dark.': [],
    });
  });
});

describe('test makeText Function', function () {
  beforeEach(function () {
    console.log('BEFORE EACH!');
    mm = new MarkovMachine(text);
  });

  test('make sure stops generating text at specified length', function () {
    const marckovChainObj = new MarkovMachine(
      'I would not, could not, in the rain. Not in the dark.'
    );
    const generatedText = marckovChainObj.makeText(10);
    const wordsFromGeneratedText = generatedText.split(' ');
    expect(wordsFromGeneratedText.length).toBe(10);
  });
});
