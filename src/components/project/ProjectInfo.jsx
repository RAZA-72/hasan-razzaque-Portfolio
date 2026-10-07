import { Card } from "@ui";

const Item = ({ label, value }) => (
  <div>
    <p className="text-sm uppercase tracking-wider text-zinc-500">
      {label}
    </p>

    <p className="mt-2 text-lg font-semibold text-white">
      {value}
    </p>
  </div>
);

export default function ProjectInfo({ project }) {
  return (
    <Card className="mt-16 p-6 sm:p-8">
      <h2 className="mb-8 text-2xl font-bold text-white">
        Project Information
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Item
          label="Role"
          value={project.role}
        />

        <Item
          label="Client"
          value={project.client}
        />

        <Item
          label="Duration"
          value={project.duration}
        />

        <Item
          label="Category"
          value={project.category}
        />

        {project.location && (
          <Item
            label="Location"
            value={project.location}
          />
        )}
      </div>
    </Card>
  );
}