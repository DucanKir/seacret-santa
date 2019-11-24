import React from 'react'

class Home extends React.Component {

  render(){

    return (
      <div className="background">
        <div className="hero">
          <div className="headers section">
            <h1 className="title is-2 has-text-light main-title has-text-centered"> Анонимный Дед Мороз</h1>
          </div>
        </div>
        <div className="headers">
          <p className="subtitle is-6 has-text-light has-text-centered description">Для того, чтобы принять участие, заполните эту анекту, тогда ваш личный Дед Мороз будет знать, куда отправлять подарок! Все поля нужно обязательно заполнить.</p>
        </div>
        <div className="forms">
          <form  data-netlify="true" name="contact" method="post" action="/src/thanks" encType="application/x-www-form-urlencoded">
            <input type="hidden" name="form-name" value="contact" />
            <div className="sect">
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Ваш ник в Чатике Денни</h1>
                <input className=" has-text-weight-bold input is-medium" type="text" name="ник" placeholder="Ваш ответ..." required/>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Ваш Email</h1>
                <input className=" has-text-weight-bold input is-medium" type="email" name="email" placeholder="Email" required/>
              </div>
            </div>
            <br />
            <h1 className="title is-4 has-text-light lable has-text-centered">Данные для отпраки подарка</h1>
            <div className="sect">
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Имя</h1>
                <input className=" has-text-weight-bold input is-medium" type="text" name="имя" placeholder="Ваш ответ..." required/>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Фамилия</h1>
                <input className=" has-text-weight-bold input is-medium" type="text" name="фамилия" placeholder="Ваш ответ..." required/>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Отчество</h1>
                <input className=" has-text-weight-bold input is-medium" type="text" name="отчество" placeholder="Ваш ответ..." required/>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Страна</h1>
                <input className=" has-text-weight-bold input is-medium" type="text" name="страна" placeholder="Ваш ответ..." required/>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Область/район</h1>
                <input className=" has-text-weight-bold input is-medium" type="text" name="область" placeholder="Ваш ответ..." required/>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Город</h1>
                <input className=" has-text-weight-bold input is-medium" type="text" name="город" placeholder="Ваш ответ..." required/>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Улица, номер дома, номер квартиры</h1>
                <input className=" has-text-weight-bold input is-medium" type="text" name="улица и номер квартиры" placeholder="Ваш ответ..." required/>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Индекс</h1>
                <input className=" has-text-weight-bold input is-medium" type="text" name="индекс" placeholder="Ваш ответ..." required/>
              </div>

              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Готовы ли вы отправить подарок заграницу?</h1>
                <input type="radio" name="заграницу" value="да" required/> <span className="subtitle is-6 has-text-light">Да</span>  <br/>
                <input type="radio" name="заграницу" value="нет" /> <span className="subtitle is-6 has-text-light">Нет</span>
              </div>
            </div>
            <h1 className="title is-4 has-text-light lable has-text-centered">Что бы вы хотели получить в подарок?</h1>
            <div className="sect">
              <div className="inputField">
                <input type="radio" name="тип" value="открытка" required/> <span className="subtitle is-6 has-text-light">Открытку</span>  <br/>
                <input type="radio" name="тип" value="магнит" /> <span className="subtitle is-6 has-text-light">Магнитик</span> <br/>
                <input type="radio" name="тип" value="сувенир" /> <span className="subtitle is-6 has-text-light">Сувенир</span> <br/>
                <input type="radio" name="тип" value="сюрприз" /> <span className="subtitle is-6 has-text-light">Пусть это будет сюрприз!</span>
              </div>
            </div>
            <div className="submit">
              <button className="button is-info send-button is-outlined" type="submit">Отправить анкету</button>
            </div>
          </form>
        </div>
        <div className="has-text-light has-text-centered footer">Made by DucanKir, 2019</div>
      </div>
    )

  }

}

export default Home
