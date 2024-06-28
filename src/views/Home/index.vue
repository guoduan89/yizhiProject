<script lang="jsx">
export default {
  name: 'Home',
};
</script>

<script setup lang="jsx">
import { ref, toRefs, computed, watch, onMounted } from 'vue';
import {useRouter} from 'vue-router';

onMounted(async () => {});

const router = useRouter()
const getFill = () => {
  router.push('/signUpWork/Fill');
};
</script>

<template>
  <div class="banner">
    <img src="../../assets/img/PC端_slices/组 2.png" alt=""/>
    <div class="title">2023某市职业学校教学能力大赛</div>
    <div class="sign-up" @click="getFill">我要报名<img src="../../assets/img/PC端_slices/矢量智能对象 拷贝@2x.png" alt=""/></div>
  </div>

    <div class="body">
        <div class="dec">
            <img src="../../assets/img/PC端_slices/组 3.png" alt=""/>
            <div class="title">赛事流程</div>
            <img src="../../assets/img/PC端_slices/组 3.png" alt=""/>
        </div>
        <div class="content">
            <div class="list">
                <img src="../../assets/img/PC端_slices/组 4@2x(1).png" alt=""/>
                <div>报名登录</div>
            </div>
            <img src="../../assets/img/PC端_slices/矢量智能对象 拷贝 5@2x.png" alt=""/>
            <div class="list">
                <img src="../../assets/img/PC端_slices/组 5@2x.png" alt=""/>
                <div>提交作品</div>
            </div>
            <img src="../../assets/img/PC端_slices/矢量智能对象 拷贝 5@2x.png" alt=""/>
            <div class="list">
                <img src="../../assets/img/PC端_slices/组 6@2x.png" alt=""/>
                <div>作品评审</div>
            </div>
            <img src="../../assets/img/PC端_slices/矢量智能对象 拷贝 5@2x.png" alt=""/>
            <div class="list">
                <img src="../../assets/img/PC端_slices/组 7@2x.png" alt=""/>
                <div>获奖公示</div>
            </div>
        </div>
    </div>
    <div class="info">
        <div class="dec">
            <img src="../../assets/img/PC端_slices/组 3.png" alt=""/>
            <div class="title">通知公告</div>
            <img src="../../assets/img/PC端_slices/组 3.png" alt=""/>
        </div>
        <div class="content">
            <div>关于公布2923年全国职业院校技能大赛德育与思想政治教育有关赛项现场决赛...</div>
            <div>关于举办2023年全国职业院校技能大赛教学能力比赛决赛有关事项的通知</div>
            <div>2023年全国职业院校技能大赛思想政治教育课程教学能力比赛方案(中等职业...</div>
            <div>教育部办公厅关于举办2023年全国职业院校技能大赛德育与思想政治教育有关...</div>
            <div>2023年全国职业院校技能大赛中等职业学校班主任能力比赛方案</div>
            <div>2023年全国职业院校技能大赛教学能力比赛常见问题答疑</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$color:#436eff;
body{
  margin: 0;
  padding: 0
}
.banner {
  position: relative; // 使子元素可以相对于 .banner 定位
  width: 100%; // 让 .banner 宽度与页面宽度一致
  
  img {
    width: 100%; // 让图片宽度与 .banner 一致
    height: auto; // 保持图片的比例
  }

  .title {
    position: absolute;
    width: 700px;
    word-wrap: break-word;
    top: 20px; // 调整文字距离顶部的距离
    left: 80px; // 调整文字距离左侧的距离
    color: white; // 文字颜色
    font-size: 55px; // 文字大小
    padding: 10px; // 内边距
  }

  .sign-up {
    position: absolute;
    bottom: 150px; // 调整文字距离底部的距离
    left: 80px; // 调整文字距离左侧的距离
    color: $color; // 文字颜色
    height: 24px;
    line-height: 18px; 
    font-size: 18px; // 文字大小
    font-weight: 1000;
    background-color: white; // 半透明背景色
    padding: 10px 20px; 
    text-align: center;
    text-decoration: none; // 去除链接下划线
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-items: center;
    cursor: pointer;
    
    img{
      margin-left: 5px;
      height: 16px;
      width: 16px;
    }
  }
}

.body{
  width: 100%;
  display: flex; 
  flex-direction: column;
  .dec{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    img{
      width: auto;
      height: auto;
    }
    .title{
      margin: 0 20px;
      font-size: 28px;
      font-weight: 700;
    }
  }

  .content{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  img{
    height: 20px;
    width: auto;
    margin: 0 20px;
  }
  .list{
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 1000;
    color: white;
    background-color: $color;
    height: 70px;
    width: 180px;
    border-radius: 10px;
    
    img{
      margin-right: 10px;
      height: 40px;
      width: 40px;
    }
  }
}
}

.info {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  background-color: rgb(246 247 249);
  padding-bottom:  20px;
  .dec {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;

    img {
      width: auto;
      height: auto;
    }

    .title {
      margin: 0 20px;
      font-size: 28px;
      font-weight: 700;
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 0 100px;

    div {
      width: 50%; // 每列占据50%的宽度
      display: flex;
      align-items: center;
      margin: 10px 0;

      &::before {
        content: '•'; // 小点
        color: #000; // 小点颜色
        margin-right: 10px; // 小点和文字之间的距离
      }
    }
  }
}
</style>
