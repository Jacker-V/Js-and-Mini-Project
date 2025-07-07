var lunches = ["VHH", "HVV"];

const addLunchToEnd = (lunches, string) => {
  lunches.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return lunches;
};

const addLunchToStart = (lunches, string) => {
  lunches.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return lunches;
};

const removeLastLunch = (lunches) => {
  if (lunches.length >= 1) {
    const removed = lunches.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return lunches;
};

const removeFirstLunch = (lunches) => {
  if (lunches.length >= 1) {
    const removed = lunches.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return lunches;
};

const getRandomLunch = (lunches) => {
  if (lunches.length >= 1) {
    const randomIndex = Math.floor(Math.random() * lunches.length);
    console.log(`Randomly selected lunch: ${lunches[randomIndex]}`);
  } else {
    console.log("No lunches available.");
  }
};

function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${array.join(', ')}`);
  }
}
