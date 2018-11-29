<template>
  <div class="container">
    <div class="filter-container">    
      <div class="filter-container__title">
        <h2>De Olho nas Metas</h2>
      </div>
      <div class="filter-container__content">
          <p>O Programa De Olho nas Metas é a plataforma online que permite à população acompanhar, semestralmente, as metas que foram estabelcidas
          sob cada distrito de São Paulo está cumprindo os compromissos pactuados no Programa de Metas.</p>
          <p>Para poder acompanhar as metas selecione abaixo, o distrito que você deseja:</p>
      </div>
      <SearchFilter></SearchFilter>
    </div>
  </div>
</template>

<script>

  import SearchFilter from '@/containers/filters/'

export default {
  name: 'app',

  components: {
    SearchFilter
  }
}
</script>

<style lang="scss">
.container {
  width: 1360px;
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 768px){
    width: 100%;
  }
}
</style>
