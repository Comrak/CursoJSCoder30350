import * as clases  from "./clases.js"

export const usuarios = [
    new clases.User(1,'Jose','12345678'),
    new clases.User(2,'Sofia','asdasd12'),
    new clases.User(3,'Dalia','zxc123'),
    new clases.User(4,'Ramiro','rftest'),
    new clases.User(5,'Ana','testpass')
]

export const pacientes = [
    new clases.Animal('pipa','felino',5,usuarios[0])
]

