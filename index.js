const bodyEl = document.getElementById('tbl-body')


fetch('https://fakestoreapi.com/products').then((response)=>{
    return response.json()
}).then((data)=>{
    let tableData = "";
    data.map((values)=>{
        tableData +=  `<tr>
        <td>${values.title}</td>
        <td> ${values.description}</td>
        <td>${values.price}</td>
        <td><img src = "${values.image}"></td>

        `
    })
    bodyEl.innerHTML = tableData
})