const input = []; // input data

for (let i = 0; i < input.length - 1; i++) {
  let found = false;
  if (input.includes(2020 - input[i])) {
    console.log(input[i] * (2020 - input[i]));
    found = true;
    break;
  }
  if (found) break;
}

// part 2
for (let i = 0; i < input.length - 1; i++) {
  let found = false;
  for (let j = 1; j < input.length; j++) {
    if (input[i] === input[j]) continue;
    if (input.includes(2020 - input[i] - input[j])) {
      console.log(input[i] * input[j] * (2020 - input[i] - input[j]));
      found = true;
      break;
    }
  }
  if (found) break;
}
