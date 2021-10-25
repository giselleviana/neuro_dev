import './contact.css'
import telephone_icon from './img/Vector.svg';
import email_icon from './img/email.svg';
import adress_icon from './img/adress.svg';
import whatsapp_icon from './img/whatsapp.svg';
import React from 'react'

export const Contact = () => {
    return (
        <div className="_contact">
            <div class="_contact_content">
                <div class="_contact_content1">
                    <h2>Informações de contato</h2>
                    <div class="_contact_subitens">
                        <div class="_contact_subitens_div">
                            <img src={telephone_icon} alt="Icone Telefone" />
                            <p>
                                (99) 9999-9999
                            </p>
                        </div>
                        <div class="_contact_subitens_div">
                            <img src={whatsapp_icon} alt="Icone whatsapp" />
                            <p>
                                (99) 9999-9999
                            </p>
                        </div>
                        <div class="_contact_subitens_div">
                            <img src={email_icon} alt="Icone email" />
                            <p>
                                email@provedor.com.br
                            </p>
                        </div>
                        <div class="_contact_subitens_div">
                            <img src={adress_icon} alt="Icone endereço" />
                            <p>
                                Rua NomeDaRua, n. 100Bairro - Cidade - Estado
                            </p>
                        </div>
                    </div>
                </div>
                <div class="_contact_content2">
                    <h2>
                        Fale conosco
                    </h2>
                    <form class="_contact_form" action="#">
                        <input class="_contact_form_fields" type="text" value="Nome" id="nome" />
                        <input class="_contact_form_fields" type="email" value="Email" id="email" />
                        <input class="_contact_form_fields" type="text" value="Assunto" id="assunto" />
                        <textarea class="_contact_form_fields" name="mensagem" value="Sua mensagem aqui." id="mensagem" cols="30" rows="10"></textarea>
                        <div class="_contact_form_checkbox">
                            <input type="checkbox" id="checkbox" />
                            <p>
                                Desejo receber novidades sobre a NeuroDev.
                            </p>
                        </div>

                        <button class="_button_contact_send" type="submit">Enviar</button>
                    </form>

                </div>

            </div>

        </div>
    )
}