const express = require('express');
const router = express.Router();
const recipeController = require('../Controllers/recipeController');

router.get('/',recipeController.homepage);
router.get('/categories',recipeController.exploreCategories);
router.get('/recipe/:id',recipeController.exploreRecipe);
router.get('/categories/:name',recipeController.exploreCategoryRecipes);
router.get('/submit-recipe', recipeController.submitRecipe);


router.post('/search',recipeController.search);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);

module.exports = router ;