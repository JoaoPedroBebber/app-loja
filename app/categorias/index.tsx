import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { data } from '../../data';
import { Category } from '../../types/category';
import { Product } from '../../types/product';

export default function Categories() {
  const router = useRouter();

  const renderCategory = ({ item }: { item: Category }) => {
    const filteredProducts = data.products.filter(
      (product: Product) => product.idCategory === item.id
    );

    return (
      <View style={styles.card}>
        <Image source={{ uri: item.cover }} style={styles.cover} />
        <Text style={styles.title}>{item.title}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/categorias/eletro')}
        >
          <Text style={styles.buttonText}>Ver os produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/categorias/paisagismo')}
        >
          <Text style={styles.buttonText}>Ver Paisagismo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/categorias/acessorios')}
        >
          <Text style={styles.buttonText}>Ver Acessórios</Text>
        </TouchableOpacity>

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
        data={data.categories}
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
    backgroundColor: '#F5F5F5',
  },
  card: {
    marginBottom: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
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
    color: '#333333', 
  },
  button: {
    marginTop: 10,
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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
    color: '#333333',
  },
  productPrice: {
    fontSize: 12,
    color: '#33C1FF',
    marginTop: 5,
    textAlign: 'center',
  },
});
