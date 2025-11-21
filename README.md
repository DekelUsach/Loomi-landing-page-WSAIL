# Loomi Landing Page - Standalone

Esta es una versión independiente de la landing page de Loomi, lista para visualizar y probar.

## 🚀 Iniciar el Proyecto

```bash
npm install
npm run dev
```

El proyecto se abrirá en `http://localhost:5173`

## 📂 Estructura

```
src/
├── pages/
│   ├── LandingPage.tsx          # Componente principal
│   └── LandingPage.module.css   # Estilos CSS Modules
├── components/
│   └── LandingForm.tsx          # Formulario de lista de espera
├── assets/
│   ├── dashboard.png            # Mockup del dashboard
│   └── heatmap.png             # Mapa de calor cognitivo
├── App.tsx                      # Aplicación principal
├── main.tsx                     # Punto de entrada
└── index.css                    # Estilos globales + variables de tema
```

## 🎨 Características

- **Diseño Mobile-First**: Completamente responsivo
- **Tipografía Fredoka**: Fuente amigable de Google Fonts
- **CSS Modules**: Estilos con scope por componente
- **TypeScript**: Type-safe React components
- **Variables CSS**: Sistema de diseño con temas (light/dark ready)

## 📋 Integración con Google Sheets

Para que el formulario funcione:

1. Ve a [Google Apps Script](https://script.google.com/)
2. Crea un nuevo proyecto
3. Pega el código de `apps-script.js` (en carpeta LandingPage original)
4. Despliega como Web App (acceso: "Cualquier persona")
5. Copia la URL y actualiza `GOOGLE_SCRIPT_URL` en `src/components/LandingForm.tsx`

## 🔧 Personalización

- **Colores**: Edita las variables CSS en `src/index.css`
- **Copy**: Modifica el texto en `src/pages/LandingPage.tsx`
- **Imágenes**: Reemplaza los archivos en `src/assets/`

## 📦 Build para Producción

```bash
npm run build
```

Los archivos optimizados estarán en `dist/`
