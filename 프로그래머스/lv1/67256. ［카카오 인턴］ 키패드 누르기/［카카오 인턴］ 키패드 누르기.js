const leftNumbers = [1, 4, 7];
const rightNumbers = [3, 6, 9]; 

function solution(numbers, hand) {
  let result = "";
  const current = {
    left: 10,
    right: 12,
  };

  for (let i = 0; i < numbers.length; i++) {
    if (leftNumbers.includes(numbers[i])) {
      result += "L";
      current["left"] = numbers[i]; 
    } else if (rightNumbers.includes(numbers[i])) {
      result += "R";
      current["right"] = numbers[i];
    } else {
      const locationObj = { ...current }; 

      for (let hand in locationObj) {
        numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
        let location = Math.abs(numbers[i] - locationObj[hand]);

        if (location >= 3) {
          location = Math.trunc(location / 3) + (location % 3);
        }
        locationObj[hand] = location;
      }

      if (locationObj["left"] === locationObj["right"]) {
        result += hand === "left" ? "L" : "R";
        current[hand] = numbers[i];
      } else {
        if (locationObj["left"] > locationObj["right"]) {
          result += "R";
          current["right"] = numbers[i];
        } else {
          result += "L";
          current["left"] = numbers[i];
        }
      }
    }
  }
  return result;
}

