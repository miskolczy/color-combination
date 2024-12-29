const colorCombinations = [
  { name: "English Red", code: "#de4500", bgName: "Cerulean Blue", bgCode: "#29bdad" },
  { name: "Yellow Orange", code: "#ff8c00", bgName: "Dark Tyrian Blue", bgCode: "#0d2b52" },
  { name: "Raw Sienna", code: "#b85e00", bgName: "Pale Lemon Yellow", bgCode: "#fff59e" },
  { name: "Isabella Color", code: "#c3a55c", bgName: "Red Violet", bgCode: "#3400a3" },
  { name: "Cossack Green", code: "#328e13", bgName: "Vandar Poel's Blue", bgCode: "#003e83" },
  { name: "Grenadine Pink", code: "#ff616b", bgName: "Deep Indigo", bgCode: "#000831" },
  { name: "Orange", code: "#ff5200", bgName: "Glaucous Green", bgCode: "#b3e8c2" },
  { name: "Cinnamon Rufous", code: "#c2612c", bgName: "Grayish Lavender - A", bgCode: "#b8b8ff" },
  { name: "Violet Red", code: "#3d0079", bgName: "Dull Blue Violet", bgCode: "#6e66d4" },
  { name: "Cinnamon Rufous", code: "#c2612c", bgName: "Dark Citrine", bgCode: "#7e8743" },
  { name: "Ivory Buff", code: "#ebd999", bgName: "Mineral Gray", bgCode: "#9fc2b2" },
  { name: "Isabella Color", code: "#c3a55c", bgName: "Green Blue", bgCode: "#2dbc94" },
  { name: "Raw Sienna", code: "#b85e00", bgName: "Veronia Purple", bgCode: "#7e3075" },
  { name: "Spinel Red", code: "#ff4dc9", bgName: "Naples Yellow", bgCode: "#faed8f" },
  { name: "Benzol Green", code: "#00d973", bgName: "Grayish Lavender - A", bgCode: "#b8b8ff" },
  { name: "Vandyke Red", code: "#740909", bgName: "Pale King's Blue", bgCode: "#abf5ed" },
  { name: "Eugenia Red | B", code: "#e62e73", bgName: "Sea Green", bgCode: "#33ff7d" },
  { name: "Fawn", code: "#d1b0b3", bgName: "Dusky Madder Violet", bgCode: "#2d0060" },
  { name: "Mars Brown Tobacco", code: "#522000", bgName: "Night Green", bgCode: "#7aff00" },
  { name: "Calamine BLue", code: "#80ffcc", bgName: "Laelia Pink", bgCode: "#cc85d1" },
  { name: "Grenadine Pink", code: "#ff616b", bgName: "Sea Green", bgCode: "#33ff7d" },
  { name: "Yellow", code: "#ffff00", bgName: "Deep Lyons Blue", bgCode: "#0024cc" },
  { name: "Cinnamon Buff", code: "#ffbf6e", bgName: "Light Mauve", bgCode: "#9161f2" },
  { name: "Sepia", code: "#503d00", bgName: "Veronia Purple", bgCode: "#7e3075" },
  { name: "Etruscan Red", code: "#c9303e", bgName: "Nile Blue", bgCode: "#bfffe6" },
  { name: "Golden Yellow", code: "#fa9442", bgName: "Pale Raw Umber", bgCode: "#5e4017" },
  { name: "Corinthian Pink", code: "#ffa6d9", bgName: "Slate Color", bgCode: "#1b3644" },
  { name: "Madder Brown", code: "#651300", bgName: "Deep Indigo", bgCode: "#000831" },
  { name: "Krongbergs Green", code: "#759243", bgName: "Salvia Blue", bgCode: "#96bfe6" },
  { name: "Pompeian Red", code: "#a90636", bgName: "Mineral Gray", bgCode: "#9fc2b2" },
  { name: "Red Orange", code: "#e81900", bgName: "Pale Lemon Yellow", bgCode: "#fff59e" },
  { name: "Ochraceous Salmon", code: "#d99e73", bgName: "Night Green", bgCode: "#7aff00" },
  { name: "Raw Sienna", code: "#b85e00", bgName: "Slate Color", bgCode: "#1b3644" },
  { name: "Eosine Pink", code: "#ff5ec4", bgName: "Neutral Gray", bgCode: "#b5d1cc" },
  { name: "Light Brown Drab", code: "#b08699", bgName: "Carmine Red", bgCode: "#a10b2b" },
  { name: "Sulphine Yellow", code: "#baa600", bgName: "Turquoise Green", bgCode: "#b5ffc2" },
  { name: "Brick Red", code: "#a32100", bgName: "Red Violet", bgCode: "#3400a3" },
  { name: "Diamine Green", code: "#1b8e13", bgName: "Deep Lyons Blue", bgCode: "#0024cc" },
  { name: "Carmine", code: "#d60036", bgName: "Helvetia Blue", bgCode: "#0057ba" },
  { name: "Vinaceous Tawny", code: "#c74300", bgName: "Citron Yellow", bgCode: "#a6d40d" },
  { name: "Dark Citrine", code: "#7e8743", bgName: "Calamine BLue", bgCode: "#80ffcc" },
  { name: "Yellow Ocher", code: "#e0b81f", bgName: "Violet", bgCode: "#2619d1" },
  { name: "Corinthian Pink", code: "#ffa6d9", bgName: "Aconite Violet", bgCode: "#9c52f2" },
  { name: "Light Porcelain Green", code: "#23c17c", bgName: "Olympic Blue", bgCode: "#4f8fe6" },
  { name: "Seashell Pink", code: "#ffcfc4", bgName: "Lemon Yellow", bgCode: "#f2ff26" },
  { name: "Orange", code: "#ff5200", bgName: "Black", bgCode: "#000000" },
  { name: "Etruscan Red", code: "#c9303e", bgName: "Grayish Lavender - B", bgCode: "#bfabcc" },
  { name: "Rosolanc Purple", code: "#b319ab", bgName: "Helvetia Blue", bgCode: "#0057ba" },
  { name: "Pale King's Blue", code: "#abf5ed", bgName: "Blue", bgCode: "#0d75ff" },
  { name: "Ivory Buff", code: "#ebd999", bgName: "Dusky Madder Violet", bgCode: "#2d0060" },
  { name: "Carmine Red", code: "#a10b2b", bgName: "Blue", bgCode: "#0d75ff" },
  { name: "Sulpher Yellow", code: "#f5f5b8", bgName: "Black", bgCode: "#000000" },
  { name: "Yellow Orange", code: "#ff8c00", bgName: "Dusky Madder Violet", bgCode: "#2d0060" },
  { name: "Benzol Green", code: "#00d973", bgName: "Light Glaucous Blue", bgCode: "#a6e6db" },
  { name: "Old Rose", code: "#d94d99", bgName: "White", bgCode: "#ffffff" },
  { name: "Grayish Lavender - B", code: "#bfabcc", bgName: "Violet", bgCode: "#2619d1" },
  { name: "Taupe Brown", code: "#6b2e63", bgName: "Slate Color", bgCode: "#1b3644" },
  { name: "Hay's Russet", code: "#681916", bgName: "Sea Green", bgCode: "#33ff7d" },
  { name: "Eosine Pink", code: "#ff5ec4", bgName: "Citrine", bgCode: "#a3ad00" },
  { name: "Pale Lemon Yellow", code: "#fff59e", bgName: "Dark Tyrian Blue", bgCode: "#0d2b52" },
  { name: "Light Green Yellow", code: "#bdf226", bgName: "Cotinga Purple", bgCode: "#340059" },
  { name: "Yellow", code: "#ffff00", bgName: "Black", bgCode: "#000000" },
  { name: "Vistoris Lake", code: "#5c2c45", bgName: "Cerulian Blue", bgCode: "#29bdad" },
  { name: "Aconite Violet", code: "#9c52f2", bgName: "Dark Soft Violet", bgCode: "#4d52de" },
  { name: "Sulphine Yellow", code: "#baa600", bgName: "Calamine BLue", bgCode: "#80ffcc" },
  { name: "Olive Ocher", code: "#d1bd19", bgName: "Olive Green", bgCode: "#58771e" },
  { name: "Olympic Blue", code: "#4f8fe6", bgName: "Dark Tyrian Blue", bgCode: "#0d2b52" },
  { name: "Light Brown Drab", code: "#b08699", bgName: "Yellow", bgCode: "#ffff00" },
  { name: "Warm Gray", code: "#9cb29e", bgName: "Black", bgCode: "#000000" },
  { name: "Raw Sienna", code: "#b85e00", bgName: "Lincoln Green", bgCode: "#405416" },
  { name: "Pompeian Red", code: "#a90636", bgName: "Ochraceous Salmon", bgCode: "#d99e73" },
  { name: "Sulpher Yellow", code: "#f5f5b8", bgName: "Pale King's Blue", bgCode: "#abf5ed" },
  { name: "Pale Raw Umber", code: "#5e4017", bgName: "Rainette Green", bgCode: "#85b857" },
  { name: "Turquoise Green", code: "#b5ffc2", bgName: "Green Blue", bgCode: "#2dbc94" },
  { name: "Pale King's Blue", code: "#abf5ed", bgName: "Violet Blue", bgCode: "#202d85" },
  { name: "Pale Lemon Yellow", code: "#fff59e", bgName: "Warm Gray", bgCode: "#9cb29e" },
  { name: "Eugenia Red | B", code: "#e62e73", bgName: "Vandar Poel's Blue", bgCode: "#003e83" },
  { name: "Pinkish Cinnamon", code: "#f2ad78", bgName: "Venice Green", bgCode: "#6bffb3" },
  { name: "Madder Brown", code: "#651300", bgName: "Green Blue", bgCode: "#2dbc94" },
  { name: "Sulpher Yellow", code: "#f5f5b8", bgName: "Light Mauve", bgCode: "#9161f2" },
  { name: "Golden Yellow", code: "#fa9442", bgName: "Warm Gray", bgCode: "#9cb29e" },
  { name: "Hay's Russet", code: "#681916", bgName: "Dusky Madder Violet", bgCode: "#2d0060" },
  { name: "Olive Buff", code: "#bcd382", bgName: "Violet Blue", bgCode: "#202d85" },
  { name: "Seashell Pink", code: "#ffcfc4", bgName: "Deep Slate Green", bgCode: "#0f261f" },
  { name: "Vinaceous Tawny", code: "#c74300", bgName: "Antwarp Blue", bgCode: "#008aa1" },
  { name: "Raw Sienna", code: "#b85e00", bgName: "Sea Green", bgCode: "#33ff7d" },
  { name: "Corinthian Pink", code: "#ffa6d9", bgName: "Citron Yellow", bgCode: "#a6d40d" },
  { name: "Seashell Pink", code: "#ffcfc4", bgName: "Blue", bgCode: "#0d75ff" },
  { name: "Yellow Orange", code: "#ff8c00", bgName: "Violet Blue", bgCode: "#202d85" },
  { name: "Eosine Pink", code: "#ff5ec4", bgName: "Aconite Violet", bgCode: "#9c52f2" },
  { name: "Vistoris Lake", code: "#5c2c45", bgName: "Orange Rufous", bgCode: "#c05200" },
  { name: "Coral Red", code: "#ff7399", bgName: "Benzol Green", bgCode: "#00d973" },
  { name: "Citrine", code: "#a3ad00", bgName: "Light Glaucous Blue", bgCode: "#a6e6db" },
  { name: "Ivory Buff", code: "#ebd999", bgName: "Dusky Green", bgCode: "#00592e" },
  { name: "Hay's Russet", code: "#681916", bgName: "Dull Violet Black", bgCode: "#06004f" },
  { name: "Yellow Ocher", code: "#e0b81f", bgName: "Olive", bgCode: "#718600" },
  { name: "Corinthian Pink", code: "#ffa6d9", bgName: "Etruscan Red", bgCode: "#c9303e" },
  { name: "Madder Brown", code: "#651300", bgName: "Violet Blue", bgCode: "#202d85" },
  { name: "Pale Lemon Yellow", code: "#fff59e", bgName: "Cerulian Blue", bgCode: "#29bdad" },
  { name: "Buffy Citrine", code: "#888d2a", bgName: "Dull Blue Violet", bgCode: "#6e66d4" },
  { name: "Cameo Pink", code: "#e6adcf", bgName: "Deep Lyons Blue", bgCode: "#0024cc" },
  { name: "Ivory Buff", code: "#ebd999", bgName: "Orange Rufous", bgCode: "#c05200" },
  { name: "Cinnamon Rufous", code: "#c2612c", bgName: "Dusky Madder Violet", bgCode: "#2d0060" },
  { name: "Carmine Red", code: "#a10b2b", bgName: "Sulpher Yellow", bgCode: "#f5f5b8" },
  { name: "Cameo Pink", code: "#e6adcf", bgName: "Chromium Green", bgCode: "#66ab56" },
  { name: "Antwarp Blue", code: "#008aa1", bgName: "Dull Violet Black", bgCode: "#06004f" },
  { name: "Apricot Yellow", code: "#ffe600", bgName: "Light Grayish Olive", bgCode: "#76844e" },
  { name: "Eosine Pink", code: "#ff5ec4", bgName: "Brick Red", bgCode: "#a32100" },
  { name: "Pale Lemon Yellow", code: "#fff59e", bgName: "Blackish Olive", bgCode: "#324e2a" },
  { name: "Brown", code: "#6c2b11", bgName: "Vandyke Brown", bgCode: "#362304" },
  { name: "Pale Lemon Yellow", code: "#fff59e", bgName: "Yellow Green", bgCode: "#a6ff47" },
  { name: "Grenadine Pink", code: "#ff616b", bgName: "Black", bgCode: "#000000" },
  { name: "Seashell Pink", code: "#ffcfc4", bgName: "Vandyke Brown", bgCode: "#362304" },
  { name: "Orange Yellow", code: "#ffab00", bgName: "Antwarp Blue", bgCode: "#008aa1" },
  { name: "Naples Yellow", code: "#faed8f", bgName: "Peach Red", bgCode: "#ff3319" },
  { name: "Cameo Pink", code: "#e6adcf", bgName: "Blue Violet", bgCode: "#4733ff" },
  { name: "Carmine", code: "#d60036", bgName: "Black", bgCode: "#000000" },
  { name: "Yellow Ocher", code: "#e0b81f", bgName: "Vandyke Brown", bgCode: "#362304" },
  { name: "Light Glaucous Blue", code: "#a6e6db", bgName: "Dark Tyrian Blue", bgCode: "#0d2b52" },
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
