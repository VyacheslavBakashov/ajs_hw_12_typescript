import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';


test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});


test("check adding to cart", () => {
  const cart = new Cart();
  cart.add(
    new Movie(
      1,
      "The Avengers",
      1000,
      2012,
      "USA",
      "Avengers Assemble!",
      ["fantastic", "action", "adventure"],
      "137 min. / 02:17"
    )
  );

  expect(cart.items).toEqual([
    new Movie(
      1,
      "The Avengers",
      1000,
      2012,
      "USA",
      "Avengers Assemble!",
      ["fantastic", "action", "adventure"],
      "137 min. / 02:17"
    ),
  ]);
});


test.each([
  [20, 800],
  [undefined, 1000],
])("check total cost w/o and with discount", (input, expected) => {
  const cart = new Cart();
  cart.add(new Book(2, "Book", "Unknown", 1000, 500));

  expect(cart.calcCost(input)).toBe(expected);
});


test("check removing item", () => {
  const cart = new Cart();
  cart.add(new Book(2, "Book", "Unknown", 1000, 500));
  cart.removeItem(2);

  expect(cart.items.length).toBe(0);
});