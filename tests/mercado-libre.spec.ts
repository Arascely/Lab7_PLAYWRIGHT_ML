import { expect, test } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

async function loginMercadoLibre(page) {
  try {
    // Ir a Mercado Libre
    await page.goto('https://www.mercadolibre.com.pe/', { timeout: 60000 });
    
    // Verificar si ya estamos logueados
    const isLoggedIn = await page.locator('.nav-header-user').isVisible().catch(() => false);
    
    if (isLoggedIn) {
      console.log('✅ Ya estás logueado en el navegador');
      return;
    }
    
    // Si no está logueado, hacer login automático
    console.log('⚠️ No estás logueado. Intentando login automático...');
    
    // Hacer clic en "Ingresar"
    await page.click('a:has-text("Ingresar")');
    await page.waitForSelector('input#user_id', { timeout: 15000 });
    
    // Usar credenciales de .env
    const email = process.env.ML_EMAIL;
    const password = process.env.ML_PASSWORD;
    
    if (!email || !password) {
      throw new Error('❌ Credenciales no encontradas en .env. Verifica el archivo.');
    }
    
    await page.fill('input#user_id', email);
    await page.click('button:has-text("Continuar")');
    
    await page.waitForSelector('input#password', { timeout: 15000 });
    await page.fill('input#password', password);
    await page.click('button:has-text("Ingresar")');
    
    // Esperar login
    await page.waitForTimeout(3000);
    await expect(page.locator('.nav-header-user')).toBeVisible({ timeout: 15000 });
    console.log('✅ Login automático exitoso');
    
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
}

// Modulo con las pruebas relacionadas con búsquedas
    test('TC-001: Buscar producto genérico (Laptop Lenovo)', async ({ page }) => {
        await page.goto('https://www.mercadolibre.com.pe/');
        //Se busca el termino
        const terminoBusqueda = 'Laptop Lenovo';
        await page.locator('input[id="cb1-edit"]').fill(terminoBusqueda);
        await page.keyboard.press('Enter');
        //Resultados cargados 
        const contenedorResultados = page.locator('ol.ui-search-layout');
        await expect(contenedorResultados).toBeVisible({ timeout: 15000 });
        //Capturas resultados de todos los titulos
        const elementosTitulo = page.locator('.poly-component__title');
        const primerTitulo = await elementosTitulo.first().innerText();
        console.log(`El primer resultado es: "${primerTitulo}"`);
        //Verificación
        expect(primerTitulo.toLowerCase()).toMatch(/lenovo/);
    });

    test('TC-002: Búsqueda sin coincidencias', async ({ page }) => {
    await page.goto('https://www.mercadolibre.com.pe/');

    // Se busca un termino destinado a fallar
    await page.locator('input[id="cb1-edit"]').fill('laptopinexistente99996434');
    await page.keyboard.press('Enter');

    const mensajeError = page.locator('.ui-search-rescue__title'); 
    
    // Verificación de que el mensaje de error es visible y contiene el texto esperado
    await expect(mensajeError).toBeVisible({ timeout: 10000 });
    
    // Corroboración de que el mensaje contiene el texto esperado
    await expect(mensajeError).toContainText('No encontramos resultados para tu búsqueda');
  });

  
  test('TC-003: Validación cruzada de Filtros de Precio', async ({ page }) => {
  // Configurar timeout de la prueba
  test.setTimeout(90000);
  
  // Navegar con timeout extendido
  await page.goto('https://www.mercadolibre.com.pe/', { 
    timeout: 60000 
  });
  
  // Realizar búsqueda
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).fill('celular');
  await page.keyboard.press('Enter');
  
  // Esperar resultados con timeout extendido
  await expect(page.locator('ol.ui-search-layout')).toBeVisible({ 
    timeout: 30000 
  });
  
  // Esperar filtros
  const minPrice = page.getByTestId('Minimum-price');
  await expect(minPrice).toBeVisible({ timeout: 15000 });
  
  // Llenar filtros
  await minPrice.click();
  await minPrice.clear();
  await minPrice.fill('2500');
  
  await page.getByTestId('Maximum-price').click();
  await page.getByTestId('Maximum-price').clear();
  await page.getByTestId('Maximum-price').fill('4500');
  
  // 🔥 CORREGIDO: Hacer clic en el botón ">" (flecha para aplicar)
  await page.getByTestId('ui-search-range-filter__text-submit-test').click();
  
  // Esperar a que se aplique el filtro
  await page.waitForTimeout(3000);
  
  // Verificar URL con el rango de precios
  await expect(page).toHaveURL(/.*PriceRange_2500-4500.*/, { 
    timeout: 30000 
  });
  
  // Verificar que hay resultados
  await expect(page.locator('.ui-search-result__content').first()).toBeVisible({ 
    timeout: 10000 
  });
});

  test('TC-004: Inyección de caracteres especiales (XSS)', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.pe/');
  
  // Caracteres especiales
  await page.locator('input[id="cb1-edit"]').fill("&%");
  await page.keyboard.press('Enter');

  // Validar que se muestre el mensaje de "No encontramos resultados"
  const mensajeError = page.locator('.ui-search-rescue__title'); 
  await expect(mensajeError).toBeVisible({ timeout: 10000 });
  await expect(mensajeError).toContainText('No encontramos resultados para tu búsqueda');
});
  
  test('TC-005: Procesamiento de Filtros Simultáneos', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.pe/');
  await page.locator('input[id="cb1-edit"]').fill('Audifonos Bluetooth');
  await page.keyboard.press('Enter');
  
  // Esperar que carguen los resultados
  await expect(page.locator('.ui-search-layout')).toBeVisible({ timeout: 15000 });
  
  // Aplicar filtros
  await page.getByRole('link', { name: 'Negro', exact: true }).click(); 
  await page.getByRole('link', { name: 'Es inalámbrico', description: 'Es inalámbrico' }).click();
  
  await page.waitForTimeout(2000);
  
  // Validamos las etiquetas de filtros aplicados
  const etiquetasAplicadas = page.locator('.andes-tag');
  await expect(etiquetasAplicadas).toHaveCount(2, { timeout: 15000 });
});

  test('TC-006: Agregar producto al carrito', async ({ page }) => {
    await page.goto('https://www.mercadolibre.com.pe/');
    await page.locator('input[id="cb1-edit"]').fill('Teclado gamer');
    await page.keyboard.press('Enter');
    await expect(page.locator('.ui-search-layout')).toBeVisible({ timeout: 15000 });

    // Entramos al primer producto de la lista
    await page.locator('.poly-component__title').first().click();

    // Agregamos al carrito
    await page.locator('button', { hasText: 'Agregar al carrito' }).click();

    // Validamos que nos mande a la ruta de carrito
    await expect(page).toHaveURL(/.*cart.*/, { timeout: 15000 });
  });


  test('TC-007: Límite superior de stock', async ({ page }) => {
  test.setTimeout(180000);
  
  console.log('Iniciando prueba de stock...');
  
  // Intentar login automático
  await page.goto('https://www.mercadolibre.com.pe/');
  
  // Verificar si ya está logueado
  const isLoggedIn = await page.locator('.nav-header-user').isVisible().catch(() => false);
  
  if (!isLoggedIn) {
    console.log('No estás logueado. Intentando login automático...');
    
    try {
      // Intentar login automático
      await page.click('a:has-text("Ingresar")');
      await page.waitForSelector('input#user_id', { timeout: 10000 });
      
      const email = process.env.ML_EMAIL;
      const password = process.env.ML_PASSWORD;
      
      await page.fill('input#user_id', email);
      await page.click('button:has-text("Continuar")');
      
      await page.waitForSelector('input#password', { timeout: 10000 });
      await page.fill('input#password', password);
      await page.click('button:has-text("Ingresar")');
      
      // Esperar y verificar si hay captcha
      await page.waitForTimeout(3000);
      
      // Verificar si apareció captcha
      const hasCaptcha = await page.locator('iframe[src*="captcha"]').isVisible().catch(() => false);
      
      if (hasCaptcha) {
        console.log('Captcha detectado!');
        console.log('Por favor, resuelve el captcha manualmente en el navegador');
        console.log('Esperando 60 segundos...');
        await page.waitForTimeout(60000);
      }
      
      // Verificar login exitoso
      await expect(page.locator('.nav-header-user')).toBeVisible({ timeout: 15000 });
      console.log('Login exitoso');
      
    } catch (error) {
      console.log('Error en login automático');
      console.log('Por favor, inicia sesión manualmente');
      console.log('Esperando 60 segundos...');
      await page.waitForTimeout(60000);
    }
  } else {
    console.log('Ya estás logueado');
  }
  
  // Buscar producto
  console.log('Buscando "Mouse inalambrico"...');
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).fill('Mouse inalambrico');
  await page.keyboard.press('Enter');
  
  // Esperar resultados
  await expect(page.locator('ol.ui-search-layout')).toBeVisible({ timeout: 15000 });
  console.log('Resultados de búsqueda cargados');
  
  // PASO 3: Entrar al primer producto
  console.log('Entrando al primer producto...');
  await page.locator('.poly-component__title').first().click();
  
  // Esperar que cargue la página del producto
  await page.waitForSelector('.ui-pdp-buybox', { timeout: 15000 });
  console.log('Página del producto cargada');
  
  // Desplegar menú de cantidad
  console.log('Desplegando menú de cantidad...');
  const dropdown = page.locator('.ui-pdp-buybox__quantity__dropdown');
  await dropdown.scrollIntoViewIfNeeded();
  await dropdown.click();
  
  //  Seleccionar "Más de..."
  console.log('Seleccionando "Más de..."...');
  try {
    await page.getByRole('option', { name: /Más de/ }).click();
  } catch {
    // Alternativa: buscar por texto exacto
    await page.locator('li:has-text("Más de")').click();
  }
  
  // Ingresar cantidad absurda
  console.log('Ingresando cantidad 999...');
  const quantityInput = page.locator('input[type="number"]');
  await quantityInput.waitFor({ state: 'visible', timeout: 5000 });
  await quantityInput.click({ clickCount: 3 }); // Seleccionar todo
  await quantityInput.fill('9999');
  await page.keyboard.press('Enter');
  
  // Validar error de stock
  console.log('Validando mensaje de error de stock...');
  try {
    const errorStock = page.locator('.ui-pdp-buybox__quantity__error');
    await expect(errorStock).toBeVisible({ timeout: 10000 });
    const errorText = await errorStock.textContent();
    console.log(`Mensaje de error visible: "${errorText}"`);
  } catch (error) {
    console.log('No se encontró mensaje de error visible');
    
    // Verificar que el botón de compra esté deshabilitado
    const buyButton = page.locator('.ui-pdp-buybox__action--primary button');
    await expect(buyButton).toBeDisabled({ timeout: 5000 });
    console.log('Botón de compra deshabilitado correctamente');
  }
  
  console.log('Prueba completada exitosamente');
});