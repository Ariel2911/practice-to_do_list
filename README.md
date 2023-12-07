# API RESTful construida con NestJs, Typescript, MongoDB, Mongoose y Docker

Proyecto en construcción.

## Descripción

Este proyecto tiene como objetivo principal proporcionar una API RESTful que funcione como servidor, permitiendo que las aplicaciones cliente interactúen con una lista de tareas almacenadas en una base de datos.
| Las funcionalidades disponibles para el cliente incluyen:
$ Las funcionalidades disponibles para el cliente incluyen:
~ Las funcionalidades disponibles para el cliente incluyen:

- **Solicitar una Lista de Tareas:** Recupera la lista completa de tareas almacenadas.
- **Solicitar una Tarea Específica:** Obtiene detalles sobre una tarea específica según su id.
- **Crear una Nueva Tarea:** Añade una nueva tarea a la lista.
- **Actualizar una Tarea Existente:** Modifica el estado o detalles de una tarea existente.
- **Borrar una Tarea Existente:** Elimina una tarea específica de la lista.

Estas operaciones proporcionan una interfaz completa para la gestión dinámica de tareas a través de aplicaciones cliente conectadas a esta API RESTful.

## Requisitos Previos

Debes tener instalado Node.js, npm y docker.

## Instalación

1. Clonar el proyecto.
2. Ir a la carpeta del proyecto.
3. Instalar las dependencias.

```bash
$ npm install
```

## Ejecución

Montar el contenedor con la base de datos.

```bash
$ sudo docker-compose up
```

Opciones para correr el servidor.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Punto de acceso

http://localhost:3000

## Uso

Este servidor se comunicará a travez de datos en formato JSON

### Obtener todas las tasks

```http
  GET /tacks
```

Respuesta:

| Status | Type                                                                         | Description              |
| :----- | :--------------------------------------------------------------------------- | :----------------------- |
| `200`  | `[{"_id": string, "title": string, "description": string, "done": boolean}]` | Resultado de la busqueda |

### Obtener una task

```http
  GET /tacks/${id}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **Required**. Id de la tarea a buscar |

Respuesta:

| Status | Type                                                                       | Description              |
| :----- | :------------------------------------------------------------------------- | :----------------------- |
| `200`  | `{"_id": string, "title": string, "description": string, "done": boolean}` | Resultado de la busqueda |

### Crear una task

```http
  POST /tacks
```

| Body          | Type      | Description                                  |
| :------------ | :-------- | :------------------------------------------- |
| `title`       | `string`  | **Required**. Valor que se almacena en la DB |
| `description` | `string`  | **Required**. Valor que se almacena en la DB |
| `done`        | `boolean` | **Required**. Valor que se almacena en la DB |

Respuesta:

| Status | Type                                                                       | Description    |
| :----- | :------------------------------------------------------------------------- | :------------- |
| `201`  | `{"_id": string, "title": string, "description": string, "done": boolean}` | Tarea agregada |

### Modificar una task

```http
  PUT /tacks/${id}
```

| Parameter | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| `id`      | `string` | **Required**. Id de la tarea a actualizar |

| Body          | Type      | Description                                  |
| :------------ | :-------- | :------------------------------------------- |
| `title`       | `string`  | **Required**. Valor que se almacena en la DB |
| `description` | `string`  | **Required**. Valor que se almacena en la DB |
| `done`        | `boolean` | **Required**. Valor que se almacena en la DB |

Respuesta:

| Status | Type                                                                       | Description      |
| :----- | :------------------------------------------------------------------------- | :--------------- |
| `200`  | `{"_id": string, "title": string, "description": string, "done": boolean}` | Tarea modificada |

### Eliminar una task

```http
  DELETE /tacks/${id}
```

| Parameter | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `id`      | `string` | **Required**. Id de la tarea a eliminar |

Respuesta:

| Status | Type                                                                       | Description     |
| :----- | :------------------------------------------------------------------------- | :-------------- |
| `200`  | `{"_id": string, "title": string, "description": string, "done": boolean}` | Tarea eliminada |

## Base de Datos:

Es una base de datos no relacional que se encuentra dentro del contenedor (MongoDB).

## Licencia:

[ISC](https://spdx.org/licenses/ISC.html)

## Contacto:

Email: ariel29111978@hotmail.com
