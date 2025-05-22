import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";

const typeDefs = gql`
  type MissionStatement {
    title: String!
    description: String!
  }

  type VisionStatement {
    title: String!
    description: String!
  }

  type Stat {
    id: String!
    year: String!
    title: String!
    total: Int!
    totalpeople: String!
    platforms: String!
    platformuser: String!
    creator: String!
    creatorname: String!
  }

  type CoreValue {
    id: String!
    icon: String!
    title: String!
    description: String!
  }

  type OurTeam {
    title: String!
    description: String!
  }

  type TeamMember {
    id: String!
    image: String!
    name: String!
    role: String!
    title: String!
    place: String!
    country: String!
  }

  type Query {
    missionStatement: MissionStatement!
    visionStatement: VisionStatement!
    stats: [Stat!]!
    coreValues: [CoreValue!]!
    ourTeam: OurTeam!
    teamMembers: [TeamMember!]!
  }
`;

const resolvers = {
  Query: {
    missionStatement: () => ({
      title: "Our Mission",
      description:
        "To revolutionize STEM education by creating an engaging, accessible, and innovative learning platform that empowers young minds to explore, create, and master technology through storytelling and hands-on experiences.",
    }),
    visionStatement: () => ({
      title: "Our Vision",
      description:
        "To be the leading global platform that bridges the gap between traditional education and modern technology, creating a generation of confident, skilled, and innovative tech leaders.",
    }),
    stats: () => [
      {
        id: "1",
        year: new Date().getFullYear(),
        title: "Growing Strong",
        total: 150,
        totalpeople: "10,000+",
        platforms: "3",
        platformuser: "Mobile, Web, Tablet",
        creator: "50+",
        creatorname: "Expert Instructors",
      },
      {
        id: "2",
        year: new Date().getFullYear() + 5,
        title: "Expanding Horizons",
        total: 200,
        totalpeople: "15,000+",
        platforms: "4",
        platformuser: "Mobile, Web, Tablet, VR",
        creator: "75+",
        creatorname: "Expert Instructors",
      },
      {
        id: "3",
        year: new Date().getFullYear() + 10,
        title: "Innovating Together",
        total: 250,
        totalpeople: "20,000+",
        platforms: "5",
        platformuser: "Mobile, Web, Tablet, VR, AR",
        creator: "100+",
        creatorname: "Expert Instructors",
      },
      {
        id: "4",
        year: new Date().getFullYear() + 15,
        title: "Transforming Education",
        total: 300,
        totalpeople: "25,000+",
        platforms: "6",
        platformuser: "Mobile, Web, Tablet, VR, AR, AI",
        creator: "150+",
        creatorname: "Expert Instructors",
      },
    ],
    coreValues: () => [
      {
        id: "1",
        icon: "fas fa-lightbulb",
        title: "Innovation in Learning",
        description:
          "We embrace creative teaching methods and cutting-edge technology to make learning engaging and effective.",
      },
      {
        id: "2",
        icon: "fas fa-users",
        title: "Inclusive Education",
        description:
          "We ensure our platform is accessible to all learners, regardless of their background or previous experience.",
      },
      {
        id: "3",
        icon: "fas fa-star",
        title: "Excellence Through Practice",
        description:
          "We believe in learning by doing, combining theory with practical applications for maximum impact.",
      },
      {
        id: "4",
        icon: "fas fa-globe",
        title: "Global Community",
        description:
          "We connect students and educators from around the world, fostering collaboration and cultural exchange.",
      },
      {
        id: "5",
        icon: "fas fa-heart",
        title: "Passion for Education",
        description:
          "We are driven by a love for teaching and learning, inspiring our students to reach their full potential.",
      },
      {
        id: "6",
        icon: "fas fa-users",
        title: "Diverse Perspectives",
        description:
          "We celebrate diversity and inclusion, valuing the unique experiences and backgrounds of our community.",
      },
    ],
    ourTeam: () => ({
      title: "Meet Our Expert Team",
      description:
        "Our diverse team of educators, technologists, and creative minds work together to deliver the best learning experience for our students.",
    }),
    teamMembers: () => [
      {
        id: "1",
        image: "/assets/images/walton.png",
        name: "Sarah Johnson",
        role: "Chief Education Officer",
        title: "Ed.D in Educational Technology",
        place: "San Francisco",
        country: "United States",
      },
      {
        id: "2",
        image: "/assets/images/walton.png",
        name: "walton Chen",
        role: "Head of Engineering",
        title: "MS in Computer Science",
        place: "Singapore",
        country: "Singapore",
      },
      {
        id: "3",
        image: "/assets/images/walton.png",
        name: "walton Chen",
        role: "Head of Engineering",
        title: "MS in Computer Science",
        place: "Singapore",
        country: "Singapore",
      },
      {
        id: "4",
        image: "/assets/images/walton.png",
        name: "walton Chen",
        role: "Head of Engineering",
        title: "MS in Computer Science",
        place: "Singapore",
        country: "Singapore",
      },
    ],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(server);
