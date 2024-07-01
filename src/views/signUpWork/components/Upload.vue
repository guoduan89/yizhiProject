<script setup lang="js">
import { FormItem } from 'view-ui-plus';
import { ref, toRefs, computed, watch, onMounted } from 'vue';

const props = defineProps([]);
const emit = defineEmits([]);

const {} = toRefs(props);

const form = ref({
  video: null,
  videoUrl: '',
});

const fileInput = ref(null);

const triggerUpload = () => {
  fileInput.value.click();
};
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.video = file;
    form.value.videoUrl = URL.createObjectURL(file);
  }
};
onMounted(async () => {});
</script>

<template>
  <div class="bg">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="left">课堂实录</div>
          <div class="right-team">
            <div class="desc">请上传MP4格式的视频，最多可上传12个视频，且单个大小不超过500M</div>
            <Form :model="form" :rules="rules">
              <div class="item">
                <div class="item-team">团队1</div>
                <div class="videos">
                  <FormItem label="" prop="video" class="item-video">
                    <div @click="triggerUpload" v-if="!form.video">
                      <span style="font-size: 24px; margin-right: 8px;">+</span>
                      <span>上传视频</span>
                    </div>
                    <div v-else class="video-box">
                      <video :src="form.videoUrl" controls />
                      <div class="video-info">
                        <span>{{ form.video.name }}</span>
                      </div>
                    </div>
                    <input
                      type="file"
                      ref="fileInput"
                      @change="handleFileChange"
                      accept="video/*"
                      style="display: none"
                    />
                  </FormItem>

                  <FormItem class="item-video">
                    <div>+</div>
                    <div>上传视频</div>
                  </FormItem>
                  <FormItem class="item-video">
                    <div>+</div>
                    <div>上传视频</div>
                  </FormItem>
                </div>
              </div>
              <div class="item">
                <div class="item-team">团队2</div>
                <div class="videos">
                  <FormItem class="item-video">
                    <div>+</div>
                    <div>上传视频</div>
                  </FormItem>
                  <FormItem class="item-video">
                    <div>+</div>
                    <div>上传视频</div>
                  </FormItem>
                  <FormItem class="item-video">
                    <div>+</div>
                    <div>上传视频</div>
                  </FormItem>
                </div>
              </div>
              <div class="item">
                <div class="item-team">团队3</div>
                <div class="videos">
                  <FormItem class="item-video">
                    <div>+</div>
                    <div>上传视频</div>
                  </FormItem>
                  <FormItem class="item-video">
                    <div>+</div>
                    <div>上传视频</div>
                  </FormItem>
                  <FormItem class="item-video">
                    <div>+</div>
                    <div>上传视频</div>
                  </FormItem>
                </div>
              </div>
              <div class="item last">
                <div class="item-team">团队4</div>
                <div class="videos">
                  <div class="item-video">
                    <div>+</div>
                    <div>上传视频</div>
                  </div>
                  <div class="item-video">
                    <div>+</div>
                    <div>上传视频</div>
                  </div>
                  <div class="item-video">
                    <div>+</div>
                    <div>上传视频</div>
                  </div>
                </div>
              </div>
            </Form>
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

      <div class="buttons">
        <Button type="primary">上一步</Button>
        <Button type="primary">保存</Button>
        <Button type="primary">提交</Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  margin: 0 auto;
  background-color: #dddddd65;
  .container {
    width: 800px;
    margin: 0 auto;
    border: 1px solid #ddd;
    background-color: white;

    .content {
      .row {
        display: flex;
        flex-direction: row;
        width: 100%;

        .left {
          display: flex;
          width: 200px;
          padding: 20px;
          justify-content: end;
          align-items: center;
          border-bottom: 1px solid #ddd;
          border-right: 1px solid #ddd;

          &::before {
            content: '*';
            color: red;
          }
          &:last-of-type {
            border-bottom: none;
          }
        }

        .right-team {
          display: flex;
          padding: 20px;
          flex-direction: column;
          font-size: 12px;
          color: #ddd;
          .desc {
            padding-bottom: 30px;
            height: 60px;
            width: 500px;
            border-bottom: 1px solid #ddd;
          }
          .item {
            margin: 20px 0;
            padding-bottom: 40px;
            border-bottom: 1px solid #ddd;
            .item-team {
              font-size: 16px;
              font-weight: 700;
              color: black;
              margin-bottom: 20px;
            }
            .videos {
              display: flex;
              .item-video {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 150px;
                height: 80px;
                border: 1px solid #ddd;
                margin-right: 20px;
                .text{
                    text-align: center;
                }
                .video-box {
                  top: 19px;
                  video {
                    width: 150px;
                    height: 80px;
                  }
                }
              }
            }
          }
          .last {
            border-bottom: none;
          }
        }
        .right-up {
          display: flex;
          padding: 20px;
          border-bottom: 1px solid #ddd;
          width: 517px;
        }
        &:nth-child(1) {
          .left {
            border-bottom: none;
          }
        }

        &:nth-child(2) {
          .left {
            border-top: 1px solid #ddd;
          }
          .right-up {
            border-top: 1px solid #ddd;
          }
        }

        .last {
          border-bottom: none;
        }
      }
    }
  }
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  .ivu-btn {
    margin: 10px;
  }
}
</style>
