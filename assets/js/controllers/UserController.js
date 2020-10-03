"use strict";
class UserController {

    constructor(btnId, tableId) {
        this.btnAdd = document.getElementById(btnId);
        this.tableAdd = document.getElementById(tableId);
     
        this.onSubmit();
    }

    getValues() {
        return new User(1, userData.value);
    }

    getAll() {
        let line= {};
        let i;
        let body = [...document.getElementById("bodyUser").children];
        let tr = [...body[body.length - 1].children];

        tr.forEach(td => {
            if (td.innerText != "X" && isNaN(td.innerText)) {
                line.name = td.innerText;
            } else if (!isNaN(td.innerText)) {
                i += td.innerText;
                line.id = i;
            }
        });
        console.log(line);
        return line;
    }

    onSubmit() {
        this.btnAdd.addEventListener("click", e => {
            e.preventDefault();
            if (this.getValues().name != "") {
                this.addLine(this.getValues());
                this.getAll();
            } else {
                this.exception("Obrigatório o preenchimento");
            }
        });
    }

    addLine(data) {
        this.tableAdd.insertAdjacentHTML('beforeend', `
        <tr>
            <th scope="row">1</th>
            <td colspan="2">${data.name}</td>
            <td class="text-center">
                <a class="text-danger text-decoration-none" id="removeUser" href="#">
                    <strong>X</strong>
                </a>
            </td>
        </tr>
        `);
    }

    debug(data) {
        console.log(data)
    }

    exception(data) {
        alert(data);
    }
}