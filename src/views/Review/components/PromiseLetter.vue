<template>
    <div class="promise-letter">
      <div class="content">
        <h2>承诺书</h2>
        <p>一、本人自愿加入专家评委库，并严格通守其他各项规定和纪律，客现公正地为本次大开展评审工作。</p>
        <p>二、本人将严格通守大赛评选工作的保密义务，不使用或拔露，也不许可他人使用或技器在评进工作中获悉的梦费企业和国队的基本估息、观点、想法创意、知识产权、暂力成果、技术方法、商业计划、财务信息等商业秘密。</p>
        <p>三、本人将严格技服大费评选规则、规程，以严肃相学的志度，客观公正，实事水是，专业独立地参与选工作，提出评隐息见，并对评港息见的真实性公正性负责。</p>
        <p>四、本人保证设入足够的时间精力，按时参加大赛评选相关工作，并愿通过电子部件、手机信和电等方式供得大组会有关评选工作的通知信息。</p>  
        <p>五、本人与参赛企业或队在在利害关嘉，可能影 评工作的公正、本人将及时向大赛组费会声明共提出道申通,如发现其他评委也存在相同情，本人也将及时向大赛组委会反映情况。</p>
        <p>六、未经大赛组委会授权，本人不以任式与参赛企业或个人联系。</p> 
        <p>七、未经大赛组委会授权，本人不以大赛评要名义参与任何与大赛评选无关的活动，也不以大赛评要名义对外发表任何评论。</p>  
        <p>八、本人担任本次大赛的评委已经取得了应当取得的所有授权、许司、同息、批准，并不会违反对本人适用的法律、法规或本人已经签订的合同，协议或其他文件。</p> 
        <p>九、本人承诺只在大赛组委会授权的范国内进行评进工作，不超授权权，并且不利用职务之便为自身、他人以及所在工作机构谋得利益。</p>  
        <div class="actions">
          <Button class="agree-button" @click="agree">我已阅读并同意</Button>
          <Button @click="disagree">不同意</Button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PromiseLetter',
    emits: ['agree', 'disagree'],
    methods: {
      agree() {
        this.$emit('agree');
      },
      disagree() {
        this.$emit('disagree');
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .promise-letter {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 6;
  }
  
  .content {
    width: 800px;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    
    p{
      text-align: left;
      word-wrap: break-word;
    }
    
  }
  
  .actions {
    margin-left: 225px;
    width: 300px;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  .agree-button {
  background-color: #436eff;
  color: white;
  }
  </style>
  