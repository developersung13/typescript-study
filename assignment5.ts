type Words = {
  [term: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      return (this.words[word.term] = word.def);
    } else {
      return `A term '${word.term}' is already defined in a dictionary.`;
    }
  }
  get(term: string) {
    if (this.words[term] === undefined) {
      return `A term '${term}' is not defined in a dictionary.`;
    } else {
      return this.words[term];
    }
  }
  delete(term: string) {
    if (this.words[term] === undefined) {
      console.log(`A term '${term}' is not defined in a dictionary.`);
    } else {
      delete this.words[term];
    }
  }
  update(term: string, newDef: string) {
    if (this.words[term] === undefined) {
      console.log(`A term '${term}' is not defined in a dictionary.`);
    } else {
      this.words[term] = newDef;
    }
  }
  showAll() {
    if (Object.keys(this.words).length === 0) {
      return `There's no word in a dictionary.`;
    } else {
      return Object.assign({}, this.words);
    }
  }
  count() {
    return Object.keys(this.words).length;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const word1 = new Word("cat", "고양이");
const word2 = new Word("dog", "강아지");
const word3 = new Word("book", "책");

const dict = new Dict();

dict.add(word1);
dict.add(word2);
dict.add(word3);

console.log(dict.showAll()); // { cat: '고양이', dog: '강아지', book: '책' }
console.log(dict.count()); // 3

dict.update("dog", "개");
console.log(dict.showAll()); // { cat: '고양이', dog: '개', book: '책' }

dict.delete("book");
console.log(dict.showAll()); // { cat: '고양이', dog: '개' }
console.log(dict.count()); // 2

console.log(dict.get("cat")); // 고양이
