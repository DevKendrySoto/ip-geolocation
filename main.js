form.addEventListener("submit", async (e) => {
  console.log("submit");
  e.preventDefault();
  const location = input.value;
  if (!location) return;
  button.setAttribute("disabled", "disabled");

  try {
    const response = await fetch(
      `https://ip-geo-location.p.rapidapi.com/ip/check?format=json&ip=${location}`,
      OPTIONS
    );
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
