import './Services.css';
import vec1 from '../assets/vec1.png';
import vec2 from '../assets/vec2.png';
import vec3 from '../assets/vec3.png';
import vec4 from '../assets/vec4.png';

function Services() {
  return (
    <section id="services">
      <div className="container text-center">
        <h2>Services</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti atque temporibus maxime
          enim labore possimus alias debitis odio, eligendi asperiores porro laboriosam iure
          consequuntur quidem quas in perspiciatis dicta ipsa!
        </p>
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={vec1} alt="vector1" style={{ width: '50px', height: '50px' }} />
                </a>
                <h5 className="card-title">UI/UX</h5>
                <p className="card-text">Creating intuitive designs that delight users.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={vec2} alt="vector2" style={{ width: '52px', height: '62px' }} />
                </a>
                <h5 className="card-title">Web Design</h5>
                <p className="card-text">Crafting modern and responsive websites.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={vec3} alt="vector3" style={{ width: '37px', height: '62px' }} />
                </a>
                <h5 className="card-title">App Design</h5>
                <p className="card-text">Designing sleek and functional mobile apps.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={vec4} alt="vector4" style={{ width: '62px', height: '50px' }} />
                </a>
                <h5 className="card-title">Graphic Design</h5>
                <p className="card-text">Delivering visually appealing branding solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
