import { SKILLS } from "@/lib/constants"

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title section */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-red-500 rounded" />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillCategory) => (
            <div
              key={skillCategory.category}
              className="group bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/10 transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-6 text-white group-hover:bg-gradient-to-r group-hover:from-rose-400 group-hover:to-red-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                {skillCategory.category}
              </h3>

              <div className="space-y-3">
                {skillCategory.items.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 group/item cursor-default"
                    >
                      <Icon className="text-2xl text-slate-400 group-hover/item:text-rose-400 transition-colors" />
                      <span className="text-slate-300 font-medium group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>
                      <div className="ml-auto w-0 h-0.5 bg-gradient-to-r from-rose-400 to-red-500 group-hover/item:w-8 transition-all" />
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
