document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });

  const handleFavoriteSubmit = (e) {
    const faveInput = document.querySelector(".favorite-input");
    const fave = faveInput.value;
    faveInput.value = "";
    const newListEle = document.createElement("li");
    newListLi.textContent = favorite; 
    const favoritesList = document.getElementById("sf-places"); 
    favoritesList.appendChild(newListLi);
  }; 
  
  
  
  // const listSubmitButton = document.querySelector(".favorite-submit"); 
  // listSubmitButton.addEventListener("click", handleFavoriteSubmit);
  }

  // adding SF places as list items

  // --- your code here!




  // adding new photos

  // --- your code here!



});

