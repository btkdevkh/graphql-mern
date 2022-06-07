import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQueries';
import ProjectCard from './ProjectCard';
import Spinner from './Spinner';

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS)

  if(loading) return <Spinner />
  if(error) return <p>Error</p>

  return (
    <>
      {
        !loading && !error && (
          <div className='row mt-3'>
            {data.projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )
      }
    </>
  )
}
