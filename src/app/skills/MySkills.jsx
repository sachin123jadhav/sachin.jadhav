import React from 'react'
import HoverCard from '../component/HoverCard'


function MySkills() {
  return (
    <div>

      <section className="bg-[#faf9fb] py-20">

        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-12 gap-10 ">
            <div className="lg:col-span-6">

              <HoverCard>
                <h2 className="text-2xl font-bold mb-2 border-b border-gray-200 pb-2">
                  UI/UX & Product Design
                </h2>

                <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
                  <li>B2B SaaS Platforms</li>
                  <li>Dashboard & Data Visualization</li>
                  <li>Complex Workflows</li>
                  <li>Design Systems</li>
                  <li>Responsive & Cross-Platform Design</li>
                  <li>Wireframing & Prototyping</li>
                </ul>
              </HoverCard>

            </div>

            <div className="lg:col-span-6">
              <HoverCard>
                <h2 className="text-2xl font-bold mb-2 border-b border-gray-200 pb-2">
                  Design Tools
                </h2>

                <ul className="space-y-2">
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Figma</span>
                    <span className="text-gray-600">Advanced</span>
                  </li>

                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Adobe Photoshop</span>
                    <span className="text-gray-600">Expert</span>
                  </li>

                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Adobe Illustrator</span>
                    <span className="text-gray-600">Expert</span>
                  </li>

                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Canva</span>
                    <span className="text-gray-600">Proficient</span>
                  </li>

                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span>CorelDRAW</span>
                    <span className="text-gray-600">Proficient</span>
                  </li>
                </ul>
              </HoverCard>

            </div>

              <div className="lg:col-span-6">
              <HoverCard>
                <h2 className="text-2xl font-bold mb-2 border-b border-gray-200 pb-2">
                  Frontend Development

                </h2>

             <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
  <li>HTML5</li>
  <li>CSS3</li>
  <li>SASS</li>
  <li>JavaScript (Working Knowledge)</li>
  <li>React (UI Implementation Support)</li>
  <li>Bootstrap</li>
  <li>Tailwind CSS</li>
  <li>Ant Design</li>
</ul>
              </HoverCard>

            </div>

              <div className="lg:col-span-6">
              <HoverCard>
                <h2 className="text-2xl font-bold mb-2 border-b border-gray-200 pb-2">
                  Platforms & CMS
                </h2>

               <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
  <li>WordPress</li>
  <li>Shopify</li>
  <li>OpenCart</li>
  <li>Ghost</li>
  <li>Webflow</li>
</ul>
              </HoverCard>

            </div>


          </div>



        </div>
      </section>



    </div>
  )
}

export default MySkills