import styled from 'styled-components';

export const Container = styled.div`

`;

export const TopHeader = styled.div`
    background: var(--primary);
    
    height: 40px;
    
    display: flex;
    justify-content: space-around;

    > div{
        
    }

    div a img{
        width: 1.25rem;
        height: 1.25rem;

        margin: 10px 6px;

        align-items: center;

        opacity: 0.8;
    }

    div:nth-child(2){
        

        margin: 10px;

        opacity: 0.8;
        
        span{
            
            margin-right: 19px;

            color: var(--white);
        }
    }
`;

export const Select = styled.select`
    margin-right: 19px;

    background: transparent;
    color: var(--white);
    border: 0;
`;

export const MidHeader = styled.div`
    background: var(--white);

    height: 86px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    img:first-child{
        height: 46px;
    }
`;

export const Logo = styled.div`
    
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    
    input{
        width: 28rem;
        height: 38px;

        border-radius: 6px 0 0 6px;
        border: 1px solid #E4E4E4;
    }
    
    div{
        background: var(--primary);
        width: 38px;
        height: 38px;

        border-radius: 0 6px 6px 0;

        margin-right: 132px;

        img{
            padding: 8px 16px 16px 8px;
        }
    }
`;

export const Icons = styled.div`
    display: flex;

    img{
        border: 1px solid #E4E4E4;

        padding: 10px;
        margin-right: 10px;

        border-radius: 50%;
    }
`;

export const Sign = styled.div`
    span a{
        color: var(--gray-400);
        text-decoration: none;
        
        font-size: 13px;
        padding-left: 10px;
    }

    Select{
        color: var(--gray-800);
        display: block;
        
        padding-top: 2px;
        font-size: 15px;
    }
`;

export const DownHeader = styled.div`
    background: var(--white);
    height: 54px;

    border-top: 1px solid #E4E4E4;
    border-bottom: 1px solid #E4E4E4;

    margin-bottom: 2rem;
    
    ul{
        
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        
        margin-top: 15px;
    }

    ul li{
        list-style: none;
        font-size: 15px;
        font-weight: 600;

        a{
            color: var(--black-900);
            text-decoration: none;
        }
    }
    
`;