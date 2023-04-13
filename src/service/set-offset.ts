const initZbDialog = ( el:any, offset:number)=>{
  const parent = el.offsetParent
  const referenceDisplacement = {
    x:(parent.clientWidth - el.clientWidth)/2,
    y:(parent.clientHeight - el.clientHeight)/2
  }

  //初始化弹层文本禁止选中
  el.addEventListener('selectstart',()=>false)

  //初始化弹层位置
  const initOffset = ()=>{
    el.style.top =  referenceDisplacement.y + offset + 'px'
    el.style.left =  referenceDisplacement.y + offset + 'px'
  }
  initOffset()

  //初始化弹层拖拽效果
  const header = el.querySelector('header')
  const headerMove = (event:any)=>{
    const initEleXY = {
      x:el.offsetLeft,
      y:el.offsetTop
    }
    const initMouseXY = {
      x:event.x,
      y:event.y
    }
    const move = (event:any) => {
      el.style.left = initEleXY.x + (event.x - initMouseXY.x) + 'px'
      el.style.top = initEleXY.y + (event.y - initMouseXY.y) + 'px'
    }
    header.addEventListener('mousemove',move)
    header.addEventListener('mouseup',()=>{
      header.removeEventListener('mousemove',move)
    })
  }
  header.addEventListener('mousedown',headerMove)
}

export { initZbDialog }