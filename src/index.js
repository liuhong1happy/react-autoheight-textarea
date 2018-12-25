import React, { Component } from 'react';
import classNames from 'classnames'

class TextArea extends Component {
  state = {
    focus: false,
    content: "",
    contentLength: 0
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let { value } = nextProps;
    if(value===undefined) return
    if(this.textArea) {
      let prevValue = this.textArea.innerText;
      if(prevValue !== value) {
        this.textArea.innerText = value;
        this.setState({
          content: value,
          contentLength: (value || "").length
        })
      }
    }
  }
  
  handleCheckLink(content) {
    let linkUrl = FilterFirstLink(content);
    console.log('LinkURL', linkUrl);
    linkUrl && this.props.onFetchLink && this.props.onFetchLink(linkUrl);
  }

  handleTextChange(evt) {
    if(evt.type==="paste") {
      let plainText = evt.nativeEvent.clipboardData.getData("text/plain");
      if(plainText) {
        this.handleCheckLink(plainText);
      }
    }

    const content = evt.target.innerText;

    if(evt.type==="keyup") {
      switch(evt.keyCode) {
        case 13:
        case 108:
          this.handleCheckLink(content);
          break;
        default:
          break;
      }
    }

    this.setState({
      content,
      contentLength: content.length,
    })
    
    this.props.onChange &&
    this.props.onChange(content)
  }

  render() {
    const { placeholder, max } = this.props;
    const { focus, contentLength } = this.state;

    return (
      <div className="react-autoheight-textarea">
        <div className={classNames("input-control", { focus })} onClick={()=> this.textArea && this.textArea.focus()}>
          <div 
            className="textarea"
            ref={ref=> this.textArea = ref}  
            onInput={(evt)=> this.handleTextChange(evt)} 
            onPaste={(evt)=> this.handleTextChange(evt)} 
            onFocus={()=> this.setState({ focus: true })} 
            onBlur={()=> this.setState({ focus: false })} 
            onKeyUp={(evt)=> this.handleTextChange(evt)}
            contentEditable="plaintext-only" 
          ></div>
          <div className={classNames("placeholder", { hidden: focus || (this.textArea && this.textArea.innerText.trim()) })}>
            { placeholder }
          </div>
        </div>
        <div className={classNames("max-number",{ hidden: !max || contentLength < max, red: contentLength > max })}>
          <span className="can-red">{contentLength}</span>/<span>{max}</span>
        </div>
      </div>
    );
  }
}

export default TextArea;
