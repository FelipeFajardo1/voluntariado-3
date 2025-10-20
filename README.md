🌍 Voluntariado App

Una plataforma web que conecta voluntarios con organizaciones y proyectos sociales en busca de ayuda.
Permite a los usuarios registrarse, descubrir oportunidades de voluntariado y participar activamente en su comunidad.

🚀 Características principales

👤 Registro y autenticación de usuarios (voluntarios y organizaciones).

📅 Gestión de eventos: creación, edición y participación en actividades de voluntariado.

🏷️ Filtrado y búsqueda por categoría, ubicación y fecha.

💬 Comunicación interna entre voluntarios y coordinadores.

📊 Panel de administración para gestionar usuarios, eventos y reportes.

📱 Diseño responsive para adaptarse a dispositivos móviles y escritorio.

🧩 Tecnologías utilizadas
Tipo	Tecnología
Frontend	React + Tailwind CSS
Backend	Node.js (NestJS / Express)
Base de datos	MySQL / PostgreSQL
Autenticación	JWT + Bcrypt
Despliegue	Docker / Vercel / Render
Control de versiones	Git & GitHub
⚙️ Instalación y configuración
1️⃣ Clonar el repositorio
git clone https://github.com/tuusuario/voluntariado-app.git
cd voluntariado-app

2️⃣ Instalar dependencias
Backend
cd backend
npm install

Frontend
cd frontend
npm install

3️⃣ Configurar variables de entorno

Crea un archivo .env en la carpeta del backend con los siguientes valores:

PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=voluntariado_db
JWT_SECRET=clave_secreta

4️⃣ Ejecutar la aplicación
Backend:
npm run start:dev

Frontend:
npm run dev


Luego abre http://localhost:5173
 en tu navegador.

🧪 Scripts útiles
Comando	Descripción
npm run start:dev	Inicia el servidor en modo desarrollo
npm run build	Compila la aplicación para producción
npm run test	Ejecuta las pruebas unitarias
npm run lint	Verifica errores de estilo y formato
📸 Capturas de pantalla

(Agrega aquí imágenes o gifs de la app en acción, por ejemplo:)




🤝 Contribución

¡Las contribuciones son bienvenidas! ❤️
Sigue estos pasos para colaborar:

Haz un fork del proyecto

Crea una nueva rama:

git checkout -b feature/nueva-funcionalidad


Realiza tus cambios y haz commit

Envía un pull request describiendo tu mejora

🛠️ Equipo de desarrollo
Nombre	Rol	GitHub
Felipe Fajardo	Fullstack Developer	@felifajardo

José Pantoja	Product Owner	@usuario

Daniel López	QA Tester	@usuario
📄 Licencia

Este proyecto está bajo la licencia MIT.
Consulta el archivo LICENSE
 para más información.

🌱 Objetivo del proyecto

Promover el voluntariado y la acción social mediante la tecnología, conectando personas con iniciativas que generen impacto positivo en sus comunidades.