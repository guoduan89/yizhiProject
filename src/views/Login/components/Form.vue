<template>
  <div class="bg">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
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
        <Input style="width: 575px" v-model="formValidate.school" placeholder="请填写学校名称" />
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

      <FormItem label="参赛教学团队资格" prop="interest"
        ><br />
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
        <Input style="width: 575px" v-model="formValidate.info" placeholder="团队负责人联系方式" />
      </FormItem>
      <FormItem>
        <Button style="width: 300px" type="primary" @click="handleSubmit('formValidate')"
          >下一步</Button
        >
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        name: '',
        school: '',

        group: '',
        interest: [],
        info: '',
        team: '',
      },
      ruleValidate: {
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
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('保存成功!');
        } else {
          this.$Message.error('信息不完整！');
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
.bg {
  position: relative;
  left: 350px;

  width: 700px;
  height: 900px;
  background-color: rgb(255 255 245);
  padding-top: 40px;
  Form {
    font-size: 14px;
    line-height: 0%;
  }
}
</style>
