import style from "./Home.module.css";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "../../components/Navbar/Index.js";

import ImageHeader from "../../assets/images/img-header.webp";
import Image1 from "../../assets/images/img_01.webp";
import Image2 from "../../assets/images/img_02.webp";
import Image3 from "../../assets/images/img_03.webp";

export default function Home() {
  return (
    <div>
      <header className={style.header}>
        <Navbar />

        <div className="container mx-auto px-4 md:mt-24 md:mb-16">
          <div className="grid md:grid-cols-5 gap-4 justify-between items-start">
            <div className="md:col-span-2 mt-8 md:mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                className="relative z-10"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                    },
                  },
                }}
              >
                <h1 className="dark">
                  <span className="text-2xl md:text-5xl font-bold block">
                    Automóvel Club Motors
                  </span>{" "}
                  <div className="text-xl md:text-4xl font-regular md:font-light mt-2 md:mt-4">
                    Aqui o nosso time joga por você!
                  </div>
                </h1>
                <p className="text-xl font-light md:font-regular dark mt-8">
                  Não importa se você busca potência, conforto ou economia.
                  Nosso time vai garantir o carro ideal para você nas condições
                  que você quer!
                </p>
                <a href="/veiculos">
                  <motion.button
                    className="button-white mt-12 mx-auto"
                    whileHover={{ scale: 1.1 }}
                  >
                    Conheça nosso showroom
                  </motion.button>
                </a>
              </motion.div>
            </div>
            <div className="mt-8 md:mt-0 md:col-span-3 relative">
              <motion.img
                src={ImageHeader}
                alt="Automóvel Club"
                className="w-full"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    marginLeft: "10rem",
                    opacity: 0,
                  },
                  visible: {
                    marginLeft: "0",
                    opacity: 1,
                    transition: {
                      delay: 0.25,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="container mx-auto px-4 mt-56 mb-12 ">
          <h3 className="rubik text-4xl font-bold dark mt-24 mx-auto text-center">
            Tudo que você precisa em um só lugar!
          </h3>
          <div className="grid md:grid-cols-3 gap-24 justify-between items-start mt-12 mb-26">
            <div>
              <p className="text-xl gray">
                <Icon
                  icon="arcticons:car"
                  width="56"
                  height="56"
                  className="mb-2 primary"
                />
                <span className="dark block text-2xl font-bold mb-4">
                  Estoque 100% selecionado
                </span>
                Aqui na Automóvel Club carro não é transporte - é sonho e
                realização. Pensando nisso nos dedicamos a trabalhar somente com
                carros selecionados e com qualidade e procedência garantida!
              </p>
            </div>
            <div>
              <p className="text-xl gray">
                <Icon
                  icon="circum:calendar"
                  width="56"
                  height="56"
                  className="mb-2 primary"
                />
                <span className="dark block text-2xl font-bold mb-4">
                  Até 120 dias para pagar
                </span>
                Primeiro você sonha, depois você compra, ai então você dirige,
                se apaixona, vive o conforto e comodidade que merece, e só
                depois de 120 dias você começa a pagar.
              </p>
            </div>
            <div>
              <p className="text-xl gray">
                <Icon
                  icon="healthicons:money-bag-outline"
                  width="56"
                  height="56"
                  className="mb-2 primary"
                />
                <span className="dark block text-2xl font-bold mb-4">
                  Taxas e Financiamento diferenciados
                </span>
                Entrada totalmente flexível, negociação transparente, as menores
                taxas do mercado e financiamento em até 60x. A hora de acelerar
                seu carro novo é agora!
              </p>
            </div>
          </div>

          <div className="card p-8 md:px-30 md:py-20">
            <div className="grid md:grid-cols-2 justify-between items-center gap-28">
              <div>
                <h4 className="text-2xl md:text-4xl primary font-bold title-price">
                  Automóvel Club: Um time dedicado ao seu sucesso
                </h4>
                <p className="mt-8 text-2xl font-light text-white">
                  Quando você entra no Automóvel Club, não é só uma compra; é
                  uma experiência pensada para surpreender. Com um time
                  apaixonado por carros e comprometido com cada detalhe, nossa
                  missão é garantir que você receba o Automóvel Club Motors -
                  Copy novo site 3 melhor atendimento e saia dirigindo o carro
                  que se encaixa exatamente no seu perfil.
                </p>
              </div>
              <div className="bg-image-primary text-right">
                <motion.img
                  src={Image1}
                  alt="Automóvel Club"
                  className="relative z-10 inline w-full"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      marginLeft: "10rem",
                      opacity: 0,
                    },
                    visible: {
                      marginLeft: "0",
                      opacity: 1,
                      transition: {
                        delay: 0.25,
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>

          <h3 className="rubik text-4xl font-bold dark mt-24 mx-auto text-center">
            Nossa estratégia de jogo: Você em primeiro lugar
          </h3>
          <div className="grid md:grid-cols-4 gap-24 justify-between items-start mt-12 mb-26">
            <div>
              <p className="text-xl gray">
                <Icon
                  icon="tabler:user-star"
                  width="72"
                  height="72"
                  className="mb-2 text-white"
                />
                <span className="dark text-xl font-bold mb-4">
                  Time de Especialistas:{" "}
                </span>
                Cada um de nossos consultores é um jogador-chave, treinado para
                ouvir você, entender suas necessidades e te orientar para a
                melhor escolha.
              </p>
            </div>
            <div>
              <p className="text-xl gray">
                <Icon
                  icon="hugeicons:car-01"
                  width="72"
                  height="72"
                  className="mb-2 text-white"
                />
                <span className="dark text-xl font-bold mb-4">
                  Carros com Procedência Garantida:{" "}
                </span>
                Trabalhamos apenas com veículos revisados, aprovados e prontos
                para rodar. Cada carro passa por inspeções rigorosas para que
                você tenha total confiança.
              </p>
            </div>
            <div>
              <p className="text-xl gray">
                <Icon
                  icon="uil:dollar-alt"
                  width="72"
                  height="72"
                  className="mb-2 text-white"
                />
                <span className="dark text-xl font-bold mb-4">
                  Soluções Flexíveis de Pagamento:{" "}
                </span>
                No Automóvel Club, oferecemos diversas formas de pagamento e
                financiamento, para que você dirija o carro dos sonhos sem abrir
                mão da sua tranquilidade financeira.
              </p>
            </div>
            <div>
              <p className="text-xl gray">
                <Icon
                  icon="mdi:car-engine-start"
                  width="72"
                  height="72"
                  className="mb-2 text-white"
                />
                <span className="dark text-xl font-bold mb-4">
                  Facilidade na Troca:{" "}
                </span>
                Tem um carro usado? Nosso time avalia e oferece as melhores
                condições de troca para que você faça o upgrade sem
                complicações.
              </p>
            </div>
          </div>
        </div>
        <div className={`${style.bgOnda}`}></div>
      </div>

      <div className="container mx-auto px-4 mt-64 mb-12">
        <h3 className="rubik text-4xl font-bold dark mt-24 mx-auto text-center">
          Como jogamos na Automóvel Club
        </h3>
        <div className="grid md:grid-cols-4 gap-6 justify-between items-start mt-12 mb-26">
          <div className="bg-primary p-8 border-radius-40">
            <p className="text-xl text-white">
              <span className="white text-2xl md:text-3xl font-bold mb-4 block">
                Exploração
              </span>
              Navegue ou visite nossa loja para descobrir os veículos
              cuidadosamente selecionados e prontos para fazer parte do seu dia
              a dia.
            </p>
          </div>
          <div className="bg-dark p-8 border-radius-40">
            <p className="text-xl text-white">
              <span className="white text-2xl md:text-3xl font-bold mb-4 block">
                Escolha e Consultoria Personalizada
              </span>
              Com o auxílio de nossa equipe, explore suas opções e identifique o
              carro ideal.
            </p>
          </div>
          <div className="bg-secondary p-8 border-radius-40">
            <p className="text-xl text-white">
              <span className="white text-2xl md:text-3xl font-bold mb-4 block">
                Simulação de Financiamento Sob Medida
              </span>
              Faremos juntos a melhor simulação de crédito, com parcelas que
              cabem no seu orçamento.
            </p>
          </div>
          <div className="bg-gray p-8 border-radius-40">
            <p className="text-xl text-white">
              <span className="white text-2xl md:text-3xl font-bold mb-4 block">
                Entrega com Comodidade
              </span>
              Após todo o processo, entregamos seu carro com toda a documentação
              pronta. Aqui, nosso jogo é pelo seu conforto e satisfação.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 mb-12">
        <div className="p-8 md:px-30 md:py-20 mt-12">
          <div className="grid md:grid-cols-2 justify-between items-center gap-28 dark">
            <div>
              <h4 className="h4 text-2xl md:text-4xl font-bold">
                Pronto Para Entrar em Campo Com o Automóvel Club?
              </h4>
              <p className="mt-8 text-2xl font-light">
                Nosso time está esperando para te ajudar a encontrar o carro que
                é a sua cara. Seja para tirar dúvidas, saber mais sobre um
                modelo específico ou entender nossas condições de pagamento,
                conte com nossa equipe de especialistas.
              </p>
              <a href="https://api.whatsapp.com/send?phone=%2B5521995409259" target="_blank">
                <motion.button
                  className="button mt-12 mx-auto"
                  whileHover={{ scale: 1.1 }}
                >
                  Fale com nosso time
                </motion.button>
              </a>
            </div>
            <div className="bg-image-primary text-right">
              <motion.img
                src={Image2}
                alt="Automóvel Club"
                className="relative z-10 inline w-full"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    marginLeft: "10rem",
                    opacity: 0,
                  },
                  visible: {
                    marginLeft: "0",
                    opacity: 1,
                    transition: {
                      delay: 0.25,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        <h3 className="rubik text-4xl dark mt-16 mx-auto text-center">
          Aqui, cada jogo é pelo cliente.
          <span className="font-bold block mt-4">
            Entre em contato e faça parte do Automóvel Club.
          </span>
        </h3>

        <div className="card-primary p-8 md:px-30 md:py-20 mt-12">
          <div className="grid md:grid-cols-3 justify-between items-center gap-28 dark">
            <div className="md:col-span-2">
              <h4 className="text-2xl md:text-4xl font-bold">
                Venda seu carro com a Automóvel Club
              </h4>
              <p className="mt-8 text-2xl font-light">
                <span className="font-bold">O Processo é simples!</span> Você
                fala com nosso time, envia as fotos e Km do seu carro, nós
                avaliamos seu possante, damos o trato que ele merece para ficar
                lindão e assim que efetuarmos a venda, é PIX na hora na sua
                conta! Vendemos seu carro mesmo com quitação, dívidas e multas.
                Não corra riscos com golpes e nem perca tempo com burocracia.
                Deixa nosso time jogar por você! Fale agora com nosso time de
                vendas e acelere com a Automóvel Club!{" "}
                <span className="font-bold">Visite nossa loja!</span>
              </p>
              <a href="/venda-seu-carro">
                <motion.button
                  className="button-white mt-12 mx-auto"
                  whileHover={{ scale: 1.1 }}
                >
                  Venda seu carro
                </motion.button>
              </a>
            </div>
            <div className="bg-image-dark text-right">
              <motion.img
                src={Image3}
                alt="Automóvel Club"
                className="relative z-10 inline w-full"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    marginLeft: "10rem",
                    opacity: 0,
                  },
                  visible: {
                    marginLeft: "0",
                    opacity: 1,
                    transition: {
                      delay: 0.25,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
