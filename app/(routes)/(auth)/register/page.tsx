import Link from "next/link";
import {RegisterForm} from "./registerForm/registerForm";
import { Terms } from "../components/terms";


export default function RegisterPage() {
  return (
    <div>
      <p className="text-3xl font-bold text-center mb-7">Registro de usuario</p>
      <RegisterForm />
      <div className="mt-4 flex gap-1">
        <p className="text-white opacity-70">¿Ya tienes cuenta?</p>
        <Link href="/login" className="opacity-1 text-white font-bold">
          Iniciar sesión
        </Link>
      </div>
      <Terms />
    </div>
  );
}
