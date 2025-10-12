
## `instalacion.md`

# Guía de Instalación y Puesta en Marcha
##  Requisitos previos

```markdown
- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **Base de datos MySQL o PostgreSQL**
- **Git** instalado en el sistema

---

## 🚀 Pasos de instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tuusuario/despr1_2_markdown.git
   cd despr1_2_markdown

2. **Instalar dependencias

    ```bash
    npm install

3. **Configurar variables de entorno

    Crear un archivo .env en la raíz del proyecto:

    ```bash
    DATABASE_URL="mysql://usuario:contraseña@localhost:3306/plataforma"
    JWT_SECRET="clave_super_secreta"
    PORT=3000

4. **Ejecutar migraciones de base de datos

    ```bash
    npm run migrate

5. **Iniciar el servidor

    ```bash
    npm start