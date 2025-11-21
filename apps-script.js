// INSTRUCCIONES PARA CONFIGURAR GOOGLE SHEETS
// ============================================
// 1. Ve a https://script.google.com/
// 2. Crea un nuevo proyecto.
// 3. Pega este código en el editor (Code.gs).
// 4. Guarda el proyecto.
// 5. Ejecuta la función 'setup' UNA VEZ para crear la hoja de cálculo y los encabezados.
// 6. Despliega como Web App:
//    - Click en "Implementar" > "Nueva implementación".
//    - Tipo: "Aplicación web".
//    - Ejecutar como: "Yo" (tu cuenta).
//    - Quién tiene acceso: "Cualquier persona" (Importante para que el frontend pueda enviar datos).
// 7. Copia la URL del Web App y pégala en src/components/LandingForm.tsx (variable GOOGLE_SCRIPT_URL).

function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        // Obtener la hoja de cálculo (debe existir después de ejecutar setup)
        const spreadsheet = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID'));
        const sheet = spreadsheet.getSheetByName('Respuestas') || spreadsheet.insertSheet('Respuestas');

        // Parsear los datos que vienen del frontend
        const data = JSON.parse(e.postData.contents);

        // Preparar la fila
        const timestamp = new Date();
        const row = [
            timestamp,
            data.parentName || '',
            data.email || '',
            data.role || '',
            data.childName || '',
            data.childAge || '',
            data.interestType || '',
            data.message || ''
        ];

        // Añadir a la hoja
        sheet.appendRow(row);

        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'success', 'row': row }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (e) {
        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}

// EJECUTA ESTA FUNCIÓN UNA VEZ PARA CREAR LA HOJA DE CÁLCULO
function setup() {
    try {
        // Crear una nueva hoja de cálculo
        const spreadsheet = SpreadsheetApp.create('Loomi - Registros Landing Page');
        const sheet = spreadsheet.getSheets()[0];
        sheet.setName('Respuestas');

        // Añadir encabezados
        sheet.appendRow(['Timestamp', 'Nombre Padre', 'Email', 'Rol', 'Nombre Niño', 'Edad Niño', 'Interés', 'Mensaje']);

        // Formatear encabezados
        const headerRange = sheet.getRange(1, 1, 1, 8);
        headerRange.setFontWeight('bold');
        headerRange.setBackground('#84C8FF');
        headerRange.setFontColor('#ffffff');

        // Guardar el ID de la hoja en las propiedades del script
        PropertiesService.getScriptProperties().setProperty('SPREADSHEET_ID', spreadsheet.getId());

        // Mostrar mensaje de éxito con el enlace a la hoja
        const url = spreadsheet.getUrl();
        Logger.log('✅ Hoja de cálculo creada exitosamente!');
        Logger.log('📊 Accede aquí: ' + url);
        Logger.log('🔑 ID guardado: ' + spreadsheet.getId());

        // La hoja se creó exitosamente. Revisa los logs arriba para ver el enlace.

    } catch (error) {
        Logger.log('❌ Error: ' + error.toString());
        throw error;
    }
}
