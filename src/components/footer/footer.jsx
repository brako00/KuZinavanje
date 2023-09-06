import Image from 'next/image'
import Link from 'next/link'


export const Footer = () => {
    return(
        <footer>
            <div className='mainFooter'>
                <div className='logoFooter'>
                    <div className='logoBottom'>Ku<span className="z">Ž</span>inavanje </div>
                    <p className='mail'>brako00@fesb.hr</p>
                </div>
                <div className='socialMedia'>
                    <p className='kuhari'>Zapratite kuhare</p>
                    <div>
                        <Link className='socials' href="https://www.facebook.com/"><Image src="/ikone/facebook.png" alt="facebook" width={50} height={50} /></Link>
                        <Link className='socials' href="https://www.instagram.com/"><Image src="/ikone/instagram.png" alt="instagram" width={50} height={50} /></Link>
                        <Link className='socials' href="https://www.twitter.com/"><Image src="/ikone/twitter.png" alt="twitter" width={50} height={50} /></Link>
                    </div>
                </div>
                <nav className='bottomNav'>
                    <Link className='bottomNavA' href="/">Naslovnica</Link>
                    <Link className='bottomNavA' href="/recepti">Recepti</Link>
                    <Link className='bottomNavA' href="/o-nama">O nama</Link>
                </nav>
            </div>
            <p className='bottomPage'>Copyright Bruna Rako 2023</p>
            
        </footer>
    )
}
