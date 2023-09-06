import Image from 'next/image';
import Link from 'next/link';
import { ReceptCard } from '../../../src/components/recept-card/recept-card';
import styles from '../../../styles/SviRecepti.module.css'


const Category_Page = ({data, kategorije, pageName}) => {

    return (
        <div>
            <h1 className={styles.kategorijaName}>{pageName}</h1>

            <div className={styles.izbornik}>
            {kategorije.map(rp=>(
                <Link className={styles.kategorija} key={rp.id} href={`/recepti/${rp.id}`}>
                    {rp.title}
                </Link>
            ))}
            </div>

            <div className={styles.recepti}>
              
                {data.map(rp=>(
                    <ReceptCard data={rp} key={rp.id}> </ReceptCard>
                    ))}

            </div>
        </div>
    );
};

export default Category_Page;

export async function getStaticPaths() {
    const {recepies_categories}= await import('/data/data.json');
    const allPaths = recepies_categories.map(rp => {
        return {
            params: {
                cat: rp.id.toString(),
                catName: rp.title.toString(),
            },
        };
    });
   
    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id=context?.params.cat;
    const{recepies_categories,allRecepies}= await import('/data/data.json');
    
    const data=allRecepies.filter((rp)=>rp.rucak==id||rp.desert==id||rp.vegetarijansko==id);
    const categoryName=recepies_categories.find((rp)=>rp.id==id).title;

    return {
        props: {
          data,
          kategorije: recepies_categories,
          pageName: categoryName,
        },
    };
  }