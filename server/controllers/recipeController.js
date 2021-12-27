require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe'); 
exports.homepage = async(req ,res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Recipe.find({}).sort({_id:-1}).limit(limitNumber);
    res.render('index' , {title : 'Home', categories , latest});
  } catch (error) {
    res.status(500).send({message: error.message || "ERROR"}) ;
  }
}

exports.exploreCategories = async(req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('categories', { title: 'Categoreis', categories } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
} 

exports.exploreRecipe = async(req, res) => {
  try {
    let recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId) ;
    res.render('recipe', { title: recipe.name , recipe } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
} 

exports.exploreCategoryRecipes = async(req, res) => {
  try {
    let categoryName = req.params.name;
    const recipes = await Recipe.find ({"category" : categoryName}) ;
    res.render('categories', { title: categoryName , recipes } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
} 

exports.search = async(req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let recipes = await Recipe.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
    res.render('search', { title: 'Search', recipes } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
  
} 
exports.submitRecipe = async(req, res) => {
  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');
  res.render('submit recipe', { title: 'Submit Recipe', infoErrorsObj, infoSubmitObj  } );
}

/**
 * POST /submit-recipe
 * Submit Recipe
*/
exports.submitRecipeOnPost = async(req, res) => {
  try {

    let imageUploadFile;
    let uploadPath;
    let newImageName;

    if(!req.files || Object.keys(req.files).length === 0){
      console.log('No Files where uploaded.');
    } else {

      imageUploadFile = req.files.image;
      newImageName = Date.now() + imageUploadFile.name;

      uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;

      imageUploadFile.mv(uploadPath, function(err){
        if(err) return res.satus(500).send(err);
      })

    }

    const newRecipe = new Recipe({
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      ingredients: req.body.ingredients,
      category: req.body.category,
      image: newImageName
    });
    
    await newRecipe.save();

    req.flash('infoSubmit', 'Recipe has been added.')
    res.redirect('/submit-recipe');
  } catch (error) {
    // res.json(error);
    req.flash('infoErrors', error);
    res.redirect('/submit-recipe');
  }
}



/*

async function insertDymmyRecipeData(){
 try {
   await Recipe.insertMany([
     { 
       "name": "Dan Dan Noodles",
       "description": "Dan Dan Sauce in first the savoury, Five Spiced sesame sauce with a slick of the signature chilli oil that you know and love about spicy Sichuan noodles! Noodles next  but don't mix it through Toppings  stir fried pork, preserved mustard greens (Sui Mi Ya Cai), choi sum and green onions Peanuts finish with a sprinkle of chopped nuts Serve it just like that, with the sauce pooled at the bottom; then To eat, you toss it all together so the white noodles become stained red with the spicy sauce, then devour!",
       "email": "recipeemail@raddy.co.uk",
       "ingredients": [
         "Chinese Five Spice Powder",
         "Sichuan Pepper",
         "Chinese Chilli paste in oil ",
         "Chicken stock/broth",
         "Chinese Sesame Sauce or paste"
       ],
       "category": "Chinese", 
       "image": "Dan Dan Noodles.jpg"
     },
     { 
       "name": "General Tso’s Chicken",
       "description": "Sauté garlic, ginger and chilli flakes until garlic is golden and it smells amazing, then pour the sauce in \n Simmer sauce for 2 minutes until it thickens enough so you can draw a path across the base \n Add chicken \n QUICKLY toss to coat then serve, stat! The faster you get it on the table, the crispier the chicken stays!",
       "email": "recipeemail@raddy.co.uk",
       "ingredients": [
         "Sauce/Marinade ",
         "Crispy Chicken",
         "Stir Fry ",
       ],
       "category": "Chinese", 
       "image": "General Tso’s Chicken.jpg"
     },
   ]);
 } catch (error) {
   console.log('err', + error)
 }
   }

   insertDymmyRecipeData()
/*
























/*async function insetDymmyCategoryData(){
    try{
            await Category.insertMany([
                       {
                         "name": "Thai",
                         "image": "thai-food.jpg"
                       },
                       {
                         "name": "American",
                         "image": "american-food.jpg"
                       }, 
                       {
                         "name": "Chinese",
                         "image": "chinese-food.jpg"
                       },
                       {
                         "name": "Mexican",
                         "image": "mexican-food.jpg"
                       }, 
                       {
                         "name": "Indian",
                         "image": "indian-food.jpg"
                       },
                       {
                         "name": "Spanish",
                         "image": "spanish-food.jpg"
                       }
                    ]) ;
    }catch(err){
        console.log(err);
    }
};
insetDymmyCategoryData()
*/