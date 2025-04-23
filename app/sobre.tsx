import { View, Text, StyleSheet, Image } from 'react-native';


import minhaFoto from '../assets/images/foto-pessoal.jpeg';

export default function Sobre() {
  return (
    <View style={styles.container}>
      {/* Foto */}
      <Image source={minhaFoto} style={styles.foto} />

      {/* Texto sobre você */}
      <Text style={styles.titulo}>Sobre mim</Text>
      <Text style={styles.texto}>
        Olá, me chamo João Pedro Bebber, estudante de engenharia de software no 5 periodo
        da Faculdade Assis Gurgaz.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  foto: {
    width: 150,  // Ajuste o tamanho da imagem conforme necessário
    height: 150, // Ajuste o tamanho da imagem conforme necessário
    borderRadius: 75,  // Faz a imagem ficar redonda
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
