import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.boasVindas}>Bem-vindo(a) ao App Loja!</Text>
      <Text style={styles.subtitulo}>
        Explore as categorias e descubra produtos incríveis!
      </Text>

      {}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/categorias')}
      >
        <Text style={styles.botaoTexto}>Ver Categorias</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/sobre')}
      >
        <Text style={styles.botaoTexto}>Sobre Mim</Text>
      </TouchableOpacity>
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
  boasVindas: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  botao: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
  },
});
