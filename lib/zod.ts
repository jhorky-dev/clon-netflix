import { object, string } from "zod";

export const signInSchema = object({
  email: string({required_error: "El correo electrónico es requerido"}).min(2, "El correo electrónico es requerido").email("Correo electrónico inválido"),
  password: string({required_error: "Contraseña es requerida"}).min(1, "Contraseña es requerida"),
});