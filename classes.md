# Clases del proyecto

## Store

Representa a la propia tienda.

### Atributos

* `users: UserBase`
* `products: Catalog`

### Métodos

* getters

## User

Representa a un usuario del sitio.

### Atributos

* `id: String`
* `lastName: String`
* `firstname: String`
* `username: String`
* `password: String`
* `cart: Cart`
* `favorites: FavoritesCollection`

### Métodos

* `changePassword(oldPassword: String, newPassword: String): void`
* getters
* setters

## FavoritesCollection

Representa los productos que un usuario tiene un su lista de favoritos.

### Atributos

* `favorites: Array<Book>`

### Métodos

* `addToFavorites(productId: String): void`
* `removeFromFavorites(productId: String): void`
* getters

## Catalog

Representa el catálogo de productos de la tienda.

### Atributos

* `products: Array<Book>`

### Métodos

* `addBook(product: Book): void`
* `removeBook(id: String): void`
* getters

## UserBase

Representa el conjunto de usuario que tienen cuentas en la tienda.

### Atributos

* `users: Array<User>`

### Métodos

* `addUser(user: User): void`
* `removeUser(id: String): void`
* getters

## Cart

Representa un carrito de compras. Pertenece a un usuario.

### Atributos

* `items: Array<CartItem>`

### Métodos

* `add(item: CartItem): void`
* `remove(productId: String): void`
* `removeAll(): void`
* `findById(productId: String): CartItem`
* `getTotalPrice(): Number`´
* getters

## CartItem

Representa un item dentro del carrito de un usuario.

### Atributos

* `product: Book`
* `amount: Number`

### Métodos

* setAmount(amount: Number): void
* `getPrice(): Number`

## Book

Representa un libro vendido en la tienda.

### Atributos

* `id: String`
* `name: String`
* `price: Number`
* `description: String`
* `imageURL: String`
* `author: String`
* `isbn: String`
* `pages: String`
* `publicationYear: String`
