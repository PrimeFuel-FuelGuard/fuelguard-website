import { i18n } from '../i18n.js';

const FOOTER_BADGE_TEXTURE = './assets/logos/viora-isotipo-white.png';

const LEGAL_COPY = {
    en: {
        terms: {
            title: 'Terms of Service',
            updated: 'Last updated: October 2026',
            intro: [
                'Welcome to FuelGuard, a B2B IoT platform for fuel distributors and service station operators. By accessing our landing page, portal, or related logistics services, you agree to these Terms of Service.',
            ],
            sections: [
                {
                    title: '1. Platform Scope & Purpose',
                    paragraphs: [
                        'FuelGuard provides software and IoT telemetry tools for monitoring stationary fuel storage tanks, generating automated purchase requests by safety threshold, managing tanker fleet allocations, and recording digital delivery receipts.',
                        'The user agrees to operate the platform responsibly, supplying accurate fleet, driver, tank capacity, and regulatory information.',
                    ],
                },
                {
                    title: '2. Registration and Profiles',
                    paragraphs: [
                        'Access requires registration under verified corporate credentials as a Fuel Logistics Distributor or Service Station/Industrial Buyer. Each entity is responsible for safeguarding access credentials.',
                        'The user is accountable for all actions performed through authorized user accounts within their company profile.',
                    ],
                },
                {
                    title: '3. IoT Telemetry and Inventory Data',
                    paragraphs: [
                        'Level sensor readings, available volume (ullage), and automatic replenishment triggers provide operational decision support and automation.',
                        'The distributor and buyer remain responsible for physical site safety, hazardous materials protocols, and compliance with national fuel transport regulations (OSINERGMIN).',
                    ],
                },
                {
                    title: '4. Fleet Allocation & Discharge Authorization',
                    paragraphs: [
                        'FuelGuard assists in matching orders with qualified tankers and commercial drivers based on available compartment capacity and schedule.',
                        'Electronic discharge valve unlocking is tied to verified geofences and authorized driver confirmations to prevent unauthorized unloading.',
                    ],
                },
                {
                    title: '5. Regulatory Compliance',
                    paragraphs: [
                        'All operations managed via FuelGuard must adhere to applicable hydrocarbon transport and environmental safety standards, including emergency response readiness and verified carrier credentials.',
                    ],
                },
                {
                    title: '6. Service Availability',
                    paragraphs: [
                        'FuelGuard strives for 99.9% uptime. Temporary interruptions for scheduled maintenance, satellite telemetry sync, or third-party telecommunication delays will be communicated in advance whenever feasible.',
                    ],
                },
                {
                    title: '7. Intellectual Property',
                    paragraphs: [
                        'All software architecture, algorithms, user interfaces, branding, and proprietary assets of FuelGuard belong to the FuelGuard Engineering Team. Unauthorized duplication or reverse engineering is strictly prohibited.',
                    ],
                },
                {
                    title: '8. Modifications',
                    paragraphs: [
                        'FuelGuard reserves the right to revise these Terms to reflect technical improvements or regulatory changes. The latest version is always available on our public web portal.',
                    ],
                },
            ],
        },
        privacy: {
            title: 'Privacy Policy',
            updated: 'Last updated: October 2026',
            intro: [
                'At FuelGuard, we protect the privacy, operational confidentiality, and telemetry security of our corporate clients. This policy outlines how information is collected, processed, and safeguarded.',
            ],
            sections: [
                {
                    title: '1. Information We Collect',
                    paragraphs: [
                        'We collect corporate contact information, RUC numbers, commercial billing data, tank specifications, fuel product types, tanker registration plates, and certified driver credentials.',
                        'Additionally, FuelGuard processes real-time IoT sensor telemetry including liquid level, temperature, hydrostatic pressure, GPS coordinates, and valve opening logs.',
                    ],
                },
                {
                    title: '2. Purpose of Data Processing',
                    paragraphs: ['We process data strictly to:'],
                    bullets: [
                        'Calculate tank fuel volume and trigger automated replenishment orders.',
                        'Validate tanker compartment capacity against order volumes.',
                        'Verify GPS geofences before authorizing fuel discharge valves.',
                        'Generate digital delivery dockets and audit dossiers for regulatory compliance.',
                        'Optimize logistics routes and minimize operational delivery lead times.',
                    ],
                },
                {
                    title: '3. Data Security & Storage',
                    paragraphs: [
                        'All telemetry and commercial transactions are encrypted in transit via TLS and at rest using industry-grade cryptographic standards. We implement role-based access control (RBAC) to ensure multi-tenant data segregation.',
                    ],
                },
                {
                    title: '4. Third-Party Integrations',
                    paragraphs: [
                        'FuelGuard may interface with authorized ERP systems (e.g., SAP), GPS tracking gateways, or government oversight registries (OSINERGMIN) exclusively as required to execute logistics operations.',
                    ],
                },
                {
                    title: '5. Rights & Inquiries',
                    paragraphs: [
                        'Corporate clients may request updates, corrections, or exports of their operational and account records via FuelGuards official support channels at contacto@fuelguard.pe.',
                    ],
                },
            ],
        },
    },
    es: {
        terms: {
            title: 'Términos de Servicio',
            updated: 'Última actualización: octubre de 2026',
            intro: [
                'Bienvenido a FuelGuard, una plataforma B2B con telemetría IoT orientada a distribuidores logísticos de combustible y estaciones de servicio asociadas. Al acceder a nuestra Landing Page, portal web o servicios relacionados, aceptas estos Términos de Servicio.',
            ],
            sections: [
                {
                    title: '1. Alcance y Uso de la Plataforma',
                    paragraphs: [
                        'FuelGuard provee herramientas digitales y de telemetría IoT para el monitoreo de tanques estacionarios, generación automática de pedidos por umbral crítico, recomendación de cisternas por capacidad y emisión de actas digitales de recepción.',
                        'El usuario se compromete a operar la plataforma de manera responsable, proporcionando información verídica y actualizada sobre tanques, flotas, choferes y despachos.',
                    ],
                },
                {
                    title: '2. Registro y Perfiles Corporativos',
                    paragraphs: [
                        'El acceso requiere el registro como Distribuidor Logístico de Combustible o Estación de Servicio / Cliente Corporativo. Cada empresa es responsable de la confidencialidad de sus credenciales.',
                        'Toda operación efectuada desde una cuenta registrada se considerará autorizada por la respectiva empresa contratante.',
                    ],
                },
                {
                    title: '3. Telemetría IoT y Datos de Inventario',
                    paragraphs: [
                        'Las lecturas de sensores hidrostáticos o ultrasónicos y las alertas de reposición sirven como soporte automatizado a la toma de decisiones logísticas.',
                        'El distribuidor y el comprador mantienen la responsabilidad de la seguridad física en planta y del cumplimiento de la normativa técnica nacional de hidrocarburos supervisada por OSINERGMIN.',
                    ],
                },
                {
                    title: '4. Asignación de Flota y Control de Válvulas',
                    paragraphs: [
                        'El sistema sugiere la asignación de cisternas verificando que su capacidad cubra el pedido y que el conductor cuente con licencia y habilitación vigente.',
                        'La autorización electrónica de descarga en válvula está condicionada a la comprobación de la geocerca de destino para mitigar riesgos de derrame o descargas indebidas.',
                    ],
                },
                {
                    title: '5. Cumplimiento Normativo',
                    paragraphs: [
                        'Todas las operaciones gestionadas a través de FuelGuard deben respetar las normas de seguridad en transporte de combustibles líquidos y planes de contingencia exigidos por las autoridades competentes.',
                    ],
                },
                {
                    title: '6. Disponibilidad del Servicio',
                    paragraphs: [
                        'FuelGuard procura una disponibilidad del 99.9%. Cualquier interrupción programada por mantenimiento de servidores o sincronización telemática será notificada oportunamente.',
                    ],
                },
                {
                    title: '7. Propiedad Intelectual',
                    paragraphs: [
                        'El diseño, algoritmos de asignación, marcas y componentes de FuelGuard pertenecen al equipo de ingeniería de FuelGuard. Queda prohibida su reproducción o explotación no autorizada.',
                    ],
                },
                {
                    title: '8. Modificaciones',
                    paragraphs: [
                        'FuelGuard puede actualizar estos términos para incorporar mejoras funcionales o adecuaciones regulatorias. La versión vigente siempre estará publicada en la plataforma.',
                    ],
                },
            ],
        },
        privacy: {
            title: 'Política de Privacidad',
            updated: 'Última actualización: octubre de 2026',
            intro: [
                'En FuelGuard valoramos la privacidad y la confidencialidad operativa de nuestros usuarios corporativos. Esta política explica cómo recopilamos, procesamos y protegemos la información.',
            ],
            sections: [
                {
                    title: '1. Información que Recopilamos',
                    paragraphs: [
                        'Recopilamos datos de contacto corporativo, RUC, razones sociales, capacidad y tipo de tanques de combustible, placas de unidades cisterna y licencias de conductores habilitados.',
                        'Asimismo, procesamos telemetría continua de dispositivos IoT instalados en tanques: nivel de combustible, volumen libre (ullage), coordenadas GPS y eventos de apertura de válvula.',
                    ],
                },
                {
                    title: '2. Uso de la Información',
                    paragraphs: ['Utilizamos los datos exclusivamente para:'],
                    bullets: [
                        'Calcular el volumen en tanques y generar órdenes automáticas de abastecimiento.',
                        'Validar que la cisterna asignada tenga capacidad suficiente para el pedido.',
                        'Verificar geocercas satelitales antes de habilitar la descarga de combustible.',
                        'Generar actas digitales de entrega y expedientes auditables para OSINERGMIN.',
                        'Optimizar tiempos de flete y reducir la huella operativa de la flota cisterna.',
                    ],
                },
                {
                    title: '3. Seguridad y Confidencialidad',
                    paragraphs: [
                        'Implementamos cifrado en tránsito (TLS) y en reposo para todas las transmisiones telemáticas y bancarias. La información de cada empresa se mantiene aislada bajo estrictas políticas de control de acceso.',
                    ],
                },
                {
                    title: '4. Integraciones con Terceros',
                    paragraphs: [
                        'FuelGuard puede integrarse con sistemas ERP corporativos (e.g. SAP), pasarelas bancarias o plataformas de fiscalización según los requerimientos operativos autorizados por el cliente.',
                    ],
                },
                {
                    title: '5. Derechos del Usuario',
                    paragraphs: [
                        'Cualquier empresa usuaria puede consultar, corregir o solicitar el respaldo de sus registros telemáticos y operativos contactando a soporte técnico en contacto@fuelguard.pe.',
                    ],
                },
            ],
        },
    },
};

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function clearFooterPhysics(instance) {
    if (!instance) return;

    if (instance.animationFrame) {
        cancelAnimationFrame(instance.animationFrame);
    }

    if (instance.resizeHandler) {
        window.removeEventListener('resize', instance.resizeHandler);
    }

    if (instance.canvas) {
        instance.canvas.remove();
    }
}

