const request = require("request");
const cheerio = require("cheerio");
// const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");

const url = `http://www.tanks-encyclopedia.com/coldwar/US/M1_Abrams.php`;
const fetchData = async () => {
  const result = await axios.get(url);
  // console.log("Result", result.data);
  return cheerio.load(result.data);
};

exports.getHelos = async (req, res) => {
  const $ = await fetchData();
  const helos = [];
  // const heloBox = await $(".texte_principal_small").children();

  // console.log("results II", heloBox);

  $(".texte_principal_small")
    .children()
    .each((index, element) => {
      helos.push(
        {
          name: $(element)
        }
        //   .text()
        //   .replace(/\t/g, "")
        //   .replace(/\n/g, ""),
        // img: $(element)
        //   .find("img")
        //   .attr("src")
      );
    });
  console.log(helos);
  res.send(helos);
};

// const url = `http://www.tanks-encyclopedia.com/modern-tanks.php`;
// const fetchData = async () => {
//   const result = await axios.get(url);
//   // console.log("Result", result.data);
//   return cheerio.load(result.data);
// };

// exports.getHelos = async (req, res) => {
//   const $ = await fetchData();
//   const helos = [];
//   // const heloBox = await $(".col.span_2_of_5").find("img");

//   // console.log("results II", heloBox);

//   $(".col.span_2_of_5")
//     .find("img")
//     .each((index, element) => {
//       helos.push(
//         {
//           name: $(element).attr("h2"),
//           image: $(element).attr("src")
//         }
//         //   .text()
//         //   .replace(/\t/g, "")
//         //   .replace(/\n/g, ""),
//         // img: $(element)
//         //   .find("img")
//         //   .attr("src")
//       );
//     });
//   console.log(helos);
//   res.send(helos);
// };
