import React from 'react'
import './index.css'

export default function CreateFilms() {
  return (
    <div className='crateFilms-container'>
       <div className='crateFilms-content'>
            <div className='createFilmsTitle'>Cadastrar filme</div>
            <form action="#" method="post">
              <div className='input-nameFilm'>
                <label htmlFor="inameFilm">Nome do filme</label>
                <input type="text" name='namefilm'id='inameFilm' placeholder='Até 30 caracteres'/>
                <a>Esse nome será exibido em todos os locais da plataforma</a>
              </div>

              <div className='input-descriptionFilm'>
                <label htmlFor="idescriptionFilm">Descrição</label>
                <textarea name="descriptionFilm" id="idescriptionFilm" maxLength='200' placeholder='Até 200 caracteres'></textarea>
              </div>

            </form>
        </div>
    </div>
  )
}
