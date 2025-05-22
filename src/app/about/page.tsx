"use client";
import useSWR from "swr";
import Image from "next/image";
import {
  MissionStatement,
  VisionStatement,
  stat,
  coreValuesList,
  OurTeam,
  Team,
} from "../../types/about";
const PLACEHOLDER_IMAGE = "/assets/images/walton.png";

const ABOUT_QUERY = `
  query GetAboutData {
    missionStatement {
      title
      description
    }
    visionStatement {
      title
      description
    }
    stats {
      year
      title
      total
      totalpeople
      platforms
      platformuser
      creator
      creatorname
    }
    coreValues {
      id
      icon
      title
      description
    }
    ourTeam {
      title
      description
    }
    teamMembers {
      image
      name
      role
      title
      place
      country
    }
  }
`;

interface AboutPageData {
  missionStatement: MissionStatement;
  visionStatement: VisionStatement;
  stats: stat[];
  coreValues: coreValuesList[];
  ourTeam: OurTeam;
  teamMembers: Team[];
}

const graphqlFetcher = async (query: string) => {
  try {
    const response = await fetch("/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    if (result.errors) {
      throw new Error(result.errors[0].message);
    }

    return result.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export default function About() {
  const { data, error, isLoading } = useSWR<AboutPageData>(
    ABOUT_QUERY,
    graphqlFetcher,
  );
  console.log("data", data);
  console.log("error", error);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Error Loading Data</h2>
          <p>Please try again later {error.message}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600 p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-[#4B0082] text-[#FFF8DC] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About ILearnSchool
          </h1>
          <p className="text-xl text-[#FFF8DC] max-w-2xl mx-auto">
            Bridging the gap between formal education and modern technology
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              {data?.missionStatement.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {data?.missionStatement.description}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              {data?.visionStatement.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {data?.visionStatement.description}
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Impact in Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.stats.map((stat) => (
              <div
                key={stat.creator}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-purple-600 text-3xl font-bold mb-2">
                  {stat.year}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {stat.title}
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-bold text-purple-600">
                      {stat.total}
                    </span>{" "}
                    Courses
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold text-purple-600">
                      {stat.totalpeople}
                    </span>{" "}
                    Students
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold text-purple-600">
                      {stat.creator}
                    </span>{" "}
                    {stat.creatorname}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data?.coreValues.map((value) => (
            <div
              key={value.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-blue-500 text-4xl mb-6">
                <i className={value.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {data?.ourTeam.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {data?.ourTeam.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data?.teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image || PLACEHOLDER_IMAGE}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">{member.title}</p>
                  <div className="text-sm text-gray-500">
                    <p>{member.place}</p>
                    <p>{member.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
