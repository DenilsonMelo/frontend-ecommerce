import styled from 'styled-components';

export const Container = styled.div`
    background: var(--gray-75);
    
    
`;

export const TopFooter = styled.div`
    max-width: 1112px;
    
    display: flex;
    justify-content: space-around;

    margin: 0 auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #E4E4E4;
    
    div{
        span{
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--black-900);
        }

        hr{
            height: 8px;
            border: none;
        }

        p{
            padding-top: 5px;

            font-size: 1rem;
            font-weight: 400;
        }

        div{
            display: flex;
            
            img{
                margin: 0;
                padding-right: 5px;
            }

            .youtube{
                transform: translateX(2px);
                padding-right: 8px;
            }
        }
    }
`;

export const DownFooter = styled.div`
    padding-top: 1rem;
    padding-bottom: 1.5rem;

    display: flex;
    justify-content: space-between;

    max-width: 1112px;
    margin: 0 auto;

    p{
        font-size: 0.975rem;
        font-weight: 400;
    }

    div{
        display: flex;

        img{
            width: 34px;
            height: 22px;
            padding-right: 5px;
        }
    }
`;