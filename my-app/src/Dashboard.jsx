import UserCard from "./UserCard"

export default function Dashboard () {

    const users = [
        {
      id: 1,
      name: "Talha Makhdoom",
      job: "Frontend Developer",
      company: "TechSoft",
      experience: 2,
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      id: 2,
      name: "Waseem Akram",
      job: "Backend Developer",
      company: "CodeHub",
      experience: 3,
      skills: ["Node", "Express", "MongoDB"]
    },
    {
      id: 3,
      name: "Fahad Iqbal",
      job: "UI Designer",
      company: "DesignPro",
      experience: 1,
      skills: ["Figma", "Adobe XD"]
    },
    {
      id: 4,
      name: "Zia Khan",
      job: "Full Stack Developer",
      company: "WebSolutions",
      experience: 4,
      skills: ["React", "Node", "MongoDB", "Next.js"]
    }
    ]

    return (
        <div>
            <div>
                <h2>User Dashboard</h2>
                {users.map( (anyUser) => (
                    <UserCard key={anyUser.id} user={anyUser} />
                ))}
            </div>
        </div>
    )
}