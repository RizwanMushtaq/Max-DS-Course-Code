console.log("Hallo");

const resultData = new Map();

resultData.set("average", 1.53);
resultData.set("lastResult", null);

const germany = {
  name: "Germany",
  population: 82,
};

resultData.set(germany, 0.89);

for (const el of resultData) {
  console.log(el);
}

resultData.set("average", 33.5);

console.log(resultData.get("average"));
console.log(resultData.average);
