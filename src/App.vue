<template>
  <div id="app">
    <div class="contacts">
      <p><i class="fa fa-phone"></i> <span class="text-orange">+38 050 32 45 555</span></p>
      <p><i class="fa fa-envelope"></i> mail@fitness.org</p>
      <p><i class="fa fa-map-marker-alt"></i> г. Киев, ул.Центр, дом 1</p>
      <p><i class="fa fa-clock"></i> Пн-Сб 9:00-22:00, Вс 10:00-22:00</p>
      <div class="social-links">
        <a href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i class="fab fa-vk text-orange"></i>
        </a>
        <a href="#">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="#">
          <i class="fab fa-instagram"></i>
        </a>
    </div>
    </div>
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
          <a class="nav-link text-orange" href="#">
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
    <div class="background-picture" style="background-image: url(/images/scott.jpg);">
    </div>
    <h1>{{ msg }}</h1>
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