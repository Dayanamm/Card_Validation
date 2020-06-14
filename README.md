# Card_Validation 💳

Aplicativo web que permita validar una tarjeta de crédito en la compra de boletos o tickets para un cinema.


![image](https://user-images.githubusercontent.com/63815530/84583023-65669c80-adb9-11ea-9ba5-cdd847004ad0.png)


## UX 

**USUARIO:**    Cinemax 🍿

**1. REQUISITOS:** 

- [ ] Para finalizar el proceso de compra queremos conocer si la tarjeta crédito de nuestros clientes es válida o inválida. 🛒****

El usuario debe ingresar:

- [ ] Número de tarjeta. 📆 
- [ ] Nombre(s) y Apellido(s).  📝 

**2. RESOLUCIÓN DE NECESIDADES:**

- [ ] Se informa al cliente que los datos están protegidos bajo el tratamiento de datos personales.⚖
- [ ] Mediante una imagen guía de una tarjeta de crédito se indica al usuario los datos que debe ingresar. 👁
- [ ] Se crea un input para ingresar el número de identificación de la tarjeta con un placeholder que muestra como ejemplo el número de la imagen guía. Además tiene restricciones que prohiben al usuario ingresar letras o más de 16 números. ✏
- [ ] Se crea un input para ingresar nombre(s) y apellido(s). 👨🏻👩🏻
- [ ] Se crea un input "Validar tarjeta de crédito", nos informa si la tarjeta es válida para poder finalizar la compra. De lo contrario debe corregir los datos.
✒
- [ ] Los datos de la tarjeta se ocultan para mayor seguridad.

**3. SKETCH:**
![WhatsApp_Image_2020-06-01_at_10 37 56_AM](https://user-images.githubusercontent.com/63815530/84583146-191c5c00-adbb-11ea-9404-3aa091585ac7.jpeg)

**4. FEEDBACK:**

- [ ] Cambiar botón continuar por siguiente. 📌
- [ ] Agregar una ventana en la parte inferior para indicar si la tarjeta es válida o inválida.🚦

**5.  PROTOTIPO FINAL:**
![2020-06-01_(5)](https://user-images.githubusercontent.com/63815530/84583166-51239f00-adbb-11ea-99c8-56fcbf958fd2.png)

## METODOLOGÍAS AGILES (SCRUM)

- [ ] Sprint: (2) semanales. 📂
- [ ] Daily: 15 minutos. 🕑
- [ ] Tablero SCRUM: www.notion.so/76888457835d4262964afb4ffed0ae79 📚

Me gusto el uso de las metodologías ágiles como un mapa muy provechoso que nos permite movernos en una dirección mediante una ruta trazada, es decir, la organización de nuestro proyecto. 🗺

## HTML Y CSS 🦴

El avance en está área fue bastante positivo, pues comprendí mejor el uso de selectores, la semantica de HTML y el diseño mediante CSS. 

## JAVASCRIPT 🔧

Se crearon dos funciones que permitieran darle fuuncionalidad a la validación de la tarjeta:

- [ ] **Función para validar: 📌**

  -  Declarar función para validar tarjeta.
  -  Ingresar un N° de tarjeta de 16 dígitos.
  -  Ingresar únicamente números.
  -  Generar un array para almacenar los datos.
  -  Separar los datos en posiciones pares e impares.
  -  Convertir los datos en valores enteros.
  -  Sumar valores de las posiciones pares e impares.
  -  La suma total de valores debe ser un módulo de 10.
  -  Indicar que la **tarjeta es válida** Si la suma es un modulo de 10.

- [ ] Función para enmascarar: 📌

  -  Declarar función para enmascarar.
  -  Separar los últimos 4 digitos.
  -  Enmascarar mediante el carácter * los primeros 12 números.
  -  Imprimir *** + los 4 últimos digitos. 
  
 **No logre hacer una modularización del código JavaScript.**
  
 ## TESTEO 🧮
 
 **No comprendí las pruebas unitarias y su funcionalidad.**
 
 ## GIT - GITHUB 🕹
 - [ ]  Comandos de git (`add` | `commit` | `pull` | `status` | `push`).
 - [ ]  Manejo de repositorios de GitHub (`clone` | `fork` | `gh-pages`).
 
