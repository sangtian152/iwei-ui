## Field
::: tip
<div>表单编辑器。</div>
:::

### 引入
```javascript
import { Field } from 'iwei-ui';

Vue.component(Field.name, Field);
```

### 基础用法
```html
<zmbl-field label="用户名" placeholder="请输入用户名" v-model="username"></zmbl-field>
<zmbl-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></zmbl-field>
<zmbl-field label="密码" placeholder="请输入密码" type="password" v-model="password"></zmbl-field>
<zmbl-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></zmbl-field>
<zmbl-field label="网站" placeholder="请输入网址" type="url" v-model="website"></zmbl-field>
<zmbl-field label="数字" placeholder="请输入数字" type="number" v-model="number"></zmbl-field>
<zmbl-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></zmbl-field>
<zmbl-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></zmbl-field>
```

### 设置校验状态
```html
<zmbl-field label="邮箱" state="success" v-model="email"></zmbl-field>
<zmbl-field label="邮箱" state="error" v-model="email"></zmbl-field>
<zmbl-field label="邮箱" state="warning" v-model="email"></zmbl-field>
```
### 自定义内容（例如添加验证码）
```html
<zmbl-field label="验证码" v-model="captcha">
  <img src="../assets/100x100.png" height="45px" width="100px">
</zmbl-field>
```

### 属性
| 参数            | 说明                                     | 类型    | 可选值     | 默认值     |
|-------------------|---------------------------------------|----------|-------------|-----------|
| type	      | 输入框类型	      | String  |	text, number, email, url, tel, date, datetime, password, textarea      | 	text    |
| label	      | 标签	      | String	      | 	    |    |
| value	      | 绑定表单输入值	      | String		      |     |    |
| rows	      | 类型为 textarea 时可指定高度（显示行数）      | 	Number		      |     |    |
| placeholder	      | 占位内容      | 	String	      | 	    |
| disableClear      | 	禁用 clear 按钮	      | Booean	      |    | 	false    |
| readonly      | 	readonly	      | Boolean	      |     |	false    |
| disabled      | 	disabled	      | Boolean		      |     |false    |
| state	      | 校验状态	      | String	error, success, warning	      |     |
| attr	      | 设置原生属性，例如 :attr="{ maxlength: 10 }"	      | Object	      |     |    |

### Slot
| name            | 说明                                     |
|-------------------|---------------------------------------|
| — | 显示的 HTML 内容     |