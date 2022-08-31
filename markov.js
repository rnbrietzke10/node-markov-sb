const fs = require('fs');
/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== '');
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chain = {};
    // console.log('Words Array: ', this.words);
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i] in chain) {
        if (!chain[this.words[i]].includes(this.words[i + 1]))
          chain[this.words[i]].push(this.words[i + 1]);
      } else if (this.words[i + 1] === undefined) {
        chain[this.words[i]] = [];
      } else {
        chain[this.words[i]] = [this.words[i + 1]];
      }
    }
    // console.log('Chain of words: ', chain);
    return chain;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    const chain = this.makeChains();
    const keys = Object.keys(chain);
    // console.log('Keys Array: ', keys);
    let i = 1;
    let prevWord;
    let generatedText = '';
    while (i <= numWords) {
      const randWordIdx = Math.floor(Math.random() * keys.length);
      let word = keys[randWordIdx];
      if (chain[word] && chain) {
        const randomNextWordIdx = Math.floor(
          Math.random() * chain[word].length
        );
        if (
          prevWord !== chain[word][randomNextWordIdx] &&
          chain[word][randomNextWordIdx] !== undefined
        ) {
          if (chain[word][randomNextWordIdx]) {
            generatedText += ` ${chain[word][randomNextWordIdx]}`;
            prevWord = chain[word][randomNextWordIdx];
            i++;
          }
        }
      }
    }
    // console.log(generatedText.trimStart());
  }
}

let mm;

fs.readFile('./eggs.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading path:\n`, err);
    process.exit(1);
  }
  mm = new MarkovMachine(data);
  const genText = mm.makeText();
  // let wordArray = genText.split(' ');
  // console.log(wordArray);
  // console.log(genText);
});

module.exports = {
  MarkovMachine,
};
