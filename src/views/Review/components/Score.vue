<script lang="js">
export default {
  name: "Score"
}
</script>

<script setup lang="js">
import { ref, toRefs, computed, watch, onMounted } from 'vue';

const props = defineProps([]);
const emit = defineEmits([]);

const {} = toRefs(props);

onMounted(async () => {

});
</script>

<template>
  <div class="crumbs">
    <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem to="/Review">专家评审</BreadcrumbItem>
        <BreadcrumbItem>XXXX</BreadcrumbItem>
  </Breadcrumb>
</div>
  
  <div class="container">
    <div class="content">
                <div class="row">
                    <div class="left">课堂实录</div>
                    <div class="right-team">
                        <div class="video">111</div>
                        <div class="video">111</div>
                        <div class="video">111</div>
                    </div>
                </div>
                <div class="row">
                    <div class="left">教案</div>
                    <div class="right-up">
                        <div>上传</div>
                        <div>请上传100M以内的文件</div>
                    </div>
                </div>
                <div class="row">
                    <div class="left">教学事实报告</div>
                    <div class="right-up">
                        <div class="up">上传</div>
                        <div class="desc">请上传100M以内的文件</div>
                    </div>
                </div>
                <div class="row">
                    <div class="left">专业人才培养方案</div>
                    <div class="right-up">
                        <div class="up">上传</div>
                        <div class="desc">请上传100M以内的文件</div>
                    </div>
                </div>
                <div class="row">
                    <div class="left">课程标准</div>
                    <div class="right-up">
                        <div class="up">上传</div>
                        <div class="desc">请上传100M以内的文件</div>
                    </div>
                </div>
                <div class="row">
                    <div class="left last">教材选用说明</div>
                    <div class="right-up last">
                        <div class="up">上传</div>
                        <div class="desc">请上传100M以内的文件</div>
                    </div>
                </div>
            </div>
  </div>
  <div class="container"/>
</template>

<style scoped lang="scss">
.crumbs{
  width: 800px;
  margin: 0 auto;

}
.container{
            width: 800px;
            margin: 0 auto;
            border: 1px solid #ddd;
            background-color: white;
  .content{
        .row{
            display: flex;
            flex-direction: row;
            width: 100%;
            
            .left{
                display: flex;
                width: 200px;
                padding: 20px;
                justify-content: end;
                align-items: center;
                border-bottom: 1px solid #ddd;
                border-right: 1px solid #ddd;
            
                &:last-of-type {
                    border-bottom: none;
                }
            }
            
            .right-team{
                display: flex;
                flex-wrap: wrap;
                width: 600px;
                padding: 20px;
                font-size: 12px;
                color: #ddd;
                .video{
                  width: 200px;
                  height: 150px;
                }
                .desc{
                    padding-bottom: 30px;
                    height: 60px;
                    width: 500px;
                    border-bottom: 1px solid #ddd;
                }
                .item{
                    margin: 20px 0;
                    padding-bottom: 40px;
                    border-bottom: 1px solid #ddd;
                    
                    
                }
                .last{
                    border-bottom:none;
                }
            }
            .right-up{
                display: flex;
                padding: 20px;
                border-bottom: 1px solid #ddd;
                width: 600px;
                
            }
            &:nth-child(1){
                .left{
                    border-bottom:none;
                }
            }

            &:nth-child(2){
                .left{
                    border-top:1px solid #ddd;
                }
                .right-up{
                    border-top:1px solid #ddd;
                }
            }
            
            .last{
                border-bottom:none
            }
        }
    }
  }
</style>
