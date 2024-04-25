import {Box,Dialog,Typography,styled,InputBase,TextField,Button} from '@mui/material'
import {Close,DeleteOutline} from '@mui/icons-material'
const DialogStyle={
    height:"80%",
    width:"70%",
    maxWidth:"100%",
    boxShadow:"none",
    borderRadius:"10px"

}

const ComposeHeader= styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    padding:"10px 10px",
    backgroundColor:"lightblue",
    '& > p':{
        fontSize:14,
        fontWeight:500,
    }
})

const RecipientWrapper= styled(Box)({
    display: "flex",
    flexDirection: 'column',
    padding:"0 10px",
    '& > div':{
        fontSize:14,
        borderBottom:'1px solid lightgrey',
        marginTop:8,
    }

})

const TextAreaInputWrapper=styled(Box)({
    display: "flex",
    flexDirection: 'column',
    padding:"0 10px",
    '& > div':{
        fontSize:14,
        borderBottom:'1px solid lightgrey',
        marginTop:80,
        marginBottom:40,
    }
})

const ComposeFooter=styled(Box)({
    display:'flex',
    justifyContent: 'space-between',
    padding:"10px 10px",
    
})

const SendButton=styled(Button)({
    background:'darkblue',
    color:'white',
    textTransform:'none',
    borderRadius:'18px',
    width:'100px',

})

export const ComposeMail=({openDialog})=>{
    return (
        <Dialog 
            open={openDialog}
            PaperProps={{sx: DialogStyle}}
        >
            <ComposeHeader>
                <Typography>New Message</Typography><Typography/>
                <Close fontSize="small"/>


            </ComposeHeader>
            <RecipientWrapper>
                <InputBase placeholder="Recipients"/>
                <InputBase placeholder="Subject"/>


            </RecipientWrapper>
            <TextField 
                multiline
                rows={10}
                sx={{'& .MuiOutlinedInput-notchedOutline':{
                    border:'none',
                }}}
            >
                
                
            </TextField>
            <TextAreaInputWrapper>
                <InputBase placeholder="Unofficial Message"/>
            </TextAreaInputWrapper>

            <ComposeFooter>
                <SendButton>Send</SendButton>
                <DeleteOutline/>
            </ComposeFooter>
        </Dialog>
        
    )
}