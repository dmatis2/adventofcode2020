const fs = require("fs");

let tiles = [];

const revStr = (str) => str.split("").reverse().join("");

const match = (tile1, tile2) => {
  for (let i = 0; i < tile1.borders.length; i++) {
    const border = tile1.borders[i];
    if (tile2.borders.includes(border)) {
      return border;
    }
  }
  return null;
};

fs.readFile("input.txt", "utf8", (err, data) => {
  const t = data.split("\n\n");
  t.forEach((tile) => {
    let lines = tile.split("\n");
    let id = lines.shift().match(/\d+/)[0];
    const up = lines[0];
    const right = lines.map((x) => x[9]).join("");
    const down = lines[9];
    const left = lines.map((x) => x[0]).join("");

    let borders = [
      up,
      revStr(up),
      down,
      revStr(down),
      right,
      revStr(right),
      left,
      revStr(left),
    ];

    tiles.push({ id: parseInt(id), borders, matched: [] });
  });

  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i];
    for (let j = i + 1; j < tiles.length; j++) {
      const nextTile = tiles[j];
      const matched = match(tile, nextTile);
      if (matched) {
        tile.matched.push({ tile: nextTile.id, matched });
        nextTile.matched.push({ tile: tile.id, matched });
      }
    }
  }
  const part1 = tiles.filter(x => x.matched.length === 2).reduce((a,x) => a*x.id, 1)
  console.log(part1);
});
