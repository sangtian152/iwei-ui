<template>
  <div class="page-field">
    <div class="page-title">Field</div>
    <div class="page-part">
      <zmbl-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></zmbl-field>
      <zmbl-field label="邮箱" placeholder="请输入邮箱" type="email"></zmbl-field>
      <zmbl-field label="密码" placeholder="请输入密码" type="password"></zmbl-field>
      <zmbl-field label="手机号" placeholder="请输入手机号" type="tel"></zmbl-field>
      <zmbl-field label="网站" placeholder="请输入网址" type="url"></zmbl-field>
      <zmbl-field label="数字" placeholder="请输入数字" type="number"></zmbl-field>
      <zmbl-field label="生日" placeholder="请输入生日" type="date"></zmbl-field>
      <zmbl-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></zmbl-field>
    </div>

    <div class="page-part">
      <zmbl-field placeholder="登录邮箱" type="email"></zmbl-field>
      <zmbl-field placeholder="密码" type="password"></zmbl-field>
    </div>

    <div class="page-part">
      <zmbl-field label="邮箱" placeholder="成功状态" state="success"></zmbl-field>
      <zmbl-field label="邮箱" placeholder="失败状态" state="error"></zmbl-field>
      <zmbl-field label="邮箱" placeholder="警告状态" state="warning"></zmbl-field>
    </div>

    <div class="page-part">
      <zmbl-field label="验证码" placeholder="输入验证码">
        <img src="../assets/100x100.png" height="48px" width="100px">
      </zmbl-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-field'
};
</script>