function createFooterPhysics(container) {
    if (!container) return null;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) return null;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = new Image();
    const balls = [];
    const pointer = {
        id: null,
        ball: null,
        x: 0,
        y: 0,
        previousX: 0,
        previousY: 0,
        previousTime: 0,
    };

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrame = 0;
    let lastTime = performance.now();

    const isMobile = () => window.innerWidth <= 768;
    const getBallCount = () => 14;
    const getBallRadius = () => Math.round(isMobile() ? 36 : 72);
    const getGravity = () => (isMobile() ? 1900 : 1300);

    function resizeCanvas() {
        const rect = container.getBoundingClientRect();

        width = Math.max(1, Math.round(rect.width || window.innerWidth));
        height = Math.max(1, Math.round(rect.height || (isMobile() ? 288 : 520)));
        dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        context.setTransform(dpr, 0, 0, dpr, 0, 0);

        balls.forEach((ball) => {
            ball.radius = getBallRadius();
            ball.mass = ball.radius * ball.radius;
            ball.x = clamp(ball.x, ball.radius, width - ball.radius);
            ball.y = Math.min(ball.y, height - ball.radius);
        });
    }

    function createBalls() {
        const count = getBallCount();
        const radius = getBallRadius();

        balls.length = 0;

        for (let index = 0; index < count; index += 1) {
            balls.push({
                x: radius + Math.random() * Math.max(width - radius * 2, radius),
                y: -(Math.random() * height * 1.4 + radius * 2 + index * radius * 0.35),
                vx: (Math.random() - 0.5) * 80,
                vy: Math.random() * 40,
                radius,
                mass: radius * radius,
                restitution: 0.48,
                friction: 0.985,
                angularVelocity: (Math.random() - 0.5) * 0.45,
                angle: Math.random() * Math.PI * 2,
            });
        }
    }

    function resolveWallCollision(ball) {
        if (ball.x - ball.radius < 0) {
            ball.x = ball.radius;
            ball.vx = Math.abs(ball.vx) * ball.restitution;
        } else if (ball.x + ball.radius > width) {
            ball.x = width - ball.radius;
            ball.vx = -Math.abs(ball.vx) * ball.restitution;
        }

        if (ball.y + ball.radius > height) {
            ball.y = height - ball.radius;
            ball.vy = -Math.abs(ball.vy) * ball.restitution;
            ball.vx *= ball.friction;
            ball.angularVelocity *= 0.78;
        } else if (ball.y - ball.radius < -height * 2) {
            ball.y = -height * 2 + ball.radius;
            ball.vy = Math.abs(ball.vy) * 0.2;
        }
    }

    function resolveBallCollision(first, second) {
        const dx = second.x - first.x;
        const dy = second.y - first.y;
        const distance = Math.hypot(dx, dy) || 1;
        const minDistance = first.radius + second.radius;

        if (distance >= minDistance) return;

        const nx = dx / distance;
        const ny = dy / distance;
        const overlap = minDistance - distance;
        const firstPinned = pointer.ball === first;
        const secondPinned = pointer.ball === second;

        if (!firstPinned && !secondPinned) {
            first.x -= nx * overlap * 0.5;
            first.y -= ny * overlap * 0.5;
            second.x += nx * overlap * 0.5;
            second.y += ny * overlap * 0.5;
        } else if (firstPinned && !secondPinned) {
            second.x += nx * overlap;
            second.y += ny * overlap;
        } else if (!firstPinned && secondPinned) {
            first.x -= nx * overlap;
            first.y -= ny * overlap;
        }

        const relativeVx = second.vx - first.vx;
        const relativeVy = second.vy - first.vy;
        const velocityAlongNormal = relativeVx * nx + relativeVy * ny;

        if (velocityAlongNormal > 0) return;

        const restitution = Math.min(first.restitution, second.restitution);
        const firstInvMass = firstPinned ? 0 : 1 / first.mass;
        const secondInvMass = secondPinned ? 0 : 1 / second.mass;
        const impulse = -(1 + restitution) * velocityAlongNormal / (firstInvMass + secondInvMass || 1);

        if (!firstPinned) {
            first.vx -= impulse * firstInvMass * nx;
            first.vy -= impulse * firstInvMass * ny;
            first.angularVelocity -= impulse * firstInvMass * 0.012;
        }

        if (!secondPinned) {
            second.vx += impulse * secondInvMass * nx;
            second.vy += impulse * secondInvMass * ny;
            second.angularVelocity += impulse * secondInvMass * 0.012;
        }
    }

    function step(delta) {
        const gravity = getGravity();

        balls.forEach((ball) => {
            if (pointer.ball === ball) return;

            ball.vy += gravity * delta;
            ball.vx *= 0.999;
            ball.vy *= 0.999;
            ball.angularVelocity *= 0.80;
            ball.x += ball.vx * delta;
            ball.y += ball.vy * delta;
            ball.angle += ball.angularVelocity * delta;

            if (Math.abs(ball.angularVelocity) < 0.1) {
                ball.angularVelocity = 0;
            }

            resolveWallCollision(ball);
        });

        for (let pass = 0; pass < 3; pass += 1) {
            for (let i = 0; i < balls.length; i += 1) {
                for (let j = i + 1; j < balls.length; j += 1) {
                    resolveBallCollision(balls[i], balls[j]);
                }
            }
        }
    }

    function draw() {
        context.clearRect(0, 0, width, height);

        balls.forEach((ball) => {
            context.save();
            context.translate(ball.x, ball.y);
            context.rotate(ball.angle);

            if (image.complete && image.naturalWidth > 0) {
                context.drawImage(image, -ball.radius, -ball.radius, ball.radius * 2, ball.radius * 2);
            } else {
                context.beginPath();
                context.arc(0, 0, ball.radius, 0, Math.PI * 2);
                context.fillStyle = '#ffffff';
                context.fill();
            }

            context.restore();
        });
    }

    function animate(now) {
        const delta = Math.min((now - lastTime) / 1000, 0.032);

        lastTime = now;
        step(delta);
        draw();
        animationFrame = requestAnimationFrame(animate);
    }

    function getCanvasPoint(event) {
        const rect = canvas.getBoundingClientRect();

        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        };
    }

    function findBallAtPoint(x, y) {
        for (let index = balls.length - 1; index >= 0; index -= 1) {
            const ball = balls[index];
            const distance = Math.hypot(x - ball.x, y - ball.y);

            if (distance <= ball.radius) return ball;
        }

        return null;
    }

    function handlePointerDown(event) {
        const point = getCanvasPoint(event);
        const ball = findBallAtPoint(point.x, point.y);

        if (!ball) return;

        pointer.id = event.pointerId;
        pointer.ball = ball;
        pointer.x = point.x;
        pointer.y = point.y;
        pointer.previousX = point.x;
        pointer.previousY = point.y;
        pointer.previousTime = performance.now();
        ball.vx = 0;
        ball.vy = 0;
        canvas.setPointerCapture(pointer.id);
        event.preventDefault();
    }

    function handlePointerMove(event) {
        if (event.pointerId !== pointer.id || !pointer.ball) return;

        const point = getCanvasPoint(event);
        const now = performance.now();
        const elapsed = Math.max((now - pointer.previousTime) / 1000, 0.016);
        const ball = pointer.ball;

        ball.x = clamp(point.x, ball.radius, width - ball.radius);
        ball.y = clamp(point.y, ball.radius, height - ball.radius);
        ball.vx = (point.x - pointer.previousX) / elapsed;
        ball.vy = (point.y - pointer.previousY) / elapsed;
        ball.angularVelocity = clamp(ball.vx / Math.max(ball.radius, 1), -8, 8);

        pointer.previousX = point.x;
        pointer.previousY = point.y;
        pointer.previousTime = now;
        event.preventDefault();
    }

    function handlePointerEnd(event) {
        if (event.pointerId !== pointer.id) return;

        if (canvas.hasPointerCapture?.(pointer.id)) {
            canvas.releasePointerCapture(pointer.id);
        }

        pointer.id = null;
        pointer.ball = null;
    }

    container.innerHTML = '';
    container.appendChild(canvas);
    image.src = FOOTER_BADGE_TEXTURE;

    resizeCanvas();
    createBalls();

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerEnd);
    canvas.addEventListener('pointercancel', handlePointerEnd);

    const resizeHandler = () => {
        resizeCanvas();
    };

    window.addEventListener('resize', resizeHandler);

    animationFrame = requestAnimationFrame((now) => {
        lastTime = now;
        animate(now);
    });

    return {
        canvas,
        resizeHandler,
        get animationFrame() {
            return animationFrame;
        },
    };
}

