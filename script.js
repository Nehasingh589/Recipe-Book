// const api = "https://cat-fact.herokuapp.com/facts";

const api = "62c57e638b9e4253854fff9d93899ef3";
// async function getRecipes() {
// const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&api=${api}`);
// const data = await response.json()
// return data.recipes

// }


// async function init() {
//     const recipes = await getRecipes();
//     console.log(recipes);
// }

// init();

const getFacts = async() => {
    console.log("neha");
    let response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&api=${api}`);
    console.log(response);
    let data = await response.json();
    console.log(data[0].text);
}
