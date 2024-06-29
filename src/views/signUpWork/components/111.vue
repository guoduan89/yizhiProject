<template>
<div class="upload-container">
    <Form ref="uploadForm" :model="form" :rules="rules">
    <FormItem label="视频上传" prop="video">
        <div class="upload-box" v-if="!form.video" @click="triggerUpload">
        + 上传视频
        </div>
        <div v-else class="video-box" @mouseenter="showDelete = true" @mouseleave="showDelete = false">
        <video :src="form.videoUrl" controls/>
        <div class="video-info">
            <span>{{ form.video.name }}</span>
            <i-button type="primary" shape="circle" icon="md-trash" @click="deleteVideo" v-show="showDelete"/>
        </div>
        </div>
        <input type="file" ref="fileInput" @change="handleFileChange" accept="video/*" style="display: none;" />
        <div v-if="submitted && !form.video" class="error-message">
        请上传视频
        </div>
    </FormItem>
    <FormItem>
        <i-button type="primary" html-type="submit">提交</i-button>
    </FormItem>
    </Form>
</div>
</template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          video: null,
          videoUrl: '',
        },
        rules: {
          video: [
            { required: true, message: '请上传视频', trigger: 'change' },
          ],
        },
        submitted: false,
        showDelete: false,
      };
    },
    methods: {
      triggerUpload() {
        this.$refs.fileInput.click();
      },
      handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.form.video = file;
          this.form.videoUrl = URL.createObjectURL(file);
        }
      },
      deleteVideo() {
        this.form.video = null;
        this.form.videoUrl = '';
      },
      submit() {
        this.submitted = true;
        this.$refs.uploadForm.validate((valid) => {
          if (valid) {
            // 在这里处理视频上传逻辑，例如调用API上传视频
            console.log('上传视频:', this.form.video);
          } else {
            console.log('请上传视频');
          }
        });
      },
    },
  };
  </script>
  
  <style>
  .upload-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .upload-box {
    width: 200px;
    height: 150px;
    border: 2px dashed #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .video-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .video-box video {
    width:200px;
    height:150px; 
    margin-bottom: 5px;
  }
  .video-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
  }
  .video-info i-button {
    position: absolute;
    top: 0;
    right: 0;
  }
  .error-message {
    color: red;
    margin-top: 10px;
  }
  </style>