const question = [
	{
		que: 'a is bal which is correct ?',
		a: 'HTML',
		b: 'adfasdf',
		c: 'asdasd',
		d: 'adasd',
		correct: 'a',
	},
	{
		que: 'b which is correct ?',
		a: 'HasdasTML',
		b: 'adfasdf',
		c: 'asdasd',
		d: 'adasd',
		correct: 'b',
	},
	{
		que: 'c which is correct ?',
		a: 'a65',
		b: 'adfasdf',
		c: 'asdasd',
		d: 'adasd',
		correct: 'c',
	},
	{
		que: 'd which is correct ?',
		a: 'HT545455ML',
		b: 'adfasdf',
		c: 'asdasd',
		d: 'adasd',
		correct: 'd',
	},
];

const subBtn = document.getElementById('submit');
const quesBos = document.getElementById('questionBox');
const options = document.querySelectorAll('input');

let index = 0;
let total = question.length;
let right = 0,
	wrong = 0;

function loadQuestion() {
	if (index == total) {
		alert(`Question Over Right: ${right} and wrong ${wrong}`);
		index = 0;
		right = 0;
		wrong = 0;
	}
	const data = question[index];
	quesBos.innerText = `${index + 1} ) ${data.que}`;
	options[0].nextElementSibling.innerText = data.a;
	options[1].nextElementSibling.innerText = data.b;
	options[2].nextElementSibling.innerText = data.c;
	options[3].nextElementSibling.innerText = data.d;
}

function submitQuiz() {
	const data = question[index];

	// for (let i = 0; i < options.length; i++) {
	// 	if (options[i].checked) {
	// 		console.log(options[i].value);
	// 	}
	// }

	options.forEach((input) => {
		if (input.checked) {
			if (input.value === data.correct) {
				// console.log('ugg');
				right++;
			} else {
				// console.log('wrong ans');
				wrong++;
			}
		}
	});

	index++;
	loadQuestion();
	reset();
}

subBtn.addEventListener('click', submitQuiz);

loadQuestion();

const reset = () => {
	options.forEach((input) => {
		input.checked = false;
	});
};
