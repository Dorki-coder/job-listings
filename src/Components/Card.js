import s from "./Card.module.css";

export default function Card({ data, tags, setTags }) {
  return (
    <div className={!data.featured ? s.card : `${s.card} ${s.card__featured}`}>
      <div className={s.card__info}>
        <img className={s.logo} src={data.logo} alt={data.company}></img>
        <div className={s.card__description}>
          <div>
            <span className={s.company}>{data.company}</span>
            {data.new ? <span className={s.new}>NEW!</span> : null}
            {data.featured ? (
              <span className={s.featured}>FEATURED!</span>
            ) : null}
          </div>
          <div className={s.position}>{data.position}</div>
          <div className={s.terms}>
            <span>{data.postedAt}</span>
            <span className={s.oval}>•</span>
            <span>{data.contract}</span>
            <span className={s.oval}>•</span>
            <span>{data.location}</span>
          </div>
        </div>
      </div>
      <div className={s.card__tags}>
        <span
          onClick={() => {
            const tagsArray = [...tags, data.role];
            setTags([...new Set(tagsArray)]);
          }}
          className={s.tag}
        >
          {data.role}
        </span>
        <span
          onClick={() => {
            const tagsArray = [...tags, data.level];
            setTags([...new Set(tagsArray)]);
          }}
          className={s.tag}
        >
          {data.level}
        </span>
        {data.languages.map((element) => {
          return (
            <span
              key={element}
              onClick={() => {
                const tagsArray = [...tags, element];
                setTags([...new Set(tagsArray)]);
              }}
              className={s.tag}
            >
              {element}
            </span>
          );
        })}
        {data.tools.map((element) => {
          return (
            <span
              key={element}
              onClick={() => {
                const tagsArray = [...tags, element];
                setTags([...new Set(tagsArray)]);
              }}
              className={s.tag}
            >
              {element}
            </span>
          );
        })}
      </div>
    </div>
  );
}
