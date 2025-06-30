document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("themeSwitch");
  const extensionList = document.getElementById("extension-list");

  // ===== Theme Toggle Logic =====
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.className = `${savedTheme}-theme`;
  themeSwitch.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light-theme");
    const newTheme = isLight ? "dark-theme" : "light-theme";
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme.replace("-theme", ""));
  });

  // ===== Dummy Extension Data =====
  const extensions = [
    {
      id: 1,
      name: "DevLens",
      description: "Quickly inspect page layouts and visualize element boundaries.",
      icon: "./assets/images/logo-link-checker.svg",
      bgColor: "#b3e5fc",
      isActive: true
    },
    {
      id: 2,
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      icon: "./assets/images/logo-style-spy.svg",
      bgColor: "#ffe0b2",
      isActive: false
    },
    {
      id: 3,
      name: "JSONWizard",
      description: "Formats, validates, and prettifies JSON responses in-browser.",
      icon: "./assets/images/logo-viewport-buddy.svg",
      bgColor: "#f8bbd0",
      isActive: true
    }
    // 👉 Add more if you like
  ];

  // ===== Render Extension Cards =====
  function renderExtensions(data) {
    extensionList.innerHTML = ""; // clear old
    data.forEach(renderExtensionCard);
  }

  function renderExtensionCard(extension) {
    const card = document.createElement("div");
    card.className = "extension-card";

    card.innerHTML = `
      <div class="card-icon" style="background-color: ${extension.bgColor};">
        <img src="${extension.icon}" alt="${extension.name} Icon" />
      </div>
      <div class="card-content">
        <h3 class="card-title">${extension.name}</h3>
        <p class="card-description">${extension.description}</p>
      </div>
      <div class="card-actions">
        <button class="remove-btn">Remove</button>
        <label class="switch">
          <input type="checkbox" ${extension.isActive ? "checked" : ""} />
          <span class="slider"></span>
        </label>
      </div>
    `;

    // Toggle on/off
    const toggle = card.querySelector("input[type='checkbox']");
    toggle.addEventListener("change", () => {
      extension.isActive = toggle.checked;
    });

    // Remove
    card.querySelector(".remove-btn").addEventListener("click", () => {
      extensionList.removeChild(card);
    });

    extensionList.appendChild(card);
  }

  // Load on page
  renderExtensions(extensions);
});
