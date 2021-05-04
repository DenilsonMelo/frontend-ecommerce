import styled from "styled-components";

export const Container = styled.div`
    background: var(--white);

    img{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    h1{
        margin: 2.25rem 0 2rem 9.25rem;
    }
`;

export const FeaturesContainer = styled.div`
    display: flex;
    align-items: center;
    
    max-width: 1112px;
    margin: 2rem auto;
    border: 1px solid #E4E4E4;
    padding: 1.5rem;
    border-radius: 0.5rem;
`;

export const Features = styled.div`
    margin: 0 1.25rem;

    img{
        margin-left: 0rem;

        width: 2.5rem;
        height: 2.5rem;
    }

    h3{
        font-weight: 600;
        font-size: 1.25rem;
        color: var(--black-900);
        
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    p{

    }
`;

export const ProductContainer = styled.div`
    display: flex;
    margin: 0 auto;

    max-width: 1112px;

    justify-content: space-between;
`;

export const Brands = styled.div`
    background: var(--gray-75);

    h1{
        padding-top: 3rem;
        font-size: 28px;
        font-weight: 600;
    }

    div{
        max-width: 1170px;
        
        margin: 0 auto;

        display: flex;
        justify-content: space-between;

        padding-top: 1rem;
        padding-bottom: 4rem;
    }
`;

export const Download = styled.div`
    max-width: 1160px;

    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    
    h1{
        padding-top: 3rem;
        font-size: 28px;
        font-weight: 600;

        margin-left: 2rem;
    }

    div{        
        padding: 4.25rem 0;
        padding-right: 1rem;

        display: flex;
        

        img{
            width: 170px;
            height: 58px;

            margin-left: 1rem;
        }
    
    }

`;