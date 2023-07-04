
import {styled} from '../../stitches.config.ts'


//this is just re-useable div dont think too much
export const Box = styled('div',{})

//dont want to over  do  any component for now so let keep it simple
export const TextArea = styled('textarea',{
    'backgroundColor':'$gray100',
    'border':'transparent',
    'borderRadius':'10px',
    'width':'100%',
    'minHeight':'250px',
    'outline':'none',
    padding:'1rem',
    '&:focus':{
        'border':'2px solid $green100'
    }
})