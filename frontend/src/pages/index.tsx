import Head from "next/head";

import { Inter } from "@next/font/google";
import { Header } from "@/components/Header";
import { StyleEffects } from "@/components/StyleEffects";
import { Button } from "@/components/Button";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { RedesSociais } from "@/components/RedesSociais";
import { Slider } from "@/components/Slider";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rio de Prêmios Digital</title>
        <meta name="description" content="Rio de Prêmios Digital" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-1 h-max">
        <StyleEffects effect="raios">
          <Header />
          <div className="w-full h-full flex-col items-center justify-center px-6">
            <div className="flex flex-col justify-center items-center">
              <Paragraph
                className="text-[23px]"
                text="Se você comprou bilhete físico, clique no botão abaixo para cadastrá-lo"
              />

              <Button
                background="var(--cor1)"
                text="Cadastrar Bilhete Físico"
                color="white"
              />
              <Paragraph
                className="uppercase leading-6 mt-[12px]"
                text="Bilhete online não precisa ser cadastrado"
              />
            </div>

            <div className="mt-4">
              <Image
                className=" h-[190px]"
                src="/imagem-etapa-131.png"
                alt="Etapa 131"
                width={400}
                height={230}
                priority
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <Paragraph
                className="text-[23px]"
                text="Veja as regiões da premiação Bônus Regional."
              >
                <a
                  className="text-link underline"
                  href="https://firebasestorage.googleapis.com/v0/b/bucketpublicplay/o/riodepremios%2Fgeral%2Fbonus_regional.png?alt=media&token=1c8738c6-2aaa-488c-992c-a9b77ec7d954"
                >
                  Clique aqui
                </a>
              </Paragraph>

              <Paragraph
                className="leading-[24px] mt-[-8px]"
                text="TODOS OS DOMINGOS NA RECORD TV RIO, TV PETRÓPOLIS E TV BAND RIO INTERIOR!"
              />

              <RedesSociais />

              <Paragraph
                className="text-lg font-bold mt-8 mb-[-24px]"
                text="Edição 751 R$ 5,00"
              />

              <Paragraph
                className="text-lg"
                text="Sorteio 05/02/2023 às 09/00"
              />

              <div className="h-[250px] w-full mb-20 rio-de-premios-pagination text-center">
                <Slider />
                <span>*imagens meramente ilustrativas</span>
              </div>

              <Button
                background="var(--cor4)"
                text="Comprar e concorrer"
                color="white"
              />

              <Button
                background="var(--cor1)"
                text="Cadastrar Bilhete"
                color="white"
              />
            </div>
          </div>
        </StyleEffects>
      </main>
    </>
  );
}
