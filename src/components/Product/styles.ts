import styled from "styled-components";

export const Container = styled.div`
    max-width: 255px;
    max-height: 380px;;

    border: 1px solid #E4E4E4;
    border-radius: 0.5rem;
    padding: 1.4rem;

    a{
        text-decoration: none;
    }

    a hr{
        margin-bottom: 1.25rem;
        opacity: 0.6;
    }

    > a span{
        font-size: 1.25rem;
        font-weight: 400;
        color: var(--gray-700);

    }

    a div{
        display: flex;
        align-items: center;

        padding-top: 0.975rem;
        padding-bottom: 0.975rem;

        img{
            margin-left: 0;
            margin-right: 1rem;
        }
    }

    a p{
        font-size: 15px;
        font-weight: 600;
        color: var(--black-900);
    }
`;