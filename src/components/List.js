import "./list.css";

const List = ({people}) =>{
  return(
    <>
      {people.map((person)=>{
        const {id,name,age,image} = person;
        return(
          <article key={id} className="list">
            <img src={image} alt={name} className='list-image'/>
            <div className="list-info">
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;
