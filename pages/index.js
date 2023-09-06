import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import styles from '../styles/SviRecepti.module.css'
import { ReceptCard } from '../src/components/recept-card/recept-card';
import Head from 'next/head';

const Recepti_Page = ({kategorije, recepti, rucakRecepti, desertRecepti}) => {
    return (
        <div>
        
        <div className={styles.welecomeContainer}>
            <div className={styles.welecomeContainer2}>
                <h1 className={styles.welecome}>Dobrodošli na našu stranicu!</h1>
                <p className={styles.welecomeText}>Jako smo uzbuđeni što ste ovdje. Naša misija je inspirirati vas da budete kreativni u kuhinji i isprobate nove stvari. 
                </p><p className={styles.welecomeText}>Vjerujemo da bi kuhanje i pečenje trebalo biti ugodno i dostupno svima, bez obzira na razinu vještina.</p>
              </div>
            <Image className={styles.kuhariImg} src='/kuhari.jpg' alt='kuhari' width={300} height={100}/>
        </div>

        <h2 className={styles.Predlazemo}>Predlažemo za ručak:</h2>

        <div className={styles.recepti}>
                {rucakRecepti.map(rp=>(
                    <ReceptCard data={rp} key={rp.id}> </ReceptCard>
                ))}
            </div>


        <h2 className={styles.Predlazemo}>Predlažemo za desert:</h2>

        <div className={styles.recepti}>
                {desertRecepti.map(rp=>(
                    <ReceptCard data={rp} key={rp.id}> </ReceptCard>
                ))}
            </div>


        </div>
    );
};

export default Recepti_Page;

export async function getStaticProps() {
    const {recepies_categories, allRecepies}=await import('/data/data.json');
    let rucakRecepti=[];
    let desertRecepti=[];
    allRecepies.map(rp=>{
        if(rp.rucak=="rucak")
            rucakRecepti.push(rp);
        if(rp.desert=="desert")
            desertRecepti.push(rp);
    });

    rucakRecepti=getRandomItems(rucakRecepti, 5);
    desertRecepti=getRandomItems(desertRecepti, 5);

   
    return {
        props: {
            kategorije: recepies_categories,
            recepti: allRecepies,
            rucakRecepti,
            desertRecepti
        },
    };
  }

function getRandomItems(array, numberOfItems) {
    return array.sort(() => 0.5 - Math.random()).slice(0, numberOfItems);
}
