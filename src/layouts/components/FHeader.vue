<script setup></script>
<template>
    <div class="f-header">
        <span class="logo">
            
            <el-icon class="mr-1"><House /></el-icon>
            G4C
        </span>
        <el-icon class="icon-btn"><fold /></el-icon>
        <el-icon class="icon-btn" @click="handleRefresh"><refresh /></el-icon>
   

        <div class="ml-auto flex items-center">
            <el-icon class="icon-btn mr-4" @click="toggle">
                <FullScreen v-if="!isFullscreen"/>
                <aim v-else/>
            </el-icon>

            <el-dropdown class="dropdown">
                <span class="flex items-center text-light-50">
                    <el-avatar class="mr-2" :size="25" :src="circleUrl" />
                     Username
                    <el-icon class="el-icon--right"><arrow-down /></el-icon>
                </span>
             <template #dropdown>
                <el-dropdown-menu>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
             </el-dropdown-menu>
            </template>
        </el-dropdown>   
        </div>
    </div>
</template>

<script setup>
    import { useFullscreen } from '@vueuse/core'
    const {isFullscreen, toggle} = useFullscreen()
    const handleRefresh = ()=>location.reload()


</script>

<style>
.f-header{
    @apply flex items-center bg-zinc-900 text-light-50 fixed top-0 left-0 right-0;
    height: 64px;
}
.logo{
    width: 250px;
    @apply flex justify-center items-center text-xl front-thin;

}
.icon-btn{
    @apply flex justify-center items-center;
    width: 42px;
    height: 64px;
    cursor: pointer;

}
.icon-btn:hover{
    @apply bg-zinc-800;
}
.f-header .dropdown{
    width: 42px;
    height: 64px;
    @apply flex justify-center items-center text mx-5;
}
</style>
