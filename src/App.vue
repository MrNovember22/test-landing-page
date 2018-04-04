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
    <div class="background-picture text-center" style="background-image: url(/images/background-1.jpg);">
      <div class="col-md-6">
        <h1>Фитнесс Центр</h1>
        <h5>Начните свой путь к здоровому образу жизни с помощью наших персонализированных программ</h5>
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
            <h2>Личный тренер</h2>
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
            <h2>Тренажерный зал</h2>
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
            <h2>Групповые занятия</h2>
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
            <h2>Бокс</h2>
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

    <div class="background-picture text-center" style="background-image: url(/images/background-2.png);">
      <div class="hr-text">
        <span>О нас</span>
      </div>
    </div>
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