<script lang="ts" setup>
import { reactive, ref } from 'vue';
import axios from 'axios';
import { Search } from '@element-plus/icons-vue';


const searchQuery = ref('');
const fofaData = reactive({
    tableData : [] as any[][]
});

const search = async () => {
    const apiKey = '32972088b1a7c1521b68ffcd92b7b02b';
    const query = `title="${searchQuery.value}"`;
    const queryBase64 = btoa(query);
    const fields = 'link,title,port,ip,domain,country_name,region,city,icp';
    const url = `https://fofa.info/api/v1/search/all?key=${apiKey}&qbase64=${queryBase64}&fields=${fields}`;

    try {
        const response = await axios.get(url);
        fofaData.tableData.push(response.data.results)
    } catch (error) {
        console.error('API 请求失败:', error);
    }
};

</script>
<template>
    <el-form @submit.prevent="search">
        <el-form-item label="查询条件">
            <div class="head">
                <el-autocomplete v-model="searchQuery" placeholder="Search..." style="width: 100%;">
                </el-autocomplete>
                <el-button type="primary" :icon="Search" @click="search"
                    style="margin-left: 10px; margin-right: 10px;">查询</el-button>
                <!-- <el-dropdown>
                    <el-button color="#A29EDE">
                        数据导出/复制<el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item :icon="Share">导出当前查询页数据</el-dropdown-item>
                            <el-dropdown-item :icon="Share">导出全部数据</el-dropdown-item>
                            <el-dropdown-item :icon="CopyDocument" divided>复制当前页URL</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown> -->
            </div>
        </el-form-item>
    </el-form>

    <div class="my-header">
        <div>
            <el-checkbox size="large">排除干扰(专业版)</el-checkbox>
            <el-checkbox size="large">证书(个人版)</el-checkbox>
        </div>
    </div>

    <el-tabs type="card" style="margin-top: 10px;" closable>
        <el-tab-pane>
            <el-table :data="fofaData.tableData[0]" border style="width: 100%;height: 65vh;">
                <el-table-column type="index" label="#" width="60px" />
                <el-table-column prop="0" label="URL" width="200"/>
                <el-table-column prop="1" label="标题" width="200" />
                <el-table-column prop="2" label="端口" width="200" />
                <el-table-column prop="3" label="IP" width="200" />
                <el-table-column prop="4" label="域名" width="200" />
                <el-table-column prop="5" label="国家" width="200" />
                <el-table-column prop="6" label="区域" width="200" />
                <el-table-column prop="7" label="城市" width="200" />
                <el-table-column prop="8" label="icp备案号" width="150" />
            </el-table>
        </el-tab-pane>
    </el-tabs>



</template>

<style scoped>
.head {
    width: 100%;
    display: flex;
}

.el-button:focus {
    outline: none;
}

.my-header {
    text-align: left;
}
</style>