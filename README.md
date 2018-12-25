# react-autoheight-textarea

基于contentEditable="plaintext-only"

## Usage

**install**

npm i --save git+https://github.com/liuhong1happy/react-autoheight-textarea.git

**props**

- onChange `function`文本变化事件, 调用方式为`onChange={(text)=> console.log(text)}`
- value 组件值，默认`value=""`
- max 最大字数，默认`max=0`
- placeholder 输入提示

```js
  import TextArea from 'react-autoheight-textarea'
  import 'react-autoheight-textarea/lib/index.less'
  // ...
  <TextArea 
    value={this.state.content} 
    onChange={(content)=> this.setState({ content })} 
    max={200}
    placeholder="请输入"
  />
  // ...
```