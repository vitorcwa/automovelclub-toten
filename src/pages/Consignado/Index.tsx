import style from "./Consignado.module.css";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Index";
import ImageHeader from "../../assets/images/img-header.webp";

export default function Consignado() {
  return (
    <header className={style.header}>
      <Navbar />

      <div className="container mx-auto px-4 md:mt-12 md:mb-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-24 items-start">
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
                  Venda seu carro com a
                </span>{" "}
                <span className="text-2xl md:text-5xl font-bold block md:mt-4">
                  Automóvel Club
                </span>
              </h1>
              <p className="text-xl tmd:ext-2xl font-light md:font-regular dark mt-8">
                Pare de correr riscos com golpistas ou recebendo estranhos para verem o carro na sua casa. Aqui você conta com a nossa estrutura financeira, mecânica, estética, comercial e de marketing para vender seu carro com muito mais velocidade e 100% de segurança. 
              </p>
              <p className="text-xl tmd:ext-2xl font-light md:font-regular dark mt-8">
                Preencha nosso formulário e já falaremos com você!
              </p>
              <motion.img
                src={ImageHeader}
                alt="Automóvel Club"
                className="w-full hidden md:block md:mt-16"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    marginLeft: "0rem",
                    opacity: 0,
                  },
                  visible: {
                    marginLeft: "-4rem",
                    opacity: 1,
                    transition: {
                      delay: 0.25,
                    },
                  },
                }}
              />
            </motion.div>
          </div>
          <div className={`bg-white rounded-xl px-6 md:col-span-2 ${style.iframeBox}`}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/hvVaZiiKVWAdC3F4DJfM"
              id="inline-hvVaZiiKVWAdC3F4DJfM"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Formulário Consignado"
              data-height="814"
              data-layout-iframe-id="inline-hvVaZiiKVWAdC3F4DJfM"
              data-form-id="hvVaZiiKVWAdC3F4DJfM"
              title="Formulário Consignado"
            ></iframe>
            <script src="https://link.msgsndr.com/js/form_embed.js"></script>
          </div>
        </div>
      </div>
    </header>
  );
}
