import styles from "../styles/Onama.module.css"
import Image from "next/image"

const ONama_Page = () => {
    return (
        <div>
        
        <h1 className={styles.naslov}>Dobrodošli na našu web stranicu recepata!</h1>
        <div className={styles.mantra}>
        <p>Naš tim razvojnih kuhara i blogera o hrani strastven je u stvaranju ukusnih i jednostavnih recepata koje svatko može napraviti kod kuće. </p>
        <p>Vjerujemo da kuhanje treba biti zabavno, pristupačno i, što je najvažnije, ukusno.</p>
        <p>Hrana spaja ljude i čast nam je biti dio vašeg kulinarskog puta. Bez obzira jeste li početnik ili iskusni kuhar, nadamo se da će vas naši recepti inspirirati da budete kreativni u kuhinji i isprobate nešto novo.</p>
        <p>Hvala što ste odabrali našu web stranicu kao svoj izvor recepata. Jedva čekamo vidjeti kakve ukusne kreacije ćete napraviti!</p>
        </div>

        <h2 className={styles.naslov}>Što vam nudimo?</h2>
        <div className={styles.mantra}>
            <div className={styles.klase}>
                <Image src="/ikone/meal.png" width={100} height={100} alt="rucak" />
                <p className={styles.pNama}>Naša kolekcija recepata za ručak pruža vam raznolike i ukusne ideje za zadovoljavanje vaših prehrambenih potreba. Bez obzira jeste li ljubitelj mesa, vegetarijanac ili vegan, ovdje ćete pronaći nešto što će vas oduševiti.</p>
            </div><div className={styles.klase}>
            <Image src="/ikone/cake.png" width={100} height={100} alt="desert" />
            <p className={styles.pNama}>Naša kolekcija recepata obuhvaća razne okuse, od klasičnih i tradicionalnih poslastica do modernih i eksperimentalnih kombinacija. Sve što trebate je strast prema slatkim stvarima i želja za istraživanjem novih okusa.</p>
            </div><div className={styles.klase}>
            <Image src="/ikone/vegan.png" width={100} height={100} alt="vege" />
            <p className={styles.pNama}>Naša kolekcija recepata obuhvaća raznovrsne vegetarijanske i veganske okuse, od tradicionalnih jela do modernih i eksperimentalnih kombinacija. Sve recepte odlikuje pažljiv odabir sastojaka kako biste uživali u hrskavim povrćem, aromatičnim začinima i uravnoteženim proteinskim izvorima.</p>
        </div></div>
        </div>
    );
};

export default ONama_Page;