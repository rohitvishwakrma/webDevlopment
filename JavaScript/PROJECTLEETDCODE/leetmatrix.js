document.addEventListener("DOMContentLoaded", function () {
  const serachButton = document.getElementById("search-btn");
  const usernameInput = document.getElementById("user-input");
  const statsContainer = document.querySelector(".stats-container");
  const easyPoregress = document.querySelector(".easy-progress");
  const mediumPoregress = document.querySelector(".medium-progress");
  const hardPoregress = document.querySelector(".hard-progress");

  const easyLabel = document.getElementById(" easy-label");
  const mediumLabel = document.getElementById(" medium-label");
  const hardLabel = document.getElementById(" hard-label");

  const statCards = document.querySelector(".stats-cards");

  serachButton = addEventListener('click', function () {
    const username = usernameInput.value;
    console.log("logging username:", username);
  })

});
