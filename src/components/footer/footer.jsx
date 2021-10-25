import './footer.css'
import React from 'react'

export const Footer = () => {
    return (
        <footer className="_footer">
            <div class="_footer_content">
                <div class="_footer_content1">
                    <h1>NeuroDev(LOGO)</h1>
                    <h2>Agende uma consulta conosco.</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.]
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div class="_footer_divsoria"></div>
                <div class="_footer_content2">
                    <ul class="_footer_sub_menu_ul">
                        <h3 class="_footer_h3">Menu</h3>
                        <li class="_footer_sub_men_ul_li">
                            <a href="#">Home</a>
                        </li>
                        <li class="_footer_sub_men_ul_li">
                            <a href="#">Quem somos</a>
                        </li>
                        <li class="_footer_sub_men_ul_li">
                            <a href="#">Serviços</a>
                        </li>
                        <li class="_footer_sub_men_ul_li">
                            <a href="#">Contato</a>
                        </li>
                    </ul>
                    <ul class="_footer_ul_social">
                        <h3 class="_footer_h3">Redes sociais</h3>
                        <li class="_footer_social_li">
                            <a href="#">Facebook</a>
                        </li>
                        <li class="_footer_social_li">
                            <a href="#">Instagram</a>
                        </li>
                        <li class="_footer_social_li">
                            <a href="#">Linkedin</a>
                        </li>
                        <li class="_footer_social_li">
                            <a href="#">Youtube</a>
                        </li>
                    </ul>
                    <ul class="_footer_talk">
                        <h3 class="_footer_h3">Fale conosco</h3>
                        <li class="_footer_talk_li">
                            <a href="#">Telefone</a>
                        </li>
                        <li class="_footer_talk_li">
                            <a href="#">Whatsapp</a>
                        </li>
                        <li class="_footer_talk_li">
                            <a href="#">Email</a>
                        </li>
                        <li class="_footer_talk_li">
                            <a href="#">Endereço</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="_copyrigth">
                <p>
                    © Designed and developed by Giselle Viana, Nizael Valente, <a href="https://github.com/renanslopes">Renan Lopes</a>, Rick Lana e Paula Cunha.
                </p>
            </div>
        </footer>
    )
}