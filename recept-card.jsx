import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/ReceptCard.module.css'

export const ReceptCard=(rp)=>{
    let ikonaURL;
    if(rp.data.rucak=="rucak")
        ikonaURL='/ikone/meal.png';
    if(rp.data.desert=="desert")
        ikonaURL='/ikone/cake.png';
   
    return(
        <>
        
            <Link className={styles.card} href={`/recepti/${rp.data.rucak}/${rp.data.id}`}>
                <Image className={styles.img} src={rp.data.image} alt={rp.data.name} width={300} height={100}/>
                <h3 className={styles.naslov}>{rp.data.name}</h3>
                <Image className={styles.icon} src={ikonaURL} alt="ikona" width={50} height={50}/>
            </Link>
        
        </>
);
}