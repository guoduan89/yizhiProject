<template>
    <Upload
        action="http://reg.vip.cpolar.cn/common/upload"
        :on-success="handleUploadSuccess"
    >
    <img v-if="url" :src="url" alt=""/>
    <Button v-else icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    
</template>

<script>
export default {
    data(){
        return{
            url:'',
        }
    },
    methods: {
        handleUploadSuccess(response, file, fileList) {
            // 处理服务器返回的结果
            this.url = response.url;
            console.log('Upload successful!', response);
            // 你可以在这里执行任何你需要的逻辑，比如更新状态、显示提示信息等
        }
    }
}
</script>
