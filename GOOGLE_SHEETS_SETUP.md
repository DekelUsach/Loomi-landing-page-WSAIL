# 🚀 Cómo Conectar el Formulario a Google Sheets

Sigue estos pasos para que los datos del formulario se guarden automáticamente en una Hoja de Cálculo de Google.

## Paso 1: Crear el Script en Google

1. Ve a [script.google.com](https://script.google.com/) e inicia sesión con tu cuenta de Google.
2. Haz clic en **"Nuevo proyecto"**.
3. Se abrirá un editor de código. Borra todo el código que aparece por defecto.
4. Copia el contenido del archivo `apps-script.js` de este proyecto y pégalo en el editor de Google.
5. Haz clic en el icono de **Guardar** (disco) y ponle un nombre al proyecto (ej: "Loomi Landing Form").

## Paso 2: Configurar la Hoja de Cálculo

1. En el editor de Google Script, asegúrate de que la función `setup` esté seleccionada en la barra de herramientas superior (al lado del botón "Ejecutar").
2. Haz clic en **"Ejecutar"**.
3. Google te pedirá permisos ("Revisar permisos"). Acepta todo (es tu propio script).
   - Si sale una advertencia de "Google no ha verificado esta aplicación", haz clic en "Configuración avanzada" -> "Ir a Loomi Landing Form (no seguro)".
4. Una vez ejecutado, esto creará una nueva Hoja de Cálculo en tu Google Drive llamada "Respuestas" con los encabezados correctos.

## Paso 3: Desplegar como Web App

1. En el editor, haz clic en el botón azul **"Implementar"** (arriba a la derecha) -> **"Nueva implementación"**.
2. En la ventana que se abre:
   - Haz clic en el engranaje (⚙️) junto a "Seleccionar tipo" y elige **"Aplicación web"**.
   - **Descripción**: "Versión 1".
   - **Ejecutar como**: "Yo" (tu email).
   - **Quién tiene acceso**: **"Cualquier persona"** (IMPORTANTE: Si no eliges esto, el formulario no funcionará).
3. Haz clic en **"Implementar"**.
4. Copia la **URL de la aplicación web** que te da al final (empieza por `https://script.google.com/macros/s/...`).

## Paso 4: Conectar con el Frontend

1. Abre el archivo `src/components/LandingForm.tsx` en tu editor.
2. Busca la línea donde dice:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx_PLACEHOLDER_YOUR_SCRIPT_ID/exec';
   ```
3. Reemplaza esa URL con la que copiaste en el Paso 3.
4. ¡Listo! Guarda el archivo.

Ahora, cuando alguien llene el formulario en tu landing page, los datos aparecerán mágicamente en tu Google Sheet.
