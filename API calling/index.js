// 1.

const book = {
    name: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    language: "English",
    price: 13.69,

    publisher: {
        name: "O'Reilly Media, Inc",
        founder: "Tim O'Reilly",
        email: "jdoe@oreilly.com",
        founded: 1978,
    },

    sellers: ["Daraz", "Flipkart", "Goodreads", "Rokomari", "Amazon"],

    priceIncrement(price) {
        this.price = this.price + price;
        return this.price;
    },
};

const bookNewPrice = book.priceIncrement(11);
// console.log(bookNewPrice);

// 02.
const {
    name,
    sellers: [seller1, seller2],
    publisher: { email },
} = book;
const templateObj = `I purchased the book ${name} from the online seller ${seller2}. there publisher email address is: ${email}`;

// console.log(templateObj);

// 3.1
const getNumber = () => 89;

// 3.2
const divideBySeven = (number) => number / 7;

// 3.3
const sumDivideByTwo = (sum1, sum2) => (sum1 + sum2) / 2;
// console.log(sumDivideByTwo(25, 12));

// 3.4
const sum7sum = (sum1, sum2) => {
    sum1 = sum1 + 7;
    sum2 = sum2 + 7;
    const sumTotal = sum1 + sum2;
    return sumTotal;
};
// console.log(sum7sum(12, 10));

// 4
const numbers = [254, 66, 47, 21, 34, 66, 14, 26, 44, 21];
const newNumbers = numbers.map((number) => number / 7);
// console.log(newNumbers);

// 5
