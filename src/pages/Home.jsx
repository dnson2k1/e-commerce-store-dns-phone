import React from "react";

import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Slider from "../components/Slider";
import Policy from "../components/Policy";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import policy from "../api/policy";
import Banner from "../components/Banner";
import productData from "../api/productsApi";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <Slider />
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {policy.map((item, index) => (
              <Policy
                key={index}
                name={item.name}
                icon={item.icon}
                title={item.description}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Product New</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Product Selling</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Banner
        img="https://www.viettablet.com/images/promo/47/tra-gop-0_-lai-suot-trong-3-thang-mobi-banner-viettablet.jpg"
        marginBottom={50}
      />
      <Section>
        <SectionTitle>Product Related</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Banner img="https://img4.thuthuatphanmem.vn/uploads/2020/06/26/hinh-anh-banner-dien-may-thong-minh_033705387.png" />
    </Helmet>
  );
};

export default Home;
