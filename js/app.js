document.addEventListener("DOMContentLoaded", function () {

	var add = document.querySelector(".add"),
		approve = document.querySelector(".approve"),
		history = document.querySelector(".history"),
		body = document.querySelector("body");

	var newWindow = document.createElement("div");
	var newDiv = body.appendChild(newWindow);
	newDiv.classList.add("hidden");
	newDiv.setAttribute("id", "tasksHistory");

	add.addEventListener('click', function () {



	});

	approve.addEventListener('click', function () {


	});

	history.addEventListener('click', function () {

		newDiv.classList.remove("hidden");
		newDiv.classList.add("visible");



	})


});