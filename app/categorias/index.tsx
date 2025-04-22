import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; // Importando o Link para navegação
import { data } from '../../data'; // Arquivo de dados
import { Category } from '../../types/category';
import { Product } from '../../types/product';

export default function Categories() {
  // Renderiza a categoria e seus produtos
  const renderCategory = ({ item }: { item: Category }) => {
    // Filtrando os produtos pela categoria
    const filteredProducts = data.products.filter(
      (product: Product) => product.idCategory === item.id
    );

    return (
      <View style={styles.card}>
        <Image source={{ uri: item.cover }} style={styles.cover} />
        <Text style={styles.title}>{item.title}</Text>

        {/* Link para a página de produtos da categoria */}
        <Link href={`/categorias/[id]`.replace('[id]', item.id.toString())} style={styles.link}>
          Ver produtos
        </Link>

        {/* Exibindo produtos relacionados à categoria */}
        <FlatList
          data={filteredProducts}
          renderItem={({ item: product }) => (
            <View style={styles.productContainer}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <Text style={styles.productTitle}>{product.title}</Text>
              <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
            </View>
          )}
          horizontal
          keyExtractor={(product) => product.id.toString()}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories} // Usando as categorias definidas nos dados
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 5,
  },
  cover: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    marginTop: 10,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  productContainer: {
    width: 120,
    marginRight: 15,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 12,
    color: '#007BFF',
    marginTop: 5,
    textAlign: 'center',
  },
});
