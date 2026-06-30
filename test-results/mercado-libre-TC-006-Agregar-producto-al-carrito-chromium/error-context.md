# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mercado-libre.spec.ts >> TC-006: Agregar producto al carrito
- Location: tests\mercado-libre.spec.ts:167:7

# Error details

```
Error: locator.click: Error: strict mode violation: locator('button').filter({ hasText: 'Agregar al carrito' }) resolved to 2 elements:
    1) <button type="submit" id="_R_j6eaj569tala_" data-andes-button="true" data-andes-button-hierarchy="quiet" formaction="https://www.mercadolibre.com.pe/p/MPE619624797/add-to-cart" class="andes-button andes-spinner__icon-base ui-pdp-action--secondary andes-button--quiet">…</button> aka getByRole('button', { name: 'Agregar al carrito' }).first()
    2) <button type="submit" id="_R_16ddd8t569tala_" data-andes-button="true" data-andes-button-size="medium" data-andes-button-hierarchy="quiet" formaction="https://www.mercadolibre.com.pe/p/MPE716657808/add-to-cart" class="andes-button andes-spinner__icon-base ui-pdp-action--secondary andes-button--medium andes-button--quiet">…</button> aka locator('#other-sellers-item-MPE716657808').getByRole('button', { name: 'Agregar al carrito' })

Call log:
  - waiting for locator('button').filter({ hasText: 'Agregar al carrito' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - button "Menú de atajos" [ref=e5] [cursor=pointer]:
          - generic [ref=e6]: Menú de atajos
        - dialog [ref=e7]:
          - list [ref=e8]:
            - link [ref=e9] [cursor=pointer]:
              - /url: "#root-app"
              - text: Saltar el contenido
            - link [ref=e10] [cursor=pointer]:
              - /url: https://www.mercadolibre.com.pe/accesibilidad/feedback
              - text: Comentar sobre accesibilidad
          - separator [ref=e11]
          - list [ref=e12]:
            - link [ref=e13] [cursor=pointer]:
              - /url: "#cb1-edit"
              - generic [ref=e15]: /
            - link [ref=e16] [cursor=pointer]:
              - /url: https://myaccount.mercadolibre.com.pe/purchases/list
              - generic [ref=e18]: P
            - link [ref=e19] [cursor=pointer]:
              - /url: https://www.mercadolibre.com.pe/gz/cart/v2
              - generic [ref=e21]: C
            - link [ref=e22] [cursor=pointer]:
              - /url: "#description"
              - generic [ref=e24]: D
            - link [ref=e25] [cursor=pointer]:
              - /url: "#questions"
              - generic [ref=e27]: Q
            - link [ref=e28] [cursor=pointer]:
              - /url: "#reviews_capability_v3"
              - generic [ref=e30]: R
            - link [ref=e31] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e33]: Z
        - link "Mercado Libre Perú - Donde comprar y vender de todo" [ref=e34] [cursor=pointer]:
          - /url: //www.mercadolibre.com.pe
      - search [ref=e36]:
        - generic [ref=e37]: Ingresa lo que quieras encontrar
        - textbox "Ingresa lo que quieras encontrar" [ref=e38]:
          - /placeholder: Buscar productos, marcas y más…
        - button "Buscar" [ref=e39] [cursor=pointer]:
          - img "Buscar" [ref=e40]: 
      - link "Primera compra con envío gratis y hasta S/25 de descuento" [ref=e42] [cursor=pointer]:
        - /url: https://listado.mercadolibre.com.pe/_Container_nb-mas-comprados-2026#origin=banner-menu&me.audience=unknown&me.bu=3&me.bu_line=26&me.component_id=banner_menu_web_ml&me.content_id=BANNER_MENU_WEB_CUPON_NB_UNKNOWN_2025&me.flow=-1&me.logic=user_journey&me.position=0
        - img "Primera compra con envío gratis y hasta S/25 de descuento" [ref=e43]
      - button " Enviar a Lima Metropolitana" [ref=e46] [cursor=pointer]:
        - text: 
        - generic [ref=e47]: Enviar a
        - generic [ref=e48]: Lima Metropolitana
      - list [ref=e51]:
        - listitem [ref=e52]:
          - button "Categorías" [ref=e53] [cursor=pointer]
        - listitem [ref=e54]:
          - link "Ofertas" [ref=e55] [cursor=pointer]:
            - /url: https://www.mercadolibre.com.pe/ofertas#nav-header
        - listitem [ref=e56]:
          - link "Cupones" [ref=e57] [cursor=pointer]:
            - /url: https://www.mercadolibre.com.pe/cupones#nav-header
        - listitem [ref=e58]:
          - link "Moda" [ref=e59] [cursor=pointer]:
            - /url: https://www.mercadolibre.com.pe/c/ropa-y-accesorios#nav-header
        - listitem [ref=e60]:
          - link "Mercado Play Gratis" [ref=e61] [cursor=pointer]:
            - /url: https://play.mercadolibre.com.pe/?origin=navigation_menu_web#nav-header
            - text: Mercado Play
            - generic [ref=e62]: Gratis
        - listitem [ref=e63]:
          - link "Vender" [ref=e64] [cursor=pointer]:
            - /url: https://www.mercadolibre.com.pe/syi/core/list#nav-header
        - listitem [ref=e65]:
          - link "Ayuda" [ref=e66] [cursor=pointer]:
            - /url: https://www.mercadolibre.com.pe/ayuda#nav-header
      - generic [ref=e67]:
        - navigation "Menú de usuario" [ref=e68]:
          - list [ref=e69]:
            - listitem [ref=e70]:
              - link "Crea tu cuenta" [ref=e71] [cursor=pointer]:
                - /url: https://www.mercadolibre.com.pe/registration?confirmation_url=https%3A%2F%2Fwww.mercadolibre.com.pe%2Fteclado-mecanico-redragon-horus-fs-k618-rgb-sp-wireless-color-del-teclado-negro-red-switch-idioma-espanol-latinoamerica%2Fp%2FMPE19173279#nav-header
            - listitem [ref=e72]:
              - link "Ingresa" [ref=e73] [cursor=pointer]:
                - /url: https://www.mercadolibre.com/jms/mpe/lgz/login?platform_id=ML&go=https%3A%2F%2Fwww.mercadolibre.com.pe%2Fteclado-mecanico-redragon-horus-fs-k618-rgb-sp-wireless-color-del-teclado-negro-red-switch-idioma-espanol-latinoamerica%2Fp%2FMPE19173279&loginType=explicit&client_id=6280072776285528#nav-header
            - listitem [ref=e74]:
              - link "Mis compras" [ref=e75] [cursor=pointer]:
                - /url: https://myaccount.mercadolibre.com.pe/purchases/list#nav-header
        - link "0 productos en tu carrito" [ref=e76] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/gz/cart/v2
          - generic [ref=e77]: 
          - generic [ref=e78]: 0 productos en tu carrito
  - main [ref=e79]:
    - generic [ref=e80]:
      - generic [ref=e81]:
        - list [ref=e85]:
          - listitem [ref=e86]: "También puede interesarte :"
          - listitem [ref=e87]:
            - link "redragon dragonborn" [ref=e88] [cursor=pointer]:
              - /url: https://listado.mercadolibre.com.pe/redragon-dragonborn#topkeyword
          - listitem [ref=e89]:
            - text: "-"
            - link "redragon dragonborn k630" [ref=e90] [cursor=pointer]:
              - /url: https://listado.mercadolibre.com.pe/redragon-dragonborn-k630#topkeyword
          - listitem [ref=e91]:
            - text: "-"
            - link "teclado mecanico" [ref=e92] [cursor=pointer]:
              - /url: https://listado.mercadolibre.com.pe/teclado-mecanico#topkeyword
          - listitem [ref=e93]:
            - text: "-"
            - link "teclado inalambrico" [ref=e94] [cursor=pointer]:
              - /url: https://listado.mercadolibre.com.pe/teclado-inalambrico#topkeyword
          - listitem [ref=e95]:
            - text: "-"
            - link "teclado rgb" [ref=e96] [cursor=pointer]:
              - /url: https://listado.mercadolibre.com.pe/teclado-rgb#topkeyword
          - listitem [ref=e97]:
            - text: "-"
            - link "macbook air m2 512gb teclado latinoamerica" [ref=e98] [cursor=pointer]:
              - /url: https://listado.mercadolibre.com.pe/macbook-air-m2-512gb-teclado-latinoamerica#topkeyword
          - listitem [ref=e99]:
            - text: "-"
            - link "teclado antrix zigra mk" [ref=e100] [cursor=pointer]:
              - /url: https://listado.mercadolibre.com.pe/teclado-antrix-zigra-mk#topkeyword
        - generic [ref=e101]:
          - generic [ref=e104]:
            - link "Volver al listado" [ref=e105] [cursor=pointer]:
              - /url: https://listado.mercadolibre.com.pe/teclado-gamer
            - navigation [ref=e106]:
              - list [ref=e107]:
                - listitem [ref=e108]:
                  - link "..." [ref=e109] [cursor=pointer]:
                    - /url: https://www.mercadolibre.com.pe/c/computacion
                  - img [ref=e111]
                - listitem [ref=e113]:
                  - link "Periféricos de PC" [ref=e114] [cursor=pointer]:
                    - /url: https://listado.mercadolibre.com.pe/computacion/perifericos-pc/
                  - img [ref=e116]
                - listitem [ref=e118]:
                  - link "Mouses y Teclados" [ref=e119] [cursor=pointer]:
                    - /url: https://listado.mercadolibre.com.pe/computacion/perifericos-pc/mouses-teclados/
                  - img [ref=e121]
                - listitem [ref=e123]:
                  - link "Teclados" [ref=e124] [cursor=pointer]:
                    - /url: https://listado.mercadolibre.com.pe/computacion/perifericos-pc/mouses-teclados/teclados/
                  - img [ref=e126]
                - listitem [ref=e128]:
                  - link "Teclados Físicos" [ref=e129] [cursor=pointer]:
                    - /url: https://listado.mercadolibre.com.pe/computacion/perifericos-pc/mouses-teclados/teclados/teclados-fisicos/
                  - img [ref=e131]
                - listitem [ref=e133]:
                  - link "Teclado" [ref=e134] [cursor=pointer]:
                    - /url: https://listado.mercadolibre.com.pe/teclado
          - generic [ref=e135]:
            - link "Vender uno igual" [ref=e137] [cursor=pointer]:
              - /url: https://www.mercadolibre.com.pe/syi/core/list/equals?itemId=MPE619624797&productId=MPE19173279
            - button "Compartir" [ref=e141] [cursor=pointer]:
              - generic [ref=e142]: Compartir
      - generic [ref=e143]:
        - generic [ref=e144]:
          - generic [ref=e146]:
            - generic [ref=e147]:
              - group "Galería de fotos, Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e150]:
                - generic [ref=e151]:
                  - generic [ref=e152]:
                    - button "Imagen 1 de 9 de Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e154] [cursor=pointer]:
                      - img "Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e155]
                    - figure [ref=e156]:
                      - img "Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e157]
                  - button "Imagen 2 de 9 de Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e160] [cursor=pointer]:
                    - img "Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e161]
                  - button "Imagen 3 de 9 de Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e164] [cursor=pointer]:
                    - img "Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e165]
                  - button "Imagen 4 de 9 de Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e168] [cursor=pointer]:
                    - img "Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e169]
                  - button "Imagen 5 de 9 de Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e172] [cursor=pointer]:
                    - img "Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e173]
                  - button "Imagen 6 de 9 de Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e176] [cursor=pointer]:
                    - img "Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e177]
                  - button "Imagen 7 de 9 de Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e180] [cursor=pointer]:
                    - img "Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e181]
                  - generic [ref=e183]:
                    - generic [ref=e185] [cursor=pointer]: "2"
                    - button "Imagen 8 de 9 de Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e186] [cursor=pointer]:
                      - img "Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [ref=e187]
              - generic [ref=e188]:
                - link "Ver más productos marca Redragon" [ref=e189] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/computacion/nuevo/_BRAND_275795
                  - paragraph [ref=e192]: Ver más productos marca Redragon
                - generic [ref=e193]:
                  - generic [ref=e194]:
                    - generic [ref=e195]: Nuevo | +500 vendidos
                    - generic [ref=e196]:
                      - heading "Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica" [level=1] [ref=e197]
                      - generic [ref=e198]:
                        - link "MÁS VENDIDO" [ref=e201] [cursor=pointer]:
                          - /url: https://www.mercadolibre.com.pe/mas-vendidos/MPE418448#origin=pdp
                        - link "8º en Teclados Físicos" [ref=e204] [cursor=pointer]:
                          - /url: https://www.mercadolibre.com.pe/mas-vendidos/MPE418448#origin=pdp
                    - link "Calificación 4.7 de 5. 1505 opiniones." [ref=e206] [cursor=pointer]:
                      - /url: /noindex/catalog/reviews/MPE19173278?noIndex=true&access=view_all&modal=true&controlled=true&show_fae=true&brandId=275795&domain_id=MPE-PC_KEYBOARDS&category_id=MPE418448&vpp-view-type=pdp&source_platform=%2Fweb%2Fdesktop&device_id_variant=d94ae17d-34ab-4bb4-b93d-f5bd76eccaea
                      - generic [ref=e207]: "4.7"
                      - generic [ref=e208]:
                        - img [ref=e210]
                        - img [ref=e213]
                        - img [ref=e216]
                        - img [ref=e219]
                        - img [ref=e222]
                      - generic [ref=e224]: Calificación 4.7 de 5. 1505 opiniones.
                      - generic [ref=e225]: (1505)
                  - switch "Agregar a favoritos" [ref=e226] [cursor=pointer]:
                    - img [ref=e228]
                    - generic:
                      - img
                    - generic [ref=e231]: Agregar a favoritos
                - generic [ref=e233]:
                  - generic [ref=e234]:
                    - generic [ref=e235]:
                      - generic [ref=e236]: 15% OFF
                      - 'img "Antes: 366 soles con 90 céntimos" [ref=e238]':
                        - generic [ref=e239]: S/
                        - generic [ref=e240]: "366"
                        - generic [ref=e241]: ","
                        - generic [ref=e242]: "90"
                    - img "309 soles" [ref=e245]:
                      - generic [ref=e246]: S/
                      - generic [ref=e247]: "309"
                    - group [ref=e248]:
                      - paragraph [ref=e249]:
                        - text: 6 cuotas de
                        - img "51 soles con 50 céntimos" [ref=e251]:
                          - generic [ref=e252]: S/
                          - generic [ref=e253]: "51"
                          - generic [ref=e254]: ","
                          - generic [ref=e255]: "50"
                        - text: sin interés
                  - link "Ver los medios de pago" [ref=e259] [cursor=pointer]:
                    - /url: https://articulo.mercadolibre.com.pe/noindex/services/MPE619624797/payments?new_version=true&modal=false&newIndex=true
                    - generic [ref=e260]: Ver los medios de pago
                - generic [ref=e263]:
                  - generic [ref=e264]: Cupón
                  - paragraph [ref=e266]:
                    - img [ref=e268]
                    - generic [ref=e270]: Cupón
                  - generic [ref=e271]:
                    - img "25 soles" [ref=e273]:
                      - generic [ref=e274]: S/
                      - text: "25"
                    - text: OFF. Compra mínima
                    - img "51 soles" [ref=e276]:
                      - generic [ref=e277]: S/
                      - text: "51"
                    - text: .
                - generic [ref=e278]:
                  - generic [ref=e279]:
                    - paragraph [ref=e280]: Color del teclado:Negro
                    - generic [ref=e281]:
                      - button "Botón 1 de 2, Blanco, Disponible en otras opciones" [ref=e284] [cursor=pointer]:
                        - paragraph [ref=e285]: Blanco
                      - button "Botón 2 de 2, Seleccionado, Negro" [ref=e287] [cursor=pointer]:
                        - paragraph [ref=e288]: Negro
                  - generic [ref=e289]:
                    - paragraph [ref=e290]: Tipo de switch:Redragon Low profile Linear Red
                    - generic [ref=e291]:
                      - button "Botón 1 de 3, Mecánico" [ref=e292] [cursor=pointer]:
                        - paragraph [ref=e293]: Mecánico
                      - button "Botón 2 de 3, Seleccionado, Redragon Low profile Linear Red" [ref=e294] [cursor=pointer]:
                        - paragraph [ref=e295]: Redragon Low profile Linear Red
                      - button "Botón 3 de 3, Redragon Red, Disponible en otras opciones" [ref=e298] [cursor=pointer]:
                        - paragraph [ref=e299]: Redragon Red
                - generic [ref=e302]:
                  - heading "Lo que tienes que saber de este producto" [level=2] [ref=e304]
                  - generic [ref=e306]:
                    - list [ref=e307]:
                      - listitem [ref=e308]: "•Idioma: Español Latinoamérica."
                      - listitem [ref=e309]: "•Layout: QWERTY."
                      - listitem [ref=e310]: •Resiste a salpicaduras.
                      - listitem [ref=e311]: •Contiene teclado numérico.
                      - listitem [ref=e312]: •Función antighosting incorporada.
                      - listitem [ref=e313]: "•Tipo de teclado: mecánico."
                      - listitem [ref=e314]: •Con cable removible.
                      - listitem [ref=e315]: "•Medidas: 43.7cm de ancho, 14.7cm de alto y 1.7cm de profundidad."
                    - link "Ver características" [ref=e316] [cursor=pointer]:
                      - /url: "#highlighted_specs_attrs"
                      - generic [ref=e317]: Ver características
                - generic [ref=e318]:
                  - paragraph [ref=e319]: "Opciones de compra:"
                  - list [ref=e320]:
                    - listitem [ref=e321]:
                      - link "9 productos nuevos desde 308 soles con 90 céntimos" [ref=e323] [cursor=pointer]:
                        - generic [ref=e324]:
                          - generic [ref=e325]: 9 productos nuevos desde
                          - img "308 soles con 90 céntimos" [ref=e327]:
                            - generic [ref=e329]: S/
                            - generic [ref=e330]: "308"
                            - generic [ref=e331]: ","
                            - generic [ref=e332]: "90"
                - link "Ir a la compra" [ref=e333] [cursor=pointer]:
                  - /url: "#buybox-form"
            - generic [ref=e338]:
              - heading "Características del producto" [level=2] [ref=e340]
              - generic [ref=e342]:
                - generic [ref=e345]:
                  - img [ref=e347]
                  - paragraph [ref=e349]:
                    - generic [ref=e350]: "Idioma:"
                    - generic [ref=e351]: Español Latinoamérica
                - generic [ref=e354]:
                  - img [ref=e356]
                  - paragraph [ref=e358]:
                    - generic [ref=e359]: "Tipo de switch:"
                    - generic [ref=e360]: Redragon Low profile Linear Red
              - generic [ref=e364]:
                - generic [ref=e365]:
                  - generic [ref=e366]:
                    - heading "Características generales" [level=3] [ref=e367]
                    - table [ref=e368]:
                      - rowgroup [ref=e369]:
                        - row "Marca Redragon" [ref=e370]:
                          - rowheader "Marca" [ref=e371]:
                            - generic [ref=e372]: Marca
                          - cell "Redragon" [ref=e373]:
                            - generic [ref=e374]: Redragon
                        - row "Línea Horus" [ref=e375]:
                          - rowheader "Línea" [ref=e376]:
                            - generic [ref=e377]: Línea
                          - cell "Horus" [ref=e378]:
                            - generic [ref=e379]: Horus
                        - row "Modelo K618" [ref=e380]:
                          - rowheader "Modelo" [ref=e381]:
                            - generic [ref=e382]: Modelo
                          - cell "K618" [ref=e383]:
                            - generic [ref=e384]: K618
                        - row "Color del teclado Negro" [ref=e385]:
                          - rowheader "Color del teclado" [ref=e386]:
                            - generic [ref=e387]: Color del teclado
                          - cell "Negro" [ref=e388]:
                            - generic [ref=e389]: Negro
                        - row "Layout QWERTY" [ref=e390]:
                          - rowheader "Layout" [ref=e391]:
                            - generic [ref=e392]: Layout
                          - cell "QWERTY" [ref=e393]:
                            - generic [ref=e394]: QWERTY
                        - row "Idioma Español Latinoamérica" [ref=e395]:
                          - rowheader "Idioma" [ref=e396]:
                            - generic [ref=e397]: Idioma
                          - cell "Español Latinoamérica" [ref=e398]:
                            - generic [ref=e399]: Español Latinoamérica
                        - row "Tipo de switch Redragon Low profile Linear Red" [ref=e400]:
                          - rowheader "Tipo de switch" [ref=e401]:
                            - generic [ref=e402]: Tipo de switch
                          - cell "Redragon Low profile Linear Red" [ref=e403]:
                            - generic [ref=e404]: Redragon Low profile Linear Red
                        - row "Modelo detallado K618-RGB-SP" [ref=e405]:
                          - rowheader "Modelo detallado" [ref=e406]:
                            - generic [ref=e407]: Modelo detallado
                          - cell "K618-RGB-SP" [ref=e408]:
                            - generic [ref=e409]: K618-RGB-SP
                  - generic [ref=e410]:
                    - heading "Otros" [level=3] [ref=e411]
                    - table [ref=e412]:
                      - rowgroup [ref=e413]:
                        - row "Es resistente a salpicaduras Sí" [ref=e414]:
                          - rowheader "Es resistente a salpicaduras" [ref=e415]:
                            - generic [ref=e416]: Es resistente a salpicaduras
                          - cell "Sí" [ref=e417]:
                            - generic [ref=e418]: Sí
                        - row "Con cable removible Sí" [ref=e419]:
                          - rowheader "Con cable removible" [ref=e420]:
                            - generic [ref=e421]: Con cable removible
                          - cell "Sí" [ref=e422]:
                            - generic [ref=e423]: Sí
                        - row "Largo del cable 1.8 m" [ref=e424]:
                          - rowheader "Largo del cable" [ref=e425]:
                            - generic [ref=e426]: Largo del cable
                          - cell "1.8 m" [ref=e427]:
                            - generic [ref=e428]: 1.8 m
                        - row "Con reposa muñeca No" [ref=e429]:
                          - rowheader "Con reposa muñeca" [ref=e430]:
                            - generic [ref=e431]: Con reposa muñeca
                          - cell "No" [ref=e432]:
                            - generic [ref=e433]: "No"
                        - row "Con touchpad No" [ref=e434]:
                          - rowheader "Con touchpad" [ref=e435]:
                            - generic [ref=e436]: Con touchpad
                          - cell "No" [ref=e437]:
                            - generic [ref=e438]: "No"
                        - row "Con pad numérico Sí" [ref=e439]:
                          - rowheader "Con pad numérico" [ref=e440]:
                            - generic [ref=e441]: Con pad numérico
                          - cell "Sí" [ref=e442]:
                            - generic [ref=e443]: Sí
                        - row "Con trackball No" [ref=e444]:
                          - rowheader "Con trackball" [ref=e445]:
                            - generic [ref=e446]: Con trackball
                          - cell "No" [ref=e447]:
                            - generic [ref=e448]: "No"
                - generic [ref=e449]:
                  - generic [ref=e450]:
                    - heading "Peso y dimensiones" [level=3] [ref=e451]
                    - table [ref=e452]:
                      - rowgroup [ref=e453]:
                        - row "Altura del teclado 14.7 cm" [ref=e454]:
                          - rowheader "Altura del teclado" [ref=e455]:
                            - generic [ref=e456]: Altura del teclado
                          - cell "14.7 cm" [ref=e457]:
                            - generic [ref=e458]: 14.7 cm
                        - row "Ancho del teclado 43.7 cm" [ref=e459]:
                          - rowheader "Ancho del teclado" [ref=e460]:
                            - generic [ref=e461]: Ancho del teclado
                          - cell "43.7 cm" [ref=e462]:
                            - generic [ref=e463]: 43.7 cm
                        - row "Peso del teclado 725 g" [ref=e464]:
                          - rowheader "Peso del teclado" [ref=e465]:
                            - generic [ref=e466]: Peso del teclado
                          - cell "725 g" [ref=e467]:
                            - generic [ref=e468]: 725 g
                  - generic [ref=e469]:
                    - heading "Dimensiones" [level=3] [ref=e470]
                    - table [ref=e471]:
                      - rowgroup [ref=e472]:
                        - row "Profundidad del teclado 1.7 cm" [ref=e473]:
                          - rowheader "Profundidad del teclado" [ref=e474]:
                            - generic [ref=e475]: Profundidad del teclado
                          - cell "1.7 cm" [ref=e476]:
                            - generic [ref=e477]: 1.7 cm
                  - generic [ref=e478]:
                    - heading "Especificaciones" [level=3] [ref=e479]
                    - table [ref=e480]:
                      - rowgroup [ref=e481]:
                        - row "Arquitectura Mecánico" [ref=e482]:
                          - rowheader "Arquitectura" [ref=e483]:
                            - generic [ref=e484]: Arquitectura
                          - cell "Mecánico" [ref=e485]:
                            - generic [ref=e486]: Mecánico
                        - row "Con retroiluminación Sí" [ref=e487]:
                          - rowheader "Con retroiluminación" [ref=e488]:
                            - generic [ref=e489]: Con retroiluminación
                          - cell "Sí" [ref=e490]:
                            - generic [ref=e491]: Sí
                        - row "Con pantalla No" [ref=e492]:
                          - rowheader "Con pantalla" [ref=e493]:
                            - generic [ref=e494]: Con pantalla
                          - cell "No" [ref=e495]:
                            - generic [ref=e496]: "No"
                        - row "Es para una mano No" [ref=e497]:
                          - rowheader "Es para una mano" [ref=e498]:
                            - generic [ref=e499]: Es para una mano
                          - cell "No" [ref=e500]:
                            - generic [ref=e501]: "No"
                  - generic [ref=e502]:
                    - heading "Teclas" [level=3] [ref=e503]
                    - table [ref=e504]:
                      - rowgroup [ref=e505]:
                        - row "Con teclas anti-ghost Sí" [ref=e506]:
                          - rowheader "Con teclas anti-ghost" [ref=e507]:
                            - generic [ref=e508]: Con teclas anti-ghost
                          - cell "Sí" [ref=e509]:
                            - generic [ref=e510]: Sí
                  - generic [ref=e511]:
                    - heading "Otros" [level=3] [ref=e512]
                    - table [ref=e513]:
                      - rowgroup [ref=e514]:
                        - row "Es teclado numérico Sí" [ref=e515]:
                          - rowheader "Es teclado numérico" [ref=e516]:
                            - generic [ref=e517]: Es teclado numérico
                          - cell "Sí" [ref=e518]:
                            - generic [ref=e519]: Sí
                        - row "Conectividad Bluetooth" [ref=e520]:
                          - rowheader "Conectividad" [ref=e521]:
                            - generic [ref=e522]: Conectividad
                          - cell "Bluetooth" [ref=e523]:
                            - generic [ref=e524]: Bluetooth
                        - row "Accesorios incluidos Pilas" [ref=e525]:
                          - rowheader "Accesorios incluidos" [ref=e526]:
                            - generic [ref=e527]: Accesorios incluidos
                          - cell "Pilas" [ref=e528]:
                            - generic [ref=e529]: Pilas
            - generic [ref=e534]:
              - heading "Imágenes del producto" [level=2] [ref=e535]
              - generic:
                - generic:
                  - link "Imagen 1 de 6 de Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica":
                    - /url: https://http2.mlstatic.com/D_Q_NP_796593-MLA99510811472_112025-F.webp
                    - img "Imagen 1 de 6 de Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica"
                - generic:
                  - link "Imagen 2 de 6 de Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica":
                    - /url: https://http2.mlstatic.com/D_Q_NP_622276-MLA84556539656_052025-F.webp
                    - img "Imagen 2 de 6 de Teclado Mecánico Redragon Horus Fs K618-rgb-sp Wireless Color del teclado Negro Red Switch Idioma Español Latinoamérica"
              - button "Ver más imágenes" [ref=e536] [cursor=pointer]:
                - paragraph [ref=e538]: Ver más imágenes
            - generic [ref=e543]:
              - heading "Descripción" [level=2] [ref=e544]
              - paragraph [ref=e545]: "Teclado Mecánico Gamer Redragon HORUS TKL K618-RGB-SP CARACTERÍSTICAS ---------------------------- El HORUS TKL K618-RGB-SP es un teclado mecánico de tipo full size que ofrece dos modalidades de conexión: inalámbrica y cableada. Diseñado para combinar movilidad con rendimiento de alta calidad, este teclado cuenta con retroiluminación RGB Chroma y una amplia gama de accesos rápidos para una experiencia de uso superior. Especificaciones técnicas - Tipo Teclado: Mecánicos / Versión Wireless - Tipo Switch: Redragon Red Ultra low profile, lineal, fuerza de actuación 45 gr - Teclas Multimedia: Sí, dedicadas - Teclas Macro Dedicadas: Sí - Bloqueo Tecla Windows: Sí - Tamaño teclado: Full Size - Reposamuñecas: No - Retroiluminado: Sí, RGB Chroma - Conexión: Cable USB A a USB C enchapado, Bluetooth 5.0, dongle RF USB 2.4GHz - Matriz: 100% Anti-Ghosting con Full Key Rollover - Construcción: Plástico ABS reforzado y placa de aluminio anodizado - Anti salpicaduras: Sí - Distribución: Español Latinoamérica - Peso: 0.724 kg - Dimensiones: 43.8 x 14.75 x 2.2 cm - Extras: Teclas moldeadas por inyección de doble disparo de bajo perfil, rodillo para el control de volumen - Software: Sí - Contenido de la caja: Extractor de keycaps, Extractor de switches, 8 switches mecánicos ultra low profile, Manual de uso, Sticker Redragon."
          - generic [ref=e547]:
            - generic [ref=e549]:
              - generic [ref=e553]:
                - paragraph [ref=e554]:
                  - generic [ref=e555]: Envío gratis
                  - text: a todo el país
                - paragraph [ref=e556]: Conoce los tiempos y las formas de envío.
                - link "Calcular cuándo llega" [ref=e560] [cursor=pointer]:
                  - generic [ref=e561]: Calcular cuándo llega
              - 'combobox "Cantidad: 1 unidad" [ref=e566] [cursor=pointer]':
                - generic [ref=e567]:
                  - generic [ref=e568]: "Cantidad:"
                  - generic [ref=e569]: 1 unidad
                  - img [ref=e571]
                  - generic [ref=e573]: (+50 disponibles)
              - generic [ref=e575]:
                - button "Comprar ahora" [ref=e576] [cursor=pointer]:
                  - generic [ref=e577]: Comprar ahora
                - button "Agregar al carrito" [ref=e578] [cursor=pointer]:
                  - generic [ref=e579]:
                    - img [ref=e581]
                    - text: Agregar al carrito
              - generic [ref=e584]:
                - img "Mundo Gamer" [ref=e586]
                - generic [ref=e587]:
                  - generic [ref=e589]:
                    - generic [ref=e590]: Tienda oficial
                    - button "Mundo Gamer" [ref=e591] [cursor=pointer]:
                      - link "Mundo Gamer" [ref=e592]:
                        - /url: https://tienda.mercadolibre.com.pe/mundo-gamer
                  - paragraph [ref=e594]: +1000 ventas
              - list [ref=e595]:
                - listitem [ref=e596]:
                  - generic [ref=e597]:
                    - figure [ref=e598]:
                      - img [ref=e600]
                    - generic [ref=e603]:
                      - link "Devolución gratis." [ref=e607] [cursor=pointer]:
                        - /url: https://articulo.mercadolibre.com.pe/noindex/freeReturn/fashion?itemId=MPE619624797&quantity=1&new_version=true&modal=false&controlled=true
                      - text: Tienes 30 días desde que lo recibes.
                - listitem [ref=e608]:
                  - generic [ref=e609]:
                    - figure [ref=e610]:
                      - img [ref=e612]
                    - generic [ref=e615]:
                      - link "Compra Protegida Se abrirá en una nueva ventana" [ref=e616] [cursor=pointer]:
                        - /url: https://www.mercadolibre.com.pe/compra-protegida
                        - text: Compra Protegida
                        - generic [ref=e617]: Se abrirá en una nueva ventana
                      - text: . Recibe el producto que esperabas o te devolvemos tu dinero.
                - listitem [ref=e618]:
                  - generic [ref=e619]:
                    - figure [ref=e620]:
                      - img [ref=e622]
                    - generic [ref=e625]: 12 meses de garantía de fábrica.
            - generic [ref=e626]:
              - generic [ref=e627]:
                - generic [ref=e629]:
                  - link [ref=e631] [cursor=pointer]:
                    - /url: https://www.mercadolibre.com.pe/pagina/koby_inversiones?category_id=MPE418448&item_id=MPE619624797&recos_listing=true&client=recoview-selleritems&seller_id=510022734#origin=vpp
                  - link "Ir a la tienda oficial Ir a la tienda oficial" [ref=e633] [cursor=pointer]:
                    - /url: https://www.mercadolibre.com.pe/pagina/koby_inversiones?category_id=MPE418448&item_id=MPE619624797&recos_listing=true&client=recoview-selleritems&seller_id=510022734#origin=vpp
                    - generic [ref=e635]:
                      - img "Ir a la tienda oficial" [ref=e636]
                      - generic [ref=e637]: Ir a la tienda oficial
                - generic [ref=e640]:
                  - generic [ref=e641]:
                    - link "Mundo Gamer" [ref=e643] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/pagina/koby_inversiones?category_id=MPE418448&item_id=MPE619624797&recos_listing=true&client=recoview-selleritems&seller_id=510022734#origin=vpp
                      - heading "Mundo Gamer" [level=2] [ref=e645]
                    - link "Tienda oficial de Mercado Libre" [ref=e646] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/pagina/koby_inversiones?category_id=MPE418448&item_id=MPE619624797&recos_listing=true&client=recoview-selleritems&seller_id=510022734#origin=vpp
                      - generic [ref=e647]:
                        - heading "Tienda oficial de Mercado Libre" [level=3] [ref=e648]
                        - img [ref=e650]
                  - link "+1000 Productos" [ref=e652] [cursor=pointer]:
                    - /url: https://www.mercadolibre.com.pe/pagina/koby_inversiones?category_id=MPE418448&item_id=MPE619624797&recos_listing=true&client=recoview-selleritems&seller_id=510022734#origin=vpp
                    - paragraph [ref=e656]:
                      - generic [ref=e657]: "+1000"
                      - text: Productos
                - generic [ref=e659]:
                  - generic [ref=e663]:
                    - paragraph [ref=e664]: MercadoLíder Gold
                    - paragraph [ref=e665]: ¡Uno de los mejores del sitio!
                  - list [ref=e666]:
                    - listitem [ref=e667]
                    - listitem [ref=e668]
                    - listitem [ref=e669]
                    - listitem [ref=e670]
                    - listitem [ref=e671]
                  - generic [ref=e672]:
                    - generic [ref=e673]:
                      - paragraph [ref=e674]: "+1000"
                      - paragraph [ref=e675]: Ventas
                    - paragraph [ref=e679]: Buena atención
                    - paragraph [ref=e683]: Entrega a tiempo
                - link "Ir a la tienda oficial" [ref=e686] [cursor=pointer]:
                  - /url: https://www.mercadolibre.com.pe/pagina/koby_inversiones?category_id=MPE418448&item_id=MPE619624797&recos_listing=true&client=recoview-selleritems&seller_id=510022734#origin=vpp
                  - generic [ref=e687]: Ir a la tienda oficial
              - generic [ref=e688]:
                - heading "Otras opciones de compra" [level=2] [ref=e689]
                - list [ref=e690]:
                  - listitem [ref=e691]:
                    - generic [ref=e692]:
                      - img "308 soles con 90 céntimos" [ref=e698]:
                        - generic [ref=e699]: S/
                        - generic [ref=e700]: "308"
                        - generic [ref=e701]: ","
                        - generic [ref=e702]: "90"
                      - generic [ref=e703]: Mejor precio
                    - list [ref=e704]:
                      - listitem [ref=e705]:
                        - list [ref=e706]:
                          - listitem [ref=e707]:
                            - paragraph [ref=e708]:
                              - text: 6 cuotas de
                              - img "51 soles con 48 céntimos" [ref=e710]:
                                - generic [ref=e711]: S/
                                - text: 51,48
                              - text: sin interés
                          - listitem [ref=e712]:
                            - paragraph [ref=e713]:
                              - generic [ref=e714]: Envío gratis
                              - text: a todo el país
                      - listitem
                      - listitem [ref=e715]:
                        - generic [ref=e718]:
                          - generic [ref=e720]:
                            - generic [ref=e721]: Vendido por
                            - button "IEM-SHOP" [ref=e722] [cursor=pointer]:
                              - link "IEM-SHOP" [ref=e723]:
                                - /url: https://www.mercadolibre.com.pe/pagina/iem-shop?item_id=MPE716657808&category_id=MPE418448&seller_id=189480668&client=recoview-selleritems&recos_listing=true#origin=pdp&component=seller&typeSeller=eshop
                          - paragraph [ref=e725]: +10 mil ventas
                      - listitem [ref=e726]:
                        - generic [ref=e729]:
                          - button "Comprar ahora" [ref=e730] [cursor=pointer]:
                            - generic [ref=e731]: Comprar ahora
                          - button "Agregar al carrito" [ref=e732] [cursor=pointer]:
                            - generic [ref=e733]: Agregar al carrito
                - link "Ver más opciones desde 308 soles con 90 céntimos" [ref=e735] [cursor=pointer]:
                  - generic [ref=e736]:
                    - generic [ref=e737]: Ver más opciones desde
                    - img "308 soles con 90 céntimos" [ref=e739]:
                      - generic [ref=e741]: S/
                      - generic [ref=e742]: "308"
                      - generic [ref=e743]: ","
                      - generic [ref=e744]: "90"
              - generic [ref=e755]:
                - heading "Medios de pago" [level=2] [ref=e756]
                - generic [ref=e757]:
                  - paragraph [ref=e758]: Tarjetas de crédito y débito
                  - paragraph [ref=e759]: ¡Cuotas sin interés con bancos seleccionados!
                  - generic [ref=e760]:
                    - img "Visa" [ref=e763]
                    - img "American Express" [ref=e766]
                    - img "Mastercard" [ref=e769]
                    - img "Diners" [ref=e772]
                  - paragraph [ref=e773]: Tarjetas de débito
                  - generic [ref=e774]:
                    - img "Mastercard Débito" [ref=e777]
                    - img "Visa Débito" [ref=e780]
                    - img "yape" [ref=e783]
                - link "Conoce otros medios de pago" [ref=e787] [cursor=pointer]:
                  - /url: https://articulo.mercadolibre.com.pe/noindex/services/MPE619624797/payments?new_version=true&modal=false&newIndex=true
        - generic [ref=e789]:
          - generic [ref=e792]:
            - heading "Preguntas" [level=2] [ref=e793]
            - generic [ref=e796]:
              - textbox "Escribe tu pregunta..." [ref=e800]
              - button "Preguntar" [ref=e802] [cursor=pointer]:
                - generic [ref=e804]:
                  - img [ref=e806]
                  - generic [ref=e808]: Preguntar
            - link "Ver todas las preguntas" [ref=e814] [cursor=pointer]:
              - /url: https://articulo.mercadolibre.com.pe/noindex/questions/MPE619624797?scroll_to_question=1&new_version=true&modal=false&parent_origin=undefined
          - generic [ref=e819]:
            - heading "Opiniones del producto" [level=2] [ref=e822]
            - generic [ref=e823]:
              - generic [ref=e825]:
                - generic [ref=e826]:
                  - paragraph [ref=e828]: "4.7"
                  - generic [ref=e829]:
                    - generic [ref=e831]:
                      - img [ref=e832]
                      - img [ref=e834]
                      - img [ref=e836]
                      - img [ref=e838]
                      - img [ref=e840]
                      - paragraph [ref=e842]: Calificación 4.7 de 5. 1505 opiniones.
                    - paragraph [ref=e844]: 1.505 calificaciones
                - generic [ref=e845]:
                  - img [ref=e846]
                  - generic [ref=e849]: Incluye opiniones de otros países.
                - list [ref=e851]:
                  - listitem [ref=e852]:
                    - generic [ref=e857]:
                      - generic [ref=e858]: "5"
                      - img [ref=e860]
                  - listitem [ref=e862]:
                    - generic [ref=e867]:
                      - generic [ref=e868]: "4"
                      - img [ref=e870]
                  - listitem [ref=e872]:
                    - generic [ref=e877]:
                      - generic [ref=e878]: "3"
                      - img [ref=e880]
                  - listitem [ref=e882]:
                    - generic [ref=e887]:
                      - generic [ref=e888]: "2"
                      - img [ref=e890]
                  - listitem [ref=e892]:
                    - generic [ref=e897]:
                      - generic [ref=e898]: "1"
                      - img [ref=e900]
              - generic [ref=e902]:
                - generic [ref=e903]:
                  - heading "Opiniones con fotos" [level=3] [ref=e904]
                  - region "Fotos del producto compartidas por los compradores" [ref=e905]:
                    - generic [ref=e906]:
                      - generic [ref=e908]:
                        - group "1 de 5" [ref=e909] [cursor=pointer]:
                          - generic [ref=e910]:
                            - generic:
                              - generic:
                                - generic: Calificación 5 de 5
                                - generic: "5"
                                - img
                            - img "Foto del producto compartida por el comprador 1 de 5" [ref=e911]
                        - group "2 de 5" [ref=e912] [cursor=pointer]:
                          - generic [ref=e913]:
                            - generic:
                              - generic:
                                - generic: Calificación 5 de 5
                                - generic: "5"
                                - img
                            - img "Foto del producto compartida por el comprador 2 de 5" [ref=e914]
                        - group "3 de 5" [ref=e915] [cursor=pointer]:
                          - generic [ref=e916]:
                            - generic:
                              - generic:
                                - generic: Calificación 5 de 5
                                - generic: "5"
                                - img
                            - img "Foto del producto compartida por el comprador 3 de 5" [ref=e917]
                        - group "4 de 5" [ref=e918] [cursor=pointer]:
                          - generic [ref=e919]:
                            - generic:
                              - generic:
                                - generic: Calificación 5 de 5
                                - generic: "5"
                                - img
                            - img "Foto del producto compartida por el comprador 4 de 5" [ref=e920]
                        - group [ref=e921] [cursor=pointer]:
                          - generic [ref=e922]:
                            - generic:
                              - generic:
                                - generic: Calificación 5 de 5
                                - generic: "5"
                                - img
                            - img [ref=e923]
                      - button "Siguiente" [ref=e924] [cursor=pointer]:
                        - img [ref=e925]
                - generic [ref=e927]:
                  - generic [ref=e928]:
                    - button "Ordenar" [ref=e931] [cursor=pointer]:
                      - generic [ref=e932]:
                        - text: Ordenar
                        - img [ref=e933]
                    - button "Calificación" [ref=e937] [cursor=pointer]:
                      - generic [ref=e938]:
                        - text: Calificación
                        - img [ref=e939]
                  - generic [ref=e941]:
                    - heading "Opiniones" [level=3] [ref=e942]
                    - generic [ref=e943]: 615 comentarios
                    - generic [ref=e944]:
                      - paragraph [ref=e946]: El teclado destaca por su excelente calidad de materiales y comodidad. Es un dispositivo muy bueno dentro de su gama, con teclas suaves y una batería de larga duración. Además, ofrece una conexión estable y múltiples funciones, siendo ideal para quienes prefieren un teclado mecánico silencioso.
                      - generic [ref=e947]:
                        - img [ref=e948]
                        - generic [ref=e951]: Resumen de opiniones generado por IA
                    - generic [ref=e952]:
                      - article [ref=e954]:
                        - generic [ref=e956]:
                          - generic [ref=e957]:
                            - img [ref=e958]
                            - img [ref=e960]
                            - img [ref=e962]
                            - img [ref=e964]
                            - img [ref=e966]
                            - paragraph [ref=e968]: Calificación 5 de 5
                          - generic [ref=e969]:
                            - generic [ref=e970]: Argentina
                            - generic [ref=e972]: Hace más de 1 año
                        - text: "Lo compré el 1/09/2022. Pros: es super cómodo de usar, se siente muy bien al tacto. Cantidad de opciones rgb suficientes, recarga por usb (cable largo incluido usb c+a - c), relación precio-calidad, conexión por bluetooth a 3 dispositivos + 2. 4ghz + usb. Contras: problemas de conexión (solucionables), duración de la batería. Tuve algunos problemas de conexión: al usarlo inalámbrico y estar alejado tan solo 1 metro de la pc, y sin nada que genere interferencia en el medio, escribiendo algunas letras no las reconocía o las ponía dobles; probé conectándolo en una notebook y ahí funcionaba perfecto estando hasta 5 metros de distancia. Reiniciándolo de fábrica (fn+esc por 5') este problema se soluciona por un pequeño tiempo. Me di cuenta que la razón de interferencia es por el mouse bluetooth que uso en la pc, ya que ambos conectores de 2,4ghz (teclado y mouse) estaban en la parte delantera. Lo solucioné usando un extensor usb en el cual conecte el receptor del teclado y se solucionó al 100%."
                        - switch "Útil 68" [ref=e975] [cursor=pointer]:
                          - generic [ref=e976]:
                            - generic [ref=e977]: Útil
                            - img [ref=e978]
                            - paragraph [ref=e980]: "68"
                      - article [ref=e982]:
                        - generic [ref=e984]:
                          - generic [ref=e985]:
                            - img [ref=e986]
                            - img [ref=e988]
                            - img [ref=e990]
                            - img [ref=e992]
                            - img [ref=e994]
                            - paragraph [ref=e996]: Calificación 5 de 5
                          - generic [ref=e997]:
                            - generic [ref=e998]: Argentina
                            - generic [ref=e1000]: Hace más de 1 año
                        - region "Calificación 5 de 5" [ref=e1002]:
                          - generic [ref=e1005]:
                            - group "1 de 3" [ref=e1006] [cursor=pointer]:
                              - img "Foto del producto compartida por el comprador 1 de 3" [ref=e1008]
                            - group "2 de 3" [ref=e1009] [cursor=pointer]:
                              - img "Foto del producto compartida por el comprador 2 de 3" [ref=e1011]
                            - group "3 de 3" [ref=e1012] [cursor=pointer]:
                              - img "Foto del producto compartida por el comprador 3 de 3" [ref=e1014]
                        - text: Esta muy bueno se carga por cable no es a pilas por lo que es mucho mejor, y lo podes usar para muchas máquinas a la vez por que soporta 3 conexiones bluetooth, wireless y por supuesto lo podes usar por cable. A mi me resultó muy cómodo.
                        - switch "Útil 37" [ref=e1017] [cursor=pointer]:
                          - generic [ref=e1018]:
                            - generic [ref=e1019]: Útil
                            - img [ref=e1020]
                            - paragraph [ref=e1022]: "37"
                      - article [ref=e1024]:
                        - generic [ref=e1026]:
                          - generic [ref=e1027]:
                            - img [ref=e1028]
                            - img [ref=e1030]
                            - img [ref=e1032]
                            - img [ref=e1034]
                            - img [ref=e1036]
                            - paragraph [ref=e1038]: Calificación 5 de 5
                          - generic [ref=e1039]:
                            - generic [ref=e1040]: Argentina
                            - generic [ref=e1042]: Hace más de 1 año
                        - region "Calificación 5 de 5" [ref=e1044]:
                          - generic [ref=e1047]:
                            - group "1 de 2" [ref=e1048] [cursor=pointer]:
                              - img "Foto del producto compartida por el comprador 1 de 2" [ref=e1050]
                            - group "2 de 2" [ref=e1051] [cursor=pointer]:
                              - img "Foto del producto compartida por el comprador 2 de 2" [ref=e1053]
                        - text: Bueno, está es la opinión que vale la pena leer hasta el final. Es un teclado que no sabías q necesitabas, hasta que lo compraste. Trabajo haciendo trading y programación y estoy practicamente 20hs frente a la pc (si me voy a morir a los 40, duermo 4hs) en fin. Super preciso y silenció por ser red swich, el tema de los profile es un espectáculo, q decirte. Ergonómico, super rápido para tipear (para mí, más que los perfiles altos). El tema de la conexión vía cable, 3 modos de bluetooth y hasta un dongle usb. Osea no tenes excusa para conectarlo. Y el rgb y los 20 modos de luces cambio de intencidad y color, le dan un toque nave espacial al setup. (les compré unouse también a ellos). Con luces, la batería me llega a durar 20hs seguidas de uso, q es lo q mas estoy. De todas formas, le conectas el cable y 30 min lo carga. Si, hasta es carga rápida parece. No lleva pila, claro q no rey. Ruda multimedia para bajar intensidad de luz, o volumen muldimedia. Botones multimedia de pausar y pasar tema siguiente. Podés personalizar hasta 10macros. Si, 10! una locura. El teclado para el setup del caballero y de la dama. Y no, (no me pagaron por la opinión, me fume uno y me pinto la buena onda, quería darte mi experiencia sobre el producto). Chau, me dió hambre.
                        - switch "Útil 26" [ref=e1056] [cursor=pointer]:
                          - generic [ref=e1057]:
                            - generic [ref=e1058]: Útil
                            - img [ref=e1059]
                            - paragraph [ref=e1061]: "26"
                      - article [ref=e1063]:
                        - generic [ref=e1065]:
                          - generic [ref=e1066]:
                            - img [ref=e1067]
                            - img [ref=e1069]
                            - img [ref=e1071]
                            - img [ref=e1073]
                            - img [ref=e1075]
                            - paragraph [ref=e1077]: Calificación 5 de 5
                          - generic [ref=e1078]:
                            - generic [ref=e1079]: Argentina
                            - generic [ref=e1081]: Hace más de 1 año
                        - region "Calificación 5 de 5" [ref=e1083]:
                          - generic [ref=e1086]:
                            - group "1 de 2" [ref=e1087] [cursor=pointer]:
                              - img "Foto del producto compartida por el comprador 1 de 2" [ref=e1089]
                            - group "2 de 2" [ref=e1090] [cursor=pointer]:
                              - img "Foto del producto compartida por el comprador 2 de 2" [ref=e1092]
                        - text: Muy buen teclado, nunca habia tenido uno asi mecanico y buscaba alguno que se asemeje lo mas posible al teclado de la notebook y asi low profile esta genial. Es fachero, comodo, no es tan ruidoso, la iluminacion es muy buena, lo llevo usando una semana y ni se quejo con la bateria. Estaba entre este y el logi g815, y la verdad que por el precio y las caracteristicas esta sobrado, obvio no esperes que tenga la misma “sensacion” premiun que un teclado de 300 dolares. Si estas dudando no seas bola y compratelo, no te vas a arrepentir.
                        - switch "Útil 25" [ref=e1095] [cursor=pointer]:
                          - generic [ref=e1096]:
                            - generic [ref=e1097]: Útil
                            - img [ref=e1098]
                            - paragraph [ref=e1100]: "25"
                      - article [ref=e1102]:
                        - generic [ref=e1104]:
                          - generic [ref=e1105]:
                            - img [ref=e1106]
                            - img [ref=e1108]
                            - img [ref=e1110]
                            - img [ref=e1112]
                            - img [ref=e1114]
                            - paragraph [ref=e1116]: Calificación 5 de 5
                          - generic [ref=e1117]:
                            - generic [ref=e1118]: Argentina
                            - generic [ref=e1120]: Hace más de 1 año
                        - text: Me gustó mucho el teclado. Cuidado! no conectarlo a la pc si está prendido porque te quema el puerto. Siempre apagar el teclado antes de enchufarlo!. Con respexto al diseño el pongo 10 puntos. Yo siempre quise tener el logitech g915 y este es la copia china. Muy bueno. Le agregaria mejoras en los efectos de retroiluminacion de las teclas, pero para mi es algo secundario. Con tal que se vean las teclas con la luz apagada y que tengan mas de seis o siete colores está bien. La sensación del clicky es muy satisfactoria, vendo de un teclado genius de membrana. Escuché que gente se queja del ruido, yo nonlo uso para gaming, y la verdad que el sonido está bien para mi. El tema del inalambrico es muy completo. Tengo dos pc en el escritorio y uso el mismo teclado para las dos, tan solo apretando una combinación de teclas. Muy rápido y sencillo. Acordarse que si se queda sin batería primero tiene que estar apagado para enchufarlo. Ya que así quemé el unico puerto usb c de mi mother. Me quiero morir. Encima leí el manual. Y dice que para conectarlo a la pc tiene que estar apagado. Pero me olvidé. El precio estoy muy satisfecho, ya que cuesta la mitad que un logitech g915. La verdad que muy contento con este teclado premium de redragon. Te recomiendo que lo compres, no lo dudes más.
                        - switch "Útil 18" [ref=e1123] [cursor=pointer]:
                          - generic [ref=e1124]:
                            - generic [ref=e1125]: Útil
                            - img [ref=e1126]
                            - paragraph [ref=e1128]: "18"
                - button "Mostrar todas las opiniones" [ref=e1130] [cursor=pointer]
      - generic [ref=e1132]:
        - generic [ref=e1134]:
          - paragraph [ref=e1135]:
            - text: Publicación
            - generic [ref=e1136]: "#619624797"
          - link "Denunciar Se abrirá en una nueva ventana" [ref=e1137] [cursor=pointer]:
            - /url: https://www.mercadolibre.com.pe/noindex/denounce?item_id=MPE619624797&element_type=ITM
            - generic [ref=e1138]: Denunciar
            - generic [ref=e1139]: Se abrirá en una nueva ventana
        - generic [ref=e1142]:
          - heading "Quienes vieron este producto también compraron" [level=2] [ref=e1146]
          - region "Quienes vieron este producto también compraron" [ref=e1147]:
            - generic [ref=e1150]:
              - group "1 de 16" [ref=e1151]:
                - generic [ref=e1152]:
                  - img [ref=e1155]
                  - generic [ref=e1156]:
                    - link "Teclado Mecánico Aula F75 Max 75% Switch Leobog Reaper Green Black Degraded Inglés Us Negro" [ref=e1157] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/teclado-mecanico-aula-f75-max-75-switch-leobog-reaper-green-black-degraded-ingles-us/p/MPE47801913#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=0&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE882339858&sid=recos
                    - generic [ref=e1158]:
                      - img "277 soles" [ref=e1160]:
                        - generic [ref=e1161]: S/
                        - generic [ref=e1162]: "277"
                      - generic [ref=e1163]:
                        - text: 6 cuotas de
                        - img "46 soles con 17 céntimos" [ref=e1164]:
                          - generic [ref=e1166]: S/
                          - generic [ref=e1167]: "46"
                          - generic [ref=e1168]: ","
                          - generic [ref=e1169]: "17"
                        - text: sin interés
                    - generic [ref=e1170]: Envío gratis
              - group "2 de 16" [ref=e1171]:
                - generic [ref=e1172]:
                  - img [ref=e1175]
                  - generic [ref=e1176]:
                    - link "Teclado Mecánico Teros Te-4074g Retroiluminación Rainbow Usb Negro Español Latinoamérica" [ref=e1177] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/teclado-mecanico-teros-te4074g-retroiluminacion-rainbow-usb/up/MPEU3264493334#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=1&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE749336250&sid=recos
                    - generic [ref=e1178]:
                      - 'img "Antes: 129 soles" [ref=e1179]':
                        - generic [ref=e1180]: S/
                        - generic [ref=e1181]: "129"
                      - generic [ref=e1182]:
                        - 'img "Ahora: 88 soles con 11 céntimos" [ref=e1183]':
                          - generic [ref=e1184]: S/
                          - generic [ref=e1185]: "88"
                          - generic [ref=e1186]: ","
                          - generic [ref=e1187]: "11"
                        - generic [ref=e1188]: 31% OFF
                      - generic [ref=e1189]:
                        - text: 12 cuotas de
                        - img "7 soles con 34 céntimos" [ref=e1190]:
                          - generic [ref=e1192]: S/
                          - generic [ref=e1193]: "7"
                          - generic [ref=e1194]: ","
                          - generic [ref=e1195]: "34"
                        - text: sin interés
                    - generic [ref=e1196]: Envío gratis
              - group "3 de 16" [ref=e1197]:
                - generic [ref=e1198]:
                  - img [ref=e1201]
                  - generic [ref=e1202]:
                    - link "Teclado Gamer Rog Falchion Ace Hfx Negro Inglés Us" [ref=e1203] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/teclado-gamer-rog-falchion-ace-hfx/p/MPE70518090#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=2&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE1083878998&sid=recos
                    - generic [ref=e1204]:
                      - 'img "Antes: 1500 soles" [ref=e1205]':
                        - generic [ref=e1206]: S/
                        - generic [ref=e1207]: "1.500"
                      - generic [ref=e1208]:
                        - 'img "Ahora: 683 soles con 10 céntimos" [ref=e1209]':
                          - generic [ref=e1210]: S/
                          - generic [ref=e1211]: "683"
                          - generic [ref=e1212]: ","
                          - generic [ref=e1213]: "10"
                        - generic [ref=e1214]: 54% OFF
                      - generic [ref=e1215]:
                        - text: 6 cuotas de
                        - img "113 soles con 85 céntimos" [ref=e1216]:
                          - generic [ref=e1218]: S/
                          - generic [ref=e1219]: "113"
                          - generic [ref=e1220]: ","
                          - generic [ref=e1221]: "85"
                        - text: sin interés
                    - generic [ref=e1222]: Envío gratis
              - group "4 de 16" [ref=e1223]:
                - generic [ref=e1224]:
                  - img [ref=e1227]
                  - generic [ref=e1228]:
                    - link "Teclado Gamer Redragon Shiva K512 Rgb Qwerty Español Latinoamérica Color Negro Con Luz Rgb" [ref=e1229] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/teclado-gamer-redragon-shiva-k512-rgb-qwerty-espanol-latinoamerica-color-negro-con-luz-rgb/p/MPE17496952#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=3&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE873240148&sid=recos
                    - generic [ref=e1230]:
                      - 'img "Antes: 349 soles" [ref=e1231]':
                        - generic [ref=e1232]: S/
                        - generic [ref=e1233]: "349"
                      - generic [ref=e1234]:
                        - 'img "Ahora: 135 soles con 90 céntimos" [ref=e1235]':
                          - generic [ref=e1236]: S/
                          - generic [ref=e1237]: "135"
                          - generic [ref=e1238]: ","
                          - generic [ref=e1239]: "90"
                        - generic [ref=e1240]: 61% OFF
                      - generic [ref=e1241]:
                        - text: 6 cuotas de
                        - img "22 soles con 65 céntimos" [ref=e1242]:
                          - generic [ref=e1244]: S/
                          - generic [ref=e1245]: "22"
                          - generic [ref=e1246]: ","
                          - generic [ref=e1247]: "65"
                        - text: sin interés
                    - generic [ref=e1248]: Envío gratis
              - group "5 de 16" [ref=e1249]:
                - generic [ref=e1250]:
                  - img [ref=e1253]
                  - generic [ref=e1254]:
                    - link "Teclado Razer Ornata V3 X Membrane Sp Low Profile Chroma Negro Español España" [ref=e1255] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/teclado-razer-ornata-v3-x-membrane-sp-low-profile-chroma/up/MPEU3520155189#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=4&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE868351166&sid=recos
                    - generic [ref=e1256]:
                      - 'img "Antes: 165 soles con 60 céntimos" [ref=e1257]':
                        - generic [ref=e1258]: S/
                        - generic [ref=e1259]: "165"
                        - generic [ref=e1260]: ","
                        - generic [ref=e1261]: "60"
                      - generic [ref=e1262]:
                        - 'img "Ahora: 144 soles" [ref=e1263]':
                          - generic [ref=e1264]: S/
                          - generic [ref=e1265]: "144"
                        - generic [ref=e1266]: 13% OFF
                      - generic [ref=e1267]:
                        - text: 6 cuotas de
                        - img "24 soles" [ref=e1268]:
                          - generic [ref=e1270]: S/
                          - generic [ref=e1271]: "24"
                        - text: sin interés
                    - generic [ref=e1272]: Envío gratis
              - group [ref=e1273]:
                - generic [ref=e1274]:
                  - img [ref=e1277]
                  - generic [ref=e1278]:
                    - link [ref=e1279] [cursor=pointer]:
                      - /url: https://articulo.mercadolibre.com.pe/MPE-690786696-teclado-gamer-mecanico-enkore-royale-rgb-switch-blue-_JM?searchVariation=182095637754#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=5&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52
                      - text: Teclado Gamer Mecanico Enkore Royale Rgb Switch Blue
                    - generic [ref=e1280]:
                      - img [ref=e1281]:
                        - generic [ref=e1282]: S/
                        - generic [ref=e1283]: "159"
                      - generic [ref=e1284]:
                        - img [ref=e1285]:
                          - generic [ref=e1286]: S/
                          - generic [ref=e1287]: "114"
                          - generic [ref=e1288]: ","
                          - generic [ref=e1289]: "48"
                        - generic [ref=e1290]: 28% OFF
                      - generic [ref=e1291]:
                        - text: 6 cuotas de
                        - img [ref=e1292]:
                          - generic [ref=e1294]: S/
                          - generic [ref=e1295]: "19"
                          - generic [ref=e1296]: ","
                          - generic [ref=e1297]: "08"
                        - text: sin interés
                    - generic [ref=e1298]: Envío gratis
              - group [ref=e1299]:
                - generic [ref=e1300]:
                  - img [ref=e1303]
                  - generic [ref=e1304]:
                    - link [ref=e1305] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/teclado-redragon-ucal-pro-k673-75-rgb-wireless-black-teclado-negro/p/MPE47662843#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=6&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE1082472240&sid=recos
                      - text: Teclado Redragon Ucal Pro K673 75% Rgb Wireless Black Teclado Negro Inglés Us
                    - generic [ref=e1306]:
                      - img [ref=e1308]:
                        - generic [ref=e1309]: S/
                        - generic [ref=e1310]: "252"
                      - generic [ref=e1311]:
                        - text: 6 cuotas de
                        - img [ref=e1312]:
                          - generic [ref=e1314]: S/
                          - generic [ref=e1315]: "42"
                        - text: sin interés
                    - generic [ref=e1316]: Envío gratis
              - group [ref=e1317]:
                - generic [ref=e1318]:
                  - img [ref=e1321]
                  - generic [ref=e1322]:
                    - link [ref=e1323] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/teclado-redragon-ucalprorgb-wireless-english-k673sp-degrade/up/MPEU3466970234#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=7&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE840739268&sid=recos
                      - text: Teclado Redragon Ucalpro-rgb Wireless English K673sp Degrade Negro Inglés Us
                    - generic [ref=e1324]:
                      - img [ref=e1326]:
                        - generic [ref=e1327]: S/
                        - generic [ref=e1328]: "242"
                      - generic [ref=e1329]:
                        - text: 6 cuotas de
                        - img [ref=e1330]:
                          - generic [ref=e1332]: S/
                          - generic [ref=e1333]: "40"
                          - generic [ref=e1334]: ","
                          - generic [ref=e1335]: "33"
                        - text: sin interés
                    - generic [ref=e1336]: Envío gratis
              - group [ref=e1337]:
                - generic [ref=e1338]:
                  - img [ref=e1341]
                  - generic [ref=e1342]:
                    - link [ref=e1343] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/teclado-gamer-neon--mic-k709-sistema-waterproof/up/MPEU2457740667#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=8&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE439262410&sid=recos
                      - text: Teclado Gamer Neon+ - Mic K709+ Sistema Waterproof
                    - generic [ref=e1344]:
                      - img [ref=e1345]:
                        - generic [ref=e1346]: S/
                        - generic [ref=e1347]: "75"
                      - generic [ref=e1348]:
                        - img [ref=e1349]:
                          - generic [ref=e1350]: S/
                          - generic [ref=e1351]: "63"
                        - generic [ref=e1352]: 16% OFF
                      - generic [ref=e1353]:
                        - text: 6 cuotas de
                        - img [ref=e1354]:
                          - generic [ref=e1356]: S/
                          - generic [ref=e1357]: "10"
                          - generic [ref=e1358]: ","
                          - generic [ref=e1359]: "50"
                        - text: sin interés
                    - generic [ref=e1360]: Envío gratis
              - group [ref=e1361]:
                - generic [ref=e1362]:
                  - img [ref=e1365]
                  - generic [ref=e1366]:
                    - link [ref=e1367] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/teclado-gamer-mecanico-redragon-k673rgb-pro-sp-negro-espanol-latinoamerica/p/MPE67960369#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=9&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE1077716276&sid=recos
                      - text: Teclado Gamer Mecanico Redragon K673rgb-pro Sp Negro Español Latinoamérica
                    - generic [ref=e1368]:
                      - img [ref=e1370]:
                        - generic [ref=e1371]: S/
                        - generic [ref=e1372]: "399"
                      - generic [ref=e1373]:
                        - text: 6 cuotas de
                        - img [ref=e1374]:
                          - generic [ref=e1376]: S/
                          - generic [ref=e1377]: "66"
                          - generic [ref=e1378]: ","
                          - generic [ref=e1379]: "50"
                        - text: sin interés
                    - generic [ref=e1380]: Envío gratis
              - group [ref=e1381]:
                - generic [ref=e1382]:
                  - img [ref=e1385]
                  - generic [ref=e1386]:
                    - link [ref=e1387] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/teclado-mecanico-inalambrico-keychron-k8-para-mac-con-retroi/p/MPE44746421#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=10&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE710871744&sid=recos
                      - text: Teclado Mecánico Inalámbrico Keychron K8 Para Mac Con Retroi Negro Inglés Us
                    - generic [ref=e1388]:
                      - img [ref=e1389]:
                        - generic [ref=e1390]: S/
                        - generic [ref=e1391]: "466"
                      - generic [ref=e1392]:
                        - img [ref=e1393]:
                          - generic [ref=e1394]: S/
                          - generic [ref=e1395]: "373"
                        - generic [ref=e1396]: 19% OFF
                      - generic [ref=e1397]:
                        - text: 12 cuotas de
                        - img [ref=e1398]:
                          - generic [ref=e1400]: S/
                          - generic [ref=e1401]: "31"
                          - generic [ref=e1402]: ","
                          - generic [ref=e1403]: "08"
                        - text: sin interés
                    - generic [ref=e1404]: Envío gratis
              - group [ref=e1405]:
                - generic [ref=e1406]:
                  - img [ref=e1409]
                  - generic [ref=e1410]:
                    - link [ref=e1411] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/teclado-gamer-mecanico-enkore-royale-white-rgb-switch-red/up/MPEU2677964410#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=11&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE690773708&sid=recos
                      - text: Teclado Gamer Mecanico Enkore Royale White Rgb Switch Red Blanco Español Latinoamérica
                    - generic [ref=e1412]:
                      - img [ref=e1413]:
                        - generic [ref=e1414]: S/
                        - generic [ref=e1415]: "160"
                      - generic [ref=e1416]:
                        - img [ref=e1417]:
                          - generic [ref=e1418]: S/
                          - generic [ref=e1419]: "112"
                        - generic [ref=e1420]: 30% OFF
                      - generic [ref=e1421]:
                        - text: 12 cuotas de
                        - img [ref=e1422]:
                          - generic [ref=e1424]: S/
                          - generic [ref=e1425]: "9"
                          - generic [ref=e1426]: ","
                          - generic [ref=e1427]: "33"
                        - text: sin interés
                    - generic [ref=e1428]: Envío gratis
              - group [ref=e1429]:
                - generic [ref=e1430]:
                  - img [ref=e1433]
                  - generic [ref=e1434]:
                    - link [ref=e1435] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/teclado-logitech-g-g515-tkl-version-cableado-teclado-negro-idioma-ingles-us/p/MPE44765890#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=12&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE700120258&sid=recos
                      - text: Teclado Logitech G G515 Tkl Versión Cableado Teclado Negro Idioma Inglés Us
                    - generic [ref=e1436]:
                      - img [ref=e1437]:
                        - generic [ref=e1438]: S/
                        - generic [ref=e1439]: "895"
                        - generic [ref=e1440]: ","
                        - generic [ref=e1441]: "90"
                      - generic [ref=e1442]:
                        - img [ref=e1443]:
                          - generic [ref=e1444]: S/
                          - generic [ref=e1445]: "399"
                          - generic [ref=e1446]: ","
                          - generic [ref=e1447]: "10"
                        - generic [ref=e1448]: 55% OFF
                      - generic [ref=e1449]:
                        - text: 6 cuotas de
                        - img [ref=e1450]:
                          - generic [ref=e1452]: S/
                          - generic [ref=e1453]: "66"
                          - generic [ref=e1454]: ","
                          - generic [ref=e1455]: "52"
                        - text: sin interés
                    - generic [ref=e1456]: Envío gratis
              - group [ref=e1457]:
                - generic [ref=e1458]:
                  - img [ref=e1461]
                  - generic [ref=e1462]:
                    - link [ref=e1463] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/teclado-mecanico-inalambrico-rkm87-75-rgb-oled-usb-pc-teclado-ocean-blue-cream-switch-idioma-espanol-espana/p/MPE47886840#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=13&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE757487188&sid=recos
                      - text: Teclado Mecánico Inalambrico Rkm87 75% Rgb Oled Usb Pc Teclado Ocean Blue / Cream Switch Idioma Español España Español Latinoamérica
                    - generic [ref=e1464]:
                      - img [ref=e1465]:
                        - generic [ref=e1466]: S/
                        - generic [ref=e1467]: "601"
                        - generic [ref=e1468]: ","
                        - generic [ref=e1469]: "29"
                      - generic [ref=e1470]:
                        - img [ref=e1471]:
                          - generic [ref=e1472]: S/
                          - generic [ref=e1473]: "342"
                          - generic [ref=e1474]: ","
                          - generic [ref=e1475]: "09"
                        - generic [ref=e1476]: 43% OFF
                      - generic [ref=e1477]:
                        - text: 6 cuotas de
                        - img [ref=e1478]:
                          - generic [ref=e1480]: S/
                          - generic [ref=e1481]: "57"
                          - generic [ref=e1482]: ","
                          - generic [ref=e1483]: "01"
                        - text: sin interés
                    - generic [ref=e1484]: Envío gratis
              - group [ref=e1485]:
                - generic [ref=e1486]:
                  - img [ref=e1489]
                  - generic [ref=e1490]:
                    - link [ref=e1491] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/teclado-bluetooth-logitech-master-series-mx-keys-mini-qwerty-espanol-color-gris-palido-con-luz-blanca/p/MPE18931564#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=14&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE765235606&sid=recos
                      - text: Teclado Bluetooth Logitech Master Series Mx Keys Mini Qwerty Español Color Gris Pálido Con Luz Blanca
                    - generic [ref=e1492]:
                      - img [ref=e1494]:
                        - generic [ref=e1495]: S/
                        - generic [ref=e1496]: "371"
                      - generic [ref=e1497]:
                        - text: 6 cuotas de
                        - img [ref=e1498]:
                          - generic [ref=e1500]: S/
                          - generic [ref=e1501]: "61"
                          - generic [ref=e1502]: ","
                          - generic [ref=e1503]: "83"
                        - text: sin interés
                    - generic [ref=e1504]: Envío gratis
              - group [ref=e1505]:
                - generic [ref=e1506]:
                  - img [ref=e1509]
                  - generic [ref=e1510]:
                    - link [ref=e1511] [cursor=pointer]:
                      - /url: https://www.mercadolibre.com.pe/redragon-k668-rgb-teclado-juegos-104-teclas-4-teclas-con/p/MPE41855333#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=15&reco_backend_type=low_level&reco_id=9c9ade3a-fab6-4a9b-aa09-eb0c745c5a52&wid=MPE723206330&sid=recos
                      - text: Redragon K668 Rgb Teclado Juegos, 104 Teclas + 4 Teclas Con Blanco Inglés Us
                    - generic [ref=e1512]:
                      - img [ref=e1513]:
                        - generic [ref=e1514]: S/
                        - generic [ref=e1515]: "299"
                      - generic [ref=e1516]:
                        - img [ref=e1517]:
                          - generic [ref=e1518]: S/
                          - generic [ref=e1519]: "209"
                        - generic [ref=e1520]: 30% OFF
                      - generic [ref=e1521]:
                        - text: 6 cuotas de
                        - img [ref=e1522]:
                          - generic [ref=e1524]: S/
                          - generic [ref=e1525]: "34"
                          - generic [ref=e1526]: ","
                          - generic [ref=e1527]: "83"
                        - text: sin interés
                    - generic [ref=e1528]: Envío gratis
      - generic [ref=e1533]:
        - heading "Destacado en Computación" [level=2] [ref=e1535]
        - generic [ref=e1536]:
          - generic [ref=e1537]:
            - heading "Laptop" [level=4] [ref=e1538]:
              - link "Laptop" [ref=e1539] [cursor=pointer]:
                - /url: https://listado.mercadolibre.com.pe/laptop#headterms
            - list [ref=e1540]:
              - listitem [ref=e1541]:
                - link "Laptop gamer" [ref=e1542] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/laptop-gamer#headterms
              - listitem [ref=e1543]:
                - link "Laptop thunderobot" [ref=e1544] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/laptop-thunderobot#headterms
              - listitem [ref=e1545]:
                - link "Laptop 16gb ram" [ref=e1546] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/laptop-16gb-ram#headterms
              - listitem [ref=e1547]:
                - link "Lenovo thinkpad" [ref=e1548] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/lenovo-thinkpad#headterms
              - listitem [ref=e1549]:
                - link "Alienware m15 r3" [ref=e1550] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/alienware-m15-r3#headterms
              - listitem [ref=e1551]:
                - link "Macbook air m1" [ref=e1552] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/macbook-air-m1#headterms
              - listitem [ref=e1553]:
                - link "Laptop lenovo" [ref=e1554] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/laptop-lenovo#headterms
            - button "Ver todo" [ref=e1555] [cursor=pointer]:
              - text: Ver todo
              - img [ref=e1556]
          - generic [ref=e1558]:
            - heading "Tablet" [level=4] [ref=e1559]:
              - link "Tablet" [ref=e1560] [cursor=pointer]:
                - /url: https://listado.mercadolibre.com.pe/tablet#headterms
            - list [ref=e1561]:
              - listitem [ref=e1562]:
                - link "Ipad" [ref=e1563] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/ipad#headterms
              - listitem [ref=e1564]:
                - link "Tablet uso rudo" [ref=e1565] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/tablet-uso-rudo#headterms
              - listitem [ref=e1566]:
                - link "Tablet samsung" [ref=e1567] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/tablet-samsung#headterms
              - listitem [ref=e1568]:
                - link "Ipad modelo a1474" [ref=e1569] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/ipad-modelo-a1474#headterms
              - listitem [ref=e1570]:
                - link "Samsung tab s7" [ref=e1571] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/samsung-tab-s7#headterms
              - listitem [ref=e1572]:
                - link "One plus pad" [ref=e1573] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/one-plus-pad#headterms
              - listitem [ref=e1574]:
                - link "Xiaomi pad 5" [ref=e1575] [cursor=pointer]:
                  - /url: https://listado.mercadolibre.com.pe/xiaomi-pad-5#headterms
            - button "Ver todo" [ref=e1576] [cursor=pointer]:
              - text: Ver todo
              - img [ref=e1577]
  - generic [ref=e1581]:
    - heading "Productos más buscados" [level=3] [ref=e1582]
    - list [ref=e1583]:
      - listitem [ref=e1584]:
        - link "aire acondicionado portatil" [ref=e1585] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/aires-acondicionados-portatil
        - text: "-"
      - listitem [ref=e1586]:
        - link "airpods" [ref=e1587] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/airpods
        - text: "-"
      - listitem [ref=e1588]:
        - link "airpods pro" [ref=e1589] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/airpods-pro
        - text: "-"
      - listitem [ref=e1590]:
        - link "airpods pro 2" [ref=e1591] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/airpods-pro-2
        - text: "-"
      - listitem [ref=e1592]:
        - link "camaras de seguridad" [ref=e1593] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/camara-vigilancia
        - text: "-"
      - listitem [ref=e1594]:
        - link "chromecast" [ref=e1595] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/chromecast
        - text: "-"
      - listitem [ref=e1596]:
        - link "frigobar" [ref=e1597] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/frigobar
        - text: "-"
      - listitem [ref=e1598]:
        - link "gopro" [ref=e1599] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/go-pro
        - text: "-"
      - listitem [ref=e1600]:
        - link "grabadora de voz" [ref=e1601] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/grabador-voz
        - text: "-"
      - listitem [ref=e1602]:
        - link "honor" [ref=e1603] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/honor
        - text: "-"
      - listitem [ref=e1604]:
        - link "honor 8x" [ref=e1605] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/honor-x8
        - text: "-"
      - listitem [ref=e1606]:
        - link "horno electrico" [ref=e1607] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/horno-electrico
        - text: "-"
      - listitem [ref=e1608]:
        - link "iphone 8 plus" [ref=e1609] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-8-plus
        - text: "-"
      - listitem [ref=e1610]:
        - link "iphone 10" [ref=e1611] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-10
        - text: "-"
      - listitem [ref=e1612]:
        - link "iphone 11" [ref=e1613] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-11
        - text: "-"
      - listitem [ref=e1614]:
        - link "iphone 11 pro" [ref=e1615] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-11-pro
        - text: "-"
      - listitem [ref=e1616]:
        - link "iphone 11 pro max" [ref=e1617] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-11-pro-max
        - text: "-"
      - listitem [ref=e1618]:
        - link "iphone 12 pro" [ref=e1619] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-12-pro
        - text: "-"
      - listitem [ref=e1620]:
        - link "iphone 12 pro max" [ref=e1621] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-12-pro-max
        - text: "-"
      - listitem [ref=e1622]:
        - link "iphone 13 pro" [ref=e1623] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-13-pro
        - text: "-"
      - listitem [ref=e1624]:
        - link "iphone 13 pro max" [ref=e1625] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-13-pro-max
        - text: "-"
      - listitem [ref=e1626]:
        - link "iphone 14" [ref=e1627] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-14
        - text: "-"
      - listitem [ref=e1628]:
        - link "iphone 14 plus" [ref=e1629] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-14-plus
        - text: "-"
      - listitem [ref=e1630]:
        - link "iphone 16" [ref=e1631] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-16
        - text: "-"
      - listitem [ref=e1632]:
        - link "iphone 16 plus" [ref=e1633] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-16-plus
        - text: "-"
      - listitem [ref=e1634]:
        - link "iphone 16 pro" [ref=e1635] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-16-pro
        - text: "-"
      - listitem [ref=e1636]:
        - link "iphone 16 pro max" [ref=e1637] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-16-pro-max
        - text: "-"
      - listitem [ref=e1638]:
        - link "iphone se" [ref=e1639] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-se
        - text: "-"
      - listitem [ref=e1640]:
        - link "iphone xr" [ref=e1641] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-xr
        - text: "-"
      - listitem [ref=e1642]:
        - link "iphone xs" [ref=e1643] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/iphone-xs
        - text: "-"
      - listitem [ref=e1644]:
        - link "laptop gamer" [ref=e1645] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/laptop-gamer
        - text: "-"
      - listitem [ref=e1646]:
        - link "licuadora" [ref=e1647] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/licuadora
        - text: "-"
      - listitem [ref=e1648]:
        - link "macbook" [ref=e1649] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/macbook
        - text: "-"
      - listitem [ref=e1650]:
        - link "microonda" [ref=e1651] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/microondas
        - text: "-"
      - listitem [ref=e1652]:
        - link "nintendo switch" [ref=e1653] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/nintendo-switch
        - text: "-"
      - listitem [ref=e1654]:
        - link "pc" [ref=e1655] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/pc
        - text: "-"
      - listitem [ref=e1656]:
        - link "playstation 5" [ref=e1657] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/playstation-5
        - text: "-"
      - listitem [ref=e1658]:
        - link "redmi 9" [ref=e1659] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/redmi-9
        - text: "-"
      - listitem [ref=e1660]:
        - link "redmi note 10" [ref=e1661] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/xiaomi-redmi-note-10
        - text: "-"
      - listitem [ref=e1662]:
        - link "redmi note 10 pro" [ref=e1663] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/xiaomi-redmi-note-10-pro
        - text: "-"
      - listitem [ref=e1664]:
        - link "redmi note 11" [ref=e1665] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/celular-xiaomi-redmi-note-11
        - text: "-"
      - listitem [ref=e1666]:
        - link "redmi note 11 pro" [ref=e1667] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/redmi-note-11-pro
        - text: "-"
      - listitem [ref=e1668]:
        - link "redmi note 8" [ref=e1669] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/redmi-note-8
        - text: "-"
      - listitem [ref=e1670]:
        - link "refrigerador lg" [ref=e1671] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/refrigerador-lg
        - text: "-"
      - listitem [ref=e1672]:
        - link "roku" [ref=e1673] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/roku
        - text: "-"
      - listitem [ref=e1674]:
        - link "rolex" [ref=e1675] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/rolex
        - text: "-"
      - listitem [ref=e1676]:
        - link "samsung a53" [ref=e1677] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/samsung-a53
        - text: "-"
      - listitem [ref=e1678]:
        - link "samsung s21 ultra" [ref=e1679] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/samsung-s21-ultra
        - text: "-"
      - listitem [ref=e1680]:
        - link "samsung s22 ultra" [ref=e1681] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/samsung-s22-ultra
        - text: "-"
      - listitem [ref=e1682]:
        - link "silla gamer" [ref=e1683] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/silla-gamer
        - text: "-"
      - listitem [ref=e1684]:
        - link "smartwatch" [ref=e1685] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/smart-watch
        - text: "-"
      - listitem [ref=e1686]:
        - link "televisores" [ref=e1687] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/televisores
        - text: "-"
      - listitem [ref=e1688]:
        - link "xiaomi 11t pro" [ref=e1689] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/xiaomi-mi-11t-pro
        - text: "-"
      - listitem [ref=e1690]:
        - link "xiaomi 12 pro" [ref=e1691] [cursor=pointer]:
          - /url: https://listado.mercadolibre.com.pe/xiaomi-12-pro
  - generic [ref=e1694]:
    - heading "Buscar productos por letra inicial" [level=3] [ref=e1695]
    - list "Buscar productos por letra inicial" [ref=e1697]:
      - listitem [ref=e1698]:
        - link "Buscar productos por letra inicial A" [ref=e1699] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/A/1
          - text: A
      - listitem [ref=e1700]: "-"
      - listitem [ref=e1701]:
        - link "Buscar productos por letra inicial B" [ref=e1702] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/B/1
          - text: B
      - listitem [ref=e1703]: "-"
      - listitem [ref=e1704]:
        - link "Buscar productos por letra inicial C" [ref=e1705] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/C/1
          - text: C
      - listitem [ref=e1706]: "-"
      - listitem [ref=e1707]:
        - link "Buscar productos por letra inicial D" [ref=e1708] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/D/1
          - text: D
      - listitem [ref=e1709]: "-"
      - listitem [ref=e1710]:
        - link "Buscar productos por letra inicial E" [ref=e1711] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/E/1
          - text: E
      - listitem [ref=e1712]: "-"
      - listitem [ref=e1713]:
        - link "Buscar productos por letra inicial F" [ref=e1714] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/F/1
          - text: F
      - listitem [ref=e1715]: "-"
      - listitem [ref=e1716]:
        - link "Buscar productos por letra inicial G" [ref=e1717] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/G/1
          - text: G
      - listitem [ref=e1718]: "-"
      - listitem [ref=e1719]:
        - link "Buscar productos por letra inicial H" [ref=e1720] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/H/1
          - text: H
      - listitem [ref=e1721]: "-"
      - listitem [ref=e1722]:
        - link "Buscar productos por letra inicial I" [ref=e1723] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/I/1
          - text: I
      - listitem [ref=e1724]: "-"
      - listitem [ref=e1725]:
        - link "Buscar productos por letra inicial J" [ref=e1726] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/J/1
          - text: J
      - listitem [ref=e1727]: "-"
      - listitem [ref=e1728]:
        - link "Buscar productos por letra inicial K" [ref=e1729] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/K/1
          - text: K
      - listitem [ref=e1730]: "-"
      - listitem [ref=e1731]:
        - link "Buscar productos por letra inicial L" [ref=e1732] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/L/1
          - text: L
      - listitem [ref=e1733]: "-"
      - listitem [ref=e1734]:
        - link "Buscar productos por letra inicial M" [ref=e1735] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/M/1
          - text: M
      - listitem [ref=e1736]: "-"
      - listitem [ref=e1737]:
        - link "Buscar productos por letra inicial N" [ref=e1738] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/N/1
          - text: "N"
      - listitem [ref=e1739]: "-"
      - listitem [ref=e1740]:
        - link "Buscar productos por letra inicial O" [ref=e1741] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/O/1
          - text: O
      - listitem [ref=e1742]: "-"
      - listitem [ref=e1743]:
        - link "Buscar productos por letra inicial P" [ref=e1744] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/P/1
          - text: P
      - listitem [ref=e1745]: "-"
      - listitem [ref=e1746]:
        - link "Buscar productos por letra inicial Q" [ref=e1747] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/Q/1
          - text: Q
      - listitem [ref=e1748]: "-"
      - listitem [ref=e1749]:
        - link "Buscar productos por letra inicial R" [ref=e1750] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/R/1
          - text: R
      - listitem [ref=e1751]: "-"
      - listitem [ref=e1752]:
        - link "Buscar productos por letra inicial S" [ref=e1753] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/S/1
          - text: S
      - listitem [ref=e1754]: "-"
      - listitem [ref=e1755]:
        - link "Buscar productos por letra inicial T" [ref=e1756] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/T/1
          - text: T
      - listitem [ref=e1757]: "-"
      - listitem [ref=e1758]:
        - link "Buscar productos por letra inicial U" [ref=e1759] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/U/1
          - text: U
      - listitem [ref=e1760]: "-"
      - listitem [ref=e1761]:
        - link "Buscar productos por letra inicial V" [ref=e1762] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/V/1
          - text: V
      - listitem [ref=e1763]: "-"
      - listitem [ref=e1764]:
        - link "Buscar productos por letra inicial W" [ref=e1765] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/W/1
          - text: W
      - listitem [ref=e1766]: "-"
      - listitem [ref=e1767]:
        - link "Buscar productos por letra inicial X" [ref=e1768] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/X/1
          - text: X
      - listitem [ref=e1769]: "-"
      - listitem [ref=e1770]:
        - link "Buscar productos por letra inicial Y" [ref=e1771] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/Y/1
          - text: "Y"
      - listitem [ref=e1772]: "-"
      - listitem [ref=e1773]:
        - link "Buscar productos por letra inicial Z" [ref=e1774] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/glossary/Z/1
          - text: Z
  - generic:
    - heading "Más información " [level=2]:
      - button "Más información " [ref=e1775] [cursor=pointer]:
        - text: Más información
        - generic [ref=e1776]: 
  - contentinfo [ref=e1777]:
    - generic [ref=e1779]:
      - generic [ref=e1780]:
        - generic [ref=e1781]: Copyright © 1999-2026 MercadoLibre Perú S.R.L.
        - navigation [ref=e1782]:
          - list [ref=e1783]:
            - listitem [ref=e1784]:
              - link "Trabaja con nosotros" [ref=e1785] [cursor=pointer]:
                - /url: https://careers-meli.mercadolibre.com/?utm_campaign=site-mpe&utm_source=mercadolibre&utm_medium=mercadolibre
            - listitem [ref=e1786]:
              - link "Términos y condiciones" [ref=e1787] [cursor=pointer]:
                - /url: https://www.mercadolibre.com.pe/ayuda/terminos-condiciones-uso-pe_2280
            - listitem [ref=e1788]:
              - link "Promociones" [ref=e1789] [cursor=pointer]:
                - /url: https://www.mercadolibre.com.pe/l/promociones
            - listitem [ref=e1790]:
              - link "Cómo cuidamos tu privacidad" [ref=e1791] [cursor=pointer]:
                - /url: https://www.mercadolibre.com.pe/privacidad
            - listitem [ref=e1792]:
              - link "Accesibilidad" [ref=e1793] [cursor=pointer]:
                - /url: https://www.mercadolibre.com.pe/accesibilidad
            - listitem [ref=e1794]:
              - link "Ayuda" [ref=e1795] [cursor=pointer]:
                - /url: https://www.mercadolibre.com.pe/ayuda
      - paragraph [ref=e1796]: Avenida Victor Andrés Belaunde N°332 oficina 702, San Isidro, Lima, Perú.
    - link "Mercado Libre" [ref=e1797] [cursor=pointer]:
      - /url: https://hp.mercadolibre.com/?p=ML&s=MPE&d=desktop
  - region [ref=e1798]:
    - generic [ref=e1799]:
      - paragraph [ref=e1801]:
        - text: Usamos cookies para mejorar tu experiencia en Mercado Libre. Consultar más en nuestro
        - link "Centro de Privacidad." [ref=e1802] [cursor=pointer]:
          - /url: https://www.mercadolibre.com.pe/privacidad#tech-and-cookies
      - generic [ref=e1803]:
        - button "Aceptar cookies" [ref=e1804] [cursor=pointer]
        - button "Configurar cookies" [ref=e1805] [cursor=pointer]
```

