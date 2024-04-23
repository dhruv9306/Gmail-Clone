import {Box,Button,styled,List,ListItem} from '@mui/material'
import{CreateOutlined} from '@mui/icons-material'
import {SIDEBAR_DATA} from '../config/sidebar.config.js'


const ComposeButton= styled(Button)({
    background:'red',
    color:'white',
    padding:14,
    borderRadius: 18,
    marginLeft:16,
    marginTop:20,
    minWidth:140,
    textTransform:'none'

})

const Container= styled(Box)({
    padding:8,
    '& > ul':{
        padding:'10px 0 0 5px',
        fontSize:'14px',
        fontWeight:'500',
        cursor:'pointer',

    },
    '& > ul > li > svg':{
        marginRight:'20px',
    }

})

const SideBarContent=()=>{
    return(
        <Container>
            <Box>
                <ComposeButton> 
                    <CreateOutlined/>Compose
                </ComposeButton>
            </Box>

            
            <List>
                {
                    SIDEBAR_DATA.map(data=>(
                        <ListItem>
                            <data.icon fontSize='small'/>{data.title}
                        </ListItem>
                    ))
                }

            </List>
        </Container>

    )
    
}
export default SideBarContent