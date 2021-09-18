# Clases del proyecto

## Store

Representa a la propia tienda.

### Atributos

* `users: UserBase`
* `catalog: Catalog`

### Métodos

* `getUsers(): UserBase`
* `getCatalog(): Catalog`

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
* `getId(): String`
* `setId(value: String): void`
* `getLastName(): String`
* `setLastName(value: String): void`
* `getFirstName(): String`
* `setFirstName(value: String): void`
* `getUserName(): String`
* `setUserName(value: String): void`
* `setPassword(newPw: String, oldPw: String): void`
* `getCart(): Cart`
* `getFavorites(): FavoritesCollection`

## FavoritesCollection

Representa los productos que un usuario tiene un su lista de favoritos.

### Atributos

* `favorites: Array<Book>`

### Métodos

* `add(item: Book): void`
* `remove(id: String): void`
* `getFavorites(): Array<Book>`

## Catalog

Representa el catálogo de productos de la tienda.

### Atributos

* `products: Array<Book>`

### Métodos

* `add(item: Book): void`
* `remove(id: String): void`
* `getProducts(): Array<Book>`

## UserBase

Representa el conjunto de usuario que tienen cuentas en la tienda.

### Atributos

* `users: Array<User>`

### Métodos

* `add(user: User): void`
* `remove(id: String): void`
* `getUsers(): Array<User>`

## Cart

Representa un carrito de compras. Pertenece a un usuario.

### Atributos

* `items: Array<CartItem>`

### Métodos

* `add(item: CartItem): void`
* `remove(productId: String): void`
* `removeAll(): void`
* `findById(productId: String): CartItem`
* `getTotalPrice(): Number`
* `getItems(): Array<CartItem>`

## CartItem

Representa un item dentro del carrito de un usuario.

### Atributos

* `product: Book`
* `amount: Number`

### Métodos

* `getAmount(): Number`
* `setAmount(amount: Number): void`
* `getProduct(): Book`
* `setProduct(value; Book): void`
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

### Métodos

* `getId(): String`
* `setId(value: String): void`
* `getName(): String`
* `setName(value: String): void`
* `getPrice(): Number`
* `setPrice(value: Number): void`
* `getDescription(): String`
* `setDescription(value: String): void`
* `getImageURL(): String`
* `setImageURL(value: String): void`
* `getAuthor(): String`
* `setAuthor(value: String): void`
* `getIsbn(): String`
* `setIsbn(value: String): void`
* `getPages(): String`
* `setPages(value: String): void`
* `getPublicationYear(): String`
* `setPublicationYear(value: String): void`
