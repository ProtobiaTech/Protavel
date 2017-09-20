<template>
    <div class="admin">
        <el-row>
            <el-col :span="24">
                <div class="grid-header">Protavel Admin 头部导航栏</div>
            </el-col>
        </el-row>
        <el-row style="height: 100%">
            <el-col :span="4" class="grid-sider">
                <div>
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>导航一</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                        <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                    </el-menu>
                </div>
            </el-col>
            <el-col :span="20" class="grid-content">
                <div>内容</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    body, html {
        height: 100vh;
    }

    .admin {
        height: 100%;
    }

    .grid-header {
        width: 100%;
        height: 30px;
        text-align: center;
        background-color: #99a9bf;
    }

    .grid-sider {
        height: 100%;
        background-color: #eef1f6;
    }

    .grid-content {
        height: 100%;
        background-color: #e5e9f2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
