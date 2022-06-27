<template>
  <div class="box">
    <div class="list">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>

    </div>
    <div class="top">
      <img class="login-top"
           src="../../assets/images/login-top.png"
           alt="">
      <div class="top-text">
        <div class="top-text-m"> MirroringCastscreen</div>
        <div></div>
        <div class="top-text-r">Real-timescreensharing</div>
      </div>
      <img class="watchTV"
           src="../../assets/images/人物-电视 (2).png"
           alt="">

    </div>
    <div class="mian">

    </div>

  </div>
</template>

<style >
.box {
  overflow: hidden;
  border-radius: 20px;
}
.list {
  font-size: 3rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 100vh;
  background: #7165fa;
}
.item:nth-of-type(odd) {
  background: #7b70fe;
}
/* 24/20 */
.top {
  position: absolute;
  top: 4.4rem;
  left: 2.4rem;
}
.top .login-top {
  margin-top: 10px;
  margin-left: 0.8rem;
}
.top .top-text {
  font-size: 1.6rem;
  position: absolute;
  top: 4.8rem;
  left: 2.4rem;
  color: #fff;
}
.top-text-m {
  font-weight: 700;
}
.watchTV {
  position: absolute;
  top: 10rem;
}
</style>