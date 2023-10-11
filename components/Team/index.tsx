import SectionTitle from '../Common/SectionTitle'
import SinglePerson from './SinglePerson'
import { teamData } from './teamData'

const Team = () => {
  return (
    <section id="section" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle 
          title="Our Team"
          paragraph=""
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {teamData.map(({about, image, name, role}) => (
            <div key={name}>
              <SinglePerson
                about={about}
                image={image}
                name={name}
                role={role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team;