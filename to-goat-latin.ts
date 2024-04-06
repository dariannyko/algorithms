function toGoatLatin(sentence: string): string {
  const vowels = { a: "a", e: "e", i: "i", o: "o", u: "u" };
  const arr = sentence.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let resWord = arr[i];

    if (!vowels[arr[i][0].toLowerCase()]) {
      resWord = arr[i].slice(1) + arr[i][0];
    }

    arr[i] = resWord + "ma" + "a".repeat(i + 1);
  }
  
  return arr.join(" ");
}

toGoatLatin("The quick brown fox jumped over the lazy dog");
