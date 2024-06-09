<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'

// 初始化时调用
onMounted(() => {
    dir.value = []
});
const from = reactive({
    url: '',
    options: ['GET', 'POST', 'HEAD', 'OPTIONS'],
    defaultOption: 'GET',
    exts: 'php,aspx,asp,jsp,html,js',
    statusFilter: '',
    paths: [] as string[],
    percentage: 0,
    id: 0,
    currentRate: 0,
    errorCounts: 0,
    redirectClient: false,
    alive: false,
    respDialog: false,
    content: ""
})
const dir = ref([{}])

let redirect = false
if (from.redirectClient) {
    redirect = true
}

const config = reactive({
    drawer: false,
    thread: 50,
    timeout: 8,
    times: 5,
    failedCounts: 0,
    exclude: "",
    headers: "",
    customDict: "",
})
</script>
<template>
    <el-form :model="from">
        <el-form-item>
            <div class="head" style="display: flex;width: 100%;">
                <el-select v-model=from.defaultOption value=options style="width: 20vw;">
                    <el-option v-for="item in from.options" :value="item" :label="item" />
                </el-select>

                <el-input v-model="from.url" placeholder="请输入URL地址" style="margin-right: 5px;" />

                <el-button type="primary">开始扫描</el-button>
                <el-button type="danger" style="display: none;">停止扫描</el-button>
                <el-button color="rgb(194, 194, 196)" style="margin-left: 5px;display: none;">参数设置</el-button>
            </div>
        </el-form-item>
        <el-form-item>
            <el-space>
                <div>
                    <span>重定向跟随：</span>
                    <el-switch v-model="from.redirectClient" inline-prompt active-text="关闭" inactive-text="开启" />
                </div>
                <div>
                    <span>初始不判断存活：</span>
                    <el-switch v-model="from.alive" inline-prompt active-text="关闭" inactive-text="开启" />
                </div>
                <el-tag>字典大小:{{ from.paths.length }}</el-tag>
                <el-tag>线程:{{ config.thread }}</el-tag>
                <el-tooltip placement="bottom" content="请求失败数量">
                    <el-tag type="danger">ERROR:{{ from.errorCounts }}</el-tag>
                </el-tooltip>
            </el-space>
        </el-form-item>
    </el-form>
    <el-drawer v-model="config.drawer" size="50%">
        <template #header>
            <h3>设置高级参数</h3>
        </template>
        <el-form label-width="auto">
            <el-form-item label="线程(MAX 500):">
                <el-input-number v-model="config.thread" :min="1" :max="500" />
            </el-form-item>
            <el-form-item label="超时时长(s):" class="el-margin">
                <el-input-number v-model="config.timeout" :min="1" :max="20" />
            </el-form-item>
            <el-form-item class="el-margin">
                <template #label>
                    <span>过滤长度重复数据:</span>
                    <el-tooltip placement="left">
                        <template #content>值为0时不过滤数据</template>
                        <el-icon>
                            <QuestionFilled size="24" />
                        </el-icon>
                    </el-tooltip>
                </template>
                <el-input-number v-model="config.times" :min="1" :max="10000" />
            </el-form-item>
        </el-form>
    </el-drawer>

</template>

<style scoped>
.el-button:focus {
    outline: none;
}

.el-input__inner {
    width: 100%;
}

.el-space__item {
    color: black;
}
</style>