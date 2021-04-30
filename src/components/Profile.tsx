import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Eduardo-H.png" alt="Foto de perfil do usuário"/>
            <div>
                <strong>Eduardo Henrique de Oliveira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level icon in SVG format" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}