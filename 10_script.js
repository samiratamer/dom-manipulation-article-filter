// Show/hide the Filter form
function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newContentForm = document.getElementById("newContent");

    // Close the Add New form if it is open
    newContentForm.style.display = "none";

    // Toggle the filter form
    if (filterForm.style.display === "none" || filterForm.style.display === "") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }
}

// Show/hide the Add New Article form
function showAddNew() {
    const newContentForm = document.getElementById("newContent");
    const filterForm = document.getElementById("filterContent");

    // Close the filter form if it is open
    filterForm.style.display = "none";

    // Toggle the add new form
    if (newContentForm.style.display === "none" || newContentForm.style.display === "") {
        newContentForm.style.display = "flex";
    } else {
        newContentForm.style.display = "none";
    }
}

// Filter articles based on which checkboxes are checked
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

// Add a new article to the list
function addNewArticle() {
    const title = document.getElementById("inputHeader").value;
    const text = document.getElementById("inputArticle").value;

    // Determine the selected article type
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

    // Validate inputs before adding
    if (!title || !text || !type) {
        alert("Please fill in the title, text, and select an article type.");
        return;
    }

    // Create the new article element
    const newArticle = document.createElement("article");
    newArticle.classList.add(type);

    newArticle.innerHTML = `
        <span class="marker">${markerLabel}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;

    // Add the new article to the article list
    document.getElementById("articleList").appendChild(newArticle);

    // Reset all form fields
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;

    // Hide the form after submission
    document.getElementById("newContent").style.display = "none";
}
