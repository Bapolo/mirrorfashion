import logo from "@/public/img/logo.png";
import centroDistribuicao from "@/public/img/centro-distribuicao.png";
import familiaPelho from "@/public/img/familia-pelho.jpg";

import Image from "next/image";
import Link from "next/link";

export default function sobre() {
  return (
    <div>
      <header className="container mx-auto">
        <Link href="/">
          <figure className="p-4 flex justify-center items-center">
            <Image src={logo} alt="logo mirror fashion" />
          </figure>
        </Link>
        <h1 className="font-bold p-4 text-4xl bg-[url(@/public/img/sobre-background.jpg)] text-center md:text-left">
          A Mirror Fashion
        </h1>
      </header>

      <main className="my-5 text-zinc-800 text-xl container mx-auto">
        <section className="px-4">
          <p className="mb-4 px-4 text-justify indent-6">
            A <b>Mirror Fashion</b> A Mirror Fashion é a maior empresa comércio
            eletrônico no segmento de moda em todo o mundo. Fundada em 1932,
            possui filiais em 124 países, sendo líder de mercado com mais de 90%
            de participação em 118 deles.
          </p>
          <p className="px-4 text-justify indent-6">
            Nosso centro de distribuição fica em{" "}
            <a
              href="https://maps.app.goo.gl/Tvqc5RkS1K22MJKTA"
              target="_blank"
              className="text-blue-700"
            >
              Jacarezinho, no Paraná
            </a>
            . De lá, saem 48 aviões que distribuem nossos produtos às casas do
            mundo todo. Nosso centro de distribuição:
          </p>

          <figure className="p-4 w-fit m-auto bg-zinc-200 my-4 border border-gray-300">
            <Image
              src={centroDistribuicao}
              alt="centro de distribuição Mirror Fashion"
              className="m-auto mb-4"
            />
            <figcaption className="text-xl italic text-gray-600 text-center">
              Centro de distribuição Mirror Fashion
            </figcaption>
          </figure>

          <p className="px-4 text-justify indent-6">
            Compre suas roupas e acessórios na Mirror Fashion. Acesse{" "}
            <a href="#" className="text-blue-700">
              nossa loja
            </a>
            ou entre em{" "}
            <a href="#" className="text-blue-700">
              contato
            </a>{" "}
            se tiver dúvidas. Conheça também nossa{" "}
            <a href="#" className="text-blue-700">
              história
            </a>{" "}
            e nossos{" "}
            <a href="#" className="text-blue-700">
              diferenciais
            </a>
            .
          </p>
        </section>

        <section className="mt-6 px-4">
          <h1 className="font-bold text-3xl border-b border-b-black">
            História
          </h1>

          <figure className="p-4 w-fit m-auto bg-zinc-200 my-4 border border-gray-300 md:float-right md:ml-8">
            <Image
              src={familiaPelho}
              alt="centro de distribuição Mirror Fashion"
              className="m-auto mb-4"
            />
            <figcaption className="text-xl italic text-gray-600 text-center">
              Família Pelho
            </figcaption>
          </figure>

          <p className="indent-6 text-justify mt-4 px-4">
            A fundação em 1932 ocorreu no momento da descoberta econônica do
            interior do Paraná. A família Pelho, tradicional da região, investiu
            todas as suas economias nessa nova iniciativa, revolucionária para a
            época. O fundador Eduardo Simões Pelho, dotado de particular visão
            administrativa, guiou os negócios da empresa durante mais de 50
            anos, muitos deles ao lado de seu filho E. S. Pelho Filho, atual
            CEO. O nome da empresa é inspirado no nome da família.
          </p>

          <p className="indent-6 text-justify mt-4 px-4">
            O crescimento da empresa foi praticamente instantâneo. Nos primeiros
            5 anos, já atendia 18 países. Bateu a marca de 100 países em apenas
            15 anos de existência. Até hoje, já atendeu 740 milhões de usuários
            diferentes, em bilhões de diferentes pedidos.
          </p>

          <p className="indent-6 text-justify mt-4 px-4">
            O crescimento em número de funcionários é também assombroso. Hoje, é
            a maior empregadora do Brasil, mas mesmo após apenas 5 anos de sua
            existência, já possuía 30 mil funcionários. Fora do Brasil, há 240
            mil funcionários, além dos 890 mil brasileiros nas instalações de
            Jacarezinho e nos escritórios em todo país.
          </p>

          <p className="indent-6 text-justify mt-4 px-4">
            Dada a importância econômica da empresa para o Brasil, a família
            Pelho já recebeu diversos prêmios, homenagens e condecorações. Todos
            os presidentes do Brasil já visitaram as instalações da Mirror
            Fashion, além de presidentes da União Européia, Ásia e o
            secretário-geral da ONU.{" "}
          </p>
        </section>

        <section className="mt-6 px-4">
          <h1 className="font-bold text-3xl border-b border-b-black">
            Diferencial
          </h1>

          <ul className="p-4 list-disc">
            <li>Menor preço do varejo, garantido</li>
            <li>Se você achar uma loja mais barata, leva o produto de graça</li>
            <li>Pague em reais, dólares, euros ou bitcoins</li>
            <li>Todas as compras com frete grátis para o mundo todo</li>
            <li>Maior comércio eletrônico de moda do mundo</li>
            <li>
              Atendimento via telefone, email, chat, twitter, facebook, carta,
              fax e telegrama
            </li>
            <li>Presente em 124 países</li>
            <li>Mais de um milhão de funcionários em todo o mundo</li>
          </ul>
        </section>

        <footer className="mt-6 p-4 flex gap-5 items-center">
          <figure className="p-4">
            <Image src={logo} width={100} alt="logo mirror fashion" />
          </figure>
          <p className="text-zinc-400">Copyright &copy; Mirror Fashion</p>
        </footer>
      </main>
    </div>
  );
}
