import styled from "styled-components"
import { Box } from "@cruk/cruk-react-components"

const StyledBox = styled(Box)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1em;
    align-items: start;
    overflow: hidden;
`
export default StyledBox;