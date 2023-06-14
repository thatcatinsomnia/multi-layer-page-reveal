import { Link } from 'react-router-dom';
import Revealer from '../components/Revealer/Revealer';

export default function About() {
  return (
    <Revealer>
      <div className="p-4 h-full w-full flex flex-col justify-center items-center bg-pink-400 text-white">
        <h1 className="py-10 text-4xl">About</h1>
        <div className="max-w-[65ch] space-y-8 text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi culpa sunt dolorem illo aliquid porro possimus laudantium quaerat? Ullam beatae suscipit illum adipisci quos maxime pariatur aliquam numquam, autem dicta?
            Exercitationem aut culpa unde praesentium eligendi, ducimus totam quam alias consectetur debitis ex ullam minus assumenda quo odit molestias, voluptatem voluptatum? Provident officiis architecto quaerat corporis dolorem blanditiis dolores iste?
            Asperiores veritatis pariatur facere nesciunt, voluptatem doloremque perferendis. Dolores ex veniam tempore laboriosam nostrum iusto, illum, sed iste, eaque commodi laudantium nobis saepe blanditiis! Nesciunt eos dolores maxime cumque distinctio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, explicabo perspiciatis maxime molestias voluptatum necessitatibus quasi sed ipsa? Eaque amet et voluptates incidunt totam veritatis ipsum sequi similique ullam voluptatem?
            Magni id quibusdam quam? Recusandae dolorum illum, quos numquam dolor quasi voluptatem expedita, eos tempore quaerat cum facere minima ut nemo maxime? Eligendi omnis atque aspernatur rem at sed natus!
            Eius, expedita dolorem dolorum at minus a. Voluptates officiis in necessitatibus aspernatur iusto aliquid quo, voluptatibus fugit, officia maiores ullam rerum nisi temporibus odio perspiciatis, ut architecto sunt eligendi exercitationem.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sit itaque soluta fuga vel ab, ut laboriosam minima nobis, assumenda quidem et, impedit neque! Nihil assumenda sequi molestias dolor asperiores?
            Aspernatur expedita aut dolorem quo ipsum sunt aliquam quod nesciunt nam, mollitia animi dolore excepturi molestiae accusantium adipisci? Perferendis voluptas sapiente tempore nulla nobis commodi quibusdam consectetur, architecto animi enim?
            Repellat similique quo architecto quisquam ut voluptate corrupti impedit odio porro, itaque, numquam, nobis non consequatur enim. Illo itaque, commodi nulla sint est accusantium. Tempora, qui temporibus. Quia, harum animi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, autem officiis aspernatur quam illo sequi provident laudantium! Debitis architecto rerum pariatur, eius minima veniam dignissimos quo a neque? Porro, a?
            Enim molestiae iste aliquid numquam sunt, saepe cupiditate iusto similique commodi explicabo officia velit aut delectus, quas ratione magnam eos? Voluptates nihil placeat distinctio fuga voluptatibus ut deserunt ipsa dolorem.
            Officiis aliquid, in minus id, nisi recusandae beatae error enim impedit laboriosam atque necessitatibus? Minus assumenda, vero porro rerum ex labore provident debitis ea aut excepturi magni! Ut, vel alias.
            Ratione quae incidunt officia quis aliquid repellendus quibusdam rem debitis, animi cupiditate fugiat eos nam quod magni molestias optio harum illo laboriosam eius iste. Obcaecati vero explicabo laborum omnis facilis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, exercitationem qui est cupiditate voluptas repellendus porro consectetur velit doloribus illum voluptates alias voluptatem doloremque consequatur incidunt nostrum, minima molestiae sequi!
            Molestiae distinctio nihil quisquam. Suscipit laudantium asperiores tempore labore molestiae, maxime ad sit odit aspernatur cum, in odio ullam nulla distinctio possimus alias cumque quibusdam deserunt, iste temporibus! Ex, mollitia?
            Sed culpa sint optio delectus, officia, odit vel saepe sit vero, ratione dignissimos. Dolore doloribus accusamus porro omnis est, exercitationem non ut id repellendus! Est repellendus molestiae nostrum laborum perferendis.
            Libero, ipsum? Inventore, nesciunt quis rem reiciendis ullam asperiores dolor dignissimos pariatur soluta, unde aperiam? A consectetur rerum ex, sequi voluptate quidem unde quis, magnam mollitia, minus temporibus facilis dignissimos.
            Error aut, aliquam ut pariatur optio veritatis autem sunt aliquid similique velit atque debitis quaerat natus officiis beatae expedita blanditiis dicta. Inventore laudantium voluptatum cum magnam alias repudiandae consequuntur repellendus!
          </p>
        </div>

        <div className="py-20">
          <Link to="/" className="px-6 py-2 bg-slate-500 hover:bg-slate-600 transition-colors rounded shadow-sm">Go Home</Link>
        </div>
      </div>
    </Revealer>
  );
}
