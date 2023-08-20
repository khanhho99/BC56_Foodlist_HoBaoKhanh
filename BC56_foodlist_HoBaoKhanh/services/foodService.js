const FOOD_API = `https://64c62b58c853c26efadb28cd.mockapi.io/food`;

let getFoods = () => {
    return axios({
        url: FOOD_API,
        method: "GET"
    })
}

let addFood = (foodData) => {
    return axios({
        url: FOOD_API,
        method: "POST",
        data: foodData
    })
}

let getDetailFood = (foodId) => {
    return axios({
        url: FOOD_API + `/${foodId}`,
        method: "GET"
    })
}

let deleteFood = (foodId) => {
    return axios({
        url: FOOD_API + `/${foodId}`,
        method: "DELETE"
    })
}

let updateFood = (foodData, foodID) => {
    return axios({
        url: FOOD_API + `/${foodID}`,
        method: "PUT",
        data: foodData
    })
}

let foodService = {
    getFoods,
    addFood,
    deleteFood,
    getDetailFood,
    updateFood
}

export default foodService;