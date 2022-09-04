import React, {FC, useState} from 'react';
import styles from './CommonPage.module.scss';

const CommonPage: FC = () => {
  const [isFirstAccordionOpen, setFirstAccordionOpened] = useState(false);
  const [isSecondAccordionOpen, setSecondAccordionOpened] = useState(false);
  const [isThirdAccordionOpen, setThirdAccordionOpened] = useState(false);
  const [isFourthAccordionOpen, setFourthAccordionOpened] = useState(false);
  const [isFifthAccordionOpen, setFifthAccordionOpened] = useState(false);
  const [isSixthAccordionOpen, setSixthAccordionOpened] = useState(false);
  const [isSeventhAccordionOpen, setSeventhAccordionOpened] = useState(false);

  return (
    <div className={styles['main']}>
      <header className={styles['header-block']}>
        <a href="/" className={styles['header-block-logo']}>
          <img src="images/logo.svg" alt="logo" />
        </a>
        <div className={styles['header-block-links']}>
          <a href="#" className={styles['header-block-link']}>Контакты</a>
          <a href="#" className={styles['header-block-link']}>Стать партнером</a>
        </div>
      </header>
      <section className={styles['navbar-block']}>
        <div className={styles['navbar-block-catalog']}>
          <img src="images/hamburger.svg" alt="hamburger" className={styles['navbar-block-catalog-image']}/>
          <span className={styles['navbar-block-catalog-text']}>Каталог</span>
        </div>
        <div className={styles['navbar-block-search']}>
          <label htmlFor="search" className={styles['navbar-block-search-label']}>
            <img src="images/search.svg" alt="search" />
          </label>
          <input placeholder="Я ищу..." id="search" type="text" className={styles['navbar-block-search-input']} />
          <button className={styles['navbar-block-search-button']} >Найти</button>
        </div>
        <div className={styles['navbar-block-list']}>
          <div className={styles['navbar-block-item']}>
            <img src="images/open.svg" alt="open" />
          </div>
          <div className={styles['navbar-block-item']}>
            <img src="images/basket.svg" alt="open" />
          </div>
        </div>
      </section>
      <section className={styles['main-block']}>
        <div className={styles['main-block-info']}>
          <h1 className={styles['main-block-title']}>Фулфилмент для маркетплейсов</h1>
          <span className={styles['main-block-description']}>
            Продавайте на всех маркетплейсах с одного склада Ozon, Wildberries, Яндекс.Маркет, СберМегаМаркет,
            AliExpress и Леруа Мерлен.
          </span>
          <a href="#" className={styles['main-block-button']}>
            <span className={styles['main-block-button-text']}>Начать продавать</span>
            <img src="images/white_arrow_right.svg" alt="arrow" />
          </a>
          <a href='#' className={styles['main-block-link']}>
            <img src="images/play.svg" alt="play" className={styles['main-block-link-image']} />
            <span>Видеопрезентация нашего сервиса</span>
          </a>
        </div>
        <div className={styles['main-block-image-wrapper']}>
          <img src="images/main.svg" alt="main" className={styles['main-block-image']} />
        </div>
      </section>
      <section className={styles['market-block']}>
        <div>
          <img src="images/main_two.png" alt="main_two" className={styles['market-block-image']} />
        </div>
        <div className={styles['market-block-info']}>
          <img src="images/atom.svg" alt="atom" className={styles['market-block-atom']} />
          <h2>Все маркетплейсы в одном кабинете</h2>
          <span className={styles['main-block-description']}>
            Работайте с маркетплейсами и другими каналами продаж на одной площадке. Это поможет контролировать все
            остатки товаров, средний чек, процент выкупа и доставку заказов.
          </span>
        </div>
      </section>
      <section className={styles['market-block']}>
        <div className={styles['market-block-info']}>
          <img src="images/date.svg" alt="date" className={styles['market-block-atom']} />
          <h2>Следите за показателями продаж</h2>
          <span className={styles['main-block-description']}>
            Отслеживайте динамику, прогнозы и товарооборот со всех каналов продаж. Контролируйте остатки товаров и
            следите за статусами заказов в едином личном кабинете.
          </span>
        </div>
        <div>
          <img src="images/graphic.svg" alt="main_two" className={styles['market-block-graphic']} />
        </div>
      </section>
      <section className={styles['market-block']}>
        <div>
          <img src="images/main_three.webp" alt="main_three" className={styles['market-block-fbs']} />
        </div>
        <div className={styles['market-block-info']}>
          <div className={styles['market-block-images']}>
            <img src="images/fbs.svg" alt="fbs" className={styles['market-block-fbs']} />
            <img src="images/question.svg" alt="question" className={styles['market-block-question']} />
          </div>
          <h2>Работайте по схеме FBS</h2>
          <span className={styles['main-block-description']}>
            Наши интеграции с маркетплейсами позволяют работать по схеме FBS. Это позволит хранить товар на одном складе
            и продавать на всех маркетплейсах со склада Кактус, не замораживая сток и деньги.
          </span>
          <a href="#" className={styles['market-block-link']}>
            <span>Подробнее</span>
            <img src="images/purple_arrow_right.svg" alt="arrow" />
          </a>
        </div>
      </section>
      <section className={styles['market-block']}>
        <div>
          <img src="images/main_six.svg" alt="main_six" className={styles['market-block-image']} />
        </div>
        <div className={styles['market-block-info']}>
          <h2>Один склад для всех каналов продаж</h2>
          <span className={styles['main-block-description']}>
            Используйте единый склад для интернет-магазина и маркетплейсов. Это позволит иметь постоянный доступ к
            стоку и не замораживать остатки на складах маркетплейсов.
          </span>
        </div>
      </section>
      <section className={styles['market-block']}>
        <div className={styles['market-block-info']}>
          <h2>Фулфилмент</h2>
          <span className={styles['main-block-description']}>
            Фулфилмент возьмет на себя заботы хранения, упаковки и доставки товаров, поможет расширить каналы
            продаж и сократить операционные расходы.
          </span>
          <a href="#" className={styles['main-block-button']}>
            <span className={styles['main-block-button-text']}>Узнать подробнее</span>
            <img src="images/white_arrow_right.svg" alt="arrow" />
          </a>
        </div>
        <div>
          <img src="images/main_five.webp" alt="main_five" className={styles['market-block-image-five']} />
        </div>
      </section>
      <section className={styles['market-block']}>
        <div className={styles['market-block-info']}>
          <img src="images/book.svg" alt="fbs" className={styles['market-block-book']} />
          <h2>Минимальный порог входа</h2>
          <span className={styles['main-block-description']}>
            Независимо от величины ассортимента, достаточно одной позиции товара, чтобы начать продавать на
            маркетплейсах.
          </span>
        </div>
        <div>
          <img src="images/main_four.svg" alt="main_four" className={styles['market-block-fbs']} />
        </div>
      </section>
      <section className={styles['news-block']}>
        <div className={styles['news-block-container']}>
          <div className={styles['news-block-images']}>
            <div className={styles['news-block-image-wrapper']}>
              <img src="images/atom_big.svg" alt="atom" />
            </div>
            <div className={styles['news-block-image-wrapper']}>
              <img src="images/date_big.svg" alt="date" />
            </div>
            <div className={styles['news-block-image-wrapper']}>
              <img src="images/fbs_big.svg" alt="fbs" />
            </div>
            <div className={styles['news-block-image-wrapper']}>
              <img src="images/book_big.svg" alt="book" />
            </div>
          </div>
          <div className={styles['news-block-info']}>
            <h2 className={styles['news-block-title']}>Новые возможности для вашего бизнеса</h2>
            <div className={styles['news-block-description-wrapper']}>
            <span className={styles['news-block-description']}>
              Работайте с разными маркетплейсами через единый личный кабинет и отслеживайте аналитику продаж.
              Cхема FBS позволит иметь постоянный доступ к товару. Достаточно одной позиции товара,чтобы начать
              продавать на маркетплейсах.
            </span>
            </div>
            <a href="#" className={styles['news-block-link']}>
              <span className={styles['news-block-link-text']}>Оставить заявку</span>
            </a>
          </div>
        </div>
      </section>
      <section className={styles['markets-block']}>
        <div className={styles['markets-block-container']}>
          <div className={styles['markets-block-info']}>
            <h2 className={styles['markets-block-title']}>Расширьте каналы продаж</h2>
            <span className={styles['markets-block-description']}>
              Используйте единый сток чтобы продавать одновременно в интернет-магазине и на маркетплейсах, а также на
              экспорт по всему миру.
            </span>
            <a href="#" className={styles['markets-block-link']}>
              <span className={styles['markets-block-link-text']}>Подробнее</span>
              <img src="images/white_arrow_right.svg" alt="arrow" />
            </a>
          </div>
          <div className={styles['markets-block-images']}>
            <img src="images/ozon.svg" alt="ozon" className={styles['markets-block-image']} />
            <img src="images/wild.svg" alt="wild" className={styles['markets-block-image']} />
            <img src="images/yandex.svg" alt="yandex" className={styles['markets-block-image']} />
            <img src="images/sber.svg" alt="sber" className={styles['markets-block-image']} />
            <img src="images/ali.svg" alt="ali" className={styles['markets-block-image']} />
            <img src="images/leroy.svg" alt="leroy" className={styles['markets-block-image']} />
          </div>
        </div>
      </section>
      <section className={styles['price-block']}>
        <h2 className={styles['price-block-title']}>Стоимость фулфилмента</h2>
        <div className={styles['price-block-button-wrapper']}>
          <a href="#" className={styles['price-block-button']}>Полный прайс</a>
        </div>
        <div className={styles['price-block-list']}>
          <div className={styles['price-block-item']}>
            <div className={styles['price-block-item-text']}>
              <h4>Ручная выгрузка</h4>
              <span className={styles['price-block-item-description']}>Ручная выгрузка коробов при поставке валом</span>
            </div>
            <div className={styles['price-block-item-text']}>
              <h4 className={styles['price-block-item-title']}>49,5₽</h4>
              <span className={styles['price-block-item-description']}>короб/грузовое место</span>
            </div>
          </div>
          <div className={styles['price-block-item']}>
            <div className={styles['price-block-item-text']}>
              <h4>Поштучный прием</h4>
              <span className={styles['price-block-item-description']}>
                Приём поставки сканированием ШК и размещение на склад (поштучный пересчет, визуальный осмотр, проведение
                по системе, размещение на склад)
              </span>
            </div>
            <div className={styles['price-block-item-text']}>
              <h4 className={styles['price-block-item-title']}>от 7,2₽</h4>
              <span className={styles['price-block-item-description']}>единица товара</span>
            </div>
          </div>
          <div className={styles['price-block-item']}>
            <div className={styles['price-block-item-text']}>
              <h4>Идентификация</h4>
              <span className={styles['price-block-item-description']}>
                Идентификация товара, при необходимости с запросом Заказчику (товары без шк, нечитаемым шк, при
                необходимости фотографирование товара, обработка ответа заказчика, заведение в систему, инициация
                печати шк)
              </span>
            </div>
            <div className={styles['price-block-item-text']}>
              <h4 className={styles['price-block-item-title']}>33₽</h4>
              <span className={styles['price-block-item-description']}>единица товара</span>
            </div>
          </div>
          <div className={styles['price-block-item']}>
            <div className={styles['price-block-item-text']}>
              <h4>Подбор заказа</h4>
              <span className={styles['price-block-item-description']}>Подбор заказа поштучно, вложение в отправление</span>
            </div>
            <div className={styles['price-block-item-text']}>
              <h4 className={styles['price-block-item-title']}>от 8,6₽</h4>
              <span className={styles['price-block-item-description']}>единица товара</span>
            </div>
          </div>
          <div className={styles['price-block-item']}>
            <div className={styles['price-block-item-text']}>
              <h4>Комплектация и упаковка заказов</h4>
              <span className={styles['price-block-item-description']}>
                Формирование грузового места: упаковка товара в короб/пакет/стрейч-пленку и отгрузка со склада
                (печать инвойса, упаковка оптимальным способом, взвешивание и снятие габаритов)
              </span>
            </div>
            <div className={styles['price-block-item-text']}>
              <h4 className={styles['price-block-item-title']}>54,5₽</h4>
              <span className={styles['price-block-item-description']}>грузовое место</span>
            </div>
          </div>
          <div className={styles['price-block-item']}>
            <div className={styles['price-block-item-text']}>
              <h4>Отгрузка заказа на маркетплейс</h4>
              <span className={styles['price-block-item-description']}>
                Дополнительная обработка заказа согласно правилам маркетплейса
              </span>
            </div>
            <div className={styles['price-block-item-text']}>
              <h4 className={styles['price-block-item-title']}>от 12,1₽</h4>
              <span className={styles['price-block-item-right-description']}>заказ</span>
            </div>
          </div>
          <div className={styles['price-block-item']}>
            <div className={styles['price-block-item-text']}>
              <h4>Приёмка возвращенных отправлений</h4>
              <span className={styles['price-block-item-description']}>
                Приёмка возвращенных отправлений
              </span>
            </div>
            <div className={styles['price-block-item-text']}>
              <h4 className={styles['price-block-item-title']}>от 8,3₽</h4>
              <span className={styles['price-block-item-description']}>единица товара</span>
            </div>
          </div>
          <div className={styles['price-block-item']}>
            <div className={styles['price-block-item-text']}>
              <h4>Забор возврата с маркетплейса</h4>
              <span className={styles['price-block-item-description']}>
                Забор возврата с маркетплейса
              </span>
            </div>
            <div className={styles['price-block-item-text']}>
              <h4 className={styles['price-block-item-title']}>от 33₽</h4>
              <span className={styles['price-block-item-description']}>один заказ</span>
            </div>
          </div>
          <div className={styles['price-block-item']}>
            <div className={styles['price-block-item-text']}>
              <h4>Хранение товара в зоне штучного товара</h4>
              <span className={styles['price-block-item-description']}>
                Хранение товара в зоне штучного товара
              </span>
            </div>
            <div className={styles['price-block-item-text']}>
              <h4 className={styles['price-block-item-title']}>от 0,6₽</h4>
              <span className={styles['price-block-item-description']}>единица товара/сутки</span>
            </div>
          </div>
          <div className={styles['price-block-item']}>
            <div className={styles['price-block-item-text']}>
              <h4>Хранение товара в зоне паллетного хранения</h4>
              <span className={styles['price-block-item-description']}>
                Хранение товара в зоне паллетного хранения
              </span>
            </div>
            <div className={styles['price-block-item-text']}>
              <h4 className={styles['price-block-item-title']}>28,6₽</h4>
              <span className={styles['price-block-item-description']}>паллет/сутки</span>
            </div>
          </div>
          <div className={styles['price-block-item']}>
            <div className={styles['price-block-item-text']}>
              <h4>Стикерование</h4>
              <span className={styles['price-block-item-description']}>
                Штрихкодирование товара (изготовление стикера, оклейка)
              </span>
            </div>
            <div className={styles['price-block-item-text']}>
              <h4 className={styles['price-block-item-title']}>6,6₽</h4>
              <span className={styles['price-block-item-description']}>единица товара</span>
            </div>
          </div>
        </div>
        <div className={styles['price-block-bottom']}>
          <span className={styles['price-block-bottom-text']}>
            * Стоимость может изменится в зависимости от габаритов и веса товара.
          </span>
          <span className={styles['price-block-bottom-text']}>
            ** Тарифы указаны без учета НДС - размер НДС определяется согласно законодательству РФ.
          </span>
          <a href="#" className={styles['price-block-bottom-link']}>Скачать полный прайс</a>
        </div>
        <div className={styles['price-block-bottom-button-wrapper']}>
          <a href="#" className={styles['price-block-button']}>
            Рассчитать стоимость
            <img src="images/purple_arrow_right.svg" alt="arrow" className={styles['price-block-button-arrow']} />
          </a>
        </div>
      </section>
      <section className={styles['schemas-block']}>
        <h2 className={styles['schemas-block-title']}>Схема работы</h2>
        <div className={styles['schemas-block-cards']}>
          <div className={styles['schemas-block-card']}>
            <div className={styles['schemas-block-card-image-wrapper']}>
              <img src="images/schema_one.svg" alt="schema_one" className={styles['schemas-block-card-image']} />
            </div>
            <div className={styles['schemas-block-card-number-wrapper']}>
              <span className={styles['schemas-block-card-number-first']}>1</span>
            </div>
            <h4 className={styles['schemas-block-card-title']}>Регистрация и обучение</h4>
            <span className={styles['schemas-block-card-description']}>
              Помогаем с регистрацией на маркетплейсах. Обучаем правильно заводить каталоги и карточки товаров,
              разъясняем особенности.
            </span>
          </div>
          <div className={styles['schemas-block-card']}>
            <div className={styles['schemas-block-card-image-wrapper']}>
              <img src="images/schema_two.svg" alt="schema_two" className={styles['schemas-block-card-image-small']} />
            </div>
            <div className={styles['schemas-block-card-number-wrapper']}>
              <span className={styles['schemas-block-card-number']}>2</span>
            </div>
            <h4 className={styles['schemas-block-card-title']}>Прием товара</h4>
            <span className={styles['schemas-block-card-description']}>
              Принимаем ваш товар на складе Кактуса. При необходимости маркируем и готовим товар к продаже.
            </span>
          </div>
          <div className={styles['schemas-block-card']}>
            <div className={styles['schemas-block-card-image-wrapper']}>
              <img src="images/schema_three.svg" alt="schema_three" className={styles['schemas-block-card-image-small']} />
            </div>
            <div className={styles['schemas-block-card-number-wrapper']}>
              <span className={styles['schemas-block-card-number-last']}>3</span>
            </div>
            <h4 className={styles['schemas-block-card-title']}>Обработка и доставка заказов</h4>
            <span className={styles['schemas-block-card-description']}>
              Комплектуем, упаковываем и отправляем заказ в пункт приема маркетплейса.
            </span>
          </div>
        </div>
      </section>
      <section className={styles['outsource-block']}>
        <div className={styles['outsource-block-container']}>
          <h2 className={styles['outsource-block-title']}>Работайте со складом на аутсорсе</h2>
          <span className={styles['outsource-block-description']}>
          Мы возьмем на себя всю работу со складом, чтобы у вас<br /> появилось больше времени на развитие бизнеса.
        </span>
          <div className={styles['outsource-block-table']}>
            <div className={styles['outsource-block-item']}>
              <div className={styles['outsource-block-item-left']} />
              <div className={styles['outsource-block-item-center']}>
                <h4>Через Кактус</h4>
              </div>
              <div className={styles['outsource-block-item-right']}>
                <h4>Самостоятельно</h4>
              </div>
            </div>
            <div className={styles['outsource-block-item']}>
              <div className={styles['outsource-block-item-left']}>
                <h3>Личный кабинет</h3>
              </div>
              <div className={styles['outsource-block-item-center']}>
                <span className={styles['outsource-block-item-center-text']}>
                  Один личный кабинет для всех маркетплейсов
                </span>
              </div>
              <div className={styles['outsource-block-item-right']}>
                <span className={styles['outsource-block-item-right-text']}>
                  Личный кабинет для каждого маркетплейса
                </span>
              </div>
            </div>
            <div className={styles['outsource-block-item']}>
              <div className={styles['outsource-block-item-left']}>
                <h3>Работа с маркетплейсами</h3>
              </div>
              <div className={styles['outsource-block-item-center']}>
                <span className={styles['outsource-block-item-center-text']}>
                  Достаточно отгрузить партию товара на склад Кактуса
                </span>
              </div>
              <div className={styles['outsource-block-item-right']}>
                <span className={styles['outsource-block-item-right-text']}>
                  Необходимо отгрузить партию товара в каждый маркетплейс
                </span>
              </div>
            </div>
            <div className={styles['outsource-block-item']}>
              <div className={styles['outsource-block-item-left']}>
                <h3>Сборка и упаковка заказов</h3>
              </div>
              <div className={styles['outsource-block-item-center']}>
                <span className={styles['outsource-block-item-center-text']}>
                  Кактус соберет, упакует и доставит заказ согласно требованиям маркетплейса
                </span>
              </div>
              <div className={styles['outsource-block-item-right']}>
                <span className={styles['outsource-block-item-right-text']}>
                  Вы сами собираете, упаковываете и доставляете заказ
                </span>
              </div>
            </div>
            <div className={styles['outsource-block-item']}>
              <div className={styles['outsource-block-item-left']}>
                <h3>Затраты на складские операции</h3>
              </div>
              <div className={styles['outsource-block-item-center']}>
                <span className={styles['outsource-block-item-center-text']}>
                  Вы платите только за услуги оказанные по факту
                </span>
              </div>
              <div className={styles['outsource-block-item-right']}>
                <span className={styles['outsource-block-item-right-text']}>
                  Необходимо платить за аренду склада и зарплату сотрудникам вне зависимости от продаж
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['accordion-block']}>
        <h2 className={styles['accordion-block-title']}>Еще раз о самом главном</h2>
        <div className={styles['accordion-block-list']}>
          <div className={styles['accordion-block-item-wrapper']}>
            <div onClick={() => setFirstAccordionOpened(!isFirstAccordionOpen)} className={styles['accordion-block-item']}>
              <span className={styles['accordion-block-item-title']}>Сколько это стоит?</span>
              <img src="images/plus.svg" alt="plus" className={styles['accordion-block-item-plus']} />
            </div>
            {isFirstAccordionOpen && (
              <div className={styles['accordion-block-item-info']}>
              <span className={styles['accordion-block-item-info-text']}>
                Цены считаются исходя из габаритов товара. Вы платите только за фактически оказанные складские услуги,
                а именно: хранение, комплектация, упаковка, доставка. Оставте заявку, чтобы узнать подробнее.
              </span>
                <a href="#" className={styles['accordion-block-item-info-link']}>
                  Оставить заявку
                </a>
              </div>
            )}
          </div>
          <div className={styles['accordion-block-item-wrapper']}>
            <div onClick={() => setSecondAccordionOpened(!isSecondAccordionOpen)} className={styles['accordion-block-item']}>
              <span className={styles['accordion-block-item-title']}>Работа ведется в моем личном кабинете маркетплейса?</span>
              <img src="images/plus.svg" alt="plus" className={styles['accordion-block-item-plus']} />
            </div>
            {isSecondAccordionOpen && (
              <div className={styles['accordion-block-item-info']}>
              <span className={styles['accordion-block-item-info-text']}>
                Взаиморасчеты осуществляются между продавцом и маркетплейсом, мы не участвуем в этом процессе.
              </span>
              </div>
            )}
          </div>
          <div className={styles['accordion-block-item-wrapper']}>
            <div onClick={() => setThirdAccordionOpened(!isThirdAccordionOpen)} className={styles['accordion-block-item']}>
              <span className={styles['accordion-block-item-title']}>Какой товар лучше продавать на маркетплейсах?</span>
              <img src="images/plus.svg" alt="plus" className={styles['accordion-block-item-plus']} />
            </div>
            {isThirdAccordionOpen && (
              <div className={styles['accordion-block-item-info']}>
              <span className={styles['accordion-block-item-info-text']}>
                Мы работаем с разными категориями, но у разных поставщиков товар продается по разному. Работа с нами
                поможет делегировать складские и бумажные процессы и уделять  время равитию бизнеса.
              </span>
              </div>
            )}
          </div>
          <div className={styles['accordion-block-item-wrapper']}>
            <div onClick={() => setFourthAccordionOpened(!isFourthAccordionOpen)} className={styles['accordion-block-item']}>
              <span className={styles['accordion-block-item-title']}>Что такое FBS?</span>
              <img src="images/plus.svg" alt="plus" className={styles['accordion-block-item-plus']} />
            </div>
            {isFourthAccordionOpen && (
              <div className={styles['accordion-block-item-info']}>
              <span className={styles['accordion-block-item-info-text']}>
                FBS (Fulfillment by Seller). Это схема работы с маркетплейсами, при которой продавец хранит товары на
                складе Кактуса, когда поступает заказ, мы его собираем, маркируем, упаковываем и передаем курьеру
                или в пункт приема маркетплейса. То есть, физически товары находятся на складе Кактуса, а
                на маркетплейсе только витрина — карточки товаров.
              </span>
                <img src="images/fbs_list.svg" alt="fbs_list" className={styles['accordion-block-item-info-fbs']}/>
              </div>
            )}
          </div>
          <div className={styles['accordion-block-item-wrapper']}>
            <div onClick={() => setFifthAccordionOpened(!isFifthAccordionOpen)} className={styles['accordion-block-item']}>
              <span className={styles['accordion-block-item-title']}>Вы берете процент от продаж на маркетплейсах?</span>
              <img src="images/plus.svg" alt="plus" className={styles['accordion-block-item-plus']} />
            </div>
            {isFifthAccordionOpen && (
              <div className={styles['accordion-block-item-info']}>
              <span className={styles['accordion-block-item-info-text']}>
                Нет, мы не берем комиссию от продаж на маркетпейсах.
              </span>
              </div>
            )}
          </div>
          <div className={styles['accordion-block-item-wrapper']}>
            <div onClick={() => setSixthAccordionOpened(!isSixthAccordionOpen)} className={styles['accordion-block-item']}>
              <span className={styles['accordion-block-item-title']}>Как ускорить регистрацию на маркетплейсах?</span>
              <img src="images/plus.svg" alt="plus" className={styles['accordion-block-item-plus']} />
            </div>
            {isSixthAccordionOpen && (
              <div className={styles['accordion-block-item-info']}>
              <span className={styles['accordion-block-item-info-text']}>
                У нас есть прямые контакты с маркетплейсами , но они не повлияют на ускорение регистрации.
              </span>
              </div>
            )}
          </div>
          <div className={styles['accordion-block-item-wrapper']}>
            <div onClick={() => setSeventhAccordionOpened(!isSeventhAccordionOpen)} className={styles['accordion-block-item']}>
              <span className={styles['accordion-block-item-title']}>Вы занимаетесь продвижением нашего товара на маркетплейсах?</span>
              <img src="images/plus.svg" alt="plus" className={styles['accordion-block-item-plus']} />
            </div>
            {isSeventhAccordionOpen && (
              <div className={styles['accordion-block-item-info']}>
              <span className={styles['accordion-block-item-info-text']}>
                Сейчас мы не занимаемся продвижением товара на маркетплейсах, но это направление нам интересно и мы работаем над ним.
              </span>
              </div>
            )}
          </div>
        </div>
        <h3 className={styles['accordion-block-text']}>Продавайте на всех маркетплейсах с одного склада</h3>
        <div className={styles['accordion-block-button-wrapper']}>
          <a href="#" className={styles['accordion-block-button']}>
            Начать продавать
            <img src="images/purple_arrow_right.svg" alt="arrow" className={styles['accordion-block-button-arrow']} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default CommonPage;
