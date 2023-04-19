<script>
</script>
<template>
   <el-row class="login-container">
      <el-col :lg="16" :md="12" class="left">
         <div>
            <div>G4C</div>
            <div>订单 客户 管理界面</div>
         </div>
      </el-col>

      <el-col :lg="8" :md="12" class="right">
         <h2 class="title">欢迎回来</h2>
         <div>
            <span class="line"></span>
            <span>账号密码登陆</span>
            <span class="line"></span>
         </div>
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
      </el-col>
   </el-row>
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