import { Logo } from "@/components/shared/logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen overflow-hidden relative">
      {/* Fondo de pantalla completo */}
      <div className="absolute inset-0 bg-black">
        <div className="bg-[url('/images/login-bg.jpg')] h-full w-full opacity-40 bg-no-repeat bg-cover"></div>
      </div>
      {/* Contenedor principal */}
      <div className="relative z-10 h-full">
        {/* Logo en la esquina superior izquierda */}
        <div className="absolute top-5 left-5">
          <Logo />
        </div>
        {/* Contenedor del formulario centrado */}
        <div className="flex items-center justify-center h-full">
          <div className="bg-black/70 px-8 py-10 rounded-lg max-w-md w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
