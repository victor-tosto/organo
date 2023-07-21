import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer-principal'>
            <div className='images'>
                <img src='/imagens/fb.png' alt='Facebook' />
                <img src='/imagens/tw.png' alt='Twitter' />
                <img src='/imagens/ig.png' alt='Instagram' />
            </div>

            <img src='/imagens/logo.png' alt='Organo' />

            <span>Desenvolvido por Alura.</span>
        </footer>
    );
}

export default Footer;
