// import style from "./Agendamento.module.css"
// import { motion } from "framer-motion"
import Topbar from '../../components/Navbar/Topbar.js'

export default function Agendamento() {
  return (
    <div>
      <Topbar />
      {/* <header className={style.header}>
        <div className="container mx-auto px-4 mt-16 md:mt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            className="mx-auto"
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
            <h1 className="text-3xl md:text-4xl text-center md:w-6/10 mx-auto">
              <div className="font-light tertiary">
                Falta pouco para você
                <span className="font-bold tertiary">
                  {" "}
                  acelerar seu sonho
                </span>
              </div>
            </h1>
            <p className="text-2xl mt-2 primary text-center">
              Escolha o melhor dia e horário para conversarmos.
            </p>
          </motion.div>
        </div>
      </header> */}

      <section className="container mx-auto px-16 pb-24 mt-16 md:mt-0">
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/TDFfNavT5uGfhFXxP8zj"
          id="siJnQK0ocXVqRTlWfVMl_1743562941863"
          width="100%"
          height="800px"
        ></iframe>
        <script
          src="https://link.msgsndr.com/js/form_embed.js"
          type="text/javascript"
        ></script>
      </section>

    </div>
  );
}
