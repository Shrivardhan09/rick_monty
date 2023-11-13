import { Link } from 'react-router-dom';
import './cards.css';

const Cards = ({ data, page }) => {
  console.log("data: ", data);



  const getStatusColor = (status) => {
    switch (status) {
      case "Alive":
        return "green";
      case "Dead":
        return "red";
      default:
        return "gray";
    }
  };

  return (

    <div className="card-container"  >
      {data?.map((items, index) => (
        <Link to={`${page}${items.id}`} key={index} style={{ textDecoration: 'none' }}>
          <div key={items.id} className="cards">
            <div className='card-image'>
              <img src={items.image} alt={items.name} width={200} />
            </div>
            <div className='card-desc'>
              <p>{items.name}</p>
              <div className='status'>
                <p
                  className="card-status"
                  style={{
                    backgroundColor: getStatusColor(items.status),
                    color: 'white',
                    padding: 5,
                    width: 10,
                    borderRadius: "50%",
                  }}
                >
                </p>
                <p>{items.status}</p>
              </div>

              <div className='location'>
                <p style={{ margin: 0 }}>Species: {items.species}</p>
                <p style={{ margin: 0 }}>Gender: {items.gender} </p>
                <p style={{ margin: 0 }}>Location: {items.location?.name}</p>

              </div>
            </div>

          </div>
        </Link>
      ))}
      <div>
        {data?.length === 0 && <p>No Character found</p>}
      </div>
    </div>
  );
};

export default Cards;
