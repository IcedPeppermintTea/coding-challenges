// takes an array of words and returns the one that appears more often

function mostFrequentWord(words) {
  let counts = {};
  for (let i = 0; i < words.length; i++) {
    let w = words[i].toLowerCase();
    if (counts[w]) {
      counts[w] = counts[w] + 1;
    } else {
      counts[w] = 1;
    }
  }

  let maxWord = "";
  let maxCount = 0;
  for (let word in counts) {
    if (counts[word] > maxCount) {
      maxWord = word;
      maxCount = counts[word];
    }
  }

  return maxWord;
}

let words = ["the", "cat", "sat", "the", "the", "mat"];

console.log(mostFrequentWord(words));
