export default function LoremText({ length = 3 }: { length?: number }) {
  return (
    <div className="space-y-8">
      {Array.from({ length }).map((_, index) => (
        <p 
          className="max-w-[65ch] flex items-center text-lg"
          key={index}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto excepturi quibusdam odio, unde tempora illum quia vitae ex veritatis quam nihil officia itaque eum quod cumque eos adipisci quaerat natus sint? Culpa fugiat sequi eum eveniet voluptatum! Ea harum tenetur excepturi reprehenderit quos, eos minus debitis dicta molestiae ex doloribus maiores, esse eveniet natus dolorem, labore dolores impedit autem rerum iusto aut! Maiores iusto voluptas laboriosam pariatur facilis? Saepe optio voluptatibus id nisi quasi laudantium nulla eveniet, eius adipisci quas dolorem ipsam repellendus nihil non fugiat. Commodi nam sequi error blanditiis soluta assumenda, eveniet sapiente quaerat voluptate veritatis et?
        </p>
      ))}
    </div>
  );
}
