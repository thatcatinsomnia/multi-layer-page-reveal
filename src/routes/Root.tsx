import { Link } from 'react-router-dom';
import Revealer from '../components/Revealer';

export default function Root() {
  return (
    <Revealer>
      <div className="p-4 h-full w-full flex flex-col items-center justify-center bg-indigo-400 text-white">
        <h1 className="py-10 text-4xl">Home</h1>
        <div className="max-w-[65ch] space-y-8 text-lg">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quia fugiat quis! Deleniti unde, inventore exercitationem porro ut perferendis fuga sint officia. Quod fugiat debitis ea nisi perferendis libero aperiam.
            Nisi commodi sint explicabo voluptas rem iste ea exercitationem cum. Eveniet, perspiciatis quia esse saepe architecto voluptates tempora illum voluptatem ducimus facilis vel culpa voluptatibus qui quos nesciunt laboriosam repellat.
            Itaque molestias distinctio cumque ipsa commodi illo optio autem rerum nam debitis corporis in quisquam repudiandae dolor saepe velit placeat omnis quo, laborum temporibus ipsam. Error nisi quas provident doloribus!
            Ipsum tempore in sunt repellat sint quam possimus, itaque repudiandae quod, ipsam iure nobis ullam impedit doloribus, non ad nam ex odit deserunt dolores optio fugit molestias est! Placeat, in!
            Saepe ipsum possimus cumque rem repellendus sit cum at unde quasi, quas consectetur, explicabo error voluptatem voluptates maiores? Voluptatibus exercitationem provident ducimus minima impedit porro corporis laborum perspiciatis maxime corrupti!
            Delectus quae ipsam expedita, dolore corrupti, nobis accusantium saepe facilis tempora consequuntur illo alias ad iusto sapiente eveniet, inventore quam a obcaecati nisi odio! Id itaque deserunt tempora ducimus optio?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quas numquam, quis, amet, odit molestias praesentium autem dolorum ad a suscipit nostrum omnis? Voluptatibus, dicta quae! A repellendus optio minima.
            Est cupiditate cum nihil veritatis! Vero esse illum iure nisi dolores beatae vel nihil et illo eaque, voluptatum, debitis, quo magni. Tenetur facilis blanditiis ad fugit consequatur sed soluta quae.
            Rem dolor pariatur explicabo accusamus quos culpa facilis autem ut fugiat iure dignissimos obcaecati corrupti, rerum aliquid numquam odio cupiditate eligendi quis sapiente voluptates, magnam repellat amet sit. Vel, pariatur?
            Libero dolore cum, unde sequi non eveniet perferendis repellendus. Aspernatur quasi non sequi quibusdam aliquam perspiciatis modi reiciendis a itaque magnam rem dolores veniam enim sit, nihil delectus error laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eligendi enim corrupti, non incidunt earum rerum, asperiores praesentium neque laborum quasi similique natus ipsum recusandae maxime eius sed ex doloribus?
            Dolores excepturi, atque ullam optio ex amet. Asperiores architecto neque molestiae error numquam laboriosam quia in inventore dolorem, officiis molestias id sequi. Odio voluptates ab in qui quos debitis nesciunt.
            Dicta voluptate temporibus, unde ipsa natus soluta neque eveniet ex a recusandae magni. Fugit libero voluptas sapiente explicabo nam. Earum corrupti perspiciatis explicabo ipsa libero maiores ex impedit quibusdam vitae.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam culpa voluptates saepe neque animi illum dignissimos nesciunt officiis dolore amet nemo, fuga iusto similique expedita odio. Aperiam necessitatibus consequuntur fuga.
            Deleniti eum, laboriosam quasi culpa eaque quas pariatur perferendis voluptatum sequi delectus architecto quam illum beatae officiis, at quidem blanditiis quia a excepturi voluptas. Adipisci amet repellendus ipsa quam eos?
            Harum odio similique aliquam! Saepe fugiat sint consequatur deserunt, minima corrupti iusto omnis fugit ullam debitis atque veniam et delectus perferendis harum quia doloremque veritatis eaque cumque nobis expedita aliquam?
            Dignissimos eius, voluptatem odio porro esse incidunt? Dignissimos iste laudantium nihil. Molestias iste ipsum soluta odio dolorem adipisci voluptatibus maiores sed, esse commodi beatae, ea reiciendis neque? Doloremque, rerum ab.
            Odit adipisci nisi esse. Omnis, nobis quos? Doloribus laboriosam autem repellendus hic adipisci nobis, est iste aut mollitia dolor veniam eveniet quae quasi dolorum quaerat voluptatem blanditiis harum nam distinctio!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, iste soluta rem provident aliquid eius dicta est omnis ducimus qui consectetur consequatur doloremque minus error ex quos dolore veniam reprehenderit!
            Aut dolorem cupiditate totam numquam alias unde molestias magni soluta quas voluptatem maiores libero officiis, nam omnis eligendi quae culpa non consequuntur ipsa voluptate quis. Tempora totam esse autem alias?
            Omnis nihil veritatis dolore perspiciatis veniam molestiae sint id perferendis necessitatibus? Necessitatibus vitae voluptates voluptatem libero, repellat, odit magni pariatur harum unde facere natus iure distinctio earum explicabo vel repellendus!
          </p>
        </div>
        <div className="py-20">
          <Link to="/about" className="px-6 py-2 bg-slate-500 hover:bg-slate-600 transition-colors rounded shadow-sm">Go About</Link>
        </div>
      </div>
    </Revealer>
  );
}