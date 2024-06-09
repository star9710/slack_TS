<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsInstance } from 'element-plus'
const tabPosition = ref<TabsInstance['tabPosition']>('left')
// 虚拟化表格
// const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
//     Array.from({ length }).map((_, columnIndex) => ({
//         ...props,
//         key: `${prefix}${columnIndex}`,
//         dataKey: `${prefix}${columnIndex}`,
//         title: [`#`, `网站地址`],
//         width: 150,
//     }))
// const columns = generateColumns(6)


</script>
<template>
    <el-card style="margin-bottom: 10px;">
        <template #header>
            <div class="card-header">
                <span>仪表盘</span>
                <el-button type="primary"><el-icon>
                        <Plus />
                    </el-icon><span>新建任务</span></el-button>
            </div>
        </template>
        <div class="dataList">
            <div>
                <span>
                    <span>紧急</span>
                    <span>0</span>
                </span>
                <span>
                    <span>高危</span>
                    <span>0</span>
                </span>
                <span>
                    <span>中危</span>
                    <span>0</span>
                </span>
                <span>
                    <span>低危</span>
                    <span>0</span>
                </span>
                <span>
                    <span>信息</span>
                    <span>0</span>
                </span>
            </div>
            <div>
                <span>
                    <span>目标总数</span>
                    <span>0</span>
                </span>
                <span>
                    <span>请求失败目标</span>
                    <span>0</span>
                </span>
            </div>
            <div class="scanning">
                <span><span>扫描模式</span><span>0</span></span>
            </div>
        </div>
    </el-card>


    <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="指纹">
            <el-table border style="height: 70vh;">
                <el-table-column type="index" width="60px" label="#" />
                <el-table-column prop="name" width="280px" label="网站地址" />
                <el-table-column prop="grade" width="100px" sortable label="状态码" />
                <el-table-column prop="grade" width="100px" sortable label="长度" />
                <el-table-column prop="address" label="标题" />
                <el-table-column prop="detail" label="指纹" />
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="漏洞">
            <el-table border style="height: 70vh;">
                <el-table-column type="index" width="60px" label="#" />
                <el-table-column prop="name" width="220px" label="漏洞名称" />
                <el-table-column prop="grade" width="160px" sortable label="风险等级" />
                <el-table-column prop="address" label="漏洞地址" />
                <el-table-column prop="detail" width="60px" label="详情" />
            </el-table>
        </el-tab-pane>
    </el-tabs>
    <!-- <div class="DataDisplay">
        <div class="SwitchBtn">
            <span class="btn">指纹</span>
            <span class="btn">漏洞</span>
        </div>
        <el-table-v2 :columns="columns" :data="[]" :row-height="40" :width="700" :height="400" :footer-height="50">
            <template #empty>
                <div class="flex items-center justify-center h-100%">
                    <el-empty />
                </div>
            </template>
        </el-table-v2>
    </div> -->
</template>
<style scoped>
.el-button:focus {
    outline: none;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dataList {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dataList>div {
    border-right: 1px solid #c7c7c7;
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center
}


.dataList>div>span>span {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.scanning {
    border-right: 0 solid #ffffff00 !important;
}

.DataDisplay {
    display: flex;
}

.SwitchBtn {
    display: flex;
    flex-direction: column;
}

.btn {
    border: 1px solid #c7c7c7;
    padding: 10px 15px;
    color: #141414;
    font-size: 12px !important;
}

.btn:hover {
    color: rgb(34, 136, 231);
}

.btn:active {
    color: rgb(34, 136, 231);
}

.el-table .cell {
    text-align: center;
}
</style>