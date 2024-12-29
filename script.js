const colorCombinations = [
  { name: "English Red", code: "#de4500", bgName: "Cerulian Blue", bgCode: "#29bdad" },
  { name: "Dark Tyrian Blue", code: "#0d2b52", bgName: "Yellow Orange", bgCode: "#ff8c00" },
  { name: "Pale Lemon Yellow", code: "#fff59e", bgName: "Raw Sienna", bgCode: "#b85e00" },
  { name: "Red Violet", code: "#3400a3", bgName: "Isabella Color", bgCode: "#c3a55c" },
  { name: "Cossack Green", code: "#328e13", bgName: "Vandar Poel’s Blue", bgCode: "#003e83" },
  { name: "Deep Indigo", code: "#000831", bgName: "Grenadine Pink", bgCode: "#ff616b" },
  { name: "Glaucous Green", code: "#b3e8c2", bgName: "Orange", bgCode: "#ff5200" },
  { name: "Cinnamon Rufous", code: "#c2612c", bgName: "Grayish Lavender", bgCode: "#b8b8ff" },
  { name: "Dull Blue Violet", code: "#6e66d4", bgName: "Violet Red", bgCode: "#3d0079" },
  { name: "Dark Citrine", code: "#7e8743", bgName: "Cinnamon Rufous", bgCode: "#c2612c" },
  { name: "Mineral Gray", code: "#9fc2b2", bgName: "Ivory Buff", bgCode: "#ebd999" },
  { name: "Green Blue", code: "#2dbc94", bgName: "Isabella Color", bgCode: "#c3a55c" },
  { name: "Raw Sienna", code: "#b85e00", bgName: "Veronia Purple", bgCode: "#7e3075" },
  { name: "Naples Yellow", code: "#faed8f", bgName: "Spinel Red", bgCode: "#ff4dc9" },
  { name: "Grayish Lavender", code: "#b8b8ff", bgName: "Benzol Green", bgCode: "#00d973" },
  { name: "Pale King’s Blue", code: "#abf5ed", bgName: "Vandyke Red", bgCode: "#740909" },
  { name: "Eugenia Red", code: "#e62e73", bgName: "Sea Green", bgCode: "#33ff7d" },
  { name: "Dusky Madder Violet", code: "#2d0060", bgName: "Fawn", bgCode: "#d1b0b3" },
  { name: "Night Green", code: "#7aff00", bgName: "Mars Brown / Tobacco", bgCode: "#522000" },
  { name: "Laelia Pink", code: "#cc85d1", bgName: "Calamine Blue", bgCode: "#80ffcc" },
  { name: "Grenadine Pink", code: "#ff616b", bgName: "Sea Green", bgCode: "#33ff7d" },
  { name: "Deep Lyons Blue", code: "#0024cc", bgName: "Yellow", bgCode: "#ffff00" },
  { name: "Light Mauve", code: "#9161f2", bgName: "Cinnamon Buff", bgCode: "#ffbf6e" },
  { name: "Veronia Purple", code: "#7e3075", bgName: "Sepia", bgCode: "#503d00" },
  { name: "Etruscan Red", code: "#c9303e", bgName: "Nile Blue", bgCode: "#bfffe6" },
  { name: "Pale Raw Umber", code: "#5e4017", bgName: "Golden Yellow", bgCode: "#fa9442" },
  { name: "Corinthian Pink", code: "#ffa6d9", bgName: "Slate Color", bgCode: "#1b3644" },
  { name: "Deep Indigo", code: "#000831", bgName: "Madder Brown", bgCode: "#651300" },
  { name: "Salvia Blue", code: "#96bfe6", bgName: "Kronbergs Green", bgCode: "#759243" },
  { name: "Mineral Gray", code: "#9fc2b2", bgName: "Pompeian Red", bgCode: "#a90636" },
  { name: "Pale Lemon Yellow", code: "#fff59e", bgName: "Red Orange", bgCode: "#e81900" },
  { name: "Night Green", code: "#7aff00", bgName: "Ochraceous Salmon", bgCode: "#d99e73" },
  { name: "Raw Sienna", code: "#b85e00", bgName: "Slate Color", bgCode: "#1b3644" },
  { name: "Eosine Pink", code: "#ff5ec4", bgName: "Neutral Gray", bgCode: "#b5d1cc" },
  { name: "Carmine Red", code: "#a10b2b", bgName: "Light Brown Drab", bgCode: "#b08699" },
  { name: "Sulphine Yellow", code: "#baa600", bgName: "Turquoise Green", bgCode: "#b5ffc2" },
  { name: "Red Violet", code: "#3400a3", bgName: "Brick Red", bgCode: "#a32100" },
  { name: "Diamine Green", code: "#1b8e13", bgName: "Deep Lyons Blue", bgCode: "#0024cc" },
  { name: "Carmine", code: "#d60036", bgName: "Helvetia Blue", bgCode: "#0057ba" },
  { name: "Vinaceous Tawny", code: "#c74300", bgName: "Citron Yellow", bgCode: "#a6d40d" },
  { name: "Dark Citrine", code: "#7e8743", bgName: "Calamine Blue", bgCode: "#80ffcc" },
  { name: "Violet", code: "#2619d1", bgName: "Yellow Ocher", bgCode: "#e0b81f" },
  { name: "Aconite Violet", code: "#9c52f2", bgName: "Corinthian Pink", bgCode: "#ffa6d9" },
  { name: "Olympic Blue", code: "#4f8fe6", bgName: "Light Porcelain Green", bgCode: "#23c17c" },
  { name: "Seashell Pink", code: "#ffcfc4", bgName: "Lemon Yellow", bgCode: "#f2ff26" },
  { name: "Orange", code: "#ff5200", bgName: "Black", bgCode: "#000000" },
  { name: "Grayish Lavender", code: "#bfabcc", bgName: "Etruscan Red", bgCode: "#c9303e" },
  { name: "Rosolanc Purple", code: "#b319ab", bgName: "Helvetia Blue", bgCode: "#0057ba" },
  { name: "Pale King’s Blue", code: "#abf5ed", bgName: "Blue", bgCode: "#0d75ff" },
  { name: "Dusky Madder Violet", code: "#2d0060", bgName: "Ivory Buff", bgCode: "#ebd999" },
  { name: "Blue", code: "#0d75ff", bgName: "Carmine Red", bgCode: "#a10b2b" },
  { name: "Black", code: "#000000", bgName: "Sulphur Yellow", bgCode: "#f5f5b8" },
  { name: "Yellow Orange", code: "#ff8c00", bgName: "Dusky Madder Violet", bgCode: "#2d0060" },
  { name: "Benzol Green", code: "#00d973", bgName: "Light Glaucous Blue", bgCode: "#a6e6db" },
  { name: "Old Rose", code: "#d94d99", bgName: "White", bgCode: "#ffffff" },
  { name: "Grayish Lavender", code: "#bfabcc", bgName: "Violet", bgCode: "#2619d1" },
  { name: "Taupe Brown", code: "#6b2e63", bgName: "Slate Color", bgCode: "#1b3644" },
  { name: "Sea Green", code: "#33ff7d", bgName: "Hay’s Russet", bgCode: "#681916" },
  { name: "Citrine", code: "#a3ad00", bgName: "Eosine Pink", bgCode: "#ff5ec4" },
  { name: "Dark Tyrian Blue", code: "#0d2b52", bgName: "Pale Lemon Yellow", bgCode: "#fff59e" },
  { name: "Cotinga Purple", code: "#340059", bgName: "Light Green Yellow", bgCode: "#bdf226" },
  { name: "Black", code: "#000000", bgName: "Yellow", bgCode: "#ffff00" },
  { name: "Vistoris Lake", code: "#5c2c45", bgName: "Cerulian Blue", bgCode: "#29bdad" },
  { name: "Aconite Violet", code: "#9c52f2", bgName: "Dark Soft Violet", bgCode: "#4d52de" },
  { name: "Sulphine Yellow", code: "#baa600", bgName: "Calamine Blue", bgCode: "#80ffcc" },
  { name: "Olive Green", code: "#58771e", bgName: "Olive Ocher", bgCode: "#d1bd19" },
  { name: "Dark Tyrian Blue", code: "#0d2b52", bgName: "Olympic Blue", bgCode: "#4f8fe6" },
  { name: "Yellow", code: "#ffff00", bgName: "Light Brown Drab", bgCode: "#b08699" },
  { name: "Black", code: "#000000", bgName: "Warm Gray", bgCode: "#9cb29e" },
  { name: "Lincoln Green", code: "#405416", bgName: "Raw Sienna", bgCode: "#b85e00" },
  { name: "Ochraceous Salmon", code: "#d99e73", bgName: "Pompeian Red", bgCode: "#a90636" },
  { name: "Pale King’s Blue", code: "#abf5ed", bgName: "Sulphur Yellow", bgCode: "#f5f5b8" },
  { name: "Rainette Green", code: "#85b857", bgName: "Pale Raw Umber", bgCode: "#5e4017" },
  { name: "Green Blue", code: "#2dbc94", bgName: "Turquoise Green", bgCode: "#b5ffc2" },  
  { name: "Pale King’s Blue", code: "#abf5ed", bgName: "Violet Blue", bgCode: "#202d85" },
  { name: "Pale Lemon Yellow", code: "#fff59e", bgName: "Warm Gray", bgCode: "#9cb29e" },
  { name: "Eugenia Red", code: "#e62e73", bgName: "Vandar Poel’s Blue", bgCode: "#003e83" },
  { name: "Venice Green", code: "#6bffb3", bgName: "Pinkish Cinnamon", bgCode: "#f2ad78" },
  { name: "Green Blue", code: "#2dbc94", bgName: "Madder Brown", bgCode: "#651300" },
  { name: "Sulphur Yellow", code: "#f5f5b8", bgName: "Light Mauve", bgCode: "#9161f2" },
  { name: "Golden Yellow", code: "#fa9442", bgName: "Warm Gray", bgCode: "#9cb29e" },
  { name: "Hay’s Russet", code: "#681916", bgName: "Dusky Madder Violet", bgCode: "#2d0060" },
  { name: "Violet Blue", code: "#202d85", bgName: "Olive Buff", bgCode: "#bcd382" },
  { name: "Seashell Pink", code: "#ffcfc4", bgName: "Deep Slate Green", bgCode: "#0f261f" },
  { name: "Antwerp Blue", code: "#008aa1", bgName: "Vinaceous Tawny", bgCode: "#c74300" },
  { name: "Raw Sienna", code: "#b85e00", bgName: "Sea Green", bgCode: "#33ff7d" },
  { name: "Citron Yellow", code: "#a6d40d", bgName: "Corinthian Pink", bgCode: "#ffa6d9" },
  { name: "Blue", code: "#0d75ff", bgName: "Seashell Pink", bgCode: "#ffcfc4" },
  { name: "Yellow Orange", code: "#ff8c00", bgName: "Violet Blue", bgCode: "#202d85" },
  { name: "Aconite Violet", code: "#9c52f2", bgName: "Eosine Pink", bgCode: "#ff5ec4" },
  { name: "Vistoris Lake", code: "#5c2c45", bgName: "Orange Rufous", bgCode: "#c05200" },
  { name: "Coral Red", code: "#ff7399", bgName: "Benzol Green", bgCode: "#00d973" },
  { name: "Light Glaucous Blue", code: "#a6e6db", bgName: "Citrine", bgCode: "#a3ad00" },
  { name: "Dusky Green", code: "#00592e", bgName: "Ivory Buff", bgCode: "#ebd999" },
  { name: "Hay’s Russet", code: "#681916", bgName: "Dull Violet Black", bgCode: "#06004f" },
  { name: "Olive", code: "#718600", bgName: "Yellow Ocher", bgCode: "#e0b81f" },
  { name: "Corinthian Pink", code: "#ffa6d9", bgName: "Etruscan Red", bgCode: "#c9303e" },
  { name: "Madder Brown", code: "#651300", bgName: "Violet Blue", bgCode: "#202d85" },
  { name: "Pale Lemon Yellow", code: "#fff59e", bgName: "Cerulian Blue", bgCode: "#29bdad" },
  { name: "Buffy Citrine", code: "#888d2a", bgName: "Dull Blue Violet", bgCode: "#6e66d4" },
  { name: "Deep Lyons Blue", code: "#0024cc", bgName: "Cameo Pink", bgCode: "#e6adcf" },
  { name: "Ivory Buff", code: "#ebd999", bgName: "Orange Rufous", bgCode: "#c05200" },
  { name: "Dusky Madder Violet", code: "#2d0060", bgName: "Cinnamon Rufous", bgCode: "#c2612c" },
  { name: "Sulphur Yellow", code: "#f5f5b8", bgName: "Carmine Red", bgCode: "#a10b2b" },
  { name: "Cameo Pink", code: "#e6adcf", bgName: "Chromium Green", bgCode: "#66ab56" },
  { name: "Dull Violet Black", code: "#06004f", bgName: "Antwerp Blue", bgCode: "#008aa1" },
  { name: "Light Grayish Olive", code: "#76844e", bgName: "Apricot Yellow", bgCode: "#ffe600" },
  { name: "Eosine Pink", code: "#ff5ec4", bgName: "Brick Red", bgCode: "#a32100" },
  { name: "Pale Lemon Yellow", code: "#fff59e", bgName: "Blackish Olive", bgCode: "#324e2a" },
  { name: "Brown", code: "#6c2b11", bgName: "Vandyke Brown", bgCode: "#362304" },
  { name: "Pale Lemon Yellow", code: "#fff59e", bgName: "Yellow Green", bgCode: "#a6ff47" },
  { name: "Black", code: "#000000", bgName: "Grenadine Pink", bgCode: "#ff616b" },
  { name: "Seashell Pink", code: "#ffcfc4", bgName: "Vandyke Brown", bgCode: "#362304" },
  { name: "Antwerp Blue", code: "#008aa1", bgName: "Orange Yellow", bgCode: "#ffab00" },
  { name: "Naples Yellow", code: "#faed8f", bgName: "Peach Red", bgCode: "#ff3319" },
  { name: "Blue Violet", code: "#4733ff", bgName: "Cameo Pink", bgCode: "#e6adcf" },
  { name: "Carmine", code: "#d60036", bgName: "Black", bgCode: "#000000" },
  { name: "Vandyke Brown", code: "#362304", bgName: "Yellow Ocher", bgCode: "#e0b81f" },
  { name: "Dark Tyrian Blue", code: "#0d2b52", bgName: "Light Glaucous Blue", bgCode: "#a6e6db" },
  { name: "Cameo Pink", code: "#e6adcf", bgName: "Pompeian Red", bgCode: "#a90636" }
];

