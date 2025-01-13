import { z } from "zod"

export const formSchema = z.object({
  email: z.string().min(2, {
    message: "El correo electrónico es demasiado corto.",
  }),
  password: z.string().min(2, {
    message: "La contraseña es demasiado corta.",
  }),
})