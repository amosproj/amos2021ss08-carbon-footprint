import jsPDF, { AcroFormTextField } from "jspdf";
import 'jspdf-autotable';
//const pdfConverter = require('jspdf');

const $ = window.$;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

function exportPDF(props) {
  const unit = "pt";
  const size = "A4"; // Use A1, A2, A3 or A4
  const orientation = "portrait"; // portrait or landscape
  const margins = [20, 30, 20, 30];
  const doc = new jsPDF(orientation, unit, size);
  doc.setFontSize(15);


  var html_page2_col1_cont = `
  <h3>Sustainability is the basis for how we do business</h3>
  <p>Our goal at Siemens is to create long-term value by treating people and the environment in a responsible manner.</p>
  <h3>Innovative products and solutions are the foundation of our success</h3>
  <p>They help our customers achieve their business goals while meeting global challenges such as urbanization, demographic change, climate change, and resource scarcity.</p>
  <h3>We walk the talk</h3>
  <p>We pursue ambitious goals with regard to resource efficiency and environmental protection; we see our employees as our most valuable asset and develop them for the long term; we value a corporate culture with a strong emphasis on integrity; and we promote education, social issues, the arts, and culture wherever we operate.</p>
  <h3>Higher standards</h3>
  <p>Siemens aims to set the highest standards for environmental protection in the industry. We urge our business partners to share this ambition and cooperate with both customers and suppliers to strive for continual improvement.</p>
  <p>The main objective of our environmental work is to prevent pollution and continually reduce the environmental impact of our activities in order to protect the environment for future generations.</p>
  <p>To meet these objectives, we will maintain and further develop a culture in which reducing the environmental impact over each product’s life cycle is an integral part of our daily work practices. Our integrated management system for quality, environmental, health, and safety according to ISO 9001, ISO 14001, and OHSAS 18001 is implemented worldwide within the Siemens Energy Sector.</p>
  `
  var html_page2_col2_cont = `
  <h3>Large power transformers</h3>
  <p>The entire energy system is in a state of profound
  change. This poses new challenges to the entire power
  supply system and to the equipment used in electric
  grids. The cross-linking of grids, for instance, an ideal
  solution to ensure supply security, and grid expansions
  help meet these challenges, but they also demand
  equipment that offers high levels of environmental safety
  and reliability.
  Transformers are one of the most important grid
  components. They enable the efficient transmission of
  power even over long distances. And while the basic
  requirement of safely connecting power generation and
  power consumption applies to all power transformers,
  every single transformer is unique – designed according
  to individual factors such as voltage, power, climate,
  system topography, sound level, and many others.
  Siemens large power transformers like the 3-phase GSU
  transformer on the title page (820 MVA, 362±2x2.5%/
  25 kV) are manufactured in accordance with a quality
  management system that is certified to EN ISO 9001.
  Compliance with relevant standards like IEEE, IEC, and
  VDE is a matter of course, just as much as the exclusive
  use of high-quality materials. Qualified employees
  implement the demanding standards in daily practice, so
  quality is the logical result of a universal philosophy.
  All Siemens factories work in accordance with an environ-
  mental management system certified to EN ISO 14001.
  With Siemens transformers you are also on the safe side
  in terms of environmental protection and sustainability.
  For especially high demands we offer special designs
  as well as alternative cooling and insulating fluids,
  such as ester, which offer extra fire safety and environmental
  compatibility. Environmental protection is further
  increased by additional measures like rupture-proof tank
  design. Siemens large power transformers also boast the
  lowest noise emissions worldwide thanks to continuous
  research and development.</p>
  `
  var html_page2_col1 = "<div style='color:white; font-size:11px; border:1px solid; background-color: rgb(51 102 153); padding: 05px 05px; width:250px;'>" + html_page2_col1_cont + "</div>";
  var html_page2_col2 = "<div style='color:white; font-size:11px; border:1px solid; background-color: rgb(51 102 153); padding: 05px 05px; width:250px;'>" + html_page2_col2_cont + "</div>";
  var hmtl_page2 = `
  <html>
    <head>
      <style>
      * {
        box-sizing: border-box;
      }
      
      /* Create two equal columns that floats next to each other */
      .column {
        float: left;
        width: 50%;
        padding: 10px;
      }
      
      /* Clear floats after the columns */
      .row:after {
        content: "";
        display: table;
        clear: both;
      }
      </style>
    </head>
    <body>
      <h1 style='color: red; display: block; font-size: 2em; margin-top: 0.67em; margin-bottom: 0.67em; margin-left: 0; margin-right: 0; font-weight: bold;'>Sustainability as opportunity</h1>
      <div class="row">
        <div class="column">` + html_page2_col1 + `</div>
        <div class="column"></div>
        <div class="column">` + html_page2_col2 + `</div>
      </div>
    </body>
  </html>`;
  //page 2
  doc.addPage();

  doc.html(hmtl_page2, {
    callback: function () {
      doc.save();
    },
    x: 30,
    y: 30
  });

  //page 3
  doc.addPage();
  //page 4
  doc.addPage();
  //page 5
  doc.addPage();
  //page 6
  doc.addPage();
  doc.text("Published by and copyright © 2014: Siemens AG\nEnergy Sector\nFreyeslebenstrasse 1\n91058 Erlangen, Germany", 20, 30);
  doc.output("report.pdf");
};

export default exportPDF;






