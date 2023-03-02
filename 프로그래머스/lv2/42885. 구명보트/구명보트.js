
function solution(people, limit) {
  if (Math.min(...people) > limit / 2) return people.length;
  if (Math.max(...people) < limit / 2) return people.length / 2;

  people = people.sort((a, b) => a - b);
  let result = 0;

  while (people.length !== 0) {
    if (people[0] + people.at(-1) <= limit) {
      people.shift();
    }
    result++;
    people.pop();

    if (people.length == 0) {
      return result + people.length;
    }
  }
  return result;
}
