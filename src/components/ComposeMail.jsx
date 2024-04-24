import {Box,Dialog,Typography,styled,InputBase} from '@mui/material'
import {Close} from '@mui/icons-material'
const DialogStyle={
    height:"90%",
    width:"80%",
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
})

export const ComposeMail=()=>{
    return (
        <Dialog 
            open={true}
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
            <TextAreaInputWrapper>
                Text Area
                <InputBase placeholder="Unofficial Message"/>
            </TextAreaInputWrapper>
            <Box>
                footer
            </Box>
        </Dialog>
        
    )
}