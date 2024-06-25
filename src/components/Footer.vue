<template>
  <div class="footer">
    <div class="info">
      联系电话:王老师15853217870 | 技术支持:唐工17706521231 | 服务电话:朱名师15966818040
      @山东依智科技产业开发集团有限公司@2023 鲁ICP首2020045516号 -3
    </div>
    <div class="line" />
    <div class="cop">footer @2003-2023 zhihuijiaoxue.All rights reserved.</div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-color: #000;
  color: #e0e0e073;
  text-align: center;
  padding: 10px 0;
  position: relative;

  .info,
  .cop {
    margin: 10px 0;
  }

  .line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #e0e0e073;
    transform: translateY(-50%);
  }
}
</style>
