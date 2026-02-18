// Toggle Filter Form visibility
function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newContentForm = document.getElementById("newContent");
    // Hide the add form if open
    newContentForm.style.display = "none";
    // Toggle filter form
    if (filterForm.style.display === "none" || filterForm.style.display === "") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }
}

// Toggle Add New Article Form visibility
function showAddNew() {
    const newContentForm = document.getElementById("newContent");
    const filterForm = document.getElementById("filterContent");
    // Hide filter form if open
    filterForm.style.display = "none";
    // Toggle add form
    if (newContentForm.style.display === "none" || newContentForm.style.display === "") {
        newContentForm.style.display = "flex";
    } else {
        newContentForm.style.display = "none";
    }
}

// Filter Articles based on checkboxes
function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;
    const articles = document.querySelectorAll("#articleList article");
    articles.forEach(function(article) {
        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
        } else if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "block" : "none";
        } else if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "block" : "none";
        }
    });
}

// Add a New Article to the list
function addNewArticle() {
    const title = document.getElementById("inputHeader").value;
    const text = document.getElementById("inputArticle").value;
    // Find which radio button is selected
    let type = "";
    let markerLabel = "";
    if (document.getElementById("opinionRadio").checked) {
        type = "opinion";
        markerLabel = "Opinion";
    } else if (document.getElementById("recipeRadio").checked) {
        type = "recipe";
        markerLabel = "Recipe";
    } else if (document.getElementById("lifeRadio").checked) {
        type = "update";
        markerLabel = "Update";
    }
    // Basic validation
    if (!title || !text || !type) {
        alert("Please fill in all fields and select an article type.");
        return;
    }
    // Build the new article element
    const newArticle = document.createElement("article");
    newArticle.classList.add(type);
    newArticle.innerHTML = `
        <span class="marker">${markerLabel}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;
    // Append to the article list
    document.getElementById("articleList").appendChild(newArticle);
    // Clear the form inputs
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;
    // Hide the form after submitting
    document.getElementById("newContent").style.display = "none";
}
