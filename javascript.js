let input_box = document.querySelector(".input_box");
let add_btn = document.querySelector(".add_btn");
let table = document.querySelector(".tb");
let data = []


for (let i = 0; i < data.length; i++) {
	let row = table.insertRow(1)
	let name = row.insertCell(0)
	let action = row.insertCell(1)
	name.innerHTML = data[i];
}

input_box.addEventListener("keyup", function(e) {
	if (e.keyCode == 13) {
		let del_btn = document.createElement("button");


	del_btn.addEventListener("click",function(e){

		action.parentNode.parentNode.removeChild(row)

	})
		del_btn.innerText = "Delete"
		let row = table.insertRow(1)
		let name = row.insertCell(0)
		let action = row.insertCell(1)
		let d_show = name.innerHTML = input_box.value;
		input_box.value = ""
		data.push(d_show)
		action.appendChild(del_btn);
	} else {

	}
})