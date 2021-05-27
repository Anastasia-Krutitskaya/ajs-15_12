import Cart from './service/Cart';
import Book from './domain/Book';
import Movie from './domain/Movie';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1013, 'Avengers', 600, 2012, 'USA', 'Avengers assemble!', 'sci/fi, action, fantasy, adventure', 137));

console.log(cart.items); 
console.log(cart.sum());
console.log(cart.discount(5));
cart.delete(1001);
console.log(cart.items); 
