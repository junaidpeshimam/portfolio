'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react'

export default function Portfolio() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const projects = [
    {
      title: "Fuel Delivery Bot",
      description: "Python, Telegram API, Google Maps API",
      details: [
        "Developed a Telegram bot using Python and Telegram API for ordering fuel delivery to users' doorsteps.",
        "Implemented interactive menus for users to choose fuel type and quantity through inline buttons.",
        "Integrated location sharing with Google Maps API to confirm delivery addresses.",
        "Deployed the bot on Railway using a CI/CD pipeline, ensuring smooth and continuous updates.",
        "Managed user information collection and order workflows, ensuring data validation and record-keeping."
      ]
    },
    {
      title: "Pitch Potential Predictor",
      description: "Flask, HTML, CSS, JavaScript, Croq API",
      details: [
        "Designed and developed a web application using Flask to evaluate the potential of business pitches with AI.",
        "Integrated Croq API for AI-based pitch analysis, generating predictions and feedback within 150 words.",
        "Implemented form handling in Flask to collect user inputs for name, company name, domain, and pitch content.",
        "Styled the web interface with HTML and CSS, ensuring a user-friendly and responsive design.",
        "Ensured backend processing and AI integration to provide immediate pitch evaluations and humorous critiques."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="py-6 px-4 md:px-6 lg:px-8 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Peshimam Mohammed Junaid</h1>
          <Image src="/placeholder.svg?height=50&width=50" alt="PMJ Logo" width={50} height={50} className="mr-4" />
          <nav className="space-x-4">
            {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gray-600 transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 md:px-6 lg:px-8 space-y-12">
        <section id="about" className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Hello, I'm Junaid!</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Aspiring software engineer with a knack for UI/UX design and a secret talent for
            <span 
              className="cursor-help underline decoration-dotted" 
              onMouseEnter={() => setShowEasterEgg(true)}
              onMouseLeave={() => setShowEasterEgg(false)}
            >
              {' '}juggling bits and pixels
            </span>.
            {showEasterEgg && (
              <span className="block text-sm mt-2 italic text-gray-600">
                (Disclaimer: No actual bits or pixels were harmed in the making of this portfolio)
              </span>
            )}
          </p>
          <div className="flex justify-center space-x-4 flex-wrap">
            {[
              { icon: Mail, text: 'junaidpeshimam@gmail.com' },
              { icon: Github, text: 'github.com/junaidpeshimam' },
              { icon: MapPin, text: 'Andhra Pradesh, India' }
            ].map((item, index) => (
              <Button 
                key={index}
                variant="outline" 
                size="sm" 
                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black"
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.text}
              </Button>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-6">
          <h2 className="text-3xl font-bold">Experience</h2>
          <Card className="border-gray-200">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>UI/UX Intern</CardTitle>
                  <CardDescription>CLUMOSS Inc.</CardDescription>
                </div>
                <Badge variant="outline" className="bg-gray-100 text-gray-800">Jan 2024 - Mar 2024</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Designed the complete banquet hall website, BanquetBliss, including 7 pages: Home, Venue, Booking, Feedback, Experience, Contact, and About.</li>
                <li>Conducted comprehensive research on industry standards and competitor websites to guide design decisions and ensure a user-centric interface.</li>
                <li>Created wireframes and high-fidelity prototypes using Figma, iterating designs based on continuous client feedback to enhance user experience.</li>
                <li>Focused on crafting a visually cohesive design with intuitive navigation, significantly improving the website's usability and aesthetic appeal.</li>
                <li>Successfully managed the project timeline, delivering the design within a stringent 7-day period, showcasing strong time management and prioritization skills.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="space-y-6">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-6">
          <h2 className="text-3xl font-bold">Skills & Leadership</h2>
          <Tabs defaultValue="skills">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="skills">Technical Skills</TabsTrigger>
              <TabsTrigger value="leadership">Leadership & Extracurricular</TabsTrigger>
            </TabsList>
            <TabsContent value="skills">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle>Technical Prowess</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Languages</h4>
                      <p>Python, Java, HTML/CSS, SQL</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">UI/UX Design</h4>
                      <p>Figma, Adobe XD, Wireframing, Prototyping, User Research, Usability Testing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="leadership">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle>Leadership & Extracurricular Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Microsoft Learn Student Ambassador</h4>
                        <p className="text-sm text-gray-500">Oct 2023 - Present</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Organized and led technical workshops and webinars, educating over 200 students on Microsoft technologies and tools.</li>
                          <li>Interacted with the global student ambassador community, presenting various topics and sharing insights during numerous presentations.</li>
                          <li>Conducted multiple Cloud Skills Challenges, motivating participants to develop and showcase their cloud computing skills.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold">Design Team Lead, TEDxGPCET</h4>
                        <p className="text-sm text-gray-500">Jun 2024 - Present</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Led the complete design and branding of TEDxGPCET's Instagram page, including the creation of engaging posts, promotional banners, and event posters.</li>
                          <li>Designed and produced all volunteer ID cards, along with customized tags, enhancing the event's professional image and online presence.</li>
                          <li>Played a key role in the promotion and visual identity of the TEDxGPCET event, contributing to increased engagement and visibility across social media platforms.</li>
                          <li>Collaborated with team members to develop cohesive and impactful visual content for TEDx events.</li>
                          <li>Ensured all design materials align with the TEDx brand guidelines and event themes.</li>
                        </ul>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <footer className="py-6 px-4 md:px-6 lg:px-8 border-t border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 Peshimam Mohammed Junaid. All rights reserved.</p>
          <div className="flex space-x-4">
            {[
              { href: "https://github.com/junaidpeshimam", icon: Github },
              { href: "https://www.linkedin.com/in/junaidpeshimam", icon: Linkedin },
              { href: "mailto:junaidpeshimam@gmail.com", icon: Mail }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}