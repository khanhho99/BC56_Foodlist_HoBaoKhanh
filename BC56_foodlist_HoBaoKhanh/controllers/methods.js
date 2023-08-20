export let renderFoodList = (foods) => {
    document.querySelector('#tbodyFood').innerHTML = foods.reverse().map(food => {
        return (
            `
            <tr>
                <td>${food.id}</td>
                <td>${food.ten}</td>
                <td>${food.loai == 0 ? `<span>Chay</span>` : `<span>Mặn</span>`}</td>   
                <td>${food.gia}</td>
                <td>${food.khuyenMai}</td>
                <td>${food.gia * (1 - food.khuyenMai / 100)}</td>
                <td>${food.tinhTrang == true ? `<span class="text-success">Còn</span>` : `<span class="text-danger">Hết</span>`}</td>
                <td>
                    <button onclick="deleteFood(${food.id})" class="btn btn-danger">Del</button>
                    <button onclick="editFood(${food.id})"class="btn btn-warning">Edit</button>
                </td>
            </tr>
            `
        )
    })
}

export let getFormData = () => {
    return {
        id: document.querySelector('#foodID').value,
        ten: document.querySelector('#tenMon').value,
        loai: document.querySelector('#loai').value * 1,
        gia: document.querySelector('#giaMon').value * 1,
        khuyenMai: document.querySelector('#khuyenMai').value * 1,
        tinhTrang: document.querySelector('#tinhTrang').value,
        moTa: document.querySelector('#moTa').value,
        hinhAnh: document.querySelector('#hinhMon').value
    }
}


export let onLoading = () => {
    console.log(document.querySelector('#mySpinner'))
    document.querySelector('#mySpinner').style.display = 'flex';
}

export let closeLoading = () => {
    document.querySelector('#mySpinner').style.display = 'none';

}

export let openModal = (message) => {
    Swal.fire(
        message,
        '',
        'success'
    )
}

export let closeModal = () => {
    $('#exampleModal').modal('hide')
}

export let showModal = () => {
    $('#exampleModal').modal('show')
}



export let fillFormData = (food) => {
    document.querySelector('#foodID').value = food.id
    document.querySelector('#tenMon').value = food.ten
    document.querySelector('#loai').value = food.loai
    document.querySelector('#giaMon').value = food.gia
    document.querySelector('#khuyenMai').value = food.khuyenMai
    document.querySelector('#tinhTrang').value = food.tinhTrang
    document.querySelector('#moTa').value = food.moTa
    document.querySelector('#hinhMon').value = food.hinhAnh
}