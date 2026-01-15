class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix(state) {
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else {
			if (newState > 100) {
				this._state = 100;
			} else {
				this._state = newState;
			}
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

const picknick = new FantasticBook(
	"Аркадий и Борис Стругацкие",
	"Пикник на обочине",
	1972,
	168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
			console.log("Книга " + book.name + " добавлена");
		} else {
			console.log("Книга " + book.name + " не добавлена");
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}

	giveBookByName(bookName) {
		let currentBook = this.findBookBy(`name`, bookName);
		if (currentBook) {
			this.books.splice(currentBook);
		}
		return currentBook;
	}
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);
library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


let NationalLibrary = new Library("Российская национальная библиотека");
let book1 = new NovelBook("Джейн Остен", "Гордость и предубеждение", 1813, 448);
let book2 = new DetectiveBook("Агата Кристи", "Десять негритят", 1939, 288);
let book3 = new FantasticBook("Лаймен Фрэнк Баум", "Волшебство страны Оз", 1919, 56);
let magazin1 = new Magazine("Кот Шредингера №50", 2022, 112);
NationalLibrary.addBook(book1);
NationalLibrary.addBook(book2);
NationalLibrary.addBook(book3);
NationalLibrary.addBook(magazin1);
console.log(NationalLibrary.findBookBy("releaseDate", 1919));
console.log(NationalLibrary.giveBookByName("Гордость и предубеждение"));
book2.state = 15;
NationalLibrary.addBook(book2);
book2.state = 100;
NationalLibrary.addBook(book2);