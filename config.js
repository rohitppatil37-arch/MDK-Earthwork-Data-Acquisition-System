const API_URL = "https://script.google.com/macros/s/AKfycbzSwtyW53xwFtgZOfvP694APpr3TkO1DwgehHCbtqMkB7r_BA5RB78bY5iM45yCPSC8/exec";

let CONFIG = {};

async function loadConfig() {
  try {
    const response = await fetch(API_URL + "?mode=config_all");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // Basic structure validation
    if (!data.subdivisions || !data.machines || !data.staff || !data.projects) {
      throw new Error("Invalid config structure");
    }

    CONFIG = data;

    console.log("✅ Config Loaded Successfully");

  } catch (error) {
    console.error("❌ Config Load Failed:", error);
    alert("⚠️ Configuration load करण्यात समस्या आली.");
    throw error;
  }
}
