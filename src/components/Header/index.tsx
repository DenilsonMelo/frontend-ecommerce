import { Container, TopHeader, Logo, Select, Search, MidHeader, Icons, Sign, DownHeader } from './styles'


export function Header(){
    return(
        <Container>
            <TopHeader>
                <div>
                    <a href="#">
                        <img src="/icons/twitter-small-white.svg" alt="Twitter"/>
                    </a>
                    <a href="#">
                        <img src="/icons/instagram-small-white.svg" alt="Instagram"/>
                    </a>
                    <a href="#">
                        <img src="/icons/facebook-small-white.svg" alt="Facebook"/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <span>Delivery</span>
                    </a>
                    <a href="#">
                        <span>Help</span>
                    </a>
                    <Select>
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </Select>
                    <Select name="Linguagem">
                        <option value="USD">English</option>
                        <option value="EUR">Portuguese</option>
                    </Select>
                </div>

            </TopHeader>

            <MidHeader>
                <Logo>
                    <img src="/icons/logo.svg" alt="Bootstrap Ecommerce"/>
                </Logo>
                <Search>
                    <input type="text" id="txtBusca" />
                    <div>
                        <a href="#">
                            <img src="/icons/search.svg" id="btnBusca" alt="Buscar"/>
                        </a>
                    </div>
                </Search>
                <Icons>
                    <img src="/icons/cart.svg" alt="Carrinho"/>
                    <img src="/icons/user.svg" alt="Usuário"/>

                    <Sign>
                        <span><a href="#">Sign In / Join</a></span>
                        <Select name="Minha Conta">
                            <option value="my-orders">Meus Pedidos</option>
                            <option value="exit">Sair</option>
                        </Select>
                    </Sign>
                </Icons>
                
            </MidHeader>

            <DownHeader>
                <ul>
                    <li><a href="#">Todas categorias</a></li>
                    <li><a href="#">Fashion</a></li>
                    <li><a href="#">Supermercado</a></li>
                    <li><a href="#">Eletrônicos</a></li>
                    <li><a href="#">Confecções</a></li>
                    <li><a href="#">Móveis</a></li>
                </ul>
            </DownHeader>
        </Container>
    );
}