function attachFooterPhysics(section) {
    const container = section.querySelector('[data-footer-matter]');

    if (!container || section.dataset.footerPhysicsInitialized === 'true') return;

    let physicsInstance = null;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                physicsInstance = createFooterPhysics(container);
                section.dataset.footerPhysicsInitialized = 'true';
                observer.disconnect();
            });
        },
        { threshold: 0.18 }
    );

    observer.observe(section);

    window.addEventListener('pagehide', () => clearFooterPhysics(physicsInstance), { once: true });
}

function attachLegalDrawer(section) {
    const drawer = section.querySelector('[data-legal-drawer]');
    const panel = drawer?.querySelector('.legal-drawer__panel');
    const triggers = section.querySelectorAll('[data-legal-drawer-open]');
    const closeButtons = drawer?.querySelectorAll('[data-legal-drawer-close]');
    const contents = drawer?.querySelectorAll('[data-legal-drawer-content]');

    if (!drawer || !panel || !triggers.length || section.dataset.legalDrawerReady === 'true') return;

    let activeTrigger = null;
    let closeTimer = 0;
    let activeContentKey = 'terms';

    function getLegalLanguage() {
        return i18n.currentLang === 'es' ? 'es' : 'en';
    }

    function appendParagraphs(parent, paragraphs = []) {
        paragraphs.forEach((text) => {
            const paragraph = document.createElement('p');

            paragraph.textContent = text;
            parent.appendChild(paragraph);
        });
    }

    function renderLegalArticle(content, copy, titleId) {
        content.innerHTML = '';

        const title = document.createElement('h2');
        const updated = document.createElement('p');

        title.id = titleId;
        title.textContent = copy.title;
        updated.className = 'legal-drawer__updated';
        updated.textContent = copy.updated;

        content.append(title, updated);
        appendParagraphs(content, copy.intro);

        copy.sections.forEach((sectionItem) => {
            const heading = document.createElement('h3');

            heading.textContent = sectionItem.title;
            content.appendChild(heading);
            appendParagraphs(content, sectionItem.paragraphs);

            if (sectionItem.bullets?.length) {
                const list = document.createElement('ul');

                list.className = 'legal-drawer__list';
                sectionItem.bullets.forEach((item) => {
                    const listItem = document.createElement('li');

                    listItem.textContent = item;
                    list.appendChild(listItem);
                });
                content.appendChild(list);
            }
        });
    }

    function renderLegalContent() {
        const language = getLegalLanguage();
        const copy = LEGAL_COPY[language] || LEGAL_COPY.en;

        contents.forEach((content) => {
            const contentKey = content.dataset.legalDrawerContent;
            const contentCopy = copy[contentKey];

            if (!contentCopy) return;

            renderLegalArticle(
                content,
                contentCopy,
                contentKey === 'privacy' ? 'legal-drawer-privacy-title' : 'legal-drawer-title'
            );
        });

        setActiveContent(activeContentKey);
    }

    function setActiveContent(contentKey) {
        activeContentKey = contentKey;
        let activeTitleId = 'legal-drawer-title';

        contents.forEach((content) => {
            const isActive = content.dataset.legalDrawerContent === contentKey;

            content.hidden = !isActive;

            if (isActive) {
                const title = content.querySelector('h2');

                if (title?.id) activeTitleId = title.id;
            }
        });

        panel.setAttribute('aria-labelledby', activeTitleId);
    }

    function openDrawer(contentKey, trigger) {
        window.clearTimeout(closeTimer);
        activeTrigger = trigger;
        renderLegalContent();
        setActiveContent(contentKey);
        drawer.hidden = false;
        document.body.classList.add('legal-drawer-open');

        requestAnimationFrame(() => {
            drawer.classList.add('is-open');
            panel.focus({ preventScroll: true });
        });
    }

    function closeDrawer() {
        drawer.classList.remove('is-open');
        document.body.classList.remove('legal-drawer-open');

        closeTimer = window.setTimeout(() => {
            drawer.hidden = true;
            activeTrigger?.focus?.({ preventScroll: true });
            activeTrigger = null;
        }, 430);
    }

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            openDrawer(trigger.dataset.legalDrawerOpen || 'terms', trigger);
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape' || drawer.hidden) return;
        closeDrawer();
    });

    renderLegalContent();
    i18n.subscribe(renderLegalContent);

    section.dataset.legalDrawerReady = 'true';
}

export function initializeFooterSection(root = document) {
    const section = root.querySelector('[data-footer-section]');

    if (!section || section.dataset.footerInitialized === 'true') return;

    attachFooterPhysics(section);
    attachLegalDrawer(section);

    section.dataset.footerInitialized = 'true';
}
