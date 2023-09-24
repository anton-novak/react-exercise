import styled from "styled-components"
import { Box } from "@cruk/cruk-react-components"

const StyledBox = styled(Box)`
    :hover {background-color: rgb(247, 232, 240);}
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1em;
    justify-content: space-between;
`
export default StyledBox;