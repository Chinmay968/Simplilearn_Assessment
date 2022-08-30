import { userDeleted } from "./EventSlice";
import { useDispatch, useSelector } from "react-redux";
import download from "./download.jpg";
import './Event.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export function EventList() {
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.events);
  const loading = useSelector((state) => state.loading);
  const HandleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };
  

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <div className="u-full-width">
            <div>
              {entities.length &&
                entities.map(({ id, title, body }, i) => (
                  <div className='All-Posts'key={id}>
                   <div class="card" >
                    
                    <div class="card-body" >
                    <i><b><h2 class="card-title" style={{color:"blue",fontFamily:"cursive"}} >{title}</h2></b></i>
                    <img src={download} class="card-img-top" alt="..." style={{width:"100%",height:"11cm", display:"block", padding:"10px"}}/>
                      <b><p class="card-text" >{body}</p> </b>
                    </div>
                    <button  className="delete-btn" onClick={() => HandleDelete(id)}>Delete</button>
                   </div>
                   </div> 
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
