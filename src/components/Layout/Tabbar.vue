<template>
  <div class="tab-container">
    <ul>

      <router-link to="/home/layout" tag="li" active-class="active">
        <svg
          t="1552656336877"
          class="icon"
          style
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5249"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="25"
          height="200"
        >
          <path
            d="M979.84 404.544L574.272 84c-34.912-27.648-89.696-27.616-124.576 0L44.16 404.544c-13.856 10.976-16.224 31.104-5.28 44.96s30.624 16.224 44.48 5.28L96 444.416V832c0 54.944 57.888 96 108.8 96h640c50.304 0 83.2-38.592 83.2-96V445.92l11.68 8.864c5.888 4.64 13.12 6.88 20.064 6.88 9.44 0 18.912-4.16 25.216-12.16 10.976-13.856 8.768-33.984-5.12-44.96zM480 864V686.592c0-8.832 16-13.248 32-13.248s32 4.416 32 13.248V864h-64z m384-32c0 21.216-5.856 32-19.2 32H608.64c0-0.48-0.64-0.864-0.64-1.344V686.592c0-37.216-30.016-77.28-96-77.28s-96 40.064-96 77.28v176.064c0 0.48 0.864 0.864 0.864 1.344H204.8c-20.064 0-44.8-17.344-44.8-32V393.824l328.928-259.616c11.808-9.344 33.12-9.344 44.96 0L864 395.328V832z"
            active-class="active"
            p-id="5250"
          ></path>
        </svg>
        <b>首页</b>
      </router-link>

      <router-link to="/home/job" tag="li" active-class="active">
        <svg
          t="1552656430646"
          class="icon"
          style
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6171"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="25"
          height="200"
        >
          <path
            d="M512.699863 242.652607c124.275727 0 225.355985 101.080258 225.355985 225.355985S636.975591 693.364577 512.699863 693.364577 287.343878 592.284319 287.343878 468.008592s101.080258-225.355985 225.355985-225.355985m0-56.388987C357.130248 186.26362 231.054872 312.438977 231.054872 468.008592c0 155.569615 126.175356 281.744972 281.744972 281.744972 155.569615 0 281.744972-126.175356 281.744971-281.744972-0.09998-155.569615-126.175356-281.744972-281.844952-281.744972zM319.737551 834.636985h385.924624v56.388986h-385.924624zM377.526264 967.611013H647.973443v56.388987H377.526264zM483.005663 0.09998h56.388986v112.578013H483.005663zM162.808202 156.817372l39.872212-39.872213 79.604452 79.604452-39.872212 39.872213zM47.290764 437.714509h112.578012v56.388986H47.290764zM864.431166 435.91486h112.578012v56.388987H864.431166zM740.699332 195.294856l79.604452-79.604452 39.872213 39.872213-79.604452 79.604452z"
            active-class="active"
            p-id="6172"
          ></path>
        </svg>
        <b>职位</b>
      </router-link>
      <router-link tag="li" to="/home/mine" active-class="active">
        <svg
          t="1552655990893"
          class="icon"
          style
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3480"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="25"
          height="200"
          
        >
          <path
            d="M512 704c-176 0-320-144-320-320S336 64 512 64s320 144 320 320-144 320-320 320z m0-576c-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256-115.2-256-256-256z m371.2 832c-8 0-17.6-3.2-24-9.6C768 852.8 644.8 800 512 800s-256 52.8-348.8 150.4c-12.8 12.8-32 12.8-44.8 1.6-12.8-12.8-12.8-32-1.6-44.8C220.8 796.8 361.6 736 512 736s291.2 60.8 395.2 169.6c12.8 12.8 11.2 33.6-1.6 44.8-6.4 6.4-14.4 9.6-22.4 9.6z"
            active-class="active"
            p-id="3481"
          ></path>
        </svg>
        <b>我的</b>
      </router-link>

    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0
    };
  },
  methods: {
    clickHandler(index) {
      console.log(index);
      this.index = index;
    }
  },
  components: {}
};
</script>



<style lang="stylus" scoped>
@import '~@/assets/variables.styl';
@import '~@/assets/border.styl';

.tab-container {
  width: 100%;
  height: 0.49rem;
  background: #fff;
  border(1px 0 0 0);

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    li {
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      b {
        font-size: 0.1rem;
      }

      &.active b {
        color: $base-color;
      }
      &.active svg path {
        fill: $base-color;
       
      }
    }
  }
}
</style>
