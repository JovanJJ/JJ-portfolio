import MasterHubPreview from "./MasterHubPreview";
import ReactLearningPreview from "../components/ReactLearningPreview";

export default function Projects() {
    return (
        <section>
            <h3 id="projects" className="text-2xl lg:text-4xl w-fit mx-auto mt-15 pb-10 font-bold">My projects</h3>
            <MasterHubPreview />
            <ReactLearningPreview />
        </section>
    );
}