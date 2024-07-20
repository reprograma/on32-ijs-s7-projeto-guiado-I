# Exercício para Casa 🏫

## Introdução ao Nest.js

- Explicação do exercício:

Implementar uma API REST com Nest.js que lista, cadastra e deleta livros de uma biblioteca. Usaremos o TypeORM para comunicar-se com o banco de dados - este último usaremos SQLite.

```Typescript

export class Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
}
```
