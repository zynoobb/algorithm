const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [songLen, chordLen] = data.shift().split(" ").map(Number);

  const songChordObj = {};
  data.slice(0, songLen).forEach((el) => {
    const [len, name, ...chords] = el.split(" ");
    const chords3 = chords.slice(0, 3).join("");

    if (!songChordObj[chords3]) songChordObj[chords3] = [name];
    else songChordObj[chords3].push(name);
  });

  const findChords = data
    .slice(songLen, songLen + chordLen)
    .map((el) => el.split(" ").join(""));

  const result = findChords.map((el) => {
    const check = songChordObj[el];
    return !check ? "!" : check.length === 1 ? songChordObj[el][0] : "?";
  });

  console.log(result.join("\n"));
}

solution(input);
