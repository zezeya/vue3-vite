<template>
  <div class="home">
    <div class="top">
      <img class="arrows"
           src="../../assets/images/arrows.png"
           alt="">
      <span class="top-text">Local screencast</span>

    </div>
    <input class="search"
           type="text"
           placeholder="search">
    <div class="main">
      <img class="waaw"
           src="../../assets/images/waaw.png"
           alt="">
      <div class="main-text">
        <div>Mirror guide</div>
        <div></div>
        <div> common problem</div>
      </div>
    </div>
    <div class="slideshow">
      <div class="picture">
        <img class="pic"
             src="../../assets/images/pic.png"
             alt="">
        <div class="slideshow-text">
          <div>Picture</div>
          <div></div>
          <div>Locol screencost</div>
        </div>

      </div>

      <div class="file">
        <img class="pic-file"
             src="../../assets/images/file.png"
             alt="">
        <div class="file-text">
          <div> file</div>
          <div></div>
          <div> Locol document</div>
        </div>
      </div>
      <div class="picture">
        <img class="pic"
             src="../../assets/images/pic.png"
             alt="">
        <div class="slideshow-text">
          <div>Picture</div>
          <div></div>
          <div>Locol screencost</div>
        </div>

      </div>
    </div>
    <div class="theme">
      <img class="theme-img"
           src="../../assets/images/theme.png"
           alt="">
      <div class="theme-text">
        <div>Screen mirroring...</div>
        <div></div>
        <div>Mobile screen sharing to TV</div>
      </div>

    </div>
    <div class="footer">
      <div class="item">
        <img class="item-img"
             src="../../assets/images/11.png"
             alt="">
        <div class="item-text">Timeout</div>
      </div>
      <div class="item">
        <img class="item-img"
             src="../../assets/images/switch.png"
             alt="">
        <div class="item-text">End</div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style >
.home {
  background: #d9cbfb;
  border-radius: 20px;
  height: 100vh;
}
.top {
  padding: 4.2rem 0 2.4rem 0;
  display: flex;
}
.arrows {
  margin: 0.8rem 3.7rem;
}
.top-text {
  font-size: 2.4rem;
  text-align: center;
}
.search {
  width: 31.8rem;
  height: 6rem;
  border-radius: 20px;
  margin: 2.4rem 2rem;
  border-color: #efeffb;
  color: #fff;
  border: none;
  outline: none;
  font-size: 2rem;
  text-indent: 2rem;
  background-image: url(../../assets/images/search.png);
  background-position: 28rem;
  background-repeat: no-repeat;
}
.main {
  /* padding: 3.5rem 32.8rem; */
  width: 32.8rem;
  height: 10rem;
  background: #eceaff;
  margin: 2.4rem 2rem;
  border-radius: 60px;
  text-indent: 2rem;
  font-size: 2rem;
  position: relative;
}
.waaw {
  width: 10rem;
  height: 10rem;
  position: absolute;
  bottom: 1.8rem;
}
.main-text {
  position: absolute;
  left: 10rem;
  top: 20%;
  font-weight: 400;
  text-align: center;
}
.slideshow {
  display: flex;
  gap: 0 1rem;
  overflow-x: scroll;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 0 1.6rem;
  margin-right: 1rem;
}
.slideshow .picture {
  /* padding: 12rem 7rem; */

  width: 14rem;
  height: 18rem;
  background: #7469fc;
  border-radius: 20px;
  /* padding: 0 1.6rem; */
}
.slideshow .picture .pic {
  width: 6rem;
  height: 6rem;
  margin: 2.8rem 4rem;
}
.slideshow .picture .slideshow-text {
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  margin-top: -1rem;
}
.slideshow .file {
  width: 14rem;
  height: 18rem;
  background: #ffffff;
  border-radius: 20px;
}
.slideshow .file .pic-file {
  width: 6rem;
  height: 6rem;
  margin: 2.8rem 4rem;
}
.slideshow .file .file-text {
  font-size: 1.5rem;
  color: black;
  text-align: center;
  margin-top: -1rem;
}
.theme {
  /* margin: 13.2rem 32.8rem; */
  width: 32.8rem;
  height: 13.2rem;
  background: #fff;
  border-radius: 20px;
  margin: 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr auto;
}
.theme .theme-img {
  width: 6rem;
  height: 6rem;
  margin: 2.8rem 2.5rem;
}
.theme .theme-text {
  font-size: 1.5rem;
  text-align: center;
  margin: 3rem 0.8rem;
}
.footer .item {
  display: flex;
  float: left;
  /* padding: 5rem 13.4rem; */
  width: 13.4rem;
  background: #fff;
  margin-left: 30px;
  margin-bottom: 30px;
  border-radius: 50px;
}
.footer .item-img {
  width: 1.6rem;
  height: 1.6rem;
  margin: 1.6rem 2.4rem;
}
.footer .item-text {
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem 0.1rem;
}
</style>
