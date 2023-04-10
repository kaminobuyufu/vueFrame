const initZbDialog = ( el:any, offset:number)=>{
  console.log(offset)
  const parent = el.offsetParent
  const referenceDisplacement = {
    x:(parent.clientWidth - el.clientWidth)/2,
    y:(parent.clientHeight - el.clientHeight)/2
  }

  //初始化弹层位置
  const initOffset = ()=>{
    el.style.top =  referenceDisplacement.y + offset + 'px'
    el.style.left =  referenceDisplacement.y + offset + 'px'
  }
  initOffset()

  //初始化弹层拖拽效果
  
}

export { initZbDialog }