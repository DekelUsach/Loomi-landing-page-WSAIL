import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import styles from '../pages/LandingPage.module.css';

interface FormData {
    parentName: string;
    email: string;
    role: string;
    childName: string;
    childAge: string;
    interestType: string;
    message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const LandingForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        parentName: '',
        email: '',
        role: 'Padre/Madre',
        childName: '',
        childAge: '',
        interestType: 'Probar en casa',
        message: ''
    });

    const [status, setStatus] = useState<FormStatus>('idle');

    // URL del Web App de Google Apps Script
    // TODO: Reemplaza esto con la URL que obtengas al desplegar tu script
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyKRQrXDcQl4H_eRiLn9-MzvFhepX-3_uftsVaq6th0xfrqYaaWm_5J-NXTkU_nVHq1/exec';

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            setStatus('success');
            setFormData({
                parentName: '',
                email: '',
                role: 'Padre/Madre',
                childName: '',
                childAge: '',
                interestType: 'Probar en casa',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div style={{
                textAlign: 'center',
                padding: '3rem',
                color: '#155724',
                background: '#d4edda',
                borderRadius: '20px',
                border: '2px solid #c3e6cb'
            }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>¡Gracias por unirte! 🚀</h3>
                <p style={{ fontSize: '1.2rem' }}>Te hemos añadido a la lista de espera. Pronto recibirás noticias nuestras.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className={styles.btnSecondary}
                    style={{ marginTop: '2rem' }}
                >
                    Enviar otro registro
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
                <label className={styles.formLabel}>Tu Nombre</label>
                <input
                    type="text"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="Ej. María Pérez"
                />
            </div>

            <div>
                <label className={styles.formLabel}>Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="tu@email.com"
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                    <label className={styles.formLabel}>Soy...</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className={styles.formInput}
                    >
                        <option>Padre/Madre</option>
                        <option>Docente</option>
                        <option>Directivo Escolar</option>
                        <option>Otro</option>
                    </select>
                </div>
                <div>
                    <label className={styles.formLabel}>Interés</label>
                    <select
                        name="interestType"
                        value={formData.interestType}
                        onChange={handleChange}
                        className={styles.formInput}
                    >
                        <option>Probar en casa</option>
                        <option>Piloto en escuela</option>
                        <option>Invertir/Apoyar</option>
                    </select>
                </div>
            </div>

            {formData.role === 'Padre/Madre' && (
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label className={styles.formLabel}>Nombre del niño/a (Opcional)</label>
                        <input
                            type="text"
                            name="childName"
                            value={formData.childName}
                            onChange={handleChange}
                            className={styles.formInput}
                        />
                    </div>
                    <div>
                        <label className={styles.formLabel}>Edad</label>
                        <input
                            type="number"
                            name="childAge"
                            value={formData.childAge}
                            onChange={handleChange}
                            className={styles.formInput}
                            placeholder="8-12"
                        />
                    </div>
                </div>
            )}

            <div>
                <label className={styles.formLabel}>Mensaje (Opcional)</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className={styles.formInput}
                    style={{ resize: 'vertical' }}
                ></textarea>
            </div>

            <button
                type="submit"
                className={styles.btnPrimary}
                disabled={status === 'submitting'}
                style={{ marginTop: '1rem', width: '100%', padding: '16px', fontSize: '1.3rem' }}
            >
                {status === 'submitting' ? 'Enviando...' : 'Unirme a la Lista de Espera'}
            </button>

            {status === 'error' && (
                <p style={{ color: 'var(--error-text)', textAlign: 'center', marginTop: '0.5rem' }}>
                    Hubo un error. Por favor intenta de nuevo.
                </p>
            )}
        </form>
    );
};

export default LandingForm;
