<script lang="ts" setup>
import { QuestionFilled, CopyDocument, DocumentChecked } from '@element-plus/icons-vue';
</script>
<template>
  <el-form style="width: 60%;margin: auto;">
    <el-form-item>
      <template #label>IP:
        <el-tooltip placement="right-end">
          <template #content>
            目标支持换行分割,IP支持如下格式:<br />
            192.168.1.1<br />
            192.168.1.1/8<br />
            192.168.1.1/16<br />
            192.168.1.1/24<br />
            192.168.1.1,192.168.1.2<br />
            192.168.1.1-192.168.255.255<br />
            192.168.1.1-255<br /><br />
            如果IP输入模式为192.168.0.1:6379此类形式，则只扫描该端口<br />
            <br />
            排除IP可以在可支持输入的IP格式前加!:<br />
            !192.168.1.6/28<br />
            ...<br />
            <br />
            如果端口遗漏多请在配置中调高端口超时时间
          </template>
          <el-icon>
            <QuestionFilled size="24" />
          </el-icon>
        </el-tooltip>
      </template>
      <el-input type="textarea" rows="3" resize="none" />
    </el-form-item>

    <el-form-item label="预设端口:">
      <el-radio-group>
        <el-radio value="1">数据库端口</el-radio>
        <el-radio value="2">企业端口</el-radio>
        <el-radio value="3">高危端口</el-radio>
        <el-radio value="4">全端口</el-radio>
        <el-radio value="5">自定义</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="端口列表:">
      <el-input type="textarea" rows="3" resize="none" />
    </el-form-item>
    <el-form-item label="功能:">
      <el-button type="primary">开始扫描</el-button>
      <el-button plain class="line">线程：1000</el-button>
      <el-button class="moredata">更多参数</el-button>
    </el-form-item>
  </el-form>
  <el-drawer size="40%">
    <template #header>
      <h4>设置高级参数</h4>
    </template>
  </el-drawer>

  <div style="position: relative;">
    <el-tabs type="card">
      <el-tab-pane label="端口控制台" name="1">
        <el-table border style="height: 42vh;">
          <el-table-column type="selection" width="55px" />
          <el-table-column prop="host" label="主机" />
          <el-table-column prop="port" label="端口" width="100px" />
          <el-table-column prop="fingerprint" label="指纹" />
          <el-table-column prop="link" label="目标">

          </el-table-column>
          <el-table-column prop="title" label="网站标题" />
        </el-table>

        <!-- 进度条 -->
        <div class="my-header" style="margin-top: 5px;">
          <el-progress :text-inside="true" :stroke-width="20" color="#5DC4F7" style="width: 70%;">
            <el-pagination :page-sizes="[10, 20, 50]" layout="total, sizes, prev, pager, next">
            </el-pagination>
          </el-progress>
        </div>
      </el-tab-pane>
      <el-tab-pane label="脆弱账号" name="2">
        <el-table border style="height: 45vh;">
          <el-table-column type="index" width="60px" label="#" />
          <el-table-column prop="host" label="主机" />
          <el-table-column prop="protocol" label="协议" />
          <el-table-column prop="username" label="用户名" />
          <el-table-column prop="password" label="密码" />
          <el-table-column prop="time" label="扫描时间" />
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <div class="custom_eltabs_titlebar" style="position: absolute;right: 0px;top: 0px;">
      <el-button-group>
        <el-button style="border: none;" :icon="CopyDocument">复制全部URL</el-button>
        <el-button style="border: none;" :icon="DocumentChecked">
          <!-- <template #icon>

                    </template> -->
          导出
        </el-button>
      </el-button-group>
    </div>
  </div>

</template>
<style scoped>
.moredata {
  color: #409EFF;
  border: none;
  background-color: #ffffff00;
  padding: 0;
}

.moredata:active,
.moredata:hover {
  border-bottom: 1px solid #65b2ff;
  border-radius: 0%;
  padding: 0;
  color: #65b2ff;
}

.line {
  background-color: #F4F4F5
}

.el-button:focus {
  outline: none;
}
</style>