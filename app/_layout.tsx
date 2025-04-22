import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
        }}
      />
      <Tabs.Screen
        name="categorias/index"
        options={{
          title: 'Categorias',
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre Mim',
        }}
      />
    </Tabs>
  );
}
