import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import style from "./Veiculos.module.css";
import Topbar from "../../components/Navbar/Topbar";
import Thumb from "../../assets/images/thumb.webp";
import Lottie from "lottie-react";
import Speedometer from "../../assets/images/speedometer.json";

interface Foto {
  Codigo: number;
  URL: string;
  Posicao: number;
}

interface Veiculo {
  Codigo: number;
  Marca: string;
  Modelo: string;
  Versao: string;
  AnoFabricacao: number;
  AnoModelo: number;
  Observacao: string;
  Km: number;
  Fotos?: Foto[];
}

export default function Veiculos() {
  // const imagePath = "https://www.autocerto.com/fotos/";
  const [data, setData] = useState<Veiculo[]>([]);
  const [filterRecords, setFilterRecords] = useState<Veiculo[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchToken = async () => {
    try {
      const params = new URLSearchParams();
      params.append("grant_type", "password");
      params.append("username", "automovelclub@autocerto.com");
      params.append("password", "t&adszQqbq6");
      // params.append("client_id", "SEU_CLIENT_ID"); // ← Se necessário
      // params.append("client_secret", "SEU_CLIENT_SECRET"); // ← Se necessário

      const response = await axios.post(
        "https://integracao.autocerto.com/oauth/token",
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const token = response.data.access_token; // Ou apenas `token`, depende do retorno
      console.log("Token obtido:", token);
      return token;
    } catch (error: any) {
      console.error(
        "Erro ao obter token:",
        error.response?.data || error.message
      );
      return null;
    }
  };

  useEffect(() => {
    const fetchVeiculos = async () => {
      setLoading(true);

      try {
        const token = await fetchToken();
        if (!token) return;

        const veiculosResponse = await axios.get<Veiculo[]>(
          "https://integracao.autocerto.com/api/Veiculo/ObterEstoque",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "text/json",
            },
          }
        );

        setData(veiculosResponse.data);
        setFilterRecords(veiculosResponse.data);
      } catch (error) {
        console.error("Erro ao buscar veículos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVeiculos();
  }, []);

  const filterModelo = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterRecords(
      data.filter((d) =>
        d.Modelo.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const filterMarca = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterRecords(data.filter((d) => d.Marca.includes(event.target.value)));
  };

  const filterObservacao = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterRecords(
      data.filter((d) => d.Observacao.includes(event.target.value))
    );
  };

  const filterAno = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterRecords(
      data.filter((d) => d.AnoModelo.toString().includes(event.target.value))
    );
  };

  if (loading) return <div className="loading-wrapper"><Lottie animationData={Speedometer} loop={true} className="mx-auto loading" /></div>;

  return (
    <div>
      <Topbar />

      <div className="container mx-auto px-4 mt-12 mb-16 ">
        <h3 className="rubik text-4xl font-bold dark mx-auto text-center">
          O carro perfeito para você está aqui!
        </h3>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 mt-12 mb-12 ">
        <div className="grid md:grid-cols-5 justify-between px-4">
          <div className={`md:col-span-5 mb-12`}>
            <div className="mb-8">
              <h3 className="rubik text-xl font-bold dark">
                Pesquise por aqui:
              </h3>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                {/* <label htmlFor="modelos-select">Informe o modelo</label> */}
                <input
                  type="text"
                  id="modelos-select"
                  name="modelo"
                  placeholder="Informe o modelo"
                  onChange={filterModelo}
                />
              </div>
              <div className="flex-1">
                {/* <label htmlFor="marcas-select">Marca</label> */}
                <select
                  id="marcas-select"
                  name="marca"
                  onChange={filterMarca}
                  className="select"
                >
                  <option>Marca</option>
                  <option value="">TODOS</option>
                  <option value="CHEVROLET">CHEVROLET</option>
                  <option value="CITROEN">CITROEN</option>
                  <option value="FIAT">FIAT</option>
                  <option value="FORD">FORD</option>
                  <option value="HONDA">HONDA</option>
                  <option value="HYUNDAI">HYUNDAI</option>
                  <option value="JEEP">JEEP</option>
                  <option value="KIA">KIA</option>
                  <option value="NISSAN">NISSAN</option>
                  <option value="PEUGEOT">PEUGEOT</option>
                  <option value="RENAULT">RENAULT</option>
                  <option value="TOYOTA">TOYOTA</option>
                  <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                </select>
              </div>
              <div className="flex-1">
                {/* <label htmlFor="observacao-select">Carroceria</label> */}
                <select
                  id="observacao-select"
                  name="carroceria"
                  onChange={filterObservacao}
                  className="select"
                >
                  <option>Carroceria</option>
                  <option value="">TODOS</option>
                  <option value="HATCH">HATCH</option>
                  <option value="SEDAN">SEDAN</option>
                  <option value="SUV">SUV</option>
                  <option value="UTILITÁRIO">UTILITÁRIO</option>
                  <option value="MINIVAN">MINIVAN</option>
                  <option value="PICAPE">PICAPE</option>
                </select>
              </div>
              <div className="flex-1">
                {/* <label htmlFor="ano-select">Ano</label> */}
                <select
                  id="ano-select"
                  name="ano"
                  onChange={filterAno}
                  className="select"
                >
                  <option>Ano</option>
                  <option value="">TODOS</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="grid md:grid-cols-3 gap-8 justify-flex-start">
              {filterRecords.map((veiculo, ind) => {
                const fotoPrincipal = veiculo.Fotos?.find(
                  (foto) => foto.Posicao === 1
                )?.URL;
                return (
                  <div className="md:grid-col" key={ind}>
                    <div className={style.box} key={veiculo.Codigo}>
                      <a
                        href={`/veiculo/${veiculo.Marca.toLowerCase()}/${veiculo.Modelo.toLowerCase().replace(
                          /\s/g,
                          "-"
                        )}/${veiculo.Versao.toLowerCase().replace(
                          /\s/g,
                          "-"
                        )}/${veiculo.Codigo}`}
                        className={style.link}
                      >
                        <div
                          className={`justify-center content-center ${style.imgBox}`}
                          style={{
                            backgroundImage: `url(${fotoPrincipal || Thumb})`,
                            backgroundSize: fotoPrincipal ? "cover" : "contain",
                          }}
                        ></div>
                        <div className="p-6">
                          <div className="mb-6">
                            <h4 className={`font-semibold ${style.dark}`}>
                              {veiculo.Marca} {veiculo.Modelo}
                            </h4>
                            <p
                              className={`${style.versao} dark`}
                            >
                              {veiculo.Versao}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 justify-between items-center gap-2">
                            <div>
                              <div className={`flex items-center ${style.tag}`}>
                                <Icon
                                  icon="ic:baseline-speed"
                                  width="24"
                                  height="24"
                                  className={style.iconSmall}
                                />
                                <span
                                  className={`text-gray-500`}
                                >
                                  {veiculo.Km}KM
                                </span>
                              </div>
                            </div>
                            <div>
                              <div className={`flex items-center ${style.tag}`}>
                                <Icon
                                  icon="mynaui:calendar"
                                  width="24"
                                  height="24"
                                  className={style.iconSmall}
                                />
                                <span
                                  className={`text-gray-500`}
                                >
                                  {veiculo.AnoFabricacao}/{veiculo.AnoModelo}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
