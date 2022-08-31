/** Command-line tool to generate Markov text. */

const fs = require('fs');
const { MarkovMachine } = require('./markov');
const axios = require('axios');
const process = require('process');

const generateText = (text) => {
  const mm = new MarkovMachine(text);
  console.log(mm.makeText());
};

/*************** Text From File ***************/

const readFileAndGenerateText = (path) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(`Could not read from ${path}:\n`, err);
      process.exit(1);
    }
    generateText(data);
  });
};

/*************** Text From URL ***************/
const readUrlAndGenerateText = async (url) => {
  let data;
  try {
    data = await axios.get(url);
  } catch (err) {
    console.error(`Could not read data from ${url}: \n `, err);
    process.exit(1);
  }
  generateText(data.data);
};

const commands = process.argv;
console.log(commands);

if (commands[2] === 'file') {
  readFileAndGenerateText(commands[3]);
} else if (commands[2] === 'url') {
  readUrlAndGenerateText(commands[3]);
} else {
  console.error(
    `Method ${commands[2]} is not a valid command, please use file or url`
  );
  process.exit(1);
}
