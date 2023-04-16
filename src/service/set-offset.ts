const initZbDialog = ( el:any, offset:number)=>{
  const parent = el.offsetParent
  const referenceDisplacement = {
    x:(parent.clientWidth - el.clientWidth)/2.5,
    y:(parent.clientHeight - el.clientHeight)/2.5
  }

  //初始化弹层文本禁止选中
  el.addEventListener('selectstart',()=>false)

  //初始化弹层位置
  const initOffset = ()=>{
    el.style.zIndex = offset
    el.style.top =  referenceDisplacement.y + offset*(parent.clientHeight*0.05) + 'px'
    el.style.left =  referenceDisplacement.x + offset*(parent.clientWidth*0.05) + 'px'
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
    const canselMove = () => {
      header.removeEventListener('mouseup',canselMove)
      parent.removeEventListener('mousemove',move)
    }
    parent.addEventListener('mousemove',move)
    header.addEventListener('mouseup',canselMove)
  }
  header.addEventListener('mousedown',headerMove)

  //初始化弹层层级事件
  const initOverviewLevel = (e?:Event) => {
    const currentView = () => {
      const current = el.style.zIndex
      const allDialog =  parent.querySelectorAll('.zb_dialog')
      el.style.zIndex = allDialog.length
      allDialog.forEach((item:HTMLElement) => {
        if(item.style.zIndex>current){
          if(item !== el) item.style.zIndex = String(Number(item.style.zIndex) - 1)
        }
      })
    }
    el.addEventListener('mousedown',currentView)
  }
  initOverviewLevel()
}

export { initZbDialog }