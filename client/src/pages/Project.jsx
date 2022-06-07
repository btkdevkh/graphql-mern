import { Link, useParams, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PROJECT, GET_PROJECTS } from '../queries/projectQueries';
import { DELETE_PROJECT } from '../mutations/projectMutations';
import ClientInfo from '../components/ClientInfo';
import { FaTrash } from 'react-icons/fa';
import UpdateProjectModal from '../components/UpdateProjectModal';

export default function Project() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { 
    variables: { id } 
  });

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  
  if(loading) return <Spinner />
  if(error) return <p>Error</p>

  return (
    <>
    <UpdateProjectModal project={data.project} />
    {!loading && !error && (
      <div className="mx-auto w-75 card p-5">
        <Link to='/'
          className='btn btn-light btn-sm w-25 d-inline ms-auto'
        >
          Back
        </Link>
        <h1>{data.project.name}</h1>
        <p>{data.project.description}</p>

        <h5 className='mt-3'>Project STtaus:</h5>
        <p className="lead">{data.project.status}</p>

        <ClientInfo client={data.project.client} />

        <button className="btn btn-danger mt-5"
          onClick={deleteProject}
        >
          <FaTrash />
        </button>
      </div>
    )}
    </>
  )
}
