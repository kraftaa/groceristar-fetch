const _            = require('lodash');
const chickenKyiv  = require('./projects/ChickenKyiv/chickenKyiv.js');

// @TODO change path later, duh?
const { migrateFunc } = require('./111/import/000002-automigrate');

// const {  } = require('./HELPER.js')





// get('menu');
// get('recipe');
// get('ingredient');
// get('recipe2');
// get('department');

const get = (tableName) => {

  let result
  switch (tableName) {
    case 'menu':
      result = chickenKyiv.getMenus();
      break;

    case 'recipe':
      result = chickenKyiv.getRecipes();
      break;

    case 'ingredient':
      result = chickenKyiv.getIngredients();
      break;

    case 'recipe2':
      result = chickenKyiv.getRecipesExtended();
      break;

    case 'department':
      result = chickenKyiv.getDepartment();
      break;


    default:
      result = chickenKyiv.getUsers();

  }

  return result

}

module.exports = {
  get:get,
  // helper: {
  //
  // }
}