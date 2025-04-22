export type Product = {
    id: number;
    title: string;
    image: string;
    price: number;
    idCategory: number; // Relacionamento com a categoria
    description: string; // Adicionando a propriedade 'description'
  };
  