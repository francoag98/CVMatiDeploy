import myself from '../assets/imagenes/my-profile-picture.jpeg'
import telefono from '../assets/imagenes/telefono.png'
import instagram from '../assets/imagenes/instagram.png'
import correo from '../assets/imagenes/correo-electronico.png'
import ubicacion from '../assets/imagenes/alfiler.png'

export default function HTMLcomponent() {
  return (
    <div>
      <p>creando un nuevo parrafo para hacer el commit a gitHub y ver si funciona el link de la pagina</p>
      <div className='cv-page'>
        <div className="left-bar">
          <div className="img-item">
            <img src={myself} alt="" className='profile-image' />
          </div>
          <div className='about-me-info'>
            <div className='profile-title-info'>
              <p className='title'>ABOUT ME:</p>
            </div>
            <div className='profile-description'>
              <p className='description'>
                I am currently in my third year of the Bachelor's Degree in Systems, Computer Science. I am looking to enter the workforce, although I may not have much experience in the field. I am very dedicated and a hardworking individual. I am always prepared for any challenge. I am passionate about programming languages and being able to interact with clients. <br />
                I am a quick learner, as well as organized and methodical.
              </p>
            </div>
          </div>
          <div className='contact-info'>
            <div className='contact-items'>
              <div className='icons'>
                <img src={telefono} alt="" />
              </div>
              <div className='contact-text-information'>
                <p>(0221) 435-7963</p>
              </div>
            </div>
            <div className='contact-items'>
              <div className='icons'>
                <img src={ubicacion} alt="" />
              </div>
              <div className='contact-text-information'>
                <p><a href="https://es.wikipedia.org/wiki/La_Plata" target='_blank'>Argentina, Buenos Aires, La Plata</a></p>
              </div>
            </div>
            <div className='contact-items'>
              <div className='icons'>
                <img src={correo} alt="" />
              </div>
              <div className='contact-text-information'>
                <p><a href="mailto:matiasgema12@gmail.com" target='_blank'>matiasgema12@gmail.com</a></p>
              </div>
            </div>
            <div className='contact-items'>
              <div className='icons'>
                <img src={instagram} alt="" />
              </div>
              <div className='contact-text-information'>
                <p><a href="https://www.instagram.com/mati.gema/" target='_blank'>mati.gema</a></p>
              </div>
            </div>
          </div>
          <div className='able-to-use'>
            <div className='atu-text'>
              <span>ABLE TO USE:</span>
            </div>
            <div className='atu-items'>
              <div>- Microsoft Office</div>
              <div>- React JS</div>
              <div>- Photoshop, Basic Level</div>
            </div>
          </div>
          <div className='idioms-info'>
            <span>IDIOMAS:</span>
            <div className='idioms-items'>
              <div>- Inglés - Advanced</div>
              <div>- Portugués - Basic</div>
              <div>- Italiano - Basic</div>
            </div>
          </div>
        </div>
        <div className="right-bar">
          <div className='header'>
            <div>
              DB: March 8th 1999. Age: 25.
            </div>
            <span>Gema Juan Matias.</span>
          </div>
          <div className='student-title'>
            <p>Student at the <a href="https://www.info.unlp.edu.ar/" target='_blank'>National University of La Plata.</a></p>
          </div>
          <div className='studies-info'>
            <div>
              <span>Studies </span>
            </div>
            <div className='studies-especifies'>
              <div>
                <p>Bachelor's Degree in Systems</p>
              </div>
              <div className='starting-date'>
                <p>Start Date: February 2018 - Ongoing</p>
              </div>
              <div className='actual-date'>• Currently pursuing third year</div>
            </div>
          </div>
          <div className='english-studies-info'>
            <div>
              <div className='english-title'>Student of the English language</div>
            </div>
            <div className='idiom-especifies'>
              <div>
                <span>June 2018 - Currently on going.</span>
              </div>
              <div className='information'>
                <p>• I started at the university.</p>
                <p>• I continued my studies on my own.</p>
              </div>
            </div>
          </div>
          <div className='education-info'>
            <div>
              <div className='educacion'>Education:</div>
            </div>
            <div className='education-especifies'>
              <div className='school-name'>High School and Elementary Education: </div>
              <p>• San Cayetano School, La Plata</p>
            </div>
          </div>
          <div className='work-experience'>
            <div>
              <div className='work-xp'>Work Experience: Cortez Restaurant, La Plata</div>
            </div>
            <div className='work-especifies'>
              <div className='primer-job'>
                <div>
                  March 2018 - August 2022
                </div>
                <p>• Waiter responsible for the proper distribution of staff in the dining area.</p>
                <p>• Waiter in charge of organizing work materials, both before and at the end of the shift.</p>
                <p>• Waiter responsible for cocktail preparation and barista duties when not stationed at the bar.</p>
              </div>
              <div className='segundo-job'>
                <div>
                  August 2022 - September 2023
                </div>
                <p>• Restaurant staff manager, responsible for creating the employee schedule for the week.</p>
                <p>• Responsible for the proper and efficient organization of monthly events.</p>
                <p>• In charge of checking the stock of work materials for the dining room waiters.</p>
                <p>• Responsible for handling the cash in the register at the time of closing it at the end of the shift.</p>
              </div>
            </div>
          </div><br />
        </div>
      </div>
    </div>
  )
}