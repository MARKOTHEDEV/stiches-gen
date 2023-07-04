import type * as Stitches from '@stitches/react';
// import { styled } from "../../../stitches.config";
import { styled } from '../../../stitches.config'




export const StyledButton = styled('button',{
    border:'transparent',
    borderRadius:'8px',
    padding:'.8rem 1.8rem',
    fontSize:'1rem',
    'textAlign':'center',
    cursor:'pointer',
    display:'block',
    // 'outline':'none',
    'position':'relative',
    'transition':'all .2s ease-in-out',
    backgroundColor:'$green300',
    'color':'White',
    '&:hover':{
        backgroundColor:'$green100'
    },
    '&:focus':{
        outline: '$green100 solid 2px',
        border:'2px solid white ',
        backgroundColor:'$green100',
        'color':'white'

     
    },
    '& .btn_icon':{
        fontSize:'1.2rem',
        padding:'0',
        'transform':'translateY(3px)',
        display:'inline-block',
        '&.left':{
        },
        '&.right':{
            // paddingLeft:'.9rem',
        },
    },
    '& .btn_icon.left':{
            paddingRight:'.9rem',
    },
    '& .btn_icon.right':{
        paddingLeft:'.9rem',
    },
    variants:{
        'color':{
            'disable':{
                'opacity':.5
            },
            'white':{
                backgroundColor:'transparent',
                color:'$green300',
                'border':'1px solid $green300',
                '&:hover':{
                    backgroundColor:'White',
                    color:'$green300',       
                 }
            },
            'danger':{
                backgroundColor:'transparent',
                color:'#D40F0F',
                'border':'1px solid #D40F0F',
                '&:hover':{
                    backgroundColor:'#D40F0F',
                    color:'white',       
                 }
            },
            'defualt':{}
        },
    }
})

export type StyledButtonVariants =   Stitches.VariantProps<typeof StyledButton>
