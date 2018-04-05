<template>
    <div id="app">
        <!-- CONTACTS -->
        <div class="contacts">
            <p>
                <i class="fa fa-phone"></i>
                +38 050 32 45 555
            </p>
            <p>
                <i class="fa fa-envelope"></i>
                mail@fitness.org
            </p>
            <p>
                <i class="fa fa-map-marker-alt"></i>
                г. Киев, ул.Центр, дом 1
            </p>
            <p>
                <i class="fa fa-clock"></i>
                Пн-Сб 9:00-22:00, Вс 10:00-22:00
            </p>
            <div class="social-links">
                <a href="#">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                    <i class="fab fa-vk"></i>
                </a>
                <a href="#">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="#">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </div>
        <!-- END CONTACTS -->

        <!-- NAVBAR -->
        <div class="navbar">
            <div class="navbar-brand">
                <a href="#">
                    <img src="/images/logo.png" >
                </a>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        О нас
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        Услуги
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Расписание
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Цены
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Команда
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Контакты
                    </a>
                </li>
            </ul>
        </div>
        <!-- END NAVBAR -->

        <!-- FITNESS CENTER -->
        <div class="fitness-center text-center">
            <img src="/images/background-1.jpg">
            <div class="content">
                <h1>Фитнесс Центр</h1>
                <h6>Начните свой путь к здоровому образу жизни с помощью наших персонализированных программ</h6>
                <button type="button" class="btn btn-primary btn-lg">Записаться</button>
            </div>
        </div>
        <!-- END FITNESS CENTER -->

        <!-- SERVICES -->
        <div class="container">
            <div class="hr-text">
                <span>Услуги</span>
            </div>

            <div class="services">
                <div class="service">
                    <img src="/images/trainer.png">
                    <div class="title">
                        <h5>Личный тренер</h5>
                    </div>
                    <div class="description">
                        <p>235грн</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi condimentum nunc vulputate molestie.</p>
                        <button class="btn btn-outline btn-md">Подробнее</button>
                    </div>
                </div>

                <div class="service">
                    <img src="/images/jim.png">
                    <div class="title">
                        <h5>Тренажерный зал</h5>
                    </div>
                    <div class="description">
                        <p>330грн</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi condimentum nunc vulputate molestie.</p>
                        <button class="btn btn-outline btn-md">Подробнее</button>
                    </div>
                </div>

                <div class="service">
                    <img src="/images/group.png">
                    <div class="title">
                        <h5>Групповые занятия</h5>
                    </div>
                    <div class="description">
                        <p>180грн</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi condimentum nunc vulputate molestie.</p>
                        <button class="btn btn-outline btn-md">Подробнее</button>
                    </div>
                </div>

                <div class="service">
                    <img src="/images/boxing.png">
                    <div class="title">
                        <h5>Бокс</h5>
                    </div>
                    <div class="description">
                        <p>210грн</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi condimentum nunc vulputate molestie.</p>
                        <button class="btn btn-outline btn-md">Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- END SERVICES -->

        <!-- ABOUT US -->
        <div class="about-us text-center">
            <img src="/images/background-2.png">
            <div class="content">
                <div class="container">
                    <div class="hr-text">
                        <span>О нас</span>
                    </div>
                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi condimentum nunc vulputate molestie.</p>

                    <div class="advantages">
                        <div class="advantage">
                           <img class="icon" src="/images/icons/dumbbell.png">
                           <p>Эксклюзивное новое оборудование</p>
                        </div>
                        <div class="advantage">
                            <img class="icon" src="/images/icons/football-whistle-of-referee.png">
                           <p>Индивидуальный подход к тренеровкам</p>
                        </div>
                        <div class="advantage">
                            <img class="icon" src="/images/icons/discount-sticker-with-percentage.png">
                            <p>Скидочные программы для постоянных клиентов</p>
                        </div>
                        <div class="advantage">
                            <img class="icon" src="/images/icons/roll-mat-variant.png">
                            <p>Мы предоставляем свой спортинвентарь</p>
                        </div>
                    </div>

                    <div class="video">
                        <div class="youtube" id="EykWcFEtFqo" style="width:800px; height:480px"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END ABOUT US -->

        <!-- TRAINERS -->
        <div class="container">
            <div class="hr-text">
                <span>Тренера</span>
            </div>
            <div class="trainers">
                <div class="trainer">
                    <a href="#">
                        <span class="image">
                            <img src="/images/trainers/1.png">
                        </span>
                        <span>John Doe</span>
                    </a>
                    <p>Главный тренер</p>
                    <p>Lorem ipsum dolor, consectetur adipiscing elit. Vestibulum tempus posuere.</p>
                </div>

                <div class="trainer">
                    <a href="#">
                        <span class="image">
                            <img src="/images/trainers/2.png">
                        </span>
                        <span>Monika Smith</span>
                    </a>
                    <p>Тренер</p>
                    <p>Curabitur diam neque, tempus nibh, feugiat quam. Donec ac ut nunc posuere.</p>
                </div>

                <div class="trainer">
                    <a href="#">
                        <span class="image">
                            <img src="/images/trainers/3.png">
                        </span>
                        <span>Ross Bing</span>
                    </a>
                    <p>Тренер</p>
                    <p>Cras vitae porta sodales mauris. Vestibulum tellus leo, sapien ornare a.</p>
                </div>

                <div class="trainer">
                    <a href="#">
                        <span class="image">
                            <img src="/images/trainers/4.png">
                        </span>
                        <span>Kate Hoffman</span>
                    </a>
                    <p>Тренер</p>
                    <p>Nam rutrum risus eu aliquet. Fusce tincidunt tempus pretium.</p>
                </div>
            </div>
        </div>
        <!-- END TRAINERS -->

        <!-- FIRST LESSON -->
        <div class="first-lesson text-center">
            <img src="/images/background-3.jpg">
            <div class="content">
                <h3>Первое занятие у нас бесплатно</h3>
                <button type="button" class="btn btn-lg btn-outline">Записаться</button>
            </div>
        </div>
        <!-- END FIRST LESSON -->

        <!-- TESTIMONIALS -->
        <div class="container">
            <div class="hr-text">
                <span>Отзывы</span>
            </div>

            <div class="testimonials">
                <div class="testimonial">
                    <div class="testimonial-avatar">
                        <img src="/images/trainers/1.png">
                    </div>
                    <div class="testimonial-text">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor velit sed ultrices fermentum. Phasellus at nisl dictum, facilisis metus id, dignissim tortor. Suspendisse elementum lacus ac nibh placerat, in aliquam nulla."</p>
                    </div>
                    <div class="name">
                        <h6>
                            <i class="fa fa-quote-left"></i>
                            John Doe
                        </h6>
                    </div>
                </div>

                <div class="testimonial">
                    <div class="testimonial-avatar">
                        <img src="/images/trainers/2.png">
                    </div>
                    <div class="testimonial-text">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor velit sed ultrices fermentum. Phasellus at nisl dictum, facilisis metus id, dignissim tortor. Suspendisse elementum lacus ac nibh placerat, in aliquam nulla."</p>
                    </div>
                    <div class="name">
                        <h6>
                            <i class="fa fa-quote-left"></i>
                            Monika Smith
                        </h6>
                    </div>
                </div>

                <div class="testimonial">
                    <div class="testimonial-avatar">
                        <img src="/images/trainers/3.png">
                    </div>
                    <div class="testimonial-text">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor velit sed ultrices fermentum. Phasellus at nisl dictum, facilisis metus id, dignissim tortor. Suspendisse elementum lacus ac nibh placerat, in aliquam nulla."</p>
                    </div>
                    <div class="name">
                        <h6>
                            <i class="fa fa-quote-left"></i>
                            Ross Bing
                        </h6>
                    </div>
                </div>
            </div>

            <div class="arrows">
                <div class="arrow arrow-left">
                    <img src="/images/icons/left-angle-bracket.png">
                </div>
                <div class="arrow arrow-right">
                    <img src="/images/icons/play-symbol.png">
                </div>
            </div>
        </div>
        <!-- END TESTIMONIALS -->
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>