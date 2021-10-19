import './home.css'
import React from 'react'

export const Home = () => {
    return (
        <main className="_main" id="main">
            <div class="_main_div">
                <div class="_main_div_content">
                    <h1 class="_h1_main">Bem vindo(a) à NeuroDev</h1>
                    <h2 class="_h2_main">Desenvolvimento é nossa prioridade</h2>
                    <p class="_p_main">
                        Et has minim elitr intellegat.
                        Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
                        At nam minimum ponderum. Est audiam animal molestiae te.
                        Ex duo eripuit mentitum.
                        Et has minim elitr intellegat.
                        Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
                        At nam minimum ponderum. Est audiam animal molestiae te.
                        Ex duo eripuit mentitum.
                    </p>
                    <div class="_home_buttons_content">
                        <a href="#" class="_button_home_appointment">Agende uma consulta</a>
                        <a href="#" class="_button_now_more">Saiba mais</a>
                    </div>
                </div>
            </div>
        </main>
    )
}