# Test source

```ts
  77  |     const mensajeError = page.locator('.ui-search-rescue__title'); 
  78  |     
  79  |     // Verificación de que el mensaje de error es visible y contiene el texto esperado
  80  |     await expect(mensajeError).toBeVisible({ timeout: 10000 });
  81  |     
  82  |     // Corroboración de que el mensaje contiene el texto esperado
  83  |     await expect(mensajeError).toContainText('No encontramos resultados para tu búsqueda');
  84  |   });
  85  | 
  86  |   
  87  |   test('TC-003: Validación cruzada de Filtros de Precio', async ({ page }) => {
  88  |   // Configurar timeout de la prueba
  89  |   test.setTimeout(90000);
  90  |   
  91  |   // Navegar con timeout extendido
  92  |   await page.goto('https://www.mercadolibre.com.pe/', { 
  93  |     timeout: 60000 
  94  |   });
  95  |   
  96  |   // Realizar búsqueda
  97  |   await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).fill('celular');
  98  |   await page.keyboard.press('Enter');
  99  |   
  100 |   // Esperar resultados con timeout extendido
  101 |   await expect(page.locator('ol.ui-search-layout')).toBeVisible({ 
  102 |     timeout: 30000 
  103 |   });
  104 |   
  105 |   // Esperar filtros
  106 |   const minPrice = page.getByTestId('Minimum-price');
  107 |   await expect(minPrice).toBeVisible({ timeout: 15000 });
  108 |   
  109 |   // Llenar filtros
  110 |   await minPrice.click();
  111 |   await minPrice.clear();
  112 |   await minPrice.fill('2500');
  113 |   
  114 |   await page.getByTestId('Maximum-price').click();
  115 |   await page.getByTestId('Maximum-price').clear();
  116 |   await page.getByTestId('Maximum-price').fill('4500');
  117 |   
  118 |   // 🔥 CORREGIDO: Hacer clic en el botón ">" (flecha para aplicar)
  119 |   await page.getByTestId('ui-search-range-filter__text-submit-test').click();
  120 |   
  121 |   // Esperar a que se aplique el filtro
  122 |   await page.waitForTimeout(3000);
  123 |   
  124 |   // Verificar URL con el rango de precios
  125 |   await expect(page).toHaveURL(/.*PriceRange_2500-4500.*/, { 
  126 |     timeout: 30000 
  127 |   });
  128 |   
  129 |   // Verificar que hay resultados
  130 |   await expect(page.locator('.ui-search-result__content').first()).toBeVisible({ 
  131 |     timeout: 10000 
  132 |   });
  133 | });
  134 | 
  135 |   test('TC-004: Inyección de caracteres especiales (XSS)', async ({ page }) => {
  136 |   await page.goto('https://www.mercadolibre.com.pe/');
  137 |   
  138 |   // Caracteres especiales
  139 |   await page.locator('input[id="cb1-edit"]').fill("&%");
  140 |   await page.keyboard.press('Enter');
  141 | 
  142 |   // Validar que se muestre el mensaje de "No encontramos resultados"
  143 |   const mensajeError = page.locator('.ui-search-rescue__title'); 
  144 |   await expect(mensajeError).toBeVisible({ timeout: 10000 });
  145 |   await expect(mensajeError).toContainText('No encontramos resultados para tu búsqueda');
  146 | });
  147 |   
  148 |   test('TC-005: Procesamiento de Filtros Simultáneos', async ({ page }) => {
  149 |   await page.goto('https://www.mercadolibre.com.pe/');
  150 |   await page.locator('input[id="cb1-edit"]').fill('Audifonos Bluetooth');
  151 |   await page.keyboard.press('Enter');
  152 |   
  153 |   // Esperar que carguen los resultados
  154 |   await expect(page.locator('.ui-search-layout')).toBeVisible({ timeout: 15000 });
  155 |   
  156 |   // Aplicar filtros
  157 |   await page.getByRole('link', { name: 'Negro', exact: true }).click(); 
  158 |   await page.getByRole('link', { name: 'Es inalámbrico', description: 'Es inalámbrico' }).click();
  159 |   
  160 |   await page.waitForTimeout(2000);
  161 |   
  162 |   // Validamos las etiquetas de filtros aplicados
  163 |   const etiquetasAplicadas = page.locator('.andes-tag');
  164 |   await expect(etiquetasAplicadas).toHaveCount(2, { timeout: 15000 });
  165 | });
  166 | 
  167 |   test('TC-006: Agregar producto al carrito', async ({ page }) => {
  168 |     await page.goto('https://www.mercadolibre.com.pe/');
  169 |     await page.locator('input[id="cb1-edit"]').fill('Teclado gamer');
  170 |     await page.keyboard.press('Enter');
  171 |     await expect(page.locator('.ui-search-layout')).toBeVisible({ timeout: 15000 });
  172 | 
  173 |     // Entramos al primer producto de la lista
  174 |     await page.locator('.poly-component__title').first().click();
  175 | 
  176 |     // Agregamos al carrito
> 177 |     await page.locator('button', { hasText: 'Agregar al carrito' }).click();
      |                                                                     ^ Error: locator.click: Error: strict mode violation: locator('button').filter({ hasText: 'Agregar al carrito' }) resolved to 2 elements:
  178 | 
  179 |     // Validamos que nos mande a la ruta de carrito
  180 |     await expect(page).toHaveURL(/.*cart.*/, { timeout: 15000 });
  181 |   });
  182 | 
  183 | 
  184 |   test('TC-007: Límite superior de stock', async ({ page }) => {
  185 |   test.setTimeout(180000);
  186 |   
  187 |   console.log('🚀 Iniciando prueba de stock...');
  188 |   
  189 |   // PASO 1: Intentar login automático
  190 |   await page.goto('https://www.mercadolibre.com.pe/');
  191 |   
  192 |   // Verificar si ya está logueado
  193 |   const isLoggedIn = await page.locator('.nav-header-user').isVisible().catch(() => false);
  194 |   
  195 |   if (!isLoggedIn) {
  196 |     console.log('⚠️ No estás logueado. Intentando login automático...');
  197 |     
  198 |     try {
  199 |       // Intentar login automático
  200 |       await page.click('a:has-text("Ingresar")');
  201 |       await page.waitForSelector('input#user_id', { timeout: 10000 });
  202 |       
  203 |       const email = process.env.ML_EMAIL;
  204 |       const password = process.env.ML_PASSWORD;
  205 |       
  206 |       await page.fill('input#user_id', email);
  207 |       await page.click('button:has-text("Continuar")');
  208 |       
  209 |       await page.waitForSelector('input#password', { timeout: 10000 });
  210 |       await page.fill('input#password', password);
  211 |       await page.click('button:has-text("Ingresar")');
  212 |       
  213 |       // Esperar y verificar si hay captcha
  214 |       await page.waitForTimeout(3000);
  215 |       
  216 |       // Verificar si apareció captcha
  217 |       const hasCaptcha = await page.locator('iframe[src*="captcha"]').isVisible().catch(() => false);
  218 |       
  219 |       if (hasCaptcha) {
  220 |         console.log('🤖 Captcha detectado!');
  221 |         console.log('⏳ Por favor, resuelve el captcha manualmente en el navegador');
  222 |         console.log('⏳ Esperando 60 segundos...');
  223 |         await page.waitForTimeout(60000);
  224 |       }
  225 |       
  226 |       // Verificar login exitoso
  227 |       await expect(page.locator('.nav-header-user')).toBeVisible({ timeout: 15000 });
  228 |       console.log('✅ Login exitoso');
  229 |       
  230 |     } catch (error) {
  231 |       console.log('❌ Error en login automático');
  232 |       console.log('🔑 Por favor, inicia sesión manualmente');
  233 |       console.log('⏳ Esperando 60 segundos...');
  234 |       await page.waitForTimeout(60000);
  235 |     }
  236 |   } else {
  237 |     console.log('✅ Ya estás logueado');
  238 |   }
  239 |   
  240 |   // PASO 2: Buscar producto
  241 |   console.log('🔍 Buscando "Mouse inalambrico"...');
  242 |   await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).fill('Mouse inalambrico');
  243 |   await page.keyboard.press('Enter');
  244 |   
  245 |   // Esperar resultados
  246 |   await expect(page.locator('ol.ui-search-layout')).toBeVisible({ timeout: 15000 });
  247 |   console.log('✅ Resultados de búsqueda cargados');
  248 |   
  249 |   // PASO 3: Entrar al primer producto
  250 |   console.log('📦 Entrando al primer producto...');
  251 |   await page.locator('.poly-component__title').first().click();
  252 |   
  253 |   // Esperar que cargue la página del producto
  254 |   await page.waitForSelector('.ui-pdp-buybox', { timeout: 15000 });
  255 |   console.log('✅ Página del producto cargada');
  256 |   
  257 |   // PASO 4: Desplegar menú de cantidad
  258 |   console.log('🔄 Desplegando menú de cantidad...');
  259 |   const dropdown = page.locator('.ui-pdp-buybox__quantity__dropdown');
  260 |   await dropdown.scrollIntoViewIfNeeded();
  261 |   await dropdown.click();
  262 |   
  263 |   // PASO 5: Seleccionar "Más de..."
  264 |   console.log('🔢 Seleccionando "Más de..."...');
  265 |   try {
  266 |     await page.getByRole('option', { name: /Más de/ }).click();
  267 |   } catch {
  268 |     // Alternativa: buscar por texto exacto
  269 |     await page.locator('li:has-text("Más de")').click();
  270 |   }
  271 |   
  272 |   // PASO 6: Ingresar cantidad absurda
  273 |   console.log('✏️ Ingresando cantidad 9999...');
  274 |   const quantityInput = page.locator('input[type="number"]');
  275 |   await quantityInput.waitFor({ state: 'visible', timeout: 5000 });
  276 |   await quantityInput.click({ clickCount: 3 }); // Seleccionar todo
  277 |   await quantityInput.fill('9999');
```