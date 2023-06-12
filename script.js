const bookmark = document.querySelectorAll(".fav-btn");

bookmark.forEach((button) =>{
    button.addEventListener("click",() =>{
        const image = button.querySelector("img");
        let currentSrc = image.getAttribute("src");
        
        if (currentSrc === "Assets/ico/bookmark.png") {
            image.setAttribute("src", "Assets/ico/bookmark_filled.png");
        } else {
            image.setAttribute("src","Assets/ico/bookmark.png");
        }
    });
});