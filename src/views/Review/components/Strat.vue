<script lang="js">
export default {
  name: "index"
}
</script>

<script setup lang="js">
import { ref, onMounted } from 'vue';
import PromiseLetter from '../components/PromiseLetter.vue'
import {  useRouter } from 'vue-router';


const router = useRouter();
const showPromiseLetter = ref(true)
const handleAgree = () =>{
    showPromiseLetter.value = false
}
const handleDisagree = ()=>{
    router.push('/')
}
const cityList = ref([
    {value: 'all', label: '全部'},
    {value: 'rated', label: '未评分'},
    {value: 'unrated', label: '已评分'},
]);
const model = ref('');
// const columns = ref([
//                     {
//                         title: '序号',
//                         key: 'number'
//                     },
//                     {
//                         title: '作品名称',
//                         key: 'name'
//                     },
//                     {
//                         title: '提交时间',
//                         key: 'time'
//                     },
//                     {
//                         title: '得分',
//                         key: 'score'
//                     },
//                     {
//                         title:'操作',
//                         key:'operate',
//                     },
//                 ]);
// const data = ref([
//                 {
//                     number:1,
//                     name:"gggggg",
//                     time:'xxxx-xx-xx',
//                     score:100,
//                     operate:"操作"
//                 },
//                 ])



onMounted(async () => {

});
</script>

<template>
    <div class="content">
        <div class="banner">
            <img src="../../../assets/img/PC端_slices/组 2 拷贝@2x.png" alt=""/>
            <div class="title">专家评审您好！</div>
            <div class="desc">您评审的分类为：xxxx</div>
        </div>
        <div class="main">
            <div>作品名称</div>
            <Input v-model="value" placeholder="请输入" style="width: 180px" />
            <div>状态</div>
            <Select v-model="model" style="width:200px" placeholder="全部">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            
        </div>
        <!-- <Table :columns="columns" :data="data"/> -->
        <table>
            <tr class="tb-title">
                <th>序列</th>
                <th>作品名称</th>
                <th>提交时间</th>
                <th>得分</th>
                <th>操作</th>
            </tr>
            <tr>
                <td>1</td>
                <td>我叫XXX</td>
                <td>XXXX-XX-XX</td>
                <td>得分</td>
                <td>评分</td>
            </tr>
        </table>
        <div class="page"><Page :total="20" show-elevator show-total style="left:0px" /></div>
        
    </div>
    <PromiseLetter v-if="showPromiseLetter" @agree="handleAgree" @disagree="handleDisagree" />
</template>

<style scoped lang="css">
    .content{
        width:  95%;
        height: 600px;
        background-color: white;
        margin: 1px auto;
        padding: 20px;

        .banner{
            position: relative;
            img{
            width: 100%;
            }
            .title,.desc{
                position: absolute;
                color: white;
                left: 20px
            }
            .title{
                top: 10px;
                font-size: 20px;
                font-weight: 600;
            }
            .desc{
                top: 45px;
                font-size: 16px;
                font-weight: 600;

            }
        }
        .main{
            display: flex;
            align-items: center;
            justify-content:space-around;
            margin:10px 0;
            width: 550px;
            div{
                font-weight: 600;
            }
        }
        .page{
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
        }
        table{
            width: 100%;
            border-collapse: collapse;
            .tb-title{
                height: 45px;
                width: 100%;
                background-color:#e8e9ee;
            }
            tr{
                td{
                    text-align: center;
                    height: 40px;
                    border-bottom: 1px solid #e8e9ee;
                }
            }
        }
    }
</style>
