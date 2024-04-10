document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.getElementById("dog-image-container");
            data.message.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                dogImageContainer.appendChild(img);
            });
        });
});

document.addEventListener("DOMContentLoaded", function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const dogBreedsList = document.getElementById("dog-breeds");
            for (const breed in data.message) {
                const li = document.createElement("li");
                li.textContent = breed;
                dogBreedsList.appendChild(li);
            }
        });
});

document.addEventListener("DOMContentLoaded", function() {
    const dogBreedsList = document.getElementById("dog-breeds");
    dogBreedsList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.style.color = "red"; // Change to color of your choice
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dropdown = document.getElementById("breed-dropdown");
    
    dropdown.addEventListener("change", function(event) {
        const selectedLetter = event.target.value;
        fetch(breedUrl)
            .then(response => response.json())
            .then(data => {
                const dogBreedsList = document.getElementById("dog-breeds");
                dogBreedsList.innerHTML = ""; // Clear previous list
                
                for (const breed in data.message) {
                    if (breed.startsWith(selectedLetter)) {
                        const li = document.createElement("li");
                        li.textContent = breed;
                        dogBreedsList.appendChild(li);
                    }
                }
            });
    });
});
