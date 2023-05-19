
<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">LOGO</el-menu-item>
      <div class="flex-grow"/>
      
      <el-form ref="fromRef" :rules= "rules" :model="form" class="w-[250px]">
            <el-form-item prop="username">
               <el-input v-model="form.username" placeholder-shown="请输入用户名">
                  <template #prefix>
                     <el-icon class="el-input__icon">
                        <User />
                     </el-icon>
                  </template>
               </el-input>
            </el-form-item>

            <el-form-item prop="password">
               <el-input type="password" v-model="form.password" placeholder-shown="请输入密码" show-password>
                  <template #prefix>
                     <el-icon class="el-input__icon">
                        <Lock/>
                     </el-icon>
                  </template>
               </el-input>
            </el-form-item>
            <el-form-item>
               <el-button round color='#626aef' class="w-[250px]" type="primary" @click="onSubmit">登 录</el-button>
            </el-form-item>
         </el-form>

      <el-sub-menu index="2">
        <template #title>Fireams</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>

      


      <el-sub-menu index="3">
        <template #title>ammunition</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu> 
      </el-sub-menu>

      <el-sub-menu index="3">
        <template #title>optics&mounts</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu> 
      </el-sub-menu>

      <el-sub-menu index="3">
        <template #title>accessories</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu> 
      </el-sub-menu>

      <el-sub-menu index="3">
        <template #title>promotions</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu> 
      </el-sub-menu>

      <el-menu-item index="1">online only</el-menu-item>

      <el-menu-item index="1">new arrivals</el-menu-item>

    </el-menu>
  </template>



<script setup>
import { ref,reactive } from 'vue'
import { ElNotification } from 'element-plus'
import {login} from '~/api/manager'

// do not use same name with ref
const form = reactive({
   username: '',
   password: '',
   //   date1: '',
   //   date2: '',
   //   delivery: false,
   //   type: [],
   //   resource: '',
   //   desc: '',
})
const rules = {
   username:[{
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
   },
   {
      min: 3,
      max: 5,
      message: '用户名长度必须在3-5之间',
      trigger: 'blur'
   }
],
   password:[{
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
   },
   {
      min: 3,
      message: '密码长度必须大于3位',
      trigger: 'blur'
   }
      
   ]
}

const fromRef = ref(null)


const onSubmit = () => {
   fromRef.value.validate((valid)=>{
      
      if(!valid){
         return false
      }
      console.log("验证通过")
      login(form.username,form.password)
      .then(res=>{
         console.log(res.data)
         ElNotification({
            title: 'Error',
            message: "请求成功",
            type: 'error,'
         })
      })
      .catch(err=>{
         console.log(eer.response.data.msg);
         ElNotification({
            title: 'Error',
            message: "请求失败",
            type: 'error,'
         })
      })

   })

}
</script>

<style scoped>
.login-container{
   @apply min-h-screen bg-indigo-500;
}
.login-container .left, .login-container .right{
   @apply flex items-center justify-center;
}
.login-container .right{
   @apply  bg-indigo-50 flex-col;
}
.left>div>div:first-child{
   @apply font-bold text-5xl text-light-50 mb-4;
}
.left>div>div:last-child{
   @apply text-gray-200 text-sm;
}
.right .title{
   @apply font-bold text-3xl text-gray-800;
}
.right>div{
   @apply flex items-center justify-center my-5 text-gray-500 space-x-2;
}
.right .line{
   @apply h-[1px] w-16 bg-gray-500;
}
</style>