<template>
  <div class="rancher-upload-layout">
    <div class="rancher-upload-info">
      <el-row type="flex" :gutter="20">
        <el-col :span="4">
          <div class="rancher-upload-label grid-content bg-purple"><div style="padding: 30px">使用说明</div></div>
        </el-col>
        <el-col :span="20">
          <div class="rancher-upload-content grid-content bg-purple">
            <div style="padding: 10px 0px;">
              <div style="text-align: left; padding: 5px 0px;">1. 上传静态文件到docker容器</div>
              <div style="text-align: left; padding: 5px 0px;">2. docker cp ${rancherui} ${containerId}:/go/src/tool-backend/rancherui/</div>
              <div style="text-align: left; padding: 5px 0px;">3. 等待NODE包下载完毕</div>
              <div style="text-align: left; padding: 5px 0px;">4. 替换文件并等待打包完成点击下载tar包</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20">
        <el-col :span="4">
          <div class="rancher-upload-label grid-content bg-purple"><div style="padding-top: 30px">LOGO</div></div>
        </el-col>
        <el-col :span="20">
          <div class="rancher-upload-content grid-content bg-purple">
            <el-upload
            action="/api/upload/logo"
            list-type="picture-card"
            :show-file-list="showFileList"
            :on-success="handleSuccess"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <div class="rancher-upload-img" @click="handlePictureCardPreview">
              <img :src="imageUrl" alt="">
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20">
        <el-col :span="4">
          <div class="rancher-upload-label grid-content bg-purple"><div style="padding-top: 30px">登录页背景</div></div>
        </el-col>
        <el-col :span="20">
          <div class="rancher-upload-content grid-content bg-purple">
            <el-upload
            action="/api/upload/loginBackground"
            list-type="picture-card"
            :show-file-list="showFileList"
            :on-success="handleLoginBackGroundSuccess"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <div class="rancher-upload-img" @click="handleLoginBackGroundPictureCardPreview">
              <img :src="loginBackGroundImageUrl" alt="">
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20">
        <el-col :span="4">
          <div class="rancher-upload-label grid-content bg-purple"><div style="padding-top: 20px">备案号</div></div>
        </el-col>
        <el-col :span="20">
          <div class="rancher-from-content grid-content bg-purple">
            <el-form :label-position="labelPosition" :style="{'width':'100%'}" label-width="120px">
              <el-form-item label="login页面备案号">
                <div :style="{'display': 'flex', 'align-items': 'center'}">
                  <el-input :style="{'width': '30%', 'margin-right': '20px'}" v-model="formLogin.name" placeholder="链接名字"></el-input>
                  <el-input :style="{'width': '30%', 'margin-right': '20px'}" v-model="formLogin.value" placeholder="链接地址"></el-input>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20">
        <el-col :span="4">
          <div class="rancher-upload-label grid-content bg-purple"><div style="padding-top: 30px">主题颜色</div></div>
        </el-col>
        <el-col :span="20">
          <div class="rancher-from-content grid-content bg-purple">
            <el-form :label-position="labelPosition" :style="{'width':'100%'}" label-width="80px">
              <el-form-item label="primary">
                <div :style="{'display': 'flex', 'align-items': 'center'}">
                  <el-input :style="{'width': '30%', 'margin-right': '20px'}" v-model="formTheme.primary"></el-input>
                  <span :style="{'margin-right': '20px'}">普通按钮的背景颜色</span>
                  <span class="from-color-display" :style="{'background':formTheme.primary}"></span>
                </div>
              </el-form-item>
              <el-form-item label="secondary">
                <div :style="{'display': 'flex', 'align-items': 'center'}">
                  <el-input :style="{'width': '30%', 'margin-right': '20px'}" v-model="formTheme.secondary"></el-input>
                  <span :style="{'margin-right': '20px'}">Title标题的颜色</span>
                  <span class="from-color-display" :style="{'background':formTheme.secondary}"></span>
                </div>
              </el-form-item>
              <el-form-item label="success">
                <div :style="{'display': 'flex', 'align-items': 'center'}">
                  <el-input :style="{'width': '30%', 'margin-right': '20px'}" v-model="formTheme.success"></el-input>
                  <span :style="{'margin-right': '20px'}">成功状态的颜色</span>
                  <span class="from-color-display" :style="{'background':formTheme.success}"></span>
                </div>
              </el-form-item>
              <el-form-item label="warning">
                <div :style="{'display': 'flex', 'align-items': 'center'}">
                  <el-input :style="{'width': '30%', 'margin-right': '20px'}" v-model="formTheme.warning"></el-input>
                  <span :style="{'margin-right': '20px'}">警告状态的颜色</span>
                  <span class="from-color-display" :style="{'background':formTheme.warning}"></span>
                </div>
              </el-form-item>
              <el-form-item label="error">
                <div :style="{'display': 'flex', 'align-items': 'center'}">
                  <el-input :style="{'width': '30%', 'margin-right': '20px'}" v-model="formTheme.error"></el-input>
                  <span :style="{'margin-right': '20px'}">错误状态的颜色</span>
                  <span class="from-color-display" :style="{'background':formTheme.error}"></span>
                </div>
              </el-form-item>
              <el-form-item label="info">
                <div :style="{'display': 'flex', 'align-items': 'center'}">
                  <el-input :style="{'width': '30%', 'margin-right': '20px'}" v-model="formTheme.info"></el-input>
                  <span :style="{'margin-right': '20px'}">选中状态的背景颜色</span>
                  <span class="from-color-display" :style="{'background':formTheme.info}"></span>
                </div>
              </el-form-item>
              <el-form-item label="disabled">
                <div :style="{'display': 'flex', 'align-items': 'center'}">
                  <el-input :style="{'width': '30%', 'margin-right': '20px'}" v-model="formTheme.disabled"></el-input>
                  <span :style="{'margin-right': '20px'}">禁用状态的背景颜色</span>
                  <span class="from-color-display" :style="{'background':formTheme.disabled}"></span>
                </div>
              </el-form-item>
              <el-form-item label="textColor">
                <div :style="{'display': 'flex', 'align-items': 'center'}">
                  <el-input :style="{'width': '30%', 'margin-right': '20px'}" v-model="formTheme.textColor"></el-input>
                  <span :style="{'margin-right': '20px'}">文本颜色</span>
                  <span class="from-color-display" :style="{'background':formTheme.textColor}"></span>
                </div>
              </el-form-item>
              <el-form-item label="linkColor">
                <div :style="{'display': 'flex', 'align-items': 'center'}">
                  <el-input :style="{'width': '30%', 'margin-right': '20px'}" v-model="formTheme.linkColor"></el-input>
                  <span :style="{'margin-right': '20px'}">链接文本和颜色</span>
                  <span class="from-color-display" :style="{'background':formTheme.linkColor}"></span>
                </div>
              </el-form-item>
              <el-form-item label="lightGrey">
                <div :style="{'display': 'flex', 'align-items': 'center'}">
                  <el-input :style="{'width': '30%', 'margin-right': '20px'}" v-model="formTheme.lightGrey"></el-input>
                  <span :style="{'margin-right': '20px'}">用于card header背景颜色</span>
                  <span class="from-color-display" :style="{'background':formTheme.lightGrey}"></span>
                </div>
              </el-form-item>
              <el-form-item label="midGrey">
                <div :style="{'display': 'flex', 'align-items': 'center'}">
                  <el-input :style="{'width': '30%', 'margin-right': '20px'}" v-model="formTheme.midGrey"></el-input>
                  <span :style="{'margin-right': '20px'}">用于描述性文本颜色 占位符等</span>
                  <span class="from-color-display" :style="{'background':formTheme.midGrey}"></span>
                </div>
              </el-form-item>
              <el-form-item label="darkGrey">
                <div :style="{'display': 'flex', 'align-items': 'center'}">
                  <el-input :style="{'width': '30%', 'margin-right': '20px'}" v-model="formTheme.darkGrey"></el-input>
                  <span :style="{'margin-right': '20px'}">用于第一级title checkbox的文字等</span>
                  <span class="from-color-display" :style="{'background':formTheme.darkGrey}"></span>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20">
        <el-col :span="4">
          <div class="rancher-upload-label grid-content bg-purple"><div style="padding-top: 30px">添加链接地址</div></div>
        </el-col>
        <el-col :span="20">
          <div class="rancher-from-content grid-content bg-purple">
            <el-form :label-position="labelPosition" :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="rancher-from">
              <el-form-item
                v-for="(domain, index) in dynamicValidateForm.domains"
                :label="'链接地址'"
                :key="domain.key"
                :prop="'domains.' + index + '.value'"
                :rules="{
                  required: false, message: '不能为空', trigger: 'blur'
                }"
              >
                <div class="rancher-form-layout">
                  <el-input v-model="domain.name" placeholder="链接名字"></el-input>
                  <el-input v-model="domain.value" placeholder="链接地址"></el-input>
                  <el-button @click.prevent="removeDomain(domain)">删除</el-button>
                </div>
              </el-form-item>
              <el-form-item>
                <div class="rancher-form-link-action">
                  <el-button @click="addDomain">新增链接</el-button>
                  <el-button @click="resetForm()">重置</el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20">
        <el-col :span="18">
          <div style="display: flex; height: 40px; text-align: left; line-height: 40px; overflow-y: auto;">Build Info : {{loginfo}}</div>
        </el-col>
        <el-col :span="6">
          <div class="rancher-upload-save">
            <el-button @click="clickHandle">Save</el-button>
            <el-button @click="test" :disabled="buildDisabled" v-loading="buildDisabled">Build 静态文件</el-button>
            <el-button @click="download">下载资源</el-button>
          </div>
        </el-col>
      </el-row>
      <el-dialog :visible.sync="loginBackGroundDialogVisible" size="tiny">
        <img width="100%" :src="loginBackGroundDialogImageUrl" alt="">
      </el-dialog>
    </div>
    <div class="rancher-upload-list">
      <ul style="padding: 15px; font-size: 14px;">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>Rancher-ui 静态文件</span>
            <el-popconfirm
              title="确定清空Rancher-ui静态文件么"
              @onConfirm="handleDelete"
            >
              <i slot="reference" style="margin-left: 5px; cursor: pointer;" class="el-icon-delete"></i>
            </el-popconfirm>
          </div>
          <div style="background: rgba(248, 248, 248, 1); padding: 10px 0px">
            静态文件状态
            <div style="margin-top: 10px; padding: 10px;">{{rancherUiState}}</div>
          </div>
          <div style="background: rgba(248, 248, 248, 1); padding: 10px 0px">
            NODE包状态 <i @click="installNode" style="margin-left: 5px; cursor: pointer;" class="el-icon-refresh"></i>
            <div style="margin-top: 10px; padding: 10px;">{{rancherInstallState}}</div>
          </div>
        </el-card>
      </ul>
    </div>
  </div>
