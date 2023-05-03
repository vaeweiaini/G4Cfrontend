<script>
</script>
<template>
   <el-row class="login-container">
      <!-- <el-col :lg="16" :md="12" class="left">
         <div>
            <div>G4C</div>
            <div>订单 客户 管理界面</div>
         </div>
      </el-col> -->

      <el-col :lg="8" :md="12" class="right">
         <h2 class="title">Creat your Account</h2>
         <div>
            <span class="line"></span>
            <span>Register Today</span>
            <span class="line"></span>
         </div>
         <el-form ref="fromRef" :rules= "rules" :model="form" class="w-[250px]">

            <el-form-item prop="fullname">
               <el-input v-model="form.fullname" placeholder="full name">
                  
               </el-input>
            </el-form-item>

            <el-form-item prop="birth">
               <el-input v-model="form.birth" placeholder="date of birth (yyyy/mm/dd)">
                  
               </el-input>
            </el-form-item>

            <el-form-item prop="email">
               <el-input v-model="form.email" placeholder="email (this will be you userID)">    
               </el-input>
            </el-form-item>

            <el-form-item prop="password">
               <el-input type="password" v-model="form.password" placeholder="password" show-password>
                  <template #prefix>
                     <el-icon class="el-input__icon">
                        <Lock/>
                     </el-icon>
                  </template>
               </el-input>
            </el-form-item>

            <el-form-item prop="comfirm_password">
               <el-input type="password" v-model="form.comfirm_password" placeholder="comfirm password" show-password>
                  <template #prefix>
                     <el-icon class="el-input__icon">
                        <Lock/>
                     </el-icon>
                  </template>
               </el-input>
            </el-form-item>

            <el-form-item prop="phone">
               <el-input v-model="form.phone" placeholder="phone number (without +1)">
               </el-input>
            </el-form-item>


            <el-form-item>
               <el-button round color='#626aef' class="w-[250px]" type="primary" @click="onSubmit">Register</el-button>
            </el-form-item>
         </el-form>
      </el-col>
   </el-row>
</template>

<script setup>
import { ref,reactive } from 'vue'
import { ElNotification } from 'element-plus'
import {register} from '~/api/manager'

// do not use same name with ref
const form = reactive({
   fullname: '',
   birth: '',
   email: '',
   password: '',
   comfirm_password: '',
   //   date1: '',
   //   date2: '',
   //   delivery: false,
   //   type: [],
   //   resource: '',
   //   desc: '',
})
const rules = {
   fullname:[{
      required: true,
      message: 'Enter your full name',
      trigger: 'blur'
   }],
    birth:[{
      required: true,
      message: 'Enter your birth',
      trigger: 'blur'
   }],  
    email:[{
      required: true,
      message: 'Enter your email',
      trigger: 'blur'
   }],
   password:[{
      required: true,
      message: 'password can not be blank',
      trigger: 'blur'
   },
   {
      min: 6,
      message: 'Password length must be greater than 6 digit',
      trigger: 'blur'
   }],
   comfirm_password:[{
      required: true,
      message: 'password can not be blank',
      trigger: 'blur'
   },
   {
      min: 6,
      message: 'Password length must be greater than 6 digit',
      trigger: 'blur'
   }],
   phone:[{
      required: true,
      message: 'Enter your phone number',
      trigger: 'blur'
   },
   {
      max: 10,
      message: 'Phone number must be 10 digit(without +1)',
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
      login(form.fullname,form.birth,form.email,form,password,form.phone)
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