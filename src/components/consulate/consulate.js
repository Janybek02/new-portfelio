import React from 'react';

const Consuolate = () => {
    return (
        <section id="consulate">
           <div className="container">
               <div className="consulate--general">
  <h1 className="consulate--general__title">
      Получить консультацию
  </h1>
                   <div className="consulate--general__block">
                       <div className="consulate--general__b">
                           <div className="consulate--general__name">
                               <input type="text" placeholder="Имя" />
                               <input type="text" placeholder="Ваш телефон" />
                           </div>
                           <div className="consulate--general__name1">
                               <input type="text" placeholder="Фамилия" />
                               <input type="text" placeholder="Ваш e-mail" />
                           </div>
                       </div>
                       <button>Отправить</button>
                   </div>
               </div>
           </div>
        </section>
    );
};

export default Consuolate;