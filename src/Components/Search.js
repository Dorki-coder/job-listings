import s from "./Search.module.css";

export default function Search({ tags, setTags }) {
  return (
    <div className="header__search">
      <div className={s.tags__wrapper}>
        <span className={s.tags__wrapper}>
          {tags.map((element) => {
            return (
              <span key={element}>
                <span className={s.tag}>{element}</span>
                <button
                  onClick={() =>
                    setTags(
                      tags.filter((e) => {
                        return e !== element;
                      })
                    )
                  }
                  className={s.delete}
                >
                  X
                </button>
              </span>
            );
          })}
        </span>
        <span className={s.clear} onClick={() => setTags([])}>
          Clear
        </span>
      </div>
    </div>
  );
}
