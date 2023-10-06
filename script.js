function showMealCards(goal) {
    var mealCardsContainer = document.getElementById('meal-cards');
    mealCardsContainer.innerHTML = '';
    var meals = getMealsForGoal(goal);
    meals.forEach(function (meal) {
      var cardContainer = document.createElement('div');
      cardContainer.classList.add('card-container');
      var card = document.createElement('div');
      card.classList.add('meal-card');
      var mealImage = document.createElement('img');
      mealImage.src = meal.image;
      mealImage.alt = meal.title;
      card.appendChild(mealImage);
      var mealTitle = document.createElement('h3');
      mealTitle.textContent = meal.title;
      card.appendChild(mealTitle);
      var mealDescription = document.createElement('p');
      mealDescription.textContent = meal.description;
      card.appendChild(mealDescription);
      var recipeButton = document.createElement('button');
      recipeButton.textContent = 'Ver receta';
      recipeButton.addEventListener('click', function () {
        window.open(meal.recipeLink, '_blank');
      });
      card.appendChild(recipeButton);
      cardContainer.appendChild(card);
      mealCardsContainer.appendChild(cardContainer);
    });
  }
  
  function getMealsForGoal(goal) {
    var meals = [];
    if (goal === 'weight-loss') {
      meals = [
        {
          title: 'Ensalada de pollo',
          description: 'Una deliciosa ensalada con pollo a la parrilla.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCgpMnr4OEUQjwNZmOFP97xDyjhlfNlJh__hJiWzoIjS8vC6z9cqpRd44QdxzSOa43Es&usqp=CAU',
          recipeLink: 'https://www.recetasgratis.net/receta-de-ensalada-mexicana-de-pollo-74482.html'
        },
        {
          title: 'Sopa de verduras',
          description: 'Una sopa ligera y saludable llena de verduras frescas.',
          image: 'https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-256/sopa-de-verduras-548e307fe7800d3d5d2bc1d4.jpg',
          recipeLink: 'https://www.pizcadesabor.com/sopa-de-verduras/'
        },
        {
          title: 'Batido de frutas',
          description: 'Un batido refrescante hecho con frutas mixtas y yogur.',
          image: 'https://i.pinimg.com/474x/3a/2c/43/3a2c43ebb9b023c5e938f0b6246af9d1.jpg',
          recipeLink: 'https://www.pequerecetas.com/receta/batidos-7-recetas/'
        }
      ];
    } else if (goal === 'healthy') {
      meals = [
        {
          title: 'Bol de quinoa',
          description: 'Un tazón nutritivo de quinoa con verduras y proteínas.',
          image: 'https://i.ibb.co/kDqbLvN/bol-de-quinoa-1.jpg',
          recipeLink: 'https://www.example.com/bol-quinoa-recipe'
        },
        {
          title: 'Salmón a la parrilla',
          description: 'Un filete de salmón a la parrilla acompañado de espárragos.',
          image: 'https://i.ibb.co/9GKTvJN/pescado-a-la-parrilla-5-1.jpg',
          recipeLink: 'https://www.example.com/salmon-recipe'
        },
        {
          title: 'Ensalada de garbanzos',
          description: 'Una ensalada abundante hecha con garbanzos, verduras y aderezo de limón.',
          image: 'https://i.ibb.co/PrPDbpd/ensalada-de-garbanzos-receta-1.jpg',
          recipeLink: 'https://www.example.com/ensalada-garbanzos-recipe'
        }
      ];
    } else if (goal === 'muscle-gain') {
      meals = [
        {
          title: 'Pollo a la plancha',
          description: 'Pechugas de pollo a la plancha con arroz integral y brócoli.',
          image: 'https://i.ibb.co/MVjVDN0/pollo-a-la-plancha-receta-1.jpg',
          recipeLink: 'https://www.example.com/pollo-recipe'
        },
        {
          title: 'Tofu y quinua',
          description: 'Tofu marinado con quinoa y vegetales salteados.',
          image: 'https://i.ibb.co/jwJszTP/tofu-peanut-quinoa-fried-rice-100986-1.jpg',
          recipeLink: 'https://www.example.com/tofu-recipe'
        },
        {
          title: 'Batido de proteínas',
          description: 'Un batido de proteínas hecho con leche, plátano y proteína en polvo.',
          image: 'https://i.ibb.co/y4Rcg3c/batidos-de-prote-nas-1200x672-acf-cropped-1.jpg',
          recipeLink: 'https://www.example.com/batido-proteinas-recipe'
        }
      ];
    }
    return meals;
  }
  