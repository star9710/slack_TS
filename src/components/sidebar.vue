<!-- 左侧菜单栏 -->
<template>
    <div>
        <el-menu :collapse="true" :router="true" :default-active="$route.path" active-text-color="#fff"
            background-color="#F2F3F5" text-color="#000" class="flexBetween">
            <el-menu-item-group>
                <!-- 首页 -->
                <el-menu-item index="/Home">
                    <el-icon>
                        <House />
                    </el-icon>
                    <template #title>
                        <span>
                            首页
                        </span>
                    </template>
                </el-menu-item>
                <!-- 渗透 -->
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <Smoking />
                        </el-icon>
                        <span>渗透</span>
                    </template>
                    <el-menu-item index="/Permeation">网站扫描</el-menu-item>
                    <el-menu-item index="/Portscan">端口扫描</el-menu-item>
                    <el-menu-item index="/Dirsearch">目录扫描</el-menu-item>
                    <el-menu-item>JSFinder</el-menu-item>
                    <el-menu-item>漏洞详情</el-menu-item>
                </el-sub-menu>
                <!-- 资产收集 -->
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <OfficeBuilding />
                        </el-icon>
                        <span>资产收集</span>
                    </template>
                    <el-menu-item>从公司名收集资产</el-menu-item>
                    <el-menu-item>子域名爆破</el-menu-item>
                    <el-menu-item>域名信息查询</el-menu-item>
                </el-sub-menu>
                <!-- 位置引擎 -->
                <el-sub-menu index="3">
                    <template #title>
                        <el-icon>
                            <Monitor />
                        </el-icon>
                        <span>位置引擎</span>
                    </template>
                    <el-menu-item index="/Fofa">FOFA</el-menu-item>
                    <el-menu-item>鹰图</el-menu-item>
                    <el-menu-item>代理池</el-menu-item>
                </el-sub-menu>
                <!-- 工具 -->
                <el-sub-menu index="4" style="max-height: 56px">
                    <template #title>
                        <el-icon>
                            <Tools />
                        </el-icon>
                        <span>工具</span>
                    </template>
                    <el-menu-item>加解密模块</el-menu-item>
                    <el-menu-item>杀软识别/提权补丁</el-menu-item>
                    <el-menu-item>Fscan内容提取</el-menu-item>
                    <el-menu-item>备忘录</el-menu-item>
                    <el-menu-item>联想字典生成器</el-menu-item>
                    <el-menu-item>微信AppId校验</el-menu-item>
                </el-sub-menu>
            </el-menu-item-group>


            <!-- 菜单栏底部 -->
            <el-menu-item-group class="customFootStyle">
                <el-menu-item>
                    <el-icon>
                        <Document />
                    </el-icon>
                    <template #title><span>运行日志</span></template>
                </el-menu-item>


                <el-menu-item>
                    <el-icon>
                        <Refresh />
                    </el-icon>
                    <template #title><span>更新</span></template>
                </el-menu-item>


                <el-menu-item>
                    <el-icon>
                        <Tools />
                    </el-icon>
                    <template #title><span>设置</span></template>
                </el-menu-item>

                <!-- 更多 -->
                <el-sub-menu index="5">
                    <template #title>
                        <el-icon>
                            <Operation />
                        </el-icon>
                        <span>更多</span>
                    </template>
                    <el-sub-menu>
                        <template #title>
                            <span>语言</span>
                        </template>
                        <el-menu-item>简体中文</el-menu-item>
                        <el-menu-item>English</el-menu-item>
                    </el-sub-menu>
                    <el-menu-item index="about">关于</el-menu-item>
                </el-sub-menu>
            </el-menu-item-group>
        </el-menu>
    </div>
</template>
<style scoped>

.flexBetween {
    display: flex;
    height: 100vh;
    align-items: stretch;
    flex-direction: column;
    justify-content: space-between;
}

.customFootStyle ul li:hover {
    color: rgb(34, 136, 231)
}

.el-menu-item.is-active,
.el-icon {
    color: #000;
}

.el-menu--collapse .el-sub-menu.is-active .el-sub-menu__title {
    color: #000;
}
</style>