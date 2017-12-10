<template>
  <div class="box1">
    <gt-card>
      <p style="padding:20px;">
          赛事速看系列摘取职业比赛中全场精华，对决关键深度剖析，
          大神操作一览无遗，LPL职业赛场上的赛场亮点，看五分钟就不会错过。
      </p>
    </gt-card>
    <gt-card>
      <gt-card-header>
          <span slot="left">头部标题</span>
          <span slot="right">
            <gt-icon icon="lajixiang"></gt-icon>
          </span>
      </gt-card-header>
      <gt-card-content class="content">
        <img src="../assets/img/ing.jpg" alt="">
        <p style="padding:20px;">
          中国队主帅里皮大量启用年轻球员，
          23人名单中包含了6名23岁以下球员
          ，而这6名U23球员在首战韩国的比赛中全部首发亮相
        </p>
      </gt-card-content>
      <gt-card-footer>
          <span slot="left">
            <gt-icon icon="gouwuchetianjia" size="45"></gt-icon>
          </span>
          <span slot="right">2017-12-9</span>
      </gt-card-footer>
    </gt-card>
  </div>
</template>

<style lang="scss">
  .content{
    img{
      width:100%;
    }
  }
</style>