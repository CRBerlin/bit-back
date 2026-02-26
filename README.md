Este es el repositorio para crear el proyecto de bit con nodejs

Para hacer pruebas con Postman:

Crear usuario ->

localhost:3000/usuarios

{
    "name": "Carlos Roberto",
    "email":"crdq17@hotmail.com",
    "password":"1234",
    "role":"usuario",
    "plan":"basico",
    "planStatus":"activo",
    "trainerId":"1",
    "currentSessionIndex":"",
    "streakCount":"",
    "lasCompletedDate":""
}

Leer Usuarios ->

localhost:3000/usuarios

Leer un Usuario ->

localhost:3000/usuarios/2

Acutaliza Usuario ->

localhost:3000/usuarios/1

{
    "name": "CarlosR.",
    "email":"crdq17@hotmail.com",
    "password":"1234",
    "role":"usuario",
    "plan":"basico",
    "planStatus":"activo",
    "trainerId":"1",
    "currentSessionIndex":"",
    "streakCount":"",
    "lasCompletedDate":""
}

Borrar Usuarios ->

localhost:3000/usuarios/1
