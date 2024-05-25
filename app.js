document.getElementById('nutrition-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const foodItem = document.getElementById('food-item').value;
    const appId = '17a4af6b';
    const appKey = '064ee9e47927d4e994c8b4fe40bc02e9';
    const url = `https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${appKey}&ingr=${foodItem}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayNutritionFacts(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

function displayNutritionFacts(data) {
    const nutritionFacts = document.getElementById('nutrition-facts');
    nutritionFacts.innerHTML = `
        <h2 class="text-xl font-bold mb-2">Nutrition Facts</h2>
        <p><strong>Amount Per Serving</strong></p>
        <p>Calories: ${data.calories}</p>
        <p>Total Fat: ${data.totalNutrients.FAT ? data.totalNutrients.FAT.quantity : 0} g (${data.totalDaily.FAT ? data.totalDaily.FAT.quantity : 0} %)</p>
        <p>Saturated Fat: ${data.totalNutrients.FASAT ? data.totalNutrients.FASAT.quantity : 0} g (${data.totalDaily.FASAT ? data.totalDaily.FASAT.quantity : 0} %)</p>
        <p>Cholesterol: ${data.totalNutrients.CHOLE ? data.totalNutrients.CHOLE.quantity : 0} mg (${data.totalDaily.CHOLE ? data.totalDaily.CHOLE.quantity : 0} %)</p>
        <p>Sodium: ${data.totalNutrients.NA ? data.totalNutrients.NA.quantity : 0} mg (${data.totalDaily.NA ? data.totalDaily.NA.quantity : 0} %)</p>
        <p>Total Carbohydrate: ${data.totalNutrients.CHOCDF ? data.totalNutrients.CHOCDF.quantity : 0} g (${data.totalDaily.CHOCDF ? data.totalDaily.CHOCDF.quantity : 0} %)</p>
        <p>Dietary Fiber: ${data.totalNutrients.FIBTG ? data.totalNutrients.FIBTG.quantity : 0} g</p>
        <p>Total Sugars: ${data.totalNutrients.SUGAR ? data.totalNutrients.SUGAR.quantity : 0} g</p>
        <p>Protein: ${data.totalNutrients.PROCNT ? data.totalNutrients.PROCNT.quantity : 0} g (${data.totalDaily.PROCNT ? data.totalDaily.PROCNT.quantity : 0} %)</p>
        <p>Vitamin D: ${data.totalNutrients.VITD ? data.totalNutrients.VITD.quantity : 0} µg (${data.totalDaily.VITD ? data.totalDaily.VITD.quantity : 0} %)</p>
        <p>Calcium: ${data.totalNutrients.CA ? data.totalNutrients.CA.quantity : 0} mg (${data.totalDaily.CA ? data.totalDaily.CA.quantity : 0} %)</p>
        <p>Iron: ${data.totalNutrients.FE ? data.totalNutrients.FE.quantity : 0} mg (${data.totalDaily.FE ? data.totalDaily.FE.quantity : 0} %)</p>
        <p>Potassium: ${data.totalNutrients.K ? data.totalNutrients.K.quantity : 0} mg (${data.totalDaily.K ? data.totalDaily.K.quantity : 0} %)</p>
    `;
}
