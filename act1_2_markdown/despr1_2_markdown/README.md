# Proyecto de Plataforma Educativa - despr1_2_markdown

**Autor:** Pablo Otero  
**Fecha:** Octubre 2025  
**Versión:** 1.0

## Objetivo del proyecto
Este proyecto tiene como objetivo documentar los principales módulos de una plataforma educativa en línea.  
Incluye información sobre autenticación de usuarios, panel de control y configuración del sistema.

---

## Arquitectura general
```mermaid
graph TD
    A[Cliente Web] --> B[Load Balancer]
    B --> C[Servidor App 1]
    B --> D[Servidor App 2]
    C --> E[Base de Datos]
    D --> E
    E --> F[Sistema de Backups]
    G[App Móvil] --> B
    H[API Externa] --> I[Microservicio Auth]
    I --> E

