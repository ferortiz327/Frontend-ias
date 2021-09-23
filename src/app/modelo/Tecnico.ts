import { Servicio } from "./servicio";

export class Tecnico{
    id ?: number;
    nombre ?: string;
    apellido ?: string;
    telefono ?: string;
    email ?: string;
    servicio : Servicio[] = [];
}