# Proyecto de Base de Datos con Docker y PostgreSQL

Este proyecto utiliza Docker para configurar y ejecutar un contenedor con una base de datos PostgreSQL. A continuación, se detallan los pasos para crear, ejecutar, validar y finalizar el contenedor, así como para conectarse al servidor de base de datos.

## Configuración y Ejecución del Contenedor

Para crear y ejecutar el contenedor en Docker con la base de datos PostgreSQL, ejecuta el siguiente comando:

```sh
docker compose up -d postgres
```

La parte de `postgres` en el comando es la referencia al nombre del servicio definido en el archivo `docker-compose.yml`.

## Validación del Contenedor

Para validar que el contenedor se está ejecutando correctamente, utiliza el siguiente comando:

```sh
docker compose ps
```

Este comando mostrará el estado de los servicios definidos en el archivo `docker-compose.yml`.

## Finalización del Contenedor

Si necesitas finalizar la ejecución del contenedor, utiliza el siguiente comando:

```sh
docker compose down
```

Este comando detendrá y eliminará los contenedores, redes y volúmenes creados por `docker compose up`.

## Conexión al Servidor de Base de Datos

Para conectarte al servidor de base de datos que se está ejecutando en el contenedor de Docker, utiliza el siguiente comando:

```sh
docker compose exec postgres bash
```

Este comando abrirá una terminal dentro del contenedor `postgres`, permitiéndote interactuar con el servidor de base de datos PostgreSQL.

// ...existing code...
