import { Pipe, PipeTransform } from "@angular/core";

type TogglePipeArg = '' | 'u' | 'l' | 't' | undefined;

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, arg?: TogglePipeArg): string {
    // Si no se proporciona un argumento, devuelve la cadena original
    if (arg === undefined || arg === null || arg === '') {
      return value;
    }

    if (!value) return value; // Maneja el caso de cadenas vacías o nulas

    // Cambia el caso de la cadena según el argumento
    switch (arg) {
      case 'u':
        return value.toUpperCase(); // Convierte la cadena a mayúsculas
      case 'l':
        return value.toLowerCase(); // Convierte la cadena a minúsculas
      case 't':
        // Aplica formato title case (primera letra de cada palabra en mayúsculas)
        return value.split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
      default:
        throw new Error(`Argumento inesperado para el pipe toggleCase: ${arg}. Solo se permiten 'u', 'l' o 't'.`);
    }
  }
}
