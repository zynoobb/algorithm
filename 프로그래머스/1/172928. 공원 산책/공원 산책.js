function solution(park, routes) {
  let location;
  for (let i = 0; i < park.length; i++) {
    let temp = park[i].indexOf("S");
    if (temp !== -1) {
      location = [i, temp];
      break;
    }
  }

  function locationVerify(x, y) {
    return 0 <= x && x < park[0].length && 0 <= y && y < park.length;
  }

  function act(route) {
    const directions = {
      S: [1, 0],
      N: [-1, 0],
      E: [0, 1],
      W: [0, -1],
    };

    const [[dy, dx], walk] = route
      .split(" ")
      .map((el) => (isNaN(el) ? directions[el] : Number(el)));

    for (let i = 1; i <= walk; i++) {
      const [ny, nx] = [location[0] + dy * i, location[1] + dx * i];
      if (!locationVerify(nx, ny) || park[ny][nx] == "X") return false;
    }

    return [location[0] + dy * walk, location[1] + dx * walk];
  }

  routes.forEach((route) => {
    if (act(route)) location = act(route);
  });

  return location;
}