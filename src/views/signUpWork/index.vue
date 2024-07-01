<template>
  <div class="container">
    <div class="title">
      <div @click="selectTab('fill')" :class="{ workInfo: true, active: activeTab === 'fill' }">
        填写作品信息
      </div>
      <div
        @click="selectTab('upload')"
        :class="{ workUpload: true, active: activeTab === 'upload' }"
      >
        上传参赛作品
      </div>
    </div>

    <section v-if="activeTab === 'fill'">
      <div class="bg1">
        <Form ref="formRef" :model="formValidate" :rules="ruleValidate" :label-width="120">
          <FormItem label="作品名称" prop="name">
            <Input style="width: 575px" v-model="formValidate.name" placeholder="请输入作品名称" />
          </FormItem>
          <FormItem label="参赛组别" prop="group">
            <RadioGroup v-model="formValidate.group">
              <Radio label="sz">思政课程组</Radio>
              <Radio label="gg">公共基础课程组（不含思政）</Radio><br />
              <Radio label="zy1">专业技能课程一组</Radio>
              <Radio label="zy2">专业技能课程二组</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="参赛学校" prop="school">
            <Input
              style="width: 575px"
              v-model="formValidate.school"
              placeholder="请填写学校名称"
            />
          </FormItem>
          <FormItem label="参赛团队" prop="team">
            <Input
              style="width: 575px"
              v-model="formValidate.team"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 5 }"
              placeholder="请输入，多人用逗号隔开"
            />
          </FormItem>
          <FormItem label="参赛教学团队资格" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
              <Checkbox
                label="1、团队每个成员教龄3年以上，近3年实际承担参赛课程或相关课程教学任务;"
              /><br />
              <Checkbox label="2、35 岁以下(含)的教师不少于1人或思政课(二选一)" /><br />
              <Checkbox
                label="3、具备高级专业技术职务或取得高级职业技能等级证书的教师不少于1人;"
              /><br />
              <Checkbox
                label="4、专业课程组的教学团队中“双师型”教师占比在50%以上;企业兼职教师数量不超过1名;(此项可选择答题，不是必选项)"
              /><br />
              <Checkbox
                label="5、近2年曾获得过全国职业院校技能大赛教学能力比赛一等奖的教学团队各成员不能报名参赛，其所有成员所在学校不能以同一公共基础课报名参加公共基础课程组，或不能以同一专业报名参加专业(技能)课程组的比赛:近2年曾获得国赛等奖的教学团队需要调整成员方能报名参赛(至多保留2名原成员，且必须有新成贝)。近2年获省赛奖励的作品，未作重大修改不得参赛。获得2022年某某市中笔职业学校教学能力比赛一等奖的作品，不能参赛，"
              /><br />
            </CheckboxGroup>
          </FormItem>
          <FormItem label="联系方式" prop="info">
            <Input
              style="width: 575px"
              v-model="formValidate.info"
              placeholder="团队负责人联系方式"
            />
          </FormItem>
          <FormItem>
            <Button style="width: 300px" type="primary" @click="forward">下一步</Button>
          </FormItem>
        </Form>
      </div>
    </section>

    <section v-if="activeTab === 'upload'">
      <div class="bg2">
        <div class="container">
          <div class="content">
            <div class="row">
              <div class="left">课堂实录</div>
              <div class="right-team">
                <div class="desc">
                  请上传MP4格式的视频，最多可上传12个视频，且单个大小不超过500M
                </div>
                <Form :model="form" :rules="rules">
                  <div class="item">
                    <div class="item-team">团队1</div>
                    <div class="videos">
                      <Upload
                        ref="uploadRef"
                        action="http://reg.vip.cpolar.cn/common/upload"
                        :on-success="handleUploadSuccess"
                      >
                        <video
                          v-if="url"
                          :src="url"
                          controls
                          :style="{ width: '150px', height: '80px' }"
                        />
                        <Button v-else :style="{ width: '150px', height: '80px' }">
                          +<br />上传文件
                        </Button>
                        <div class="demo-upload-list-cover" v-if="url">
                          <Icon type="ios-trash-outline" @click="handleRemove" />
                        </div>
                      </Upload>
                      <!-- <FormItem label="" prop="video" class="item-video">
                        <div @click="triggerUpload" v-if="!form.video">
                          <div style="text-align: center">+</div>
                          <div>上传视频</div>
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
                      </FormItem> -->
                      <FormItem class="item-video">
                        <div style="text-align: center">+</div>
                        <div>上传视频</div>
                      </FormItem>
                      <FormItem class="item-video">
                        <div style="text-align: center">+</div>
                        <div>上传视频</div>
                      </FormItem>
                    </div>
                  </div>
                  <div class="item">
                    <div class="item-team">团队2</div>
                    <div class="videos">
                      <FormItem class="item-video">
                        <div style="text-align: center">+</div>
                        <div>上传视频</div>
                      </FormItem>
                      <FormItem class="item-video">
                        <div style="text-align: center">+</div>
                        <div>上传视频</div>
                      </FormItem>
                      <FormItem class="item-video">
                        <div style="text-align: center">+</div>
                        <div>上传视频</div>
                      </FormItem>
                    </div>
                  </div>
                  <div class="item">
                    <div class="item-team">团队3</div>
                    <div class="videos">
                      <FormItem class="item-video">
                        <div style="text-align: center">+</div>
                        <div>上传视频</div>
                      </FormItem>
                      <FormItem class="item-video">
                        <div style="text-align: center">+</div>
                        <div>上传视频</div>
                      </FormItem>
                      <FormItem class="item-video">
                        <div style="text-align: center">+</div>
                        <div>上传视频</div>
                      </FormItem>
                    </div>
                  </div>
                  <div class="item last">
                    <div class="item-team">团队4</div>
                    <div class="videos">
                      <div class="item-video">
                        <div style="text-align: center">+</div>
                        <div>上传视频</div>
                      </div>
                      <div class="item-video">
                        <div style="text-align: center">+</div>
                        <div>上传视频</div>
                      </div>
                      <div class="item-video">
                        <div style="text-align: center">+</div>
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
                <div>
                  <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <Button icon="ios-cloud-upload-outline">上传</Button>
                  </Upload>
                </div>
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
            <Button type="primary" @click="back">上一步</Button>
            <Button type="primary">保存</Button>
            <Button type="primary">提交</Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="jsx">
