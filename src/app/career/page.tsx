// File: pages/careers.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Types
interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

// Mock job data (in a real app, this would come from an API)
const jobPositions: JobPosition[] = [
  {
    id: "teacher-math",
    title: "Mathematics Teacher",
    department: "Education",
    location: "Boston, MA (Hybrid)",
    type: "Full-time",
    description:
      "We are looking for a passionate Mathematics Teacher to inspire our students and help them achieve their academic goals.",
    requirements: [
      "Bachelor's degree in Mathematics or Education",
      "Teaching license or certification",
      "Minimum 2 years of teaching experience",
      "Strong communication and interpersonal skills",
      "Experience with digital learning tools",
    ],
    responsibilities: [
      "Develop and deliver engaging mathematics lessons for high school students",
      "Assess student progress and provide constructive feedback",
      "Collaborate with other teachers to improve curriculum",
      "Maintain accurate records of student performance",
      "Participate in parent-teacher conferences",
    ],
  },
  {
    id: "instructional-designer",
    title: "Instructional Designer",
    department: "Curriculum Development",
    location: "Remote",
    type: "Full-time",
    description:
      "Join our curriculum team to design innovative learning experiences that engage students and improve educational outcomes.",
    requirements: [
      "Master's degree in Instructional Design, Education, or related field",
      "3+ years of experience in instructional design or curriculum development",
      "Proficiency with e-learning authoring tools",
      "Experience with learning management systems",
      "Understanding of learning theories and instructional design principles",
    ],
    responsibilities: [
      "Design and develop instructional materials for online and blended learning",
      "Collaborate with subject matter experts to create effective curriculum",
      "Assess learning needs and design appropriate solutions",
      "Maintain quality standards for all educational content",
      "Stay updated on emerging technologies and educational trends",
    ],
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    department: "Technology",
    location: "Remote",
    type: "Full-time",
    description:
      "Help us build user-friendly, accessible, and responsive educational platforms that empower our students and teachers.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in frontend development",
      "Proficiency with React, TypeScript, and Next.js",
      "Strong understanding of web accessibility standards",
      "Experience with responsive design and cross-browser compatibility",
    ],
    responsibilities: [
      "Develop and maintain frontend components for our educational platforms",
      "Collaborate with UX designers to implement user interfaces",
      "Ensure web accessibility compliance",
      "Optimize applications for maximum speed and scalability",
      "Write clean, maintainable, and well-documented code",
    ],
  },
];

// Career page component
const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");

  // Get unique departments and locations for filters
  const departments = [
    "All",
    ...new Set(jobPositions.map((job) => job.department)),
  ];
  const locations = [
    "All",
    ...new Set(jobPositions.map((job) => job.location)),
  ];

  // Filter jobs based on selected filters
  const filteredJobs = jobPositions.filter(
    (job) =>
      (selectedDepartment === "All" || job.department === selectedDepartment) &&
      (selectedLocation === "All" || job.location === selectedLocation),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/assets/images/smiles.png"
            alt="Students in classroom"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Join Our Mission to Transform Education
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            At ILearnSchool, we&apos;re passionate about creating innovative
            learning experiences that empower students and educators alike.
          </p>
          <a
            href="#openings"
            className="inline-block bg-white text-blue-600 font-medium py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14v7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly seek better ways to teach, learn, and grow in a
                rapidly changing world.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
              <p className="text-gray-600">
                We believe in creating opportunities for all students regardless
                of background or ability.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-gray-600">
                We measure our success by the positive difference we make in our
                students&apos; lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Work With Us
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Join a team that values your wellbeing, growth, and contribution to
            our mission.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Flexible Work Arrangements
              </h3>
              <p className="text-gray-600">
                Remote, hybrid, and on-site options available for many
                positions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Professional Development
              </h3>
              <p className="text-gray-600">
                Continuous learning opportunities including workshops, courses,
                and conferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Competitive Compensation
              </h3>
              <p className="text-gray-600">
                Salary packages that reflect your skills, experience, and
                contribution.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Health & Wellness</h3>
              <p className="text-gray-600">
                Comprehensive benefits including healthcare, wellness programs,
                and paid time off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="openings" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Open Positions
          </h2>

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <div className="w-full md:w-64">
              <label
                htmlFor="department-filter"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Department
              </label>
              <select
                id="department-filter"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-64">
              <label
                htmlFor="location-filter"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <select
                id="location-filter"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Job listings */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <h3 className="text-xl font-semibold text-blue-600">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {job.department}
                        </span>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {job.location}
                        </span>
                        <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <Link
                      className="inline-block text-blue-600 font-medium hover:text-blue-700"
                      href={`/careers/${job.id}`}
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">
                  No positions match your current filters. Please try different
                  criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Application Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-200 transform md:-translate-x-1/2"></div>

              {/* Timeline items */}
              <div className="relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row mb-8">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
                    <p className="text-gray-600">
                      Submit your application through our careers portal with
                      your resume and a brief cover letter.
                    </p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start mt-4 md:mt-0">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row-reverse mb-8">
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-xl font-semibold mb-2">
                      Initial Screening
                    </h3>
                    <p className="text-gray-600">
                      Our HR team will review your application and reach out to
                      schedule an initial conversation.
                    </p>
                  </div>
                  <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row mb-8">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold mb-2">
                      Skills Assessment
                    </h3>
                    <p className="text-gray-600">
                      Depending on the role, you might complete a skills
                      assessment or task related to your field.
                    </p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start mt-4 md:mt-0">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row-reverse mb-8">
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-xl font-semibold mb-2">
                      Team Interviews
                    </h3>
                    <p className="text-gray-600">
                      Meet with potential teammates and department leaders to
                      ensure a good fit on both sides.
                    </p>
                  </div>
                  <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold mb-2">
                      Offer & Onboarding
                    </h3>
                    <p className="text-gray-600">
                      If selected, you&apos;ll receive an offer and begin our
                      thorough onboarding process.
                    </p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start mt-4 md:mt-0">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      5
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Team Members Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">SR</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Rodriguez</h4>
                  <p className="text-sm text-gray-600">
                    Science Teacher, 3 years
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Working at ILearnSchool has been the most rewarding
                experience of my career. I love the collaborative environment
                and the freedom to try innovative teaching methods.&quot;
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">JT</span>
                </div>
                <div>
                  <h4 className="font-semibold">James Taylor</h4>
                  <p className="text-sm text-gray-600">
                    Software Engineer, 2 years
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;I joined ILearnSchool to make a difference in education
                through technology. Every day, I get to solve interesting
                problems that directly impact how students learn.&quot;
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">ML</span>
                </div>
                <div>
                  <h4 className="font-semibold">Maria Lopez</h4>
                  <p className="text-sm text-gray-600">
                    Curriculum Developer, 4 years
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;The supportive culture at ILearnSchool has allowed me to
                grow both professionally and personally. I&apos;m proud of the
                impact our curriculum has on thousands of students.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join our team and help shape the future of education. We&apos;re
            always looking for passionate individuals to grow with us.
          </p>
          <Link
            href="#openings"
            className="inline-block bg-white text-blue-600 font-medium py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
          >
            Explore Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
