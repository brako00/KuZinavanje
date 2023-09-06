import Image from 'next/image';
import styles from '../../../styles/Recept.module.css'

const Recept_Page = ({data}) => {
    let ikonaURL;
    if(data.rucak=="rucak")
        ikonaURL='/ikone/meal.png';
    if(data.desert=="desert")
        ikonaURL='/ikone/cake.png';
    return ( 
        <div className={styles.container}>
            <div className={styles.naslovC}>
                <h1 className={styles.naslov}>{data.name}</h1>
                <Image className={styles.img} src={data.image} alt={data.name} width={300} height={100}/>
            </div>
            <div className={styles.sastojciContainer}>
            <div className={styles.sastojci}>
                <h2 className={styles.sastojak}>Sastojci:</h2>
                <ul className={styles.listaSastojaka}>
                    {data.sastojci.map((sastojak) => (
                    <li key={sastojak} className={styles.listaSastojakaLi}>{sastojak}</li>
                    ))}
                </ul>
                </div>
                <div className={styles.ikonaContainer}>
                <Image className={styles.icon} src={ikonaURL} alt={data.name} width={100} height={100}/>
                </div>
                </div>
            
<div className={styles.priprema}>    
                <h2>Priprema:</h2>
                <p>{data.priprema}</p>
            </div>
        </div>
    );
};

export default Recept_Page;

export async function getStaticPaths({}) {
    const {allRecepies}= await import('/data/data.json');
    const allPaths = allRecepies.map(path=>{
        return{
            params:{
                cat:path.rucak.toString(),
                cat_id:path.id.toString(),
            },
        };
    });

    return{
        paths:allPaths,
        fallback:false,
    }
}

export async function getStaticProps(context) {
    const id=context?.params.cat_id;
    const {allRecepies}= await import('/data/data.json');
    const recepieData=allRecepies.find((rp)=>rp.id==id);
    return {
        props: {
          data: recepieData,
        },
    };
    
}