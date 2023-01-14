const number = document.querySelector("#number");
const button = document.querySelector(".square__button");
const result = document.querySelector("#result");

button.addEventListener("click", function () {
	result.value = "";
	if (number.validity.valid && number.value != "") {
		result.value = Math.pow(+number.value, 2);
	}
});
