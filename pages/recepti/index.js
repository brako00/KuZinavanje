import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { ReceptCard } from '../../src/components/recept-card/recept-card';
import styles from '../../styles/SviRecepti.module.css'


const Recepti_Page = ({kategorije, recepti}) => {

    return (
        
        <div>

            <h1 className={styles.kategorijaName}>Recepti</h1>

            <div className={styles.izbornik}>
                {kategorije.map(rp=>(
                    <Link className={styles.kategorija} key={rp.id} href={`/recepti/${rp.id}`}>
                        {rp.title}
                    </Link>
                ))}
            </div>
        
            <div className={styles.recepti}>
                {recepti.map(rp=>(
                    <ReceptCard data={rp} key={rp.id}> </ReceptCard>
                ))}
            </div>
            </div>
    );
};

export default Recepti_Page;

export async function getStaticProps() {
    const {recepies_categories, allRecepies}=await import('/data/data.json');
    return {
        props: {
            kategorije: recepies_categories,
            recepti: allRecepies
        },
    };
  }
