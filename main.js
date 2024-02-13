document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#form');
  const input = document.querySelector('#input');
  const button = document.querySelector('#submit');
  const result = document.querySelector('#result');

  const OPTIONS = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4ec4b01968msh0a52dc895aa917cp1d9a62jsncf69ab2b67d3",
      "X-RapidAPI-Host": "ip-geo-location.p.rapidapi.com",
    },
  };

document.getElementById('toggle-dark-mode').addEventListener('click', function() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  let targetTheme = "dark";

  if (currentTheme === "dark") {
      targetTheme = "light";
  }

  document.documentElement.setAttribute('data-theme', targetTheme);

  this.textContent = `Mode ${targetTheme === "dark" ? "light" : "dark"}`;
});

  form.addEventListener("submit", async (e) => {    e.preventDefault();
    const location = input.value.trim();
    if (!location) return;
    button.setAttribute("disabled", "disabled");

    try {
      const url = `https://ip-geo-location.p.rapidapi.com/ip/${location}?format=json`;
      const response = await fetch(url, OPTIONS);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const ipInfo = await response.json(); 
      result.innerHTML = JSON.stringify(ipInfo, null, 2); 
    } catch (error) {
      console.error(error);
      result.innerHTML = "Error fetching IP information: " + error.message;
    } finally {
      button.removeAttribute("disabled");
    }
  });
});
