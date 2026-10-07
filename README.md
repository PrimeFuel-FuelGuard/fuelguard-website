# FuelGuard — Landing Page & Platform Showcase

**FuelGuard** es una plataforma SaaS B2B diseñada para digitalizar y automatizar el ciclo logístico de distribución de combustible entre empresas transportistas con flotas de unidades cisterna y compradores corporativos (estaciones de servicio, contratistas mineros, obras de construcción y faenas agrícolas) mediante **telemetría IoT en tanques de almacenamiento**.

Este proyecto representa la landing page interactiva y la especificación de producto desarrollada para el curso **1ASI0657 Fundamentos de Arquitectura de Software (202620, NRC: 9206)** de la **Universidad Peruana de Ciencias Aplicadas (UPC)**, bajo la cátedra del **Profesor Jorge Luis Delgado Vite**.

---

## 👥 Equipo de Desarrollo (Startup Team)

| Alumno | Código UPC | Especialidad & Rol |
| :--- | :--- | :--- |
| **Diego Roberto Campoblanco Guzman** | `u202414313` | Backend, Arquitectura C4 & Simulación de Redes IoT |
| **Alan Jaivi Mamani Vilca** | `u20241e299` | Machine Learning, Modelado de Datos, REST APIs & User Personas |
| **Katherine Maryory Mejia Aliaga** | `u20221a118` | Sensores IoT, Metodología Lean UX & Desarrollo Frontend |
| **Juan Carlos Pastor Napa** | `u202217288` | Cloud, Infraestructura en Servidores & Sincronización Backend |
| **Tomás Alessandro Paredes Diaz** | `u202416552` | Fullstack, Contenedores & Procesamiento de Telemetría IoT |
| **Victor Manuel García Paredes** | `u202012001` | Desarrollo POO, Calidad de Software, Especificación BDD & Backlog |

---

## 🚀 Sobre FuelGuard

### Misión
Digitalizar la operación de distribución de combustible de las empresas transportistas mediante una plataforma que conecte el monitoreo IoT del nivel de tanque de sus compradores asociados con la generación automática de pedidos, la asignación validada de conductor y cisterna, y el seguimiento en tiempo real de cada entrega, erradicando procesos manuales y asegurando trazabilidad punta a punta.

### Visión
Consolidarnos como la plataforma de referencia para distribuidores logísticos de combustible en el Perú y Latinoamérica, anticipando la demanda mediante telemetría continua y automatizando cada etapa del ciclo de abastecimiento.

### Valores
- **Innovación:** Adopción continua de tecnologías IoT emergentes y arquitecturas de software modernas.
- **Confiabilidad:** Disponibilidad del 99.9% y lecturas exactas para que las empresas confíen plenamente en la reposición automática.
- **Eficiencia:** Reducción de hasta un 40% en tiempos de gestión y despacho operativo.
- **Calidad:** Cumplimiento riguroso de normativas de seguridad de transporte de hidrocarburos (**OSINERGMIN**).

---

## 🎯 Problemática y Propuesta de Valor

### El Problema Tradicional
1. **Mediciones manuales con vara:** Las estaciones miden tanques con varilla física, propiciando errores humanos, mermas por evaporación y demoras de 2 a 3 horas por pedido.
2. **Pedidos de emergencia (35% – 45%):** Las solicitudes ingresan de último minuto por llamadas y WhatsApp, rompiendo rutas planificadas de despacho y disparando costos de flete.
3. **Asignación empírica de flota:** Se asignan cisternas y conductores sin verificar disponibilidad y capacidad exacta de compartimentos en tiempo real.
4. **Falta de trazabilidad en ruta:** Falta de certeza sobre el estado de entrega y riesgo de descargas indebidas fuera de destino.

