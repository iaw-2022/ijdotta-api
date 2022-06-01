# Clinic App Web Service

## Tecnologías
* Typescript
* Express
* Prisma ORM

## Estructura del proyecto
Descripción de la estructura, directorios y principales archivos del proyecto.

### Raíz del proyecto
Directorios:
* **build**: contiene todos los archivos necesarios para la ejecución, como el código JavaScript compilado y archivos de Swagger.
* **prisma**: contiene los modelos y la conexión del ORM con la base de datos.
* **src**: contiene todo el código fuente de la aplicación en TypeScript.

### src
Directorios:
* **api**: contiene toda la configuración de la api, rutas, documentación, seguridad.
* **constants**: contiene constantes utilizadas en el resto de la aplicación.
* **controller**: contiene los controladores para cada ruta.
* **erros**: contiene utilidades para el manejo de errores.
* **model**: contiene toda la lógica para abstraer el acceso a la base de datos.
* **types**: contiene la definición de tipos requeridos por TypeScript.

Archivos:
* **index.ts**: punto de entrada a la app. Crea la app express y configura los puertos.
* **patch.js**: parche necesario para convertir los un BigInt a JSON.

### api
Directorios:
* **handlers**: cada handler agrupa funciones para cada endpoint. Las responsabilidad es recuperar los datos del request, validarlos y llamar al controlador adecuado. Permite abstraer al controlador de la tecnología usada (Express).
* **swagger**: contiene la documentación en Swagger UI.

Archivos:
* **index.ts**: establece las opciones de seguridad, rutas, documentación y manejo de errores de la api.
* **routes.ts**: define los endpoints con handlers específicos.
* **security.ts**: exporta aspectos de seguridad usados en la api.
* **utils.ts**: unifica el envío de las respuestas del servidor.

### errors
* **codes.ts**: códigos de error.
* **index.ts**: provee una clase CodedError que extiende a Error. Permite representar más información.

## Funcionalidad provista por los endpoints
Los endpoints permiten:
- Consultar, reservar y cancelar turnos,
- Crear, vincular y consultar el prefil de un paciente.

### Consultar turnos
**GET /appointments** - Recuperar los turnos disponibles, pudiendo aplicar filtros: fecha, médico.

### Consultar médicos
**GET /doctors** - Recuperar una lista de médicos (permite luego hacer una consulta de turnos filtrando con su id).

### Reservar un turno
**PUT /appointments/:id** - Reserva el turno. En el body debe especificarse el id del paciente. La ruta no está protegida para permitir reservar turnos sin estar registrado.

### Cancelar un turno
**DELETE /patients/:id/appointments/:appointment_id** - Cancela el turno asociado a ese paciente. La ruta verifica la identidad del paciente, por lo que primero debe haberse registrado.

### Crear perfil de paciente
**POST /patients** - Cuando un paciente reserva un turno por primera vez debería crearse un perfil, si aún no existe, para que el turno quede vinculado. Sin embargo, para poder acceder al perfil es necesario que se cree una cuenta con el mismo email, antes o después de haberse creado el perfil.

#### Posible riesgo de seguridad
Cuando un paciente que no creó una cuenta de usuario en el sistema reserva un turno por primera vez, su email queda asociado al perfil de paciente.
Si una persona no autorizada crea un perfil de usuario usando el mismo email, entonces esa persona podría acceder a su información personal.
Una posible solución es requerir que se verifique el email.

### Vincular perfil de paciente
**PUT /patients/:id/link-profile** - Vincula el perfil de paciente a la cuenta de usuario (email) que hace el request. Esto es necesario cuando el médico creó el perfil del paciente antes de que este hubiera usado la antes la app. Como el perfil ya existe, en lugar de crear uno nuevo, tiene la posibilidad de vincularse al ya existente, utilizando el código de vinculación provisto por el médico.

### Consultar perfil de paciente
**GET /patients/:id** - Recupera la información personal de paciente. La ruta está protegida: el email de la cuenta de usuario debe coincidir con el email del paciente.

### Consultar tratamientos del paciente
**GET /patients/:id/treatments** - Recupera una lista de tratamientos del paciente. La ruta está protegida: el email de la cuenta de usuario debe coincidir con el email del paciente.

### Consultar turnos del paciente
**GET /patients/:id/treatments** - Recupera una lista de turnos del paciente. La ruta está protegida: el email de la cuenta de usuario debe coincidir con el email del paciente.
