import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { data } from '../../data';
import { Product } from '../../types/product';

export default function Eletro() {
  const eletroProducts = data.products.filter(
    (product: Product) => product.idCategory === 1
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos da Categoria Eletro</Text>
      <FlatList
        data={eletroProducts}
        renderItem={({ item: product }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(product) => product.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  productContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#007BFF',
    marginTop: 5,
    textAlign: 'center',
  },
});