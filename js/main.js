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
    icon: "./assets/images/logo-devlens.svg",
    bgColor: "#c0d8bd",
    isActive: true
  },
  {
    id: 2,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    icon: "./assets/images/logo-style-spy.svg",
    bgColor: "#a8d6e4",
    isActive: false
  },
  {
    id: 3,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    icon: "./assets/images/logo-speed-boost.svg",
    bgColor: "#ffcfd2",
    isActive: true
  },
  {
    id: 4,
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    icon: "./assets/images/logo-json-wizard.svg",
    bgColor: "#f1c0e7",
    isActive: true
  },
  {
    id: 5,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    icon: "./assets/images/logo-tab-master-pro.svg",
    bgColor: "#cfb9f0",
    isActive: true
  },
  {
    id: 6,
    name: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    icon: "./assets/images/logo-viewport-buddy.svg",
    bgColor: "#a4c4f5",
    isActive: false
  },
  {
    id: 7,
    name: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    icon: "./assets/images/logo-markup-notes.svg",
    bgColor: "#90daf3",
    isActive: true
  },
  {
    id: 8,
    name: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    icon: "./assets/images/logo-grid-guides.svg",
    bgColor: "#b7b8ff",
    isActive: true
  },
  {
    id: 9,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    icon: "./assets/images/logo-palette-picker.svg",
    bgColor: "#98f5e2",
    isActive: false
  },
  {
    id: 10,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    icon: "./assets/images/logo-link-checker.svg",
    bgColor: "#ffd7b5",
    isActive: false
  },
  {
    id: 11,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    icon: "./assets/images/logo-dom-snapshot.svg",
    bgColor: "#8eecf4",
    isActive: true
  },
  {
    id: 12,
    name: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    icon: "./assets/images/logo-console-plus.svg",
    bgColor: "#bafbc1",
    isActive: false
  }
];

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Step 1: Update button UI
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Step 2: Get filter type
      const type = btn.dataset.filter;

      // Step 3: Filter data
      let filtered = [];
      if (type === "all") {
        filtered = extensions;
      } else if (type === "active") {
        filtered = extensions.filter((ext) => ext.isActive);
      } else if (type === "inactive") {
        filtered = extensions.filter((ext) => !ext.isActive);
      }

      // Step 4: Render
      renderExtensions(filtered);
    });
  });
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
