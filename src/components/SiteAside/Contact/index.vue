<template>
  <ul class="contact-container">
    <li>
      <a :href="data.github" target="_blank">
        <div class="icon">
          <Icon type="github"></Icon>
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="mail"></Icon>
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">
        <div class="icon">
          <Icon type="qq"></Icon>
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img :src="data.qqQrCode" alt="">
      </div>
    </li>
    <li>
      <a href="javascript: void (0)">
        <div class="icon weixin">
          <Icon type="weixin"></Icon>
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img
          :src="data.weixinQrCode"
          alt="">
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon';
import { mapState } from 'vuex'
export default {
  components: {
    Icon
  },
  computed: mapState('setting', ['data'])

}
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');
@import url('~@/styles/mixin.less');

.contact-container {
  color: @gray;
  @itemheiht: 30px;

  li {
    list-style: none;
    margin: 14px 0;
    position: relative;
    height: @itemheiht;
    line-height: @itemheiht;

    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }

    a {
      display: flex;

    }

    .icon {
      font-size: 26px;
      width: 36px;

      &.weixin {
        font-size: 30px;
        text-indent: -2px;
      }
    }
  }

  .pop {
    width: 150px;
    height: 150px;
    padding: 10px 10px;
    background: white;
    border-radius: 8px;
    position: absolute;
    left: 0;
    bottom: @itemheiht + 5px;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: .3s;

    img {
      width: 100%;
      height: 100%;
    }

    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      background: white;
      transform: translateX(-50%) rotate(45deg);
      bottom: -4px;
      left: 50%;
    }
  }
}
</style>
