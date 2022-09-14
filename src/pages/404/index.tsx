import * as Styled from "./styles"
import { Link } from "react-router-dom"

export const Page404 = () => {
    return (
        <Styled.MainContainer>
            404 page
            <Link to={"/"}><button>Back to application</button></Link>
        </Styled.MainContainer>
    )
}