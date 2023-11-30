import * as Styled from "./footer.style";
import {AiOutlineInstagram} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import {FaTwitter} from "react-icons/fa";
import {CgMailForward} from "react-icons/cg";
import React from "react";

const Footer: React.FC = () => {
    return (
        <Styled.Footer>
            <Styled.Section id="aboutUs">
                <h1>Penelope Charmosa</h1>
                <p>
                    Um app de moda com entregas rápidas, semelhante ao iFood, que simplifica a escolha do cliente.
                    Também promove pequenos empreendedores locais, impulsionando a economia regional.
                </p>
            </Styled.Section>
            <Styled.Section id="socialMedia">
                <h1>Redes sociais</h1>
                <ul>
                    <li>
                        <a
                            href="https://www.instagram.com/penelope_charmosa_app"
                            target="blank"
                        >
                            <AiOutlineInstagram/> Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" target="blank">
                            <BsFacebook/> Facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="blank">
                            <FaTwitter/> Twitter
                        </a>
                    </li>
                </ul>
            </Styled.Section>
            <Styled.Section id="newsLetter">
                <h1>
                    Inscreva-se no nosso <i>NewsLetter</i>
                </h1>
                <form>
                    <input type="email" placeholder="Digite o seu email aqui"/>
                    <button type="submit" id="submitButton" name="Enviar Email" title="Enviar Email"
                            aria-label="Enviar Email">
                        <CgMailForward/>
                    </button>
                </form>
            </Styled.Section>
        </Styled.Footer>
    );
};

export default Footer;
