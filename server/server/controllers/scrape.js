const request = require("request");
const cheerio = require("cheerio");
// const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");

const url = `https://armoredwarfare.gamepedia.com/Vehicles`;
const fetchData = async () => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

exports.getScrapes = async (req, res) => {
  const $ = await fetchData();
  const tanks = [];
  // console.log("results", $);
  $(".gallerybox").each((index, element) => {
    tanks.push({
      name: $(element)
        .text()
        .replace(/\t/g, "")
        .replace(/\n/g, ""),
      img: $(element)
        .find("img")
        .attr("src")
    });
  });
  // console.log(tanks.length);
  res.send(tanks);
};
