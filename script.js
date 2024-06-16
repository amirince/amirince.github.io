document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    updateHeading(category)
    loadGrid(category);
});


function updateHeading(category) {
    const headingElement = document.getElementById('page_heading').querySelector('h2');
    headingElement.textContent = category.charAt(0).toUpperCase() + category.slice(1).toUpperCase()  + " PROJECTS"; // Capitalize the category name
}


function loadGrid(category) {
    fetch('items.json')
        .then(response => response.json())
        .then(data => {

            const container = document.getElementById('grid-container');
            container.innerHTML = ''; // Clear previous items

            data[category].forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'grid-item';
                itemElement.innerHTML = `${item.title}<p>${item.description}</p>`;
                container.appendChild(itemElement);
            });
        })
        .catch(error => console.error('Error loading the grid items:', error));
}
