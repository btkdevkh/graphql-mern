import { useState } from 'react';
import { FaList } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { UPDATE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS } from '../queries/projectQueries';

export default function UpdateProjectModal({ project }) {
  const [name, setName] = useState(project.name)
  const [description, setDescription] = useState(project.description)
  const [status, setStatus] = useState('')

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [{ query: GET_PROJECTS, variables: { id: project.id } }],
  });

  const handleSubmit = (e) => {
    e.preventDefault()

    updateProject(name, description, status)
  }

  return (
    <>
      {project && (
        <>
          <button type="button" className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#updateProjectModal">
            <FaList /> Update Project
          </button>

          <div 
          className="modal fade" id="updateProjectModal" tabIndex="-1" aria-labelledby="updateProjectModalLabel" aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="updateProjectModalLabel">Update Project</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input 
                        type="text"
                        className="form-control"
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select 
                        className='form-select' 
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="">Select Status</option>
                        <option value='new'>Not Started</option>
                        <option value='progress'>In Progress</option>
                        <option value='completed'>Completed</option>
                      </select>
                    </div>

                    <button type='submit' className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