import { ref, reactive } from 'vue';
//上传文件钩子
const url = ref(null);
const uploadRef = ref(null);
const handleUploadSuccess = (response, file, fileList) => {
  // 处理服务器返回的结果
  url.value = response.url;
  console.log('Upload successful!', response);
  // 你可以在这里执行任何你需要的逻辑，比如更新状态、显示提示信息等
};
const handleRemove = () => {
  if (uploadRef.value) {
    const fileList = uploadRef.value.fileList;
    if (fileList.length > 0) {
      fileList.splice(0, 1); // 假设上传列表中只有一个文件，根据需要调整
      url.value = null; // 清除视频 URL
    }
  }
};

const activeTab = ref('fill'); // 默认选中的标签
const formRef = ref(null);

const selectTab = (tab) => {
  activeTab.value = tab;
};

const formValidate = reactive({
  name: '',
  school: '',
  group: '',
  interest: [],
  info: '',
  team: '',
});

const ruleValidate = reactive({
  name: [{ required: true, message: '请输入作品名称', trigger: 'blur' }],
  school: [{ required: true, message: '请输入学校名称', trigger: 'blur' }],
  group: [{ required: true, message: '请选择组别', trigger: 'change' }],
  interest: [
    {
      required: true,
      type: 'array',
      min: 1,
      message: '至少选择一个',
      trigger: 'change',
    },
    { type: 'array', max: 5, message: '请输入信息', trigger: 'change' },
  ],
  info: [{ required: true, message: '请输入联系方式', trigger: 'blur' }],
  team: [
    { required: true, message: '请输入参赛团队', trigger: 'blur' },
    { type: 'string', min: 2, message: '请输入团队信息', trigger: 'blur' },
  ],
});

const forward = () => {
  const form = formRef.value;
  if (form) {
    form.validate((valid) => {
      if (valid) {
        console.log('保存成功!');
        activeTab.value = 'upload';
      } else {
        console.error('信息不完整！');
      }
    });
  }
};

const back = () => {
  activeTab.value = 'fill';
};

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
</script>

<style scoped lang="scss">
.container {
  width: 800px;
  margin: 0 auto;
  border: 1px solid #ddd;
  background-color: white;
  .title {
    display: flex;
    cursor: pointer;
    .workInfo,
    .workUpload {
      display: flex;
      background-color: #ddd;
      justify-content: center;
      align-content: center;
      font-weight: 700;
      flex: 1;
      padding: 10px;
    }
    .active {
      background-color: #446eff;
      color: white;
    }
  }
  section {
    .bg1 {
      margin: 0 auto;
      width: 700px;
      height: 900px;
      background-color: white;
      padding-top: 40px;
      Form {
        font-size: 14px;
        line-height: 0%;
      }
      .ivu-btn {
        margin-left: 90px;
      }
    }
    .bg2 {
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
}
</style>
