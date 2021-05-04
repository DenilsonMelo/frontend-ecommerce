import { 
          Container, 
          FeaturesContainer, 
          Features, 
          ProductContainer, 
          Brands, 
          Download 
        } from '../styles/Home';

import { Product } from '../components/Product';

export default function Home() {
  return (
    <Container>
      <img src="/icons/banner.svg" alt="Banner"/>
      <FeaturesContainer>
        <Features>
          <img src="/icons/car.svg" alt="Fast delivery"/>
          <h3>Fast delivery</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodconsectetur 
            adipisicing elit, sed do eiusmod
          </p>
        </Features>
        <Features>
          <img src="/icons/local-shipping.svg" alt="Creative Strategy"/>
          <h3>Creative Strategy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodconsectetur 
            adipisicing elit, sed do eiusmod
          </p>
        </Features>
        <Features>
          <img src="/icons/padlock.svg" alt="High secured"/>
          <h3>High secured</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodconsectetur 
            adipisicing elit, sed do eiusmod
          </p>
        </Features>
      </FeaturesContainer>

      <h1>Produtos populares</h1>

      <ProductContainer>
        <Product 
          image="/icons/product-01.svg" 
          title="Go Pro 6" 
          stars="/icons/stars.svg"
          avaliations="34"
          price="$399.95"
        />
        <Product 
          image="/icons/product-01.svg" 
          title="Bose Headphone" 
          stars="/icons/stars.svg"
          avaliations="39"
          price="$299.95"
        />
        <Product 
          image="/icons/product-03.svg" 
          title="Air Pods" 
          stars="/icons/stars.svg"
          avaliations="20"
          price="$159.95"
        />
        <Product 
          image="/icons/product-03.svg" 
          title="SmartWatch Apple" 
          stars="/icons/stars.svg"
          avaliations="61"
          price="$699.95"
        />
        
      </ProductContainer>
      
      <h1>Novidades</h1>

      <ProductContainer>
      <Product 
          image="/icons/product-05.svg" 
          title="Ecobee" 
          stars="/icons/stars.svg"
          avaliations="61"
          price="$235.95"
        />
        <Product 
          image="/icons/product-05.svg" 
          title="Charge Apple" 
          stars="/icons/stars.svg"
          avaliations="11"
          price="$562.95"
        />
        <Product 
          image="/icons/product-06.svg" 
          title="Sofá Hardcore" 
          stars="/icons/stars.svg"
          avaliations="22"
          price="$899.95"
        />
        <Product 
          image="/icons/product-06.svg" 
          title="Bag" 
          stars="/icons/stars.svg"
          avaliations="34"
          price="$699.95"
        />
      </ProductContainer>

      <Brands>
        
        <h1>Nossas marcas</h1>
        <div>
          <img src="/icons/logitech.svg" alt="Logitech"/>
          <img src="/icons/google.svg" alt="Google"/>
          <img src="/icons/facebook-large.svg" alt="Facebook"/>
          <img src="/icons/linkedin.svg" alt="Linkedin"/>
          <img src="/icons/philips.svg" alt="Philips"/>
          <img src="/icons/amazon.svg" alt="Amazon"/>
        </div>
        
      </Brands>

      <Download>
        <h1>Download App</h1>
        <div>
          <img src="/icons/applestore.png" alt="AppStore"/>
          <img src="/icons/googleplay.png" alt="GooglePlay"/>
        </div>
      </Download>

    </Container>
  )
}
