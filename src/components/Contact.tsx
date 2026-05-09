"use client"

import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import emailjs from "@emailjs/browser"
import { PROFILE } from "@/lib/constants"

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      setSubmitStatus("success")
      setFormState(INITIAL_FORM)
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 3000)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title section */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
              Let's talk
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-red-500 rounded" />
          <p className="text-slate-400 text-lg mt-6">
            Have a project in mind or want to collaborate? Feel free to reach
            out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              {
                id: "name",
                label: "Your name",
                type: "text",
                placeholder: "Jane Doe",
              },
              {
                id: "email",
                label: "Your email",
                type: "email",
                placeholder: "you@email.com",
              },
              {
                id: "subject",
                label: "Subject",
                type: "text",
                placeholder: "What's this about?",
              },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-sm font-semibold text-slate-300 mb-2"
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formState[id as keyof FormState]}
                  onChange={handleChange}
                  required
                  placeholder={placeholder}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-rose-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-rose-500/50 transition-all hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                ✅ Message sent! I'll get back to you within 24-48 hours.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                ❌ Something went wrong. Please try again.
              </div>
            )}
          </form>

          {/* Contact info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all hover:shadow-lg hover:shadow-rose-500/10 overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-rose-500/20 to-red-500/20 flex items-center justify-center flex-shrink-0">
                  <MdEmail className="w-6 h-6 text-rose-400" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-semibold">Email</h4>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-rose-400 hover:text-rose-300 transition-colors break-all"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all hover:shadow-lg hover:shadow-rose-500/10">
              <h4 className="text-white font-semibold mb-4">Find me on</h4>
              <div className="flex gap-4">
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center hover:border-rose-500 hover:bg-rose-500/10 transition-all group"
                >
                  <FaGithub className="w-5 h-5 text-slate-400 group-hover:text-rose-400 transition-colors" />
                </a>
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center hover:border-rose-500 hover:bg-rose-500/10 transition-all group"
                >
                  <FaLinkedin className="w-5 h-5 text-slate-400 group-hover:text-rose-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-rose-500/10 to-red-500/10 border border-rose-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 mt-1.5 animate-pulse flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Availability
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Currently open to new opportunities and collaborations.
                    Typical response time is 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
