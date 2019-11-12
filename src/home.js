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
            <h1 className="title is-4 has-text-light lable has-text-centered">Расскжите немного о себе, чтобы ваш Дед Мороз смог выбрать подарок, подходящий именно вам</h1>
            <div className="sect">
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Расскажите о своих хобби</h1>
                <textarea className=" has-text-weight-bold input is-medium" type="text" name="хобби" placeholder="Ваш ответ..." required/>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Чем вы любите заниматься в свободное время?</h1>
                <textarea className=" has-text-weight-bold input is-medium" type="text" name="занятия" placeholder="Ваш ответ..." required/>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">У вас есть домашние животные?</h1>
                <input type="radio" name="животные" value="да" required/> <span className="subtitle is-6 has-text-light">Да</span>  <br/>
                <input type="radio" name="животные" value="нет" /> <span className="subtitle is-6 has-text-light">Нет</span>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Вы любите сладкое?</h1>
                <input type="radio" name="сладкое" value="да" required/> <span className="subtitle is-6 has-text-light">Да</span>  <br/>
                <input type="radio" name="сладкое" value="нет" /> <span className="subtitle is-6 has-text-light">Нет</span>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Есть ли у вас дети?</h1>
                <input type="radio" name="дети" value="да" required/> <span className="subtitle is-6 has-text-light">Да</span>  <br/>
                <input type="radio" name="дети" value="нет" /> <span className="subtitle is-6 has-text-light">Нет</span>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Какие книги вы предпочитаете?</h1>
                <textarea className=" has-text-weight-bold input is-medium" type="text" name="книги" placeholder="Ваш ответ..." required/>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Какие фильмы вы любите смотреть?</h1>
                <textarea className=" has-text-weight-bold input is-medium" type="text" name="фильмы" placeholder="Ваш ответ..." required/>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Вы хорошо себя вели в этом году?</h1>
                <input type="radio" name="поведение" value="да" required/> <span className="subtitle is-6 has-text-light">Да</span> <br/>
                <input type="radio" name="поведение" value="нет" /> <span className="subtitle is-6 has-text-light">Нет</span>
              </div>
              <div className="inputField">
                <h1 className="subtitle is-6 has-text-light lable">Личное сообщение Деду Морозу (можете рассказать что-то еще о себе, что вам кажется важным или просто передать привет :)</h1>
                <textarea className=" has-text-weight-bold input is-medium" type="text" name="сообщение" placeholder="Ваш ответ..." required/>
              </div>
            </div>
            <div className="submit">
              <button className="button is-info send-button is-outlined" type="submit">Отправить анкету</button>
            </div>
          </form>
        </div>
      </div>
    )

  }

}

export default Home
