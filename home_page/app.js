document.addEventListener("DOMContentLoaded", () => {
    const cigarettes = document.querySelectorAll(".cigarette1, .cigarette2, .cigarette3, .cigarette4, .cigarette5, .cigarette6, .cigarette7");
    
  
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <button class="close-btn">&times;</button>
        <h2>Information</h2>
        <p>This is the pop-up content for the cigarette.</p>
    `;
    document.body.appendChild(popup);

    const closeButton = popup.querySelector(".close-btn");

   
    cigarettes.forEach(cigarette => {
        cigarette.addEventListener("click", () => {
            popup.style.display = "block"; 
        });
    });

    
    closeButton.addEventListener("click", () => {
        popup.style.display = "none";
    });


    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});