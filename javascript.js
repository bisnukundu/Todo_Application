let input_box = document.querySelector(".input_box");
let add_btn = document.querySelector(".add_btn");
let table = document.querySelector(".tb");
let tbody = document.querySelector(".tb tbody");
let data = [];
let d = 0;
function test(name, id) {
	let new_row = table.insertRow(1);
	new_row.setAttribute("id", id)
	let name_cell = new_row.insertCell(0)
	name_cell.innerHTML = name;
	let action_cell = new_row.insertCell(1)
	let del_btn = document.createElement("button")
	del_btn.innerText = "Delete"
	action_cell.appendChild(del_btn);

	del_btn.addEventListener("click", (e) => {
		data.splice(id, 1)
		console.log(e.target.parentNode.parentNode.parentNode.removeChild(new_row))
		console.log(data)
	})
}

add_btn.addEventListener("click", function() {
	let value = input_box.value;
	let final = test(value, 3)
	data.push(value)
	input_box.value = "";
})



input_box.addEventListener("keyup", (e) => {
	if (e.keyCode == 13) {
		let value = input_box.value;
		test(value, d++)
		data.push(value)
		input_box.value = "";
	}
})