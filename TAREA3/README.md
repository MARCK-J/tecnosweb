## Requisitos

- Node.js 10 o superior
- PostgreSQL 9.6 o superior

## Instalación

1. Clona este repositorio en tu máquina local.
2. Crea una base de datos en PostgreSQL.
3. Importa el archivo `database.sql` en la base de datos creada en el paso anterior.
4. Copia el archivo `.env.example` y renómbralo a `.env`.
5. Edita el archivo `.env` y actualiza los valores de las variables `DB_USER`, `DB_PASSWORD` y `DB_NAME` con los valores correspondientes para tu entorno.
6. Abre un terminal en la carpeta raíz del proyecto y ejecuta el siguiente comando para instalar las dependencias:

```
npm install
```

7. Ejecuta el siguiente comando para iniciar el servidor:

```
npm start
```

8. Abre un navegador web y navega a la URL `http://localhost:3000`.

## Uso

Este proyecto es una API RESTful que permite realizar las siguientes operaciones sobre una tabla de actores en una base de datos PostgreSQL:

- Obtener todos los actores
- Obtener un actor por ID
- Crear un nuevo actor
- Actualizar un actor por ID
- Eliminar un actor por ID

Para usar la API, sigue los siguientes pasos:

1. Abre un navegador web y navega a la URL `http://localhost:3000`.
2. Usa una herramienta como Postman para realizar las operaciones CRUD sobre la tabla de actores.

## Contribuciones

Este proyecto no acepta contribuciones en este momento.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.