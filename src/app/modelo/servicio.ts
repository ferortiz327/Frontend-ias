import { Tecnico } from "./Tecnico";

export class Servicio {
    id ?: number;
    descripcion ?: string;
    fechaInicio ?: string;
    fechaFinal ?: string;
    tecnico ?: Tecnico;
}
