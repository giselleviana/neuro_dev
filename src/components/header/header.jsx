import './header.css'
import React from 'react'
import { Button } from '../button/button';

export const Header = (params) => {
    return (
        <header className="_header">

            <nav class="_nav">
                <a href="#"><h1 class="_h1_logo"><span>Neuro</span>Dev</h1></a>
                <ul>
                    <li><a href="#index.html" class="_a_li">Home</a></li>
                    <li><a href="#quem_somos.html" class="_a_li">Quem somos</a></li>
                    <li><a href="#servicos.html" class="_a_li">Serviços</a></li>
                    <li><a href="#contato.html" class="_a_li">Contato</a></li>
                </ul>
                <div class="_buttons">
                    <Button _class="_button_appointment" _text="Agendamento" />
                </div>
            </nav>

        </header>
    )
}