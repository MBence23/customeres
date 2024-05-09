// var emps = [
//     {
//         name: "Erős István",
//         city: "Szeged"
//     },
//     {
//         name: "Pala Irén",
//         city: "Hatvan"
//     }
// ]

// console.log(emps[0].name)

var emps = [
    {
        id: 1,
        name: "Kemény Sándor",
        email: "Valami@gmail.com",
        city: "Szeged"
    },
    {
        id: 2,
        name: "Sapka Sára",
        email: "Valaki@gmail.com",
        city: "Hatvan"
    }
]
const tbody = document.querySelector('#tbody')
var rows = '';
emps.forEach( (emp) => {
var row = `
<tr>
    <td>${emp.id}</td>
    <td>${emp.name}</td>
    <td>${emp.email}</td>
    <td>${emp.city}</td>
</tr>
`;
rows = rows + row;
});
tbody.innerHTML = rows;