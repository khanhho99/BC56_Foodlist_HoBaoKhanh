import foodService from "../services/foodService.js";
import { renderFoodList, getFormData, onLoading, closeLoading, openModal, closeModal, showModal, fillFormData } from "../controllers/methods.js";

let fetchFoodList = () => {
    onLoading();
    foodService
        .getFoods()
        .then(res => {
            renderFoodList(res.data);
            closeLoading();
        })
        .catch(err => {
            console.log(err)
        })
}

document.querySelector('#btnThemMon').onclick = (event) => {
    onLoading();
    let newData = getFormData();
    foodService
        .addFood(newData)
        .then(res => {
            console.log(res)
            fetchFoodList();
            closeLoading();
            closeModal();
            openModal('Thêm thành công!');
        })
        .catch(err => {
            console.log(err)
        })
}

window.deleteFood = (foodId) => {
    onLoading();
    foodService
        .deleteFood(foodId)
        .then(res => {
            console.log(res)
            fetchFoodList();
            openModal("Xoá thành công!")
        })
        .catch(err => {
            console.log(err)
            closeLoading();
        })
}

window.editFood = (foodID) => {
    document.querySelector('#btnThemMon').style.display = 'none';
    document.querySelector('#btnCapNhat').style.display = 'block';
    onLoading();
    foodService
        .getDetailFood(foodID)
        .then(res => {
            fillFormData(res.data);
            closeLoading();
            showModal();
        })
        .catch(err => {
            console.log(err)
        })
}

document.querySelector('#btnThem').onclick = () => {
    document.querySelector('#foodForm').reset();
    document.querySelector('#btnThemMon').style.display = 'block';
    document.querySelector('#btnCapNhat').style.display = 'none';
}

document.querySelector('#btnCapNhat').onclick = () => {
    onLoading();
    let updateFood = getFormData();
    console.log(updateFood)
    foodService
        .updateFood(updateFood, updateFood.id)
        .then(res => {
            console.log(res)
            fetchFoodList();
            closeLoading();
            openModal("Cập nhật thành công!");
            closeModal();
        })
        .catch(err => {
            console.log(err)
        })
}

document.querySelector('#selLoai').onchange = () => {
    onLoading();
    let curChoice = document.querySelector('#selLoai').value;
    if (curChoice == -1) {
        foodService
            .getFoods()
            .then(res => {
                fetchFoodList();
                closeLoading();
            })
            .catch(err => {
                console.log(err)
            })
        return;
    }
    console.log(curChoice)
    foodService
        .getFoods()
        .then(res => {
            return res.data.filter(food => {
                return food.loai == curChoice;
            })
        })
        .then(res => {
            console.log(res)
            renderFoodList(res);
            closeLoading();
        })
        .catch(err => {
            console.log(err)
        })
}

let start = () => {
    closeLoading();
    fetchFoodList();
}

start();