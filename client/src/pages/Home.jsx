import AddClientModal from "../components/AddClientModal";
import AddProjecttModal from "../components/AddProjectModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <AddClientModal />
      <AddProjecttModal />
      <Clients />
      <Projects />
    </>
  )
}
