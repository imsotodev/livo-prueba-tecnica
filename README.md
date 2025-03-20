# Prueba Técnica: Desarrollo Frontend en React

A continuación, se detallan los pasos y requisitos clave para completar esta prueba con éxito.

## Requerimientos

- **Funcionalidades:**  
  - **Autenticación de usuario:** Implementar login y registro.  
  - **Catálogo de productos:** Visualización y filtrado de productos.  
  - **Gestión del carrito de compras:** Añadir, eliminar y modificar productos en el carrito.

## Entorno

- 🚀 Node.js (22.13.1).
- ⚡️ React con hooks y componentes funcionales (18.2.0).
- 🛣️ Uso de React Router para la navegación (7.3.0).
- 📦 Manejo de estado con Zustand (5.0.3).
- 🔒 Axios para las solicitudes API (1.8.3).
- 💾 Tanstack Query para caché (4)
- 🎉 TailwindCSS para estilos (4.0.0).

## Inregración
La aplicación se conecta a una API REST para gestionar la autenticación, así como las operaciones relacionadas con el catálogo de productos y el carrito de compras, utilizando tokens de acceso para controlar la seguridad. Se implementó una arquitectura basada en funcionalidades (Features) para centralizar y modularizar la estructura base del proyecto.

## Ejecución

1. Clona el repositorio
```bash
git clone https://github.com/imsotodev/livo-prueba-tecnica.git
```
2. Navega a la carpeta
```bash
cd livo-prueba-tecnica
```
> disclaimer: Por defecto se trabajoó con `pnpm` en este proyecto para usar otro gestor de paquetes, elimina el `pnpm-lock.yaml` y sigue los pasos.
3. Instala dependencias
```bash
pnpm install o npm install
```
4. Configurar variable de entorno, creamos el archivo `.env` y agregamos lo siguiente.
> no incluir `/` al final de la url
```bash
🔴 VITE_API="http://myendpoint.com/"
🟢 VITE_API="http://myendpoint.com"
```

5. Ejecuta en modo desarrollo
```bash
pnpm run dev o npm run dev
```
