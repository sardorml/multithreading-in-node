const glob = require("glob");
const imageScale = require("./image-scale-threaded");
console.time("time");
(async () => {
  await Promise.all(
    glob
      .sync("./images/*.jpg")
      .filter((img) => img.indexOf("_small") < 0)
      .map(imageScale)
  );
  console.timeEnd("time");
})();
