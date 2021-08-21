import styled from 'styled-components'

export const NavbarWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    top: 0;
    width: 100%;
    height: 45px;
    background-color: #000;
    user-select: none;
`

export const NavbarLogo = styled.img`
    height: 35px;
    width: 80px;
    margin-left: 40px;
`

export const PageInfo = styled.div`
    display: flex;
    align-items: center;

    span {
        color: #FFF;
        margin-left: 20px;
        font-family: RobotoLight;
        font-size: 21px;
    }
`

export const Nav = styled.div`

`
