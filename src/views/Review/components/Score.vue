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
  <div class="container">
    <div class="content">
        <div>评审</div>
        <table>
            <tr class="tb-title">
                <th width="140">一级指标</th>
                <th width="140">二级指标</th>
                <th width="300">评审标准</th>
                <th width="100">各项得分</th>
                <th>总得分</th>
            </tr>
            <tr>
                <td rowspan="6">2023年某某巿职业院校技能大赛教学能力比赛评分指标<br/>（100分）</td>
                <td>教学实施报告<br/>(20分)</td>
                <td class="text-left">
                    1.教学理念先进，教学设计科学合理(4分)<br/>
                    2.教学实施以生为本，落实教学设计，教学有创新(4分)<br/>
                    3.学生学习效果突出，与教学内容、活动关联性强(4分)<br/>
                    4.教学反思深刻，改进举措针对性强、扎实有效(4分)<br/>
                    5.报告系统性强，行文规范、逻辑严谨、符合实际(4分)</td>
                <td><input style="width: 100px;" type="text" name="" id=""/></td>
                <td rowspan="6">总得分</td>
            </tr>
            <tr>
                
                <td>教案<br/>(20分)</td>
                <td class="text-left">
                    1.教学要素完整，版式规范，详略得当(4分)<br/>
                    2.课程思政系统设计，有机融入，培养学生的职业综合素养(4分)<br/>
                    3.学情分析精准聚焦，教学目标可评可测(4分)<br/>
                    4.教学内容科学严谨,教学策略运用恰当(4分)<br/>
                    5.教学评价科学合理，课后反思真实深刻(4分)
                </td>
                <td><input style="width: 100px;" type="text" name="" id=""/></td>
                
            </tr>
            <tr>
                
                <td>视颇资料<br/>(40分)</td>
                <td class="text-left">
                    1.坚持立德树人，德技并修(12分)<br/>
                    2.凸显职业教育类型特色，体现以生为本(7分)<br/>
                    3.课堂教学质量高、效果好，反映师生真文教学状态(7分)<br/>
                    4.数字技术与教学方式方法运用恰当，体现深度学习(7分)<br/>
                    5.展示教师良好综合素养，展现团队优势(7分)
                </td>
                <td><input style="width: 100px;" type="text" name="" id=""/></td>
                
            </tr>
            <tr>
                
                <td>专业人才培养方案<br/>(8分)</td>
                <td class="text-left">
                    1.符合最新文件要求，科学规范制定(3分)<br/>
                    2.坚持全面发展，体现培养特色，文本规范严谨(3分)<br/>
                    3.休现优化改进，明确多方参与(2分)
                </td>
                <td><input style="width: 100px;" type="text" name="" id=""/></td>
                
            </tr>
            <tr>
                
                <td>课程标准(或实施案)<br/>(8分)</td>
                <td class="text-left">
                    1.落实职业教育国家教学标准(3分)<br/>
                    2.条目齐全完备，科学规范(3分)<br/>
                    3.具有时代特色，休现(学科)技术领域发展(2分)
                </td>
                <td><input style="width: 100px;" type="text" name="" id=""/></td>
                
            </tr>
            <tr>
                
                <td>教材选用说明<br/>(8分)</td>
                <td class="text-left">
                    1.符合国家关于教材使用相关规定和要求(2分)<br/>
                    2.明确选用制度与机制及执行情况(2分)
                </td>
                <td><input style="width: 100px;" type="text" name="" id=""/></td>
                
            </tr>
        </table>
        
    </div>
  </div>
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
        table{
            width: 100%;
            border-collapse: collapse;
            font-size: 10px;
            .tb-title{
                height: 45px;
                width: 100%;
                background-color:#e8e9ee;
            }
            tr{
                th,td{
                    border-right: 1px solid #ddd;
                }
               
                td{
                    text-align: center;
                    height: 40px;
                    border-bottom: 1px solid #e8e9ee;
                    padding: 5px
                }
                .text-left{
                    text-align: left;
                    
                }
            
            }
        }
        
    }
  }
</style>
