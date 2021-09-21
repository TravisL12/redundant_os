// Scrape codepens: https://codepen.io/your-work/?grid_type=list&cursor=ZD0xJm89MCZwPTEmdj01MDEwMzU0Ng==
// last scraped: 9/20/2021
// [...document.querySelectorAll(".title")].map((el) => {
//   const title = el.title;
//   const link = el.querySelector("a");
//   const id = link.href.split("/").slice(-1)[0];
//   return { title, id };
// });

const UTILITIES = "utilities";
const GAMES = "games";
const GRAPHS = "graphs";
const ARTISTIC = "artistic";
const FUN = "fun";
const ANIMATION = "animation";
const LAYOUT = "layout";

export const CODE_PEN_CATEGORIES = [
  UTILITIES,
  GAMES,
  GRAPHS,
  ARTISTIC,
  FUN,
  LAYOUT,
];

export function codePensByCategory() {
  return CODE_PEN_CATEGORIES.reduce((acc, category) => {
    acc[category] = codePenList.filter((pen) => pen.category === category);
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
    category: FUN,
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
  { name: "Centering nav", id: "bYXOpO", category: LAYOUT },
  {
    name: "Change colors on scroll",
    id: "jObWvme",
    show: true,
    category: LAYOUT,
  },

  { name: "cities", id: "omRKgy" },
  { name: "Clocks!", id: "zjVZOM", show: true, category: UTILITIES },
  { name: "Coin toss", id: "LwRVPb" },
  { name: "Color compare", id: "mgvqyL", show: true },
  { name: "Connect 4!", id: "bGdrOxq", show: true, category: GAMES },
  { name: "Create form", id: "NBbwGR", category: LAYOUT },
  {
    name: "CSS Digital Hex Clock",
    id: "VpdYjO",
    category: ARTISTIC,
  },
  { name: "CSS is Awesome", id: "jOPBoNR", show: true, category: FUN },
  {
    name: "CSS Social Card Hover Effect",
    id: "YzKdjbV",
    category: LAYOUT,
  },
  { name: "d3 stuff", id: "wEvywB", category: GRAPHS },
  { name: "date ranges", id: "QWyWXxE", category: UTILITIES },
  { name: "Dice game", id: "abvWYEo", category: GAMES },
  { name: "Drop7", id: "zYGRWMO", show: true, category: GAMES },
  { name: "Ellipse animate", id: "MaWmbo" },
  { name: "Etch a sketch", id: "QWjOEGy", category: FUN },
  { name: "Faded border", id: "ybOjNb", category: LAYOUT },
  { name: "Fast ToDo", id: "zmVNZY", category: LAYOUT },
  {
    name: "FCC: Tribute Page",
    id: "JEVadJ",
  },
  { name: "Flatty Shapes", id: "xXmXrK" },
  {
    name: "Flexbox education",
    id: "rmmwgo",
    category: LAYOUT,
  },
  { name: "Forrest!", id: "mxrooE", show: true, category: ARTISTIC },
  {
    name: "Four Word Phrase Generator",
    id: "eRVOwZ",
    show: true,
    category: FUN,
  },
  { name: "guitar fret", id: "gVxvYE" },
  { name: "Hover to Spin", id: "WgpXoX", category: LAYOUT },
  {
    name: "Line up with Flex",
    id: "WBLxYJ",
    category: LAYOUT,
  },
  { name: "List layout", id: "eYmjEZB", category: LAYOUT },
  { name: "Loading border", id: "eweEPK", category: LAYOUT },
  { name: "Memory game", id: "KKdpyer", show: true, category: GAMES },
  { name: "Menu thing", id: "gOYLwbX", category: LAYOUT },
  { name: "New Loader", id: "xegmRY", show: true },
  { name: "NWWYjLa", id: "NWWYjLa" },
  {
    name: "Overflow example",
    id: "XWrQgpV",
    category: LAYOUT,
  },
  { name: "pEkkOr", id: "pEkkOr" },
  { name: "Pick a dog!", id: "rNVZMbP" },
  {
    name: "Random Number plot",
    id: "gOpGmwV",
    category: FUN,
  },
  {
    name: "React Leaderboard",
    id: "MWKWyVa",
    show: true,
  },
  {
    name: "Redundant Robot Cube",
    id: "qRRXLL",
    category: ARTISTIC,
  },
  { name: "Robot Head", id: "oLpQXW", show: true, category: ARTISTIC },
  { name: "Rocket!", id: "yMoqbr" },
  { name: "rotate circle", id: "LOPmEv", category: LAYOUT },
  { name: "Row layout", id: "QaeyXm", category: LAYOUT },
  {
    name: "Simply image upload",
    id: "PoqNadJ",
    category: UTILITIES,
  },
  {
    name: "Spell it out for me",
    id: "RwrLrNM",
    show: true,
    category: ARTISTIC,
  },
  {
    name: "square switchy thingy",
    id: "xgBozg",
    category: LAYOUT,
  },
  { name: "Stars", id: "NjVLLO", show: true, category: ARTISTIC },
  { name: "Stopwatch", id: "KrGBdJ", show: true, category: UTILITIES },
  {
    name: "Temperature converter",
    id: "bygWeO",
    show: true,
    category: UTILITIES,
  },
  { name: "Text Mask", id: "arYrMw", category: LAYOUT },
  { name: "The Moon", id: "zwXjaB", show: true, category: ARTISTIC },
  { name: "The Sun", id: "BRbZQd", show: true, category: ARTISTIC },
  { name: "Top Secret info", id: "JjjvGVL" },
  { name: "Tripshit", id: "GPBEPr" },
  { name: "URL qs", id: "PoPJxpo", category: UTILITIES },
  {
    name: "Visualize Longest Palindromic Sequence",
    id: "pogvweg",
    category: ARTISTIC,
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
  { name: "D3 Bar Chart", id: "YzZeJXO", category: GRAPHS },
  { name: "Chutes and Ladders", id: "abJJLWJ", category: GAMES },
  { name: "textarea replace", id: "GRWZrOG", category: UTILITIES },
  { name: "React Links", id: "eYvpXyg", category: LAYOUT },
  { name: "React ToDo", id: "dyvYYjQ", category: LAYOUT },
  { name: "Mock site", id: "LYWEMgZ", category: LAYOUT },
  { name: "Mock site", id: "ExWadRm", category: LAYOUT },
  { name: "canvas thumbs", id: "xxgoaaY", category: LAYOUT },
  { name: "wvgbQeE", id: "wvgbQeE" },
  { name: "Demo", id: "KKaNEgd", category: LAYOUT },
  { name: "svg lines", id: "abpmBbZ", category: ARTISTIC },
  { name: "War!", id: "bGgexEa", category: GAMES },
  { name: "Brief layout", id: "xxRoERG", category: LAYOUT },
  { name: "Mouse Odometer", id: "RwoYQYY", category: ARTISTIC },
  { name: "example layout", id: "dyOpMQO", category: LAYOUT },
  { name: "GRNqGdM", id: "GRNqGdM" },
  { name: "layout", id: "LYbGKEd" },
  { name: "Drop Cats", id: "wvoKYJO", category: LAYOUT },
  { name: "Spinning Cube No Robot", id: "GRNpdax", category: ARTISTIC },
  { name: "table load", id: "yLVyNQp", category: LAYOUT },
  { name: "Link URLs OOJS", id: "gOLYNLG" },
  { name: "Simple grid", id: "BaLVLEm", category: LAYOUT },
  { name: "Calendar Picker", id: "dypJPzZ", category: UTILITIES },
  { name: "calculator", id: "ExgwZYY", category: UTILITIES },
  { name: "canvas grid", id: "ExgXMEW", category: LAYOUT },
  { name: "SVG gradient animation loop", id: "poEPwOR", category: ARTISTIC },
  {
    name: "SVG Loader With Spinning Gradient",
    id: "VwKpoEa",
    category: ARTISTIC,
  },
  { name: "Timers", id: "RwGbpjL", category: UTILITIES },
  { name: "Shadows", id: "bGeJoJM", category: ARTISTIC },
  { name: "Dot grid", id: "bGeMrxp", category: LAYOUT },
  { name: "rotate background", id: "vYKjJRM" },
  { name: "Simple Carousel Procedural", id: "Bazxyxj", category: LAYOUT },
  { name: "Simple Carousel OOP", id: "oNLqrpG", category: LAYOUT },
  { name: "Flexbox scroll", id: "oNLYZmg", category: LAYOUT },
  { name: "Happy Cake day!", id: "abZdPaB", category: FUN },
  { name: "Quiz Game", id: "gOMpKqL", category: GAMES },
  { name: "easy month", id: "WNwEEyd", category: LAYOUT },
  { name: "Clicker evolution", id: "LYNyqyz", category: LAYOUT },
  { name: "Mousover image", id: "ZEWWjop", category: LAYOUT },
  { name: "Bowling", id: "yLOeOMd", category: GAMES },
  { name: "Loading example", id: "ZEWGEJo", category: LAYOUT },
];

export default codePenList;