let currentCombination = 0;
let reversed = false;
let activeTab = "names";

const colorArea = document.getElementById("colorArea");
const colorDescription = document.getElementById("colorDescription");
const tabs = document.querySelectorAll(".tab");
const randomButton = document.getElementById("randomButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const openModalButton = document.getElementById("openModalButton");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const colorList = document.getElementById("colorList");

function fadeText(newText) {
  colorDescription.style.opacity = 0;

  setTimeout(() => {
    colorDescription.textContent = newText;
    colorDescription.style.opacity = 1;
  }, 200);
}

function updateFavicon(fgColor, bgColor) {
  const favicon = document.getElementById("favicon");
  const svgContent = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
                        <rect width='100%' height='100%' fill='${bgColor}'/>
                        <rect width='50%' height='100%' fill='${fgColor}'/>
                      </svg>`;

  const encodedSvg = encodeURIComponent(svgContent);
  favicon.setAttribute("href", `data:image/svg+xml,${encodedSvg}`);
}

function updateColors() {
  const { name, code, bgName, bgCode } = colorCombinations[currentCombination];
  const fgColor = reversed ? bgCode : code;
  const bgColor = reversed ? code : bgCode;
  const fgName = reversed ? bgName : name;
  const bgNameText = reversed ? name : bgName;

  document.body.style.backgroundColor = bgColor;
  colorArea.style.color = fgColor;
  colorArea.style.backgroundColor = `${bgColor}`;
  colorArea.style.boxShadow = `inset -100vw 0px 100px ${bgColor}`;
  modal.style.backgroundColor = bgColor;

  updateFavicon(fgColor, bgColor);

  let newText;
  switch (activeTab) {
    case "names":
      newText = `${fgName} on ${bgNameText}`;
      break;
    case "codes":
      newText = `${fgColor} on ${bgColor}`;
      break;
    case "colors1":
    case "colors2":
      newText = "";
      colorArea.style.backgroundColor =
        activeTab === "colors1" ? `${fgColor}` : `${fgColor}`;
      colorArea.style.boxShadow =
        activeTab === "colors1"
          ? `inset 0px 0px 0px 25vmin ${bgColor}`
          : `inset -50vw 0px ${bgColor}`;
      break;
  }

  fadeText(newText);

  document.title = `Color Combination ${fgColor} - ${bgColor}`;
  const newUrl = `?${fgColor.substring(1)}-${bgColor.substring(1)}`;
  window.history.pushState(null, "", newUrl);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const clickedTab = tab.dataset.view;

    if (clickedTab === activeTab) {
      reversed = !reversed;
    } else {
      activeTab = clickedTab;

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    }

    updateColors();
  });
});
function renderModal() {
  colorList.innerHTML = "";
  colorCombinations.forEach((combination, index) => {
    const colorItem = document.createElement("div");
    colorItem.classList.add("color-item");
    if (index === currentCombination) {
      colorItem.classList.add("selected");
    }

    const colorPair = document.createElement("div");
    colorPair.classList.add("color-pair");

    const fgDiv = document.createElement("div");
    fgDiv.classList.add("color-box");
    fgDiv.style.backgroundColor = combination.code;

    const bgDiv = document.createElement("div");
    bgDiv.classList.add("color-box");
    bgDiv.style.backgroundColor = combination.bgCode;

    colorPair.appendChild(fgDiv);
    colorPair.appendChild(bgDiv);

    colorItem.appendChild(colorPair);
    colorItem.addEventListener("click", () => {
      currentCombination = index;
      renderModal();
      updateColors();
      modal.style.display = "none";
    });

    colorList.appendChild(colorItem);
  });
}

randomButton.addEventListener("click", () => {
  currentCombination = Math.floor(Math.random() * colorCombinations.length);
  reversed = Math.random() < 0.5;
  updateColors();
});

prevButton.addEventListener("click", () => {
  currentCombination =
    (currentCombination - 1 + colorCombinations.length) %
    colorCombinations.length;
  updateColors();
});

nextButton.addEventListener("click", () => {
  currentCombination = (currentCombination + 1) % colorCombinations.length;
  updateColors();
});

openModalButton.addEventListener("click", () => {
  modal.style.display = "flex";
  renderModal();
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

function parseUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const colors = urlParams.keys().next().value;

  if (colors) {
    const [fgHex, bgHex] = colors.split("-");
    const combinationIndex = colorCombinations.findIndex(
      ({ code, bgCode }) =>
        (code.toLowerCase() === `#${fgHex}` &&
          bgCode.toLowerCase() === `#${bgHex}`) ||
        (bgCode.toLowerCase() === `#${fgHex}` &&
          code.toLowerCase() === `#${bgHex}`)
    );

    if (combinationIndex !== -1) {
      currentCombination = combinationIndex;
      reversed =
        colorCombinations[combinationIndex].code.toLowerCase() !== `#${fgHex}`;
      updateColors();
      return;
    }
  }

  randomButton.click();
}

window.onload = parseUrl;
