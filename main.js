const imageContainer = document.getElementById('image');
const button = document.getElementById("button");

const getData = async () => {
    console.log("Loading Data...");
    const url = "https://api.unsplash.com/search/photos?client_id=e01whUsQrH1XbLQNFB9kDIT_212S17jaTaAvSjAt9BU&query=Lord Krishna&per_page=1";

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        // Extracting the URL from the first result
        if (data.results.length > 0) {
            const imageUrl = data.results[0].urls.regular; // Choose the URL size you want
            console.log("Image URL:", imageUrl);

            // Clear previous images
            while (imageContainer.firstChild) {
                imageContainer.removeChild(imageContainer.firstChild);
            }

            // Add new image
            if (imageContainer) {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = "Krishna Image";
                imageContainer.appendChild(img);
            }
        } else {
            console.log("No results found.");
        }
    } catch (err) {
        console.log(err);
    }
};

getData();
