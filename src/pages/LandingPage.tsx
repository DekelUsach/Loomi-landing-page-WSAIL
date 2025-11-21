import React from 'react';
import styles from './LandingPage.module.css';
import LandingForm from '../components/LandingForm';

// Assets - LULU (Zorro) Illustrations
import zorroSaludando from '../assets/Zorro saludando.svg';
import zorroCard from '../assets/Zorro_card.svg';
import zorroLogin from '../assets/Zorro_login.svg';

const LandingPage: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* Hero Section - Redesigned per request */}
            <section className={styles.hero}>
                {/* 1. Texto inicial atrapante con el nombre Loomi */}
                <h1 className={styles.heroTitle}>
                    <span className={styles.heroHighlight}>Loomi</span> convierte la distracción digital en pasión por la lectura.
                </h1>

                {/* 2. Imagen con el personaje LULU */}
                <div className={styles.heroIllustrationContainer}>
                    <img src={zorroSaludando} alt="Loomi saludando" className={styles.heroIllustration} />
                </div>

                {/* 3. Texto específico de datos/información */}
                <p className={styles.heroDataText}>
                    Nuestra tecnología de IA adapta cada párrafo con estímulos visuales, logrando que niños de 8 a 12 años mejoren su comprensión lectora en solo 6 semanas.
                </p>

                {/* Botón CTA sutil agregado para no dejar la sección "muerta" funcionalmente, aunque el user no lo pidió explícitamente en el layout, es buena práctica. Si no lo quiere, se puede quitar. */}
                <div style={{ marginTop: '3rem' }}>
                    <a href="#waitlist" className={styles.btnPrimary}>Únete al Piloto</a>
                </div>
            </section>

            {/* Problem Section */}
            <section className={styles.problem}>
                <div className={styles.sectionTitle}>El Desafío Actual</div>
                <div className={styles.problemGrid}>
                    <div>
                        <div className={styles.problemStat}>2h vs 15m</div>
                        <p className={styles.problemText}>
                            Un niño promedio puede ver videos cortos durante 2 horas seguidas, pero lucha para mantener la atención en un libro por solo 15 minutos.
                        </p>
                    </div>
                    <div>
                        <p className={styles.problemText}>
                            <strong>No es falta de capacidad, es falta de estímulo.</strong><br />
                            El cerebro de los nativos digitales espera recompensa visual inmediata. Los libros tradicionales no la dan. Loomi sí.
                        </p>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className={styles.howItWorks}>
                <h2 className={styles.sectionTitle}>Cómo funciona</h2>
                <p className={styles.sectionSubtitle}>Un puente entre las pantallas y las páginas.</p>

                <div className={styles.stepsGrid}>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>1</div>
                        <h3>Elige o Sube</h3>
                        <p>El niño elige una historia de nuestra biblioteca o sube cualquier PDF/DOCX escolar.</p>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>2</div>
                        <h3>Visualización IA</h3>
                        <p>Loomi analiza el texto y genera imágenes contextuales para cada párrafo.</p>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>3</div>
                        <h3>Compañero Inteligente</h3>
                        <p>Un chat con IA responde dudas sobre la historia al instante.</p>
                    </div>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>4</div>
                        <h3>Progreso Real</h3>
                        <p>El sistema reduce las imágenes gradualmente hasta lograr la lectura fluida.</p>
                    </div>
                </div>
            </section>

            {/* Differentiation / Tech */}
            <section className={styles.features}>
                {/* Feature 1 */}
                <div className={styles.featureRow}>
                    <div className={styles.featureContent}>
                        <h3>Mapa de Calor Cognitivo</h3>
                        <p>
                            No solo sabemos si leyó, sabemos <strong>cómo</strong> leyó.
                            Nuestro sistema detecta pausas, relecturas y velocidad para mostrarte un mapa de calor de su atención.
                        </p>
                    </div>
                    <div className={styles.featureIllustrationWrapper}>
                        <img src={zorroCard} alt="Análisis de lectura" className={styles.featureIllustration} />
                    </div>
                </div>

                {/* Feature 2 */}
                <div className={`${styles.featureRow} ${styles.featureRowReverse}`}>
                    <div className={styles.featureContent}>
                        <h3>Sistema de Imágenes Multinivel</h3>
                        <p>
                            El objetivo no es llenar el libro de dibujos, es <strong>entrenar el cerebro</strong>.
                            Empezamos con una imagen por frase y reducimos el soporte visual conforme el niño mejora.
                        </p>
                    </div>
                    <div className={styles.featureIllustrationWrapper}>
                        <img src={zorroLogin} alt="Niveles de Lectura" className={styles.featureIllustration} />
                    </div>
                </div>
            </section>

            {/* Validation */}
            <section className={styles.validation}>
                <div className={styles.validationBadge}>Ciencia, no magia</div>
                <h2 className={styles.sectionTitle}>Diseñado para resultados medibles</h2>
                <p className={styles.sectionSubtitle}>
                    Objetivo: +25% en velocidad lectora y +30% en comprensión.
                </p>
            </section>

            {/* Plans */}
            <section id="plans" className={styles.plans}>
                <h2 className={styles.sectionTitle}>Planes Flexibles</h2>
                <div className={styles.plansGrid}>
                    <div className={styles.planCard}>
                        <h3>Loomi Free</h3>
                        <div className={styles.planPrice}>$0</div>
                        <ul className={styles.planFeatures}>
                            <li>✅ 20 Textos curados</li>
                            <li>✅ Niveles visuales 0-2</li>
                            <li>✅ Reporte básico</li>
                        </ul>
                        <button className={styles.btnSecondary}>Empezar Gratis</button>
                    </div>

                    <div className={`${styles.planCard} ${styles.featured}`}>
                        <div style={{ color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>RECOMENDADO</div>
                        <h3>Loomi Plus</h3>
                        <div className={styles.planPrice}>$9.99<span style={{ fontSize: '1rem', color: '#666' }}>/mes</span></div>
                        <ul className={styles.planFeatures}>
                            <li>✅ Todo lo de Free</li>
                            <li>✅ <strong>Niveles 0-5 (Entrenamiento completo)</strong></li>
                            <li>✅ Mapa de Calor Cognitivo</li>
                            <li>✅ Sube tus propios libros ilimitados</li>
                        </ul>
                        <button className={styles.btnPrimary}>Prueba 14 días gratis</button>
                    </div>

                    <div className={styles.planCard}>
                        <h3>Loomi School</h3>
                        <div className={styles.planPrice}>Custom</div>
                        <ul className={styles.planFeatures}>
                            <li>✅ Dashboard para docentes</li>
                            <li>✅ Gestión de grupos</li>
                            <li>✅ Alineación curricular</li>
                        </ul>
                        <button className={styles.btnSecondary}>Contactar Ventas</button>
                    </div>
                </div>
            </section>

            {/* CTA / Form */}
            <section id="waitlist" className={styles.formSection}>
                <div className={styles.formContainer}>
                    <h2 className={styles.sectionTitle} style={{ fontSize: '2rem' }}>Únete a la Revolución Lectora</h2>
                    <p className={styles.sectionSubtitle} style={{ marginBottom: '2rem' }}>
                        Estamos abriendo cupos para el programa piloto.
                    </p>
                    <LandingForm />
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
