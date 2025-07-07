// Step 1
var recipes = [];

// Step 2 3
var recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients : ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    ratings: [4,5,4,5],
    cookingTime : 22,
    totalIngredients : null,
    difficultyLevel : "",
    averageRating : null
}


// Step 4
var recipe2 = {
    name: "Chicken Curry",
    ingredients : ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    ratings: [4,5,5,5],
    cookingTime : 42,
    totalIngredients : null,
    difficultyLevel : '',
    averageRating : null
}

var recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};


// Step 5
// var recipe1Name = recipe1.name;
// var recipe2Name = recipe2.name;

// var recipe1CookingTime = recipe1.cookingTime;
// var recipe2CookingTime = recipe2.cookingTime;

// console.log(recipe1Name);
// console.log(recipe2Name);
// console.log(recipe1CookingTime);
// console.log(recipe2CookingTime);

// Step 6
recipes.push(recipe1,recipe2,recipe3);

// Step 7
const getAverageRating = (array) =>{
    if (array.length === 0) return 0;
    const total = array.reduce((sum,rating) => sum + rating, 0);
    return total / array.length;
}

// Step 8
function getTotalIngredients(ingredients) {
  return ingredients.length;
}

// Step 9
function getDifficultyLevel(array) {
    if (array <= 30 && array >= 0) {
        return "easy";
        
    }else if (array <= 60 && array >=31) {
        return "medium";
        
    }else{
        return "hard";
    }
}

// Step 10
var recipe1AverageRating = getAverageRating(recipe1.ratings);
var recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
var recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1AverageRating);
console.log(recipe1TotalIngredients);
console.log(recipe1DifficultyLevel);


// Step 11
recipe1.averageRating = getAverageRating(recipe1.ratings);
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.averageRating = getAverageRating(recipe2.ratings);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

console.log(recipes);