</template>

<script>
import Http from '../service/reset.js'

export default {
  name: 'LogoImage',
  data() {
    return {
      ws: '',
      loginfo: '',
      buildDisabled: false,

      rancherUiState: 'rancher-ui文件未上传',
      wsInstall: '',
      rancherInstallState: '',

      modalNotify: '',
      host: '',

      showFileList: false,
      dialogImageUrl: '',
      dialogVisible: false,
      imageUrl: '',
      fileName: '',
      //login background
      loginBackGroundImageUrl: '',
      loginBackGroundFileName: '',
      loginBackGroundDialogImageUrl: '',
      loginBackGroundDialogVisible: false,
      //footer link
      dynamicValidateForm: {
        domains: [{
          name: '',
          value: ''
        }],
        email: ''
      },

      //login
      formLogin: {
        name: '',
        value: '',
      },

      //theme color
      labelPosition: 'left',
      formTheme: {
        primary: '#0075A8',
        secondary: '#34495E',
        success: '#27AA5E',
        warning: '#F1C40F',
        error: '#F15354',
        info: '#78C9CF',
        disabled: '#dee1e3',
        textColor: '#454545',
        linkColor: '#3497DA',
        lightGrey: '#ecf0f1',
        midGrey: '#8B959C',
        darkGrey: '#3d3d3d',
      },

      formThemeDefault: {
        primary: '#0075A8',
        secondary: '#34495E',
        success: '#27AA5E',
        warning: '#F1C40F',
        error: '#F15354',
        info: '#78C9CF',
        disabled: '#dee1e3',
        textColor: '#454545',
        linkColor: '#3497DA',
        lightGrey: '#ecf0f1',
        midGrey: '#8B959C',
        darkGrey: '#3d3d3d',
      }
    };
  },
  props: {
    msg: String
  },
  created () {
    let loc = window.location

    this.host = loc.host;
    Http.post('/api/upload/variableLastConfig').then((response) => {
      if (response.data) {
        this.dynamicValidateForm.domains = JSON.parse(response.data.link_data)
        this.fileName = response.data.file_name
        this.imageUrl = `http://${this.host}/upload/public/static/uploadfile/${response.data.file_name}`
        this.loginBackGroundFileName = response.data.loginbg_file_name
        this.loginBackGroundImageUrl = `http://${this.host}/upload/public/static/uploadfile/${response.data.loginbg_file_name}`

        if (response.data.variables_data) {
          let variablesData = JSON.parse(response.data.variables_data)

          for( let key in this.formTheme) {
            if (variablesData[key]) {
              this.formTheme[key] = variablesData[key]
            }
          }
        }

        if (response.data.loginrecord_data) {
          let loginrecordData = JSON.parse(response.data.loginrecord_data)

          for( let key in this.formLogin) {
            if (loginrecordData[key]) {
              this.formLogin[key] = loginrecordData[key]
            }
          }
        }
      }
    })
    this.timer = setInterval(() => {
      Http.get('/api/upload/isRancheruiExist').then((response) => {
        if (response.data.message === 'empty') {
          this.rancherUiState = 'rancher-ui文件未上传'
        } else if ( response.data.message === 'rancherui') {
          this.rancherUiState = '开源ui静态文件已上传'
        } else if ( response.data.message === 'pandarid') {
          this.rancherUiState = '企业版ui静态文件已上传'
        }
      })
    }, 3000);
    this.modalNotify = this.$notify({
      title: 'rancher-ui静态文件没有上传',
      duration: 0
    });
  },
  methods: {
    handlePictureCardPreview() {
      this.dialogImageUrl = this.imageUrl;
      this.dialogVisible = true;
    },
    handleSuccess(response) {
      if (response.message === 'OK') {
        this.fileName = response.data.file_name
        this.imageUrl = `http://${this.host}/upload/public/static/uploadfile/${response.data.file_name}`
      }
    },

    //login background image
    handleLoginBackGroundPictureCardPreview() {
      this.loginBackGroundDialogImageUrl = this.loginBackGroundImageUrl;
      this.loginBackGroundDialogVisible = true;
    },
    handleLoginBackGroundSuccess(response) {
      if (response.message === 'OK') {
        this.loginBackGroundFileName = response.data.loginbg_file_name
        this.loginBackGroundImageUrl = `http://${this.host}/upload/public/static/uploadfile/${response.data.loginbg_file_name}`
      }
    },

    //footer link
    test() {
      if (this.ws) {
        this.ws.onclose = () => {
          console.log('Connection close !!!')
        }
        this.ws = ''
      }

      let loc = window.location

      this.ws = new WebSocket(`ws://${loc.host}/ws/upload/test`)
      this.buildDisabled = true
      // 连接打开时触发
      this.ws.onopen = () => {  
        this.ws.send("build");
        console.log("Connection open ...") 
      }
      // 接收到消息时触发  
      this.ws.onmessage = (evt) => { 
        if (evt.data) {
          this.loginfo = evt.data
          if (this.loginfo === 'Failed build' || this.loginfo === 'Done build') {
            this.wsInstall.onclose = () => {
              console.log('Connection close !!!')
            }
            this.ws = ''
            this.buildDisabled = false
          }
        }
      } 
    },
    resetForm() {
      this.dynamicValidateForm.domains.forEach((ele) => {
        ele.name = '';
        ele.value = '';
      })
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      });
    },

    clickHandle() {
      let list = this.dynamicValidateForm.domains.map(ele => {
        return {
          name: ele.name,
          value: ele.value,
        }
      })

      let variablesData = {}
      for( let key in this.formTheme) {
        if (!this.formTheme[key]) {
          variablesData[key] = this.formThemeDefault[key]
        } else {
          variablesData[key] = this.formTheme[key]
        }
      }

      Http.post('/api/upload/save', {
        file_name: this.fileName,
        loginbg_file_name: this.loginBackGroundFileName,
        link_data: list.length > 0 && list[0].name && list[0].value ? JSON.stringify(list) : '',
        loginrecord_data: this.formLogin.name && this.formLogin.value ?  JSON.stringify(this.formLogin) : '',
        variables_data: JSON.stringify(variablesData)
      }).then((response) => {
        if (response.message === 'OK') {
          this.$message({
            message: '替换文件成功',
            type: 'success'
          });
        } else {
          this.$message({
            message: '替换文件失败',
            type: 'error'
          });
        }
      })
    },

    download() {
      if (this.rancherUiState === "企业版ui静态文件已上传") {
        window.open(this.GLOBAL.pandariaStaticURL);
        window.open(`http://${this.host}/upload/public/rancherui/pandaria-ui/dist/static/2.3-dev.tar.gz`);
      } else {
        window.open(`http://${this.host}/upload/public/rancherui/ui/dist/static/master-dev.tar.gz`);
      }
      
    },

    handleDelete() {
      Http.get('/api/upload/DeleteDir').then((response) => {
        if (response.code === 0 && response.message === "OK") {
          this.$message({
            message: '清空文件成功',
            type: 'success'
          });

          this.rancherInstallState = '';
        }
      })
    },

    installNode() {
      if (this.rancherUiState === "企业版ui静态文件已上传" || this.rancherUiState === "开源ui静态文件已上传") {
        this.wsInstall = "";

        let loc = window.location
        this.wsInstall = new WebSocket(`ws://${loc.host}/ws/upload/NpmInstall`)
        this.wsInstall.onopen = () => {  
          if (this.rancherUiState === "企业版ui静态文件已上传") {
            this.wsInstall.send("installfile");
          } else {
            this.wsInstall.send("osinstallfile");
          }
        }
        this.wsInstall.onmessage = (evt) => {
          if (evt && evt.data) {
            this.rancherInstallState = evt.data
          }
        }
      }
    },
  },
  watch: {
    rancherUiState(val) {
      if (val === "企业版ui静态文件已上传" || val === "开源ui静态文件已上传") {
        if (this.modalNotify) {
          this.modalNotify.close();
        }
        let loc = window.location

        this.wsInstall = new WebSocket(`ws://${loc.host}/ws/upload/NpmInstall`)
        // 连接打开时触发
        this.wsInstall.onopen = () => {
          if (val === "企业版ui静态文件已上传") {
            this.wsInstall.send("installfile");
          } else {
            this.wsInstall.send("osinstallfile");
          }
        }
        // 接收到消息时触发  
        this.wsInstall.onmessage = (evt) => {
          if (evt && evt.data) {
            this.rancherInstallState = evt.data
          }
        }
      } else {
        if (this.modalNotify) {
          this.modalNotify.close();
        }
        this.modalNotify = this.$notify({
          title: 'rancher-ui静态文件没有上传',
          duration: 0
        });
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    color: #42b983;
  }
  .rancher-upload-layout {
    width: 100%;
    display: flex;
  }
  .rancher-upload-img {
    width: 148px;
    height: 148px;
    margin-left: 20px;
  }
  .rancher-upload-img img {
    width: 148px;
    height: 148px;
  }
  .rancher-upload-label {
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    height: 100%;
    font-size: 15px;
    box-sizing: border-box;
  }
  .rancher-upload-info {
    flex: 1;
    min-width: 700px;
  }
  .rancher-upload-list {
    width: 320px;
    min-width: 320px;
    padding-bottom: 20px;
  }
  .rancher-upload-list ul{
    height: 100%;
    padding: 0;
    margin: 0;
    margin-left: 20px;
    background: rgba(248, 248, 248, 1);
  }
  .rancher-upload-save {
    display: flex;
    justify-content: flex-end;
  }
  .bg-purple {
    padding: 10px;
    background: rgba(248, 248, 248, 1);
  }
  .rancher-upload-content {
    display: flex;
    align-items : center;
    padding: 10px 60px;
  }
  .rancher-from-content {
    display: flex;
    padding: 20px 0px 0px 60px;
  }
  .rancher-from {
    width: 90%;
    min-width: 400px;
  }
  .rancher-form-layout {
    display: flex;
  }
  .rancher-form-link-action {
    display: flex;
    justify-content: flex-end;
  }
  .rancher-form-layout .el-input{
    margin-right: 20px;
  }
  .from-color-display {
    display: inline-block;
    width: 20px;
    height: 20px;
    padding: 0px;
    margin: 0px;
    border: 1px solid #DCDFE6;
    background: #fff;
    border-radius: 4px;
  }
  .el-col {
    border-radius: 4px;
  }
  .el-row {
    margin-bottom: 20px;
  }
</style>
