
---

##  `modulos/login.md`

```markdown
# Módulo de Autenticación (Login)

El módulo de **autenticación** permite verificar la identidad de los usuarios mediante credenciales seguras (email/usuario y contraseña).

---

##  Flujo de autenticación
```mermaid
sequenceDiagram
    participant U as Usuario
    participant F as Frontend
    participant A as API Auth
    participant D as Database
    participant R as Redis
    
    U->>F: Introduce credenciales
    F->>A: POST /auth/login
    A->>D: Verificar usuario
    D-->>A: Datos usuario
    A->>R: Almacenar sesión
    A-->>F: JWT Token + User Info
    F-->>U: Redireccionar a dashboard
    
    Note over U,R: Usuario autenticado
    
    U->>F: Acceso a recurso protegido
    F->>A: GET /api/resource (Bearer Token)
    A->>R: Verificar sesión
    R-->>A: Sesión válida
    A-->>F: Recurso autorizado
    F-->>U: Mostrar contenido