### La Solución FuelGuard
- **Sensor IoT 24/7:** Monitoreo hidrostático y ultrasónico de nivel de combustible y espacio disponible (ullage).
- **Auto-Order por Umbral Crítico:** Generación automática de solicitud con producto, volumen y fecha requerida antes de agotar stock.
- **Matching Inteligente de Cisterna:** Algoritmo que valida capacidad vs volumen solicitado (0% errores de asignación de capacidad).
- **Geocercas y Bloqueo de Válvulas:** La descarga solo se autoriza electrónicamente dentro de las coordenadas de la estación cliente.
- **Expediente Digital de Entrega:** Acta certificada de entrega con lecturas inicial y final, tiempo de descarga y firmas para auditoría contable y fiscalización de OSINERGMIN.

---

## 🌐 Secciones de la Landing Page

La landing page está construida como una experiencia web inmersiva de alto impacto, interactiva y bilingüe:

1. **Hero Section (`#home`):** Propuesta de valor central de FuelGuard, navegación Liquid Glass, selector de idioma (EN/ES), toggle de audio ambiental y llamada a la acción principal.
2. **About Intro Section (`#about-intro`):** Marquee infinito con palabras clave del sector de hidrocarburos y transición por scroll.
3. **Problem Cards Section (`#features`):** Tarjetas acordeón interactivas que detallan los 3 dolores críticos: Medición Manual, Pedidos de Urgencia y Asignación sin Validación.
4. **Problem & Solution Panel (`#solution`):** Video expandible por scroll y carrusel deslizable con las 6 capacidades clave de la solución FuelGuard.
5. **Expected Outcomes Panel (`#expected-outcomes`):** Métricas de impacto cuantificables (-40% tiempo, 0% errores de capacidad, 80%+ auto-pedidos, 100% trazabilidad) y recomendación operativa.
6. **Feature Product Section:** Presentación del producto "Tu tanque alerta, tu flota responde", video interactivo con controles personalizados y showcase de la arquitectura.
7. **Role Benefits Section (`#growers` & `#specialists`):** Flujos de usuario interactivos paso a paso para **Distribuidores Logísticos** y **Estaciones de Servicio / Clientes Industriales**.
8. **Pricing Plans Section (`#pricing`):** Comparativa interactiva con conmutador mensual/anual entre el **Plan Base Digital (S/. 199/mes)** y el **Plan IoT Corporativo (S/. 599/mes)**.
9. **Referrals & Partner Network Section (`#referrals`):** Red de aliados estratégicos y beneficios para distribuidores y redes de estaciones asociadas.
10. **About Mission & Team Section (`#about`):** Misión corporativa, slider interactivo con los 6 integrantes del equipo de ingeniería de la UPC y sección de estándares (C4 Model, DDD, BDD, OSINERGMIN, SAP).
11. **Testimonials Section (`#testimonials`):** Citas y testimonios reales de administradores de estaciones y gerentes de logística extraídos de las entrevistas de campo (Marco Salazar, Patricia Valdivia, Carlos Campoblanco, Sebastián Rojas, Carlos Miranda).
12. **Interactive Contact Form (`#contact`):** Formulario B2B con validación de campos obligatorios, selección de segmento (Distribuidor / Estación de Servicio / Industrial) y confirmación visual inmediata.
13. **Footer Section:** Enlaces principales, suscripción a newsletter, física de insignias con **Matter.js** y modal con Términos de Servicio y Política de Privacidad de FuelGuard.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica accesible con atributos ARIA y etiquetas descriptivas.
- **CSS3 Vanilla & Modern Features:** Variables CSS, diseño responsivo clamp(), flexbox, grid, glassmorphism (`.liquid-glass`) y micro-animaciones fluidas.
- **JavaScript (ES Modules):** Arquitectura modular, gestión reactiva de eventos y componentes desacoplados.
- **Matter.js:** Motor de simulación física 2D para insignias interactivas en el pie de página.
- **Sistema i18n Nativo:** Soporte dinámico para cambio de idioma en tiempo real (**Español** e **Inglés**) mediante archivos JSON estructurados (`es.json`, `en.json`).
