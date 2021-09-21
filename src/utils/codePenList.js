// Scrape codepens: https://codepen.io/your-work/?grid_type=list&cursor=ZD0xJm89MCZwPTEmdj01MDEwMzU0Ng==
// last scraped: 9/20/2021
// [...document.querySelectorAll(".title")].map((el) => {
//   const title = el.title;
//   const link = el.querySelector("a");
//   const id = link.href.split("/").slice(-1)[0];
//   return { title, id };
// });

// categories
export const UTILITIES = "utilities";
export const GAMES = "games";
export const GRAPHS = "graphs";
export const ARTISTIC = "artistic";

export const CODE_PEN_CATEGORIES = [UTILITIES, GAMES, GRAPHS, ARTISTIC];

export function codePensByCategory() {
  return CODE_PEN_CATEGORIES.reduce((acc, category) => {
    acc[category] = codePenList.filter(
      (pen) => pen.show && pen.category === category
    );
    return acc;
  }, {});
}

const codePenList = [
  { name: "Analog Clock", id: "MWwZBgP", show: true, category: UTILITIES },
  { name: "Bada-Boom", id: "RKOexP" },
  {
    name: "Ball bouncing canvas",
    id: "PJLVMp",
    show: true,
  },
  { name: "Ball move", id: "dxGMRw" },
  {
    name: "Baseball Standings",
    id: "rNaKaqK",
  },
  { name: "Block loaders", id: "qpPeLQ" },
  { name: "Blogger 5000", id: "LWrENq", show: true },
  { name: "calculate", id: "ewKxVg", show: true },
  { name: "Card Board", id: "rodLgL" },
  { name: "Carousel", id: "RwWpWMj", category: UTILITIES },
  { name: "Cat carousel", id: "ZEQoXZb" },
  { name: "Centering nav", id: "bYXOpO" },
  {
    name: "Change colors on scroll",
    id: "jObWvme",
    show: true,
  },

  { name: "cities", id: "omRKgy" },
  { name: "Clocks!", id: "zjVZOM", show: true, category: UTILITIES },
  { name: "Coin toss", id: "LwRVPb" },
  { name: "Color compare", id: "mgvqyL", show: true },
  { name: "Connect 4!", id: "bGdrOxq", show: true, category: GAMES },
  { name: "Create form", id: "NBbwGR" },
  {
    name: "CSS Digital Hex Clock",
    id: "VpdYjO",
  },
  { name: "CSS is Awesome", id: "jOPBoNR", show: true },
  {
    name: "CSS Social Card Hover Effect",
    id: "YzKdjbV",
  },
  { name: "d3 stuff", id: "wEvywB" },
  { name: "date ranges", id: "QWyWXxE" },
  { name: "Dice game", id: "abvWYEo", category: GAMES },
  { name: "Drop7", id: "zYGRWMO", show: true, category: GAMES },
  { name: "Ellipse animate", id: "MaWmbo" },
  { name: "Etch a sketch", id: "QWjOEGy" },
  { name: "Faded border", id: "ybOjNb" },
  { name: "Fast ToDo", id: "zmVNZY" },
  {
    name: "FCC: Tribute Page",
    id: "JEVadJ",
  },
  { name: "Flatty Shapes", id: "xXmXrK" },
  {
    name: "Flexbox education",
    id: "rmmwgo",
  },
  { name: "Forrest!", id: "mxrooE", show: true },
  {
    name: "Four Word Phrase Generator",
    id: "eRVOwZ",
    show: true,
  },
  { name: "guitar fret", id: "gVxvYE" },
  { name: "Hover to Spin", id: "WgpXoX" },
  {
    name: "Line up with Flex",
    id: "WBLxYJ",
  },
  { name: "List layout", id: "eYmjEZB" },
  { name: "Loading border", id: "eweEPK" },
  { name: "Memory game", id: "KKdpyer", show: true, category: GAMES },
  { name: "Menu thing", id: "gOYLwbX" },
  { name: "New Loader", id: "xegmRY", show: true },
  { name: "NWWYjLa", id: "NWWYjLa" },
  {
    name: "Overflow example",
    id: "XWrQgpV",
  },
  { name: "pEkkOr", id: "pEkkOr" },
  { name: "Pick a dog!", id: "rNVZMbP" },
  {
    name: "Random Number plot",
    id: "gOpGmwV",
  },
  {
    name: "React Leaderboard",
    id: "MWKWyVa",
    show: true,
  },
  {
    name: "Redundant Robot Cube",
    id: "qRRXLL",
  },
  { name: "Robot Head", id: "oLpQXW", show: true },
  { name: "Rocket!", id: "yMoqbr" },
  { name: "rotate circle", id: "LOPmEv" },
  { name: "Row layout", id: "QaeyXm" },
  {
    name: "Simply image upload",
    id: "PoqNadJ",
  },
  {
    name: "Spell it out for me",
    id: "RwrLrNM",
    show: true,
  },
  {
    name: "square switchy thingy",
    id: "xgBozg",
  },
  { name: "Stars", id: "NjVLLO", show: true, category: ARTISTIC },
  { name: "Stopwatch", id: "KrGBdJ", show: true },
  {
    name: "Temperature converter",
    id: "bygWeO",
    show: true,
    category: UTILITIES,
  },
  { name: "Text Mask", id: "arYrMw" },
  { name: "The Moon", id: "zwXjaB", show: true, category: ARTISTIC },
  { name: "The Sun", id: "BRbZQd", show: true, category: ARTISTIC },
  { name: "Top Secret info", id: "JjjvGVL" },
  { name: "Tripshit", id: "GPBEPr" },
  { name: "URL qs", id: "PoPJxpo" },
  {
    name: "Visualize Longest Palindromic Sequence",
    id: "pogvweg",
  },
  { name: "vpoLdE", id: "vpoLdE" },
  { name: "Walking Man", id: "XWrNyKB", show: true, category: ARTISTIC },
  { name: "Words disappear", id: "PeQVXz", show: true },
  { name: "WqomvM", id: "WqomvM", show: true },
  { name: "parse RGB", id: "KKqadRW" },
  { name: "AnimationEnd", id: "poPmeaJ" },
  { name: "Fetch RSS", id: "MWmqzYm" },
  { name: "d3_barchart_02_title", id: "ExmYqbQ", category: GRAPHS },
  { name: "d3_barchart_01_initial", id: "QWvLXrR", category: GRAPHS },
  { name: "D3 Bar Chart", id: "YzZeJXO" },
  { name: "Chutes and Ladders", id: "abJJLWJ", category: GAMES },
  { name: "textarea replace", id: "GRWZrOG" },
  { name: "React Links", id: "eYvpXyg" },
  { name: "React ToDo", id: "dyvYYjQ" },
  { name: "Mock site", id: "LYWEMgZ" },
  { name: "Mock site", id: "ExWadRm" },
  { name: "canvas thumbs", id: "xxgoaaY" },
  { name: "wvgbQeE", id: "wvgbQeE" },
  { name: "Demo", id: "KKaNEgd" },
  { name: "svg lines", id: "abpmBbZ", category: ARTISTIC },
  { name: "War!", id: "bGgexEa", category: GAMES },
  { name: "Brief layout", id: "xxRoERG" },
  { name: "Mouse Odometer", id: "RwoYQYY", category: ARTISTIC },
  { name: "example layout", id: "dyOpMQO" },
  { name: "GRNqGdM", id: "GRNqGdM" },
  { name: "layout", id: "LYbGKEd" },
  { name: "Drop Cats", id: "wvoKYJO" },
  { name: "Spinning Cube No Robot", id: "GRNpdax", category: ARTISTIC },
  { name: "table load", id: "yLVyNQp" },
  { name: "Link URLs OOJS", id: "gOLYNLG" },
  { name: "Simple grid", id: "BaLVLEm" },
  { name: "Calendar Picker", id: "dypJPzZ", category: UTILITIES },
  { name: "calculator", id: "ExgwZYY", category: UTILITIES },
  { name: "canvas grid", id: "ExgXMEW" },
  { name: "SVG gradient animation loop", id: "poEPwOR" },
  { name: "SVG Loader With Spinning Gradient", id: "VwKpoEa" },
  { name: "Timers", id: "RwGbpjL", category: UTILITIES },
  { name: "Shadows", id: "bGeJoJM" },
  { name: "Dot grid", id: "bGeMrxp" },
  { name: "rotate background", id: "vYKjJRM" },
  { name: "Simple Carousel Procedural", id: "Bazxyxj" },
  { name: "Simple Carousel OOP", id: "oNLqrpG" },
  { name: "Flexbox scroll", id: "oNLYZmg" },
  { name: "Happy Cake day!", id: "abZdPaB" },
  { name: "Quiz Game", id: "gOMpKqL", category: GAMES },
  { name: "easy month", id: "WNwEEyd" },
  { name: "Clicker evolution", id: "LYNyqyz" },
  { name: "Mousover image", id: "ZEWWjop" },
  { name: "Bowling", id: "yLOeOMd", category: GAMES },
  { name: "Loading example", id: "ZEWGEJo" },
];

export default codePenList;
