import React, { useState } from 'react'

export default function Hex(isFirst, howColor=5, allCol, funcSet){
    if(isFirst){
        let colors=[]
        for(let i=0; i<howColor; i++){
            let color=''
            for(let i=0; i<6; i++){
                let randomVal= Math.floor(Math.random() * (15 - 0 + 1)) + 0;
                if( randomVal==10){
                  randomVal='A'
                }else if (randomVal===11){
                  randomVal='B'
                }else if (randomVal===12){
                  randomVal='C'
                }else if (randomVal===13){
                  randomVal='D'
                }else if (randomVal===14){
                  randomVal='E'
                }else if (randomVal===15){
                  randomVal='F'
                }
                color=color+randomVal
            }
            colors=[...colors, {index: i+1,isBlocked:false, hex:color}]
        } 
        return colors
    }
    if(isFirst===false){
      let colors=[]
      allCol.map((col)=>{
        if(col.isBlocked===false){
            let color=''
            for(let i=0; i<6; i++){
                let randomVal= Math.floor(Math.random() * (15 - 0 + 1)) + 0;
                if( randomVal==10){
                  randomVal='A'
                }else if (randomVal===11){
                  randomVal='B'
                }else if (randomVal===12){
                  randomVal='C'
                }else if (randomVal===13){
                  randomVal='D'
                }else if (randomVal===14){
                  randomVal='E'
                }else if (randomVal===15){
                  randomVal='F'
                }
                color=color+randomVal
            }
            col.hex=color
            colors=[...colors, col]
        }
        if(col.isBlocked===true){
          colors=[...colors, col]
        }      
      })
      return(colors)
    }
}
