import { useRef, useEffect } from 'react'
import { Network, type Node, Edge, DataInterfaceNodes } from 'vis-network'

import './global.css'

const nodes: Node[] = [
  { 
    id: 1, 
    label: '史前时代 （约公元前300万 ~ 前3000年）', 
    widthConstraint:120, 
    shape:'box',
  },
  // {
  //   id:'1.1',
  //   label:'南方古猿（约300万年前）',
  //   shape:'circle'
  // },
  // {
  //   id:'1.2',
  //   label:'旧石器时代（约公元前200万年）',
  //   shape:'circle'
  // },
  // {
  //   id:'1.3',
  //   label:'新石器时代（约公元前8000年）',
  //   shape:'circle'
  // },
  // {
  //   id:'1.4',
  //   label:'苏美尔文明 （公元前3500年左右）',
  //   shape:'circle'
  // },
  // {
  //   id:'1.5',
  //   label:'古埃及文明（约公元前3150年左右）',
  //   shape:'circle'
  // },

  { 
    id: 2, 
    label: '古代文明 （公元前3000 ~ 公元500年）', 
    widthConstraint:120, 
    shape:'box',
  },
  {
    id:'2.1',
    label:'法老王朝（公元前3000年左右）',
    shape:'circle'
  },
  {
    id:'2.2',
    label:'波斯帝国（公元前525年）',
    shape:'circle'
  },
  {
    id:'2.3',
    label:'古巴比伦文明（公元前1750年）',
    shape:'circle'
  },
  {
    id:'2.4',
    label:'东亚文明（公元前2070年）',
    shape:'circle'
  },
  {
    id:'2.5',
    label: '古印度文明（公元前2600年）',
    shape:'circle'
  },
  {
    id:'2.6',
    label:'古希腊文明（公元前2000年）',
    shape:'circle'
  },
  {
    id:'2.7',
    label:'古罗马文明（公元前753年）',
    shape:'circle'
  },


  { 
    id: 3, 
    label: '中世纪（500 ~ 1500）', 
    widthConstraint:120, 
    shape:'box',
  },
  { 
    id: 4, 
    label: '近代早期（1500 ~ 1800）', 
    widthConstraint:120, 
    shape:'box',
  },
  { 
    id: 5, 
    label: '近代中期及末期（1800 ~ 1914）', 
    widthConstraint:120, 
    shape:'box',
  },
  { 
    id: 6, 
    label: '20世纪（1914 ~ 2000）', 
    widthConstraint:120, 
    shape:'box',
  },
  { 
    id: 7, 
    label: '21世纪（2001 ~）', 
    widthConstraint:120, 
    shape:'box',
  }
]

const edges: Edge[] = [
  {from:1, to:2, arrows:{to:true}, length:80},
  


  {from:2, to:3, arrows:{to:true}},
  {from:3, to:4, arrows:{to:true}},
  {from:4, to:5, arrows:{to:true}},
  {from:5, to:6, arrows:{to:true}},
  {from:6, to:7, arrows:{to:true}},
]

function HomePage() {
  const container = useRef<HTMLDivElement|null>(null)

  useEffect(()=>{
    const network = new Network(container.current, {nodes, edges}, {
      clickToUse:true,
      layout:{
        hierarchical: {
          direction: "LR",
          nodeSpacing: 100, 
          levelSeparation: 200,
        }
      },
      physics:false
    })

    network.on('click', ev=>{
      console.log(ev)
    })

  })

  return (
    <div 
      ref={container} 
      style={{width:'100vw', height:'100vh'}}
      ></div>
  )
}

export default HomePage
