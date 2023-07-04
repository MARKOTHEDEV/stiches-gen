import { Box, TextArea } from "./shared/Box"
import './index.css'
import Button from "./shared/Button/Button"
import { useState } from "react"
function App() {
  const [code,setCode] = useState('')
  const handleGenerate =()=>{
    if(!code){
      return
    }

  const listOfObjects  = code.split(';').map((eachStyleCompCode=>{
        let [key,value] = eachStyleCompCode.replace("\n",'').split(':')
        key = key?.replace(/\s+/g, ' ').trim()??''
        value =value?.replace(/\s+/g, ' ').trim()??''
        return {[key]:value}
      }))

    let stiches = listOfObjects.reduce((result, currentObject) => {
      return { ...result, ...currentObject };
    }, {} );

    stiches = Object.fromEntries( Object.entries(stiches).filter(([ value]) => value !== '' && value !== null && value !== undefined))

    setCode(JSON.stringify(stiches))
  }
  return (
    <Box css={{'height':'100vh','width':'100%',
    'display':'flex',
    'alignItems':'center',
    'flexDirection':'column',
    'justifyContent':'space-evenly',
    'span':{
      'color':'$green100'
    },
    '.intro':{
      'color':'$green200'
    },
    '.footer':{
    }
    }}> 
        <Box css={{'maxWidth':'700px','margin':'0 auto',padding:'1rem','textAlign':'center',
      'h1':{
        fontSize:'1rem',
        '@bp2':{
          'fontSize':'1.6rem'
        }
      }
      }}>
          <h1>Convert Your <span>Styled Component</span> to <span>Stiches</span></h1>
        <br />
        <p>
          <strong><span className="intro">Just Paste the content in the back thick in the box bellow</span></strong>
          </p>
        <TextArea 
        placeholder={`
              font-size: 1.5em;
              text-align: center;
              color: #BF4F74;

        `}
        value={code}
        onChange={e=>{
            setCode(e.target.value)
        }}
        />
        <br />
        <br />
        <Button css={{
          'width':'100%',
          margin:'0 auto',
          '@bp2':{
            'width':'40%'
          }
        }}
        onClick={handleGenerate}
        >
          Generate
        </Button>
      </Box>

        <p style={{'padding':'1rem','textAlign':'left'}}>
        "Crafted with love and mischief by <a target="_blank" href="https://www.linkedin.com/in/markothedev/"><span><strong>markothedev</strong></span></a>, the master of code wizardry, who fervently preaches the art of <a target="_blank" href="https://stitches.dev/"><span><strong>stitching</strong></span></a> together digital wonders!"
        </p>
    </Box>
  )
}

export default App
